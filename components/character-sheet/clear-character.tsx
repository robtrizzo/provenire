import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TypographyH4 } from "@/components/ui/typography";
import { X, Bomb } from "lucide-react";
import { Close } from "@radix-ui/react-popover";

export default function ClearCharacter({ onClear }: { onClear: () => void }) {
  const [open, setOpen] = useState(false);
  function closePopover() {
    setOpen(false);
  }

  function clearCharacter() {
    onClear();
    closePopover();
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="destructive" className="text-sm">
          <Bomb />
          Clear
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-2">
          <TypographyH4 className="text-md">Clear Character</TypographyH4>
          <span className="font-serif text-sm text-red-600 font-bold mt-0">
            This will overwrite your current character!
          </span>
          <Button
            variant="outline"
            className="text-sm"
            onClick={clearCharacter}
          >
            <Bomb />
            yeah, clear it
          </Button>
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
