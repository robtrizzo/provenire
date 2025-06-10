import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TypographyH4 } from "@/components/ui/typography";
import { FightingInstructor } from "@/types/game";
import gladiators from "@/public/gladiators.json";
import FightingInstructorSummary from "./fighting-instructor-summary";

export default function AddFightingInstructor({
  addFightingInstructor,
}: {
  addFightingInstructor: (instructor: FightingInstructor) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add instructor
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0">Fighting Instructors</TypographyH4>
        {gladiators.instructors.map((i, idx) => (
          <div key={`${i.name}${idx}`} onClick={() => addFightingInstructor(i)}>
            <FightingInstructorSummary
              fightingInstructor={i}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
