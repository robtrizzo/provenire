"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DowntimeActionsAccordion({
  className,
}: {
  className?: string;
}) {
  return (
    <Accordion type="multiple" className={cn("w-full", className)}>
      <AccordionItem value="comfort">
        <AccordionTrigger>Comfort</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you comfort someone, you might be a shoulder to cry on, a
            listening ear, or a source of tough love. When you comfort someone,
            name a piece of actionable advice and <b>ante</b> up a number from 1
            to 8. The character you comfort can choose to take the advice or
            reject it. If they take the advice, they mark a number of ticks on
            their <b>recovery clock</b> according to the <b>ante</b>. If they
            reject the advice, you mark an amount of stress equal to the{" "}
            <b>ante</b> or <b>strain your bond</b>.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="consort">
        <AccordionTrigger>Consort</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you consort, you choose any character (PC or NPC) to spend time
            with. You can build on your relationship, have a crucial
            confrontation, or just chat. Set the scene, then play to find out
            what happens. When you consort, you may choose to <b>spend xp</b> to
            advance your bond with the character you&apos;re consorting with.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="gather-information">
        <AccordionTrigger>Gather Information</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            Seek out information that isn&apos;t trivial to come by. The{" "}
            <b>Narrator</b> will offer a <b>devil&apos;s bargain</b>. Often this
            will take the form of: &quot;Pay a <b>cost</b> or face the threat of{" "}
            <i>bad information</i>&quot;. In this situation, characters roll to
            avoid consequences rather than to see if they succeed.
          </TypographyP>
          <TypographyP>
            Some information is too obscure or has too complex a barrier to
            answer with one <b>gather information</b> activity. These pieces of
            information should be pursued as a <b>project</b>.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="project">
        <AccordionTrigger>Project</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            Accomplish a <b>simple project</b>.
          </TypographyP>
          <span className="text-muted-foreground font-serif">or</span>
          <TypographyP>
            Work on a <b>long term project</b> not encompassed by the other
            agendas or downtime activities. This can cover a wide range of
            activities like puzzling out a mystery, gaining someone&apos;s
            trust, or building a unique item. Based on the goal of the project,
            the GM will tell you the clock(s) to create and suggest a method by
            which you might make progress. To advance a <b>long term project</b>
            , make a{" "}
            <Link href="/game/actions-and-rolls#project-rolls">
              <span className="text-red-500 underline">project roll</span>
            </Link>{" "}
            as normal.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="recover">
        <AccordionTrigger>Recover</AccordionTrigger>
        <AccordionContent>
          <TypographyP className="mb-1">
            When you recover in a safe location, you seek treatment and heal
            your harm. You gain <b>2 ticks</b> on your <b>healing clock</b>.
            When you fill your <b>healing clock</b>, reduce each instance of
            harm on your sheet by one level, then clear the clock. If you have
            more ticks to mark, they &quot;roll over.&quot;
          </TypographyP>
          <span className="text-muted-foreground font-serif">
            or if you engage the services of a Mediciner you&apos;re familiar
            with,
          </span>
          <TypographyP>
            Receive as good a treatment as you can in the Steel Trap. Remove one
            instance of harm from your sheet. Pay them <b>2 food/materials</b>{" "}
            and take <b>+2 heat</b>, or pay for their discretion with{" "}
            <b>4 food/materials</b>.
          </TypographyP>
          <TypographyBlockquote>
            Some harm can&apos;t be healed by normal means. Examples incude
            &quot;hungry&quot; and &quot;tired&quot;. These can have their
            levels reduced by recovery, but require specific actions to heal
            entirely.
          </TypographyBlockquote>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shift-blame">
        <AccordionTrigger>Shift Blame</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you shift blame, you&apos;re trying to reduce the crew&apos;s
            heat generated in missions. You might be spreading rumors, bribing
            officials, or framing someone else for your crimes. Whatever your
            approach, you need a scapegoat. Name them and make a{" "}
            <Link href="/game/actions-and-rolls#project-rolls">
              <span className="text-red-500 underline">project roll</span>
            </Link>
            . The result determines how much heat you reduce.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="train">
        <AccordionTrigger>Train</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you spend time training, <b>spend xp</b> to get an advance for
            your character. Describe the training montage with an appropriate
            instructor or mentor. You can choose this activity to act as an{" "}
            <b>instructor</b> in an area of your expertise. When you&apos;re an
            instructor, you may <b>spend xp</b> to advance.
          </TypographyP>
          <TypographyBlockquote>
            What&apos;s your relationship with you trainer? Has it changed?
            What&apos;s the most challenging or valuable part of your training
            session?
          </TypographyBlockquote>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
