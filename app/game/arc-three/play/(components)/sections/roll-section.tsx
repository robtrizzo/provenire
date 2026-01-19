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
import { Die, DieVariant } from "@/types/dice";
import { ChevronsUpDown, Eye, EyeClosed } from "lucide-react";
import { FC, useState } from "react";
import { DieFace } from "../../../../../../components/dice/dice";
import AnimatedDie from "@/components/dice/animated-die";
import { cn } from "@/lib/utils";

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
  const {
    isPrivate,
    setIsPrivate,
    connectionStatus,
    dice,
    addDice,
    removeDiceByLabel,
  } = useRoll();

  const [showPreview, setShowPreview] = useState(false);

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

  const containsPushDie = dice.some((d) => d.variant === "push");

  const successStats = calculateEffectProbability(dice);
  console.log("successStats", successStats);
  const threatStats = calculateThreatProbability(dice);
  const advantageStats = calculateAdvantageProbability(dice);
  const critStats = calculateCritProbability(dice);

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
      <Button variant="secondary">Roll</Button>
      <Collapsible
        className="relative"
        open={showPreview}
        onOpenChange={setShowPreview}
      >
        <Separator />
        <div className="flex justify-center mt-4">
          <span className="uppercase text-xs text-muted-foreground">
            Preview
          </span>
        </div>
        <CollapsibleTrigger className="absolute top-1 right-0">
          <Button variant="ghost" size="icon">
            {showPreview ? <Eye /> : <EyeClosed />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex gap-1">
            {sortedDice().map((d, idx) => (
              <AnimatedDie die={d} key={idx} />
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
              {threatStats.threatCountDistribution.slice(1).map((tp, idx) => {
                const prob =
                  (tp / 100) * (threatStats.threatProbability / 100) * 100;
                return (
                  <span className={`text-red-${400 + idx * 100}`}>
                    {idx + 1} Threat{idx >= 1 ? "s" : ""}: {prob.toFixed(2)}%{" "}
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
      <Separator />
      <span className="text-center uppercase text-xs text-muted-foreground">
        Bonds
      </span>
      <Separator />
      <span className="text-center uppercase text-xs text-muted-foreground">
        Bonus Dice
      </span>
      <div className="grid grid-cols-2 gap-1">
        <Button
          variant="outline"
          className={cn(containsPushDie && "!border-emerald-600")}
          onClick={() => {
            if (containsPushDie) {
              removeDiceByLabel("push");
            } else {
              addDice([{ ...PushDie, label: "push" }]);
            }
          }}
        >
          <b className="uppercase text-emerald-600">Push</b>
        </Button>
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
    </Card>
  );
};

function RollSelect({ disabled = false }: { disabled?: boolean }) {
  const [rollLeft, setRollLeft] = useState<ActionV3>();
  const [rollRight, setRollRight] = useState<ActionV3>();

  const { swapDice } = useRoll();

  return (
    <div className="flex gap-4">
      <Select
        disabled={disabled}
        onValueChange={(value) => {
          const foundAction = testLeft.find((a) => a.name === value);
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
          {testLeft.map(({ name }) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        disabled={disabled}
        onValueChange={(value) => {
          const foundAction = testRight.find((a) => a.name === value);
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
          {testRight.map(({ name }) => (
            <SelectItem key={name} value={name}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default RollSection;
