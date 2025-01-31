"use client";

import { useState, useEffect } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cohort } from "@/types/game";
import GangSummary from "./gang-summary";
import { TypographyH4 } from "@/components/ui/typography";

export default function ExpertInput({
  expert,
  updateExpert,
}: {
  expert: Cohort;
  updateExpert: (ticks: number) => void;
}) {
  const { name, clock, location, traits } = expert;

  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(expert.ticks);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          {isMounted && (
            <GangSummary
              gang={expert}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          )}
        </div>
      </PopoverTrigger>
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
        <b>Location: {location}</b>
        <br />
        <span>
          <b>Traits:</b>
          <span className="ml-2 text-muted-foreground">
            {traits.join(", ")}
          </span>
        </span>
        <div className="flex mt-2">
          <Button
            variant="secondary"
            className="text-sm ml-auto"
            onClick={() => {
              updateExpert(ticks);
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
