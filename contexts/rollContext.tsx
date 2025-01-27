"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { Attribute } from "@/types/game";
import { blueHigher, Roll, RollResult, RollType } from "@/types/roll";
import { useMutation } from "@tanstack/react-query";
import { useCharacterSheet } from "./characterSheetContext";
import { Die } from "@/components/die";
import { cn } from "@/lib/utils";

interface RollContextProps {
  rollActions: (
    type: RollType,
    attribute1: Attribute,
    action1: string,
    attribute2?: Attribute | undefined,
    action2?: string | undefined
  ) => Promise<Roll>;
  rollDice: (type: RollType, numRed: number, numBlue: number) => Promise<Roll>;
  diceToast: (roll: Roll, action1?: string, action2?: string) => void;
  bonusDiceRed: number;
  bonusDiceBlue: number;
  fortuneDice: number;
  setBonusDiceRed: React.Dispatch<React.SetStateAction<number>>;
  setBonusDiceBlue: React.Dispatch<React.SetStateAction<number>>;
  setFortuneDice: React.Dispatch<React.SetStateAction<number>>;
}

const RollContext = createContext<RollContextProps | undefined>(undefined);

export const useRoll = () => {
  const context = useContext(RollContext);
  if (!context) {
    throw new Error("useRoll must be used within a RollProvider");
  }
  return context;
};

