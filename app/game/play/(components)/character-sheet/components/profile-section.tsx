import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useCharacterSheet } from "@/contexts/characterSheetContext";

export default function ProfileSection() {
  const {
    univQuestions,
    bloodshedQ,
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    selectedHeritage,
    questions,
    setUnivQuestions,
    setBloodshedQ,
    setChanges,
    handleDebounceChange,
    handleUpdateQuestion,
  } = useCharacterSheet();

  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="w-full gap-1.5 my-2">
          <Label htmlFor="look">Look</Label>
          <Textarea
            id="look"
            value={univQuestions?.[0] || ""}
            onChange={(e) => {
              setUnivQuestions([
                e.target.value,
                univQuestions?.[1] || "",
                univQuestions?.[2] || "",
                univQuestions?.[3] || "",
                univQuestions?.[4] || "",
              ]);
              handleDebounceChange();
            }}
          />
        </div>
        <div className="w-full gap-1.5 my-2">
          <Label htmlFor="dream">What&apos;s your dream?</Label>
          <Textarea
            id="dream"
            value={univQuestions?.[1] || ""}
            onChange={(e) => {
              setUnivQuestions([
                univQuestions?.[0] || "",
                e.target.value,
                univQuestions?.[2] || "",
                univQuestions?.[3] || "",
                univQuestions?.[4] || "",
              ]);
              handleDebounceChange();
            }}
          />
        </div>
        <div className="w-full gap-1.5 my-2">
          <Label htmlFor="faith">What do you have faith in?</Label>
          <Textarea
            id="faith"
            value={univQuestions?.[2] || ""}
            onChange={(e) => {
              setUnivQuestions([
                univQuestions?.[0] || "",
                univQuestions?.[1] || "",
                e.target.value,
                univQuestions?.[3] || "",
                univQuestions?.[4] || "",
              ]);
              handleDebounceChange();
            }}
          />
        </div>
        <div className="w-full gap-1.5 my-2">
          <Label htmlFor="hurt">What&apos;s your hurt?</Label>
          <Textarea
            id="hurt"
            value={univQuestions?.[3] || ""}
            onChange={(e) => {
              setUnivQuestions([
                univQuestions?.[0] || "",
                univQuestions?.[1] || "",
                univQuestions?.[2] || "",
                e.target.value,
                univQuestions?.[4] || "",
              ]);
              handleDebounceChange();
            }}
          />
        </div>
        <div className="w-full gap-1.5 my-2">
          <Label htmlFor="option">
            What has shown you that there&apos;s no other option?
          </Label>
          <Textarea
            id="option"
            value={univQuestions?.[4] || ""}
            onChange={(e) => {
              setUnivQuestions([
                univQuestions?.[0] || "",
                univQuestions?.[1] || "",
                univQuestions?.[2] || "",
                univQuestions?.[3] || "",
                e.target.value,
              ]);
              handleDebounceChange();
            }}
          />
        </div>
        <div className="w-full gap-1.5 my-2">
          <Label htmlFor="bloodshed" className="text-red-700">
            Will there be bloodshed?
          </Label>
          <Select
            value={bloodshedQ}
            onValueChange={(value) => {
              setBloodshedQ(value);
              setChanges(true);
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nootherway" className="ml-4">
                There... is no other way.
              </SelectItem>
              <SelectItem value="maybenootherway" className="ml-4">
                I hope not... but there may be no other way.
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Separator className="my-3"></Separator>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        {selectedHeritage?.remembrance && (
          <div className="w-full gap-1.5 my-2">
            <Label htmlFor="remembrance" className="text-sky-500 box-border">
              {selectedHeritage?.remembrance}
            </Label>
            <Textarea
              id="remembrance"
              value={questions.get(`${selectedHeritage.name}-0`)}
              onChange={(e) => {
                handleUpdateQuestion(
                  `${selectedHeritage.name}-0`,
                  e.target.value
                );
              }}
            />
          </div>
        )}
        {selectedBackground?.questions?.map((q, i) => (
          <div key={`q-${i}`} className="w-full gap-1.5 my-2">
            <Label htmlFor={`q-${i}`} className="text-red-500 box-border">
              {q}
            </Label>
            <Textarea
              id={`q-${i}`}
              value={questions.get(`${selectedBackground.name}-${i}`) || ""}
              onChange={(e) => {
                handleUpdateQuestion(
                  `${selectedBackground.name}-${i}`,
                  e.target.value
                );
              }}
            />
          </div>
        ))}
        {selectedSkillset?.questions?.map((q, i) => (
          <div key={`q-${i}`} className="w-full gap-1.5 my-2">
            <Label htmlFor={`q-${i}`} className="text-indigo-500 ">
              {q}
            </Label>
            <Textarea
              id={`q-${i}`}
              value={questions.get(`${selectedSkillset.name}-${i}`)}
              onChange={(e) => {
                handleUpdateQuestion(
                  `${selectedSkillset.name}-${i}`,
                  e.target.value
                );
              }}
            />
          </div>
        ))}
        {selectedArchetype?.questions.map((q, i) => (
          <div key={`q-${i}`} className="w-full gap-1.5 my-2">
            <Label htmlFor={`q-${i}`} className="text-amber-500 box-border">
              {q}
            </Label>
            <Textarea
              id={`q-${i}`}
              value={questions.get(`${selectedArchetype.name}-${i}`)}
              onChange={(e) => {
                handleUpdateQuestion(
                  `${selectedArchetype.name}-${i}`,
                  e.target.value
                );
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
