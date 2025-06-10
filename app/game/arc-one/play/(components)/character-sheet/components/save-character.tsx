import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4 } from "@/components/ui/typography";
import {
  CloudUpload,
  HardDriveDownload,
  X,
  Loader,
  Save as SaveIcon,
} from "lucide-react";
import { Close } from "@radix-ui/react-popover";
import { useMutation } from "@tanstack/react-query";

export default function SaveCharacter({
  initialName,
}: {
  initialName: string;
}) {
  const [name, setName] = useState(initialName);
  const [open, setOpen] = useState(false);

  function closePopover() {
    setOpen(false);
  }

  function saveToDevice() {
    const data = localStorage.getItem("charsheet");
    if (!data) {
      return;
    }
    const blob = new Blob([data], { type: "text/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.json`;
    a.click();
  }

  const { mutateAsync: saveToCloud, isPending } = useMutation({
    mutationFn: async () => {
      const data = localStorage.getItem("charsheet");
      if (!data) {
        return;
      }
      const response = await fetch(`/api/characters/upload`, {
        method: "POST",
        body: JSON.stringify({ character: data }),
      });
      return response.json();
    },
    onError: (error) => {
      console.error("Error saving character to cloud", error);
    },
    onSuccess: () => {
      closePopover();
    },
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary" className="text-sm">
          <SaveIcon />
          Save
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-secondary relative">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md">Save Character</TypographyH4>
          <span className="font-serif text-sm text-muted-foreground mt-0">
            Your character is also saved to your browser&apos;s local storage
            every 0.5 seconds.
          </span>
          <div className="grow">
            <Input
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={() => saveToDevice()}>
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
