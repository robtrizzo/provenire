import { TypographyH2 } from "@/components/ui/typography";
import { Condition } from "@/components/condition";
import ConditionsInfo from "./conditions-info";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { BuildupCheckboxes } from "@/components/buildup-checkboxes";

export default function StressSection() {
  const {
    stress,
    maxStress,
    conditions,
    abilities,
    selectedArchetype,
    setStress,
    setConditions,
    setChanges,
  } = useCharacterSheet();

  const conditionsList = ["Insecure", "Afraid", "Angry", "Hopeless", "Guilty"];
  if (selectedArchetype?.name === "Adventurer") {
    conditionsList.push("Frantic");
  }

  if (abilities.includes("Overwhelmed")) {
    conditionsList.push("Overwhelmed");
  }

  if (abilities.includes("Avoid Conflict")) {
    conditionsList.push("Avoidant");
  }

  return (
    <div className="flex flex-col gap-2">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Stress & Conditions <ConditionsInfo />
      </TypographyH2>
      <div className="flex justify-between">
        <BuildupCheckboxes
          max={maxStress}
          numDisabled={conditions.length}
          current={stress}
          onChange={(n) => {
            setStress(n);
            setChanges(true);
          }}
        />
      </div>
      <div className="flex gap-4 flex-wrap mt-2">
        {conditionsList.map((c) => {
          if (!c) return null;
          return (
            <Condition
              key={c}
              name={c}
              active={conditions.includes(c)}
              disabled={
                conditions.length >= maxStress && !conditions.includes(c)
              }
              onClick={() => {
                if (conditions.includes(c)) {
                  setConditions(conditions.filter((con) => con !== c));
                } else if (conditions.length <= maxStress) {
                  setConditions([...conditions, c]);
                }
                setChanges(true);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
