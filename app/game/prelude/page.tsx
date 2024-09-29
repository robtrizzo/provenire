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
  TypographyUnorderedList,
} from '@/components/ui/typography';

export default async function Page() {
  return (
    <>
      <TypographyH1>Prelude</TypographyH1>
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
        interaction. Character scenes continue until the players decide
        it&apos;s time to move on to <strong>gathering information</strong>.
      </TypographyP>
      <TypographyH3 id="gather-information">Gather Information</TypographyH3>
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
      <TypographyH3>Choose the Mission</TypographyH3>
      <TypographyP>
        As opposed to more classic RPG structures where the{' '}
        <strong>Narrator</strong> preps and then runs their prepared session for
        the players, in <span className="italic">Provenire</span>, the players
        choose what they do next. The <strong>Narrator</strong> will have the
        setting, characters, factions, and threats of the Steel Trap already
        prepared. They may even have a few missions prepped and presented as
        options to the players. But the players ultimately decide what they do
        next - they don&apos;t need to choose one of the options presented to
        them.
      </TypographyP>
      <TypographyP>
        Once the mission is agreed on by the players, the{' '}
        <strong>Narrator</strong> tells them what kinds of rewards they can
        expect from accomplishing the mission. This can take the form of{' '}
        <strong>rep</strong>, <strong>goodwill</strong>, <strong>intel</strong>,{' '}
        <strong>materials</strong>, <strong>food</strong>, or other special
        rewards (which the <strong>Narrator</strong> may choose to not give
        specifics on).
      </TypographyP>
      <TypographyP>
        Next, the <strong>Narrator</strong> describes any side objectives that
        the crew could pursue during the mission. If a <strong>Grease</strong>{' '}
        has made a promise to a faction, a side objective to fulfill that
        promise will always be included in the mission. The{' '}
        <strong>Narrator</strong> states the rewards for accomplishing each side
        objective.
      </TypographyP>
      <TypographyH2 id="engagement-roll">Engagement Roll</TypographyH2>
      <TypographyP>
        Missions in <span className="italic">Provenire</span> begin &quot;en
        media res&quot;. This means that planning and preparations are assumed
        to have already taken place. The Engagement Roll determines how things
        are already going when we first see the characters in action.
      </TypographyP>
      <TypographyH3 id="approach">Approach</TypographyH3>
      <TypographyP>
        Before making the Engagement Roll, the party chooses an approach to the
        mission. This is in place of planning out every little detail
        beforehand. Once the party chooses an approach, the{' '}
        <strong>Narrator</strong> will ask them to fill in a key detail.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Assault</strong>: Do violence to a target.{' '}
          <span className="italic">Detail: the point of attack.</span>
        </li>
        <li>
          <strong>Deception</strong>: Lure, trick, or manipulate.{' '}
          <span className="italic">Detail: the method of deception.</span>
        </li>
        <li>
          <strong>Stealth</strong>: Trespass unseen.{' '}
          <span className="italic">Detail: the point of infiltration.</span>
        </li>
        <li>
          <strong>Machine</strong>: Engage in the strange workings of the
          factory.{' '}
          <span className="italic">Detail: the mechanical method.</span>
        </li>
        <li>
          <strong>Social</strong>: Negotiate, bargain, or persuade.{' '}
          <span className="italic">Detail: the social connection.</span>
        </li>
        <li>
          <strong>Transport</strong>: Carry cargo or people through danger.{' '}
          <span className="italic">Detail: the route and means.</span>
        </li>
      </TypographyUnorderedList>
      <TypographyH3 id="loadout">Item Loadouts</TypographyH3>
      <TypographyP>
        After the approach and detail are explained, each player chooses their
        character&apos;s <strong>load</strong>. This indicates how much stuff
        they&apos;re carrying on the mission. They don&apos;t have to select
        individual items - just the maximum amount they&apos;ll have access to
        during the action.
      </TypographyP>
      <TypographyP>
        Your character has a number of item slots equal to their{' '}
        <strong>load</strong>. During the mission, you can{' '}
        <strong>flashback</strong> to having brought any item &quot;just in
        case&quot; instead of having to plan ahead beforehand. When you do this,
        mark off an item slot. If you don&apos;t have any item slots left, you
        can still flashback, but you must include stashing the item somewhere in
        the scene.
      </TypographyP>
      <TypographyP className="italic">
        Some items cost more than one load, like armor (which costs 2). Heavy
        armor costs 3.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>1 Load: Light.</strong> You&apos;re faster, less conspicuous.
          You blend in with the other workers.
        </li>
        <li>
          <strong>2-3 Load: Normal.</strong> You look like you&apos;re up to
          something.
        </li>
        <li>
          <strong>4 Load: Heavy.</strong> You&apos;re slower and stand out. You
          look like an operative on a mission.
        </li>
        <li>
          <strong>5-7 Load: Encumbered.</strong> You&apos;re overburdened and
          can&apos;t do anything except move very slowly.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Major Advantages / Disadvantages</TypographyH3>
      <TypographyP>
        The engagement roll is a <strong>fortune roll</strong>, starting with{' '}
        <strong>0d</strong> because there is no luck in the Steel Trap. The dice
        pool gets modified by any major advantages or disadvantages the party
        has.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Is this operation particularly bold or daring? Take{' '}
          <strong>+1d</strong>. Is this operation overly complex or contingent
          on many factors? Take <strong>-1d</strong>.
        </li>
        <li>
          Does the <strong>plan&apos;s detail</strong> expose a vulnerability of
          the target or hit them where they&apos;re weakest? Take{' '}
          <strong>+1d</strong>. Is the target strongest against this approach,
          or do they have particular defenses or special preparations? Take{' '}
          <strong>-1d</strong>.
        </li>
        <li>
          Can any of your <strong>friends or contacts</strong> provide aid for
          this operation? Take <strong>+1d</strong>. Are any{' '}
          <strong>enemies or rivals</strong> interfering in the operation? Take{' '}
          <strong>-1d</strong>. Anyone who volunteers an{' '}
          <strong>enemy or rival</strong> takes <strong>+1xp</strong>.
        </li>
        <li>
          Is the target of this operation a worker or faction of workers? Take{' '}
          <strong>+1d</strong>. Is the target an overseer or is an overseer the
          member of the target group? Take <strong>-2d</strong>.
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        The engagement roll assumes that the PCs are approaching the target as
        intelligently as they can, given the plan and detail they provided. We
        don&apos;t need to play out the tentative probing maneuvers, special
        precautions, or other ponderous non-action. The engagement roll covers
        all of that. The PCs are already in action, facing the first obstacle of
        the mission.
      </TypographyP>
      <TypographyP>
        <strong>Critical</strong>: Exceptional result.{' '}
        <span className="italic">
          You&apos;ve already overcome the first obstacle and you&apos;re in a
          controlled position for what&apos;s next.
        </span>
      </TypographyP>
      <TypographyP>
        <strong>6</strong>: Good result.{' '}
        <span className="italic">
          You&apos;re in a controlled position when the action starts.
        </span>
      </TypographyP>
      <TypographyP>
        <strong>4/5</strong>: Mixed result.{' '}
        <span className="italic">
          You&apos;re in a risky position when the action starts.
        </span>
      </TypographyP>
      <TypographyP>
        <strong>1-3</strong>: Bad result.{' '}
        <span className="italic">
          You&apos;re in a desperate position when the action starts.
        </span>
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/cycle-of-play">
          <Button variant="outline">
            <ChevronLeft /> Cycle of Play
          </Button>
        </Link>
        <Link href="/game/mission">
          <Button variant="outline">
            The Mission <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
