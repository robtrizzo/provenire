import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
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

export default function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Rules', href: '/game/core-system' },
          { name: 'Actions & Rolls', href: '#' },
        ]}
      />
      <TypographyH1>Actions & Rolls</TypographyH1>
      <TypographyH2>Action Ratings</TypographyH2>
      <TypographyP>
        There are 6 <strong>universal actions</strong> and 46{' '}
        <strong>unique actions</strong> in the game that the player characters
        use to overcome obstacles. Every character has acces to the 6{' '}
        <strong>universal actions</strong> as opposed to the 5 of 46{' '}
        <strong>unique actions</strong> each player character gains access to as
        a result of character creation choices.
      </TypographyP>
      <TypographyP>
        Each <strong>action</strong> has a <strong>rating</strong> (from{' '}
        <div className="inline-block">
          <div className="flex gap-2 mx-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4" />
          </div>
        </div>{' '}
        to{' '}
        <div className="inline-block">
          <div className="flex gap-2 mx-2">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500" />
          </div>
        </div>
        ) that tells you how many dice to roll when you perform that action.
        Action <strong>ratings</strong> don&apos;t just represent skill or
        training--you&apos;re free to describe{' '}
        <span className="italic">how</span> your character performs that type of
        action based on the type of person they are.
      </TypographyP>
      <TypographyP>
        You choose which action to perform to overcome an obstacle, by
        describing what your character does. Actions that are poorly suited to
        the situation may be less effective and may put the character in more
        danger, but they can still be attempted. Usually, when you perform an
        action, you&apos;ll make an <strong>action roll</strong> to see how it
        turns out
      </TypographyP>
      <TypographyH2 id="action-roll">Action Roll</TypographyH2>
      <TypographyP>
        You make an <strong>action roll</strong> when your character does
        something potentially dangerous or troublesome. The possible results of
        the <strong>action roll</strong> depend on your character&apos;s
        position. There are three positions: <strong>controlled</strong>,{' '}
        <strong>risky</strong>, and <strong>desperate</strong>. If you&apos;re
        in a <strong>controlled</strong> position, the possible consequences are
        less serious. If you’re in a <strong>desperate</strong> position, the
        consequences can be severe. If you&apos;re somewhere in between,
        it&apos;s <strong>risky</strong>—usually considered the
        &quot;default&quot; position for most actions. If there&apos;s no danger
        or trouble at hand, you don&apos;t make an <strong>action roll</strong>.
        You might make a <strong>fortune</strong> roll or a{' '}
        <strong>project</strong> roll or the Narrator will simply say yes—and
        you accomplish your goal.
      </TypographyP>
      <TypographyP>
        When you build the dice pool for an <strong>action roll</strong>, the
        player character may select up to two <strong>action ratings</strong> to
        combine for the purpose of the roll. They can only select one{' '}
        <strong>action rating</strong> from each of the left and right sides of
        the <strong>mission actions</strong> on their character sheet.
      </TypographyP>
      <TypographyH2 id="resistance-roll">Resistance Rolls</TypographyH2>
      <TypographyP>
        When a consequence befalls the crew or your individual character, you
        may choose to instead make a <b>resistance roll</b>. Resistance rolls
        always succeed--you diminish or deflect the bad result--but the better
        you roll, the less <strong>stress</strong> it costs to reduce or avoid
        the danger (see the table below). Just like how you choose up to two
        actions to make <b>action rolls</b>, you do the same thing here.
      </TypographyP>
      <Table>
        <TableCaption>resistance roll results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
              Roll
            </TableHead>
            <TableHead className="w-20">
              highest die is <span className="text-red-700">red</span>
            </TableHead>
            <TableHead className="w-20">
              highest die is <span className="text-blue-700">blue</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              1-3
            </TableCell>
            <TableCell className="w-20">3 stress</TableCell>
            <TableCell className="w-20">2 stress</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              4,5
            </TableCell>
            <TableCell className="w-20">2 stress</TableCell>
            <TableCell className="w-20">1 stress</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              6
            </TableCell>
            <TableCell className="w-20">1 stress</TableCell>
            <TableCell className="w-20">0 stress</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              Critical
            </TableCell>
            <TableCell className="w-20">0 stress</TableCell>
            <TableCell className="w-20">clear 1 stress</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TypographyP>
        When the enemy has a big advantage, you&apos;ll have to make a
        resistance roll before you can take your own action. For example, when
        you duel a master swordswoman, she disarms you before you can strike.
        You need to make a resistance roll to keep hold of your blade if you
        want to attack her. Or perhaps you face an area with a powerful psychic
        drone. Before you can make your own roll, you must resist subservience
        to the Overseers.
      </TypographyP>
      <TypographyP>
        The Narrator judges the threat level of the enemies and uses these
        &quot;preemptive&quot; resistance rolls as needed to reflect the
        capabilities of especially dangerous foes.
      </TypographyP>
      <TypographyH2 id="project-rolls">Project Rolls</TypographyH2>
      <TypographyP>
        During the <b>Prelude</b> and <b>Churn</b>, there are many types of
        projects which the characters can undertake. Those projects are
        represented by a <b>clock</b> set by the rules or the <b>Narrator</b>.
        Before rolling for a project, the player decides the approach they want
        to take to pursue it. The <b>Narrator</b> then sets the effect and the
        player rolls. The effect and roll together determines how much progress
        is made on the clock. Consequences of failure depend on the posistion as
        normal.
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
        <Link href="/game/core-system">
          <Button variant="outline">
            <ChevronLeft /> Core System
          </Button>
        </Link>
        <Link href="/game/cycle-of-play">
          <Button variant="outline">
            The Cycle of Play <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
