import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyOrderedList,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  VenetianMask,
  Flame,
  Activity,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FactoryMap from "@/components/factory-map";
import HierarchyTree from "@/components/hierarchy-tree";
import ScornTable from "@/components/scorn-table";
import SkillsetAbilities from "@/components/skillsetAbilities";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import items from "@/public/items.json";
import ItemEntry from "@/components/item-entry";
import factions from "@/public/factions.json";
import FactionEntry from "@/components/faction-entry";
import cohorts from "@/public/cohorts.json";
import CohortEntry from "@/components/cohort-entry";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Character Creation", href: "/game/character-creation" },
          { name: "Skillsets", href: "#" },
        ]}
      />
      <TypographyH1>Skillsets</TypographyH1>
      <TypographyP>
        No one breaks the status quo in the Steel Trap. It&apos;s guaranteed
        failure and hardship for your loved ones. But the PCs are different.
        They&apos;re going to pull it off. Their particular brand of Skillset
        shows how they go about it.
      </TypographyP>
      <TypographyP>
        Your Skillset grants you unique character questions, acions, special
        abilities, and ways to advance the crew during the{" "}
        <Link href="/game/the-churn#agendas">
          <span className="text-red-500 font-bold underline">Agendas</span>
        </Link>{" "}
        phase.
      </TypographyP>

      <TypographyH2 id="Chisel">
        <span className="text-indigo-500">Chisel</span>
        <span className="text-muted-foreground text-lg ml-8">
          A crafty sabetour and wright
        </span>
      </TypographyH2>
      <TypographyP>
        The workers of the Steel Trap spend their lives surrounded by the
        roaring and churning machines of the factory. The Chisel is one of the
        few who dares to attempt understanding them.
      </TypographyP>
      <TypographyP>
        <i>
          A dangerous machine you were tampering with lashed out at you. What
          was the machine and how did it scar you?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          The factory&apos;s every creation leaves behind piles of refuse. What
          waste do you see as useful materials that others don&apos;t?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Cobble <Flame className="inline-block mb-3" />:
          </b>{" "}
          Rapidly make an improvised tool or weapon from available scrap.
        </li>
        <li>
          <b>
            Sabotage <VenetianMask className="inline-block mb-1" />:
          </b>{" "}
          Tamper with or damage a machine or device.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Chisel" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Chisels are designing, forging, and building new
        equipment for the crew... if only they have the <b>materials</b>. These
        items are equipable by the crew until they become damaged or lost. If
        the Chisel has no materials, they can only research new designs.
      </TypographyP>
      <TypographyP>
        First, the Chisel picks a design to research and makes a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        to pursue it. Once the clock is filled, the design is complete and the
        Chisel can build it by spending <b>1 material</b>. Instead of
        researching a new design, the Chisel can start a new project to upgrade
        an existing design. When an upgrade project is completed, the Chisel can
        spend <b>1 material</b> to remove a negative trait or add a positive
        trait to the design. A full list of equipment traits is{" "}
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

      <TypographyH2 id="Flywheel">
        <span className="text-indigo-500">Flywheel</span>
        <span className="text-muted-foreground text-lg ml-8">
          A daring scoundrel and acrobat
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap is part factory, part prison, part fortress. Many of its
        rooms and corridors were never desinged to be traversed by humans.
        Flywheels are one of the few nimble enough to navigate the parts of the
        factory made only for crows, wolves, and bears.
      </TypographyP>
      <TypographyP>
        <i>
          The Beast Lanes are dangerous places, and not everyone is as talented
          as you are. What tragedy has befallen someone who followed you there?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          Your abilities have allowed you to climb to the top of the factory and
          see the sky. How did seeing the wider world and starry cosmos affect
          you?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Acrobatics <Activity className="inline-block mb-4" />:
          </b>{" "}
          Traverse the mechanical matrix of the factory with grace and speed.
        </li>
        <li>
          <b>
            Spin <VenetianMask className="inline-block mb-1" />:
          </b>{" "}
          Twist the truth or redirect conversation to your advantage.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Actions</TypographyH3>
      <SkillsetAbilities skillsetName="Flywheel" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Flywheels are scouting and exploring the inaccessible
        and secret pathways of the Steel Trap. Flywheels can discover secret
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
        ulocked, the Flywheel can explore it to uncover these details. The
        Flywheel can start project clocks to do so.
      </TypographyP>
      <TypographyH4>Regions</TypographyH4>
      <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-290px)] overflow-auto">
        <FactoryMap />
      </div>

      <TypographyH2 id="Fume">
        <span className="text-indigo-500">Fume</span>
        <span className="text-muted-foreground text-lg ml-8">
          A manipulative and intimidating schemer
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap is a place of isolation and loneliness amongst the
        masses. Fumes pierce people&apos;s veneers and glimpse the pain behind
        their eyes.
      </TypographyP>
      <TypographyP>
        <i>
          You&apos;ve seen the worst of the Steel Trap&apos;s workers. What is
          the most desperate thing you&apos;ve seen someone do?
        </i>
      </TypographyP>
      <TypographyP>
        <i>You got too close to one of your informats once. What happened?</i>
      </TypographyP>
      <TypographyP>Actions</TypographyP>
      <TypographyUnorderedList>
        <li>
          <b>
            Organize <Flame className="inline-block mb-3" />:
          </b>{" "}
          Arrange meetings, get people on the same page, or create understanding
          from chaos.
        </li>
        <li>
          <b>
            Manipulate <VenetianMask className="inline-block mb-1" />:
          </b>{" "}
          Deceive or coerce someone into doing what you want.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Fume" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Fumes are traversing the hierarchy of power in the
        Steel Trap. Or more accurately, they&apos;re coercing and manipulating
        the workers around them to do so. Fumes make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        and gain informants equal to the result. These are hapless or unwilling
        workers who have been manipulated into spying for the Fume.
      </TypographyP>
      <TypographyP>
        Fumes can sacrifice any number of informants to roll that many dice.
        They gain intel equal to the result: <b>1-3:</b> 0 (and one survives to
        seek revenge), <b>4,5:</b> 1, <b>6:</b> 2, <b>Critical:</b> 3.
      </TypographyP>
      <TypographyP>
        Fumes then spend <b>intel</b> to blackmail or plant informants in the
        overseers&apos; ranks. They select an upgrade from the hierarchy tree.
        An upgrade can only be selected if all of the prerequisite upgrades are
        also selected.
      </TypographyP>
      <TypographyH4>Overseer Hierarchy Tree</TypographyH4>
      <div className="max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-290px)] overflow-auto">
        <HierarchyTree />
      </div>

      <TypographyH2 id="Grease">
        <span className="text-indigo-500">Grease</span>
        <span className="text-muted-foreground text-lg ml-8">
          A canny and resourceful blusterer
        </span>
      </TypographyH2>
      <TypographyP>
        In the midst of the Steel Trap&apos;s isolation, tightly knit
        communities and factions form: often for protection from their fellow
        workers. Even the overseers have their own factions that don&apos;t take
        kindly to one another. Greases move between these groups, making deals
        and alliances to advance the crew&apos;s goals.
      </TypographyP>
      <TypographyP>
        <i>
          You&apos;ve made a deal with one of the overseers that went wrong.
          What did you have to give up to them?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          A faction in your neighborhood still owes you a favor. Who are they
          and how did you earn it?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Candor <Flame className="inline-block mb-3" />:
          </b>{" "}
          Get someone to view you favorably or reveal a secret.
        </li>
        <li>
          <b>
            Obfuscate <VenetianMask className="inline-block mb-1" />:
          </b>{" "}
          Hide your true intentions or confound someone&apos;s understanding.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Grease" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Greases are making deals and promises to acquire
        <b>materials</b> and <b>goodwill</b> for the crew. These deals and
        promises are important to accomplish during Missions, or else the Grease
        is going to get put in a tough spot.
      </TypographyP>
      <TypographyP>
        <b>Factions</b> can be community leaders, worker clans, or overseer
        packs. Each <b>faction</b> has its own agenda and will be working to
        accomplish it with or without the crew&apos;s help. Each <b>faction</b>{" "}
        also has a scorn track. This will increase if the Grease fails to
        accomplish the task they promised to do. If the scorn track reaches 3,
        the Grease can no longer make deals with that faction.
      </TypographyP>
      <TypographyP>
        The Grease can only make deals with <b>factions</b> in regions of the
        factory that the crew has access to.
      </TypographyP>
      <TypographyP>
        Before the mission, the Grease chooses the faction they make a deal
        with. They gain the <b>faction&apos;s</b> payment up front in exchange
        for promising to accomplish a task related to the <b>faction&apos;s</b>{" "}
        agenda. If the crew doesn&apos;t accomplish the task, the{" "}
        <b>faction&apos;s</b> scorn track increases by 1 and the Grease rolls on
        the Scorn table during the Churn.
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
        If the Grease fails to accomplish the task they promised to do, they
        roll 1d6 on the Scorn table during the Churn. The result is determined
        by the faction&apos;s scorn and the die roll.
      </TypographyP>
      <ScornTable />

      <TypographyH2 id="Hammer">
        <span className="text-indigo-500">Hammer</span>
        <span className="text-muted-foreground text-lg ml-8">
          A strong and fearless brawler
        </span>
      </TypographyH2>
      <TypographyP>
        The Steel Trap&apos;s overseers are brutal and cruel. They have no
        qualms rounding up stray workers and forcing them to fight in the pits
        in the factory&apos;s underbelly. Most don&apos;t last long. Hammers are
        one of the few who show potential to survive.
      </TypographyP>
      <TypographyP>
        <i>
          You were forced to fight a friend in the pits. Only one of you got to
          leave. What happened?
        </i>
      </TypographyP>
      <TypographyP>
        <i>Which one of the overseers is nervous around you?</i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Persevere <Flame className="inline-block mb-3" />:
          </b>{" "}
          Endure pain or hardship to accomplish a task.
        </li>
        <li>
          <b>
            Smash <Activity className="inline-block mb-4" />:
          </b>{" "}
          Hurt someone or damage something with brute force.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Hammer" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Hammers are surviving the pits. They can gamble for
        <b>food</b> or <b>materials</b> or they can fight. If they make a
        lasting impression on a champion, they could even be recruited as a
        fighting instructor for the crew.
      </TypographyP>
      <TypographyH4>Fight</TypographyH4>
      <TypographyP>
        Fighters in the pits are organized roughly into <b>rookies</b>,
        <b>veterans</b>, <b>champions</b>, and <b>beasts</b>. Hammers begin as a
        <b>rookie</b>. Whoever is tiered lower chooses the battlefield (player
        chooses on tie).
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
      <TypographyH4>Gamble</TypographyH4>
      <TypographyP>
        When Hammers gamble, they bet <b>1 food</b> or <b>1 material</b>, then
        make a <b>fighter tier roll</b>: <b>1-3:</b> lose the bet, <b>4-5:</b>{" "}
        break even,
        <b>6:</b> +2 food or materials.
      </TypographyP>
      <TypographyH4>Instructors</TypographyH4>
      <TypographyP>
        Hammers can spend the crew&apos;s <b>rep</b> to recruit a{" "}
        <b>champion</b> as a fighting instructor for themselves and the crew.
        Each <b>champion</b> has a unique fighting style, unlocking the option
        to pick the instructor&apos;s action or special abilities as advances.
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

      <TypographyH2 id="Nail">
        <span className="text-indigo-500">Nail</span>
        <span className="text-muted-foreground text-lg ml-8">
          An audacious and inspiring ringleader
        </span>
      </TypographyH2>
      <TypographyP>
        There is no hope in the Steel Trap. No one makes trouble and lives for
        long. But the PCs are different. They can succeed where others have
        failed. The Nail spreads the word of their success and inspires others
        to follow.
      </TypographyP>
      <TypographyP>
        <i>
          You&apos;ve learned the source of many folks&apos; hopelessness. What
          could change their minds?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          Someone you inspired to stand up to the overseers was caught. What
          happened to them?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Rally <Flame className="inline-block mb-3" />:
          </b>{" "}
          Inspire others to come together and act as one.
        </li>
        <li>
          <b>
            Challenge <Activity className="inline-block mb-4" />:
          </b>{" "}
          Confront someone in a way that demands a response.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Nail" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Nails are spreading the word of the crew&apos;s
        achievements to gain <b>rep</b>. Nails can spend <b>rep</b> to gain{" "}
        <b>gangs</b>
        and <b>cohorts</b> for the crew. Of course this all causes Heat if done
        recklessly.
      </TypographyP>
      <TypographyH4>Bragging Rights</TypographyH4>
      <TypographyP>
        Nails can choose to make claims of the crew&apos;s accomplishments to
        gain
        <b>rep</b>. First they add <b>raise the stakes</b>. Then they make roll
        and add rep according to the result: <b>1-3:</b> 0, <b>4-5:</b> 1,{" "}
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
        activities. If a gang or expert is killed or disbanded, the Nail
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

      <TypographyH2 id="Spark">
        <span className="text-indigo-500">Spark</span>
        <span className="text-muted-foreground text-lg ml-8">
          A quick-witted and charming protector
        </span>
      </TypographyH2>
      <TypographyP>
        Tension in the Steel Trap is palpable. Tension between overseer and
        worker. Tension between friends and family. Tension at the foot of
        fickle machines. Sparks dare to ignite that tension and deal with the
        consequences.
      </TypographyP>
      <TypographyP>
        <i>
          You incited an incident between workers and an overseer. It turned
          ugly. Who couldn&apos;t you protect?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          You convinced two factions with a grudge to settle the score. How well
          has it turned out?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Ignite <Flame className="inline-block mb-3" />:
          </b>{" "}
          Incite action from an individual or group on the brink of conflict.
        </li>
        <li>
          <b>
            Intercede <Activity className="inline-block mb-4" />:
          </b>{" "}
          Put yourself in harm&apos;s way to protect someone else.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Spark" />
      <TypographyP>Agendas</TypographyP>
      <TypographyP>
        During The Churn, Sparks are consorting wtih community leaders and crew
        contacts to help protect the crew from notice... or <i>rats</i>. They
        can spend <b>goodwill</b> to upgrade the crew&apos;s security and
        increase the quality of living conditions in the community.
      </TypographyP>
      <TypographyP>
        First, the Spark picks a project to pursue. They make a{" "}
        <Link href="/game/actions-and-rolls#project-rolls">
          <b className="underline text-red-500">project roll</b>
        </Link>{" "}
        and once the clock is filled, the project is ready. The Spark can
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

      <TypographyH2 id="Vapor">
        <span className="text-indigo-500">Vapor</span>
        <span className="text-muted-foreground text-lg ml-8">
          An elusive infiltrator and thief
        </span>
      </TypographyH2>
      <TypographyP>
        The overseers of the Steel Trap frequently deputize workers to spy and
        beat down their fellows. Vapors use their own tactics against them,
        posing as an informant to gather information and resources for the crew.
      </TypographyP>
      <TypographyP>
        <i>
          You were caught in the act of stealing from the overseers. Who did you
          throw under the bus to get out of trouble?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          One of the overseers knows what you&apos;re up to, but instead of
          reporting you, they&apos;re using you. What do they want?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Lift <Activity className="inline-block mb-4" />:
          </b>{" "}
          Take something from someone without them noticing.
        </li>
        <li>
          <b>
            Impersonate <VenetianMask className="inline-block mb-1" />:
          </b>{" "}
          Pass yourself off as someone who you aren&apos;t.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Vapor" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Vapors are infiltrating the overseers&apos; ranks and
        pursuing special operations. On completion, they grant the crew a
        powerufl effect or opportunity. First, the Vapor picks an operation to
        pursue, then makes a{" "}
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

      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/backgrounds">
          <Button variant="outline">
            <ChevronLeft className="inline-block" /> Backgrounds
          </Button>
        </Link>
        <Link href="/game/archetypes">
          <Button variant="outline">
            Archetypes <ChevronRight className="inline-block" />
          </Button>
        </Link>
      </div>
    </>
  );
}
