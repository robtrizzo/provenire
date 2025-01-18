"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { Die } from "@/components/die";
import { cn } from "@/lib/utils";
import { useCharacterSheet } from "./characterSheetContext";
import { Attribute } from "@/types/game";

interface RollContextProps {
  rollAction: (attribute: Attribute, action: string) => void;
  rollCombo: (action1: string, action2: string, dice: number[]) => void;
  rollResist: (action1: string, action2: string, dice: number[]) => void;
  rollComboMission: (
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute,
    action2: string
  ) => void;
  rollResistMission: (
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute,
    action2: string
  ) => void;
  rollProject: (
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute,
    action2: string
  ) => void;
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

  function rollAction(attribute: Attribute, action: string) {
    const score = attributes[attribute][action];
    const [a, b] = score || [0, 0];

    rollCombo(action, "", [a, b]);
  }

  const rollCombo = (action1: string, action2: string, dice: number[]) => {
    for (let i = 0; i < bonusDiceRed; i++) {
      dice.push(1);
    }
    for (let i = 0; i < bonusDiceBlue; i++) {
      dice.push(2);
    }
    if (dice.reduce((acc, s) => acc + s, 0) === 0) {
      // roll 2d6 and take the lowest
      let r1 = Math.floor(Math.random() * 6) + 1;
      let r2 = Math.floor(Math.random() * 6) + 1;
      const result = Math.min(r1, r2);
      let resultText = "";
      switch (result) {
        case 1:
        case 2:
        case 3:
          resultText = "Miss. Suffer the consequences.";
          break;
        case 4:
        case 5:
          resultText =
            "Partial hit. Succeed, but suffer the consequences and take reduced effect.";
          break;
        case 6:
          resultText = "Hit! Succeed, but take reduced effect.";
          break;
        default:
          resultText = "Unknown result";
          break;
      }
      toast({
        variant: "grid",
        // @ts-ignore
        title: (
          <div className="flex items-center gap-1">
            <span className="mt-1">
              Rolled {action1} + {action2}
            </span>
            <Die roll={r1} className="h-10 w-10" />
            <Die roll={r2} className="h-10 w-10" />
          </div>
        ),
        description: (
          <div className="flex gap-4 items-center">
            <Die roll={result} className="h-10 w-10" />
            <span className="mt-1">{resultText}</span>
          </div>
        ),
      });
      return;
    }
    let red = dice.reduce((acc, s) => (s === 1 ? acc + 1 : acc), 0);
    let blue = dice.reduce((acc, s) => (s === 2 ? acc + 1 : acc), 0);
    let redRolls = [];
    let blueRolls = [];
    for (let i = 0; i < red; i++) {
      redRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < blue; i++) {
      blueRolls.push(Math.floor(Math.random() * 6) + 1);
    }

    let result: number;
    let resultText = "";
    let highestRed = Math.max(...redRolls);
    let highestBlue = Math.max(...blueRolls);
    const blueHigher = highestBlue >= highestRed;

    // detect if there are 2 or more 6s
    let crit = false;
    const redSixes = redRolls.filter((r) => r === 6).length;
    const blueSixes = blueRolls.filter((r) => r === 6).length;
    if (redSixes + blueSixes >= 2) {
      crit = true;
      result = 6;
      resultText = "Critical! Succeed with improved effect.";
    } else {
      result = Math.max(highestBlue, highestRed);

      switch (result) {
        case 1:
        case 2:
        case 3:
          resultText = "Miss. Suffer the consequences.";
          break;
        case 4:
        case 5:
          resultText = `Partial hit. Suceed, but suffer the consequences${
            blueHigher ? "" : " and take reduced effect"
          }.`;
          break;
        case 6:
          resultText = `Hit! Succeed${
            blueHigher ? "" : ", but take reduced effect"
          }.`;
          break;
        default:
          resultText = "Unknown result";
          break;
      }
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
          {redRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
          ))}
          {blueRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-blue-800" />
          ))}
        </div>
      ),
      description: (
        <div className="flex items-center gap-4">
          {crit ? (
            [
              redRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-red-400" />
                )),
              blueRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-blue-400" />
                )),
            ]
          ) : (
            <Die
              roll={result}
              className={cn(
                "h-10 w-10",
                blueHigher ? "text-blue-400" : "text-red-400"
              )}
            />
          )}
          <span className="mt-1">{resultText}</span>
        </div>
      ),
    });
  };

  const rollResist = (action1: string, action2: string, dice: number[]) => {
    for (let i = 0; i < bonusDiceRed; i++) {
      dice.push(1);
    }
    for (let i = 0; i < bonusDiceBlue; i++) {
      dice.push(2);
    }
    if (dice.reduce((acc, s) => acc + s, 0) === 0) {
      // roll 2d6 and take the lowest
      let r1 = Math.floor(Math.random() * 6) + 1;
      let r2 = Math.floor(Math.random() * 6) + 1;
      const result = Math.min(r1, r2);
      let stress: number;
      switch (result) {
        case 1:
        case 2:
        case 3:
          stress = 3;
          break;
        case 4:
        case 5:
          stress = 2;
          break;
        case 6:
          stress = 1;
          break;
        default:
          stress = 3;
          break;
      }
      toast({
        variant: "grid",
        // @ts-ignore
        title: (
          <div className="flex items-center gap-1">
            <span className="mt-1">
              Rolled {action1} + {action2}
            </span>
            <Die roll={r1} className="h-10 w-10" />
            <Die roll={r2} className="h-10 w-10" />
          </div>
        ),
        description: (
          <div className="flex gap-4 items-center">
            <Die roll={result} className="h-10 w-10" />
            <span className="mt-1">{`Take ${stress} stress.`}</span>
          </div>
        ),
      });
      return;
    }
    let red = dice.reduce((acc, s) => (s === 1 ? acc + 1 : acc), 0);
    let blue = dice.reduce((acc, s) => (s === 2 ? acc + 1 : acc), 0);
    let redRolls = [];
    let blueRolls = [];
    for (let i = 0; i < red; i++) {
      redRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < blue; i++) {
      blueRolls.push(Math.floor(Math.random() * 6) + 1);
    }

    let result: number;
    let resultText: string;
    // detect if there are 2 or more 6s
    let redcrit = false;
    let bluecrit = false;
    const redSixes = redRolls.filter((r) => r === 6).length;
    const blueSixes = blueRolls.filter((r) => r === 6).length;
    let highestRed = Math.max(...redRolls);
    let highestBlue = Math.max(...blueRolls);
    const blueHigher = highestBlue >= highestRed;
    if (blueSixes >= 2) {
      bluecrit = true;
      resultText = "Crit! Clear 1 stress.";
    } else if (blueSixes + redSixes >= 2) {
      redcrit = true;
      resultText = "Crit! Take no stress.";
    } else {
      result = blueHigher ? highestBlue : highestRed;
      let stress: number;
      switch (result) {
        case 1:
        case 2:
        case 3:
          stress = blueHigher ? 2 : 3;
          break;
        case 4:
        case 5:
          stress = blueHigher ? 1 : 2;
          break;
        case 6:
          if (bluecrit) {
            stress = -1;
          } else if (redcrit || blueHigher) {
            stress = 0;
          } else {
            stress = 1;
          }
          break;
        default:
          stress = 3;
          break;
      }
      resultText = `Take ${stress} stress.`;
    }
    toast({
      variant: "grid",
      // @ts-ignore
      title: (
        <div className="flex items-center gap-1">
          <span className="mt-1">
            Resisted with {action1} + {action2}
          </span>
          {redRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-red-800" />
          ))}
          {blueRolls.map((r, i) => (
            <Die key={i} roll={r} className="h-8 w-8 text-blue-800" />
          ))}
        </div>
      ),
      description: (
        <div className="flex items-center gap-4">
          {redcrit || bluecrit ? (
            [
              redRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-red-400" />
                )),
              blueRolls
                .filter((r) => r === 6)
                .map((r, i) => (
                  <Die key={i} roll={r} className="h-10 w-10 text-blue-400" />
                )),
            ]
          ) : (
            <Die
              roll={blueHigher ? highestBlue : highestRed}
              className={cn(
                "h-10 w-10",
                blueHigher ? "text-blue-400" : "text-red-400"
              )}
            />
          )}
          <span className="mt-1">{resultText}</span>
        </div>
      ),
    });
  };

  function rollComboMission(
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute,
    action2: string
  ) {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 = attributes?.[attribute2]?.[action2] || [0, 0];
    rollCombo(action1, action2, [...score1, ...score2]);
  }

  function rollResistMission(
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute,
    action2: string
  ) {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 = attributes?.[attribute2]?.[action2] || [0, 0];
    rollResist(action1, action2, [...score1, ...score2]);
  }

  function rollProject(
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute,
    action2: string
  ) {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 = attributes?.[attribute2]?.[action2] || [0, 0];
    let dice = [...score1, ...score2];
    for (let i = 0; i < bonusDiceRed; i++) {
      dice.push(1);
    }
    for (let i = 0; i < bonusDiceBlue; i++) {
      dice.push(2);
    }
    let rolls = [];
    let result: number;
    let redcrit = false;
    let bluecrit = false;
    let blueHigher = false;
    if (dice.reduce((acc, s) => acc + s, 0) === 0) {
      // roll 2d6 and take the lowest
      let r1 = Math.floor(Math.random() * 6) + 1;
      rolls.push({ val: r1, element: <Die roll={r1} className="h-10 w-10" /> });
      let r2 = Math.floor(Math.random() * 6) + 1;
      rolls.push({ val: r2, element: <Die roll={r2} className="h-10 w-10" /> });
      result = Math.min(r1, r2);
    } else {
      let red = dice.reduce((acc, s) => (s === 1 ? acc + 1 : acc), 0);
      let blue = dice.reduce((acc, s) => (s === 2 ? acc + 1 : acc), 0);
      let redRolls = [];
      let blueRolls = [];
      for (let i = 0; i < red; i++) {
        let r = Math.floor(Math.random() * 6) + 1;
        redRolls.push(r);
        rolls.push({
          val: r,
          element: <Die roll={r} className="h-10 w-10 text-red-400" />,
        });
      }
      for (let i = 0; i < blue; i++) {
        let r = Math.floor(Math.random() * 6) + 1;
        blueRolls.push(r);
        rolls.push({
          val: r,
          element: <Die roll={r} className="h-10 w-10 text-blue-400" />,
        });
      }
      const redSixes = redRolls.filter((r) => r === 6).length;
      const blueSixes = blueRolls.filter((r) => r === 6).length;

      if (blueSixes >= 2) {
        bluecrit = true;
      } else if (blueSixes + redSixes >= 2) {
        redcrit = true;
      }
      let highestRed = Math.max(...redRolls);
      let highestBlue = Math.max(...blueRolls);
      blueHigher = highestBlue >= highestRed;
      result = blueHigher ? highestBlue : highestRed;
    }

    // seven cases for results: 1-3, 4|5(r/b), 6(r/b), crit(r/b)
    let text;
    let ticks: number[] = [];
    if (bluecrit) {
      text = "Crit!";
      ticks = [3, 5, 7];
    } else if (redcrit) {
      text = "Crit! (but take reduced effect)";
      ticks = [3, 5, 7];
    } else {
      switch (result) {
        case 1:
        case 2:
        case 3:
          if (blueHigher) {
            text = "Miss.";
          } else {
            text = "Miss, and take reduced effect.";
          }
          ticks = [0, 1, 1];
          break;
        case 4:
        case 5:
          if (blueHigher) {
            text = "Partial hit.";
          } else {
            text = "Partial hit, and take reduced effect";
          }
          ticks = [1, 2, 3];
          break;
        case 6:
          if (blueHigher) {
            text = "Hit.";
          } else {
            text = "Hit, and take reduced effect.";
          }
          ticks = [2, 3, 5];
          break;
        default:
          break;
      }
    }

    toast({
      variant: "grid",
      // @ts-ignore
      title: (
        <div className="flex items-center gap-1 flex-wrap">
          <span className="mt-1">
            Project roll with {action1} + {action2}
          </span>
          {rolls.map((r) => r.element)}
        </div>
      ),
      description: (
        <div className="flex items-center gap-4 flex-wrap">
          {redcrit || bluecrit ? (
            [rolls.filter((r) => r.val === 6).map((r) => r.element)]
          ) : (
            <Die
              roll={result}
              className={cn(
                "h-10 w-10",
                blueHigher ? "text-blue-400" : "text-red-400"
              )}
            />
          )}
          <div className="mt-1">
            <span>{text}</span>
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
        </div>
      ),
    });
  }

  return (
    <RollContext.Provider
      value={{
        rollAction,
        rollCombo,
        rollComboMission,
        rollResist,
        rollResistMission,
        rollProject,
        bonusDiceRed,
        bonusDiceBlue,
        fortuneDice,
        setBonusDiceRed,
        setBonusDiceBlue,
        setFortuneDice,
      }}
    >
      {children}
    </RollContext.Provider>
  );
}
