import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Separator } from '@/components/ui/separator';

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
        <b>No one is in charge of the story.</b> The story is what happens as a
        result of the situation presented by the GM, the actions the characters
        take, the outcomes of the mechanics, and the consequences that result.
        The story emerges from the unpredictable collision of all of these
        elements. You <b>play to find out</b> what the story will be.
      </TypographyP>
      <TypographyH2>Judgement Calls</TypographyH2>
      <TypographyP>
        Since roleplaying is a collaborative, expressive act, not a purely
        strategic endeavor, you&apos;ll need to make judgment calls. By making
        these choices, the game group together establishes a style, tone, and
        form the fiction of play. <i>Provenire</i> is designed to bring these
        judgment calls to the forefront and make them explicit tools of the game
      </TypographyP>
      <TypographyP>
        When you play, you&apos;ll make several key judgment calls. Everyone
        contributes, but either the players or the Narrator gets final say for
        each:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Which actions are reasonable as a solution to a problem?{' '}
          <i>
            Can this person be swayed? Must we get out the tools and tinker with
            this old rusty lock, or could it also be quietly finessed?
          </i>{' '}
          The <b>players</b> have final say
        </li>
        <li>
          How dangerous and how effective is a given action in this
          circumstance?{' '}
          <i>
            How risky is this? Can this person be swayed very little or a whole
            lot?
          </i>{' '}
          The <b>Narrator</b> has final say
        </li>
        <li>
          Which consequences are inflicted to manifest the dangers in a given
          circumstance?{' '}
          <i>
            Does this fall from the roof break your leg? Do the enforcers merely
            become suspicious or do they already have you trapped?
          </i>{' '}
          The <b>Narrator</b> has final say
        </li>
        <li>
          Does this situation call for a dice roll, and which one?{' '}
          <i>
            Is your scoundrel in position to make an action roll or must they
            first make a resistance roll to gain initiative?
          </i>{' '}
          The <b>Narrator</b> has final say.
        </li>
        <li>
          Which events in the story match the experience triggers for character
          and crew advancement?{' '}
          <i>
            Did you express your character’s beliefs, drives, heritage, or
            background? You tell us.
          </i>{' '}
          The <b>players</b> have final say.
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        The particular choices you make will create your own unique story in{' '}
        <i>Provenire</i>. You’ll say something about the world and the
        characters, about revolutionary fiction, and even about the human
        condition. What will you say? There’s only one way to find out.
      </TypographyP>
      <TypographyH2>Rolling the Dice</TypographyH2>
      <TypographyP>
        <i>Provenire</i> uses six-sided dice. You roll several at once and read
        the <b>single highest result</b>.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          If the highest die is a <b>6</b>, it&apos;s a <b>full success</b>
          --things go well. If you roll more than one <b>6</b>, it&apos;s a{' '}
          <b>Critical success</b>
          --you gain some additional advantage.
        </li>
        <li>
          If the highest die is a <b>4 or 5</b>, that&apos;s a{' '}
          <b>partial success</b>--you do what you were trying to do, but there
          are consequences: trouble, harm, reduced effect, etc.
        </li>
        <li>
          If the highest die is a <b>1-3</b>, it&apos;s a <b>bad outcome</b>.
          Things go poorly. You probably don&apos;t achieve your goal and you
          suffer complications, too
        </li>
      </TypographyUnorderedList>
      <TypographyP className="italic">
        If you ever need to roll but you have zero (or negative) dice, roll two
        dice and take the single lowest result. You can’t roll a{' '}
        <b className="no-italic">Critical</b> when you have zero dice.
      </TypographyP>
      <TypographyP>
        To create a dice pool for a roll, you&apos;ll use one or two{' '}
        <b>traits</b> (like your <b>Prowl</b> or your <b>Survey</b>) and take
        dice equal to their combined <b>rating</b>. When selecting <b>traits</b>
        , you may choose one from the left and right sides of the{' '}
        <b>mission traits</b> of your character sheet.
      </TypographyP>
      <TypographyP>
        <b>Trait ratings</b> have two marks. Each mark can be{' '}
        <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 inline-block" />
        ,{' '}
        <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 inline-block bg-red-500" />
        , or{' '}
        <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 inline-block bg-blue-500" />
        . Each filled mark represents a die that gets added to the pool.{' '}
        <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 inline-block" />{' '}
        adds nothing.{' '}
        <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 inline-block bg-red-500" />{' '}
        adds a red die.{' '}
        <span className="rounded-full border-[1px] border-solid border-primary h-4 w-4 inline-block bg-blue-500" />{' '}
        adds a blue die. They represent a progression from novice to expert.
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
        There are a number of ways to gain bonus dice in <i>Provenire</i>. All
        bonus dice are blue, meaning they don&apos;t incur reduced effect if
        they&apos;re your highest roll.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Teamwork:</b> Another member of the crew marks <b>1 stress</b> and
          describes how they help you out. You add their <b>bond</b> with{' '}
          <b>you</b> to your roll.{' '}
          <i>
            Only one person can help you, otherwise it should be a group roll.
          </i>
        </li>
        <li>
          <b>Push yourself:</b> Describe how you dig deep to ensure success.
          Mark <b>2 stress</b> and get <b>1 bonus die</b>.{' '}
          <i>
            If you push yourself, you cannot also take a devil&apos;s bargain.
          </i>
        </li>
        <li>
          <b>Devil&apos;s Bargain:</b> The <b>Narrator</b> presents an
          interesting problem or consequence. Decide if you want to take the
          deal. If you do, get <b>1 bonus die</b>.{' '}
          <i>
            You may <b>resist</b> the consequences of the bargain if you want.
          </i>
        </li>
        <li>
          <b>Group Roll:</b> Ask if anyone else in the crew wants to make a roll
          with you. If they do, you decide who the leader is; the leader marks{' '}
          <b>1 xp</b>. Then everyone separately rolls their <b>bond</b> with the{' '}
          <b>leader</b> plus an action of their choice. The highest roll among
          the group is used as the result. For each member of the group that
          rolls a <b>1-3</b>, the leader marks <b>1 stress</b>. If the overall
          result has consequences, everyone suffers them.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Types of Rolls</TypographyH3>
      <TypographyP>
        There are four types of rolls you&apos;ll use most often in this game:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Action Roll</b>: When a PC attempts an action that&apos;s dangerous
          or troublesome, you make an action roll to find out how it goes.
          Action rolls and their effects and consequences drive most of the
          game.
        </li>
        <li>
          <b>Project Roll</b>: When the PCs are preparing for the mission, some
          activities create <b>clocks</b> to represent how close they are to
          complete. You make project rolls to see how much you get done. See{' '}
          <Link href="/game/actions-and-rolls#project-rolls">
            project rolls
          </Link>{' '}
          for more.
        </li>
        <li>
          <b>Fortune Roll</b>: The GM can make a fortune roll to disclaim
          decision making and leave something up to chance.{' '}
          <i>
            How loyal is an NPC? How much does the plague spread? How much
            evidence is burned before the Overseers kick in the door?
          </i>
        </li>
        <li>
          <b>Resistance Roll</b>: A player can make a resistance roll when their
          character suffers a consequence they don&apos;t like. The roll tells
          us how much stress their character suffers to reduce the severity of a
          consequence.{' '}
          <i>
            When you resist that &quot;Broken Leg&quot; harm, you take some
            stress and now it’s only a &quot;Sprained Ankle&quot; instead.
          </i>
        </li>
      </TypographyUnorderedList>
      <TypographyH3 id="experience-and-advancement">
        Experience & Advancement
      </TypographyH3>
      <TypographyP>
        Experience in <i>Provenire</i> represents the physical and emotional
        experiences your character has been through. It is tracked in a series
        of five <b>xp clocks</b> which have six sections each (for up to a
        maximum of 30xp). When you gain <b>xp</b>, you mark a tick on one of the
        <b>xp clocks</b>. When you fill an <b>xp clock</b>, it&apos;s available
        to be cleared to advance your character.
      </TypographyP>
      <TypographyP>
        You can gain <b>xp</b> during missions and in the <b>Aftermath</b> of a
        mission. You can advance your character by taking the <b>train</b> or{' '}
        <b>consort</b> downtime action to clear <b>xp clocks</b>. More on{' '}
        <b>Downtime</b> in the{' '}
        <Link href="/game/prelude#downtime">
          <span className="underline text-red-500">Prelude</span>
        </Link>
        .
      </TypographyP>
      <TypographyH4>During Mission</TypographyH4>
      <TypographyP>
        <b>+1 xp</b> when...
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          you roll <b>1-3</b> on an <b>action roll</b>
        </li>
        <li>
          you make an <b>action roll</b> in a <b>desperate position</b>
        </li>
        <li>
          you lead a <b>group action</b>
        </li>
        <li>
          the <b>Narrator</b> invokes one of your <b>harms</b>
        </li>
        <li>
          the <b>Narrator</b> invokes one of your <b>conditions</b>
        </li>
      </TypographyUnorderedList>
      <TypographyH4>Mission Aftermath</TypographyH4>
      <TypographyP>
        At the end of each mission, for each item below that occurred,{' '}
        <b>+1 xp</b>. <b>+2 xp</b> if that item occurred multiple times.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          You materially improved the conditions of workers in the Steel Trap
        </li>
        <li>
          You struck fear into your foes&apos; hearts with extreme violence
        </li>
        <li>You expressed your dream, heritage, or background</li>
        <li>You struggled with your hurt or conditions</li>
        <li>You grew closer to someone in your crew</li>
        <li>
          You grew apart from someone in the crew... also{' '}
          <b>strain your bond</b>
          <sup className="text-amber-500">*</sup>{' '}
        </li>
      </TypographyUnorderedList>
      <span className="text-muted-foreground text-sm mb-4">
        <sup className="text-amber-500">*</sup>Bonds are WIP and will be
        expanded on in the next update.
      </span>
      <TypographyH4>Advancement</TypographyH4>
      <TypographyP>
        Advancements cost a number of <b>xp clocks</b> you must expend.
      </TypographyP>
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col items-center">
          <span className="text-sm">1 xp clock</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4"></div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">2 xp clocks</span>
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
          <span className="text-sm">3 xp clocks</span>
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
          <span className="text-sm">4 xp clocks</span>
          <div className="flex items-center gap-4 mt-4">
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-red-500"></div>
            <ArrowRight className="h-4 w-4 text-primary" />
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
            <div className="rounded-full border-[1px] border-solid border-primary h-4 w-4 bg-blue-500"></div>
          </div>
        </div>
      </div>
      <TypographyH2>The Cycle of Play</TypographyH2>
      <TypographyP>
        Sessions of <i>Provenire</i> take place in three major phases:{' '}
        <b>Prelude</b>, <b>The Mission</b>, and <b>The Churn</b>. Each session
        always begins with <b>Prelude</b> and ends with <b>The Churn</b>.
        Multiple cycles can take place durring one session depending on how long
        you&apos;re together.
      </TypographyP>
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/setting">
          <Button variant="outline">
            <ChevronLeft /> Setting
          </Button>
        </Link>
        <Link href="/game/actions-and-rolls">
          <Button variant="outline">
            Actions, Bonds, & Rolls <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
