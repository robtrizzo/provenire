import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TypographyH4 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Gladiator } from "@/types/game";
import gladiators from "@/public/gladiators.json";
import GladiatorSummary from "./gladiator-summary";

export default function AddGladiator({
  addGladiator,
}: {
  addGladiator: (gladiator: Gladiator) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add gladiator
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0">Crew Gladiators</TypographyH4>
        <Separator className="my-2 " />
        {gladiators.crew.map((g, idx) => (
          <div key={`${g.name}${idx}`} onClick={() => addGladiator(g)}>
            <GladiatorSummary
              gladiator={g}
              className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
