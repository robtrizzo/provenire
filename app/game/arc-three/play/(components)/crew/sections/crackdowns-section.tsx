import { Checkbox } from "@/components/ui/checkbox";
import { TypographyH2 } from "@/components/ui/typography";
import {
  CRACKDOWNS,
  CrackdownId,
  useCrewSheet,
} from "@/contexts/arc3CrewSheetContext";
import { cn } from "@/lib/utils";

export default function CrackdownsSection() {
  const { state, dispatch } = useCrewSheet();

  return (
    <div className="mt-3 flex flex-col gap-2">
      <TypographyH2 className="text-md text-muted-foreground">
        Crackdowns
      </TypographyH2>
      {CRACKDOWNS.map(({ id, label }) => (
        <label
          className={cn(
            "flex items-start gap-4 cursor-pointer rounded px-2 py-0.5 -mx-2",
            state.crackdowns.includes(id) && "bg-red-500/10",
          )}
        >
          <Checkbox
            className="mt-0.5 shrink-0"
            checked={state.crackdowns.includes(id)}
            onCheckedChange={(checked) =>
              dispatch({
                type: "SET_CRACKDOWN",
                id: id as CrackdownId,
                triggered: !!checked,
              })
            }
          />
          <span
            className={cn(
              "text-md text-muted-foreground",
              state.crackdowns.includes(id) && "text-red-500",
            )}
          >
            {label}
          </span>
        </label>
      ))}
    </div>
  );
}
