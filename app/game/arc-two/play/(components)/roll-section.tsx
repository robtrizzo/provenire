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
import { TypographyP } from "@/components/ui/typography";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Dices, Cog } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { useRoll } from "@/contexts/arc2RollContext";
import { Checkbox } from "@/components/ui/checkbox";

export default function RollSection() {
  const {
    isPrivate,
    setIsPrivate,
    rollLeft,
    rollRight,
    setRollLeft,
    setRollRight,
    bonusDiceRed,
    bonusDiceBlue,
    fortuneDice,
    setBonusDiceRed,
    setBonusDiceBlue,
    setFortuneDice,
    isEmotional,
    setIsEmotional,
    handleFortuneRollButton,
    doRoll,
  } = useRoll();

  const { actions } = useCharacterSheet();

  const enabledActions = actions.filter(
    (a) => a.type !== "codex" || a.subscriptionPaid
  );
  const leftActions = enabledActions.filter((a) => a.position === "left");
  const rightActions = enabledActions.filter((a) => a.position === "right");

  return (
    <Card className="mt-4 p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <TypographyP className="text-muted-foreground text-xs">
          select two skills to roll or shift+click a skill to roll it
        </TypographyP>
        <div className="flex items-center space-x-2">
          <Label htmlFor="private-rolls">Private</Label>
          <Switch
            id="private-rolls"
            checked={isPrivate}
            onCheckedChange={setIsPrivate}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <Select
          value={rollLeft?.name || ""}
          onValueChange={(value) => {
            const foundAction = leftActions.find((a) => a.name === value);
            setRollLeft(foundAction);
          }}
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
            setRollRight(foundAction);
          }}
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
                />
              </div>
            </div>
          </div>
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
        </div>
        <div className="w-full flex justify-between items-end">
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
              />
              <Button
                onClick={async () => {
                  handleFortuneRollButton(fortuneDice);
                }}
              >
                Fortune Roll
              </Button>
            </div>
          </div>
          <div className="flex gap-2 items-end">
            <Checkbox
              id="emotional"
              checked={isEmotional}
              onCheckedChange={(checked) => setIsEmotional(!!checked)}
            />
            <Label htmlFor="emotional">I&apos;m feeling emotional</Label>
          </div>
        </div>
      </div>
    </Card>
  );
}
