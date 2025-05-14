import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { checkAuth } from "@/lib/auth";

export default async function Page() {
  return (
    <>
      <TypographyH1>Donums</TypographyH1>
      <TypographyP>
        <b>Donum</b> is the <strong>Arborian</strong> word for
        &ldquo;gift&rdquo;, representing how the <strong>Arborians</strong>{" "}
        believe these powers to be gifts from their god,{" "}
        <strong>Jolana Arbor</strong>. Also according to the{" "}
        <strong>Arborians</strong>, <strong>Jolana&apos;s</strong> daughter{" "}
        <strong>Anya</strong> named each of the <b>Donums</b> as they were
        discovered.
      </TypographyP>
      <DonumProvenire />
      <DonumMetamorphosis />
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quia
        obcaecati itaque eum aperiam quisquam molestias sequi temporibus atque,
        dolores odit, magni, impedit distinctio dolor? Quos, totam minima.
        Nostrum!
      </p>
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        doloremque, nihil modi iure consequuntur officiis error rem debitis
        natus minima aspernatur maiores nulla ab quod. Asperiores tenetur
        suscipit odit dolorem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident at iure obcaecati, voluptatem nihil velit
        veniam ratione rem placeat officiis a, dignissimos ex vero ut sed esse
        incidunt, voluptatibus est!
      </p>
      <TypographyH2>The Vault</TypographyH2>
      <TypographyP className="mb-2">
        A lucky few have dreamt a man who calls himself <i>The Owl</i>. He
        guides them to a place deep in the jungle dream - an ancient zigurrat
        vault. <i>Owl</i> and the accompanying silent order offer a vial from a
        table of many. No two alike. If you choose wisely, you may survive the
        vial&apos;s affect on your body.
      </TypographyP>
      <DonumList />
      <TypographyH2>Inner Sanctum</TypographyH2>
      <TypographyP>
        Even if they would be great boons, some <b>donums</b> are kept in an
        even deeper, darker chamber of the zigurrat. These <b>donums</b> are
        considered too precious, too powerful, or too dangerous to give to
        strangers. Even ones who curse <b>Kingwulf</b> and his bloodline.
      </TypographyP>
      <InnerSanctum />
      <DonumVitae />
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/sources-of-power/transformations">
          <Button variant="outline">
            <ChevronLeft /> Transformations
          </Button>
        </Link>
        <Link href="/game/sources-of-power/curses">
          <Button variant="outline">
            Curses <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}

async function DonumProvenire() {
  const { error } = await checkAuth("player", ["view-donums"]);
  if (error) return null;
  return (
    <>
      <TypographyP>
        <b>Donums</b> begin with death. The water permeates every layer of your
        body, scraping you and hollowing you out so that something new can grow.
        Some <b>donums</b> are deadlier than others; some people aren&apos;t as
        affected. As best anyone can tell, rare individuals have an innate
        affinity to a particular <b>donum</b>. This one will be less lethal to
        them.
      </TypographyP>
      <TypographyBlockquote>
        When you drink a <b>donum flask</b>, determine if your character has an
        affinity with your chosen <b>donum</b>. If <i>yes</i>, mark a{" "}
        <b>
          level 4 harm: <i>permeated</i>
        </b>
        ; if <i>no</i>, mark a{" "}
        <b>
          level 5 harm: <i>hollowed</i>
        </b>
        .
      </TypographyBlockquote>
      <TypographyP>
        <b>Donums</b> have an <b>Emergence clock</b>. Each time your character
        marks a condition or level 3 harm, they mark the <b>Emergence clock</b>.
        Once full, your character unlocks their <i>Donum Provenire</i>: a moment
        of your choosing where the power fully manifests and provides your
        character with dramatic ability in that scene.
      </TypographyP>
    </>
  );
}

async function DonumMetamorphosis() {
  const { error } = await checkAuth("player", ["view-donums"]);
  if (error) return null;
  return (
    <>
      <TypographyP>
        Nascent <b>Donum</b> wielders can control aspects of their power, though
        it is still faltering. Sometimes even unstable.
      </TypographyP>
      <TypographyBlockquote>
        Your character may advance their Donum&apos;s Nascence skill tree by
        spending <b>3 xp clocks</b> during the <b>Train</b> activity. .
      </TypographyBlockquote>
      <TypographyP>
        Anytime you (or allies) are under the effect of your <b>Donum</b> and
        roll a <b>1-3</b>, they experience a <i>mishap</i>. A <i>mishap</i> is a
        danger or complication spawned from your unfamiliarity with your own
        power. When <i>mishaps</i> occur, <b>mark 1 xp</b>; they may be resisted
        as normal.
      </TypographyP>
      <TypographyP>
        Nascent wielders have a <b>Nascence clock</b>. Each time your character
        spends <b>water</b> or experiences a <i>mishap</i>, they mark the{" "}
        <b>Nascence clock</b>. Once full, your character unlocks their{" "}
        <i>Donum Metamorphosis</i>: a moment of your choosing where the power
        permanently evolves and provides your character with dangerous power in
        that scene.
      </TypographyP>
      <TypographyP>
        After the <i>Donum Metamorphosis</i>, the power enters a new phase:{" "}
        <i>Donum Versance</i>.
      </TypographyP>
    </>
  );
}

async function DonumList() {
  const { error } = await checkAuth("user", ["view-donums"]);
  if (error) return null;
  return (
    <>
      <TypographyH3 className="text-lg">Donum Cinis</TypographyH3>
      <span className="text-muted-foreground">the gift of Ash</span>
      <TypographyP>
        Manipulate ash, smoke, and dust. Rapidly dehydrate substances.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Denieth</TypographyH3>
      <span className="text-muted-foreground">the gift of Denial</span>
      <TypographyP>
        Create and manipulate barriers, strengthen objects, and prevent motion.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Ferro</TypographyH3>
      <span className="text-muted-foreground">the gift of Iron</span>
      <TypographyP>
        Create and manipulate all metals. <strong>Adamantine</strong>{" "}
        supercharges this power if held by the <em>wielder</em> and is immune to
        it if held by someone else.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Fulgur</TypographyH3>
      <span className="text-muted-foreground">the gift of Lightning</span>
      <TypographyP>
        Create and manipulate electricity and lightning. Rare talents have been
        able to create fluctuating masses of strange energy.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Heims</TypographyH3>
      <span className="text-muted-foreground">the gift of Winter</span>
      <TypographyP>
        Create regions of cold, create mist, dampen sounds.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Ignis</TypographyH3>
      <span className="text-muted-foreground">the gift of Fire</span>
      <TypographyP>
        Create and manipulate heat, fire, and lava. <strong>Adamantine</strong>{" "}
        supercharges this power if held by the <em>wielder</em> and is immune to
        it if held by someone else.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Ira</TypographyH3>
      <span className="text-muted-foreground">the gift of Rage</span>
      <TypographyP>
        Empower the body fortify the mind, influence the emotions of others.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Lignum</TypographyH3>
      <span className="text-muted-foreground">the gift of Wood</span>
      <TypographyP>Grow and manipulate trees and wood.</TypographyP>
      <TypographyH3 className="text-lg">Donum Lux</TypographyH3>
      <span className="text-muted-foreground">the gift of Light</span>
      <TypographyP>
        Create and manipulate light. In rare cases, <em>wielders</em> have been
        able to cause strange effects and sicknesses.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Messis</TypographyH3>
      <span className="text-muted-foreground">the gift of Harvest</span>
      <TypographyP>Enhance the growth of edible plants.</TypographyP>
      <TypographyH3 className="text-lg">Donum Umbra</TypographyH3>
      <span className="text-muted-foreground">the gift of Shade</span>
      <TypographyP>
        Create and manipulate darkness. Skilled <em>wielders&apos;</em> shadows
        are semi-physical.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Ventus</TypographyH3>
      <span className="text-muted-foreground">the gift of Wind</span>
      <TypographyP>
        Manipulate wind, air, and sound. Usually the effects are focused and
        short ranged.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Vitae</TypographyH3>
      <span className="text-muted-foreground">the gift of Vitality</span>
      <TypographyP>Heal, strengthen, and restore life.</TypographyP>
    </>
  );
}

async function InnerSanctum() {
  const { error } = await checkAuth("user", ["inner-sanctum"]);
  if (error) return null;
  return (
    <>
      <TypographyH3 className="text-lg">Donum Aevum</TypographyH3>
      <span className="text-muted-foreground">the gift of Time</span>
      <TypographyP>
        Manipulate time. Usually, <em>wielders</em> are limited to affecting
        themselves or things they can touch.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Aquae</TypographyH3>
      <span className="text-muted-foreground">the gift of Water</span>
      <TypographyP>
        Manipulate or create water, ice, snow, steam, and blood.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Dolus</TypographyH3>
      <span className="text-muted-foreground">the gift of Deceit</span>
      <TypographyP>
        Illusions, mind manipulation, and in some cases even minor reality
        warping.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Fornax</TypographyH3>
      <span className="text-muted-foreground">the gift of Forge</span>
      <TypographyP>
        Create objects imbued with power, allowing even non-<em>wielders</em> to
        compete in the realm of <b>donums</b>.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Iter</TypographyH3>
      <span className="text-muted-foreground">the gift of Journey</span>
      <TypographyP>
        Enhance physical speed, endurance, and agility as well as short-range
        teleportation. Rarely, <em>wielders</em> can teleport long distances or
        affect others.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Luna</TypographyH3>
      <span className="text-muted-foreground">the gift of the Moon</span>
      <TypographyP>Create magically binding oaths and contracts.</TypographyP>
      <TypographyH3 className="text-lg">Donum Ossis</TypographyH3>
      <span className="text-muted-foreground">the gift of Bones</span>
      <TypographyP>
        Manipulate bones of living creatures and animate the bones of the dead.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Sangius</TypographyH3>
      <span className="text-muted-foreground">the gift of Blood</span>
      <TypographyP>
        Create and manipulate blood and some bodily functions.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Silex</TypographyH3>
      <span className="text-muted-foreground">the gift of Stone</span>
      <TypographyP>
        Manipulate or create stone, dirt, sand, and glass.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Silva</TypographyH3>
      <span className="text-muted-foreground">the gift of Nature</span>
      <TypographyP>Manipulate or grow plants, wood, and fungi.</TypographyP>
      <TypographyH3 className="text-lg">Donum Somnium</TypographyH3>
      <span className="text-muted-foreground">the gift of Dreams</span>
      <TypographyP>
        Powerless in the waking world, but can reliably escape their personal
        dreams in the <strong>Dreamscape</strong> and enter the dreams of
        others.
      </TypographyP>
      <TypographyH3 className="text-lg">Donum Tueor</TypographyH3>
      <span className="text-muted-foreground">the gift of Beholding</span>
      <TypographyP>
        Allows the <em>wielder</em> to see through anything, including the eyes
        of others. A few have also been able to see through time.
      </TypographyP>
    </>
  );
}

async function DonumVitae() {
  const { error } = await checkAuth("user", ["donum-vitae"]);
  if (error) return null;
  return (
    <>
      <Separator className="my-4" />
      <TypographyH3 className="mb-2">
        Donum Vitae{" "}
        <span className="text-muted-foreground">(Gift of Vitality)</span>
      </TypographyH3>
      <TypographyP>
        Your body buzzes, but you can hardly feel it. Your eyes are bright and
        your limbs are light. Aches and pains melt away into a pleasant warmth,
        like a gentle hand on your cheek.
      </TypographyP>
      <TypographyP>
        As incredible of a feeling this is, it comes at the cost of{" "}
        <b className="text-blue-500">Water</b>. <b>Donum Vitae</b> slowly drains
        the coolness from your veins, consuming{" "}
        <b className="text-blue-500">1 Water</b> each day. When it does, it
        ticks your <b>healing clock</b> by <b>2</b>. If there is no{" "}
        <b className="text-blue-500">Water</b> left, mark a{" "}
        <b>permanent level 1 harm: parched</b>.
      </TypographyP>
      <TypographyP>
        Harnessing this power can be difficult though. The{" "}
        <b className="text-blue-500">Water</b> is heavy and clings to your inner
        extremities. It requires concentration and time to draw it, then expel
        it for your purposes. While you do this, you are vulnerable to foes
        seeking to exploit weakness.
      </TypographyP>
      <TypographyP>
        Developing <b>Donum Vitae</b> further is a very personal and often
        intimate journey. Not only does it requires introspection into
        one&apos;s own body, it requires learning others&apos; vitality as well.
      </TypographyP>
      <TypographyBlockquote>
        To gain <b>Donum Vitae</b> abilities, spend <b>3 xp clocks</b> during
        the <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyH4>Euphoria</TypographyH4>
      <TypographyP>
        You may spend <b className="text-blue-500">1 Water</b> to amplify the
        healthful sense of vitality which <b>Donum Vitae</b> ambiently cradles
        you with - or you may bless another with it. For one day, the
        beneficiary may ignore any minor discomforts like being <i>hungry</i>,{" "}
        <i>tired</i>, or <i>sore</i>. When the euphoria ends, the beneficiary
        ticks their <b>healing clock</b> by <b>2</b> and marks <b>1 stress</b>.
      </TypographyP>
      <TypographyH4>Reckless Strength</TypographyH4>
      <TypographyP>
        The mind places psychic limits on the body to prevent accidental
        over-strain causing harm. You may spend{" "}
        <b className="text-blue-500">1 Water</b> to flood the body with
        adrenaline and bypass these safeguards. If you do, the beneficiary may
        perform a feat of near superhuman strength or endurance. Afterwards,
        they mark a <b>level 2 harm: pulled muscles</b>.
      </TypographyP>
      <TypographyH4>Endless Energy</TypographyH4>
      <TypographyP>
        <b>Donum Vitae</b> clarifies the mind and energizes the body, allowing
        for days of activity without needing to rest. Spend{" "}
        <b className="text-blue-500">1 Water</b> to grant{" "}
        <b className="text-blue-500">+1d</b> to an <b>agenda</b> or to two{" "}
        <b>downtime</b> actions.
      </TypographyP>
      <TypographyH4>Inner Sensation</TypographyH4>
      <TypographyP>
        You develop a means of inherently percieving the shape, texture, and
        motion of the many interior parts of the body. Spend{" "}
        <b className="text-blue-500">1 Water</b> to identify interior maladies
        and detect foreign objects in bodies. If used as part of someone&apos;s{" "}
        <b>Recover</b> action during <b>downtime</b>, you may cure them of a
        single non-permanent instance of <b>harm</b>.
      </TypographyP>
      <TypographyH4>Rapid Vitality</TypographyH4>
      <TypographyP>
        You&apos;ve become practiced at wielding <b>Donum Vitae</b> in the thick
        of the action. You can use its abilities within seconds instead of
        minutes and are no longer vulnerable while doing so.
      </TypographyP>
      <TypographyH4>Grow Reserve</TypographyH4>
      <TypographyP>
        <b>Donum Vitae</b> puts greater and greater demands for{" "}
        <b className="text-blue-500">Water</b> on your body, pushing you to
        drink more and more to compensate. Consume{" "}
        <b className="text-blue-500">3 Water</b> at once to dilate the cooling
        pathways in your body and gain{" "}
        <b className="text-blue-500">+1 max Water</b>. When <b>Donum Vitae</b>{" "}
        naturally drains <b className="text-blue-500">Water</b> from your body,
        it ticks your <b>healing clock</b> by <b>3</b>.
      </TypographyP>
    </>
  );
}
