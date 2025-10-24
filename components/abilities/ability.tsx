"use client";
import type { Ability } from "@/types/game";
import { abilityRegistry } from "./registry";

interface AbilityProps {
  ability: Ability;
  category: string;
  arc: string;
  type: string;
}

export default function Ability(props: AbilityProps) {
  const { ability, category, arc, type } = props;
  const AbilityComponent =
    abilityRegistry?.[category]?.[arc]?.[type]?.[ability.slug];
  if (!AbilityComponent) {
    console.error(
      `Ability not found: ${category}/${arc}/${type}/${ability.slug}`
    );
    return (
      <div>
        <span className="text-red-500">Ability not found: {ability.name}</span>
      </div>
    );
  }

  return <AbilityComponent />;
}
