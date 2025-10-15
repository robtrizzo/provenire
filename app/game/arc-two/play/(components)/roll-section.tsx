import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Dices, Cog, BookOpen } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { useRoll } from "@/contexts/arc2RollContext";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import GroupRollDialog from "./group-roll-dialog";
import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { GroupRollMember } from "@/types/roll";

type RollSection = FC & {
  RollSelect: FC;
  BonusDice: FC;
  BonusDiceInfo: FC;
  FortuneDice: FC;
  EmotionSection: FC;
  GroupRollSection: FC;
};

const RollSection = () => {
  const {
    isPrivate,
    setIsPrivate,
    rollLeft,
    rollRight,
    doRoll,
    connectionStatus,
  } = useRoll();

  return (
    <Card className="mt-4 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        {connectionStatus === "disconnected" ? (
          <TypographyP className="text-red-600 text-xs font-mono">
            Disconnected
          </TypographyP>
        ) : connectionStatus === "connecting" ? (
          <TypographyP className="text-amber-600 text-xs font-mono">
            Connecting...
          </TypographyP>
        ) : (
          <TypographyP className="text-emerald-600 text-xs font-mono">
            Connected
          </TypographyP>
        )}

        <GroupRollSection />

        <div className="flex items-center space-x-2">
          <Label htmlFor="private-rolls">Private</Label>
          <Switch
            id="private-rolls"
            checked={isPrivate}
            onCheckedChange={setIsPrivate}
          />
        </div>
      </div>
      <RollSelect />
      <div className="flex gap-4 mx-auto">
        <Button
          variant="destructive"
          onClick={async () => {
            doRoll("resist", rollLeft, rollRight);
          }}
        >
          <ShieldAlert /> Resist
        </Button>
        <Button
          onClick={async () => {
            doRoll("action", rollLeft, rollRight);
          }}
          className="flex items-center gap-2"
        >
          <Dices /> Action
        </Button>
        <Button
          variant="secondary"
          onClick={async () => {
            doRoll("project", rollLeft, rollRight);
          }}
        >
          <Cog /> Project
        </Button>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="flex gap-4">
          <BonusDiceSection />
          <div className="text-muted-foreground text-xs leading-3 mt-2">
            <span>
              You can gain bonus dice through:{" "}
              <ul className="italic mx-2">
                <li>teamwork</li>
                <li>push yourself</li>
                <li>devil&apos;s bargain</li>
                <li>special ability</li>
              </ul>
            </span>
          </div>
          <BonusDicePopover />
        </div>
        <div className="w-full flex justify-between items-end">
          <FortuneSection />
          <EmotionalSection />
        </div>
      </div>
    </Card>
  );
};

function FortuneSection({ disabled = false }: { disabled?: boolean }) {
  const { fortuneDice, setFortuneDice, handleFortuneRollButton } = useRoll();

  return (
    <div>
      <Label htmlFor="fortune-dice">Fortune Dice</Label>
      <div className="flex gap-4">
        <Input
          id="fortune-dice"
          type="number"
          className="w-20"
          min={0}
          value={fortuneDice}
          onChange={(e) => {
            setFortuneDice(parseInt(e.target.value));
          }}
          disabled={disabled}
        />
        <Button
          onClick={async () => {
            handleFortuneRollButton(fortuneDice);
          }}
          disabled={disabled}
        >
          Fortune Roll
        </Button>
      </div>
    </div>
  );
}

