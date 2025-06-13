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
import { ImageUp, CloudUpload, Bomb, Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";

export default function Portrait({ className }: { className?: string }) {
  const { portrait, setPortrait, name, setChanges } = useCharacterSheet();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [fetchTime, setFetchTime] = useState<Date>(new Date());

  const { mutateAsync: savePortrait, isPending } = useMutation({
    mutationFn: async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!inputFileRef.current?.files) {
        throw new Error("No file selected");
      }

      const presigned_response = await fetch(
        `/api/avatar/sign_post?name=${name}`,
        { cache: "no-cache" }
      );
      if (!presigned_response.ok) {
        throw new Error("Presigned link network response was not ok");
      }
      const presigned_data = await presigned_response.json();

      const file = inputFileRef.current.files[0];

      const formData = new FormData();
      formData.append("Content-Type", file.type);
      Object.entries(presigned_data.fields).forEach(([k, v]) => {
        formData.append(k, v as string);
      });
      formData.append("file", file);

      await fetch(presigned_data.url, {
        method: "POST",
        body: formData,
      });
    },
    onError: (error) => {
      console.error("Error saving character portrait to cloud", error);
    },
    onSuccess: () => {
      setPortrait(`${process.env.NEXT_PUBLIC_S3_BUCKET}/pc-art/${name}`);
      setFetchTime(new Date());
      setChanges(true);
      setOpen(false);
    },
  });

  return (
    <div
      className={cn(
        "shrink-0 w-[116px] h-[116px] border-solid border-text-secondary border-[1px] box-border p-1 rounded-md flex items-center justify-center",
        className
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        {portrait ? (
          <PopoverTrigger asChild>
            <div className="relative w-28 h-28">
              <Image
                src={`${portrait}?rf=${fetchTime}`}
                alt="character portrait"
                fill
                priority
                sizes="(max-width: 112px) 100vw, 50vw"
                className="object-cover object-center rounded-md hover:cursor-pointer"
              />
            </div>
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
            onSubmit={savePortrait}
          >
            <Input name="file" ref={inputFileRef} type="file" required />
            <Button variant="outline" type="submit">
              Upload{" "}
              {isPending ? (
                <Loader className="animate-spin" />
              ) : (
                <CloudUpload />
              )}
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
