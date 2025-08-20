import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
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
  return (
    <>
      <div className="text-center">
        <span>Notes</span>
      </div>
    </>
  );
}