function BonusDicePopover() {
  return (
    <div className="text-muted-foreground text-xs leading-3 mt-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button size="icon" variant="outline">
            <BookOpen className="text-blue-500" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto">
          <TypographyP>
            There are a number of ways to gain bonus dice in <i>Provenire</i>.
            All bonus dice are blue, meaning they don&apos;t incur reduced
            effect if they&apos;re your highest roll.
          </TypographyP>
          <TypographyUnorderedList>
            <li>
              <b>Teamwork:</b> Another member of the crew marks <b>1 stress</b>{" "}
              and describes how they help you out. You add their <b>bond</b>{" "}
              with <b>you</b> to your roll.{" "}
              <i>
                Only one person can help you, otherwise it should be a group
                roll.
              </i>
            </li>
            <li>
              <b>Push yourself:</b> Describe how you dig deep to ensure success.
              Mark <b>2 stress</b> and get <b>1 bonus blue die</b>.{" "}
              <i>
                If you push yourself, you cannot also take a devil&apos;s
                bargain.
              </i>
            </li>
            <li>
              <b>Devil&apos;s Bargain:</b> The <b>Narrator</b> presents an
              interesting problem or consequence. Decide if you want to take the
              deal. If you do, get <b>1 bonus blue die</b>.{" "}
              <i>
                You may <b>resist</b> the consequences of the bargain if you
                want.
              </i>
            </li>
            <li>
              <b>Group Roll:</b> Ask if anyone else in the crew wants to make a
              roll with you. If they do, you decide who the leader is; the
              leader marks <b>1 xp</b>. Then everyone separately rolls their{" "}
              <b>bond</b> with the <b>leader</b> plus an action of their choice.
              The highest roll among the group is used as the result. For each
              member of the group that rolls a <b>1-3</b>, the leader marks{" "}
              <b>1 stress</b>. If the overall result has consequences, everyone
              suffers them.
            </li>
          </TypographyUnorderedList>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function RollSelect({ disabled = false }: { disabled?: boolean }) {
  const { rollLeft, rollRight, setRollLeft, setRollRight } = useRoll();

  const { actions, bonds } = useCharacterSheet();

  const enabledActions = actions.filter(
    (a) => a.type !== "codex" || a.subscriptionPaid
  );
  const leftActions = enabledActions.filter((a) => a.position === "left");
  const rightActions = enabledActions.filter((a) => a.position === "right");

  return (
    <div className="flex gap-4">
      <Select
        value={rollLeft?.name || ""}
        onValueChange={(value) => {
          const foundAction = leftActions.find((a) => a.name === value);
          const foundBond = bonds.find((b) => b.name === value);
          if (foundAction) {
            setRollLeft(foundAction);
            return;
          }
          if (foundBond) {
            setRollLeft(foundBond);
            return;
          }
          console.error("Could not find action or bond for value", value);
        }}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue>
            {rollLeft?.name || (
              <span className="text-muted-foreground">Select an action</span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {leftActions.map((la, i) => (
            <SelectItem key={la.name + i} value={la.name}>
              {la.name}
            </SelectItem>
          ))}
          <SelectSeparator />
          {bonds.map((b, i) => (
            <SelectItem key={b.name + i} value={b.name}>
              {b.name}
            </SelectItem>
          ))}
          <SelectSeparator />
          <Button
            variant="secondary"
            size="sm"
            className="w-full px-2"
            onClick={(e) => {
              e.stopPropagation();
              setRollLeft(undefined);
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
      <Select
        value={rollRight?.name || ""}
        onValueChange={(value) => {
          const foundAction = rightActions.find((a) => a.name === value);
          const foundBond = bonds.find((b) => b.name === value);
          if (foundAction) {
            setRollRight(foundAction);
            return;
          }
          if (foundBond) {
            setRollRight(foundBond);
            return;
          }
          console.error("Could not find action or bond for value", value);
        }}
        disabled={disabled}
      >
        <SelectTrigger>
          <SelectValue>
            {rollRight?.name || (
              <span className="text-muted-foreground">Select an action</span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {rightActions.map((la, i) => (
            <SelectItem key={la.name + i} value={la.name}>
              {la.name}
            </SelectItem>
          ))}
          <SelectSeparator />
          {bonds.map((b, i) => (
            <SelectItem key={b.name + i} value={b.name}>
              {b.name}
            </SelectItem>
          ))}
          <SelectSeparator />
          <Button
            variant="secondary"
            size="sm"
            className="w-full px-2"
            onClick={(e) => {
              e.stopPropagation();
              setRollRight(undefined);
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
    </div>
  );
}

function BonusDiceSection({ disabled = false }: { disabled?: boolean }) {
  const { bonusDiceRed, bonusDiceBlue, setBonusDiceRed, setBonusDiceBlue } =
    useRoll();

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="bonus-dice" className="text-center">
        Bonus Dice
      </Label>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center">
          <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
          <Input
            id="bonus-dice"
            type="number"
            className="w-20"
            min={0}
            value={bonusDiceRed}
            onChange={(e) => {
              setBonusDiceRed(parseInt(e.target.value));
            }}
            disabled={disabled}
          />
        </div>
        <div className="flex gap-2 items-center">
          <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
          <Input
            id="bonus-dice"
            type="number"
            className="w-20"
            min={0}
            value={bonusDiceBlue}
            onChange={(e) => {
              setBonusDiceBlue(parseInt(e.target.value));
            }}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

function EmotionalSection({ disabled = false }: { disabled?: boolean }) {
  const { isEmotional, setIsEmotional } = useRoll();

  return (
    <div className="flex gap-2 items-end">
      <Checkbox
        id="emotional"
        checked={isEmotional}
        onCheckedChange={(checked) => setIsEmotional(!!checked)}
        disabled={disabled}
      />
      <Label htmlFor="emotional">I&apos;m feeling emotional</Label>
    </div>
  );
}

function GroupRollSection() {
  const { groupRoll } = useRoll();

  const { name } = useCharacterSheet();

  const leader: GroupRollMember | undefined = groupRoll.find(
    (member) => member.leader
  );
  const otherMembers: GroupRollMember[] = groupRoll.filter(
    (member) => !member.leader
  );

  const isLeader = !!leader && leader.charName === name;

  return (
    <GroupRollDialog>
      <GroupRollDialog.LeaderSection leader={leader} />
      {isLeader ? (
        <GroupRollDialog.MemberRollSection member={leader} />
      ) : leader ? (
        <GroupRollDialog.MemberInfoSection member={leader} />
      ) : null}
      <Separator />
      {isLeader ? null : (
        <span className="italic text-center text-xs text-muted-foreground">
          One option must be your bond with the leader
        </span>
      )}
      {otherMembers.map((member, idx) => (
        <div key={member.charName + idx}>
          <i className="text-xs text-muted-foreground">
            <b>{member.charName || "Unnamed character"}</b>
          </i>
          {member.charName === name ? (
            <GroupRollDialog.MemberRollSection member={member} />
          ) : (
            <GroupRollDialog.MemberInfoSection member={member} />
          )}
        </div>
      ))}
      <Separator />
      <div className="flex justify-between items-center">
        <GroupRollDialog.JoinControl />

        {isLeader && <GroupRollDialog.RollControls />}
      </div>
    </GroupRollDialog>
  );
}

RollSection.RollSelect = RollSelect;
RollSection.BonusDice = BonusDiceSection;
RollSection.BonusDiceInfo = BonusDicePopover;
RollSection.FortuneDice = FortuneSection;
RollSection.EmotionSection = EmotionalSection;
RollSection.GroupRollSection = GroupRollSection;
export default RollSection;
