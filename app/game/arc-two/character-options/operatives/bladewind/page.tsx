import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import OpPortrait from "../(components)/operative-portrait";
import ClockCost from "../(components)/clock-cost";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-end justify-between gap-4">
        <div>
          <TypographyH1 className="font-cyber">Bladewind</TypographyH1>
          <span className="text-sm text-muted-foreground font-cyber">
            Unclassified operative. Apprehend on sight.
          </span>
          <TypographyP>
            <b className="font-cyber text-red-500">Ignite</b> Incite action from
            an individual or group on the brink of conflict.
          </TypographyP>
          <TypographyP>
            <b className="font-cyber text-fuchsia-500">
              Directed Ferrokinetic Field &quot;Deathknell&quot;
            </b>
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Bladewind</span> is <i>not</i> on{" "}
            <span className="font-cyber">Root&apos;s</span> roster, but they
            seem to be cooperating with other{" "}
            <span className="font-cyber">Root</span> assets. Operatives are
            advised to treat <span className="font-cyber">Bladewind</span> with
            caution and use them for an antagonistic scene partner.
          </TypographyP>
        </div>
        <OpPortrait
          width={200}
          height={400}
          name="Bladewind"
          className="rounded-md mx-auto lg:mx-0"
        />
      </div>
      <TypographyP className="text-lg font-bold font-cyber">
        During missions you may be asked to...
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          Work with <span className="font-cyber">Root</span> operatives while at
          odds with <span className="font-cyber">Root</span>
        </li>
        <li>Play the recurring villain or antihero</li>
        <li>
          Punish the guilty that <span className="font-cyber">Root</span>{" "}
          wouldn&apos;t
        </li>
        <li>Deliver an intimidating speech to media</li>
        <li>
          Vanish from sight before <span className="font-cyber">Root</span>{" "}
          backup arrives.
        </li>
      </TypographyUnorderedList>
      <TypographyH2 className="font-cyber">
        Directed Ferrokinetic Field &quot;Deathknell&quot;
      </TypographyH2>
      <div className="flex gap-3 ml-2 mt-1 font-cyber text-muted-foreground text-sm flex-wrap">
        <span className="text-red-500">Metaltech, ???</span>
      </div>
      <TypographyP>
        There&apos;s a new player in town and their tech is as inscrutable as
        their motives. Initial prediction is that this is a public debut of a
        new type of sleeve and the manufacturer is looking to get acquired by
        one of the larger corps. The intel division has code named them{" "}
        <span className="font-cyber">The Daughters</span> and advised to regard
        them as hostile until we&apos;ve cracked their agenda.
      </TypographyP>
      <TypographyP>
        Limited footage analysis of their tech has come back inconclusive. Their
        sleeves are capable of telekinetically controlling shards of metal with
        extreme precision. What&apos;s stumping R&D is that there&apos;s no
        detectable electromagnetic field. Plus, some of the metals being moved
        around aren&apos;t magnetic - hence{" "}
        <span className="font-cyber">Harys</span> coining the phrase{" "}
        <span className="font-cyber">&quot;Ferrokinetic&quot;</span>. Whatever
        the science behind it, they&apos;re capable of deadly force on par with
        one of our own operatives.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Bladeclad</TypographyH3>
        <ClockCost num={0} />
      </div>
      <TypographyP>
        <span className="font-cyber">&quot;Deathknell&quot;</span> isn&apos;t
        recognizable tech to any of{" "}
        <span className="font-cyber">Feasting&apos;s</span> corps because it
        isn&apos;t technology in the way they understand it. It&apos;s employs a
        fusion of traditional neural interface connections alongside an ancient
        power: <b>Donum Ferro</b>. A series of adamantine-tipped spikes are
        inserted into the wearer&apos;s body. These spikes pull blood and
        circulate it throughout the metal plates that clad their body. What this
        ends up looking like is a suit of armor made up of metal blades that are
        slowly bleeding through the surface.
      </TypographyP>
      <TypographyBlockquote>
        <span className="font-cyber">&quot;Deathknell&quot;</span> pulls a
        substantial amount of blood fromt he wearer. For as long as you wear{" "}
        <span className="font-cyber">&quot;Deathknell&quot;</span>, mark a{" "}
        <b>level 2 harm: drained</b>.
      </TypographyBlockquote>
      <TypographyP>
        <span className="font-cyber">&quot;Deathknell&quot;</span> is both a
        suit of armor and a weapon. The entire apparatus is made up of hundreds
        of <b className="text-rose-500">Blades</b>; represented by a{" "}
        <b>Blade Pool</b>. <b className="font-cyber">Bladewind</b> starts with{" "}
        <b className="text-rose-500">3 max Blades</b>. They may spend{" "}
        <b className="text-rose-500">1 Blade</b> to reinforce themselves and
        reduce an incoming <b>harm</b> by <b>2 steps</b>{" "}
        <span className="text-muted-foreground">OR</span> to use that{" "}
        <b className="text-rose-500">Blade</b> as a close-to-medium ranged
        weapon.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Blade Art</TypographyH3>
        <ClockCost num={2} />
      </div>
      <TypographyP>
        With practice or talent, <span className="font-cyber">Bladewind</span>{" "}
        can begin to master the art form of telekinetic blades. When wielding a{" "}
        <b className="text-rose-500">Blade</b> in combat, it can be reshaped and
        redirected dextrously. The more <b className="text-rose-500">Blades</b>{" "}
        spent, the deadlier and more flexible the weaponry becomes.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Transfusion</TypographyH3>
        <ClockCost num={3} />
      </div>
      <TypographyP>
        Sometimes when the noise of the city dies down,{" "}
        <span className="font-cyber">Bladewind</span> can hear an unsettling
        clicking echoing from whithin the recesses of the suit.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Deathknell</span> already requires a
        sickening amount of the wearer&apos;s blood to function. But this is
        only the minimum. <span className="font-cyber">Bladewind</span> can
        allow it to fully slake its thirst, marking a{" "}
        <b>level 1 harm: drained</b>. This increases your{" "}
        <b className="text-rose-500">Blade Pool</b> to{" "}
        <b className="text-rose-500">5 max Blades</b>.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Deathknell</span> is always happy to drink
        more though. If <span className="font-cyber">Bladewind</span> indulges
        it with a <b>level 1 harm: drained</b>, they replenish{" "}
        <b className="text-rose-500">2 Blades</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Bloody Aegis</TypographyH3>
        <ClockCost num={3} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Transfusion
      </span>
      <TypographyP>
        The blades can attack at range; if used cleverly they can defend as
        well, though <span className="font-cyber">Deathknell&apos;s</span> price
        must be paid in blood. <span className="font-cyber">Bladewind</span> can
        spend <b className="text-rose-500">2 Blades</b> to defend themselves or
        someone they can see, wrapping them in the sheltering bleeding metal.
        This negates an incoming <b>harm</b> entirely, though the blades pierce
        into the beneficiary and extract a <b>level 1 harm: drained</b>.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="font-cyber mt-0">Blade Wind</TypographyH3>
        <ClockCost num={5} />
      </div>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Blade Art
      </span>
      <TypographyP>
        The namesake <b>&quot;Bladewind&quot;</b> is an ancient Gredoran weapon
        infamous for mass casualties and tenuous control. The thought behind the
        suit is to fully incorporate a psyche into a far smaller{" "}
        <b>Bladewind</b> than the weapons of yore. That way, it shouldn&apos;t
        get out of hand.
      </TypographyP>
      <TypographyP>
        It was a nice thought. Despite being connected via neural interface and
        a hundredth ths size of a traditional version, this weapon/machine/
        <i>thing</i> remains inherently bloodthrirsty. With every breath it begs
        to be unleashed. Spend <b className="text-rose-500">3 Blades</b> to do
        just that.
      </TypographyP>
      <TypographyP>
        Once unleashed, the weapon chitters with delight; its blades fracture
        apart into thousands of tiny razorblades and seek targets to blend into
        a bloody soup. If the target had blood, the <b>Bladewind</b> drinks and
        replenishes <b className="text-rose-500">2 Blades</b>. Then it will
        gleefully seek its next victim, friend or foe.
      </TypographyP>
      <TypographyP>
        While unleashed, the weapon will forcibly draw blood from the
        suit&apos;s wearer to perpetuate itself if needbe.{" "}
        <span className="font-cyber">Bladewind</span> must <b>push themself</b>{" "}
        if they want the weapon to cease. When they do, it screeches with
        displeasure but does as it&apos;s told.
      </TypographyP>
    </>
  );
}
