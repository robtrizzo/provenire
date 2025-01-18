import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyBlockquote,
} from '@/components/ui/typography';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default async function Page() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Character Creation', href: '#' }]} />
      <TypographyH1>Character Creation</TypographyH1>
      <TypographyP>
        <strong>Kingwulf</strong> and his kingdom of Fenrir won long ago.{' '}
        <span className="italic">Won what?</span> Won the war for everything.
        Fenrir is all that is left. Other nations, histories, cultures -
        consumed by the beast. But they haven&apos;t taken everything. Muttered
        over tin can fires, whispered between siblings when they&apos;re
        supposed to be going to bed, glimpsed in fleeting dreams are the stories
        of the past. Memories of ways of life long lost. There are many
        heritages to choose from in <span className="italic">Provenire</span>.
        You can find them here:{' '}
        <Link href="/game/heritages">
          <strong className="text-sky-500 underline">Heritages</strong>
        </Link>
      </TypographyP>
      <TypographyP id="heritage">
        Heritages are the stories and memories of your ancestors&apos;
        ancestors. They give your character precious traditions to preserve. If
        you choose Rathi though, you instead are taught to embrace the cultural
        norms of the Steel Trap and to think yourself better than the others who
        are in a slightly lower social caste.
      </TypographyP>
      <TypographyP>
        Heritages grant a unique profile question. They{' '}
        <span className="italic">do not</span> impart a mandatory look, outlook,
        or mechanical benefit. Rathi workers might inherit physical bestial
        traits (but they are always <span className="italic">thinbloods</span>).
      </TypographyP>
      <Separator />
      <TypographyP>
        But to our characters, <strong>Kingwulf</strong> and the outside world
        are a faraway thought. They live in the Steel Trap: a weapons factory
        somewhere within the wildnerness of Rath. Why even wonder about
        something so outside of their concern? Day in and day out, they work.
        Their toil is rewarded by scraps, and never enough to fill
        everyone&apos;s bellies. But don&apos;t speak out. Don&apos;t question
        the status quo. The overseers are watching, and they don&apos;t take
        kindly to troublemakers. There are many tasks workers are forced to do
        in the Steel Trap. You can find them here:{' '}
        <Link href="/game/backgrounds">
          <strong className="text-red-500 underline">Backgrounds</strong>
        </Link>
      </TypographyP>
      <TypographyP id="background">
        Backgrounds grant two unique mission actions, two profile questions, two
        professional bonds, and a subsistence activity.
      </TypographyP>
      <Separator />
      <TypographyP>
        Over the course of <span className="italic">Provenire&apos;s</span>{' '}
        story, we follow a group of upstart troublemakers as they become a crew
        of competent revolutionaries. They do this by taking illegal jobs from
        clients, planning their own devious missions, making alliances,
        destroying their enemies, and trying to stay one step ahead of the
        overseers. Some of the ways they go about this can be found here:{' '}
        <Link href="/game/skillsets">
          <strong className="text-indigo-500 underline">Skillsets</strong>
        </Link>
      </TypographyP>
      <TypographyP id="skillset">
        Skillsets grant two unique mission actions, three mission abilities, two
        profile questions, an agenda, and a downtime ability.
      </TypographyP>
      <Separator />
      <TypographyP>
        But who are these characters when they aren&apos;t working and
        aren&apos;t fighting back? What kind of friends, family members,
        coworkers, and lovers are they? How do they care for the people around
        them? Some of their personality types can be found here:{' '}
        <Link href="/game/archetypes">
          <strong className="text-amber-500 underline">Archetypes</strong>
        </Link>
      </TypographyP>
      <TypographyP id="archetype">
        Archetypes grant a unique mission action, two mission abilities, five
        profile questions, and two downtime abilities.
      </TypographyP>
      <TypographyH2 className="mt-8">Character questions</TypographyH2>
      <TypographyP>
        First, fill out all of your profile questions. These are open-ended
        intentionally; you can be creative with your answers and even create
        fiction to support them. Keep in mind that the <strong>Narrator</strong>{' '}
        will review your answers to help you stay within the bounds of the
        fiction.
      </TypographyP>
      <TypographyH2 className="mt-4">Bonds</TypographyH2>
      <TypographyP>
        First, name your familial and personal bonds. These NPCs are yours to
        envision and flesh out. Who are they? What are their dreams? What
        injustices do they endure for the ones they love?
      </TypographyP>
      <TypographyP>
        Your professional bonds are with NPCs the <b>Narrator</b> has created,
        but feel free to expand on your relationship and history with them.
      </TypographyP>
      <TypographyP>
        Lastly, your crew bonds are with fellow PCs. Feel free to invent any
        form or amount of history or preexisting relationships with one another.
      </TypographyP>
      <TypographyP>
        Assign{' '}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </span>
        </span>{' '}
        to each <b>crew bond</b>. Then assign{' '}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </span>
        </span>{' '}
        to any three of your <b>personal, familial,</b> and{' '}
        <b>professional bonds</b>. Finally, choose one <b>bond</b> to set to{' '}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500" />
          </span>
        </span>{' '}
        or{' '}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </span>
        </span>
        .
      </TypographyP>
      <TypographyH3>Instructors</TypographyH3>
      <TypographyP>
        When using downtime to <b>train</b>, your character will learn crucial
        skills from one or more <b>instructors</b>. These can be other PCs, NPCs
        of the <b>Narrator&apos;s</b> creation, or ones you invent. Think about
        your character&apos;s relationship with their <b>instructor(s)</b>. Who
        are they? Why aren&apos;t <i>they</i> on missions? How do they know what
        they know? Or is that a mystery?
      </TypographyP>
      <TypographyH2 className="mt-4">Actions & Abilities</TypographyH2>
      <TypographyP>
        All of your actions begin at{' '}
        <span className="inline-block">
          <span className="flex gap-2 mx-2">
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
            <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </span>
        </span>
        . You begin play with 12 points you can spend to enhance your actions
        and unlock abilities.
      </TypographyP>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <span className="text-sm">1 point</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">2 points</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <div className="flex items-center gap-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <span className="text-sm text-amber-500">archetype ability</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">3 points</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <div className="flex items-center gap-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
          </div>
          <span className="text-muted-foreground">or</span>
          <span className="text-sm text-indigo-500">skillset ability</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">4 points</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
          </div>
        </div>
      </div>
      <TypographyBlockquote>
        You begin play with your{' '}
        <b className="text-amber-500">archetype&apos;s key ability</b> unlocked
        - which will be checked by default on your character sheet.
      </TypographyBlockquote>
      <TypographyH2 className="mt-4">Filling in the blanks</TypographyH2>
      <TypographyP>
        Name your character, give them an alias, and finish the common questions
        in your character profile. Then you&apos;re ready to play!
      </TypographyP>
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/the-churn">
          <Button variant="outline">
            <ChevronLeft /> The Churn
          </Button>
        </Link>
        <Link href="/game/heritages">
          <Button variant="outline">
            Heritages <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
