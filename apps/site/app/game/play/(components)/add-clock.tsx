import { useState, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TypographyH4 } from "@/components/ui/typography";
import { Clock } from "@/types/game";
import { Input } from "@/components/ui/input";
import { SaveIcon } from "lucide-react";

export default function AddClock({
  addClock,
}: {
  addClock: (clock: Clock) => void;
}) {
  const [open, setOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const clockName = formData.get("clockName") as string;
      const clockSize = formData.get("clockSize") as unknown as number;
      const newClock = { name: clockName, clock: clockSize, ticks: 0 };
      addClock(newClock);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add clock
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0">Create a new clock</TypographyH4>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-1"
        >
          <Input defaultValue="New Clock" name="clockName" size={10} />
          <Input type="number" defaultValue={3} name="clockSize" size={10} />
          <Button variant="secondary" className="text-sm ml-auto" type="submit">
            <SaveIcon />
            Save
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
