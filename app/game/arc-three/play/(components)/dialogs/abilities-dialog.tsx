"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useCharacterSheet,
  useUnlockedAbilities,
  UnlockedAbilities,
} from "@/contexts/arc3CharacterSheetContext";
import type { Ability } from "@/types/game";
import { useState } from "react";
import AbilityComponent from "@/components/abilities/ability";
import { TypographyH4 } from "@/components/ui/typography";
import ClockCost from "@/components/clock-cost";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface NavItem {
  key: string;
  label: string;
  sublabel: string;
  source: keyof UnlockedAbilities;
  categoryOverride?: string;
  sourceKey: string;
  abilities: Ability[];
}

const SOURCE_COLORS: Record<keyof UnlockedAbilities, string> = {
  archetype: "text-amber-500",
  skillset: "text-violet-500",
  skillsetSubclass: "text-violet-600",
  fightingStyles: "text-emerald-500",
  aldams: "text-rose-500",
  transformations: "text-orange-500",
  donums: "text-fuchsia-600",
  remembrance: "text-purple-600",
  role: "text-sky-500",
};

function useNavItems(): NavItem[] {
  const { state } = useCharacterSheet();
  const items: NavItem[] = [];

  if (state.archetype) {
    items.push({
      key: "archetype",
      label: state.archetype.name,
      sublabel: "Archetype",
      source: "archetype",
      categoryOverride: "archetypes",
      sourceKey: state.archetype.name,
      abilities: state.archetype.abilities,
    });
  }
  if (state.skillset) {
    items.push({
      key: "skillset",
      label: state.skillset.name,
      sublabel: "Skillset",
      source: "skillset",
      categoryOverride: "skillsets",
      sourceKey: state.skillset.name,
      abilities: state.skillset.abilities,
    });
  }
  if (state.skillsetSubclass) {
    items.push({
      key: "skillsetSubclass",
      label: state.skillsetSubclass.name,
      sublabel: "Skillset Subclass",
      source: "skillsetSubclass",
      categoryOverride: "skillsets",
      sourceKey: state.skillset?.name + "/" + state.skillsetSubclass.name,
      abilities: state.skillsetSubclass.abilities,
    });
  }
  for (const fs of state.fightingStyles) {
    items.push({
      key: `fightingStyles-${fs.name}`,
      label: fs.name,
      sublabel: "Fighting Style",
      source: "fightingStyles",
      categoryOverride: "fighting-styles",
      sourceKey: fs.name,
      abilities: fs.abilities,
    });
  }
  for (const aldam of state.aldams) {
    items.push({
      key: `aldams-${aldam.name}`,
      label: aldam.name,
      sublabel: "Aldam",
      source: "aldams",
      sourceKey: aldam.name,
      abilities: aldam.abilities,
    });
  }
  for (const transformation of state.transformations) {
    items.push({
      key: `transformations-${transformation.name}`,
      label: transformation.name,
      sublabel: "Transformation",
      source: "transformations",
      sourceKey: transformation.name,
      abilities: transformation.abilities,
    });
  }
  for (const donum of state.donums) {
    items.push({
      key: `donums-${donum.name}`,
      label: donum.name,
      sublabel: "Donum",
      source: "donums",
      sourceKey: donum.name,
      abilities: donum.abilities,
    });
  }
  if (state.remembrance) {
    items.push({
      key: "remembrance",
      label: state.remembrance.name,
      sublabel: "Remembrance",
      source: "remembrance",
      categoryOverride: "remembrances",
      sourceKey: state.remembrance.name,
      abilities: state.remembrance.abilities,
    });
  }
  if (state.role) {
    items.push({
      key: "role",
      label: state.role.name,
      sublabel: "Role",
      source: "role",
      categoryOverride: "roles",
      sourceKey: state.role.name,
      abilities: state.role.abilities,
    });
  }

  return items;
}

export default function AbilitiesDialog({ open, onOpenChange }: DialogProps) {
  const items = useNavItems();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const selected = items.find((i) => i.key === selectedKey) ?? items[0] ?? null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg lg:max-w-2xl p-0 gap-0 overflow-hidden">
        <div className="flex h-[520px]">
          <nav className="flex flex-col w-44 border-r shrink-0">
            <DialogHeader className="px-4 py-4 border-b">
              <DialogTitle>Abilities</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col py-2 overflow-y-auto">
              {items.length === 0 && (
                <p className="px-4 py-2 text-sm text-muted-foreground">
                  No sources selected.
                </p>
              )}
              {items.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedKey(item.key)}
                  className={`flex flex-col px-4 py-2 text-sm text-left transition-colors hover:bg-muted ${
                    selected?.key === item.key ? "bg-muted font-medium" : ""
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  <span className={cn("text-xs", SOURCE_COLORS[item.source])}>
                    {item.sublabel}
                  </span>
                </button>
              ))}
            </div>
          </nav>

          {selected ? (
            <AbilityDetail item={selected} />
          ) : (
            <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
              Select a source to manage abilities.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AbilityDetail({ item }: { item: NavItem }) {
  return (
    <div className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto">
      <div>
        <p className="font-semibold text-2xl">{item.label}</p>
        <p className={cn("text-xs", SOURCE_COLORS[item.source])}>
          {item.sublabel}
        </p>
      </div>
      {item.abilities.length === 0 ? (
        <p className="text-sm text-muted-foreground">No abilities available.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {item.abilities.map((ability) => (
            <UnlockableAbility
              key={ability.slug}
              source={item.source}
              sourceKey={item.sourceKey}
              category={item.categoryOverride || item.source}
              ability={ability}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface UnlockableAbilityProps {
  source: keyof UnlockedAbilities;
  sourceKey: string;
  category: string;
  ability: Ability;
}

function UnlockableAbility({
  source,
  sourceKey,
  category,
  ability,
}: UnlockableAbilityProps) {
  const { toggle, isUnlocked } = useUnlockedAbilities();
  const unlocked = isUnlocked(source, sourceKey, ability.slug);

  const type = sourceKey.toLocaleLowerCase().replace(/\s+/g, "-");
  return (
    <div className={cn("text-sm", !unlocked && "opacity-50")}>
      <TypographyH4 className="flex items-center justify-between gap-2 text-lg">
        <span className="flex items-start  gap-4">
          <Switch
            checked={unlocked}
            onCheckedChange={() =>
              toggle(source, sourceKey, ability.slug, ability.cost)
            }
            aria-label={unlocked ? "Lock ability" : "Unlock ability"}
          />
          {ability.name}
        </span>
        <ClockCost r={30} ticks={5} num={ability.cost || 0} />
      </TypographyH4>
      <AbilityComponent
        category={category}
        ability={ability}
        arc="arc3"
        type={type}
      />
    </div>
  );
}
