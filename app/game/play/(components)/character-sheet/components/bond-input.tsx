"use client";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Close } from "@radix-ui/react-popover";
import { X, SaveIcon, Bomb } from "lucide-react";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { Bond } from "@/types/game";
import { ActionScore } from "@/components/action-score";

export default function BondInput({
  bond,
  handleSave,
  handleChangeScore,
  handleDeleteBond = () => {},
}: {
  bond: Bond;
  handleSave: (name: string, description: string) => void;
  handleChangeScore: (s: number[]) => void;
  handleDeleteBond: () => void;
}) {
  const [open, setOpen] = useState(false);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="hover:bg-secondary hover:cursor-pointer rounded-md box-border p-2 transition-all max-w-96">
          {isMounted && [
            <div
              className="flex justify-between items-center"
              key={`${bond.name}-score`}
            >
              <TypographyP>{bond.name || "Bond Name"}</TypographyP>
              <div onClick={(e) => e.stopPropagation()}>
                <ActionScore score={bond.score} onChange={handleChangeScore} />
              </div>
            </div>,
            <TypographyP
              className="text-muted-foreground text-xs"
              key={`${bond.description}-desc`}
            >
              {bond.description || "Bond Description"}
            </TypographyP>,
          ]}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 relative">
        <TypographyH4 className="text-md">Edit Bond</TypographyH4>
        <Input
          id="bond-name"
          placeholder="Bond Name"
          defaultValue={bond.name}
        />
        <Textarea
          id="bond-description"
          placeholder="Bond Description"
          defaultValue={bond.description}
          className="mt-2"
        />
        <div className="mt-2 flex justify-between">
          <Button
            variant="destructive"
            className="text-sm"
            onClick={() => {
              handleDeleteBond();
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
              const name =
                (document.getElementById("bond-name") as HTMLInputElement)
                  ?.value || "";
              const description = (
                document.getElementById(
                  "bond-description"
                ) as HTMLTextAreaElement
              ).value;
              handleSave(name, description);
              setOpen(false);
            }}
          >
            <SaveIcon />
            Save
          </Button>
        </div>
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
      </PopoverContent>
    </Popover>
  );
}
