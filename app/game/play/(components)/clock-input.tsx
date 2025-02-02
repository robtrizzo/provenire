"use client";
import { useState, useRef } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { SaveIcon, Bomb } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Clock as ClockType } from "@/types/game";
import ClockSummary from "./clock-summary";
import { Input } from "@/components/ui/input";

export default function ClockInput({
  clock,
  updateClock,
  removeClock,
}: {
  clock: ClockType;
  updateClock: (name: string, ticks: number) => void;
  removeClock: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(clock.ticks);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newName = formData.get("name") as string;
      updateClock(newName, ticks);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <ClockSummary
            clock={clock}
            className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Input defaultValue={clock.name} size={10} name="name" />
          <div className="flex justify-center">
            <Clock
              max={clock.clock}
              current={ticks}
              setVal={(n) => {
                setTicks(n);
              }}
              width={35}
              height={35}
            />
          </div>
          <div className="flex mt-2">
            <Button
              variant="destructive"
              type="button"
              onClick={() => removeClock()}
            >
              <Bomb />
              Remove
            </Button>
            <Button
              variant="secondary"
              className="text-sm ml-auto"
              type="submit"
            >
              <SaveIcon />
              Save
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
