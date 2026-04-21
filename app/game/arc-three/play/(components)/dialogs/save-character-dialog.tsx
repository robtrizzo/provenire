import { Button } from "@/components/ui/button";
import {
  useCharacterSheet,
  useField,
} from "@/contexts/arc3CharacterSheetContext";
import { useRef } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function SaveAsCharacterDialog({
  open,
  onOpenChange,
}: DialogProps) {
  const [name] = useField("name");
  const { saveAs } = useCharacterSheet();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const newName = inputRef.current?.value || name;
    saveAs({ name: newName });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Character As</DialogTitle>
        </DialogHeader>
        <DialogDescription>Save a copy of this character</DialogDescription>
        <DialogFooter>
          <Input ref={inputRef} defaultValue={name + " (copy)"} />
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
