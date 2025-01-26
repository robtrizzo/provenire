import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";
import { Attribute } from "@/types/game";
import { Roll, RollResult, RollType } from "@/types/roll";
import { useMutation } from "@tanstack/react-query";
import { useCharacterSheet } from "./characterSheetContext";

interface RollContextProps {
    rollActions: (
        attribute1: Attribute,
        action1: string,
        attribute2: Attribute | undefined,
        action2: string | undefined
    ) => Promise<Roll>;
    rollDice: (
      type: RollType,
      numRed: number,
      numBlue: number
    ) => Promise<Roll>;
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

  const rollDice = async (type: RollType, numRed: number, numBlue: number): Promise<Roll> => {
    numRed += bonusDiceRed;
    numBlue += bonusDiceBlue;
    const takeLower = numRed + numBlue == 0;
    if (takeLower) {
        numRed = 2;
    }
    const redRolls = [];
    const blueRolls = [];
    for (let i = 0; i < numRed; i++) {
      redRolls.push(Math.floor(Math.random() * 6) + 1);
    }
    for (let i = 0; i < numBlue; i++) {
      blueRolls.push(Math.floor(Math.random() * 6) + 1);
    }

    const roll: Roll = {
        type: type,
        redDice: redRolls,
        blueDice: blueRolls,
        numRed: numRed,
        numBlue: numBlue,
    } as Roll

    const redSixes = redRolls.filter((r) => r === 6).length;
    const blueSixes = blueRolls.filter((r) => r === 6).length;
    if (redSixes + blueSixes >= 2) {
        roll.result = "crit";
        roll.effect = "improved";
    } else {
        let resultDie: number;
        if (takeLower) {
            resultDie = Math.min(...redRolls);
            roll.effect = "reduced";
        } else {
            const highestRed = Math.max(...redRolls);
            const highestBlue = Math.max(...blueRolls);
            const blueHigher = highestBlue >= highestRed;
            resultDie = blueHigher ? highestBlue : highestRed;
            roll.effect = blueHigher ? "normal" : "reduced";
        }
    
        let result: RollResult;
        switch (resultDie) {
            case 1:
            case 2:
            case 3:
                result = "failure";
                break;
            case 4:
            case 5:
                result = "partial";
                break;
            case 6:
                result = "success";
                break;
        }
    }
    
    await saveDiceRoll(roll);
    return roll;
  };

  async function rollActions(
    attribute1: Attribute,
    action1: string,
    attribute2: Attribute | undefined = undefined,
    action2: string | undefined = undefined): Promise<Roll> {
    const score1 = attributes?.[attribute1]?.[action1] || [0, 0];
    const score2 = attribute2 && action2 ? (attributes?.[attribute2]?.[action2] || [0, 0]) : [0,0];
    const redRolls = score1.filter((r) => r === 1).length + score2.filter((r) => r === 1).length
    const blueRolls = score1.filter((r) => r === 2).length + score2.filter((r) => r === 2).length

    return await rollDice('action', redRolls, blueRolls);
  }
  
  return (
    <RollContext.Provider
      value={{
        rollActions,
        rollDice,
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