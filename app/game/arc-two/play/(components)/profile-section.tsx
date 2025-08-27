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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import type { Note } from "@/types/game";
import { NotebookText } from "lucide-react";
import { Input } from "@/components/ui/input";
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
  const { notes, setNotes } = useCharacterSheet();

  const handleAddNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  return (
    <>
      <div className="text-center">
        <span>Notes</span>
      </div>
      <div>
        {notes.map((n, i) => (
          <Note key={n.name + i} note={n} />
        ))}
      </div>
      <div>
        <AddNoteDialog handleAddNote={handleAddNote} />
      </div>
    </>
  );
}

function Note({ note }: { note: Note }) {
  return <div>{note.name}</div>;
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

    const newItem: Note = {
      name,
      content,
    };
    if (!!clockName && !!clockMax) {
      newItem.clock = {
        name: clockName,
        clock: clockMax,
        ticks: 0,
      };
    }
    handleAddNote(newItem);

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
