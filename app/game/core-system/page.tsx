import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Rules', href: '#' },
          { name: 'Core System', href: '#' },
        ]}
      />
      <TypographyH1>Core System</TypographyH1>
      <TypographyP className="text-muted-foreground text-sm">
        The Core System section in Blades in the Dark is nearly perfect, so why
        rewrite something that gets the point across? So this section is
        credited to John Harper.
      </TypographyP>
      <TypographyH2>The Conversation</TypographyH2>
      <TypographyP>
        Roleplaying games are conversations between Narrator and player
        punctuated by dice rolls to inject uncertainty and surprising turns.
      </TypographyP>
      <TypographyP>
        The GM presents the fictional situation in which the player characters
        find themselves. The players determine the actions of their characters
        in response to the situation. The GM and the players together judge how
        the game systems are engaged. The outcomes of the mechanics then change
        the situation, leading into a new phase of the conversation—new
        situations, new actions, new judgments, new rolls—creating an ongoing
        fiction and building &quot;the story&quot; of the game, organically,
        from a series of discrete moments.
      </TypographyP>
      <TypographyP>
        <strong>No one is in charge of the story.</strong> The story is what
        happens as a result of the situation presented by the GM, the actions
        the characters take, the outcomes of the mechanics, and the consequences
        that result. The story emerges from the unpredictable collision of all
        of these elements. You <strong>play to find out</strong> what the story
        will be.
      </TypographyP>
      <TypographyH2>Judgement Calls</TypographyH2>
      <TypographyP>
        Since roleplaying is a collaborative, expressive act, not a purely
        strategic endeavor, you&apos;ll need to make judgment calls. By making
        these choices, the game group together establishes a style, tone, and
        form the fiction of play. <span className="italic">Provenire</span> is
        designed to bring these judgment calls to the forefront and make them
        explicit tools of the game
      </TypographyP>
      <TypographyP>
        When you play, you&apos;ll make several key judgment calls. Everyone
        contributes, but either the players or the Narrator gets final say for
        each:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Which actions are reasonable as a solution to a problem?{' '}
          <span className="italic">
            Can this person be swayed? Must we get out the tools and tinker with
            this old rusty lock, or could it also be quietly finessed?
          </span>{' '}
          The <strong>players</strong> have final say
        </li>
        <li>
          How dangerous and how effective is a given action in this
          circumstance?{' '}
          <span className="italic">
            How risky is this? Can this person be swayed very little or a whole
            lot?
          </span>{' '}
          The <strong>Narrator</strong> has final say
        </li>
        <li>
          Which consequences are inflicted to manifest the dangers in a given
          circumstance?{' '}
          <span className="italic">
            Does this fall from the roof break your leg? Do the enforcers merely
            become suspicious or do they already have you trapped?
          </span>{' '}
          The <strong>Narrator</strong> has final say
        </li>
        <li>
          Does this situation call for a dice roll, and which one?{' '}
          <span className="italic">
            Is your scoundrel in position to make an action roll or must they
            first make a resistance roll to gain initiative?
          </span>{' '}
          The <strong>Narrator</strong> has final say.
        </li>
        <li>
          Which events in the story match the experience triggers for character
          and crew advancement?{' '}
          <span className="italic">
            Did you express your character’s beliefs, drives, heritage, or
            background? You tell us.
          </span>{' '}
          The <strong>players</strong> have final say.
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        The particular choices you make will create your own unique story in{' '}
        <span className="italic">Provenire</span>. You’ll say something about
        the world and the characters, about revolutionary fiction, and even
        about the human condition. What will you say? There’s only one way to
        find out.
      </TypographyP>
      <TypographyH2>Rolling the Dice</TypographyH2>
      <TypographyP>
        <span className="italic">Provenire</span> uses six-sided dice. You roll
        several at once and read the <strong>single highest result</strong>.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          If the highest die is a <strong>6</strong>, it&apos;s a{' '}
          <strong>full success</strong>--things go well. If you roll more than
          one <strong>6</strong>, it&apos;s a <strong>Critical success</strong>
          --you gain some additional advantage.
        </li>
        <li>
          If the highest die is a <strong>4 or 5</strong>, that&apos;s a{' '}
          <strong>partial success</strong>--you do what you were trying to do,
          but there are consequences: trouble, harm, reduced effect, etc.
        </li>
        <li>
          If the highest die is a <strong>1-3</strong>, it&apos;s a{' '}
          <strong>bad outcome</strong>. Things go poorly. You probably
          don&apos;t achieve your goal and you suffer complications, too
        </li>
      </TypographyUnorderedList>
      <TypographyP className="italic">
        If you ever need to roll but you have zero (or negative) dice, roll two
        dice and take the single lowest result. You can’t roll a{' '}
        <strong className="no-italic">Critical</strong> when you have zero dice.
      </TypographyP>
      <TypographyP>
        To create a dice pool for a roll, you&apos;ll use one or two{' '}
        <strong>traits</strong> (like your <strong>Prowl</strong> or your{' '}
        <strong>Survey</strong>) and take dice equal to their combined{' '}
        <strong>rating</strong>. When selecting <strong>traits</strong>, you may
        choose one from the left and right sides of the{' '}
        <strong>mission traits</strong> of your character sheet.
      </TypographyP>
      <TypographyP>
        <strong>Trait ratings</strong> have two marks. Each mark can be empty,
        red, or blue. Each filled mark represents a die that gets added to the
        pool. Empty marks add nothing. Red marks add red dice. Blue marks add
        blue dice. They represent a progression from novice to expert.
      </TypographyP>
      <TypographyP>
        When you read the result of a die roll, note the color of the highest
        die. If it&apos;s red, take reduced effect. If it&apos;s blue, effect is
        not changed.
      </TypographyP>
      <TypographyP>
        You&apos;ll usually end up with one to four dice. Even one die is pretty
        good in this game--a 50% chance of success.
      </TypographyP>
      <TypographyH3 id="bonus-dice">Bonus Dice</TypographyH3>
      <TypographyP>
        There are a number of ways to gain bonus dice in{' '}
        <span className="italic">Provenire</span>. All bonus dice are blue,
        meaning they don&apos;t incur reduced effect if they&apos;re your
        highest roll.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Teamwork:</strong> Another member of the crew marks{' '}
          <strong>1 stress</strong> and describes how they help you out. You get{' '}
          <strong>1 bonus die</strong>.{' '}
          <span className="italic">
            Only one person can help you, otherwise it should be a group roll.
          </span>
        </li>
        <li>
          <strong>Push yourself:</strong> Describe how you dig deep to ensure
          success. Mark <strong>2 stress</strong> and get{' '}
          <strong>1 bonus die</strong>.{' '}
          <span className="italic">
            If you push yourself, you cannot also take a devil&apos;s bargain.
          </span>
        </li>
        <li>
          <strong>Devil&apos;s Bargain:</strong> The <strong>Narrator</strong>{' '}
          presents an interesting problem or consequence. Decide if you want to
          take the deal. If you do, get <strong>1 bonus die</strong>.{' '}
          <span className="italic">
            You may <strong>resist</strong> the consequences of the bargain if
            you want.
          </span>
        </li>
        <li>
          <strong>Group Roll:</strong> Ask of anyone else in the crew wants to
          make a roll with you. If they do, you decide who the leader is; the
          leader marks <strong>1 xp</strong>. Then everyone separately rolls the
          same action as the leader (or at least must include the same universal
          action). The highest roll among the group is used as the result. For
          each member of the group that rolls a <strong>1-3</strong>, the leader
          marks <strong>1 stress</strong>. If the overall result has
          consequences, everyone suffers them.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Types of Rolls</TypographyH3>
      <TypographyP>
        There are four types of rolls you&apos;ll use most often in this game:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Action Roll</strong>: When a PC attempts an action that&apos;s
          dangerous or troublesome, you make an action roll to find out how it
          goes. Action rolls and their effects and consequences drive most of
          the game.
        </li>
        <li>
          <strong>Project Roll</strong>: When the PCs are done with the mission,
          they can perform a series of activities during the{' '}
          <strong>Churn</strong>. You make project rolls to see how much you get
          done. See{' '}
          <Link href="/game/the-churn#project-rolls">project rolls</Link> for
          more.
        </li>
        <li>
          <strong>Fortune Roll</strong>: The GM can make a fortune roll to
          disclaim decision making and leave something up to chance.{' '}
          <span className="italic">
            How loyal is an NPC? How much does the plague spread? How much
            evidence is burned before the Overseers kick in the door?
          </span>
        </li>
        <li>
          <strong>Resistance Roll</strong>: A player can make a resistance roll
          when their character suffers a consequence they don&apos;t like. The
          roll tells us how much stress their character suffers to reduce the
          severity of a consequence.{' '}
          <span className="italic">
            When you resist that &quot;Broken Leg&quot; harm, you take some
            stress and now it’s only a &quot;Sprained Ankle&quot; instead.
          </span>
        </li>
      </TypographyUnorderedList>
      <div className="w-full flex justify-between">
        <Link href="/game/setting">
          <Button variant="outline">
            <ChevronLeft /> Setting
          </Button>
        </Link>
        <Link href="/game/actions-and-attributes">
          <Button variant="outline">
            Actions & Attributes <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
