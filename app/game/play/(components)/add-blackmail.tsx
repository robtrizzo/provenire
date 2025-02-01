import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Blackmail } from "@/types/game";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TypographyH4 } from "@/components/ui/typography";
import blackmail from "@/public/blackmail.json";
import BlackmailSummary from "./blackmail-summary";

export default function AddBlackmail({
  addBlackmail,
}: {
  addBlackmail: (blackmail: Blackmail) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add blackmail
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0 capitalize">Blackmail</TypographyH4>
        <Separator className="my-2 " />
        <div className="max-h-96 overflow-auto">
          {blackmail.map((b, idx) => (
            <div key={`${b.name}${idx}`} onClick={() => addBlackmail(b)}>
              <BlackmailSummary
                blackmail={b}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
