"use client";
import { useState, useRef, FormEvent } from "react";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ImageUp, CloudUpload, Bomb } from "lucide-react";
import { upload } from "@vercel/blob/client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
export default function Portrait({ className }: { className?: string }) {
  const { portrait, setPortrait, setChanges } = useCharacterSheet();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const newBlob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/avatar/upload",
    });

    setPortrait(newBlob.url);
    setChanges(true);
    setOpen(false);
    // possibly send an async update to save a portrait entry & delete past portraits for this character
  }

  return (
    <div
      className={cn(
        "flex-shrink-0 w-[116px] h-[116px] border-solid border-text-secondary border-[1px] box-border p-1 rounded-md flex items-center justify-center",
        className
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        {portrait ? (
          <PopoverTrigger asChild>
            <Image
              priority={true}
              src={portrait}
              alt="character portrait"
              height={108}
              width={108}
              className="rounded-md hover:cursor-pointer"
            />
          </PopoverTrigger>
        ) : (
          <PopoverTrigger asChild>
            <Button size="icon" variant="secondary">
              <ImageUp />
            </Button>
          </PopoverTrigger>
        )}
        <PopoverContent className="w-80 bg-secondary">
          <form
            className="flex flex-col max-w-80 gap-1"
            onSubmit={handleSubmit}
          >
            <Input name="file" ref={inputFileRef} type="file" required />
            <Button variant="outline" type="submit">
              Upload <CloudUpload />
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setPortrait("");
                setChanges(true);
                setOpen(false);
              }}
            >
              Clear <Bomb />
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
