import { Button } from "@/components/ui/button";
import {
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import type { Ability } from "@/types/game";
import { LockKeyholeOpen, Plus, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ClockCost from "../../character-options/operatives/(components)/clock-cost";
import AbilityComponent from "@/components/abilities/ability";
import { cn } from "@/lib/utils";

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

  const archetypeAbilities = abilities.filter((a) => a.type === "archetype");
  const operativeAbilities = abilities.filter((a) => a.type === "operative");
  const fightingStyleAbilities = abilities.filter(
    (a) => a.type === "fightingStyle"
  );

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Abilities
      </TypographyH2>
      <div>
        {archetypeAbilities.map((a, idx) => (
          <div key={a.name + idx}>
            <span className="text-amber-500">{a.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <AbilityPanel
          abilities={selectedArchetype?.abilities || []}
          trigger={
            <Button size="sm" variant="outline" disabled={!selectedArchetype}>
              <span className="text-amber-500">
                <Plus className="inline-block" /> archetype
              </span>
            </Button>
          }
          handleAdd={() => {}}
          handleRemove={() => {}}
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
        <Button size="sm" variant="outline" disabled={!selectedOperative}>
          <span className="text-indigo-500">
            <Plus className="inline-block" /> operative
          </span>
        </Button>
        <Button size="sm" variant="outline" disabled={!selectedFightingStyle}>
          <span className="text-emerald-500">
            <Plus className="inline-block" /> fighting style
          </span>
        </Button>
      </div>
    </>
  );
}

function AbilityPanel({
  abilities,
  trigger,
  children,
  handleAdd,
  handleRemove,
}: {
  abilities: Ability[];
  trigger: React.ReactNode;
  children: React.ReactNode;
  handleAdd: () => void;
  handleRemove: () => void;
}) {
  // const [open, setOpen] = useState(false)
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto text-sm">
        {children}
      </PopoverContent>
    </Popover>
  );
}
