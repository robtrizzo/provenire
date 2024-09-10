import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Activity,
  VenetianMask,
} from 'lucide-react';
import archetypes from '@/public/archetypes.json';
import Abilities from '@/components/ui/archetypes/abilities/abilities';
import type { Skillset } from '@/types/game';
import skillsets from '@/public/skillsets.json';

export default async function Page() {
  return (
    <div>
      <TypographyH1>Skillsets</TypographyH1>
      <TypographyP>
        No one breaks the status quo in the Steel Trap. It's guaranteed failure
        and hardship for your loved ones. But the PCs are different. They're
        going to pull it off. Their particular brand of Skillset shows how they
        go about it.
      </TypographyP>
      <TypographyP>
        Your Skillset grants you unique character questions, acions, special
        abilities, and ways to advance the crew during the{' '}
        <span className="underline font-bold text-red-600">
          <Link href="/game/the-churn#agendas">Agendas</Link>
        </span>{' '}
        phase.
      </TypographyP>
      <SkillsetTitle skillset={skillsets[0] as Skillset} />
      <TypographyP>
        The workers of the Steel Trap spend their lives surrounded by the
        roaring and churning machines of the factory. The Chisel is one of the
        few who dares to attempt understanding them.
      </TypographyP>
      <SkillsetQuestions skillset={skillsets[0] as Skillset} />
      <TypographyH3>Mission</TypographyH3>
      <TypographyH4>Actions</TypographyH4>
      <TypographyUnorderedList>
        <li>
          <strong>Cobble</strong>
          <Flame className="inline-block mb-3" /> Rapidly make an improvised
          tool or weapon from available scrap.
        </li>
        <li>
          <strong>Sabotage</strong>
          <VenetianMask className="inline-block mb-1" /> Tamper with or damage a
          machine or device.
        </li>
      </TypographyUnorderedList>
      <TypographyH4>Special Abilities (WIP)</TypographyH4>
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Chisels are designing, forging, and building new
        equipment for the crew... if only they have the{' '}
        <strong>materials</strong>. These items are equipable by the crew until
        they become damaged or lost. If the Chisel has no materials, they can
        only research new designs.
      </TypographyP>
      <TypographyP>
        First, the Chisel picks a design to research and makes a{' '}
        <span className="underline font-bold text-red-600">
          <Link href="/game/the-churn#project-rolls">project roll</Link>
        </span>{' '}
        to pursue it. Once the clock is filled, the design is complete and the
        Chisel can build it by spending <strong>1 material</strong>. Instead of
        researching a new design, the Chisel can start a new project to upgrade
        an existing design. When an upgrade project is completed, the Chisel can
        spend <strong>1 material</strong> to remove a negative trait or add a
        positive trait to the design.
      </TypographyP>
      <Separator className="my-3" />
      <div className="w-full flex justify-between">
        <Link href="/game/backgrounds">
          <Button variant="outline">
            <ChevronLeft /> Backgrounds
          </Button>
        </Link>
        <Link href="/game/archetypes">
          <Button variant="outline">
            Archetypes <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function SkillsetTitle({ skillset }: { skillset: Skillset }) {
  return (
    <TypographyH2 id={skillset.name} className="mt-4">
      <span className="text-indigo-500">{skillset.name}</span>
      <span className="text-muted-foreground text-lg ml-8">
        {skillset.shortDescription}
      </span>
    </TypographyH2>
  );
}

function SkillsetQuestions({ skillset }: { skillset: Skillset }) {
  return (
    <div className="ml-4">
      {skillset.questions.map((question, i) => (
        <TypographyP key={i} className="italic">
          {question}
        </TypographyP>
      ))}
    </div>
  );
}
