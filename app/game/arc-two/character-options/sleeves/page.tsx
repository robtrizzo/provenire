import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Repeat } from "lucide-react";
import SleeveChart from "./(components)/sleeveChart";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">Sleeves</TypographyH1>
      <TypographyP>
        Your body is not who you are. You can shed it like a snake sheds its
        skin. You can leave it behind you for something grander, new. Sleeves
        are synthetic bodies which can be host to your psyche. Most of the big
        corps have their own brand of sleeves, or multiples. They range from
        robotic, cybernetic, bestial, or any shape you can imagine.
      </TypographyP>

      <TypographyP>
        Of course, the base models with limited function and customization are
        the cheapest. So, most working folk make do with the bodies they were
        born with. If someone is really desperate, they can buy a used bio-body
        from a prison rack or a bio-lease exchange.
      </TypographyP>
      <TypographyP>
        Regardless of the nature of the sleeve, the body mod business is
        immense. From simple aesthetic expressions to productivity-boosting limb
        replacements to full-on warframing, there is no shortage of ways to
        change yourself to suit whatever you need.
      </TypographyP>
      <TypographyH2 className="font-cyber">Types of Sleeves</TypographyH2>
      <TypographyP>
        Where any manner of sleeve can take any appearance, there are some
        fundamental differences between how sleeves can be constructed.
      </TypographyP>
      <TypographyH3 className="font-cyber">Biosleeves</TypographyH3>
      <TypographyP>
        Any sleeve grown or constructed from genetic or organic materials. Worth
        noting that <b>birthsleeves</b> are included in this category.
        Biosleeves are the most common type because of their self-healing,
        fuel-efficient properties; though they are expensive to grow, get sick,
        and can decompose if not constantly upkept.
      </TypographyP>
      <TypographyH3 className="font-cyber">Mechsleeves</TypographyH3>
      <TypographyP>
        Thought impossible for quite some time; proved wrong by cybermod
        enthusiasts who replaced every component of their bodies. Mechsleeves
        are any sleeve constructed of inorganic materials which could be piloted
        by clever programming, but which is also capable of housing a psyche.
        This often means a very durable sleeve, but one which requires extra
        hardware to properly mimic sensory data.
      </TypographyP>
      <TypographyH3 className="font-cyber">Synthsleeves</TypographyH3>
      <TypographyP>
        Falling somewhere between biosleeves and mechsleeves, synthsleeves are
        constructed out of materials specialized to house a psyche and perfectly
        mimic the feel of a biosleeve without needing to succumb to its
        shortcomings. Synthsleeves are the easiest to adapt to whatever
        aesthetic choices suit the psyche, though they are also the most fragile
        of the sleeve types.
      </TypographyP>
      <TypographyH2 className="font-cyber">Ubiquitous Sleeves</TypographyH2>
      <TypographyP>
        These are sleeves you&apos;ll see multiple times a day every time you go
        out in public.
      </TypographyP>
      <SleeveHeader name="Birthsleeve" codex={2} price={0} />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            Less common than you&apos;d think these days. Plenty of working folk
            lease their birthsleeve out in order to make rent. Plenty of those
            leased birthsleeves don&apos;t come back in one piece.
          </TypographyP>
          <TypographyP>
            Definitionally the baseline for sleeves in many regards, though far
            better rated in psyche compatibility than most of the market
            competitors.
          </TypographyP>
        </div>
        <SleeveChart dur={2} bea={2} mod={2} sen={2} int={2} com={4} />
      </div>
      <SleeveHeader
        name="Omnifab"
        manufacturer="Foundation"
        codex={1}
        tech="Metaltech, Nettech"
        price={6}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            A cumbersome mechsleeve better suited to standing on the factory
            floor than being someone&apos;s skin. Designed to be a modular
            component in an assembly line; comes complete with a wireless
            netconnect for remote piloting.
          </TypographyP>
          <TypographyP>
            Despite the low cost, <span className="font-cyber">Foundation</span>{" "}
            managed to pack an enormous manufacturing toolkit into a compact
            package. The tradeoff of course is any semblance of a normal body
            for the mechsleeve worker, but that&apos;s what they&apos;re being
            paid for.
          </TypographyP>
        </div>
        <SleeveChart dur={3} bea={0} mod={3} sen={1} int={2} com={1} />
      </div>
      <SleeveHeader
        name="Model 2 Mod Pro"
        manufacturer="Integra"
        codex={1}
        tech="Metaltech"
        price={2}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            An old mechsleeve model. Does anyone even sell these anymore? Oof,
            choom.
          </TypographyP>
          <TypographyP>
            <span className="font-cyber">Integra</span> marketed these as the
            ultimate cybermodder&apos;s model. Pay only for what you want. In
            reality, by the time you&apos;ve had ten procedures at the ripperdoc
            to get what you&apos;re missing, you&apos;ve spent double what it
            would have been.
          </TypographyP>
          <TypographyP>
            Well, look on the bright side. You get to choose your face. And
            voice. And...
          </TypographyP>
        </div>
        <SleeveChart dur={1} bea={0} mod={5} sen={1} int={1} com={1} />
      </div>
      <SleeveHeader
        name="Bright Smile"
        manufacturer="3MI"
        codex={1}
        tech="Metaltech"
        price={4}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            A cheap, mass produced synthsleeve for movie extras. It&apos;s
            almost unheard of to find an unattractive{" "}
            <span className="font-cyber">Bright Smile</span>, though the whole
            sleeve is <i>form over function</i> if you catch my drift.
          </TypographyP>
          <TypographyP>
            Fairly sparse on features, but it&apos;s a far cry better than
            having no face at all.
          </TypographyP>
          <TypographyBlockquote className="font-cyber text-xs">
            Root has a closet full of <b>Bright Smiles</b> available to its
            operatives if they ever need a spare sleeve.
          </TypographyBlockquote>
        </div>
        <SleeveChart dur={1} bea={1} mod={2} sen={1} int={2} com={2} />
      </div>
      <TypographyH2 className="font-cyber">Commercial Sleeves</TypographyH2>
      <TypographyP>
        These are sleeves that are on the market but not ones you see around
        every day.
      </TypographyP>
      <SleeveHeader
        name="Bloodhound"
        manufacturer="Beasttech"
        tech="Gentech, Metaltech"
        codex={2}
        price={8}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            A biosleeve designed in the early days of{" "}
            <span className="font-cyber">Beasttech</span> when its sole focus
            was enhancing the hunt. Since then, the company has pivoted to
            <i>&quot;peacockery and fucking foolishness&quot;</i> according to
            its founder and ex-CEO.
          </TypographyP>
          <TypographyP>
            Completely beastshape compatible, but the primary feature of the{" "}
            <span className="font-cyber">Bloodhound</span> is its keen sense of
            smell. The <span className="font-cyber">Bloodhound</span> never
            forgets a scent for as long as they live. They can smell fear,
            bloodthrist, and arousal. And with a small sample of blood they can
            tell far more than just that.
          </TypographyP>
        </div>
        <SleeveChart dur={2} bea={3} mod={2} sen={4} int={2} com={2} />
      </div>
      <SleeveHeader
        name="Model 8-L"
        manufacturer="Vantro Enterprises"
        tech="Gentech, Neurotech"
        codex={3}
        price={8}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            A lightweight synthsleeve mass produced for corporate scientists. A
            high end neurosuite replaces what would have been brain matter.
            It&apos;s optimized for rapid logic and sifting through large
            volumes of sensory data. The tradeoff is a limited capacity for
            emotional reasoning or physical coordination, with the exception of
            the hands - those are calibrated to be very dextrous.
          </TypographyP>
          <TypographyP>
            Because of reduced emotional intelligence and frail sleeves,{" "}
            <span className="font-cyber">Vantro Enterprises</span> recommends
            emotion staples, else the laboratories may devolve into all-too
            lethal fist fights.
          </TypographyP>
        </div>
        <SleeveChart dur={1} bea={0} mod={3} sen={3} int={3} com={1} />
      </div>
      <SleeveHeader
        name="Pride Hide"
        manufacturer="Beastech"
        tech="Gentech, Metaltech"
        codex={1}
        price={12}
        subscription="1"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            A heavy duty biosleeve designed to ooze <i>power</i>. It&apos;s a
            physically larger sleeve than most, suited for combat, but poorly
            suited to navigating tight spaces.
          </TypographyP>
          <TypographyP>
            Sports all of the bestial amenities{" "}
            <span className="font-cyber">Beasttech</span> could think to include
            for its dynastic customers. Fully beastshape compatible, hair length
            and color can change on command, voice modulation to project might,
            reinforced titanium alloy bones, and a digestive system designed for
            a carnivorous diet. Most customers also pay the premium subscription
            for weekly updates with the latest fashion trends.
          </TypographyP>
        </div>
        <SleeveChart dur={4} bea={4} mod={1} sen={2} int={1} com={1} />
      </div>
      <SleeveHeader
        name="Machina"
        manufacturer="Foundation"
        tech="Metaltech"
        codex={1}
        price={8}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            Despite its looks, the <span className="font-cyber">Machina</span>{" "}
            is a biosleeve. <span className="font-cyber">Foundation</span>{" "}
            replaces the skeletal and nervous systems with state of the art
            metaltech to create a solid foundation for future modding.
          </TypographyP>
          <TypographyP>
            The reason some cybermodders prefer this platform over something
            like the <span className="font-cyber">Integra Model 9 Mod Max</span>{" "}
            is so that they maintain compatibility with both biomods as well as
            robotics chrome. Requires specialty ripperdocs, but some find the
            tradeoff worth it.
          </TypographyP>
        </div>
        <SleeveChart dur={3} bea={1} mod={4} sen={1} int={1} com={2} />
      </div>
      <SleeveHeader
        name="Feelmax Skyn"
        manufacturer="Strata"
        tech="Gentech, Neurotech"
        codex={1}
        price={20}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            An opulent synthsleeve optimized for carnal pleasures, all day,
            every day. Sports a specially crafted neurocenter which only has a
            displeasure center large enough for the wearer to comprehend the
            concept of displeasure, never to experience it.
          </TypographyP>
          <TypographyP>
            Perfectly styled hair, moisturized skin, lubricated nethers, and a
            steady stream of dopamine to tide the wearer over between
            activities. Also included are premium sensory organs able to see
            brighter colors, hear deeper sounds, and taste the most subltle
            nuances of a dish.
          </TypographyP>
        </div>
        <SleeveChart dur={1} bea={1} mod={2} sen={3} int={2} com={5} />
      </div>
      <TypographyH2 className="font-cyber">Special Sleeves</TypographyH2>
      <TypographyP>
        These are sleeves that are hardly recognizable as man or beast. Not just
        anybody can manage to live that way.
      </TypographyP>
      <SleeveHeader
        name="Mastermind"
        manufacturer="Sentry"
        tech="Gentech, Neurotech, Nettech"
        codex={3}
        price={10}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <TypographyP>
            Barely anything you could call a sleeve. In fact, it&apos;s almost
            the <i>absence</i> of one which defines the{" "}
            <span className="font-cyber">Mastermind</span>. Life support systems
            sustain a brain and central nervous system suspended in a vat of
            saline. And not just any brain - a genetically engineered
            masterpiece, capable of running circles around any hackers still in
            meatspace.
          </TypographyP>
          <TypographyP>
            With no sensory or ambulatory system of its own, the{" "}
            <span className="font-cyber">Mastermind</span> relies on access to
            external devices to observe and interact with the physical world. If
            needbe, the psyche can remote-control another sleeve with moderate
            disruption to its other subroutines.
          </TypographyP>
        </div>
        <SleeveChart dur={0} bea={0} mod={2} sen={1} int={5} com={1} />
      </div>
    </>
  );
}

function SleeveHeader({
  name,
  id,
  manufacturer,
  tech,
  codex,
  price,
  subscription,
}: {
  name: string;
  id?: string;
  manufacturer?: string;
  tech?: string;
  codex?: number;
  price: number | string;
  subscription?: string;
}) {
  return (
    <>
      <TypographyH3 className="font-cyber" id={id || name}>
        {name}
      </TypographyH3>
      <div className="flex gap-3 font-cyber text-muted-foreground text-sm flex-wrap">
        {manufacturer && (
          <>
            <span className="text-amber-500">{manufacturer}</span>
            <span>|</span>
          </>
        )}
        {tech && (
          <>
            <span className="text-red-500">{tech}</span>
            <span>|</span>
          </>
        )}
        {codex && (
          <>
            <span className="text-sky-500">Codex slots: {codex}</span>
            <span>|</span>
          </>
        )}
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
