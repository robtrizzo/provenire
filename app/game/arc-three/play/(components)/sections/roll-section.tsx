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
  calculateAdvantageProbability,
  calculateCritProbability,
  calculateEffectProbability,
  calculateThreatProbability,
  FortuneDice,
  PushDie,
} from "@/lib/dice";
import type { DieVariant } from "@/types/dice";
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
import { Die } from "../../../../../../components/dice/dice";
import { cn } from "@/lib/utils";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

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
      <BondDiceSection />
      <Separator />
      <BonusDiceSection />
      <Separator />
      <FortuneSection />
      <DetailsSection />
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
      fortune: 0,
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
    <>
      <span className="text-center uppercase text-xs text-muted-foreground">
        Bonds
      </span>
      {bonds.length > 0 && (
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
          <TooltipContent className="flex flex-col items-start gap-1 border-border border-[1px]">
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

function FortuneSection() {
  const { doRoll } = useRoll();

  const [showFortune, setShowFortune] = useState(false);
  const [fortuneDice, setFortuneDice] = useState(0);

  const handleFortuneRoll = () => {
    const dice =
      fortuneDice === 0
        ? [{ ...FortuneDice[0], label: "fortune" }]
        : Array.from({ length: fortuneDice }, (_, i) => ({
            ...FortuneDice[1],
            label: `fortune-${i + 1}`,
          }));
    doRoll(dice);
    setFortuneDice(0);
  };

  return (
    <Collapsible
      className="relative"
      open={showFortune}
      onOpenChange={setShowFortune}
    >
      <div className="flex justify-center">
        <span className="uppercase text-xs text-muted-foreground">Fortune</span>
      </div>
      <CollapsibleTrigger className="absolute top-[-12px] right-0" asChild>
        <Button variant="ghost" size="icon">
          {showFortune ? <Eye /> : <EyeClosed />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex items-center justify-center gap-1">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setFortuneDice(Math.max(0, fortuneDice - 1));
            }}
          >
            <Minus />
          </Button>
          <Input
            type="number"
            className="w-18"
            value={fortuneDice}
            onChange={(e) => {
              e.preventDefault();
              setFortuneDice(parseInt(e.target.value));
            }}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setFortuneDice(fortuneDice + 1);
            }}
          >
            <Plus />
          </Button>
          <Button variant="secondary" onClick={handleFortuneRoll}>
            <Clover /> Roll
          </Button>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default RollSection;
