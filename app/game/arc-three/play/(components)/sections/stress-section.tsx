import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import { Condition } from "@/components/condition";
import { TypographyH2 } from "@/components/ui/typography";
import { useFields } from "@/contexts/arc3CharacterSheetContext";
import { DEFAULT_CONDITIONS } from "@/contexts/arc3CharacterSheetContext";

export default function StressSection() {
  const [{ stress, maxStress, conditions }, set] = useFields();

  return (
    <div className="flex flex-col gap-2">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Stress & Conditions {/*<ConditionsInfo />*/}
      </TypographyH2>
      <div className="flex justify-between">
        <BuildupCheckboxes
          max={maxStress}
          numDisabled={conditions.length}
          current={stress}
          onChange={(n) => {
            set({ stress: n });
            //   setChanges(true);
          }}
        />
      </div>
      <div className="flex gap-4 flex-wrap mt-2">
        {false // TODO set to isFetching
          ? DEFAULT_CONDITIONS.map((c) => {
              if (!c) return null;
              return (
                <Condition
                  key={c}
                  name={c}
                  active={false}
                  disabled={true}
                  onClick={() => {}}
                />
              );
            })
          : DEFAULT_CONDITIONS.map((c, idx) => {
              if (!c) return null;
              return (
                <Condition
                  key={c + idx}
                  name={c}
                  active={conditions.includes(c)}
                  disabled={
                    conditions.length >= maxStress && !conditions.includes(c)
                  }
                  onClick={() => {
                    if (conditions.includes(c)) {
                      set({
                        conditions: conditions.filter((con) => con !== c),
                      });
                    } else if (conditions.length <= maxStress) {
                      set({ conditions: [...conditions, c] });
                    }
                    //   setChanges(true);
                  }}
                />
              );
            })}
      </div>
    </div>
  );
}
