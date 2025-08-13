import { TypographyH2 } from "@/components/ui/typography";
import EditActions from "./edit-actions";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import ActionWidget from "./action-widget";

export default function ActionSection() {
  const { actions } = useCharacterSheet();

  const leftActions = actions.available.filter(
    (action) => action.position === "left"
  );
  const rightActions = actions.available.filter(
    (action) => action.position === "right"
  );

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Actions <EditActions />
      </TypographyH2>
      <div className="flex gap-4">
        <div className="flex-1">
          {leftActions.map((action) => (
            <ActionWidget key={action.name} action={action} />
          ))}
        </div>
        <div className="flex-1">
          {rightActions.map((action) => (
            <ActionWidget key={action.name} action={action} />
          ))}
        </div>
      </div>
    </>
  );
}
