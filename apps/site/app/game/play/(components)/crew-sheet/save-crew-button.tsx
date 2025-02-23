import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH4 } from "@/components/ui/typography";
import { Save, HardDriveDownload, X, Loader, CloudUpload } from "lucide-react";
import { Close } from "@radix-ui/react-popover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMutation } from "@tanstack/react-query";
import { useCrewSheet } from "@/contexts/crewSheetContext";

export default function SaveCrewButton() {
  const { name, setName, setChanges } = useCrewSheet();
  const [open, setOpen] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function closePopover() {
    setOpen(false);
  }

  function saveToDevice() {
    const data = localStorage.getItem("crewsheet");
    if (!data) {
      return;
    }
    const blob = new Blob([data], { type: "text/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${nameInputRef.current?.value}.json`;
    a.click();
  }

  const { mutateAsync: saveToCloud, isPending } = useMutation({
    mutationFn: async () => {
      const data = localStorage.getItem("crewsheet");
      if (!data) {
        return;
      }
      if (nameInputRef.current) {
        handleSetName(nameInputRef.current.value);
      }
      const dataObject = JSON.parse(data);
      const crew = { ...dataObject, name: nameInputRef.current?.value };
      const response = await fetch("/api/crews", {
        method: "POST",
        body: JSON.stringify(crew),
      });
      return response.json() as Promise<{ success: boolean }>;
    },
    onError: (error: unknown) => {
      console.error("Error saving character to cloud", error);
    },
    onSuccess: () => {
      closePopover();
    },
  });

  function handleSetName(newName: string) {
    setName(newName);
    setChanges(true);
  }

  function handleSaveToDevice() {
    if (nameInputRef.current) {
      handleSetName(nameInputRef.current.value);
    }
    saveToDevice();
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary" className="text-sm">
          <Save />
          Save
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-secondary relative">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md mt-0">Save Crew</TypographyH4>
          <span className="font-serif text-sm text-muted-foreground mt-0">
            The crew is also saved to your browser&apos;s local storage every
            0.5 seconds.
          </span>
          <form className="grow">
            <Input
              ref={nameInputRef}
              name="name"
              id="name"
              placeholder="Name"
              defaultValue={name}
            />
          </form>
          <Button variant="outline" onClick={() => handleSaveToDevice()}>
            <HardDriveDownload />
            Save to Device
          </Button>
          <Button
            variant="outline"
            disabled={isPending}
            onClick={async () => {
              await saveToCloud();
            }}
          >
            {isPending ? <Loader className="animate-spin" /> : <CloudUpload />}
            Save to Cloud
          </Button>
        </div>
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
      </PopoverContent>
    </Popover>
  );
}
