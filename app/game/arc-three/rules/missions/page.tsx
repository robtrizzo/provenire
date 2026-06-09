import { DieFace } from "@/components/dice/dice";
import { InlineSymbol } from "@/components/dice/dice-borders";
import { ThetaDouble, Threat } from "@/components/dice/dice-symbols";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      <TypographyH2>Aftermath</TypographyH2>
      <TypographyH3>Heat</TypographyH3>
      <TypographyP>
        The crew has wrested Fabrication from the overseers&apos; clutches and
        given its workers a chance at their own destiny. <b>THE MASTER</b> and
        his servants seem more intent on containing this news than actually
        addressing the issue. But the Steel Trap is a place of prying eyes,
        informants, and conniving overseers. Rumors of liberation can spread to
        even the most unlikely places.
      </TypographyP>
      <TypographyP>
        After a <b>mission</b> or conflict with an opponent, the crew takes{" "}
        <b>heat</b> according to the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>0 heat:</b> Smooth & quiet; low exposure
        </li>
        <li>
          <b>2 heat:</b> Contained; standard exposure
        </li>
        <li>
          <b>4 heat:</b> Loud & chaotic; high exposure
        </li>
        <li>
          <b>6 heat:</b> Wild; devastating exposure
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        <i>
          Did you keep your crew&apos;s involvement in the mission under wraps?
        </i>{" "}
        <b>-4 heat</b>.
      </TypographyP>
      <TypographyP>
        Add <b>+1 heat</b> if an overseer was the target.
      </TypographyP>
      <TypographyP>
        Add <b>+1 heat</b> if the mission took place outside of Fabrication.
      </TypographyP>
      <TypographyP>
        Add <b>+1 heat</b> if combat was involved; an additional <b>+1 heat</b>{" "}
        if there were enemy survivors.
      </TypographyP>
      <TypographyP>
        When the crew reaches <b>9 heat</b>, <b className="mr-1">THE MASTER</b>{" "}
        escalates his efforts to contain Fabrication. Clear the crew&apos;s{" "}
        <b>heat</b>. Excess <b>heat</b> rolls over.
      </TypographyP>
      <TypographyH3>Crackdowns</TypographyH3>
      <TypographyP>
        <b>THE MASTER</b> and his closest servants are aloof, preferring to pass
        off the real work of running the factory to their pions in each sector.{" "}
        <b>THE MASTER</b> <i className="mr-1">can</i> be stirred to action
        though. And it won't be pretty. After each mission, ask the crew the
        following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>Did news of the crew's victory spread to another sector?</li>
        <li>Do the workers know there's a way out?</li>
        <li>
          Do the workers reject <b>Kingwulf</b>?
        </li>
        <li>
          Can the workers sustain themselves without <b>THE MASTER'S</b>{" "}
          shipments?
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        If the answer is "yes," this triggers a <b>Crackdown</b>.{" "}
        <b>THE MASTER</b> and his servants will lash out with overwhelming force
        and seek to punish every worker in Fabrication. This is a special event
        which could be played out if the players choose.
      </TypographyP>
      <TypographyH3>Rewards</TypographyH3>
      <TypographyP>
        Where it is common in heist ficiton for the payoff to be an ambush or
        rug-pull, that is not something that the crew should be worrying about
        every session. In <i>Provenire</i>, the Narrator does not mess with the
        payoff.
      </TypographyP>
      <TypographyH4>Rep</TypographyH4>
      <TypographyP>
        After a mission, the crew takes stock of the events of the operation.
        The crew earns <b>rep</b> according to one half the <b>heat</b>{" "}
        generated by the mission (rounded down, minimum of 1).
      </TypographyP>
      <TypographyH4>XP</TypographyH4>
      <TypographyP>
        At the end of each mission, for each item below that occurred, mark{" "}
        <b>1 xp</b>. Mark <b>2 xp</b> if that item occurred multiple times.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <i>
            You materially improved the conditions of workers in the Steel Trap.
          </i>
        </li>
        <li>
          <i>You struck fear into your foes' hearts with extreme violence.</i>
        </li>
        <li>
          <i>You expressed your dream, heritage, or background.</i>
        </li>
        <li>
          <i>You struggled with your hurt or conditions.</i>
        </li>
        <li>
          <i>You grew closer to someone in your crew.</i>
        </li>
        <li>
          <i>
            You grew apart from someone in the crew... also{" "}
            <b>strain your bond</b>.
          </i>
        </li>
      </TypographyUnorderedList>
      <TypographyH2>Taking a Breather</TypographyH2>
      <TypographyP>
        Just after a mission, you may choose to take some time for yourself.
        When you take a breather, you seek out comfort, peace, or vice. Whatever
        your character feels they need to reduce the stress of risking their
        lives on missions. If you do, spend <b>1 food, material,</b> or{" "}
        <b>goodwill</b> and clear all of your <b>stress</b>.
      </TypographyP>
      <TypographyP>
        If your stress level was close to your max (within 2 ticks), you
        overindulge or neglect other parts of your life that need attention.
        Some members of the crew have even further obligations: <b>Advisors</b>{" "}
        overindulge within 3 of max stress; <b>Councilors</b> within 4.
      </TypographyP>
      <TypographyP>
        When you overindulge, make a <b>fortune roll</b> equal to your
        conditions. Count the number of{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>{" "}
        faces and refer to the <b>overindulgence table</b>.
      </TypographyP>
      <Table>
        <TableCaption>Overindulgence</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16 border-r-slate-800 border-r-[1px]">
              roll
            </TableHead>
            <TableHead className="w-16 border-r-slate-800 ">
              consequence
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              <InlineSymbol>
                <ThetaDouble />
              </InlineSymbol>
            </TableCell>
            <TableCell className="w-20">
              For a blessed few hours, reality doesn't come knocking
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
            </TableCell>
            <TableCell className="w-20">
              You shut out the world; <b>strain your bond</b> with someone
              depending on you
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
            </TableCell>
            <TableCell className="w-20">
              You indulge lavishly; spend <b>1 food</b> or <b>1 material</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
            </TableCell>
            <TableCell className="w-20">
              You brag about your exploits: <b>+2 heat</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
            </TableCell>
            <TableCell className="w-20">
              You forget something important to your loved ones; mark{" "}
              <b>2 stress</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
              <InlineSymbol>
                <Threat />
              </InlineSymbol>
            </TableCell>
            <TableCell className="w-20">
              You go looking for trouble; <b>entanglements</b> will be far worse
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
