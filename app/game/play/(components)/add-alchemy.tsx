import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Item } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TypographyH4 } from "@/components/ui/typography";
import items from "@/public/items.json";
import { Separator } from "@/components/ui/separator";
import AlchemySummary from "./alchemy-summary";

export default function AddAlchemy({
  addAlchemy,
}: {
  addAlchemy: (item: Item) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add alchemy
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0">Alchemy</TypographyH4>
        <Separator className="my-2 " />
        {items.formulae.map((al, idx) => (
          <div key={`${al.name}${idx}`} onClick={() => addAlchemy(al)}>
            <AlchemySummary
              item={al}
              className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
