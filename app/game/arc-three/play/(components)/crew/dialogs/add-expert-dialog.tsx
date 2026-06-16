import { ExpertEntry, useExperts } from "@/contexts/arc3CrewSheetContext";
import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, XIcon } from "lucide-react";

interface AddExpertDialogProps {
  expert?: ExpertEntry;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
export default function AddExpertDialog({
  expert,
  open: controlledOpen,
  onOpenChange,
}: AddExpertDialogProps) {
  const { addExpert, updateExpert } = useExperts();

  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const [name, setName] = useState(expert?.name ?? "");
  const [traits, setTraits] = useState<string[]>(expert?.traits ?? []);

  const [customTrait, setCustomTrait] = useState("");

  function addCustomTrait() {
    if (!customTrait.trim()) return;
    setTraits((prev) => [...prev, customTrait]);
    setCustomTrait("");
  }

  function removeTrait(trait: string) {
    setTraits((prev) => prev.filter((t) => t !== trait));
  }

  const handleSaveExpert = () => {
    if (expert) {
      updateExpert(expert.id, {
        ...expert,
        name,
        traits,
      });
    } else {
      addExpert({
        id: nanoid(),
        name,
        traits,
      });
    }
    setName("");
    setTraits([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="mt-1 w-full border-dashed text-sm text-muted-foreground"
          variant="outline"
        >
          ADD EXPERT
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Expert</DialogTitle>
        </DialogHeader>

        {/* Gang name */}
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Expert name"
        />

        {traits.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {traits.map((trait, idx) => (
              <li
                key={trait + idx}
                className="flex items-start justify-between gap-2 rounded-md border px-3 py-2 text-sm"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">{trait}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeTrait(trait)}
                  className="mt-0.5 shrink-0 text-muted-foreground hover:text-destructive"
                >
                  <XIcon className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Custom trait form */}
        <div className="flex flex-col gap-2 rounded-md border border-dashed p-3">
          <p className="text-xs font-medium text-muted-foreground">
            Add custom trait
          </p>
          <div className="flex gap-2">
            <Input
              value={customTrait}
              onChange={(e) => setCustomTrait(e.target.value)}
              placeholder="Trait name"
              className="flex-1"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addCustomTrait}
            disabled={!customTrait.trim()}
            className="self-end"
          >
            <PlusIcon className="mr-1 size-4" />
            Add
          </Button>
        </div>

        {/* Submit */}
        <Button disabled={!name.trim()} onClick={handleSaveExpert}>
          Save Item
        </Button>
      </DialogContent>
    </Dialog>
  );
}
