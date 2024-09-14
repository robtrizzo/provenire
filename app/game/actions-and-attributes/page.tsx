import Donum from '@/components/stats/donum';
import Defiance from '@/components/stats/defiance';
import Heart from '@/components/stats/heart';
import Ingenuity from '@/components/stats/ingenuity';
import Machina from '@/components/stats/machina';
import Savagery from '@/components/stats/savagery';
import Blood from '@/components/stats/blood';
import Hunger from '@/components/stats/hunger';
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

export default function Page() {
  return (
    <>
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
        Action <strong>ratings</strong> don't just represent skill or
        training--you're free to describe <span className="italic">how</span>{' '}
        your character performs that type of action based on the type of person
        they are.
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
      <TypographyH2>Resistance Rolls</TypographyH2>
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
