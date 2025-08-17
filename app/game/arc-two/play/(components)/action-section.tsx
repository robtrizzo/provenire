import { TypographyH2 } from "@/components/ui/typography";
import EditActions from "./edit-actions";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import ActionWidget from "./action-widget";
import { cn } from "@/lib/utils";

export default function ActionSection() {
  const { actions, selectedSleeve, items } = useCharacterSheet();

  const leftActions = actions.filter((action) => action.position === "left");
  const rightActions = actions.filter((action) => action.position === "right");
  const codexActions = actions.filter((action) => action.type === "codex");
  const numPausedSubscriptions = actions.reduce((acc, action) => {
    if (action.type === "codex" && !action.subscriptionPaid) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  const activeCodexActions = codexActions.length - numPausedSubscriptions;
  const codexSlots =
    (selectedSleeve?.codexSlots || 2) +
    items.reduce(
      (acc, item) =>
        ((item.subscriptionPaid && item.codexExpansion) || 0) + acc,
      0
    );

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Actions{" "}
        <div className="flex gap-1">
          <div className="flex flex-col justify-end items-end">
            <div className="text-muted-foreground font-light italic text-xs">
              {numPausedSubscriptions} paused subscription
              {numPausedSubscriptions === 1 ? "" : "s"}
            </div>{" "}
            <div
              className={cn(
                "text-xs italic font-light",
                activeCodexActions > codexSlots
                  ? "text-red-500"
                  : activeCodexActions < codexSlots
                  ? "text-amber-500"
                  : "text-lime-500"
              )}
            >
              using {activeCodexActions} of {codexSlots} available codex slots
            </div>
          </div>
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
