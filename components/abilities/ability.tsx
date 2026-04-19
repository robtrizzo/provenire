"use client";
import type { Ability } from "@/types/game";
import dynamic from "next/dynamic";

interface AbilityProps {
  ability: Ability;
  category: string;
  arc: string;
  type: string;
  subtype?: string;
}

const componentCache = new Map<string, ReturnType<typeof dynamic>>();

function getAbilityComponent(
  ability: Ability,
  category: string,
  arc: string,
  type: string,
  subtype?: string,
) {
  const path = `${category}/${arc}/${type}/${subtype ? subtype + "/" : ""}${ability.slug}`;
  if (!componentCache.has(path)) {
    componentCache.set(
      path,
      dynamic(
        () =>
          import(`./${path}`).catch(() => ({
            default: () => (
              <span className="text-red-500">
                Ability not found: {ability.name}
              </span>
            ),
          })),
        {
          ssr: false,
          loading: () => (
            <span className="text-muted-foreground animate-pulse">
              Loading {ability.name}...
            </span>
          ),
        },
      ),
    );
  }
  return componentCache.get(path)!;
}

export default function Ability(props: AbilityProps) {
  const { ability, category, arc, type, subtype } = props;
  const AbilityComponent = getAbilityComponent(
    ability,
    category,
    arc,
    type,
    subtype,
  );
  return <AbilityComponent />;
}
