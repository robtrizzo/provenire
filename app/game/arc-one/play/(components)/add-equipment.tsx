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
import ItemSummary from "./item-summary";
import { Separator } from "@/components/ui/separator";

export default function AddEquipment({
  addItem,
  variant = "equipment",
}: {
  addItem: (item: Item) => void;
  variant?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add {variant}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0 capitalize">{variant}</TypographyH4>
        <Separator className="my-2 " />
        {items.schematics.map((it, idx) => (
          <div key={`${it.name}${idx}`} onClick={() => addItem(it)}>
            <ItemSummary
              item={it}
              className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
