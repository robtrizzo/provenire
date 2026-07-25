import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { TypographyP } from "@/components/ui/typography";
import { useRoll } from "@/contexts/arc3RollContext";
import {
  AldamDie,
  DonumDie,
  FortuneDice,
  PushDie,
  TransformationDie,
} from "@/lib/dice";
import {
  Clover,
  Dices,
  Eye,
  EyeClosed,
  Minus,
  MousePointer2,
  MousePointerClick,
  Plus,
  X,
} from "lucide-react";
import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import DiceDialog from "../dialogs/dice-dialog";

type RollSection = FC & {};

const RollSection = () => {
  const {
    isPrivate,
    setIsPrivate,
    connectionStatus,
    doRoll,
    setRollLeft,
    setRollRight,
    setDice,
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

        {/* <GroupRollSection /> */}

        <div className="flex items-center space-x-2">
          <Label htmlFor="private-rolls">Private</Label>
          <Switch
            id="private-rolls"
            checked={isPrivate}
            onCheckedChange={setIsPrivate}
          />
          <div className="ml-4">
            <DiceDialog />
          </div>
        </div>
      </div>
      <RollSelect />
      <div className="w-full grid grid-cols-4 gap-2">
        <Button
          variant="secondary"
          onClick={() => doRoll()}
          className="col-span-3"
        >
          <Dices /> Roll
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setDice([]);
            setRollLeft(undefined);
            setRollRight(undefined);
          }}
        >
          <X /> Clear
        </Button>
      </div>
      <BonusDiceSection />
      <Separator />
      <BondDiceSection />
    </Card>
  );
};

