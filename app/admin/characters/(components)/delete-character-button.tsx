"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH3 } from "@/components/ui/typography";
import { Character } from "@/types/game";
import { HardDriveDownload, Trash, Loader } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { saveCharacterToDevice } from "@/lib/utils";

export default function DeleteCharacterButton({
  character,
  handleRemoveCharacter,
}: {
  character: Character;
  handleRemoveCharacter: (characterName: string) => void;
}) {
  const [open, setOpen] = useState(false);

  function closePopover() {
    setOpen(false);
  }

  const { mutateAsync: deleteCharacter, isPending } = useMutation({
    mutationFn: async () => {
      const key = character.key;
      if (!key) {
        throw new Error("No key provided");
      }
      const response = await fetch(`/api/characters/${key}`, {
        method: "DELETE",
      });
      return response.json();
    },
    onError: (error) => {
      console.error("Error saving character to cloud", error);
    },
    onSuccess: () => {
      handleRemoveCharacter(character.name);
      closePopover();
    },
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <TypographyH3>Delete {character.name}</TypographyH3>
        <span>this action cannot be reversed</span>
        <div className="flex flex-col gap-1 p-2 bg-accent rounded-md">
          <code>player: {character.player ? character.player : "unknown"}</code>
          <code>key: {character.key}</code>
        </div>
        <Button
          variant="outline"
          onClick={() => saveCharacterToDevice(character.name)}
          className="mt-2"
        >
          <HardDriveDownload />
          Save to Device
        </Button>
        <Button
          variant="destructive"
          onClick={async () => {
            await deleteCharacter();
          }}
          className="mt-2"
        >
          {isPending ? <Loader className="animate-spin" /> : <Trash />}
          Delete from Cloud
        </Button>
      </PopoverContent>
    </Popover>
  );
}
