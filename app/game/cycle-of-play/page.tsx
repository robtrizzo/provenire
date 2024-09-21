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
        interaction. Character scenes continue until the players decide
        it&apos;s time to move on to <strong>gathering information</strong>.
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
        <strong>rep</strong>, <strong>goodwill</strong>,{' '}
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
      <TypographyH2>Engagement Roll</TypographyH2>
      <TypographyP>
        Missions in <span className="italic">Provenire</span> begin &quot;en
        media res&quot;. This means that planning and preparations are assumed
        to have already taken place. The Engagement Roll determines how things
        are already going when we first see the characters in action.
      </TypographyP>
      <TypographyH3>Approach</TypographyH3>
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
      <TypographyH3>Item Loadouts</TypographyH3>
      <TypographyP>
        After the approach and detail are explained, each player chooses their
        character&apos;s <strong>load</strong>. This indicates how much stuff
        they&apos;re carrying on the mission. They don&apos;t have to select
        individual items - just the maximum amount they&apos;ll have access to
        during the action.
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
      <TypographyH2>Mission</TypographyH2>
      <TypographyP>
        The mission is when the PCs risk their lives for the betterment of their
        communities. This is when the majority of dice are rolled and
        consequences occur. Missions have no target length or difficulty:
        they&apos;re done when they&apos;re done.
      </TypographyP>
      <TypographyH3>Actions and Consequences</TypographyH3>
      <TypographyP>
        The mission is when the <strong>conversation</strong> between{' '}
        <strong>Narrator</strong> and player is most important. The{' '}
        <strong>Narrator</strong> describes the environment, NPCs, and situation
        the PCs find themselves in. Sometimes the <strong>Narrator</strong> will
        call for rolls without prompting from the players. The players describe
        what they would like to do: their approach to the situaion or particular
        action they would like to take. The <strong>Narrator</strong> will
        prompt for a roll if the action is uncertain or risky. The player will
        decide which of their character&apos;s action(s) they think best apply
        to their approach. The <strong>Narrator</strong> will then set the
        position and effect, and the player rolls. Once the result is
        determined, the <strong>Narrator</strong> describes the outcome and the
        cycle repeats.
      </TypographyP>
      <TypographyP>
        When players roll anywhere from a <strong>1-5</strong>, it means they
        incurred consequences of varying severity depending on their position.
        Consequencces can be <strong>harm</strong>, a weaker position or effect,
        a <strong>clock</strong> getting started or ticked, or anything else the{' '}
        <strong>Narrator</strong> decides is narratively exciting. Once a
        consequence is described by the <strong>Narrator</strong>, it is part of
        the ficiton: the player cannot use a <strong>flashback</strong> to undo
        it (more on flashbacks below). What the player{' '}
        <span className="italic">can</span> do is make a{' '}
        <strong>resistance roll</strong> to avoid or reduce the consequence.{' '}
        <strong>Resistance rolls</strong> are more of a player move than a
        character move in <span className="italic">Provenire</span>. The player
        does not need to justify or explain how they&apos;re resisting, though
        it&apos;s strongly encouraged for them to do so as it will lead to
        interesting narrative moments.
      </TypographyP>
      <TypographyH3>Flashbacks</TypographyH3>
      <TypographyP>
        The rules don&apos;t distinguish between actions performed in the
        present moment and those performed in the past. When a mission is
        underway, you can invoke a <strong>flashback</strong> to roll for an
        action in the past that impacts your current situation. Maybe you
        convinced an enforcer to cancel their patrol tonight, or you bribed a
        worker to leave a door unlocked. Whatever it is, it can only{' '}
        <span className="italic">add</span> to the fiction, not undo it.
      </TypographyP>
      <TypographyP>
        The <strong>Narrator</strong> sets a <strong>stress cost</strong> when
        you activate a flashback action.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>0 Stress</strong>: An ordinary action for which you had an
          easy opportunity.
        </li>
        <li>
          <strong>1 Stress</strong>: A complex action or unlikely opportunity.
        </li>
        <li>
          <strong>2 (or more) Stress</strong>: An elaborate action that involved
          special opportunities or contingencies.
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        After the stress cost is paid, a flashback action is handled just like
        any other action. Sometimes it will entail an action roll, because
        there&apos;s some danger or trouble involved. Sometimes a flashback will
        entail a fortune roll, because we just need to find out how well (or how
        much, or how long, etc). Sometimes a flashback won&apos;t call for a
        roll at all because you can just pay the stress and it&apos;s
        accomplished.
      </TypographyP>
      <TypographyP>
        If a flashback involves a <strong>downtime</strong> activity, pay an
        appropriate <strong>churn</strong> resource instead of stress.
      </TypographyP>
      <TypographyP>
        One of the best uses for a flashback is when the{' '}
        <strong>engagement roll</strong> goes badly. After the{' '}
        <strong>Narrator</strong> describes the trouble you&apos;re in, you can
        call for a flashback to a specal preparation you made, &quot;just in
        case&quot; something like this happened. This way, your flashback
        planning will be focused on the problems that{' '}
        <span className="italic">do</span> happen, not the problems that{' '}
        <span className="italic">might</span> happen.
      </TypographyP>
      <TypographyH3>Combat</TypographyH3>
      <TypographyP>
        Sometimes the events of a mission lead to a violent confrontation. Of
        course the PCs can choose to flee, but sometimes the only way through is
        forward. Combat in <span className="italic">Provenire</span> has
        slightly more structure to it than the typical{' '}
        <strong>conversation</strong> during a mission.
      </TypographyP>
      <TypographyP>
        Often the objective of the PCs during a combat is not strictly to kill
        their opponents, but this is what the rules of combat give structure to.
        NPCs or gangs have a list of <strong>defenses</strong> that the PCs must
        overcome to best them. <strong>Defenses</strong> could be anything from{' '}
        <span className="italic">tough hide</span> to{' '}
        <span className="italic">nimble</span> to{' '}
        <span className="italic">numbers</span>. There is no set list of
        defenses or approaches to dealing with each. This is handled in the
        fiction and the <strong>conversation</strong> between the players and
        the Narrator.
      </TypographyP>
      <TypographyP>
        Some enemies may also have <strong>weaknesses</strong> which can be
        exploited by the PCs. Similar to <strong>defenses</strong>, there is no
        set list, nor does any have a predefined benefit or approach it enables
        for the PCs.
      </TypographyP>
      <TypographyP>
        During combat, the PCs will take actions to gain the advantage in the
        fight and/or overcome their enemies&apos; defenses. As normal, the{' '}
        <strong>Narrator</strong> will set position and effect, the player picks
        which of their actions apply to the roll, the <strong>Narrator</strong>{' '}
        describes the outcome and consequences, and the cycle repeats.
      </TypographyP>
      <TypographyH4>Finish Them</TypographyH4>
      <TypographyP>
        Once the PCs have narratively overcome each of an enemy&apos;s{' '}
        <strong>defenses</strong>, they can attempt to{' '}
        <strong>finish them</strong> with an action roll.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Critical</strong>: You dismantle the enemy with impressive
          efficiency. Others will respect or fear you for it.
        </li>
        <li>
          <strong>6</strong>: The enemy is defeated. They are dead, unconscious,
          or otherwise incapacitated. Describe how you did it.
        </li>
        <li>
          <strong>4-5</strong>: The enemy is badly hurt, but they&apos;re still
          in the fight. They may choose to flee and nurse their wounds, or they
          may press on with a new tactic.
        </li>
        <li>
          <strong>1-3</strong>: The enemy is still in the fight and they&apos;re
          sure to exploit the opening you left.
        </li>
      </TypographyUnorderedList>
      <TypographyH2>The Churn</TypographyH2>
      <TypographyP>
        The adrenaline rush fades and life returns to its standard pace. The PCs
        are done risking their lives, though they face new challenges in the
        daily grind.
      </TypographyP>
      <TypographyP>
        During <strong>The Churn</strong>, the <strong>conversation</strong> is
        shifted to an equal balance between player and <strong>Narrator</strong>
        . The players have more narrative control to describe the things and
        people around them, though the <strong>Narrator</strong> will still call
        for particular actions and/or rolls during{' '}
        <strong>The Churn&apos;s</strong> phases. More on{' '}
        <span className="text-red-600">
          <Link href="/game/the-churn">
            <strong>The Churn</strong> here
          </Link>
        </span>
        .
      </TypographyP>
      <TypographyH3>Payoff</TypographyH3>
      <TypographyP className="text-secondary-foreground">
        Where it is common in heist fiction for the payoff to be an ambush or
        rug-pull, that is not something the PCs should be worrying about every
        session. In <span className="italic">Provenire</span>, the{' '}
        <strong>Narrator</strong> does not mess with the <strong>payoff</strong>
        .
      </TypographyP>
      <TypographyP>
        After a mission, the PCs take stock of their rewards from the operation.
        The crew earns <strong>rep</strong> according to the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <span className="italic">
            Do you keep your crew&apos;s involvement in the mission under wraps?
          </span>{' '}
          <strong>Earn 0 rep.</strong>
        </li>
        <li>
          <span className="italic">
            Was the target of the score an individual worker?
          </span>{' '}
          <strong>Earn 0 rep.</strong>
        </li>
        <li>
          <span className="italic">
            Was the target of the score a group of workers?
          </span>{' '}
          <strong>Earn 1 rep.</strong>
        </li>
        <li>
          <span className="italic">
            Was the target of the score an individual enforcer?
          </span>{' '}
          <strong>Earn 2 rep.</strong>
        </li>
        <li>
          <span className="italic">
            Was the target of the score a group of enforcers?
          </span>{' '}
          <strong>Earn 3 rep.</strong>
        </li>
        <li>
          <span className="italic">
            Was the target of the score an overseer?
          </span>{' '}
          <strong>Earn 4 rep.</strong>
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Heat</TypographyH3>
      <TypographyP>
        The Steel Trap is a place of prying eyes, informants, and cunning
        overseers. Anything you do might be witnessed, and there&apos;s always
        evidence left behind. To represent this, the crew accumulates{' '}
        <strong>heat</strong> as they cause trouble. After a{' '}
        <strong>mission</strong> <span className="italic">or</span> conflict
        with an opponent, the crew takes <strong>heat</strong> according to the
        following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>0 heat</strong>: Smooth & quiet; low exposure
        </li>
        <li>
          <strong>2 heat</strong>: Contained; standard exposure
        </li>
        <li>
          <strong>4 heat</strong>: Loud & chaotic; high exposure
        </li>
        <li>
          <strong>6 heat</strong>: Wild; devastating exposure
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Add <strong>+1 heat</strong> if an overseer was the target. Add{' '}
        <strong>+1 heat</strong> if the mission took place outside of scouted
        territory. Add <strong>+1 heat</strong> if combat was involved; an
        additional <strong>+1 heat</strong> if there were enemy survivors.
      </TypographyP>
      <TypographyP>
        When your crew reaches <strong>9 heat</strong>, you gain a{' '}
        <strong>Wanted Level</strong> and clear your <strong>heat</strong>.
        Excess <strong>heat</strong> rolls over.
      </TypographyP>
      <TypographyP>
        The only way to reduce <strong>Wanted Level</strong> is if a crew
        member, family member, contact, or framed enemy gets incarcerated. When
        this happens, reduce <strong>Wanted Level</strong> by 1 and clear your{' '}
        <strong>heat.</strong>
      </TypographyP>
      <TypographyH4>Crackdowns</TypographyH4>
      <TypographyP>
        The overseers may appear aloof at times. They prowl the periphery and
        bark orders. Rarely bothering to do the real work of managing the
        factory themselves, they&apos;re often content to let their enforcers
        toil on their behalf. The overseers can be stirred to action though. And
        it won&apos;t be pretty. After each mission, ask the crew the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Did we free the workers from their shackles?</li>
        <li>Did we free the workers from their fear?</li>
        <li>Did we free the workers from their despair?</li>
        <li>Did we kill an overseer for the first time?</li>
      </TypographyUnorderedList>
      <TypographyP>
        If the answer to any of these is &quot;yes&quot;, it triggers a{' '}
        <strong>Crackdown</strong>. The overseers will come out in force to
        punish every worker in the wing of the factory suspected to house the
        crew. This is a special event that could be played out should the
        players choose.
      </TypographyP>
      <TypographyH3>Subsistence</TypographyH3>
      <TypographyP>
        Time spent on missions and agendas means less time working to feed your
        family. The harsh truth of your resistance is that it may come at the
        expense of the ones you&apos;re doing this for. More details on the{' '}
        <span className="text-red-600">
          <Link href="/game/the-churn#subsistence">
            <strong>subsistence phase</strong> here
          </Link>
        </span>
        .
      </TypographyP>
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        The crew needs ever advantage it can get. The work to grow from a
        scrappy group of troublemakers into a connected and coordinated
        rebellion takes place here. More on the{' '}
        <span className="text-red-600">
          <Link href="/game/the-churn#agendas">
            <strong>agendas phase</strong> here
          </Link>
        </span>
        .
      </TypographyP>
      <TypographyH3>Entanglements</TypographyH3>
      <TypographyP>
        Your crew didn&apos;t just spring into existence tonight. You have a
        complex history of favors, commitments, debts, and promises that got you
        where you are today. To reflect this, after each{' '}
        <strong>agendas phase</strong> you roll dice to find out which{' '}
        <strong>entanglement</strong> comes calling. An entanglement might be a
        rival, opposing faction, an enforcer, overseer, or even the strange
        workings of the Steel Trap&apos;s machinery.
      </TypographyP>
      <TypographyP>
        The <strong>Narrator</strong> uses the column according to the
        crew&apos;s <strong>heat</strong> and rolls a number of dice equal to
        their <strong>Wanted Level</strong>. Extra dice may have been added
        during the <strong>agendas phase</strong>.
      </TypographyP>
      <TypographyH3>Downtime</TypographyH3>
      <TypographyP>
        A moment to breathe. Some quiet alone time. Quality time with friends
        and family. Helping each other through your hurt. And never enough time
        to do it. This is what they've taken from you. This is what it&apos;s
        about. More on the{' '}
        <span className="text-red-600">
          <Link href="/game/the-churn#downtime">
            <strong>downtime phase</strong> here
          </Link>
        </span>
        .
      </TypographyP>
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
