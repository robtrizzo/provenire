import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
export default async function Page() {
  return (
    <>
      <TypographyH1>The Cycle of Play</TypographyH1>
      <TypographyH2>Free Play</TypographyH2>
      <TypographyH3>Character Scenes</TypographyH3>
      <TypographyP>
        The heart of <span className="italic">Provenire</span> is characters:
        their stories, their journeys, and their relationships with the people
        around them. The sake of <strong>missions</strong> is to paint the world
        and move events forward in a compelling way so that character scenes
        have an interesting stage.
      </TypographyP>
      <TypographyP>
        During character scenes, the <strong>conversation</strong> between
        Narrator and player is flipped. The players in the scene are the ones
        communicating what is happening. They can describe the environment,
        people, and events that transpire. The Narrator steps in only to play an
        NPC, to provide requested context, or to adjudicate a roll or uncertain
        interaction. Character scenes continue until the players decide it's
        time to move on to <strong>gathering information</strong>.
      </TypographyP>
      <TypographyH3>Gather Information</TypographyH3>
      <TypographyP>
        During this phase the characters may do the footwork required to pull
        off successful missions in the Steel Trap. If the information is common
        knowledge, the Narrator will simply explain. If there is some kind of
        obstacle, the Narrator might call for a roll to determine the quality of
        the information. If it&apos;s not common knowledge but there&apos;s no
        obstacle to overcome, the Narrator will call for a{' '}
        <strong>fortune</strong> roll.
      </TypographyP>
      <TypographyP>
        Time is short in the Steel Trap, and characters will often only get one
        chance per <strong>gather information</strong> phase to ask a question.
        So choose wisely.
      </TypographyP>
      <TypographyH4>Investigation</TypographyH4>
      <TypographyP>
        Some information is too obscure or has too complex a barrier to answer
        with one <strong>gather information</strong> phase. These pieces of
        information should be pursued as a <strong>long term project</strong>{' '}
        during downtime.
      </TypographyP>
      <TypographyH2>Engagement Roll</TypographyH2>
      <TypographyH2>Mission</TypographyH2>
      <TypographyH2>Churn</TypographyH2>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyH3>Agendas</TypographyH3>
      <TypographyH3>Downtime</TypographyH3>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/core-system">
          <Button variant="outline">
            <ChevronLeft /> Core System
          </Button>
        </Link>
        <Link href="/game/the-churn">
          <Button variant="outline">
            The Churn <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
