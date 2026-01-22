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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { TypographyP } from "@/components/ui/typography";
import { useRoll } from "@/contexts/arc3RollContext";
import {
  AbilityDice,
  calculateAdvantageProbability,
  calculateCritProbability,
  calculateEffectProbability,
  calculateThreatProbability,
  PushDie,
  SkillDice,
} from "@/lib/dice";
import { ActionV3 } from "@/types/arc3";
import type { DieVariant } from "@/types/dice";
import {
  ChevronsUpDown,
  Eye,
  EyeClosed,
  MousePointer2,
  MousePointerClick,
  X,
} from "lucide-react";
import { FC, useState } from "react";
import { Die, DieFace } from "../../../../../../components/dice/dice";
import AnimatedDie from "@/components/dice/animated-die";
import { cn } from "@/lib/utils";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const testLeft: ActionV3[] = [
  {
    name: "Charge",
    level: [1],
    type: "ability",
  },
  {
    name: "Defy",
    level: [0],
    type: "ability",
  },
  {
    name: "Wreck",
    level: [2, 0],
    type: "ability",
  },
];

const testRight: ActionV3[] = [
  {
    name: "Acrobatics",
    level: [1, 1],
    type: "skill",
  },
  {
    name: "Bluster",
    level: [1],
    type: "skill",
  },
  {
    name: "Thoatgore",
    level: [3],
    type: "skill",
  },
];

type RollSection = FC & {};

const RollSection = () => {
  const { isPrivate, setIsPrivate, connectionStatus, doRoll } = useRoll();

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
        </div>
      </div>
      <RollSelect />
      <Button variant="secondary" onClick={() => doRoll()}>
        Roll
      </Button>
      <DetailsSection />
      <Separator />
      <span className="text-center uppercase text-xs text-muted-foreground">
        Bonds
      </span>
      <BondDiceSection />
      <Separator />
      <BonusDiceSection />
    </Card>
  );
};

function RollSelect({ disabled = false }: { disabled?: boolean }) {
  const { rollLeft, rollRight, swapDice, setRollLeft, setRollRight } =
    useRoll();
  const { abilities, skills } = useCharacterSheet();

  return (
    <div className="flex gap-4">
      <Select
        value={rollLeft?.name || ""}
        disabled={disabled}
        onValueChange={(value) => {
          const foundAction = abilities.find((a) => a.name === value);
          if (!foundAction) {
            console.error("Could not find action or bond for value", value);
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
          {abilities.map(({ name }, idx) => (
            <SelectItem key={name + idx} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={rollRight?.name || ""}
        disabled={disabled}
        onValueChange={(value) => {
          const foundAction = skills.find((a) => a.name === value);
          if (!foundAction) {
            console.error("Could not find action or bond for value", value);
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
        </SelectContent>
      </Select>
    </div>
  );
}

function DetailsSection() {
  const { dice } = useRoll();

  const [showDetails, setShowDetails] = useState(false);

  const sortedDice = () => {
    // Define the order for each type
    const typeOrder: Record<DieVariant, number> = {
      ability: 0,
      skill: 1,
      bond: 2,
      push: 3,
      default: 0,
      emotion: 0,
    };

    // If your dice have a 'type' or 'variant' property, adjust accordingly
    return [...dice].sort((a, b) => {
      // Use 'variant' or 'type' as appropriate for your dice objects
      const aType = typeOrder[a.variant] ?? 99;
      const bType = typeOrder[b.variant] ?? 99;
      return aType - bType;
    });
  };

  const successStats = calculateEffectProbability(dice);
  const threatStats = calculateThreatProbability(dice);
  const advantageStats = calculateAdvantageProbability(dice);
  const critStats = calculateCritProbability(dice);

  return (
    <Collapsible
      className="relative"
      open={showDetails}
      onOpenChange={setShowDetails}
    >
      <Separator />
      <div className="flex justify-center mt-4">
        <span className="uppercase text-xs text-muted-foreground">Details</span>
      </div>
      <CollapsibleTrigger className="absolute top-1 right-0" asChild>
        <Button variant="ghost" size="icon">
          {showDetails ? <Eye /> : <EyeClosed />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-2 flex flex-col gap-1">
          {sortedDice().map((d, idx) => (
            <div className="mx-auto" key={idx + (d.label || "")}>
              <Die die={d} size={64} />
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-col text-sm gap-1">
          <code className="text-sky-600 font-bold">
            Success: {successStats.anyEffectProbability.toFixed(2)}%{" | "}
            <span className="text-sky-700">
              Reduced: {successStats.reducedEffectProbability.toFixed(2)}%
            </span>{" "}
            <span className="text-sky-500">
              Standard: {successStats.standardEffectProbability.toFixed(2)}%
            </span>{" "}
            <span className="text-sky-300">
              Enhanced: {successStats.enhancedEffectProbability.toFixed(2)}%
            </span>
          </code>
          <code className="text-red-600 font-bold">
            Threat: {threatStats.threatProbability.toFixed(2)}%{" | "}
            {threatStats.threatCountDistribution.map((tp, idx) => {
              const colorValue = Math.min(400 + idx * 100, 900);
              const color = `text-red-${colorValue}`;
              return (
                <span className={color}>
                  {idx} Threat{idx !== 1 ? "s" : ""}: {tp.toFixed(2)}%{" "}
                </span>
              );
            })}
          </code>
          <code className="text-yellow-600 font-bold">
            Advantage: {advantageStats.advantageProbability.toFixed(2)}%
          </code>
          <code className="text-emerald-600 font-bold">
            Crit: {critStats.critProbability.toFixed(2)}%
          </code>
        </div>
      </CollapsibleContent>
    </Collapsible>
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
    <div className="grid grid-cols-3">
      {bonds.map((b, idx) => (
        <div
          key={b + idx}
          className="group col-span-1 flex justify-center border-sky-600/50 hover:bg-sky-600/10 hover:cursor-pointer border-[1px] rounded-sm"
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
  );
}

function BonusDiceSection() {
  const { dice, addDice, removeDieByLabel } = useRoll();

  const numPushDie = dice.reduce(
    (acc, d) => (d.variant === "push" ? acc + 1 : acc),
    0,
  );
  const containsPushDie = numPushDie > 0;

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
                containsPushDie && "!border-emerald-600",
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
          <TooltipContent className="flex flex-col items-start gap-1">
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
        <Button variant="outline" disabled>
          {" "}
          <b className="uppercase text-orange-600">Transformation</b>
        </Button>
        <Button variant="outline" disabled>
          {" "}
          <b className="uppercase text-red-600">Aldam</b>
        </Button>
        <Button variant="outline" disabled>
          {" "}
          <b className="uppercase text-fuchsia-600">Donum</b>
        </Button>
      </div>
    </>
  );
}

export default RollSection;
