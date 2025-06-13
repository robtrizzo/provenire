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
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { Faction } from "@/types/game";
import FactionSummary from "./faction-summary";

export default function FactionInput({
  faction,
  updateFaction,
  enable,
}: {
  faction: Faction;
  updateFaction: (ticks: number) => void;
  enable: boolean;
}) {
  const { name, location, description, agenda, clock } = faction;
  const [ticks, setTicks] = useState(faction.ticks);
  const [open, setOpen] = useState(false);

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
              <FactionSummary
                faction={faction}
                className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
              />
            )}
          </div>
        </PopoverTrigger>
      ) : (
        <div>
          {isMounted && (
            <FactionSummary
              faction={faction}
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
        <TypographyP className="text-muted-foreground">
          {description}
        </TypographyP>
        <TypographyP>
          <b>Location: {location}</b>
        </TypographyP>
        <br />
        <TypographyP>
          <b>Agenda: {agenda}</b>
        </TypographyP>
        <div className="flex mt-2">
          <Button
            variant="secondary"
            className="text-sm ml-auto"
            onClick={() => {
              updateFaction(ticks);
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
