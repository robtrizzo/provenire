import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import { TypographyH2 } from "@/components/ui/typography";
import { useCrewSheet } from "@/contexts/arc3CrewSheetContext";

export default function HeatSection() {
  const { state, dispatch } = useCrewSheet();
  return (
    <div className="mt-3 flex flex-col">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Threats
      </TypographyH2>
      <span className="mt-2 text-xs text-muted-foreground uppercase tracking-wide">
        Heat
      </span>
      <BuildupCheckboxes
        max={9}
        current={state.heat}
        onChange={(n) =>
          dispatch({ type: "SET_FIELD", field: "heat", value: n })
        }
        clearPosition="end"
      />
      <span className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">
        Escalation
      </span>
      <BuildupCheckboxes
        max={4}
        current={state.escalation}
        onChange={(n) =>
          dispatch({ type: "SET_FIELD", field: "escalation", value: n })
        }
        clearPosition="end"
      />
    </div>
  );
}
