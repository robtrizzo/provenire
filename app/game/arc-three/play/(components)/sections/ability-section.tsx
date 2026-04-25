import { TypographyH2 } from "@/components/ui/typography";
import {
  useCharacterSheet,
  useUnlockedAbilities,
  UnlockedAbilities,
} from "@/contexts/arc3CharacterSheetContext";
import AbilityComponent from "@/components/abilities/ability";
import type { Ability } from "@/types/game";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import AbilitiesDialog from "../dialogs/abilities-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import ClockCost from "@/components/clock-cost";

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

const CATEGORY_MAP: Record<keyof UnlockedAbilities, string> = {
  archetype: "archetypes",
  skillset: "skillsets",
  skillsetSubclass: "skillsets",
  remembrance: "remembrances",
  role: "roles",
  fightingStyles: "fighting-styles",
  aldams: "aldams",
  donums: "donums",
  transformations: "transformations",
};

const SOURCE_LABEL: Record<keyof UnlockedAbilities, string> = {
  archetype: "Archetype",
  skillset: "Skillset",
  skillsetSubclass: "Skillset Subclass",
  remembrance: "Remembrance",
  role: "Role",
  fightingStyles: "Fighting Style",
  aldams: "Aldam",
  donums: "Donum",
  transformations: "Transformation",
};

interface AbilityGroup {
  label: string;
  source: keyof UnlockedAbilities;
  sourceName: string;
  category: string;
  abilities: Ability[];
}

function useUnlockedAbilityGroups(): AbilityGroup[] {
  const { state } = useCharacterSheet();
  const { unlockedAbilities } = useUnlockedAbilities();

  const groups: AbilityGroup[] = [];

  const addSingleton = (
    source: keyof UnlockedAbilities,
    entity: { name: string; abilities: Ability[] } | undefined,
  ) => {
    if (!entity) return;
    const slugs = unlockedAbilities[source][entity.name] ?? [];
    if (slugs.length === 0) return;
    const abilities = entity.abilities.filter((a) => slugs.includes(a.slug));
    if (abilities.length === 0) return;
    groups.push({
      label: `${SOURCE_LABEL[source]}: ${entity.name}`,
      source,
      sourceName: entity.name.toLowerCase(),
      category: CATEGORY_MAP[source],
      abilities,
    });
  };

  const addMulti = (
    source: keyof UnlockedAbilities,
    entities: { name: string; abilities: Ability[] }[],
  ) => {
    for (const entity of entities) {
      const slugs = unlockedAbilities[source][entity.name] ?? [];
      if (slugs.length === 0) continue;
      const abilities = entity.abilities.filter((a) => slugs.includes(a.slug));
      if (abilities.length === 0) continue;
      groups.push({
        label: `${SOURCE_LABEL[source]}: ${entity.name}`,
        source,
        sourceName: entity.name.toLowerCase(),
        category: CATEGORY_MAP[source],
        abilities,
      });
    }
  };

  addSingleton("archetype", state.archetype);
  addSingleton("skillset", state.skillset);
  if (state.skillsetSubclass && state.skillset) {
    const entity = state.skillsetSubclass;
    const sourceKey = `${state.skillset.name}/${entity.name}`; // "Hammer/Slag"
    const slugs = unlockedAbilities["skillsetSubclass"][sourceKey] ?? []; // was: [entity.name]
    const abilities = entity.abilities.filter((a) => slugs.includes(a.slug));
    if (abilities.length > 0) {
      groups.push({
        label: `${SOURCE_LABEL["skillsetSubclass"]}: ${entity.name}`,
        source: "skillsetSubclass" as const,
        sourceName: sourceKey.toLowerCase().replace(/\s+/g, "-"), // "hammer/slag"
        category: CATEGORY_MAP["skillsetSubclass"],
        abilities,
      });
    }
  }
  addSingleton("remembrance", state.remembrance);
  addSingleton("role", state.role);
  addMulti("fightingStyles", state.fightingStyles);
  addMulti("aldams", state.aldams);
  addMulti("donums", state.donums);
  addMulti("transformations", state.transformations);

  return groups;
}

export default function AbilitySection() {
  const groups = useUnlockedAbilityGroups();
  const [abilitiesDialogOpen, setAbilitiesDialogOpen] = useState(false);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Abilities{" "}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setAbilitiesDialogOpen(true)}
        >
          <BookOpen />
        </Button>
      </TypographyH2>
      {groups.length === 0 && (
        <p className="mt-2 text-sm text-muted-foreground">
          No abilities unlocked.
        </p>
      )}
      <div className="flex flex-wrap gap-1.5 mt-2">
        {groups.flatMap((group) =>
          group.abilities.map((ability) => (
            <Popover key={`${group.sourceName}-${ability.slug}`}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "h-auto py-0.5 px-2 text-xs font-normal flex flex-col items-start gap-0",
                  )}
                >
                  <span>{ability.name}</span>
                  <span
                    className={cn(
                      "text-[10px] leading-tight",
                      SOURCE_COLORS[group.source],
                    )}
                  >
                    {group.label}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 text-sm">
                <span className="flex items-end justify-between">
                  <span className="font-semibold text-lg">{ability.name}</span>
                  <ClockCost ticks={5} num={ability.cost || 0} r={24} />
                </span>
                <AbilityComponent
                  ability={ability}
                  category={group.category}
                  arc="arc3"
                  type={group.sourceName}
                />
              </PopoverContent>
            </Popover>
          )),
        )}
      </div>
      <AbilitiesDialog
        open={abilitiesDialogOpen}
        onOpenChange={setAbilitiesDialogOpen}
      />
    </>
  );
}
