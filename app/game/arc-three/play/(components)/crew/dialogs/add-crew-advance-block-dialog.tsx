"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CrewAdvanceBlock,
  CrewAdvance,
  useCrewAdvanceBlocks,
} from "@/contexts/arc3CrewSheetContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { PlusIcon, Trash2 } from "lucide-react";
import { nanoid } from "@/lib/nanoid";

interface AddCrewAdvanceBlockDialogProps {
  sectionId: string;
  block?: CrewAdvanceBlock;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const DEFAULT_ADVANCE = (): CrewAdvance => ({
  name: "",
  ticks: { max: 3, current: 0 },
  description: "",
});

export default function AddCrewAdvanceBlockDialog({
  sectionId,
  block,
  open: controlledOpen,
  onOpenChange,
}: AddCrewAdvanceBlockDialogProps) {
  const { addCAB, updateCAB } = useCrewAdvanceBlocks(sectionId);

  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const [name, setName] = useState(block?.name ?? "");
  const [progression, setProgression] = useState<"adhoc" | "sequence">(
    block?.progression ?? "adhoc",
  );
  const [advances, setAdvances] = useState<CrewAdvance[]>(
    block?.advances ?? [DEFAULT_ADVANCE()],
  );

  function updateAdvance(idx: number, patch: Partial<CrewAdvance>) {
    setAdvances((prev) =>
      prev.map((a, i) =>
        i === idx
          ? {
              ...a,
              ...patch,
              ticks:
                "ticks" in patch ? { ...a.ticks, ...patch.ticks } : a.ticks,
            }
          : a,
      ),
    );
  }

  function removeAdvance(idx: number) {
    setAdvances((prev) => prev.filter((_, i) => i !== idx));
  }

  function addAdvance() {
    setAdvances((prev) => [...prev, DEFAULT_ADVANCE()]);
  }

  function handleSave() {
    const validAdvances = advances.filter((a) => a.name.trim());
    if (!name.trim() || validAdvances.length === 0) return;

    if (block) {
      updateCAB(block.id, { name, progression, advances: validAdvances });
    } else {
      addCAB({ id: nanoid(), name, progression, advances: validAdvances });
    }

    // Reset for uncontrolled (add) mode
    if (!controlledOpen) {
      setName("");
      setProgression("adhoc");
      setAdvances([DEFAULT_ADVANCE()]);
    }
    setOpen(false);
  }

  const isEditing = !!block;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!isEditing && (
        <DialogTrigger asChild>
          <Button
            className="mt-1 w-full border-dashed text-sm text-muted-foreground"
            variant="outline"
          >
            ADD ADVANCE BLOCK
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit" : "Add"} Advance Block</DialogTitle>
          <DialogDescription>
            Define a named group of crew advances with a progression type.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <Label>Block Name</Label>
            <Input
              placeholder="e.g. Living Space"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Progression */}
          <div className="flex flex-col gap-1.5">
            <Label>Progression</Label>
            <Select
              value={progression}
              onValueChange={(v) => setProgression(v as "adhoc" | "sequence")}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adhoc">Ad-hoc (any order)</SelectItem>
                <SelectItem value="sequence">
                  Sequence (must unlock in order)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Advances list */}
          <div className="flex flex-col gap-2">
            <Label>Advances</Label>
            {advances.map((advance, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-md border p-3"
              >
                <div className="flex items-center gap-2">
                  <Input
                    className="flex-1"
                    placeholder="Advance name"
                    value={advance.name}
                    onChange={(e) =>
                      updateAdvance(idx, { name: e.target.value })
                    }
                  />
                  <div className="flex items-center gap-1">
                    <Label className="shrink-0 text-xs text-muted-foreground">
                      Ticks
                    </Label>
                    <Input
                      type="number"
                      min={1}
                      max={12}
                      className="w-16"
                      value={advance.ticks.max}
                      onChange={(e) =>
                        updateAdvance(idx, {
                          ticks: {
                            ...advance.ticks,
                            max: Number(e.target.value),
                          },
                        })
                      }
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-destructive hover:text-destructive"
                    onClick={() => removeAdvance(idx)}
                    disabled={advances.length === 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  placeholder="Description (optional)"
                  className="resize-none text-xs"
                  rows={2}
                  value={advance.description}
                  onChange={(e) =>
                    updateAdvance(idx, { description: e.target.value })
                  }
                />
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-dashed"
              onClick={addAdvance}
            >
              <PlusIcon className="mr-1 h-3 w-3" /> Add Advance
            </Button>
          </div>

          <Button
            className="mt-2"
            onClick={handleSave}
            disabled={!name.trim() || advances.every((a) => !a.name.trim())}
          >
            {isEditing ? "Save Changes" : "Add Block"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
