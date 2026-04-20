import { Button } from "@/components/ui/button";
import { FileSearchCorner } from "lucide-react";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ImportCharacterDialog({
  open,
  onOpenChange,
}: DialogProps) {
  const { loadCharacter } = useCharacterSheet();

  function loadFromDevice() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.click();
    input.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (!data) return;
        loadCharacter(data.toString());
        onOpenChange(false);
      };
      reader.readAsText(file);
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import Character</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Import a character from your device. You will lose unsaved changes.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <Button onClick={() => loadFromDevice()} variant="outline">
            <FileSearchCorner /> Browse
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
