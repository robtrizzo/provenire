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
import {
  CloudDownload,
  HardDriveUpload,
  X,
  FileUp,
  TriangleAlert,
} from "lucide-react";
import { Close } from "@radix-ui/react-popover";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function LoadCharacter({
  onLoad,
  compatibleVersions,
  lsKey,
}: {
  onLoad: (date: Date) => void;
  compatibleVersions: number[];
  lsKey?: string;
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
        localStorage.setItem(lsKey || "charsheet", data.toString());
        onLoad(new Date());
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
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md">Load Character</TypographyH4>
          <code className="text-xs text-red-600 font-bold mt-0">
            This will overwrite your current character!
          </code>
          <Button variant="outline" onClick={() => loadFromDevice()}>
            <HardDriveUpload />
            Load from Device
          </Button>
          <LoadFromCloud
            closePopover={closePopover}
            onLoad={onLoad}
            compatibleVersions={compatibleVersions}
            lsKey={lsKey}
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
  closePopover,
  onLoad,
  compatibleVersions,
  lsKey,
}: {
  closePopover: () => void;
  onLoad: (date: Date) => void;
  compatibleVersions: number[];
  lsKey?: string;
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
              closeDialog={closeDialog}
              closePopover={closePopover}
              onLoad={onLoad}
              compatibleVersions={compatibleVersions}
              lsKey={lsKey}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LoadCharacterButton({
  char,
  closeDialog,
  closePopover,
  onLoad,
  compatibleVersions,
  lsKey,
}: {
  char: any;
  closeDialog: () => void;
  closePopover: () => void;
  onLoad: (date: Date) => void;
  compatibleVersions: number[];
  lsKey?: string;
}) {
  const isCompatible = compatibleVersions.includes(char.version);

  function loadCharacter() {
    if (!isCompatible) {
      console.error(
        `Cannot load character sheet with incompatible version: ${
          char.version
        }. Try loading one with a compatible version: ${compatibleVersions.join(
          ", "
        )}`
      );
    }
    localStorage.setItem(lsKey || "charsheet", JSON.stringify(char));
    onLoad(new Date());
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

      {isCompatible ? (
        <div className="absolute bottom-0 right-0 z-20 rounded-full h-8 min-w-8 bg-linear-45 from-black to-slate-600 border-[1px] border-border flex items-center justify-center px-2">
          <code className="text-xs">v{char.version || 1}</code>
        </div>
      ) : (
        <div className="absolute bottom-0 right-0 z-20 rounded-full h-8 min-w-8 bg-linear-45 from-black to-red-950 border-[1px] border-border flex items-center justify-center px-2">
          <code className="text-xs text-red-500 font-bold">
            <TriangleAlert className="inline-flex" size={14} /> incompatible
            version: v{char.version || 1}
          </code>
        </div>
      )}
    </div>
  );
}
