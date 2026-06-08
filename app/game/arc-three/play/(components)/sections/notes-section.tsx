"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { NoteEntry, useNotes } from "@/contexts/arc3CharacterSheetContext";
import { BookOpen, Pin, Plus, Trash } from "lucide-react";
import NotesDialog from "../dialogs/notes-dialog";
import { nanoid } from "@/lib/nanoid";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function NotesSection() {
  const { notes, addNote, removeNote, updateNote } = useNotes();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openToNoteId, setOpenToNoteId] = useState<string | null>(null);

  const pinned = notes.filter((n) => n.pinned);

  const handleAdd = () => {
    const id = nanoid();
    addNote({ id, title: "New Note", content: "", pinned: false });
    setOpenToNoteId(id);
    setDialogOpen(true);
  };

  const handleUnpin = (note: NoteEntry) => {
    updateNote(note.id, { pinned: !note.pinned });
  };

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Notes
        <div className="flex gap-1">
          <Button size="icon" variant="outline" onClick={handleAdd}>
            <Plus />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setOpenToNoteId(null);
              setDialogOpen(true);
            }}
          >
            <BookOpen />
          </Button>
        </div>
      </TypographyH2>

      {pinned.length > 0 && (
        <div className="mt-2 grid grid-cols-2 gap-2 mb-2">
          {pinned.map((note) => (
            <ContextMenu key={note.id}>
              <ContextMenuTrigger asChild>
                <Card
                  className="cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => {
                    setOpenToNoteId(note.id);
                    setDialogOpen(true);
                  }}
                >
                  <CardContent className="px-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Pin className="size-3 text-amber-500 shrink-0" />
                      <p className="text-sm font-medium truncate">
                        {note.title || "Untitled"}
                      </p>
                    </div>
                    <p
                      className={cn(
                        "text-xs text-muted-foreground line-clamp-3",
                      )}
                    >
                      {note.content || "No content"}
                    </p>
                  </CardContent>
                </Card>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onClick={() => handleUnpin(note)}>
                  <Pin className="size-3 text-amber-500 shrink-0" /> Unpin
                </ContextMenuItem>
                <ContextMenuItem
                  className="bg-destructive"
                  onClick={() => removeNote(note.id)}
                >
                  <Trash className="text-destructive-foreground" /> Remove
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </div>
      )}
      {notes.length === 0 && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground mb-2">No notes yet.</p>
        </div>
      )}

      <NotesDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        initialNoteId={openToNoteId}
      />
    </>
  );
}
