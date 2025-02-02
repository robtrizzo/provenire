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
import GladiatorSummary from "./gladiator-summary";
import { Gladiator } from "@/types/game";

export default function GladitorInput({
  gladiator,
  updateGladiator,
  removeGladiator,
  enable,
}: {
  gladiator: Gladiator;
  updateGladiator: (rank: number) => void;
  removeGladiator: () => void;
  enable: boolean;
}) {
  const { name } = gladiator;

  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(gladiator.rank);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {enable ? (
        <PopoverTrigger asChild>
          <div>
            <GladiatorSummary
              gladiator={gladiator}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          </div>
        </PopoverTrigger>
      ) : (
        <div>
          <GladiatorSummary
            gladiator={gladiator}
            className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
          />
        </div>
      )}
      <PopoverContent>
        <TypographyH4 className="mt-0">{name}</TypographyH4>
        <div className="flex justify-center">
          <Clock
            max={4}
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
              removeGladiator();
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
              updateGladiator(ticks);
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
