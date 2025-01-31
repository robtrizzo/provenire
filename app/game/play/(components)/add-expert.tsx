import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cohort } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TypographyH4 } from "@/components/ui/typography";
import cohorts from "@/public/cohorts.json";
import { Separator } from "@/components/ui/separator";
import GangSummary from "./gang-summary";

export default function AddExpert({
  addExpert,
}: {
  addExpert: (expert: Cohort) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add expert
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0">Gang</TypographyH4>
        <Separator className="my-2 " />
        {cohorts.experts.map((e, idx) => (
          <div key={`${e.name}${idx}`} onClick={() => addExpert(e)}>
            <GangSummary
              gang={e}
              className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
            />
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
