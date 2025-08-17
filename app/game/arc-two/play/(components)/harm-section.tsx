import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { TypographyH3 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";

export default function HarmSection() {
  const {
    effectiveHarm,
    armor,
    hArmor,
    sArmor,
    setArmor,
    setHArmor,
    setSArmor,
    handleUpdateHarmSlot,
    setChanges,
  } = useCharacterSheet();

  const getSlotValue = (level: number, slotIndex: number): string => {
    return effectiveHarm[level]?.slots[slotIndex] || "";
  };

  // Get effectiveHarm levels sorted in descending order (3, 2, 1)
  const effectiveHarmLevels = Object.keys(effectiveHarm).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <>
      <TypographyH3 className="text-sm text-muted-foreground mt-8">
        Harm
      </TypographyH3>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          {effectiveHarmLevels.map((level) => (
            <span key={level} className="bg-secondary p-2 h-10 w-6 shrink-0">
              {level}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center w-full">
          {effectiveHarmLevels.map((level) => {
            const levelData = effectiveHarm[Number(level)];
            const slots = Array.from(
              { length: levelData.maxSlots },
              (_, i) => i
            );

            return (
              <div key={level} className="flex w-full">
                {slots.map((slotIndex) => (
                  <Input
                    key={`${level}-${slotIndex}`}
                    className="rounded-none h-10"
                    value={getSlotValue(Number(level), slotIndex)}
                    onChange={(e) => {
                      handleUpdateHarmSlot(
                        Number(level),
                        slotIndex,
                        e.target.value
                      );
                    }}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-[1px] border-border rounded-b-md py-1.5 px-4 select-none flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={armor}
            onCheckedChange={() => {
              setArmor(!armor);
              setChanges(true);
            }}
          />
          Armor
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={hArmor}
            onCheckedChange={() => {
              setHArmor(!hArmor);
              setChanges(true);
            }}
          />{" "}
          Heavy
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={sArmor}
            onCheckedChange={() => {
              setSArmor(!sArmor);
              setChanges(true);
            }}
          />{" "}
          Special
        </div>
      </div>
    </>
  );
}
