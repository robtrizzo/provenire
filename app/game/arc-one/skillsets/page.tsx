import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
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
import SkillsetAbilities from "@/components/skillsetAbilities";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          {
            name: "Character Creation",
            href: "/game/arc-one/character-creation",
          },
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
        Your Skillset grants you unique character questions, acions, and special
        abilities.
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

      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/arc-one/backgrounds">
          <Button variant="outline">
            <ChevronLeft className="inline-block" /> Backgrounds
          </Button>
        </Link>
        <Link href="/game/arc-one/archetypes">
          <Button variant="outline">
            Archetypes <ChevronRight className="inline-block" />
          </Button>
        </Link>
      </div>
    </>
  );
}
