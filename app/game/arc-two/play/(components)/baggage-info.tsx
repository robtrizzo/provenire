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
  TypographyBlockquote,
} from "@/components/ui/typography";
import { X, BookOpen } from "lucide-react";
import Clock from "@/components/clock";
export default function BaggageInfo() {
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
        <TypographyH3 className="font-cyber">Baggage</TypographyH3>
        <TypographyP>
          <b>Baggage</b> represents the memories{" "}
          <b className="font-cyber">Root</b> shelved coming back to light. This
          can be because of memory relapses or by encountering components of
          your past.
        </TypographyP>
        <TypographyP>
          There are two ways to unlock some <b>baggage</b>: being the{" "}
          <b>narrative focus</b>, or by filling the <b>memory clock</b> . If you
          are the <b>narrative focus</b> this cycle, you may choose any{" "}
          <b>baggage</b> to unlock at any point. If you fill the{" "}
          <b>memory clock</b>, you unlock a piece of <b>baggage</b> chosen at
          random.
        </TypographyP>
        <TypographyP>
          You may only unlock one piece of <b>baggage</b> per mission cycle.
          Each piece of <b>baggage</b> you unlock reduces your <b>max stress</b>{" "}
          by <b>1</b> (<b>-4 max stress</b> at most). At any time, you may
          contact <b className="font-cyber">Winith</b>, <b>Root&apos;s</b> head
          of HR and Wellness to re-shelve relapsed memories. This will reset
          your <b>max stress</b>, but remove all unlocked <b>baggage</b>{" "}
          rewards. <b className="font-cyber text-stone-500">Rivals</b> will
          continue to harry you though.
        </TypographyP>
        <TypographyBlockquote>
          The <b>memory clock</b> is a 4-piece clock{" "}
          <span className="inline-flex items-center gap-1">
            <Clock
              height={20}
              width={20}
              max={4}
              current={0}
              clickable={false}
            />
          </span>{" "}
          advanced by marking a <b>condition</b> or a <b>level 3 harm</b>.
        </TypographyBlockquote>
        <TypographyH4 className="font-cyber my-4">
          Types of Baggage
        </TypographyH4>
        <TypographyP>
          Unlocking a piece of <b>baggage</b> grants you the element denoted in{" "}
          <b className="font-cyber">[ ]</b>. Elements marked with a{" "}
          <b className="font-cyber">{"->"}</b> indicate that this piece of{" "}
          <b>baggage</b> can be unlocked a second time to go deeper, and gain
          the second reward.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-fuchsia-500">Cyberware</b> is a piece of
          latent or forgotten tech which <b className="font-cyber">Root</b>{" "}
          elected not to tell you about.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-red-500">Actions</b> grant you a new
          keyword to add to your character&apos;s actions. You start with{" "}
          <span className="inline-block">
            <span className="flex gap-2 mx-2">
              <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
              <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
            </span>
          </span>{" "}
          in the action.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-orange-500">Transformations</b> are the
          Rathi Donums of bestial shapeshifting. Without extensive surgeries,
          they can damage your chrome.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-lime-500">Drive</b> is the answer to why
          you joined <b className="font-cyber">Root</b> in the first place.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-emerald-500">Fighting Style</b> is a
          school of fighting, the techniques and traditions. Not necessarily the
          physical capability.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-sky-500">Bonds</b> are NPCs which will
          actively go out of their way to help you or make personal sacrifices
          for your well being.
        </TypographyP>
        <TypographyP>
          <b className="font-cyber text-stone-500">Rivals</b> are NPCs which
          will endeavor to make your life harder whenever given the opportunity.
        </TypographyP>
        <TypographyH4 className="font-cyber">Memory Horizon</TypographyH4>
        <TypographyP>
          Once a threshold of memories have returned to you (4 pieces of{" "}
          <b>baggage</b>), the floodgates have opened and you remember more and
          more. Reduce your <b>memory clock</b> to a 2-piece clock{" "}
          <span className="inline-flex items-center gap-1">
            <Clock
              height={20}
              width={20}
              max={2}
              current={0}
              clickable={false}
            />
          </span>{" "}
          and remember all of your <b>Archetype Horizon Questions</b> (if your{" "}
          <b>archetype</b> has any).
        </TypographyP>
        <TypographyP>
          Once you&apos;ve unlocked all of your <b>baggage</b>, remove the
          penalty on your <b>max stress</b>.
        </TypographyP>
      </PopoverContent>
    </Popover>
  );
}
