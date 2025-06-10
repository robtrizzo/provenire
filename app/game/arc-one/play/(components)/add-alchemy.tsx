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
import FormulaSummary from "./formula-summary";

export default function AddAlchemy({
  addAlchemy,
  variant = "alchemy",
}: {
  addAlchemy: (item: Item) => void;
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
        {items.formulae.map((al, idx) => (
          <div key={`${al.name}${idx}`} onClick={() => addAlchemy(al)}>
            {variant === "alchemy" && (
              <AlchemySummary
                item={al}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            )}
            {variant === "formula" && (
              <FormulaSummary
                item={al}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
