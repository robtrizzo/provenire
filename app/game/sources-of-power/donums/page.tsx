import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
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
