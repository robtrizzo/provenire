import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { GitGraph, Repeat } from "lucide-react";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">Cyberware</TypographyH1>
      <TypographyBlockquote>
        &quot;I was born human. But this was an accident of fate - a condition
        merely of time and place. I believe it&apos;s something we have the
        power to change.&quot;
      </TypographyBlockquote>
      <TypographyP>
        Cyberware ranges from small modifications - to replacements for body
        parts - to full-sleeve replacement - to something that makes you more
        than human. Every manufacturer has their own focus and core tech they
        use to create their products. Every neighborhood has a booming
        aftermarket cybermod market. This all goes to say that there is
        cyberware for anything; and it comes in all shapes and sizes.
      </TypographyP>
      <TypographyP>
        This is a small fraction of the options that exist, but a list refined
        to what a <span className="font-cyber">Root</span> operative might find
        helpful.
      </TypographyP>
      <TypographyBlockquote>
        &quot;It&apos;s never a waste of Pelts if it makes you stronger.&quot;
      </TypographyBlockquote>
      <TypographyP>
        All cyberware costs <span className="font-cyber">¤P</span>, but some
        come with additional subscription costs, marked with{" "}
        <Repeat className="inline text-emerald-500" />. In addition to the cost
        of purchasing cyberware, you may have to pay a ripperdoc to install it.
        A risky prospect depending on your doc&apos;s skill and the complexity
        of the part. Regardless of a ripperdoc&apos;s skill, there are some
        parts which so completely overhaul how your body or mind work that
        it&apos;s an outright risk to your psyche. These are marked with{" "}
        <GitGraph className="inline-block text-pink-500" />.
      </TypographyP>
      <TypographyH2 className="font-cyber">Ubiquitous Cyberware</TypographyH2>
      <TypographyP>
        This is cyberware which is the default. Children get these implants in
        their infancy unless there&apos;s a special exception.
      </TypographyP>
      <CyberwareHeader
        name="PsycX Neural Imaging Chip ( NIC )"
        dangerous={false}
        manufacturer="Silcana Discoveries"
        tech="Neurotech, Nettech"
        price={0}
        subscription="X"
      />
      <TypographyP>
        Perhaps the most impactful of the cyber age. The{" "}
        <span className="font-cyber">PsycX NIC</span> provides the ability to
        back up your psyche for later restoration, transfer into a new sleeve,
        or enter netspace. It&apos;s illegal to deny a child the right to
        immortality, so infants receive the implant at four months old - the
        earliest safe operating age.
      </TypographyP>
      <TypographyP>
        The procuedure is free, though backup costs can vary depending on your
        subscription plan:
      </TypographyP>
      <TypographyBlockquote className="text-xs">
        <span className="font-cyber">Root</span> provides its operatives the{" "}
        <span className="font-cyber">PsycX Flex Plan</span> and a free backup
        before every mission.
      </TypographyBlockquote>
      <div className="flex flex-col gap-1">
        <span>
          <SubscriptionItemHeader name="Budget" price={0} /> bare-bones implant
          allowing sleeve-transfer and netspace access. No backups.
        </span>
        <span>
          <SubscriptionItemHeader name="Flex" price={0} /> base functionality
          and manual backups costing{" "}
          <span className="font-cyber text-emerald-500">1 ¤P</span> each.
        </span>
        <span>
          <SubscriptionItemHeader name="Basic" price={1} /> base functionality
          and automatic yearly backups.
        </span>
        <span>
          <SubscriptionItemHeader name="Noble" price={2} /> seemless sleeve
          transition, higher netspace fidelity, and automatic daily backups.
        </span>
        <span>
          <SubscriptionItemHeader name="Royal" price={3} /> seemless sleeve
          transition, higher netspace fidelity, real-time redundant backups.
        </span>
      </div>
      <CyberwareHeader
        name="Social Situational"
        dangerous={false}
        manufacturer="Overcorp"
        tech="Gentech, Electrotech"
        price={1}
      />
      <TypographyBlockquote className="font-cyber text-xs">
        Social Situational is compatible with all major brands of integrated
        HUDs and wireless headware.
      </TypographyBlockquote>
      <TypographyP>
        <span className="font-cyber">Social Situational</span> enables customers
        to evaluate their precise social standing in any gathering - an
        incredibly valuable asset in the cyber age where appearances can be
        deceiving.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Overcorp</span> has never cared to expand
        the product, preferring to keep it cheap and accessible to its
        customers. This has created a cottage industry of companies attempting
        to reverse-engineer the geneology algorithm so that they can extend the
        functionality, for a premium of course.
      </TypographyP>

      <CyberwareHeader
        name="FavorBank"
        dangerous={false}
        manufacturer="Overcorp"
        tech="Electrotech, Nettech"
        price={0}
      />
      <TypographyP>
        En lieu of the frantic glory-seeking of ages past, <b>Kingwulf</b>{" "}
        allows for intimacy and relationships through the abstraction of{" "}
        <b>Favors</b> (<span className="font-cyber">¤F</span>). These are
        rewarded for good social standing and spent on family, social
        gatherings, love, and lust.
      </TypographyP>
      <TypographyP>
        In order to access or spend <span className="font-cyber">¤F</span> in
        the first place, you need the{" "}
        <span className="font-cyber">FavorBank</span> implant. For the
        bio-purists out there, a few kiosks remain in{" "}
        <span className="font-cyber">Feasting</span> where you can check your
        balance and print physical permissions.
      </TypographyP>
      <TypographyP>
        Many customers also elect to store their{" "}
        <span className="font-cyber">¤P</span> in{" "}
        <span className="font-cyber">FavorBank</span>. There&apos;s a fee of{" "}
        <span className="text-emerald-500 font-cyber text-sm">
          <Repeat className="inline text-emerald-500" /> 1 ¤P
        </span>
        , but your <span className="font-cyber">¤P</span> are safe, insured, and
        can accrue interest (
        <span className="font-cyber text-emerald-500">
          <Repeat className="inline" /> +lifestyle ¤P
        </span>
        ).
      </TypographyP>

      <TypographyH2 className="font-cyber">Commercial Cyberware</TypographyH2>
      <TypographyP>
        This is cyberware commonly found in stores, ripperdoc shops, and
        aftermarket retailers.
      </TypographyP>
      <CyberwareHeader
        name="Your Blood, Your Story"
        dangerous={false}
        manufacturer="Genlab"
        tech="Gentech"
        price={3}
      />
      <TypographyP>
        <span className="font-cyber">Genlab</span> takes a genetic sample and
        within 3-5 business days they send you a precise breakdown of your
        bloodline. This includes percentages of beast bloodlines, conquered
        bloodlines, and noble linneages.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">Variant: Black Market Genhack</b>:{" "}
        <span className="text-emerald-500 font-cyber">
          3 ¤P, <Repeat className="inline" /> 3 ¤P
        </span>{" "}
        <GitGraph className="ml-2 inline-block text-pink-500" />
      </TypographyP>
      <TypographyP>
        Black market tech which rewires your genetic markers to fool{" "}
        <span className="font-cyber">Genlab&apos;s</span> tech into thinking
        you&apos;re of any bloodline you please. For the enterprising con-artist
        or canny thief who need an inroad to particular social circles.
      </TypographyP>
      <CyberwareHeader
        name="Rat-track"
        dangerous={false}
        manufacturer="Beasttech"
        tech="Gentech, Nettech"
        price={4}
      />
      <TypographyP>
        This genmod is plugged into{" "}
        <span className="font-cyber">Overcorp&apos;s</span> registry of{" "}
        <i>Favorless</i> in <span className="font-cyber">Feasting</span>. It
        allows the user to smell anyone available to hunt, even from a few
        blocks away. An excellent tool for the up and coming hunters looking to
        get some extra favor.
      </TypographyP>
      <TypographyP>
        This unlocks a <b>Mission Prep Action: Hunt Favorless</b>
        <br />
        <b>1-3</b>: you run into trouble while on the hunt. take a{" "}
        <b>level one harm: bruised</b>
        <br />
        <b>4-5</b>: you end up joining up with a few other hunters and get
        scraps. <span className="font-cyber">+1 ¤P</span>
        <br />
        <b>6</b>: you get a kill all to yourself.{" "}
        <span className="font-cyber">+1 ¤F</span>
      </TypographyP>
      <CyberwareHeader
        name={`Integra Optics "Crow's Eye"`}
        dangerous={false}
        manufacturer="Integra"
        tech="Gentech, Neurotech, Tartech"
        price={6}
      />
      <TypographyP>
        An integrated optics system in the form of a cybernetic eye, commonly
        used by scientists and engineers handling near-microscopic materials.
        Allows the customer to see in a variety of light spectrums, zoom in and
        out, and receive real time feedback from other integrated cyberware via
        a HUD.
      </TypographyP>
      <CyberwareHeader
        name="Lara Gameforce VTA Spike"
        dangerous={true}
        manufacturer="3MI"
        tech="Nettech, Neurotech"
        price={4}
        subscription="2"
      />
      <TypographyP>
        Enables perfect immersion into any media with 3D and somatic rendering,
        which is pretty standard these days. All six senses are fully
        functional, plus any more senses which the media creates.
      </TypographyP>
      <TypographyP>
        While in this realm of media, a{" "}
        <span className="font-cyber">Lara Gameforce</span> customer has a
        meaningful advantage against even skilled netrunners.
      </TypographyP>
      <TypographyP>
        When you <b>Take a Breather</b>, instead of paying any{" "}
        <span className="font-cyber">¤F</span>, you may always choose to
        immersion-game and recover <b>3 stress</b>.
      </TypographyP>

      <TypographyH2 className="font-cyber">Special Cyberware</TypographyH2>
      <TypographyP>
        This is a cyberware you wouldn&apos;t just find on the street. This is
        some serious shit, or heavily modified by aftermarket ripperdocs.
      </TypographyP>
      {/* <TypographyP>
        This is a catalog of cyberware curated by{" "}
        <b className="font-cyber">Dunwell</b>,{" "}
        <span className="font-cyber">Root&apos;s head of acquisitions</span>. He
        does his best to select a wide range of chrome which operatives may find
        useful.
      </TypographyP> */}

      <CyberwareHeader
        name={`HSG-3 "His Majesty"`}
        dangerous={false}
        manufacturer="Foundation"
        tech="Metaltech, Tartech"
        price={5}
      />
      <TypographyP>
        An enormous shotgun issued to the Royal Rathi Army{" "}
        <i>Titanfall Divisions</i>, teams tasked with taking down physically
        large enemy battlefield assets.
      </TypographyP>
      <TypographyP>
        The weapon integrates directly into the arm. When deployed, it extends
        an optional bracing system to prevent the blast from knocking the
        wielder off their own feet. It sports two firing modes:{" "}
        <i>fleshrender</i>, for hampering healing-factors; and{" "}
        <i>obliterator</i>, for focused trauma.
      </TypographyP>
      <CyberwareHeader
        name={`Integra Overwatch Drone "Osprey"`}
        dangerous={true}
        manufacturer="Integra"
        tech="Electrotech, Metaltech, Tartech"
        price={10}
      />
      <TypographyP>
        Military-grade reconnaissance drone issued to elite Royal Rathi rangers
        deployed behind enemy lines. It sports on-deck countersuveilance
        systems, broad-spectrum threat detection, and an integrated mag-rail
        weapon system.
      </TypographyP>
      <TypographyP>
        Operators pilot it via an implant in their spinal column which allows
        them to see through it and direct it like an extension of their own
        bodies.
      </TypographyP>

      <CyberwareHeader
        name={`3MI Holosomatic Projector`}
        dangerous={false}
        manufacturer="3MI"
        tech="Holotech, Neurotech"
        price={10}
      />
      <TypographyP>
        Initially designed for the entertainment and porn industries, then
        adopted by the scientific community. Enables projecting anything
        conjured by the customer&apos;s mind into tangible holograms. It can
        work in any environment, but it&apos;s most effective in specially
        designed holorooms.
      </TypographyP>

      <CyberwareHeader
        name={`ETD Adrenaspike`}
        dangerous={false}
        manufacturer="Genlab"
        tech="Gentech"
        price={6}
      />
      <TypographyP>
        Manufactured specially for the dynastic families in{" "}
        <span className="font-cyber">Feasting</span>, the{" "}
        <span className="font-cyber">Adrenaspike</span> multiplies the effects
        of an adrenaline rush, allowing the body to allocate all of its energy
        into a few seconds of conflict. Pivotal in the ambush-tactics common to
        dynastic turf wars.
      </TypographyP>
      <TypographyP>
        <b className="font-cyber">
          Variant: Shadow Warrior Rapid Recovery Mods
        </b>
        : <span className="text-emerald-500 font-cyber">10 ¤P</span>{" "}
        <GitGraph className="ml-2 inline-block text-pink-500" />
      </TypographyP>
      <TypographyP>
        The one major limitation of the{" "}
        <span className="font-cyber">Adrenaspike</span> is that the customer is
        left exhausted after a few seconds. This premium modification completely
        overhauls the customer&apos;s hypothalmus and metabolic system to enable
        recovery within minutes.
      </TypographyP>
      <div className="mb-8" />
    </>
  );
}

function CyberwareHeader({
  name,
  dangerous,
  manufacturer,
  tech,
  price,
  subscription,
}: {
  name: string;
  dangerous: boolean;
  manufacturer: string;
  tech: string;
  price: number;
  subscription?: string;
}) {
  return (
    <>
      <TypographyH3 className="font-cyber" id={name}>
        {name}
        {dangerous && <GitGraph className="ml-6 inline-block text-pink-500" />}
      </TypographyH3>
      <div className="flex gap-3 font-cyber text-muted-foreground text-sm">
        <span className="text-amber-500">{manufacturer}</span>
        <span>|</span>
        <span className="text-red-500">{tech}</span>
        <span>|</span>
        <span className="text-emerald-500">
          {price} ¤P
          {subscription && (
            <span>
              , <Repeat className="inline" /> {subscription} ¤P
            </span>
          )}
        </span>
      </div>
    </>
  );
}

function SubscriptionItemHeader({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  return (
    <span className="font-cyber">
      <b>{name}</b> [{" "}
      <span className="text-emerald-500">
        <Repeat className="inline text-emerald-500" /> {price} ¤P
      </span>{" "}
      ]:
    </span>
  );
}
