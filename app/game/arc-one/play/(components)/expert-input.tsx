"use client";

import { useState, useEffect } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { SaveIcon, Bomb } from "lucide-react";
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
  removeExpert,
  variant,
  enable,
}: {
  expert: Cohort;
  updateExpert: (ticks: number) => void;
  removeExpert?: () => void;
  variant?: string;
  enable: boolean;
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
      {enable ? (
        <PopoverTrigger asChild>
          <div>
            {isMounted && (
              <GangSummary
                gang={expert}
                variant={variant}
                className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
              />
            )}
          </div>
        </PopoverTrigger>
      ) : (
        <div>
          {isMounted && (
            <GangSummary
              gang={expert}
              variant={variant}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          )}
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
        <b>Location: {location}</b>
        <br />
        <span>
          <b>Traits:</b>
          <span className="ml-2 text-muted-foreground">
            {traits.join(", ")}
          </span>
        </span>
        <div className="flex mt-2">
          {variant === "recruit" && (
            <Button
              variant="destructive"
              type="button"
              onClick={() => {
                if (removeExpert) {
                  removeExpert();
                }
              }}
            >
              <Bomb />
              Remove
            </Button>
          )}
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
