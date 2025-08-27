import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import type { Note } from "@/types/game";
import { NotebookPen, NotebookText, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import Clock from "@/components/clock";
export default function ProfileSection() {
  return (
    <>
      <ArchetypeQuestionsSection />
      <Separator className="my-2" />
      <NotesSection />
    </>
  );
}

function ArchetypeQuestionsSection() {
  const { selectedArchetype, handleUpdateQuestion, questions } =
    useCharacterSheet();
  return (
    <>
      <div className="text-center">
        <span>Starting</span>
      </div>
      {selectedArchetype?.questions.starting.map((q, i) => (
        <div key={`q-${i}`} className="w-full gap-1.5 my-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor={`q-${i}`} className="text-amber-500 box-border">
              {q}
            </Label>
          </div>
          <Textarea
            id={`q-${i}`}
            value={questions.get(
              `archetype-${selectedArchetype.name}-starting-${i}`
            )}
            onChange={(e) => {
              handleUpdateQuestion(
                `archetype-${selectedArchetype.name}-starting-${i}`,
                e.target.value
              );
            }}
          />
        </div>
      ))}
      <div className="text-center">
        <span>Horizon</span>
      </div>
      {selectedArchetype?.questions.horizon.map((q, i) => (
        <div key={`q-${i}`} className="w-full gap-1.5 my-2">
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor={`q-${i}`} className="text-amber-500 box-border">
              {q}
            </Label>
          </div>
          <Textarea
            id={`q-${i}`}
            value={questions.get(
              `archetype-${selectedArchetype.name}-horizon-${i}`
            )}
            onChange={(e) => {
              handleUpdateQuestion(
                `archetype-${selectedArchetype.name}-horizon-${i}`,
                e.target.value
              );
            }}
          />
        </div>
      ))}
    </>
  );
}

function NotesSection() {
  const { notes, setNotes, setChanges } = useCharacterSheet();

  const handleAddNote = (note: Note) => {
    setNotes([...notes, note]);
    setChanges(true);
  };

  const handleRemoveNote = (idx: number) => () => {
    setNotes(notes.filter((_, index) => index !== idx));
    setChanges(true);
  };

  const handleUpdateNote = (idx: number) => (note: Note) => {
    const notesCopy = JSON.parse(JSON.stringify(notes));
    notesCopy[idx] = note;
    setNotes(notesCopy);
    setChanges(true);
  };

  return (
    <>
      <div className="text-center">
        <span>Notes</span>
      </div>
      <div className="flex flex-col gap-2">
        {notes.map((n, i) => (
          <Note
            key={n.name + i}
            note={n}
            handleRemove={handleRemoveNote(i)}
            handleUpdate={handleUpdateNote(i)}
          />
        ))}
      </div>
      <div className="mt-6">
        <AddNoteDialog handleAddNote={handleAddNote} />
      </div>
    </>
  );
}

function Note({
  note,
  handleRemove,
  handleUpdate,
}: {
  note: Note;
  handleRemove: () => void;
  handleUpdate: (note: Note) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleDelayedDialogOpen = () => setTimeout(() => setOpen(true), 100);

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="flex flex-col gap-1 py-1 px-2 hover:bg-secondary/30">
            <div className="flex gap-4 items-end">
              <b className="text-lg">{note.name}</b>
              {!!note.clock && (
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="text-xs text-muted-foreground">
                    {note.clock.name}
                  </span>
                  <Clock
                    clickable={false}
                    current={note.clock.ticks}
                    max={note.clock.clock}
                    height={35}
                    width={35}
                  />
                </div>
              )}
            </div>
            <div className="mx-1">
              <span>{note.content}</span>
            </div>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={handleDelayedDialogOpen}>
            <NotebookPen /> Edit
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="bg-destructive" onClick={handleRemove}>
            <Trash className="text-destructive-foreground" /> Remove
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <EditNoteDialog
        note={note}
        handleUpdate={handleUpdate}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

function AddNoteDialog({
  handleAddNote,
}: {
  handleAddNote: (note: Note) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleSubmitNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const clockName = (formData.get("clock-name") || 0) as string;
    const clockMax = (formData.get("clock-max") || 0) as number;

    const newNote: Note = {
      name,
      content,
    };
    if (!!clockName && !!clockMax) {
      newNote.clock = {
        name: clockName,
        clock: clockMax,
        ticks: 0,
      };
    }
    handleAddNote(newNote);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <NotebookText /> Add Note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmitNote}>
          <DialogHeader>
            <DialogTitle>Add a new note</DialogTitle>
            <DialogDescription>
              Make changes to the note here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue="new note" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="jot down something here..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="clock-name">
                Clock Name{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="clock-name"
                name="clock-name"
                placeholder="new clock"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="clock-max">Max Ticks</Label>
              <Input id="clock-max" name="clock-max" type="number" />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function EditNoteDialog({
  note,
  handleUpdate,
  open,
  setOpen,
}: {
  note: Note;
  handleUpdate: (note: Note) => void;
  open: boolean;
  setOpen: (newOpen: boolean) => void;
}) {
  const [ticks, setTicks] = useState(note.clock?.ticks || 0);
  const [maxTicks, setMaxTicks] = useState(note.clock?.clock || 4);

  const handleSubmitNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const content = formData.get("content") as string;
    const clockName = (formData.get("clock-name") || 0) as string;
    const clockMax = (formData.get("clock-max") || 0) as number;

    const newNote: Note = {
      name,
      content,
    };
    if (!!clockName && !!clockMax) {
      newNote.clock = {
        name: clockName,
        clock: clockMax,
        ticks,
      };
    }

    handleUpdate(newNote);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmitNote}>
          <DialogHeader>
            <DialogTitle>Add a new note</DialogTitle>
            <DialogDescription>
              Make changes to the note here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={note.name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                defaultValue={note.content}
                placeholder="jot down something here..."
              />
            </div>
            <div>
              <Clock
                current={ticks}
                max={maxTicks}
                setVal={(v) => setTicks(v)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="clock-name">
                Clock Name{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="clock-name"
                name="clock-name"
                placeholder="new clock"
                defaultValue={note.clock?.name}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="clock-max">Max Ticks</Label>
              <Input
                id="clock-max"
                name="clock-max"
                type="number"
                defaultValue={note.clock?.clock}
                onChange={(e) => setMaxTicks(Number(e.target.value))}
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
