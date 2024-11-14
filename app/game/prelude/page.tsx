import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Rules', href: '/game/core-system' },
          { name: 'Prelude', href: '#' },
        ]}
      />
      <TypographyH1>Prelude</TypographyH1>
      <TypographyH2>Free Play</TypographyH2>
      <TypographyH3>Character Scenes</TypographyH3>
      <TypographyP>
        The heart of <span className="italic">Provenire</span> is characters:
        their stories, their journeys, and their relationships with the people
        around them. The sake of <b>missions</b> is to paint the world and move
        events forward in a compelling way so that character scenes have an
        interesting stage.
      </TypographyP>
      <TypographyP>
        During character scenes, the <b>conversation</b> between Narrator and
        player is flipped. The players in the scene are the ones communicating
        what is happening. They can describe the environment, people, and events
        that transpire. The Narrator steps in only to play an NPC, to provide
        requested context, or to adjudicate a roll or uncertain interaction.
        Character scenes continue until the players decide it&apos;s time to
        move on to choosing the next <b>mission</b>.
      </TypographyP>
      <TypographyH3>Choose the Mission</TypographyH3>
      <TypographyP>
        As opposed to more classic RPG structures where the <b>Narrator</b>{' '}
        preps and then runs their prepared session for the players, in{' '}
        <span className="italic">Provenire</span>, the players choose what they
        do next. The <b>Narrator</b> will have the setting, characters,
        factions, and threats of the Steel Trap already prepared. They may even
        have a few missions prepped and presented as options to the players. But
        the players ultimately decide what they do next - they don&apos;t need
        to choose one of the options presented to them.
      </TypographyP>
      <TypographyP>
        Once the mission is agreed on by the players, the <b>Narrator</b> tells
        them what kinds of rewards they can expect from accomplishing the
        mission. This can take the form of <b>rep</b>, <b>goodwill</b>,{' '}
        <b>intel</b>, <b>materials</b>, <b>food</b>, or other special rewards
        (which the <b>Narrator</b> may choose to not give specifics on).
      </TypographyP>
      <TypographyP>
        Next, the <b>Narrator</b> describes any side objectives that the crew
        could pursue during the mission. If a <b>Grease</b> has made a promise
        to a faction, a side objective to fulfill that promise will always be
        included in the mission. The <b>Narrator</b> states the rewards for
        accomplishing each side objective.
      </TypographyP>
      <TypographyH2 id="downtime">Downtime</TypographyH2>
      <TypographyP>
        In the short time left between <b>subsistence</b>, <b>agendas</b>, and{' '}
        <b>missions</b>, your character can tend to their friends, family,
        community, and themselves.
      </TypographyP>
      <TypographyP>
        Each character gets two <b>downtime</b> actions. You can choose the same
        option twice.
      </TypographyP>
      <TypographyH4>Comfort</TypographyH4>
      <TypographyP>
        When you comfort someone, you might be a shoulder to cry on, a listening
        ear, or a source of tough love. When you comfort someone, name a piece
        of actionable advice and <b>ante</b> up a number from 1 to 8. The
        character you comfort can choose to take the advice or reject it. If
        they take the advice, they mark a number of ticks on their{' '}
        <b>recovery clock</b> according to the <b>ante</b>. If they reject the
        advice, you mark an amount of stress equal to the <b>ante</b>.
      </TypographyP>
      <TypographyH4>Consort</TypographyH4>
      <TypographyP>
        When you consort, you choose any character (PC or NPC) to spend time
        with. You can build on your relationship, have a crucial confrontation,
        or just chat. Set the scene, then play to find out what happens. When
        you consort, you may choose to <b>spend xp</b> to advance your bond
        <sup className="text-amber-500">*</sup> with the character you&apos;re
        consorting with.
      </TypographyP>
      <TypographyP className="text-muted-foreground">
        <sup className="text-amber-500">*</sup>Bonds are WIP and will be
        expanded on in the next update.
      </TypographyP>
      <TypographyH4>Gather Information</TypographyH4>
      <TypographyP>
        Seek out information that isn&apos;t trivial to come by. The{' '}
        <b>Narrator</b> will offer a <b>devil&apos;s bargain</b>. Often this
        will take the form of: &quot;Pay a <b>cost</b> or face the threat of{' '}
        <i>bad information</i>&quot;. In this situation, characters roll to
        avoid consequences rather than to see if they succeed.
      </TypographyP>
      <TypographyP>
        Some information is too obscure or has too complex a barrier to answer
        with one <b>gather information</b> activity. These pieces of information
        should be pursued as a <b>project</b>.
      </TypographyP>
      <TypographyH4>Project</TypographyH4>
      <div>
        <TypographyP>
          Accomplish a <b>simple project</b>.
        </TypographyP>
        <span className="text-muted-foreground font-serif">or</span>
        <TypographyP>
          Work on a <b>long term project</b> not encompassed by the other
          agendas or downtime activities. This can cover a wide range of
          activities like puzzling out a mystery, gaining someone&apos;s trust,
          or building a unique item. Based on the goal of the project, the GM
          will tell you the clock(s) to create and suggest a method by which you
          might make progress. To advance a <b>long term project</b>, make a{' '}
          <Link href="/game/prelude#project-rolls">
            <span className="text-red-500 underline">project roll</span>
          </Link>{' '}
          as normal.
        </TypographyP>
      </div>
      <TypographyH4>Recover</TypographyH4>
      <div>
        <TypographyP className="mb-1">
          When you recover in a safe location, you seek treatment and heal your
          harm. You gain <b>2 ticks</b> on your <b>healing clock</b>. When you
          fill your <b>healing clock</b>, reduce each instance of harm on your
          sheet by one level, then clear the clock. If you have more ticks to
          mark, they &quot;roll over.&quot;
        </TypographyP>
        <span className="text-muted-foreground font-serif">
          or if you engage the services of a Mediciner you&apos;re familiar
          with,
        </span>
        <TypographyP>
          Receive as good a treatment as you can in the Steel Trap. Remove one
          instance of harm from your sheet. Pay them <b>2 food/materials</b> and
          take <b>+2 heat</b>, or pay for their discretion with{' '}
          <b>4 food/materials</b>.
        </TypographyP>
      </div>
      <TypographyBlockquote>
        Some harm can&apos;t be healed by normal means. Examples incude
        &quot;hungry&quot; and &quot;tired&quot;. These can have their levels
        reduced by recovery, but require specific actions to heal entirely.
      </TypographyBlockquote>
      <TypographyH4>Shift Blame</TypographyH4>
      <TypographyP>
        When you shift blame, you&apos;re trying to reduce the crew&apos;s heat
        generated in missions. You might be spreading rumors, bribing officials,
        or framing someone else for your crimes. Whatever your approach, you
        need a scapegoat. Name them and make a{' '}
        <Link href="/game/prelude#project-rolls">
          <span className="text-red-500 underline">project roll</span>
        </Link>
        . The result determines how much heat you reduce.
      </TypographyP>
      <TypographyH4>Train</TypographyH4>
      <TypographyP>
        When you spend time training, <b>spend xp</b> to get an advance for your
        character. Describe the training montage with an appropriate instructor
        or mentor. You can choose this activity to act as an <b>instructor</b>{' '}
        in an area of your expertise. When you&apos;re an instructor, you may{' '}
        <b>spend xp</b> to advance.
      </TypographyP>
      <TypographyBlockquote>
        What&apos;s your relationship with you trainer? Has it changed?
        What&apos;s the most challenging or valuable part of your training
        session?
      </TypographyBlockquote>
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
        beforehand. Once the party chooses an approach, the <b>Narrator</b> will
        ask them to fill in a key detail.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Assault</b>: Do violence to a target.{' '}
          <span className="italic">Detail: the point of attack.</span>
        </li>
        <li>
          <b>Deception</b>: Lure, trick, or manipulate.{' '}
          <span className="italic">Detail: the method of deception.</span>
        </li>
        <li>
          <b>Stealth</b>: Trespass unseen.{' '}
          <span className="italic">Detail: the point of infiltration.</span>
        </li>
        <li>
          <b>Machine</b>: Engage in the strange workings of the factory.{' '}
          <span className="italic">Detail: the mechanical method.</span>
        </li>
        <li>
          <b>Social</b>: Negotiate, bargain, or persuade.{' '}
          <span className="italic">Detail: the social connection.</span>
        </li>
        <li>
          <b>Transport</b>: Carry cargo or people through danger.{' '}
          <span className="italic">Detail: the route and means.</span>
        </li>
      </TypographyUnorderedList>
      <TypographyH3 id="loadout">Item Loadouts</TypographyH3>
      <TypographyP>
        After the approach and detail are explained, each player chooses their
        character&apos;s <b>load</b>. This indicates how much stuff they&apos;re
        carrying on the mission. They don&apos;t have to select individual items
        - just the maximum amount they&apos;ll have access to during the action.
      </TypographyP>
      <TypographyP>
        Your character has a number of item slots equal to their <b>load</b>.
        During the mission, you can <b>flashback</b> to having brought any item
        &quot;just in case&quot; instead of having to plan ahead beforehand.
        When you do this, mark off an item slot. If you don&apos;t have any item
        slots left, you can still flashback, but you must include stashing the
        item somewhere in the scene.
      </TypographyP>
      <TypographyP className="italic">
        Some items cost more than 1 load, like armor (which costs 2). Heavy
        armor costs 3.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Discreet: 1 load.</b> You&apos;re faster, and blend in with the
          other workers. You cannot carry heavy items.
        </li>
        <li>
          <b>Conspicuous: 3 load.</b> You look like you&apos;re up to something.
        </li>
        <li>
          <b>Bulky: 4 load.</b> You look like an operative on a mission. Your
          movements are hampered.
        </li>
        <li>
          <b>Encumbered: 7 load.</b> You&apos;re overburdened and can&apos;t do
          anything except move very slowly.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Major Advantages / Disadvantages</TypographyH3>
      <TypographyP>
        The engagement roll is a <b>fortune roll</b>, starting with <b>0d</b>{' '}
        because there is no luck in the Steel Trap. The dice pool gets modified
        by any major advantages or disadvantages the party has.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Is this operation particularly bold or daring? Take <b>+1d</b>. Is
          this operation overly complex or contingent on many factors? Take{' '}
          <b>-1d</b>.
        </li>
        <li>
          Does the <b>plan&apos;s detail</b> expose a vulnerability of the
          target or hit them where they&apos;re weakest? Take <b>+1d</b>. Is the
          target strongest against this approach, or do they have particular
          defenses or special preparations? Take <b>-1d</b>.
        </li>
        <li>
          Are you operating on particularly useful intel? Take <b>+1d</b>. Are
          you operating on faulty or bad intel? Take <b>-1d</b>.
        </li>
        <li>
          Are any of your <b>friends or contacts</b> providing aid for this
          operation (at risk of their safety)? Take <b>+1d</b>. Are any{' '}
          <b>enemies or rivals</b> interfering in the operation? Take <b>-1d</b>
          . Anyone who volunteers an <b>enemy or rival</b> takes <b>+1xp</b>.
        </li>
        <li>
          Is the target of this operation a worker or faction of workers? Take{' '}
          <b>+1d</b>. Is the target an overseer or is an overseer the member of
          the target group? Take <b>-2d</b>.
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
        <b>Critical</b>: Exceptional result.{' '}
        <span className="italic">
          You&apos;ve already overcome the first obstacle and you&apos;re in a
          controlled position for what&apos;s next.
        </span>
      </TypographyP>
      <TypographyP>
        <b>6</b>: Good result.{' '}
        <span className="italic">
          You&apos;re in a controlled position when the action starts.
        </span>
      </TypographyP>
      <TypographyP>
        <b>4/5</b>: Mixed result.{' '}
        <span className="italic">
          You&apos;re in a risky position when the action starts.
        </span>
      </TypographyP>
      <TypographyP>
        <b>1-3</b>: Bad result.{' '}
        <span className="italic">
          You&apos;re in a desperate position when the action starts.
        </span>
      </TypographyP>
      <TypographyH2 id="project-rolls">Project Rolls</TypographyH2>
      <TypographyP>
        During the <b>Prelude</b>, there are many types of projects which the
        characters can undertake. Those projects are represented by a{' '}
        <b>clock</b> set by the rules or the <b>Narrator</b>. Before rolling for
        a project, the player decides the approach they want to take to pursue
        it. The <b>Narrator</b> then sets the effect and the player rolls. The
        effect and roll together determines how much progress is made on the
        clock. Consequences of failure depend on the posistion as normal.
      </TypographyP>
      <Table>
        <TableCaption>project roll results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
              Roll
            </TableHead>
            <TableHead className="w-20">Limited Effect</TableHead>
            <TableHead className="w-20">Standard Effect</TableHead>
            <TableHead className="w-20">Great Effect</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              1-3
            </TableCell>
            <TableCell className="w-20">0</TableCell>
            <TableCell className="w-20">1</TableCell>
            <TableCell className="w-20">1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              4,5
            </TableCell>
            <TableCell className="w-20">1</TableCell>
            <TableCell className="w-20">2</TableCell>
            <TableCell className="w-20">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              6
            </TableCell>
            <TableCell className="w-20">2</TableCell>
            <TableCell className="w-20">3</TableCell>
            <TableCell className="w-20">5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              Critical
            </TableCell>
            <TableCell className="w-20">3</TableCell>
            <TableCell className="w-20">5</TableCell>
            <TableCell className="w-20">7</TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
