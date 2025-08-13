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
import { X, BookOpen, ArrowRight } from "lucide-react";

export default function XPInfo() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-blue-600 hover:text-sky-600 h-10 w-10"
        >
          <BookOpen style={{ height: "24px", width: "24px" }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3 className="text-md">Experience</TypographyH3>
        <TypographyP className="text-sm">
          You can gain <b>xp</b> during, and in the <b>Aftermath</b> of a
          mission. You can advance your character by taking the <b>train</b> or{" "}
          <b>consort</b> downtime action to clear <b>xp clocks</b>.
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
          <li>
            You materially improved the conditions of workers in the Steel Trap
          </li>
          <li>
            You struck fear into your foes&apos; hearts with extreme violence
          </li>
          <li>You expressed your dream, heritage, or background</li>
          <li>You struggled with your hurt or conditions</li>
          <li>You grew closer to someone in your crew</li>
          <li>
            You grew apart from someone in the crew... also{" "}
            <b>strain your bond</b>
            <sup className="text-amber-500">*</sup>{" "}
          </li>
        </TypographyUnorderedList>
        <span className="text-muted-foreground text-sm mb-4">
          <sup className="text-amber-500">*</sup>Bonds are WIP and will be
          expanded on in the next update.
        </span>
        <TypographyH3 className="text-md mt-4 text-muted-foreground">
          Advancement
        </TypographyH3>
        <TypographyP className="text-sm">
          Advancements cost a number of <b>xp clocks</b> you must expend.
        </TypographyP>
        <div className="flex justify-center">
          <div>
            <div className="flex items-center gap-4 mt-4">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <span className="text-sm">1 xp clock</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <span className="text-sm">2 xp clocks</span>
            </div>
            <div className="flex items-center gap-4 mt-4 mb-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <span className="text-sm">2 xp clocks</span>
            </div>
            <span className="mt-4 text-sm">
              <span className="text-amber-500">archetype ability</span>: 2 xp
              clocks
            </span>
            <div className="flex items-center gap-4 mt-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <span className="text-sm">3 xp clocks</span>
            </div>
            <div className="flex items-center gap-4 mt-4 mb-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <span className="text-sm">3 xp clocks</span>
            </div>
            <span className="mt-4 text-sm">
              <span className="text-indigo-500">skillset ability</span>: 3 xp
              clocks
            </span>
            <div className="flex items-center gap-4 mt-2">
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
              <ArrowRight className="h-4 w-4 text-primary" />
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
              <span className="text-sm">4 xp clocks</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
