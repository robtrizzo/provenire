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
import { TypographyH4 } from "@/components/ui/typography";
import { Clock as ClockType } from "@/types/game";
import ScoutingSummary from "./scouting-summary";

export default function ScoutingInput({
  scouting,
  updateScouting,
  removeScouting,
}: {
  scouting: ClockType;
  updateScouting: (ticks: number) => void;
  removeScouting: () => void;
}) {
  const { name, clock } = scouting;

  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(scouting.ticks);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <ScoutingSummary
            scoutingClock={scouting}
            className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <TypographyH4 className="mt-0">{name}</TypographyH4>
        <div className="flex justify-center">
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
        <div className="flex justify-between mt-4">
          <Button
            variant="destructive"
            className="text-sm"
            onClick={() => {
              removeScouting();
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
              updateScouting(ticks);
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
