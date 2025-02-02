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
import { Operation } from "@/types/game";
import OperationSummary from "./operation-summary";

export default function OperationInput({
  operation,
  updateOperation,
  removeOperation,
  enable,
}: {
  operation: Operation;
  updateOperation: (ticks: number) => void;
  removeOperation: () => void;
  enable: boolean;
}) {
  const { name, clock, effect } = operation;

  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(operation.ticks);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {enable ? (
        <PopoverTrigger asChild>
          <div>
            <OperationSummary
              operation={operation}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          </div>
        </PopoverTrigger>
      ) : (
        <div>
          <OperationSummary
            operation={operation}
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
        <TypographyP>{effect}</TypographyP>
        <div className="flex mt-2">
          <Button
            variant="destructive"
            type="button"
            onClick={() => {
              removeOperation();
              setOpen(false);
            }}
          >
            <Bomb />
            Remove
          </Button>
          <Button
            variant="secondary"
            className="text-sm ml-auto"
            onClick={() => {
              updateOperation(ticks);
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
