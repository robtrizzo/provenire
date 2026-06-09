import { DieFace } from "@/components/dice/dice";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Missions</TypographyH1>
      <TypographyP>
        The heart of <i>Provenire</i> is characters: their stories, their
        journeys, and their relationships with the people around them. The sake
        of <b>missions</b> is to paint the world and move events forward in a
        compelling way so that character scenes have an interesting stage.
      </TypographyP>
      <TypographyP>
        During character scenes, the <b>conversation</b> between Narrator and
        player is flipped. The players in the scene are the ones communicating
        what is happening. They can describe the environment, people, and events
        that transpire. The Narrator steps in only to play an NPC, to provide
        requested context, or to adjudicate a roll or uncertain interaction.
        Character scenes continue until the players decide it's time to move on
        to choosing the next mission.
      </TypographyP>
      <TypographyH2>Choosing the Mission</TypographyH2>
      <TypographyP>
        Anyone, player or Narrator may propose a mission. Mulling it over in
        character can help decide in the event of multiple good options. When
        discussing a mission, it&apos;s useful to consider:{" "}
        <i>What is the objective?</i>{" "}
        <i>Can we accomplish this without daring heroics?</i>{" "}
        <i>What&apos;s the core drama?</i>{" "}
        <i>
          What should the first panel of the graphic novel look like when we
          launch into mission?
        </i>
      </TypographyP>
      <TypographyP>
        If the answers to these questions are unclear or the mission feels large
        and vague, consider breaking it up into its most iteresting parts and
        leaving the rest on the cutting room floor.
      </TypographyP>
      <TypographyH2>Approach</TypographyH2>
      <TypographyP>
        Before making the Engagement Roll, the crew chooses an approach to the
        mission. This is in place of planning out every little detail
        beforehand. Once the crew chooses an approach, the <b>Narrator</b> may
        ask them to fill in a key detail.
      </TypographyP>
      <TypographyP>
        The approach can be anything the crew comes up with. A few that may
        frequently apply (along with potential prompted key details) are:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Assault:</b> Do violence to a target.{" "}
          <i>What&apos;s the point of attack?</i>
        </li>
        <li>
          <b>Deception:</b> Lure, trick, or manipulate your way in.{" "}
          <i>What&apo;s the method of deception?</i>
        </li>
        <li>
          <b>Machine:</b> Engage in the strage workings of the factory.{" "}
          <i>What phenomenon or machine did you leverage?</i>
        </li>
        <li>
          <b>Social:</b> Negotiate, bargain, or persuade.{" "}
          <i>Who&apos;s the social connection?</i>
        </li>
        <li>
          <b>Stealth:</b> Trespass unseen.{" "}
          <i>What&apos;s the point of infiltration?</i>
        </li>
        <li>
          <b>Transport:</b> Carry cargo or people through danger.{" "}
          <i>What&apos;re your route and means?</i>
        </li>
      </TypographyUnorderedList>
      <TypographyH2>Loadouts</TypographyH2>
      <TypographyP>
        After the approach and detail are exposed, each player chooses their
        character&apos;s loadout. This indicates how much stuff they&apos;re
        carrying on the mission. They don&apos;t have to select individual items
        - just the maximum amount they&apos;ll have access to during the action.
      </TypographyP>
      <TypographyBlockquote>
        Flashbacks can be used to pull additional gear from
        &quot;pre-planned&quot; stashes.
      </TypographyBlockquote>
      <TypographyP>
        Some items cost more than 1 load, like armor (which costs 2). Heavy
        armor costs 3.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b className="mr-1">Discreet (1):</b> You&apos;re faster and blend in
          with the other workers. You cannot carry heavy items.
        </li>
        <li>
          <b className="mr-1">Conspicuous (3):</b> You look like you&apos;re up
          to something.
        </li>
        <li>
          <b>Bulky (4):</b> You look like an operative on a mission. Your
          movements are hampered.
        </li>
        <li>
          <b className="mr-1">Encumbered (7):</b> You&apos;re overburdened and
          can&apos;t do anything except move very slowly.
        </li>
      </TypographyUnorderedList>
      <TypographyH2>Engagement Roll</TypographyH2>
      <TypographyP>
        Missions in <i className="mr-1">Provenire</i> begin &quot;en media
        res.&quot; This means that planning and preparations are assumed to have
        already taken place. The Engagement Roll determines how things are
        already going when we first see the characters in action.
      </TypographyP>
      <TypographyP>
        The Engagement Roll is a <b>fortune roll</b>, starting with <b>0d</b>{" "}
        because there&apos;s no luck in the Steel Trap. The dice pool gets
        modified by any major advantages or disadvantages the party has.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <TypographyP>
            Is this operation particularly bold or daring? Take <b>+1d</b>. Is
            this operation overly complex or contingent on many factors? Take{" "}
            <b>-1d</b>.
          </TypographyP>
        </li>
        <li>
          <TypographyP>
            Does the plan&apos;s detail expose a vulnerability of the target or
            hit them where they&apos;re weakest? Take <b>+1d</b>. Is the target
            strongest against this approach, or do they have particular defenses
            or special preperations? <b>Take -1d</b>.
          </TypographyP>
        </li>
        <li>
          <TypographyP>
            Are you operating on particularly useful intel? Take <b>+1d</b>. Are
            you operating on faulty or bad intel? Take <b>-1d</b>.
          </TypographyP>
        </li>
        <li>
          <TypographyP>
            Are any of your friends or contacts providing aid for this operation
            (at risk to their safety)? Take <b>+1d</b>. Are any enemies or
            rivals interfering in this operation? Take <b>-1d</b>. Anyone who
            volunteers an enemy or rival takes <b>+1 xp</b>.
          </TypographyP>
        </li>
        <li>
          <TypographyP>
            Is the target of this operation a worker or faction of workers? Take{" "}
            <b>+1d</b>. Is the target an overseer or is an overseer a member of
            the target group? Take <b>-1d</b>. Is the target <b>THE MASTER</b>{" "}
            or his elite agents? Take <b>-2d</b>.
          </TypographyP>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        The engagement roll assumes that the crew are approaching the target as
        intelligently as they can, given the plan and detail they provided. We
        don't need to play out the tentative probing maneuvers, special
        precautions, or other ponderous non-action. The engagement roll covers
        all of that. The crew are already in action, facing the first obstacle
        of the mission.
      </TypographyP>
      <TypographyP>
        <DieFace
          face="ec:s"
          variant="fortune"
          size={42}
          className="inline-block"
        />
        <DieFace
          face="tc"
          variant="fortune"
          size={42}
          className="inline-block"
        />
        <DieFace
          face="ec:s"
          variant="fortune"
          size={42}
          className="inline-block mr-2"
        />{" "}
        Exceptional result.{" "}
        <i>
          You&apos;ve already overcome the first obstacle and you&apos;re in a
          controlled position for what&apos;s next.
        </i>
      </TypographyP>
      <TypographyP>
        <DieFace
          face="ec:s"
          variant="fortune"
          size={42}
          className="inline-block mr-2"
        />{" "}
        Good result.{" "}
        <i>You&apos;re in a controlled position when the action starts.</i>
      </TypographyP>
      <TypographyP>
        <DieFace
          face="t:r"
          variant="fortune"
          size={42}
          className="inline-block mr-2"
        />{" "}
        Mixed result.{" "}
        <i>You&apos;re in a risky position when the action starts.</i>
      </TypographyP>
      <TypographyP>
        <DieFace
          face="t"
          variant="fortune"
          size={42}
          className="inline-block mr-2"
        />{" "}
        Bad result.{" "}
        <i>You&apos;re in a desperate position when the action starts.</i>
      </TypographyP>
    </>
  );
}
