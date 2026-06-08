"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { NoteEntry, useNotes } from "@/contexts/arc3CharacterSheetContext";
import { nanoid } from "@/lib/nanoid";
import { Pin, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function NotesDialog({
  open,
  onOpenChange,
  initialNoteId,
}: DialogProps & { initialNoteId?: string | null }) {
  const { notes, addNote, removeNote, updateNote } = useNotes();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // When the dialog opens, jump to the requested note
  useEffect(() => {
    if (open && initialNoteId !== undefined) {
      setSelectedId(initialNoteId ?? null);
    }
  }, [open, initialNoteId]);

  const selected = notes.find((n) => n.id === selectedId) ?? notes[0] ?? null;

  const handleAdd = () => {
    const entry: NoteEntry = {
      id: nanoid(),
      title: "New Note",
      content: "",
      pinned: false,
    };
    addNote(entry);
    setSelectedId(entry.id);
  };

  const handleRemove = (id: string) => {
    removeNote(id);
    if (selectedId === id) {
      const remaining = notes.filter((n) => n.id !== id);
      setSelectedId(remaining[0]?.id ?? null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg lg:max-w-2xl p-0 gap-0 overflow-hidden">
        <div className="flex h-130">
          <nav className="flex flex-col w-52 border-r shrink-0">
            <DialogHeader className="px-4 py-4 border-b">
              <DialogTitle>Notes</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col py-2 overflow-y-auto flex-1">
              {notes.length === 0 && (
                <p className="px-4 py-2 text-sm text-muted-foreground">
                  No notes yet.
                </p>
              )}
              {notes.map((note) => (
                <button
                  key={note.id}
                  onClick={() => setSelectedId(note.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm text-left transition-colors hover:bg-muted",
                    selected?.id === note.id && "bg-muted font-medium",
                  )}
                >
                  {note.pinned && (
                    <Pin className="size-3 shrink-0 text-amber-500" />
                  )}
                  <span className="truncate flex-1">
                    {note.title || "Untitled"}
                  </span>
                </button>
              ))}
            </div>
            <div className="p-2 border-t">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleAdd}
              >
                <Plus className="size-4 mr-1" />
                New note
              </Button>
            </div>
          </nav>

          {selected ? (
            <NoteDetail
              note={selected}
              onChange={(changes) => updateNote(selected.id, changes)}
              onRemove={() => handleRemove(selected.id)}
            />
          ) : (
            <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
              Create a note to get started.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface NoteDetailProps {
  note: NoteEntry;
  onChange: (changes: Partial<Omit<NoteEntry, "id">>) => void;
  onRemove: () => void;
}

function NoteDetail({ note, onChange, onRemove }: NoteDetailProps) {
  return (
    <div className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto">
      <div className="flex items-start justify-between gap-2">
        <Input
          value={note.title}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="Note title"
          className="text-lg font-semibold h-auto py-1 border-none shadow-none px-0 focus-visible:ring-0"
        />
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <Switch
              id={`pin-${note.id}`}
              checked={note.pinned}
              onCheckedChange={(checked) => onChange({ pinned: checked })}
            />
            <Label htmlFor={`pin-${note.id}`} className="cursor-pointer">
              <Pin className={cn("size-4", note.pinned && "text-amber-500")} />
            </Label>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-destructive hover:text-destructive"
            onClick={onRemove}
            aria-label="Delete note"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
      <Textarea
        value={note.content}
        onChange={(e) => onChange({ content: e.target.value })}
        placeholder="Write your note here..."
        className="flex-1 resize-none min-h-64 text-sm"
      />
    </div>
  );
}
