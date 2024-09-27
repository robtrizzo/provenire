import { Separator } from '@/components/ui/separator';
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

export default async function Page() {
  return (
    <>
      <TypographyH1>The Mission</TypographyH1>
      <TypographyP>
        The mission is when the PCs risk their lives for the betterment of their
        communities. This is when the majority of dice are rolled and
        consequences occur. Missions have no target length or difficulty:
        they&apos;re done when they&apos;re done.
      </TypographyP>
      <TypographyH2>Actions and Consequences</TypographyH2>
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
      <TypographyH2>Flashbacks</TypographyH2>
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
      <TypographyH2>Combat</TypographyH2>
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
      <TypographyH3>Finish Them</TypographyH3>
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
      <TypographyH2>Stress and Conditions</TypographyH2>
      <TypographyP>
        Living and working in the Steel Trap is stressful on its own. Defying
        centuries of oppresion and risking your life is another matter entirely.{' '}
        <strong>Stress</strong> is meant to represent a character&apos;s luck
        and psychological fortitude as they do the unthinkable. When players
        don&apos;t want a consequence to occur, they can spend stress to resist
        it or invoke a <strong>flashback</strong> to overcome it.
      </TypographyP>
      <TypographyP>
        When a character marks the last box in their{' '}
        <strong>stress track</strong>, they break for a moment. They can choose
        to lash out against the machine (an outburst which leads to{' '}
        <strong>+6 heat</strong>) or they can lash out against the ones closest
        to them (mark a <strong>condition).</strong>
      </TypographyP>
      <TypographyH3>Conditions</TypographyH3>
      <TypographyP>
        <strong>Conditions</strong> are powerful negative emotions which the PCs
        cannot shed without some effort. They can be compartmentalized and
        ignored for a time, but once the mission is done and PCs have to return
        to everyday life, that&apos;s when <strong>conditions</strong> rear
        their heads.
      </TypographyP>
      <TypographyP>
        For each condition a character has, their <strong>stress track</strong>{' '}
        is reduced by 2 (to a minimum of 1). If a PC can no longer take another{' '}
        <strong>condition</strong>, they must lash out against the machine.
      </TypographyP>
      <TypographyP>
        Each <strong>condition</strong> prohibits two different downtime
        activities; and each has a different shitty thing a character can do to
        be rid of them. Alternatively, another PC can <strong>comfort</strong>{' '}
        your character, advancing your <strong>recovery</strong> clock. More on{' '}
        <strong>recovery</strong>{' '}
        <span className="text-red-600 underline">
          <Link href="/game/the-churn#downtime">here</Link>
        </span>
        . The <strong>conditions</strong> are:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <strong>Afraid</strong>: You cannot <strong>train</strong> or pursue a{' '}
          <strong>long term project</strong>. Clear by running from something
          difficult (<strong>-2 rep or goodwill</strong>).
        </li>
        <li>
          <strong>Angry</strong>: You cannot <strong>comfort</strong> or{' '}
          <strong>relax</strong>. Clear by breaking something important (
          <strong>-2 material</strong>) or hurting someone (
          <strong>-2 goodwill</strong>).
        </li>
        <li>
          <strong>Guilty</strong>: You cannot <strong>shift blame</strong> or{' '}
          <strong>recover</strong>. Clear by confessing to someone and making a
          sacrifice (<strong>+3 heat or -2 materials</strong>).
        </li>
        <li>
          <strong>Insecure</strong>: You cannot <strong>train</strong> or{' '}
          <strong>shift blame</strong>. Clear by taking foolhardy action without
          telling the crew (<strong>-2 intel or +3 heat</strong>).
        </li>
        <li>
          <strong>Hopeless</strong>: You cannot <strong>comfort</strong> or{' '}
          pursue a <strong>long term project</strong>. Clear by flinging
          yourself into easy relief (<strong>-2 food or rep</strong>).
        </li>
      </TypographyUnorderedList>
      <TypographyH2>Harm and Armor</TypographyH2>
      <TypographyP>
        Harm represents a long-lasting debility (or death). When you suffer
        harm, record the specific injurty on your character sheet equal to the
        level of harm you suffered.
      </TypographyP>
      <TypographyP>
        You suffer the penalty at the end of the row if any or all injuries in
        that row apply to the situation at hand. When you&apos;re impared by an
        injury in the top row (level 3 harm), your character is incapacitated
        and can&apos;t do anything unless they push themselves.
      </TypographyP>
      <TypographyP>
        If you need to mark a harm, but that row is already full, the harm moves
        up a level. If you ever mark level 4 harm, this is fatal.
      </TypographyP>
      <TypographyP>
        When you make a <strong>resistance roll</strong> to avoid or reduce
        harm, it lowers the level of harm you suffer by 2.
      </TypographyP>
      <TypographyH3>Recovering from Harm</TypographyH3>
      <TypographyP>
        During <strong>downtime</strong>, you can <strong>rest</strong> to
        advance your <strong>healing clock</strong>. Every time it fills, shift
        every harm on your sheet down by 1 level. Any harm marked as{' '}
        <strong>temporary</strong> is removed. Some harm is marked as{' '}
        <strong>permanent</strong> and can be shifted but not removed until
        special conditions are met.
      </TypographyP>
      <TypographyH3>Armor</TypographyH3>
      <TypographyP>
        Armor is a special type of equipment which is expended once used. When
        you would suffer harm, you can choose to expend 1 armor to reduce the
        level of harm you suffer by 2. This does mean that you need to mark an{' '}
        <strong>item slot</strong> to have brought the armor.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/prelude">
          <Button variant="outline">
            <ChevronLeft /> Prelude
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
