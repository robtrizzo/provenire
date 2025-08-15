import { TypographyH2 } from "@/components/ui/typography";
import EditActions from "./edit-actions";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import ActionWidget from "./action-widget";

export default function ActionSection() {
  const { actions } = useCharacterSheet();

  const leftActions = actions.filter((action) => action.position === "left");
  const rightActions = actions.filter((action) => action.position === "right");
  const numPausedSubscriptions = actions.reduce((acc, action) => {
    if (action.type === "codex" && !action.subscriptionPaid) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Actions{" "}
        <div>
          <span className="text-muted-foreground font-light italic text-sm">
            ({numPausedSubscriptions} paused subscription
            {numPausedSubscriptions === 1 ? "" : "s"})
          </span>{" "}
          <EditActions />
        </div>
      </TypographyH2>
      <div className="flex gap-4">
        <div className="flex-1">
          {leftActions.map((action) => {
            if (action.type === "codex" && !action.subscriptionPaid)
              return null;
            return <ActionWidget key={action.name} action={action} />;
          })}
        </div>
        <div className="flex-1">
          {rightActions.map((action) => {
            if (action.type === "codex" && !action.subscriptionPaid)
              return null;
            return <ActionWidget key={action.name} action={action} />;
          })}
        </div>
      </div>
    </>
  );
}
