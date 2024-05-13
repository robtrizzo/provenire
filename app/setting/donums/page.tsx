import Donum from '@/components/stats/donum';
import Blood from '@/components/stats/blood';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Donums</TypographyH1>
      <TypographyP>
        <Donum>Donum</Donum> is the <strong>Arborian</strong> word for
        &ldquo;gift&rdquo;, representing how the <strong>Arborians</strong>{' '}
        believe these powers to be gifts from their god,{' '}
        <strong>Jolana Arbor</strong>. Also according to the{' '}
        <strong>Arborians</strong>, <strong>Jolana&apos;s</strong> daughter{' '}
        <strong>Anya</strong> named each of the <Donum>Donums</Donum> as they
        were discovered.
      </TypographyP>
      <TypographyP>
        Not much is known about the <Donum>Donums</Donum> themselves, but they
        seem to loosely follow a few patterns. Every <Donum>Donum</Donum> is
        awoken by drinking water, usually before adulthood.{' '}
        <Donum>Donums</Donum> are also fuelled by water the <em>wielder</em> has
        drank.
      </TypographyP>
      <TypographyP>
        Each <Donum>Donum</Donum> seems to be roughly tied to a geographic
        region. Within that region, the <Donum>Donum</Donum> seems to vary
        between cultures, families, and individuals.
      </TypographyP>
      <TypographyP>
        There are many exceptions. The <strong>Gredorans</strong> can have
        devised <strong>Blood Sleeves</strong> to awaken latent{' '}
        <Donum>Donums</Donum>, and they use their own <Blood /> to fuel their
        powers. The vast majority of <strong>Fenrir</strong> children (and{' '}
        <strong>Rathi</strong> back in the day) spontaneously develop{' '}
        <Donum>Donums</Donum> as infants without ever drinking water.
      </TypographyP>
      <TypographyH2 id="first_age">Donums in the First Age</TypographyH2>
      <TypographyP>
        Outside of <strong>Rath</strong>, <Donum>Donums</Donum> are rare, maybe
        one in a thousand.
      </TypographyP>
      <TypographyH3>Arboria</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Aquae</Donum>, <strong>The Gift of Water</strong>:
        Manipulate or create water, ice, snow, steam, and blood.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Dolus</Donum>, <strong>The Gift of Deceit</strong>:
        Illusions, mind manipulation, and in some cases even minor reality
        warping.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Silex</Donum>, <strong>The Gift of Stone</strong>:
        Manipulate or create stone, dirt, sand, and glass.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Silva</Donum>, <strong>The Gift of Nature</strong>:
        Manipulate or grow plants, wood, and fungi. After{' '}
        <strong>House Mercator&apos;s</strong> massacre at the end of the{' '}
        <strong>War of Broken Oaths</strong>, this power is almost extinct.
      </TypographyP>
      <TypographyH3>Cumeria</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Denieth</Donum>, <strong>The Gift of Denial</strong>:
        Create and manipulate barriers, strengthen objects, and prevent motion.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Vitae</Donum>, <strong>The Gift of Vitality</strong>: Heal,
        strengthen, and restore life.
      </TypographyP>
      <TypographyH3>Gredora</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Ferro</Donum>, <strong>The Gift of Iron</strong>: Create
        and manipulate all metals. <strong>Adamantine</strong> supercharges this
        power if held by the <em>wielder</em> and is immune to it if held by
        someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Fornax</Donum>, <strong>The Gift of the Forge</strong>:
        Incredibly rare power, often only one <em>wielders</em> per generation.
        Create objects imbued with power, allowing even non-<em>wielders</em> to
        compete in the realm of powers.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ignis</Donum>, <strong>The Gift of Fire</strong>: Create
        and manipulate heat, fire, and lava. <strong>Adamantine</strong>{' '}
        supercharges this power if held by the <em>wielder</em> and is immune to
        it if held by someone else.
      </TypographyP>
      <TypographyH3>Kilder</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Duellum</Donum>, <strong>The Gift of War</strong>: Only
        ever held by <strong>Hamdi Ghodbane</strong>. Unknown how the power
        works, but <strong>Hamdi</strong> won overwhelming victories in every
        battle of the <strong>War of Broken Oaths</strong>.
      </TypographyP>
      <TypographyH3>Narscillia</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Lux</Donum>, <strong>The Gift of Light</strong>: Create and
        manipulate light. In rare cases, <em>wielders</em> have been able to
        cause strange effects and sicknesses.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Tueor</Donum>, <strong>The Gift of Beholding</strong>:
        One-per-generation power. Allows the <em>wielder</em> to see through
        anything, including the eyes of others. A few have also been able to see
        through time.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Umbra</Donum>, <strong>The Gift of Shade</strong>: Create
        and manipulate darkness. Skilled <em>wielders&apos;</em> shadows are
        semi-physical.
      </TypographyP>
      <TypographyH3>Rath</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Rex</Donum>, <strong>The Gift of the King</strong>:
        Transform fully or partially into a wolf and empower the body. Each{' '}
        <em>wielder&apos;s</em> transformation varies dramatically: especially
        if they have other <Donum>Donums</Donum> as well.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Exsecratus Portentum</Donum>, <strong>Accursed Monster</strong>:
        Ability to transform into a bear, bird, snake, or other animal. Rare
        <em>wielders</em> can transform into multiple animals or monstrosities.
        Shunned and killed by the rest of Rath.
      </TypographyP>
      <TypographyH3>Shian Tor</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Aevum</Donum>, <strong>The Gift of Eternity</strong>:
        Manipulate time. Usually, <em>wielders</em> are limited to affecting
        themselves or things they can touch.
      </TypographyP>
      <TypographyH2 id="second_age">Donums in the Second Age</TypographyH2>
      <TypographyP>
        In the <strong>Second Age</strong>, <Donum>Donums</Donum> are far more
        common than they&apos;ve ever been: roughly six in ten. However, overall{' '}
        <Donum>Donums</Donum> have become weaker than they seemed in the past,
        with the exception of <strong>Argosi</strong> <Donum>Donums</Donum>,
        which seem even stronger than before.
      </TypographyP>
      <TypographyH3>Anidine</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Denieth</Donum>, <strong>The Gift of Denial</strong>:
        Create and manipulate barriers, strengthen objects, and prevent motion.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ferro</Donum>, <strong>The Gift of Iron</strong>: Create
        and manipulate all metals. <strong>Adamantine</strong> supercharges this
        power if held by the <em>wielder</em> and is immune to it if held by
        someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ignis</Donum>, <strong>The Gift of Fire</strong>: Create
        and manipulate heat, fire, and lava. <strong>Adamantine</strong>{' '}
        supercharges this power if held by the <em>wielder</em> and is immune to
        it if held by someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Vitae</Donum>, <strong>The Gift of Vitality</strong>: Heal,
        strengthen, and restore life.
      </TypographyP>
      <TypographyH3>Argos</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Aquae</Donum>, <strong>The Gift of Water</strong>:
        Manipulate or create water, ice, snow, steam, and blood.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Dolus</Donum>, <strong>The Gift of Deceit</strong>:
        Illusions, mind manipulation, and in some cases even minor reality
        warping.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Silex</Donum>, <strong>The Gift of Stone</strong>:
        Manipulate or create stone, dirt, sand, and glass.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Silva</Donum>, <strong>The Gift of Nature</strong>:
        Manipulate or grow plants, wood, and fungi. The traditional inheritors
        of this power, <strong>House Mercator</strong> was wiped out in the{' '}
        <strong>Isolation War</strong>. A few generations later, the power has
        revived in a family now calling themselves <strong>House Sylva</strong>.
      </TypographyP>
      <TypographyH3>Bwarhei</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Portentum</Donum>, <strong>Gift of the Monster</strong>:
        Ability to transform into any animal, beast, or monstrosity outside of{' '}
        <strong>Kingwulf&apos;s</strong> three accepted transformations. Many{' '}
        <em>wielders</em> have multiple transformations or can mix and match.
      </TypographyP>
      <TypographyH3>Cumeria</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Denieth</Donum>, <strong>The Gift of Denial</strong>:
        Create and manipulate barriers, strengthen objects, and prevent motion.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Heims</Donum>, <strong>The Gift of Winter</strong>: Create
        regions of cold, create mist, dampen sounds.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Vitae</Donum>, <strong>The Gift of Vitality</strong>: Heal,
        strengthen, and restore life.
      </TypographyP>
      <TypographyH3>Fenrir</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Rex</Donum>, <strong>The Gift of the King</strong>:
        Transform fully or partially into a wolf and empower the body. Each{' '}
        <em>wielder&apos;s</em> transformation varies dramatically: especially
        if they have other <Donum>Donums</Donum> as well.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ursa</Donum>, <strong>The Gift of the Bear</strong>:
        Transform fully or partially into a bear and empower the body. Each{' '}
        <em>wielder&apos;s</em> transformation varies dramatically: especially
        if they have other <Donum>Donums</Donum> as well.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Corvus</Donum>, <strong>The Gift of Crow</strong>:
        Transform fully or partially into a crow and empower the body. Each{' '}
        <em>wielder&apos;s</em> transformation varies dramatically: especially
        if they have other <Donum>Donums</Donum> as well.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Somnium</Donum>, <strong>The Gift of Dreams</strong>:
        Powerless in the waking world, but can reliably escape their personal
        dreams in the <strong>Dreamscape</strong> and enter the dreams of
        others.
      </TypographyP>
      <TypographyH3>Gredora</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Ferro</Donum>, <strong>The Gift of Iron</strong>: Create
        and manipulate all metals. <strong>Adamantine</strong> supercharges this
        power if held by the <em>wielder</em> and is immune to it if held by
        someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Fornax</Donum>, <strong>The Gift of the Forge</strong>:
        Incredibly rare power, often only one <em>wielders</em> per generation.
        Create objects imbued with power, allowing even non-<em>wielders</em> to
        compete in the realm of powers.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Fulgur</Donum>, <strong>The Gift of Lightning</strong>:
        Create and manipulate electricity and lightning. Rare talents have been
        able to create fluctuating masses of strange energy.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ignis</Donum>, <strong>The Gift of Fire</strong>: Create
        and manipulate heat, fire, and lava. <strong>Adamantine</strong>{' '}
        supercharges this power if held by the <em>wielder</em> and is immune to
        it if held by someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ira</Donum>, <strong>The Gift of Rage</strong>: Empower the
        body fortify the mind, influence the emotions of others.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Sangius</Donum>, <strong>The Gift of Blood</strong>: Create
        and manipulate blood and some bodily functions.
      </TypographyP>
      <TypographyH3>Heia</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Aevum</Donum>, <strong>The Gift of Eternity</strong>:
        Manipulate time. Usually, <em>wielders</em> are limited to affecting
        themselves or things they can touch.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ferro</Donum>, <strong>The Gift of Iron</strong>: Create
        and manipulate all metals. <strong>Adamantine</strong> supercharges this
        power if held by the <em>wielder</em> and is immune to it if held by
        someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Fulgur</Donum>, <strong>The Gift of Lightning</strong>:
        Create and manipulate electricity and lightning. Rare talents have been
        able to create fluctuating masses of strange energy.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Lux</Donum>, <strong>The Gift of Light</strong>: Only even
        held by <strong>Hamdi Ghodbane</strong>. Unknown how the power works,
        but <strong>Hamdi</strong> won overwhelming victories in every battle of
        the <strong>War of Broken Oaths</strong>.
      </TypographyP>
      <TypographyH3>Kilder</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Duellum</Donum>, <strong>The Gift of War</strong>: Only
        ever held by three <em>wielders</em>. Unknown how the power works, but
        its users have never lost a battle in war.
      </TypographyP>
      <TypographyH3>Kipos</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Iter</Donum>, <strong>The Gift of Journey</strong>: Enhance
        physical speed, endurance, and agility as well as short-range
        teleportation. Rarely, <em>wielders</em> can teleport long distances or
        affect others.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Lignum</Donum>, <strong>The Gift of Wood</strong>: Grow and
        manipulate trees and wood.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Lux</Donum>, <strong>The Gift of the Harvest</strong>:
        Enhance the growth of edible plants.
      </TypographyP>
      <TypographyH3>Narscillia</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Lux</Donum>, <strong>The Gift of Light</strong>: Create and
        manipulate light. In rare cases, <em>wielders</em> have been able to
        cause strange effects and sicknesses.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Tueor</Donum>, <strong>The Gift of Beholding</strong>:
        One-per-generation power. Allows the <em>wielder</em> to see through
        anything, including the eyes of others. A few have also been able to see
        through time.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Umbra</Donum>, <strong>The Gift of Shade</strong>: Create
        and manipulate darkness. Skilled <em>wielders&apos;</em> shadows are
        semi-physical.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ventus</Donum>, <strong>The Gift of Wind</strong>:
        Manipulate wind, air, and sound. Usually the effects are focus and short
        ranged.
      </TypographyP>
      <TypographyH3>Yama</TypographyH3>
      <TypographyP className="pl-4">
        <Donum>Donum Cinis</Donum>, <strong>The Gift of Ash</strong>: Manipulate
        ash, smoke, and dust. Rapidly dehydrate substances.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ignis</Donum>, <strong>The Gift of Fire</strong>: Create
        and manipulate heat, fire, and lava. <strong>Adamantine</strong>{' '}
        supercharges this power if held by the <em>wielder</em> and is immune to
        it if held by someone else.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Luna</Donum>, <strong>The Gift of the Moon</strong>: Create
        magically binding oaths and contracts. Incredibly rare power, never
        found outside of the citizens of the <strong>Hidden City</strong>.
      </TypographyP>
      <TypographyP className="pl-4">
        <Donum>Donum Ossis</Donum>, <strong>The Gift of Bones</strong>:
        Manipulate bones of living creatures and animate the bones of the dead.
        Unsettlingly, animated bones seem to have vestiges of personality and
        memory.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/third-age/introduction" className="mr-auto">
          <Button variant="outline">
            <ChevronLeft /> Introduction
          </Button>
        </Link>
      </div>
    </>
  );
}
