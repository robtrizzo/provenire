import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import {
  TypographyP,
  TypographyH3,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { X, BookOpen } from "lucide-react";

export default function XPInfo() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen className="text-blue-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3 className="text-md">Experience</TypographyH3>
        <TypographyP className="text-sm">
          You can gain <b>xp</b> during, and in the <b>Aftermath</b> of a
          mission. You can spend <b>xp clocks</b> to advance your character by
          taking the <b>train</b> or <b>consort</b> downtime action.
        </TypographyP>
        <TypographyH3 className="text-md mt-4 text-muted-foreground">
          During Mission
        </TypographyH3>
        <TypographyP className="text-sm">
          <b>+1 xp</b> when...
        </TypographyP>
        <TypographyUnorderedList className="text-sm">
          <li>
            you roll <b>1-3</b> on an <b>action roll</b>
          </li>
          <li>
            you make an <b>action roll</b> in a <b>desperate position</b>
          </li>
          <li>
            you roll <b>0d</b>
          </li>
          <li>
            you lead a <b>group action</b>
          </li>
          <li>
            the <b>Narrator</b> invokes one of your <b>harms</b>
          </li>
          <li>
            the <b>Narrator</b> invokes one of your <b>conditions</b>
          </li>
        </TypographyUnorderedList>
        <TypographyH3 className="text-md mt-4 text-muted-foreground">
          Mission Aftermath
        </TypographyH3>
        <TypographyP className="text-sm">
          At the end of each mission, for each item below that occurred,{" "}
          <b>+1 xp</b>. <b>+2 xp</b> if that item occurred multiple times.
        </TypographyP>
        <TypographyUnorderedList className="text-sm">
          <li>You looked damn good on camera</li>
          <li>
            You struck fear into the Empire&apos;s foes with extreme violence
          </li>
          <li>You struggled with your past or your conditions</li>
          <li>You grew closer to someone in your crew</li>
          <li>
            You grew apart from someone in the crew... also{" "}
            <b>strain your bond</b>
          </li>
        </TypographyUnorderedList>
      </PopoverContent>
    </Popover>
  );
}