function RollSelect({ disabled = false }: { disabled?: boolean }) {
  const { rollLeft, rollRight, swapDice, setRollLeft, setRollRight } =
    useRoll();
  const { aptitudes, skills, fightingStyles } = useCharacterSheet();

  return (
    <div className="flex gap-4">
      <Select
        value={rollLeft?.name || ""}
        disabled={disabled}
        onValueChange={(value) => {
          const foundAction =
            aptitudes.find((a) => a.name === value) ??
            fightingStyles.find((a) => a.name === value);
          if (!foundAction) {
            console.error("Could not find action for value", value);
            return;
          }
          const prevAction = rollLeft;
          setRollLeft(foundAction);
          swapDice(prevAction, foundAction);
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
          {aptitudes.map(({ name }, idx) => (
            <SelectItem key={name + idx} value={name}>
              {name}
            </SelectItem>
          ))}
          <SelectSeparator />
          {fightingStyles.map(({ name }, idx) => (
            <SelectItem
              key={name + idx}
              value={name}
              disabled={rollRight?.name === name}
            >
              {name}
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
        disabled={disabled}
        onValueChange={(value) => {
          const foundAction =
            skills.find((a) => a.name === value) ??
            fightingStyles.find((a) => a.name === value);
          if (!foundAction) {
            console.error("Could not find action for value", value);
            return;
          }
          const prevAction = rollRight;
          setRollRight(foundAction);
          swapDice(prevAction, foundAction);
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
          {skills.map(({ name }, idx) => (
            <SelectItem key={name + idx} value={name}>
              {name}
            </SelectItem>
          ))}
          <SelectSeparator />
          {fightingStyles.map(({ name }, idx) => (
            <SelectItem
              key={name + idx}
              value={name}
              disabled={rollLeft?.name === name}
            >
              {name}
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

function BondDiceSection() {
  const { dice, removeDiceByLabel } = useRoll();
  const bonds = dice.reduce(
    (acc: string[], d) =>
      d.variant === "bond" && !!d.label ? [...acc, d.label] : acc,
    [],
  );
  return (
    <>
      <span className="text-center uppercase text-xs text-muted-foreground">
        Bonds
      </span>
      {bonds.length > 0 && (
        <div className="grid grid-cols-3 gap-1">
          {bonds.map((b, idx) => (
            <div
              key={b + idx}
              className="group col-span-1 flex justify-center border-sky-600/50 hover:bg-sky-600/10 hover:cursor-pointer border rounded-sm"
              onClick={() => {
                removeDiceByLabel(b);
              }}
            >
              <span className="text-sky-500 group-hover:line-through group-hover:text-red-600 transition-all duration-200">
                {b}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function BonusDiceSection() {
  const { dice, addDice, removeDieByLabel } = useRoll();

  const numPushDie = dice.reduce(
    (acc, d) => (d.variant === "push" ? acc + 1 : acc),
    0,
  );
  const containsPushDie = numPushDie > 0;
  const numDonumDie = dice.reduce(
    (acc, d) => (d.variant === "donum" ? acc + 1 : acc),
    0,
  );
  const containsDonumDie = numDonumDie > 0;
  const numAldamDie = dice.reduce(
    (acc, d) => (d.variant === "aldam" ? acc + 1 : acc),
    0,
  );
  const containsAldamDie = numAldamDie > 0;
  const numTransformationDie = dice.reduce(
    (acc, d) => (d.variant === "transformation" ? acc + 1 : acc),
    0,
  );
  const containsTransformationDie = numTransformationDie > 0;
  const numFortuneDie = dice.reduce(
    (acc, d) => (d.variant === "fortune" ? acc + 1 : acc),
    0,
  );
  const containsFortuneDie = numFortuneDie > 0;

  return (
    <>
      <span className="text-center uppercase text-xs text-muted-foreground">
        Bonus Dice
      </span>
      <div className="grid grid-cols-2 gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                containsPushDie && "border-emerald-600!",
                "flex items-center justify-center",
              )}
              onClick={() => {
                addDice([{ ...PushDie, label: "push" }]);
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                removeDieByLabel("push");
              }}
            >
              <b className="uppercase text-emerald-600 h-4">Push</b>{" "}
              <div className="rounded-full bg-emerald-600 text-white dark:text-black font-extrabold w-4 h-4 flex items-center justify-center">
                <code>{numPushDie}</code>
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex flex-col items-start gap-1 border-border border">
            <span className="flex items-center gap-1">
              <MousePointerClick size={16} className="text-emerald-600" />
              <b>Left-click</b> to <span className="text-emerald-600">add</span>
            </span>
            <span className="flex items-center gap-1">
              <MousePointer2 size={16} className="text-red-600" />
              <b>Right-click</b> to <span className="text-red-600">remove</span>
            </span>
          </TooltipContent>
        </Tooltip>
        <Button
          variant="outline"
          className={cn(
            containsAldamDie && "border-red-600!",
            "flex items-center justify-center",
          )}
          onClick={() => {
            addDice([{ ...AldamDie, label: "aldam" }]);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            removeDieByLabel("aldam");
          }}
        >
          <b className="uppercase text-red-600">Aldam</b>
          <div className="rounded-full bg-red-600 text-white dark:text-black font-extrabold w-4 h-4 flex items-center justify-center">
            <code>{numAldamDie}</code>
          </div>
        </Button>
        <Button
          variant="outline"
          className={cn(
            containsTransformationDie && "border-orange-600!",
            "flex items-center justify-center",
          )}
          onClick={() => {
            addDice([{ ...TransformationDie, label: "aldam" }]);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            removeDieByLabel("aldam");
          }}
        >
          <b className="uppercase text-orange-600">Transformation</b>
          <div className="rounded-full bg-orange-600 text-white dark:text-black font-extrabold w-4 h-4 flex items-center justify-center">
            <code>{numTransformationDie}</code>
          </div>
        </Button>
        <Button
          variant="outline"
          className={cn(
            containsDonumDie && "border-fuchsia-600!",
            "flex items-center justify-center",
          )}
          onClick={() => {
            addDice([{ ...DonumDie, label: "donum" }]);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            removeDieByLabel("donum");
          }}
        >
          <b className="uppercase text-fuchsia-600">Donum</b>
          <div className="rounded-full bg-fuchsia-600 text-white dark:text-black font-extrabold w-4 h-4 flex items-center justify-center">
            <code>{numDonumDie}</code>
          </div>
        </Button>
        <Button
          variant="outline"
          className={cn(
            containsFortuneDie && "border-slate-600!",
            "flex items-center justify-center",
          )}
          onClick={() => {
            addDice([{ ...FortuneDice[1], label: "fortune", level: 1 }]);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            removeDieByLabel("fortune-1");
          }}
        >
          <b className="uppercase text-slate-600">Fortune</b>
          <div className="rounded-full bg-slate-600 text-white dark:text-black font-extrabold w-4 h-4 flex items-center justify-center">
            <code>{numFortuneDie}</code>
          </div>
        </Button>
      </div>
    </>
  );
}

export default RollSection;
