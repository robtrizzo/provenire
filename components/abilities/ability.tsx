"use client";
import type { Ability } from "@/types/game";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ABILITIES_DIR = "@/components/abilities";

interface AbilityProps {
  ability: Ability;
  category: string;
  arc: string;
  type: string;
}

export default function Ability(props: AbilityProps) {
  const { ability, category, arc, type } = props;
  const importPath = `${ABILITIES_DIR}/${category}/${arc}/${type}/${ability.slug}`;
  const Ability = dynamic(() =>
    import(importPath)
      .then((module) => module.default)
      .catch(() => ({
        default: () => (
          <div>
            <span className="text-red-500">
              Ability not found: {ability.name}. Check{" "}
              <code className="text-muted-foreground text-xs">
                {importPath}
              </code>
            </span>
          </div>
        ),
      }))
  );
  return (
    <Suspense fallback={<div>Loading ability...</div>}>
      <Ability />
    </Suspense>
  );
}
