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
import { Operation } from "@/types/game";
import OperationSummary from "./operation-summary";
import operations from "@/public/operations.json";

export default function AddOperation({
  addOperation,
}: {
  addOperation: (operation: Operation) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add operation
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 max-h-96 overflow-y-auto">
        <TypographyH4 className="mt-0 capitalize">Operations</TypographyH4>
        <Separator className="my-2 " />
        {operations.map((o, idx) => (
          <div key={`${o.name}${idx}`} className="mt-4">
            <div
              key={`${o.name}${idx}`}
              onClick={() => {
                addOperation(o);
                setOpen(false);
              }}
            >
              <OperationSummary
                operation={o}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