export default function RollProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  const { attributes } = useCharacterSheet();

  const [bonusDiceRed, setBonusDiceRed] = useState<number>(0);
  const [bonusDiceBlue, setBonusDiceBlue] = useState<number>(0);
  const [fortuneDice, setFortuneDice] = useState<number>(0);

  const { mutateAsync: saveDiceRoll, isPending } = useMutation({
    mutationFn: async (roll: Roll) => {
      const response = await fetch("/api/roll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(roll),
      });
      return response.json();
    },
    onError: (error) => {
      console.error("Failed to save roll", error);
      toast({
        title: "Error",
        description: "Failed to save roll history",
        variant: "destructive",
      });
    },
  });

  const rollDice = async (
    type: RollType,
    numRed: number,
    numBlue: number
  ): Promise<Roll> => {
    numRed += bonusDiceRed;
    numBlue += bonusDiceBlue;

    const roll: Roll = {
      type: type,
      numRed: numRed,
      numBlue: numBlue,
    } as Roll;

    roll.redDice = [];
    roll.blueDice = [];
    
    const takeLower = numRed + numBlue == 0;
    if (takeLower) {
      if (type === 'fortune') {
        numBlue = 2;
      } else {
        numRed = 2;
      }
    }
    for (let i = 0; i < numRed; i++) {
      roll.redDice.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < numBlue; i++) {
      roll.blueDice.push(Math.floor(Math.random() * 6) + 1);
    }

    const redSixes = roll.redDice.filter((r) => r === 6).length;
    const blueSixes = roll.blueDice.filter((r) => r === 6).length;
    if (redSixes + blueSixes >= 2) {
      roll.result = "crit";
      roll.effect = "improved";
      roll.resultDie = 6;
    } else {
      if (takeLower) {
        if (type == 'fortune') {
          roll.resultDie = Math.min(...roll.blueDice);
        } else {
          roll.resultDie = Math.min(...roll.redDice);
        }
        roll.effect = "reduced";
      } else {
        const bh = blueHigher(roll);
        roll.resultDie = bh ? Math.max(...roll.blueDice) : Math.max(...roll.redDice);
        roll.effect = bh ? "normal" : "reduced";
      }

      switch (roll.resultDie) {
        case 1:
        case 2:
        case 3:
          roll.result = "failure";
          break;
        case 4:
        case 5:
          roll.result = "partial";
          break;
        case 6:
          roll.result = "success";
          break;
      }
    }

    await saveDiceRoll(roll);
    return roll;
  };

  async function rollActions(
    type: RollType,
    attribute1: Attribute,
    action1: string,
    attribute2?: Attribute | undefined,
    action2?: string | undefined
  ): Promise<Roll> {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 =
      attribute2 && action2
        ? attributes?.[attribute2]?.[action2] || [0, 0]
        : [0, 0];
    const redRolls =
      score1.filter((r) => r === 1).length +
      score2.filter((r) => r === 1).length;
    const blueRolls =
      score1.filter((r) => r === 2).length +
      score2.filter((r) => r === 2).length;
    return await rollDice(type, redRolls, blueRolls);
  }

  function stressFromResist(roll: Roll): number {
    let stress: number;
    switch (roll.result) {
      case "failure":
        stress = blueHigher(roll) ? 2 : 3;
        break;
      case "partial":
        stress = blueHigher(roll) ? 1 : 2;
        break;
      case "success":
        stress = blueHigher(roll) ? 0 : 1;
        break;
      case "crit":
        stress = blueHigher(roll) ? -1 : 0;
        break;
    }
    return stress;
  }

  function ticksFromProject(roll: Roll): number[] {
    const ticks = [];
    switch (roll.result) {
      case "failure":
        ticks.push(0, 1, 1);
        break;
      case "partial":
        ticks.push(1, 2, 3);
        break;
      case "success":
        ticks.push(2, 3, 5);
        break;
      case "crit":
        ticks.push(3, 5, 7);
        break;
    }
    return ticks;
  }

  function resultsMessage(roll: Roll): string {
    const blueIsHigher = blueHigher(roll);
    let resultText = "";
    switch (roll.type) {
      case "resist":
        const stress = stressFromResist(roll);
        switch (stress) {
          case -1:
            resultText = "Crit! Clear 1 stress.";
            break;
          case 0:
            resultText = `${roll.result === "crit" ? "Crit! " : ""}Take no stress.`;
            break;
          default:
            resultText = `Take ${stress} stress.`;
            break;
        }
        break;
      case "project":
        switch (roll.result) {
          case "crit":
            resultText = `Crit! ${blueHigher(roll) ? "": "(but take reduced effect)"}`;
            break;
          case 'success':
            resultText = `Hit${blueHigher(roll) ? ".": ", and take reduced effect"}`;
            break;
          case "partial":
            resultText = `Partial hit${blueHigher(roll) ? ".": ", and take reduced effect"}`;
            break;
          case "failure":
            resultText = `Miss${blueHigher(roll) ? ".": ", and take reduced effect"}`;
            break;
        }
        break;
      default:
        switch (roll.result) {
          case "crit":
            resultText = "Crit! Succeed with improved effect.";
            break;
          case "failure":
            resultText = "Miss. Suffer the consequences.";
            break;
          case "partial":
            resultText = `Partial hit. Succeed, but suffer the consequences${
              roll.effect ? "" : " and take reduced effect"
            }.`;
            break;
          case "success":
            resultText = `Hit! Succeed${
              roll.effect ? "" : ", but take reduced effect"
            }.`;
            break;
        }
    }
    return resultText;
  }

  async function diceToast(
    roll: Roll,
    action1: string | undefined = undefined,
    action2: string | undefined = undefined
  ) {
    const resultText = resultsMessage(roll);

    let descNode: ReactNode;
    if (roll.type === 'project') {
      const ticks = ticksFromProject(roll);
      descNode = 
      <div className="mt-1">
        <span>{resultText}</span>
        <div className="flex items-center justify-center gap-2">
          <span className="text-center">
            <b>Limited:</b> {ticks[0]}
          </span>
          <span className="text-center">
            <b>Standard:</b> {ticks[1]}
          </span>
          <span className="text-center">
            <b>Great:</b> {ticks[2]}
          </span>
        </div>
      </div>
    } else {
      descNode = 
      <div className="mt-1">
        <span>{resultText}</span>
      </div>
    }

    // fortune doesn't have an action. Set the action to "Fortune" to make it simpler
    if (roll.type === 'fortune') {
      action1 = 'Fortune';
    }

    toast({
      variant: "grid",
      // @ts-ignore
      title: (
        <div className="flex items-center flex-wrap gap-1">
          <span className="mt-1">
            Rolled {action1}
            {action2 ? ` + ${action2}` : ""}
          </span>
          {roll.redDice.map((r, i) => (
            <Die key={i} roll={r} className="h-10 w-10 text-red-800" />
          ))}
          {roll.blueDice.map((r, i) => (
            <Die
              key={i}
              roll={r}
              className={`h-10 w-10 ${
                roll.type === "fortune" ? "" : "text-blue-800"
              }`}
            />
          ))}
        </div>
      ),
      description: (
        <div className="flex items-center gap-4">
          {roll.result === "crit" ? (
            [
              roll.redDice
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-red-400" />
                )),
              roll.blueDice
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die
                    key={i}
                    roll={r}
                    className={`h-10 w-10 ${
                      roll.type === "fortune" ? "" : "text-blue-800"
                    }`}
                  />
                )),
            ]
          ) : (
            <Die
              roll={roll.resultDie}
              className={cn(
                "h-10 w-10",
                blueHigher(roll)
                  ? `h-10 w-10 ${
                      roll.type === "fortune" ? "" : "text-blue-800"
                    }`
                  : "text-red-400"
              )}
            />
          )}
          {descNode}
        </div>
      ),
    });
  }

  return (
    <RollContext.Provider
      value={{
        diceToast,
        bonusDiceRed,
        bonusDiceBlue,
        fortuneDice,
        rollActions,
        rollDice,
        setBonusDiceRed,
        setBonusDiceBlue,
        setFortuneDice,
      }}
    >
      {children}
    </RollContext.Provider>
  );
}
