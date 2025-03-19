import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
  TypographyOrderedList,
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
import items from "@/public/items.json";
import ItemEntry from "@/components/item-entry";
import FactoryMap from "@/components/factory-map";
import HierarchyTree from "@/components/hierarchy-tree";
import factions from "@/public/factions.json";
import FactionEntry from "@/components/faction-entry";
import ScornTable from "@/components/scorn-table";
import cohorts from "@/public/cohorts.json";
import CohortEntry from "@/components/cohort-entry";

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
      <TypographyH3>Forge the tools of rebellion</TypographyH3>
      <TypographyP>
        During The Churn, the crew is designing, forging, and building new
        equipment for the crew... if only they have the <b>materials</b>. These
        items are equipable by the crew until they become damaged or lost. If
        the crew has no materials, they can only research new designs.
      </TypographyP>
      <TypographyP>
        First, the crew picks a design to research and makes a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        to pursue it. Once the clock is filled, the design is complete and the
        crew can build it by spending <b>1 material</b>. Instead of researching
        a new design, the crew can start a new project to upgrade an existing
        design. When an upgrade project is completed, the crew can spend{" "}
        <b>1 material</b> to remove a negative trait or add a positive trait to
        the design. A full list of equipment traits is{" "}
        <Link href="/game/appendix#equipment-traits">
          <b className="underline text-red-500">here</b>
        </Link>
        .
      </TypographyP>
      <TypographyH4>Starting equipment</TypographyH4>
      <TypographyUnorderedList>
        {items.starting.map((item, index) => (
          <li key={index}>
            <ItemEntry item={item} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4 id="schematics">Schematics</TypographyH4>
      <TypographyUnorderedList>
        {items.schematics.map((item, index) => (
          <li key={index}>
            <ItemEntry item={item} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4 id="formulae">Formulae</TypographyH4>
      <TypographyP>
        Alchemical formulae are researched similarly to <b>schematics</b>; but
        unlike equipment, alchemical concoctions are consumable. When spending
        <b>1 material</b> to create a batch from a formula, the crew gains a
        <b>3-clock</b> representing doses. Whenever someone in the crew uses a
        dose, mark <b>1 tick</b> on the clock. When the clock is complete, the
        crew is out of doses. A full list of alchemical traits is{" "}
        <Link href="/game/appendix#alchemical-traits">
          <b className="underline text-red-500">here</b>
        </Link>
        .
      </TypographyP>
      <TypographyUnorderedList>
        {items.formulae.map((item, index) => (
          <li key={index}>
            <ItemEntry item={item} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH3>Explore the factory&apos;s heights and depths</TypographyH3>
      <TypographyP>
        During The Churn, the crew are scouting and exploring the inaccessible
        and secret pathways of the Steel Trap. The crew can discover secret
        routes from one area to the next, giving the crew access to new regions
        of the factory.
      </TypographyP>
      <TypographyP>
        Regions that are connected by pathways and passages (marked with a solid
        line) require a project clock of 5 to discover secret pathways between
        them. Regions not connected by conventional pathways require more time,
        marked individually on the map.
      </TypographyP>
      <TypographyP>
        Each region has a unique contact (<b>5-clock</b>), danger (
        <b>3-clock</b>), and special feature (<b>3-clock</b>). Once a region is
        ulocked, the crew can explore it to uncover these details. The crew can
        start project clocks to do so.
      </TypographyP>
      <TypographyH4>Regions</TypographyH4>
      <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-290px)] overflow-auto">
        <FactoryMap />
      </div>

      <TypographyH3>Pit the oppressors against each other</TypographyH3>
      <TypographyP>
        During The Churn, the crew is traversing the hierarchy of power in the
        Steel Trap. Or more accurately, they&apos;re coercing and manipulating
        the workers around them to do so. Make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        and gain informants equal to the result. These are hapless or unwilling
        workers who have been manipulated into spying for the crew.
      </TypographyP>
      <TypographyP>
        The crew can sacrifice any number of informants to roll that many dice.
        They gain intel equal to the result: <b>1-3:</b> 0 (and one survives to
        seek revenge), <b>4,5:</b> 1, <b>6:</b> 2, <b>Critical:</b> 3.
      </TypographyP>
      <TypographyP>
        The crew then spends <b>intel (1/2/4/6)</b> to blackmail or plant
        informants in the overseers&apos; ranks. They select an upgrade from the
        hierarchy tree. An upgrade can only be selected if all of the
        prerequisite upgrades are also selected.
      </TypographyP>
      <TypographyH4>Overseer Hierarchy Tree</TypographyH4>
      <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-290px)] overflow-auto">
        <HierarchyTree />
      </div>

      <TypographyH3>Carve a path of connection and conversation</TypographyH3>
      <TypographyP>
        During The Churn, the crew is making deals and promises to acquire{" "}
        resources. These deals and promises are important to accomplish during
        Missions, or else the crew is going to get put in a tough spot.
      </TypographyP>
      <TypographyP>
        <b>Factions</b> can be community leaders, worker clans, or overseer
        packs. Each <b>faction</b> has its own agenda and will be working to
        accomplish it with or without the crew&apos;s help. Each <b>faction</b>{" "}
        also has a scorn track. This will increase if the crew fails to
        accomplish the task they promised to do. If the scorn track reaches 3,
        the crew can no longer make deals with that faction.
      </TypographyP>
      <TypographyP>
        The crew can only make deals with <b>factions</b> in regions of the
        factory that the crew has access to.
      </TypographyP>
      <TypographyP>
        Choose the faction to make a deal with. Gain the <b>faction&apos;s</b>{" "}
        payment up front in exchange for promising to accomplish a task related
        to the <b>faction&apos;s</b> agenda.
      </TypographyP>
      <TypographyH4>Factions</TypographyH4>
      <TypographyUnorderedList>
        {factions.map((f, i) => (
          <li key={i}>
            <FactionEntry faction={f} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4>Scorn</TypographyH4>
      <TypographyP>
        If the crew doesn&apos;t accomplish the task, the <b>faction&apos;s</b>{" "}
        scorn track increases by 1 and the crew rolls on the Scorn table after
        the Misison. The result is determined by the faction&apos;s scorn and
        the die roll.
      </TypographyP>
      <ScornTable />

      <TypographyH3>Gamble and fight for glory</TypographyH3>
      <TypographyP>
        During The Churn, members of the crew are surviving the pits. They can
        gamble for
        <b>food</b> or <b>materials</b> and they can fight. If they make a
        lasting impression on a champion, they could even be recruited as a
        fighting instructor for the crew.
      </TypographyP>
      <TypographyH4>Gamble</TypographyH4>
      <TypographyP>
        When the crew gambles, they bet <b>1 food</b> or <b>1 material</b>, then
        make a <b>fighter tier roll</b>: <b>1-3:</b> lose the bet, <b>4-5:</b>{" "}
        break even,
        <b>6:</b> +2 food or materials.
      </TypographyP>
      <TypographyH4>Fight</TypographyH4>
      <TypographyP>
        Fighters in the pits are organized roughly into <b>rookies</b>,
        <b>veterans</b>, <b>champions</b>, and <b>beasts</b>. Each crew member
        begins as a<b>rookie</b>. Whoever is tiered lower chooses the
        battlefield (player chooses on tie).
      </TypographyP>
      <TypographyP>
        When they fight, they make an action roll modified by difference in
        tier: <b>1-3:</b> get hurt and lose the fight, <b>4-5:</b> get hurt but
        win the fight and gain rep equal to 1+ tier difference, <b>6:</b> win
        the fight and gain <b>rep</b> equal to 1+ tier difference,{" "}
        <b>Critical:</b> win and make a spectacle of it, gain <b>rep</b> equal
        to 2 + foe tier and get promoted to the next tier.
      </TypographyP>
      <TypographyP>
        The wounds from fights vary depending on the opponent. <b>Rookies</b>,
        <b>veterans</b>, and <b>champions</b> cause <b>harm</b> equal to their
        tier.
        <b>Beasts</b> cause a <b>3-harm</b> and <b>2-harm</b> wound.
      </TypographyP>
      <TypographyH4>Instructors</TypographyH4>
      <TypographyP>
        The crew can spend <b>rep</b> to recruit a <b>champion</b> as a fighting
        instructor for themselves and the crew. Each <b>champion</b> has a
        unique fighting style, unlocking the option to pick the
        instructor&apos;s action or special abilities as advances.
      </TypographyP>
      <TypographyP>
        The Steel Trap has its own culture in a way. Some have developed
        fighting styles suited for it. These people are your oppressors, though
        you can turn their own tactics against them.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Gelvir (Pipedancing, 3 rep)</b>{" "}
          <i className="text-muted-foreground">
            maneuver through the machinery and use it to your advantage
          </i>
        </li>
        <li>
          <b>Lareiks (Crowdbreaking, 3 rep)</b>{" "}
          <i className="text-muted-foreground">
            maximize damage to groups of surrounding foes
          </i>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Generations of fighters have come and gone in the pits. Their styles
        have been shaped by the dominance of beasts and their animalistic
        tactics. Some styles have adopted elements of these tactics into styles
        used by fighters who can&apos;t shapeshift.
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>Chlodos (Throatgore, 4 rep)</b>{" "}
          <i className="text-muted-foreground">
            pack tactics, go for the throat
          </i>
        </li>
        <li>
          <b>Hunuil (Bleedout, 5 rep)</b>{" "}
          <i className="text-muted-foreground">
            small, precise strikes in vital regions
          </i>
        </li>
        <li>
          <b>Hermesind (Backsnap, 6 rep)</b>{" "}
          <i className="text-muted-foreground">overwhelming aggression</i>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Dozens, maybe hundreds more fighting styles have been lost to time and
        Fenrir&apos;s jaws. Rarely, a fighter has been taught the old ways in
        secret; tasked with nurturing it until the time is right. These styles,
        you won&apos;t find in the pits.
      </TypographyP>

      <TypographyH3>Make them know you&apos;re not afraid</TypographyH3>
      <TypographyP>
        During The Churn, the crew is spreading word of their achievements to
        gain <b>rep</b>. The crew can spend <b>rep</b> to gain <b>gangs</b>
        and <b>cohorts</b> for the crew. Of course this all causes Heat if done
        recklessly.
      </TypographyP>
      <TypographyH4>Bragging Rights</TypographyH4>
      <TypographyP>
        The crew can choose to make claims of the crew&apos;s accomplishments to{" "}
        gain <b>rep</b>. First they <b>raise the stakes</b>. Then they make a
        roll and add rep according to the result: <b>1-3:</b> 0, <b>4-5:</b> 1,{" "}
        <b>6:</b> 2, <b>Critical:</b> 3.
      </TypographyP>
      <TypographyH4>Cohorts</TypographyH4>
      <TypographyP>
        First a Nail picks a gang or expert to recruit. They make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        to pursue it. Once the clock is filled, the gang or expert is available.
        They can be recruited by spending <b>1 rep</b>. Once recruited, the gang
        or expert can be used to aid the crew in missions and downtime
        activities. If a gang or expert is killed or disbanded, the crew
        can&apos;t recruit them again. Each region of the factory has new gangs
        and experts to recruit.
      </TypographyP>
      <TypographyP>
        Instead of recruiting a new gang or expert, the Nail can start a new
        project to upgrade an existing gang. When an upgrade project is
        completed, the Nail can spend <b>1 rep</b> to remove a negative trait or
        add a positive trait to the gang. A full list of gang traits is{" "}
        <Link href="/game/appendix#gang-traits">
          <b className="underline text-red-500">here</b>
        </Link>
        .
      </TypographyP>
      <TypographyH4>Gangs (Fabrication)</TypographyH4>
      <TypographyUnorderedList>
        {cohorts.gangs.map((c, i) => (
          <li key={i}>
            <CohortEntry cohort={c} />
          </li>
        ))}
      </TypographyUnorderedList>
      <TypographyH4>Experts (Fabrication)</TypographyH4>
      <TypographyUnorderedList>
        {cohorts.experts.map((c, i) => (
          <li key={i}>
            <CohortEntry cohort={c} />
          </li>
        ))}
      </TypographyUnorderedList>

      <TypographyH3>Make the pain worth it</TypographyH3>
      <TypographyP>
        During The Churn, the crew is consorting with community leaders and crew
        contacts to help protect themselves from notice... or <i>rats</i>. They
        can spend <b>goodwill</b> to upgrade the crew&apos;s security and
        increase the quality of living conditions in the community.
      </TypographyP>
      <TypographyP>
        First, the crew picks a project to pursue. They make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        and once the clock is filled, the project is ready. The crew can
        complete a project by spending <b>1 goodwill</b>. Once completed, the
        project is applied to the crew. Many projects have prerequisites that
        must be completed before they can be selected. Each time a project is
        completed, <b>raise the stakes</b>.
      </TypographyP>
      <TypographyH4>Projects</TypographyH4>
      <TypographyP>
        <b>Living Space (3)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Rooms</b>: Crew clears the permanent <b>1 harm</b>{" "}
          &quot;tired&quot; from their sheet.
        </li>
        <li>
          <b>Locked doors</b>: Crew is no longer vulnerable while resting
        </li>
        <li>
          <b>Beds</b>: Crew reduces <b>1 stress</b> each downtime
        </li>
        <li>
          <b>Poultices</b>: gain <b>4 ticks</b> on your healing clock when you
          <b>recover</b>
        </li>
      </TypographyOrderedList>
      <TypographyP>
        <b>Security (5)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Stash</b>: 2 slots each for <b>food</b> and <b>materials</b>
        </li>
        <li>
          <b>Stoker Contact</b>: <b>+1d</b> to reduce <b>heat</b> after killing
        </li>
        <li>
          <b>Large Stash</b>: 4 slots each for <b>food</b> and <b>materials</b>
        </li>
        <li>
          <b>Lookouts</b>: <b>-2 heat</b> per mission
        </li>
      </TypographyOrderedList>
      <TypographyP>
        <b>Lair (7)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Training Room</b>: The crew gains an xp trigger: *You put your
          instructors&apos; lessons into practice*.
        </li>
        <li>
          <b>Holding Chamber</b>: secure place to hold one prisoner.
        </li>
        <li>
          <b>Meeting Room</b>: creates a repeating 5-clock &quot;outisde
          contact&quot; representing new factions reaching out to the crew.
        </li>
        <li>
          <b>Common Room</b>: group rolls during downtime can treat multiple 6s
          as a critical.
        </li>
      </TypographyOrderedList>
      <TypographyP>
        <b>Community (5)</b>
      </TypographyP>
      <TypographyOrderedList>
        <li>
          <b>Meetings</b>: <b>+1d</b> to persuade or consort while in the
          community.
        </li>
        <li>
          <b>Pooled Resources</b>: Starvation clocks are 1 larger
        </li>
        <li>
          <b>Giving Back</b>: Members of the community perform a downtime action
          for the crew.
        </li>
        <li>
          <b>United Front</b>: <b>+1 max stress</b>
        </li>
      </TypographyOrderedList>

      <TypographyH3>
        Walk among the oppressors and learn their secrets
      </TypographyH3>
      <TypographyP>
        During The Churn, the crew is infiltrating the overseers&apos; ranks and
        pursuing special operations. On completion, operations grant a powerufl
        effect or opportunity. First, the crew picks an operation to pursue,
        then makes a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        . Once the clock is filled, the operation takes place and may choose a
        new operation to pursue.
      </TypographyP>
      <TypographyH4>Operations</TypographyH4>
      <TypographyUnorderedList>
        <li>
          <b>Implicate (9)</b>: Plant evidence implicating someone else for the
          crew&apos;s crimes
        </li>
        <li>
          <b>Scout (4)</b>: Learn the name, contact, or danger of an adjacent
          region
        </li>
        <li>
          <b>Expand Network (5)</b>: Permanent <b>+1d</b> to gather information
          rolls in the chosen region
        </li>
        <li>
          <b>Jailbreak (9)</b>: Gain access to a a character&apos;s prison cell
          and sneak them to freedom
        </li>
        <li>
          <b>Lay Trap (9)</b>: <b>+2d</b> to the next engagement roll that
          involes ambushing or surprising the enemy
        </li>
        <li>
          <b>Dreadful Rumors (7)</b>: Learn a region&apos;s special mission
        </li>
      </TypographyUnorderedList>

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
