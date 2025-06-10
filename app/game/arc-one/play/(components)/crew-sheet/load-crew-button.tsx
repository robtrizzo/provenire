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
import { Crew } from "@/types/game";
import { useCrewSheet } from "@/contexts/crewSheetContext";

export default function LoadCrewButton() {
  const [open, setOpen] = useState(false);
  function closePopover() {
    setOpen(false);
  }

  const { setCrewLoaded } = useCrewSheet();
  function triggerCrewLoaded() {
    setCrewLoaded(new Date());
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
        localStorage.setItem("crewsheet", data.toString());
        triggerCrewLoaded();
        closePopover();
      };
      reader.readAsText(file);
    });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <FileUp /> Load
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-secondary">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md mt-0">Load Crew</TypographyH4>
          <span className="font-serif text-sm text-red-600 font-bold mt-0">
            This will overwrite the current crew!
          </span>
          <Button variant="outline" onClick={() => loadFromDevice()}>
            <HardDriveUpload />
            Load from Device
          </Button>
          <LoadFromCloud
            triggerCrewLoaded={triggerCrewLoaded}
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
  triggerCrewLoaded,
  closePopover,
}: {
  triggerCrewLoaded: () => void;
  closePopover: () => void;
}) {
  const [open, setOpen] = useState(false);
  function closeDialog() {
    setOpen(false);
  }
  const { data, isPending } = useQuery({
    queryKey: ["crews"],
    queryFn: async () => {
      const response = await fetch("/api/crews", { cache: "no-cache" });
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
          <DialogTitle>Select a crew</DialogTitle>
          <DialogDescription>
            This will overwrite your current crew!
          </DialogDescription>
        </DialogHeader>
        {isPending && <div>Loading...</div>}
        {data?.error && <div>Error: {data.error}</div>}
        <div className="flex flex-wrap gap-2">
          {data?.crews?.map((crew: Crew, idx: number) => (
            <CrewEntry
              key={idx}
              crew={crew}
              triggerCrewLoaded={triggerCrewLoaded}
              closeDialog={closeDialog}
              closePopover={closePopover}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CrewEntry({
  crew,
  triggerCrewLoaded,
  closeDialog,
  closePopover,
}: {
  crew: Crew;
  triggerCrewLoaded: () => void;
  closeDialog: () => void;
  closePopover: () => void;
}) {
  function loadCrew() {
    localStorage.setItem("crewsheet", JSON.stringify(crew));
    triggerCrewLoaded();
    closeDialog();
    closePopover();
  }

  return (
    <div
      key={crew.name}
      className="relative w-56 h-24 rounded-md border-[1px] border-border"
      onClick={() => loadCrew()}
    >
      <div className="absolute bottom-0 left-0 h-24 w-56 z-10 bg-black/50 rounded-md flex items-center justify-center hover:bg-opacity-30 hover:cursor-pointer transition-all duration-300">
        <b className="text-lg">{crew.name}</b>
      </div>
    </div>
  );
}
