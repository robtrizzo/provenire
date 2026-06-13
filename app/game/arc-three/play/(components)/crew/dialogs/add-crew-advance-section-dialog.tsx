"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCrewAdvanceSections } from "@/contexts/arc3CrewSheetContext";
import { nanoid } from "@/lib/nanoid";
import { useState } from "react";

export default function AddCrewAdvanceSectionDialog() {
  const { addSection } = useCrewAdvanceSections();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  function handleSave() {
    if (!name.trim()) return;
    addSection({ id: nanoid(), name: name.trim(), crewAdvanceBlocks: [] });
    setName("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="mt-1 w-full border-dashed text-sm text-muted-foreground"
          variant="outline"
        >
          ADD SECTION
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Section</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Section Name</Label>
            <Input
              placeholder="e.g. Lair, Training"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
          </div>
          <Button disabled={!name.trim()} onClick={handleSave}>
            Save Section
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
