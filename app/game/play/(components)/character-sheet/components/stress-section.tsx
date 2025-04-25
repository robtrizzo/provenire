import { TypographyH2 } from "@/components/ui/typography";
import { Condition } from "@/components/condition";
import StressCheckboxes from "@/app/game/play/(components)/character-sheet/components/stress-checkboxes";
import Clock from "@/components/clock";
import ConditionsInfo from "../components/conditions-info";
import { useCharacterSheet } from "@/contexts/characterSheetContext";

export default function StressSection() {
  const {
    stress,
    conditions,
    conditionRecoveryRef,
    selectedDonum,
    abilities,
    setStress,
    setConditions,
    setChanges,
  } = useCharacterSheet();

  const conditionsList = [
    "Insecure",
    "Afraid",
    "Angry",
    "Hopeless",
    "Guilty",
    selectedDonum?.name === "Visu Exteriore" ? "Doomed" : null,
    abilities.includes("Grand Appetite") ? "Insatiable" : null,
  ];

  return (
    <div className="flex flex-col gap-2">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Stress & Conditions <ConditionsInfo />
      </TypographyH2>
      <div className="flex justify-between">
        <StressCheckboxes
          key={`stress${new Date().getTime()}`}
          max={9}
          conditions={conditions}
          current={stress}
          onChange={(n) => {
            setStress(n);
            setChanges(true);
          }}
        />
        <div className="ml-auto border-[1px] border-border rounded-md p-1 flex items-center gap-2 select-none">
          <Clock
            key={`conditionRecovery-${new Date().getTime()}`}
            max={8}
            current={conditionRecoveryRef.current}
            width={35}
            height={35}
            setVal={(n) => {
              conditionRecoveryRef.current = n;
              setChanges(true);
            }}
          />
          <span className="text-xs text-muted-foreground text-center">
            recovery
          </span>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap mt-2">
        {conditionsList.map((c) => {
          if (!c) return null;
          return (
            <Condition
              key={`${c}${new Date().getTime()}`}
              name={c}
              active={conditions.includes(c)}
              disabled={conditions.length >= 4 && !conditions.includes(c)}
              onClick={() => {
                if (conditions.includes(c)) {
                  setConditions(conditions.filter((con) => con !== c));
                } else if (conditions.length < 4) {
                  // todo refactor with a variable maxStress
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
