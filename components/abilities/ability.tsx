"use client";
import type { Ability } from "@/types/game";
import { abilityRegistry } from "./registry";

// Add index signatures to match dynamic access
import type { ComponentType } from "react";

type AbilityRegistryType = {
  [category: string]: {
    [arc: string]: {
      [type: string]: {
        [slug: string]: ComponentType<unknown>;
      };
    };
  };
};

// Cast abilityRegistry to the new type
const typedAbilityRegistry = abilityRegistry as unknown as AbilityRegistryType;

interface AbilityProps {
  ability: Ability;
  category: string;
  arc: string;
  type: string;
}

export default function Ability(props: AbilityProps) {
  const { ability, category, arc, type } = props;
  const AbilityComponent =
    typedAbilityRegistry?.[category]?.[arc]?.[type]?.[ability.slug];
  if (!AbilityComponent) {
    return (
      <div>
        <span className="text-red-500">Ability not found: {ability.name}</span>
      </div>
    );
  }

  return <AbilityComponent />;
}
