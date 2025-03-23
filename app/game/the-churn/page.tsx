import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Forge from "./(agendas)/forge";
import Pit from "./(agendas)/pit";
import Explore from "./(agendas)/explore";
import Carve from "./(agendas)/carve";
import Gamble from "./(agendas)/gamble";
import Know from "./(agendas)/know";
import Worth from "./(agendas)/worth";
import Walk from "./(agendas)/walk";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Rules", href: "/game/core-system" },
          { name: "Churn", href: "#" },
        ]}
      />
      <TypographyH1>The Churn</TypographyH1>
      <TypographyP>
        During missions, characters are in the thick of it, fighting against the
        system and the overseers. But what about the time in between? The Churn
        is the daily struggle. The grind. The treacherous routine of life in the
        factory. During this time, the characters can&apos;t murder their way
        out of all their promblems. They have to rely on the people around them.
      </TypographyP>
      <TypographyP>
        During the Churn, Universal Actions are replaced by Bonds. Characters
        have Personal, Family, and Professional Bonds in each of Heart,
        Instinct, and Machina respectively. These Bonds can be advanced like
        actions can; they represent time and energy the characters are putting
        into their relationships.
      </TypographyP>
      <TypographyP>
        At this time, the converation is shifted to an even balance between
        player and <b>Narrator</b> will still call for particular actions and/or
        rolls during the Churn&apos;s phases.
      </TypographyP>
      <TypographyH2 id="aftermath">Aftermath</TypographyH2>
      <TypographyH3 id="heat">Heat</TypographyH3>
      <TypographyP>
        The Steel Trap is a place of prying eyes, informants, and cunning
        overseers. Anything you do might be witnessed, and there&apos;s always
        evidence left behind. To represent this, the crew accumulates{" "}
        <b>heat</b> as they cause trouble. After a <b>mission</b> <i>or</i>{" "}
        conflict with an opponent, the crew takes <b>heat</b> according to the
        following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>0 heat</b>: Smooth & quiet; low exposure
        </li>
        <li>
          <b>2 heat</b>: Contained: standard exposure
        </li>
        <li>
          <b>4 heat</b>: Loud & chaotic; high exposure
        </li>
        <li>
          <b>6 heat</b>: Wild; devastating exposure
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
        Add <b>+1 heat</b> if the mission took place outside of scouted
        territory.
      </TypographyP>
      <TypographyP>
        Add <b>+1 heat</b> if combat was involved; an additional <b>+1 heat</b>{" "}
        if there were enemy survivors.
      </TypographyP>
      <TypographyP>
        Add <b>+2 heat</b> if anyone in the crew was identified.
      </TypographyP>
      <TypographyP>
        When your crew reaches <b>9 heat</b>, you gain a <b>wanted level</b> and
        clear your <b>heat</b>.{" "}
        <i>
          Excess <b>heat</b> rolls over
        </i>
        .
      </TypographyP>
      <TypographyP>
        The only way to reduce <b>wanted level</b> is if a crew member, family
        member, contact, or framed enemy gets incarcerated. When this happens,
        reduce your <b>wanted level</b> by 1 and clear your <b>heat</b>.
      </TypographyP>
      <TypographyH4 id="crackdowns">Crackdowns</TypographyH4>
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
        If the answer to any of these is &quot;yes&quot;, it triggers a{" "}
        <b>Crackdown</b>. The overseers will come out in force to punish every
        worker in the wing of the factory suspected to house the crew. This is a
        special event that could be played out should the players choose.
      </TypographyP>
      <TypographyH3>Rewards</TypographyH3>
      <TypographyP>
        Where it is common in heist ficiton for the payoff to be an ambush or
        rug-pull, that is not something that the PCs should be worrying about
        every session. In <i>Provenire</i>, the <b>Narrator</b> does not mess
        with the <b>payoff</b>.
      </TypographyP>
      <TypographyH4 id="rep">Rep</TypographyH4>
      <TypographyP>
        After a mission, the PCs take stock of the events of the operation. The
        crew earns <b>rep</b> according to one half the <b>heat</b> generated by
        the mission (rounded down, minimum of 1).
      </TypographyP>
      <TypographyH4 id="mission-xp">Mission XP</TypographyH4>
      <TypographyP>
        At the end of each mission, for each item below that occurred, mark{" "}
        <b>1 xp</b>. Mark <b>2 xp</b> if that item occurred multiple times.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <i>
            You materially improved the conditions of workers in the Steel Trap
          </i>
        </li>
        <li>
          <i>
            You struck fear into your foes&apos; hearts with extreme violence
          </i>
        </li>
        <li>
          <i>You expressed your dream, heritage, or background</i>
        </li>
        <li>
          <i>You struggled with your hurt or conditions</i>
        </li>
        <li>
          <i>You grew closer to someone in your crew</i>
        </li>
        <li>
          <i>
            You grew apart from someone in the crew... also{" "}
            <b>strain your bond</b>
          </i>
        </li>
      </TypographyUnorderedList>
      <TypographyH2 id="breather">Taking a Breather</TypographyH2>
      <TypographyP>
        Just after the mission, you may choose to take some time for yourself.
        When you take a breather, you seek out comfort, peace, or vice. Whatever
        your character feels they need to reduce the stress of risking their
        lives on missions. If you do, spend <b>1 food / material / goodwill</b>{" "}
        and clear all of your <b>stress</b>. If your stress level was close to
        your max (within 2 ticks), you overindulge or neglect other parts of
        your life that need attention. Make a <b>fortune roll</b> on the{" "}
        <b>overindulgence table</b> equal to your conditions (max 4).
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
              1
            </TableCell>
            <TableCell className="w-20">
              Reality comes knocking; mark <strong>1 tick</strong> on your
              background&apos;s clock
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              2
            </TableCell>
            <TableCell className="w-20">
              You attract trouble; <strong>raise the stakes</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              3
            </TableCell>
            <TableCell className="w-20">
              You shut out the world; <b>strain your bond</b> with someone
              depending on you{" "}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              4
            </TableCell>
            <TableCell className="w-20">
              You indulge lavishly; spend <strong>1 food</strong> or{" "}
              <strong>1 material</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              5
            </TableCell>
            <TableCell className="w-20">
              You brag about your exploits: <strong>+2 heat</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-16 font-medium border-r-slate-800 border-r-[1px]">
              6
            </TableCell>
            <TableCell className="w-20">
              You forget something important to your loved ones; mark{" "}
              <strong>2 stress</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TypographyH2 id="agendas">Entanglements</TypographyH2>
      <TypographyP>
        Your crew didn&apos;t just spring into existence tonight. You have a
        complex history of favors, commitments, debts, and promises that got you
        where you are today. To reflect this, after each <b>agendas phase</b>{" "}
        you roll dice to find out which <b>entanglement</b> comes calling. An
        <b>entanglement</b> might be a rival, opposing faction, an enforcer,
        overseer, or even the strange workings of the Steel Trap&apos;s
        machinery.
      </TypographyP>
      <TypographyP>
        Entanglements become more severe as your <b>heat</b> and{" "}
        <b>wanted level</b> increase. They can also be made more intense when
        players choose to <b>raise the stakes</b> during the{" "}
        <b>agendas phase</b>.
      </TypographyP>
      <TypographyP>
        The <b>Narrator</b> rolls in secret. They may choose to introduce the
        entanglement immediately, or they may bide their time for a dramatic
        moment <i>before the next mission</i>. The <b>entanglement</b> manifests
        fully before the PCs have a chance to avoid it - it cannot be{" "}
        <b>resisted</b>. The players may choose to make it a quick resolution or
        to dive deep into the scene.
      </TypographyP>
      <TypographyH2 id="agendas">Agendas</TypographyH2>
      <TypographyP>
        Just because the mission is over doesn&apos;t mean your work is done. In
        the spare hours between labor and home, you squeeze every drop of
        advantage you can out of your time. To your family and loved ones,
        you&apos;re suddenly not around as much. Last one to bed. First to rise.
        Missing meals and skipping out on family events. But you&apos;re doing
        it for them. You&apos;re doing it for the crew. You&apos;re doing it
        because no one else will.
      </TypographyP>
      <TypographyP>
        During the Churn, there is an <b>Agendas</b> phase. Each Skillset has a
        list of unique upgrades or special projects they can pursue. Once
        completed or achieved, they apply to the entire crew.
      </TypographyP>
      <TypographyP>
        The players at the table vote on two <b>agendas</b> to pursue, then they
        choose which characters (both PCs and NPCs) will be pursuing each
        agenda.
      </TypographyP>
      <TypographyBlockquote>
        Where each <b>skillset</b> has their own <b>agenda</b>, the players may
        choose any <b>agenda</b> to pursue, even if their group doesn&apos;t
        have a member with that <b>skillset</b>.
      </TypographyBlockquote>
      <TypographyP>
        For each agenda, the players choose a <b>lead</b>. Then the <b>lead</b>{" "}
        sets the scene:{" "}
        <i>
          What&apos;s going through their head? What are they struggling with?
          How did the events of the mission impact their own personal journey?
        </i>
      </TypographyP>
      <TypographyBlockquote>
        Players can decide if each <b>agenda</b> is a quick die roll, montage,
        or a full scene.
      </TypographyBlockquote>
      <TypographyP>
        The <b>Narrator</b> describes the situation, and we play to find out
        what happens.
      </TypographyP>
      <TypographyP>
        When you are rolling for an Agenda, you may choose to{" "}
        <b>raise the stakes</b> in exchange for <b>+1d</b> on your action. This
        makes entanglements potentially more dramatic. Each time your character
        isn&apos;t the <b>lead</b>, gain <b>+1d</b> to your next agenda roll.
      </TypographyP>
      <Forge />
      <Explore />
      <Pit />
      <Carve />
      <Gamble />
      <Know />
      <Worth />
      <Walk />

      <TypographyH2 id="subsistence">Subsistence</TypographyH2>
      <TypographyP>
        Not everyone who lives in the factory works. Many are too young, too
        old, or not cut out for the brutality of the factory floor. These people
        rely on the labor of their family members to survive. Your character
        works not only to feed themselves, but to feed their loved ones as well.
      </TypographyP>
      <TypographyP>
        During the Churn, there is a <b>Subsistence</b> phase. First, each
        character advances the <b>Starvation</b> clock by <b>2 ticks</b>. If the{" "}
        <b>Starvation</b> clock is full at the end of the{" "}
        <b>Subsistence phase</b>, one of the character&apos;s family members
        perishes from hunger.
      </TypographyP>
      <TypographyBlockquote>
        At any time during the <b>Churn</b>, a character may choose to spend{" "}
        <b>1 food</b> to reduce the <b>Starvation</b> clock by <b>1</b>. This
        can be done even if the <b>Starvation</b> clock is full.
      </TypographyBlockquote>
      <TypographyP>
        After the <b>Starvation</b> clock has been advanced, the PC labors in
        the dangerous conditions dictated by their Background. They roll an
        action that must include one granted by their Background to determine
        results.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Critical Success:</b> As success, but gain an additional benefit
          according to your Background.
        </li>
        <li>
          <b>Success:</b> You&apos;ve earned enough to feed your family and
          yourself. Reduce the <b>Starvation</b> clock by 2.
        </li>
        <li>
          <b>Partial Success:</b> You work yourself to the bone, but are given
          scraps nonetheless. Reduce the <b>Starvation</b> clock by 1. Suffer
          consequences according to your Background.
        </li>
        <li>
          <b>Failure:</b> You&apos;ve earned nothing. Mark a level one permanent
          harm: &quot;hungry&quot;. This cannot be healed until you eat. Suffer
          consequences according to your Background.
        </li>
      </TypographyUnorderedList>
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/actions-and-rolls">
          <Button variant="outline">
            <ChevronLeft className="inline-block" /> Actions & Rolls
          </Button>
        </Link>
        <Link href="/game/character-creation">
          <Button variant="outline">
            Character Creation <ChevronRight className="inline-block" />
          </Button>
        </Link>
      </div>
    </>
  );
}
