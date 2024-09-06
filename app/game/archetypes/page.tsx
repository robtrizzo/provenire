import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  VenetianMask,
  Flame,
  Activity,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import ArchetypeQuestions from '@/components/ui/archetype-questions';
import archetypes from '@/public/archetypes.json';
import Abilities from '@/components/ui/abilities/abilities';
import type { Archetype } from '@/types/game';
import ActionDescription from '@/components/ui/action-description';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default async function Page() {
  return (
    <div>
      <TypographyH1>Archetypes</TypographyH1>
      <TypographyP>
        Trouble. Defiance. Rebellion. Danger and thrill at the prospect of
        making the overseers hurt, even if just a little. Victory at the cost
        of... well that&apos;s the question, isn&apos;t it? Who is your
        character when they aren&apos;t fighting the system? How do they treat
        their friends? What&apos;s their relationship with their family? Do they
        fight for the betterment of the community, or have they lost sight of
        the bigger picture?
      </TypographyP>
      <TypographyP>
        Your character&apos;s Archetype is a reflection of their personality and
        the way they interact with friends, family, and the world around them.
        It grants unique character questions, actions, and abilities. The
        ability marked in gold is unlocked when you select the Archetype. Others
        can be taken as advancements.
      </TypographyP>
      <Accordion type="multiple" className="w-full">
        {archetypes.map((archetype, i) => (
          <AccordionItem value={archetype.name} key={i}>
            <AccordionTrigger className="hover:no-underline">
              <ArchetypeTitle archetype={archetype as Archetype} />
            </AccordionTrigger>
            <AccordionContent>
              <ArchetypeContent archetype={archetype as Archetype} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Separator className="my-3" />
      <div className="w-full flex justify-between">
        <Link href="/game/skillsets">
          <Button variant="outline">
            <ChevronLeft /> Skillsets
          </Button>
        </Link>
        <Link href="/game/fitd-char-sheet">
          <Button variant="outline">
            Character Sheet <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function ArchetypeTitle({ archetype }: { archetype: Archetype }) {
  return (
    <div className="flex items-end justify-between w-full">
      <div className="flex flex-col items-start">
        <span className="text-amber-700 text-3xl">{archetype.name}</span>
        <span className="text-lg text-muted-foreground">
          {archetype.shortDescription}
        </span>
      </div>
      <ActionDescription action={archetype.actions[0]} className="mr-8" />
    </div>
  );
}

function ArchetypeContent({ archetype }: { archetype: Archetype }) {
  return (
    <div className="mx-2">
      <div className="ml-4">
        <ArchetypeQuestions archetype="Strategist" />
      </div>
      <TypographyH3>Mission</TypographyH3>
      <Abilities
        abilities={archetype.abilities.mission}
        variant="wiki"
        className="mb-4 px-4"
      />
      <TypographyH3>Downtime</TypographyH3>
      <Abilities
        abilities={archetype.abilities.downtime}
        variant="wiki"
        className="mb-4 px-4"
      />
    </div>
  );
}
