"use client";
import { useState } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { SaveIcon, Bomb } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { FightingInstructor } from "@/types/game";
import FightingInstructorSummary from "./fighting-instructor-summary";

export default function FightingInstructorInput({
  fightingInstructor,
  updateFightingInstructor,
  removeFightingInstructor,
  enable,
}: {
  fightingInstructor: FightingInstructor;
  updateFightingInstructor: (ticks: number) => void;
  removeFightingInstructor: () => void;
  enable: boolean;
}) {
  const { name, clock, fightingStyle, description } = fightingInstructor;

  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(fightingInstructor.ticks);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {enable ? (
        <PopoverTrigger asChild>
          <div>
            <FightingInstructorSummary
              fightingInstructor={fightingInstructor}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          </div>
        </PopoverTrigger>
      ) : (
        <div>
          <FightingInstructorSummary
            fightingInstructor={fightingInstructor}
            className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
          />
        </div>
      )}
      <PopoverContent>
        <div className="flex justify-between items-center">
          <TypographyH4 className="mt-0">{name}</TypographyH4>
          <Clock
            max={clock}
            current={ticks}
            setVal={(n) => {
              setTicks(n);
            }}
            width={35}
            height={35}
          />
        </div>
        <TypographyP>{fightingStyle}</TypographyP>
        <TypographyP className="text-muted-foreground text-sm">
          {description}
        </TypographyP>
        <div className="flex justify-between mt-4">
          <Button
            variant="destructive"
            className="text-sm"
            onClick={() => {
              removeFightingInstructor();
              setOpen(false);
            }}
          >
            <Bomb />
            Delete
          </Button>

          <Button
            variant="secondary"
            className="text-sm"
            onClick={() => {
              updateFightingInstructor(ticks);
              setOpen(false);
            }}
          >
            <SaveIcon />
            Save
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
