"use client";
import type { Ability } from "@/types/game";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface AbilityProps {
  ability: Ability;
  category: string;
  arc: string;
  type: string;
  subtype?: string;
}

export default function Ability(props: AbilityProps) {
  const { ability, category, arc, type, subtype } = props;

  const AbilityComponent = useMemo(() => {
    // Derives path: e.g. archetypes/arc2/strategist/the-chess-game-of-life
    return dynamic(
      () =>
        import(
          `./${category}/${arc}/${type}/${subtype ? subtype + "/" : ""}${ability.slug}`
        ).catch(() => {
          console.error(
            `Ability not found: ${category}/${arc}/${type}/${subtype ? subtype + "/" : ""}${ability.slug}`,
          );
          return {
            default: () => (
              <span className="text-red-500">
                Ability not found: {ability.name}
              </span>
            ),
          };
        }),
      {
        ssr: false,
        loading: () => (
          <span className="text-muted-foreground animate-pulse">
            Loading {ability.name}...
          </span>
        ),
      },
    );
  }, [category, arc, type, ability.slug, ability.name]);

  return <AbilityComponent />;
}
