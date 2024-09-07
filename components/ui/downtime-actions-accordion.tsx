'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TypographyP } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function DowntimeActionsAccordion({
  className,
}: {
  className?: string;
}) {
  return (
    <Accordion type="multiple" className={cn('w-full', className)}>
      <AccordionItem value="comfort">
        <AccordionTrigger>Comfort</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you comfort someone, you might be a shoulder to cry on, a
            listening ear, or a source of tough love. When you comfort someone,
            name a piece of actionable advice and make a{' '}
            <span className="underline font-bold text-red-600">
              <Link href="/game/the-churn#project-rolls">project roll</Link>
            </span>
            . The character you comfort can choose to take the advice or reject
            it. If they take the advice, they mark a number of segments on their
            recovery clock according to the result. If they reject the advice,
            you mark an amount of stress equal to the result.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="long-term-project">
        <AccordionTrigger>Long Term Project</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            Work on a long term project not encompassed by the other agendas or
            downtime activities. This can cover a wide range of activities like
            puzzling out a mystery, gaining someone&apos;s trust, or building a
            unique item. Based on the goal of the project, the GM will tell you
            the clock(s) to create and suggest a method by which you might make
            progress. To advance a long term project, make a{' '}
            <span className="underline font-bold text-red-600">
              <Link href="/game/the-churn#project-rolls">project roll</Link>
            </span>{' '}
            as normal.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="recover">
        <AccordionTrigger>Recover</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you recover, you seek treatment and heal your harm. You might
            visit a Bond or Contact who can help you, or you might rely on your
            own skills. Failing that, you bedrest and hope for the best. When
            you recover, make a{' '}
            <span className="underline font-bold text-red-600">
              <Link href="/game/the-churn#project-rolls">project roll</Link>
            </span>{' '}
            and mark a number of segments on the healing clock according to the
            result. When you fill your healing clock, reduce each instance of
            harm on your sheet by one level, then clear the clock. If you have
            more segments to mark, they &quot;roll over&quot;.
          </TypographyP>
          <TypographyP>
            Some harm can&apos;t be healed by normal means. Examples incude
            &quot;hungry&quot; and &quot;tired&quot;. These can have their
            levels reduced by recovery, but require specific actions to heal
            engirely.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="relax">
        <AccordionTrigger>Relax</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you relax, you seek out comfort, peace, or vice. Whatever your
            character feels they need to reduce the stress of risking their
            lives on missions. When you relax, roll your lowest attribute. The
            result determines how much stress you clear.
          </TypographyP>
          <TypographyP>
            If you would clear more stress than you have, it represents
            overindulgence or neglecting other parts of your life that need
            attention. Mark an amount of stress equal to the &quot;roll
            over&quot;.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shift-blame">
        <AccordionTrigger>Shift Blame</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you shift blame, you&apos;re trying to reduce the crew&apos;s
            heat generated in missions. You might be spreading rumors, bribing
            officials, or framing someone else for your crimes. Whatever your
            approach, you need a scapegoat. Name them and make a{' '}
            <span className="underline font-bold text-red-600">
              <Link href="/game/the-churn#project-rolls">project roll</Link>
            </span>
            . The result determines how much heat you can reduce.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="train">
        <AccordionTrigger>Train</AccordionTrigger>
        <AccordionContent>
          <TypographyP>
            When you spend time training, <strong>mark 1 xp</strong> on the xp
            track for an attribute or mission advancement. You can only train a
            given xp track once per downtime.
          </TypographyP>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
