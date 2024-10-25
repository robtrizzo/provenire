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
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Rules', href: '/game/core-system' },
          { name: 'Actions & Attributes', href: '#' },
        ]}
      />
      <TypographyH1>Actions & Attributes</TypographyH1>
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
        Each <strong>action</strong> has a <strong>rating</strong> (from 0 to
        2b) that tells you how many dice to roll when you perform that action.
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
      <TypographyH2>Action Roll</TypographyH2>
      <TypographyP>
        You make an <strong>action roll</strong> when your character does
        something potentially dangerous or troublesome. The possible results of
        the <strong>action roll</strong> depend on your character&apos;s
        position. There are three positions: <strong>controlled</strong>,{' '}
        <strong>risky</strong>, and <strong>desperate</strong>. If you&apos;re
        in a<strong>controlled</strong> position, the possible consequences are
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
      <TypographyH2>Attribute Ratings</TypographyH2>
      <TypographyP>
        There are 3 <strong>attributes</strong> in the game system that the
        player characters use to resist bad consequences: <strong>Heart</strong>
        , <strong>Instinct</strong>, and <strong>Machina</strong>. Each{' '}
        <strong>attribute</strong> has a rating (from 0 to 4) that tells you how
        many dice to roll when you use that <strong>attribute</strong>.
      </TypographyP>
      <TypographyP>
        The rating for each attribute is equal to the number of actions in that
        attribute that have a rating of at least <strong>1r</strong>. The more
        well-rounded your character is with a particular set of actions, the
        better their attribute rating.
      </TypographyP>
      <TypographyH3>Advancing an Attribute</TypographyH3>
      <TypographyP>
        Each <strong>attribute</strong> has a 6-track xp bar. Each time you roll
        a desperate action in that attribute, mark <strong>+1 xp</strong> in its
        track. When the track is full, clear it and advance one of the actions
        in its category.
      </TypographyP>
      <TypographyP>
        Advancing an action can be done in one of two ways. An empty slot can
        become red or a red slot can become blue.
      </TypographyP>
      <TypographyH2 id="resistance-roll">Resistance Rolls</TypographyH2>
      <TypographyP>
        Each attribute resists a different kind of danger. If you get stabbed,
        for example, you resist sudden violence with your{' '}
        <strong>Instinct</strong> rating. Resistance rolls always succeed--you
        diminish or deflect the bad result--but the better you roll, the less{' '}
        <strong>stress</strong> it costs to reduce or avoid the danger.
      </TypographyP>
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
