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
  TypographyH4,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { X, BookOpen } from "lucide-react";

export default function ConditionsInfo() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen className="text-blue-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto text-sm">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3>Conditions</TypographyH3>
        <TypographyP>
          <strong>Conditions</strong> are powerful negative emotions which the
          PCs cannot shed without some effort.
        </TypographyP>
        <TypographyP>
          For each condition a character has, their <strong>max stress</strong>{" "}
          is reduced by 1. If a PC&apos;s <b>max stress</b> is <b>0</b>, they
          can no longer mark <b>conditions</b>.
        </TypographyP>
        <TypographyP>
          To <b>clear a condition</b>, the PC can:
        </TypographyP>
        <TypographyUnorderedList>
          <li>
            undergo a <b>psyche massage</b> during the <b>Prelude</b>
          </li>
          <li>
            spend <b>1 ¤F</b> while <b>Taking a Breather</b>
          </li>
          <li>
            <b>Getting Emotional</b> during a mission
          </li>
        </TypographyUnorderedList>
        <TypographyH4>Getting Emotional</TypographyH4>
        <TypographyP>
          Bottling up negative emotions works, for a time. But it doesn&apos;t
          make them go away. Allowing them to manifest and be experienced fully
          - that can bring some potential catharsis.
        </TypographyP>
        <TypographyP>
          When you feel that your characater&apos;s conditions would be
          affecting them during a mission, you may mark{" "}
          <i>&quot;I&apos;m feeling emotional&quot;</i> in the roll widget.
          While this is marked, your <b>action rolls</b> will have a{" "}
          <b>condition die</b>.
        </TypographyP>
        <TypographyP>
          The <b>condition die</b> has four sides of <b>1</b> and two sides of{" "}
          <b>6</b>. It randomly replaces one of the other dice in your roll. If
          you roll a <b>6</b> on the <b>condition die</b>, you may{" "}
          <b>clear a condition</b> and unmark{" "}
          <i>&quot;I&apos;m feeling emotional&quot;</i>. Otherwise unmark{" "}
          <i>&quot;I&apos;m feeling emotional&quot;</i> at the end of the scene.
        </TypographyP>
        <TypographyH4>Invoking Conditions</TypographyH4>
        <TypographyP>
          The <b>Narrator</b> may freely invoke one of your conditions to cause
          problems for you in the fiction. When they do, mark <b>+1 xp</b>. You
          may resist this as normal, or you may choose to{" "}
          <b>steel your heart</b>.
        </TypographyP>
        <TypographyP className="mt-4 text-lg font-sans">
          <b>Steeling Your Heart</b>
        </TypographyP>
        <TypographyP>
          When you <b>steel your heart</b>, you still mark <b>+1 xp</b> from the{" "}
          <b>Narrator</b> invoking your condition. You describe how you
          compartmentalize your emotions - the <b>Narrator</b> may no longer
          invoke that condition for the rest of the mission.
        </TypographyP>
      </PopoverContent>
    </Popover>
  );
}
