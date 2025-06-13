"use client";
import type { Ability } from "@/types/game";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import DynamicAbilities from "@/components/abilities/abilities";

const Abilities = ({
  abilities,
  variant = "unlocked",
  className,
}: {
  abilities: Ability[];
  variant?: "unlocked" | "advancement" | "wiki";
  className?: string;
}) => {
  const {
    abilities: characterAbilities,
    setAbilities: setCharacterAbilities,
    setChanges,
  } = useCharacterSheet();

  return (
    <DynamicAbilities
      abilities={abilities}
      variant={variant}
      className={className}
      characterAbilities={characterAbilities}
      setCharacterAbilities={setCharacterAbilities}
      setChanges={setChanges}
    />
  );
};

export default Abilities;
