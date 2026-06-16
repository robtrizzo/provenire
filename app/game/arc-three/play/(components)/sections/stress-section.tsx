"use client";

import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import { Condition } from "@/components/condition";
import { TypographyH2 } from "@/components/ui/typography";
import { useFields } from "@/contexts/arc3CharacterSheetContext";
import ConditionOptions from "../configs/condition-options";
import StressOptions from "../configs/stress-options";

export default function StressSection() {
  const [{ stress, maxStress, conditions, currentConditions }, set] =
    useFields();

  console.log("conditions", currentConditions);

  return (
    <div className="flex flex-col gap-2">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Stress & Conditions <ConditionOptions />
      </TypographyH2>
      <div className="flex justify-between">
        <div className="flex justify-between">
          <BuildupCheckboxes
            max={maxStress}
            numDisabled={currentConditions.length}
            current={stress}
            onChange={(n) => {
              set({ stress: n });
            }}
          />
        </div>
        <StressOptions />
      </div>
      <div className="flex gap-2 flex-wrap mt-2">
        {conditions.map((c, idx) => {
          if (!c) return null;
          return (
            <Condition
              key={c.name + idx}
              name={c.name}
              active={currentConditions.some((cc) => cc.name === c.name)}
              disabled={
                currentConditions.length >= maxStress &&
                !currentConditions.some((cc) => cc.name === c.name)
              }
              onClick={() => {
                if (currentConditions.some((cc) => cc.name === c.name)) {
                  set({
                    currentConditions: currentConditions.filter(
                      (con) => con.name !== c.name,
                    ),
                  });
                } else if (currentConditions.length <= maxStress) {
                  set({ currentConditions: [...currentConditions, c] });
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
