"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bomb } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { Blackmail } from "@/types/game";
import BlackmailSummary from "./blackmail-summary";

export default function BlackmailInput({
  blackmail,
  removeBlackmail,
  enable,
}: {
  blackmail: Blackmail;
  removeBlackmail: () => void;
  enable: boolean;
}) {
  const { name, effect } = blackmail;
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      {enable ? (
        <PopoverTrigger asChild>
          <div>
            <BlackmailSummary
              blackmail={blackmail}
              className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
            />
          </div>
        </PopoverTrigger>
      ) : (
        <div>
          <BlackmailSummary
            blackmail={blackmail}
            className="mt-1 py-1 px-2 rounded-md hover:bg-secondary"
          />
        </div>
      )}
      <PopoverContent>
        <TypographyH4 className="mt-0">{name}</TypographyH4>
        <TypographyP>{effect}</TypographyP>
        <div className="flex justify-between mt-4">
          <Button
            variant="destructive"
            className="text-sm"
            onClick={() => {
              removeBlackmail();
              setOpen(false);
            }}
          >
            <Bomb />
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
