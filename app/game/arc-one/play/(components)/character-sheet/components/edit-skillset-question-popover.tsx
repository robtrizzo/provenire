import { useState, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCharacterSheet } from "@/contexts/characterSheetContext";

export default function EditSkillsetQuestionPopover({
  questionIdx,
}: {
  questionIdx: number;
}) {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { selectedSkillset, handleUpdateSkillsetQuestion } =
    useCharacterSheet();

  const question = selectedSkillset?.questions[questionIdx];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newQ = formData.get("newQuestion") as string;
      if (!newQ) {
        console.error("can't save empty key");
        return;
      }
      handleUpdateSkillsetQuestion(questionIdx, newQ);
    }
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Edit />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        {question}
        <form onSubmit={handleSubmit} ref={formRef}>
          <Input defaultValue={question} name="newQuestion" />
          <Button type="submit">Save</Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
