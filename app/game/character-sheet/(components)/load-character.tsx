/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TypographyH4 } from "@/components/ui/typography";
import { CloudDownload, HardDriveUpload, X, FileUp } from "lucide-react";
import { Close } from "@radix-ui/react-popover";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function LoadCharacter({
  triggerCharacterLoaded,
}: {
  triggerCharacterLoaded: () => void;
}) {
  const [open, setOpen] = useState(false);

  function closePopover() {
    setOpen(false);
  }

  function loadFromDevice() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.click();
    input.addEventListener("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (!data) {
          return;
        }
        localStorage.setItem("charsheet", data.toString());
        triggerCharacterLoaded();
        closePopover();
      };
      reader.readAsText(file);
    });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary" className="text-sm">
          <FileUp />
          Load
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-secondary">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md">Load Character</TypographyH4>
          <span className="font-serif text-sm text-red-600 font-bold mt-0">
            This will overwrite your current character!
          </span>
          <Button variant="outline" onClick={() => loadFromDevice()}>
            <HardDriveUpload />
            Load from Device
          </Button>
          <LoadFromCloud
            triggerCharacterLoaded={triggerCharacterLoaded}
            closePopover={closePopover}
          />
          <Close asChild>
            <Button variant="destructive" className="text-sm">
              <X />
              Cancel
            </Button>
          </Close>
        </div>
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
      </PopoverContent>
    </Popover>
  );
}

function LoadFromCloud({
  triggerCharacterLoaded,
  closePopover,
}: {
  triggerCharacterLoaded: () => void;
  closePopover: () => void;
}) {
  const [open, setOpen] = useState(false);
  function closeDialog() {
    setOpen(false);
  }
  const { data, isPending } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await fetch("/api/characters/", { cache: "no-cache" });
      return response.json();
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CloudDownload />
          Load from Cloud
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select a character</DialogTitle>
          <DialogDescription>
            This will overwrite your current character!
          </DialogDescription>
        </DialogHeader>
        {isPending && <div>Loading...</div>}
        {data?.error && <div>Error: {data.error}</div>}
        <div className="flex flex-wrap gap-2">
          {data?.characters?.map((char: any, idx: number) => (
            <LoadCharacterButton
              key={idx}
              char={char}
              triggerCharacterLoaded={triggerCharacterLoaded}
              closeDialog={closeDialog}
              closePopover={closePopover}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LoadCharacterButton({
  char,
  triggerCharacterLoaded,
  closeDialog,
  closePopover,
}: {
  char: any;
  triggerCharacterLoaded: () => void;
  closeDialog: () => void;
  closePopover: () => void;
}) {
  function loadCharacter() {
    localStorage.setItem("charsheet", JSON.stringify(char));
    triggerCharacterLoaded();
    closeDialog();
    closePopover();
  }

  return (
    <div
      key={char.name}
      className="relative w-56 h-24 rounded-md border-[1px] border-border"
      onClick={() => loadCharacter()}
    >
      {char.portrait && (
        <Image
          src={char.portrait}
          alt="character portrait"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 224px) 100vw, 50vw"
          className="z-0 rounded-md"
        />
      )}
      <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-opacity-30 hover:cursor-pointer transition-all duration-300">
        <b className="text-lg">{char.name}</b>
      </div>
    </div>
  );
}
