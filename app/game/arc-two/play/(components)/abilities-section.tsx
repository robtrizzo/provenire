import { Button } from "@/components/ui/button";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import type { Ability } from "@/types/game";
import { BookOpenText, LockKeyholeOpen, Plus, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ClockCost from "../../character-options/operatives/(components)/clock-cost";
import AbilityComponent from "@/components/abilities/ability";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const abilityVariants = cva("", {
  variants: {
    type: {
      archetype: "text-amber-500",
      operative: "text-indigo-500",
      fightingStyle: "text-emerald-500",
      default: "text-primary",
    },
  },
});

export default function AbilitiesSection() {
  const {
    selectedArchetype,
    selectedOperative,
    selectedFightingStyle,
    abilities,
    setAbilities,
    setChanges,
  } = useCharacterSheet();

  const handleAddOrRemoveAbility = (ability: Ability) => {
    if (abilities.find((a) => a.name === ability.name)) {
      setAbilities(abilities.filter((a) => a.name !== ability.name));
    } else {
      setAbilities([...abilities, ability]);
    }
    setChanges(true);
  };

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Abilities
      </TypographyH2>
      <div>
        {abilities.map((a, idx) => (
          <div key={a.name + idx} className="group p-2 grid grid-cols-8">
            <div className="col-span-4">{a.name}</div>
            <div className="col-span-2">
              <span
                className={cn(
                  abilityVariants({
                    type: a.type as "archetype" | "operative" | "fightingStyle",
                  }),
                  "text-sm"
                )}
              >
                {a.source}
              </span>
            </div>
            <div className="col-span-1">
              <AbilityPanel
                trigger={
                  <Button
                    size="sm"
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100"
                  >
                    <BookOpenText />
                  </Button>
                }
              >
                <AbilityHeader
                  ability={a}
                  type={a.type || ""}
                  source={a.source || ""}
                  unlocked={
                    !!abilities.find((ability) => a.name === ability.name)
                  }
                  handleAddOrRemove={handleAddOrRemoveAbility}
                />
                <AbilityComponent
                  ability={a}
                  category={a.type + "s"}
                  arc="arc2"
                  type={a.source?.toLocaleLowerCase() || ""}
                />
              </AbilityPanel>
            </div>
            <div className="col-span-1 flex">
              <Button
                size="sm"
                variant="destructive"
                className="opacity-0 group-hover:opacity-100 ml-auto"
                onClick={() => handleAddOrRemoveAbility(a)}
              >
                <Trash />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <AbilityPanel
          trigger={
            <Button size="sm" variant="outline" disabled={!selectedArchetype}>
              <span className="text-amber-500">
                <Plus className="inline-block" /> archetype
              </span>
            </Button>
          }
        >
          <TypographyH3 className="text-amber-500">
            {selectedArchetype?.name || "Archetype"}&apos;s Abilities
          </TypographyH3>
          {selectedArchetype?.abilities.map((ability, idx) => {
            const unlocked = !!abilities.find((a) => a.name === ability.name);
            return (
              <div key={ability.name + "arc" + idx}>
                <div className="flex items-center gap-4 flex-wrap">
                  <TypographyH4>{ability.name}</TypographyH4>
                  <ClockCost num={ability.keystone ? 0 : ability.cost || 2} />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      handleAddOrRemoveAbility({
                        ...ability,
                        type: "archetype",
                        source: selectedArchetype.name,
                      })
                    }
                  >
                    {unlocked ? (
                      <Trash size={10} className="inline-block text-red-500" />
                    ) : (
                      <LockKeyholeOpen size={10} className="inline-block" />
                    )}

                    <span className={cn("text-xs", unlocked && "text-red-500")}>
                      {unlocked ? "remove" : "unlock"}
                    </span>
                  </Button>
                </div>
                <AbilityComponent
                  ability={ability}
                  category="archetypes"
                  arc="arc2"
                  type={selectedArchetype.name.toLocaleLowerCase()}
                />
              </div>
            );
          })}
        </AbilityPanel>
        <AbilityPanel
          trigger={
            <Button size="sm" variant="outline" disabled={!selectedOperative}>
              <span className="text-indigo-500">
                <Plus className="inline-block" /> operative
              </span>
            </Button>
          }
        >
          <TypographyH3 className="text-indigo-500">
            {selectedOperative?.name || "Archetype"}&apos;s Abilities
          </TypographyH3>
          {selectedOperative?.abilities.map((ability, idx) => {
            const unlocked = !!abilities.find((a) => a.name === ability.name);
            return (
              <div key={ability.name + "arc" + idx}>
                <div className="flex items-center gap-4 flex-wrap">
                  <TypographyH4>{ability.name}</TypographyH4>
                  <ClockCost num={ability.keystone ? 0 : ability.cost || 2} />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      handleAddOrRemoveAbility({
                        ...ability,
                        type: "operative",
                        source: selectedOperative.name,
                      })
                    }
                  >
                    {unlocked ? (
                      <Trash size={10} className="inline-block text-red-500" />
                    ) : (
                      <LockKeyholeOpen size={10} className="inline-block" />
                    )}

                    <span className={cn("text-xs", unlocked && "text-red-500")}>
                      {unlocked ? "remove" : "unlock"}
                    </span>
                  </Button>
                </div>
                <AbilityComponent
                  ability={ability}
                  category="operatives"
                  arc="arc2"
                  type={selectedOperative.name.toLocaleLowerCase()}
                />
              </div>
            );
          })}
        </AbilityPanel>
        <AbilityPanel
          trigger={
            <Button
              size="sm"
              variant="outline"
              disabled={!selectedFightingStyle}
            >
              <span className="text-emerald-500">
                <Plus className="inline-block" /> fighting style
              </span>
            </Button>
          }
        >
          <TypographyH3 className="text-emerald-500">
            {selectedFightingStyle?.name || "Fighting Style"}&apos;s Abilities
          </TypographyH3>
          {selectedFightingStyle?.abilities.map((ability, idx) => {
            const unlocked = !!abilities.find((a) => a.name === ability.name);
            return (
              <div key={ability.name + "arc" + idx}>
                <div className="flex items-center gap-4 flex-wrap">
                  <TypographyH4>{ability.name}</TypographyH4>
                  <ClockCost num={ability.keystone ? 0 : ability.cost || 2} />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      handleAddOrRemoveAbility({
                        ...ability,
                        type: "fightingStyle",
                        source: selectedFightingStyle.name,
                      })
                    }
                  >
                    {unlocked ? (
                      <Trash size={10} className="inline-block text-red-500" />
                    ) : (
                      <LockKeyholeOpen size={10} className="inline-block" />
                    )}

                    <span className={cn("text-xs", unlocked && "text-red-500")}>
                      {unlocked ? "remove" : "unlock"}
                    </span>
                  </Button>
                </div>
                <AbilityComponent
                  ability={ability}
                  category="fightingStyles"
                  arc="arc2"
                  type={selectedFightingStyle.name.toLocaleLowerCase()}
                />
              </div>
            );
          })}
        </AbilityPanel>
      </div>
    </>
  );
}

function AbilityPanel({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] max-h-[500px] relative overflow-auto text-sm">
        {children}
      </PopoverContent>
    </Popover>
  );
}

function AbilityHeader({
  ability,
  type,
  source,
  unlocked,
  handleAddOrRemove,
}: {
  ability: Ability;
  type: string;
  source: string;
  unlocked: boolean;
  handleAddOrRemove: (ability: Ability) => void;
}) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <TypographyH4>{ability.name}</TypographyH4>
      <ClockCost num={ability.keystone ? 0 : ability.cost || 2} />
      <Button
        size="sm"
        variant="outline"
        onClick={() =>
          handleAddOrRemove({
            ...ability,
            type,
            source,
          })
        }
      >
        {unlocked ? (
          <Trash size={10} className="inline-block text-red-500" />
        ) : (
          <LockKeyholeOpen size={10} className="inline-block" />
        )}

        <span className={cn("text-xs", unlocked && "text-red-500")}>
          {unlocked ? "remove" : "unlock"}
        </span>
      </Button>
    </div>
  );
}
