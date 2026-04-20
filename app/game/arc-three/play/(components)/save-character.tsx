import { Button } from "@/components/ui/button";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import { cn } from "@/lib/utils";
import { Check, Loader2, Save } from "lucide-react";

export default function SaveCharacter() {
  const { localUpdatedAt, cloudUpdatedAt, saved, isSaving, save } =
    useCharacterSheet();

  const hasUnsavedChanges =
    localUpdatedAt && (!cloudUpdatedAt || localUpdatedAt > cloudUpdatedAt);

  return (
    <div className="relative inline-flex">
      <Button
        variant="secondary"
        className={cn("text-sm", !hasUnsavedChanges && "opacity-80")}
        onClick={() => save()}
        disabled={isSaving}
      >
        {isSaving ? (
          <Loader2 className="animate-spin" />
        ) : saved ? (
          <Check className="text-green-500" />
        ) : (
          <Save />
        )}
        {isSaving ? "Saving..." : saved ? "Saved!" : "Save"}
      </Button>
      {hasUnsavedChanges && !saved && !isSaving && (
        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-orange-400" />
      )}
    </div>
  );
}
