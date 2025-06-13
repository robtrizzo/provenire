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
import Link from "next/link";
import { X, BookOpen } from "lucide-react";

export default function ConditionsInfo() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
        >
          <BookOpen style={{ height: "24px", width: "24px" }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto text-sm">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3>Conditions</TypographyH3>
        <TypographyP>
          <strong>Conditions</strong> are powerful negative emotions which the
          PCs cannot shed without some effort. They can be compartmentalized and
          ignored for a time, but once the mission is done and PCs have to
          return to everyday life, that&apos;s when <strong>conditions</strong>{" "}
          rear their heads.
        </TypographyP>
        <TypographyP>
          For each condition a character has, their{" "}
          <strong>stress track</strong> is reduced by 2 (to a minimum of 1). If
          a PC can no longer take another <strong>condition</strong>, they must
          lash out against the machine.
        </TypographyP>
        <TypographyP>
          Each <strong>condition</strong> prohibits two different downtime
          activities. They can be removed by either <strong>clearing</strong>{" "}
          them or <strong>recovering</strong> from them. To{" "}
          <strong>recover from them</strong>, another PC can{" "}
          <strong>comfort</strong> your character, advancing your{" "}
          <strong>recovery</strong> clock. More on <strong>recovery</strong>{" "}
          <span className="text-red-600 underline">
            <Link href="/game/arc-one/prelude#downtime">here</Link>
          </span>
          . To <strong>clear</strong> a <strong>condition</strong>, the PC has
          to do a unique shitty thing which is both a narrative action and a
          material cost. If they do this, they mark <strong>+1xp</strong> and
          clear their <strong>stress track</strong>.
        </TypographyP>
        <TypographyP>
          The <strong>conditions</strong> are:
        </TypographyP>
        <TypographyUnorderedList>
          <li>
            <strong>Afraid</strong>: You cannot <strong>train</strong> or pursue
            a <strong>long term project</strong>. Clear by running from
            something difficult (<strong>-2 rep or goodwill</strong>).
          </li>
          <li>
            <strong>Angry</strong>: You cannot <strong>comfort</strong>.{" "}
            <strong>Taking a breather</strong> requires a downtime activity.
            Clear by breaking something important (<strong>-2 material</strong>)
            or hurting someone (<strong>-2 goodwill</strong>).
          </li>
          <li>
            <strong>Guilty</strong>: You cannot <strong>shift blame</strong> or{" "}
            <strong>recover</strong>. Clear by confessing to someone and making
            a sacrifice (<strong>+7 heat or -2 materials</strong>).
          </li>
          <li>
            <strong>Insecure</strong>: You cannot <strong>train</strong> or{" "}
            <strong>shift blame</strong>. Clear by taking foolhardy action
            without telling the crew (<strong>-2 intel</strong> or{" "}
            <strong>raise the stakes</strong>).
          </li>
          <li>
            <strong>Hopeless</strong>: You cannot <strong>comfort</strong> or{" "}
            pursue a <strong>long term project</strong>. Clear by flinging
            yourself into easy relief (<strong>-2 food or rep</strong>).
          </li>
        </TypographyUnorderedList>
        <TypographyP>
          The <strong>Narrator</strong> may freely invoke one of your conditions
          to cause problems for you in the fiction. When they do, mark{" "}
          <strong>+1 xp</strong>. You may resist this as normal, or you may
          choose to <strong>steel your heart</strong>.
        </TypographyP>
        <TypographyH4 className="mt-4">Steeling Your Heart</TypographyH4>
        <TypographyP>
          When you <strong>steel your heart</strong>, you still mark{" "}
          <strong>+1 xp</strong> from the <strong>Narrator</strong> invoking
          your condition. You describe how you compartmentalize your emotions -
          the <strong>Narrator</strong> may no longer invoke that condition for
          the rest of the mission, though you become vulnerable to the{" "}
          <strong>drone</strong> and{" "}
          <span className="font-bold text-fuchsia-700 underline">
            <Link href="/game/arc-one/setting/strange-forces#kings-spell">
              The King&apos;s Spell
            </Link>
          </span>
          .
        </TypographyP>
      </PopoverContent>
    </Popover>
  );
}
