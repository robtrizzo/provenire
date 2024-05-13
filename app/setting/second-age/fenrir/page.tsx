import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Fenrir</TypographyH1>
      <TypographyH2>Three Ravenous Packs</TypographyH2>
      <TypographyP>
        During the <strong>First Age</strong>, what is now{' '}
        <strong>Fenrir</strong> used to be the <strong>Kingdom of Rath</strong>,
        lead by <strong>Kingwulf</strong>. In the power vacuum left by the{' '}
        <strong>Departure</strong>, <strong>Rath</strong> militarized and
        launched bloody invasions into <strong>Anidine</strong>-controlled{' '}
        <strong>Cumeria</strong>. This invasion was on a scale that had not been
        seen since the likes of <strong>Hamdi Ghodbane&apos;s</strong> legendary
        campaign centuries before. <strong>Cumeria</strong>, fractured and
        divided by their <strong>Secession</strong> war with{' '}
        <strong>Anidine</strong>, didn&apos;t stand a chance.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            During this time, the <strong>Rathi</strong> of{' '}
            <Donum>Exsecratus Portentum</Donum>, the Accursed Monsters, banded
            together and took some territory of their own in the chaos.
          </TypographyP>
          <TypographyP>
            After the dust had settled and borders had been established,{' '}
            <strong>Kingwulf</strong> declared <strong>Rath</strong> to now be
            the <strong>Fenrir</strong> empire. In the four hundred years since,{' '}
            <strong>Fenrir</strong> has built four great cities within the
            jungle and the <strong>Titan Pines</strong>. And in{' '}
            <em>King&apos;s Glory</em>, the capitol city, an ancient{' '}
            <strong>Kingwulf</strong> sits upon his throne of bones.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>The Age of the Wolf</h6>
          <TypographyP>
            The <em>Donums</em> of old have faded, and the beasts of the night
            are closing in, sensing weakness in their prey across the world. Men
            now huddle in their settlements, fortifying themselves with numbers
            and walls. But not in <strong>Fenrir</strong>. Rather than cower,
            they became the beasts themselves, but more savage, more ruthless,
            more monstrous than ever before.
          </TypographyP>
        </div>
      </div>
      <TypographyP>
        Underneath <strong>Kingwulf</strong> are the three Dukes of{' '}
        <strong>Fenrir</strong>, each controlling a state and leading one of the{' '}
        <strong>Ravenous Packs</strong>.
      </TypographyP>
      <TypographyH3>The Wolf Pack</TypographyH3>
      <TypographyP>
        The <strong>Duke of Wolves</strong> is <strong>Vandalwulf</strong>,{' '}
        <strong>Kingwulf&apos;s</strong> most trusted Duke.{' '}
        <strong>Vandalwulf</strong> controls all the territory of the center of
        the Empire, including <em>The Great Well</em> and the capitol city of{' '}
        <em>King&apos;s Glory</em>. Despite ruling over the capitol,{' '}
        <strong>Vandalwulf&apos;s</strong> word is nothing compared to the
        King&apos;s.
      </TypographyP>
      <TypographyP>
        Under <strong>Vandalwulf&apos;s</strong> rule, central{' '}
        <strong>Fenrir</strong> prospers. Well-maintained roads cut through
        orderly farmland. Hunting packs bring their hauls back to their
        villiages. Soldier packs patrol the surrounding jungle, eliminating any
        creatures or spies that could be a threat to their homes.
      </TypographyP>
      <TypographyP>
        The people grow strong and live long. The <strong>Fenrir</strong> feel
        great pride for what this place has become, knowing little of the bloody
        conflicts on their borders. And those who do know of the battles are
        confused by them.
      </TypographyP>
      <TypographyBlockquote>
        Why do the <strong>Kiposi</strong> fight so hard to keep us out?
        Don&apos;t they want their lives to be as grand as ours? I suppose
        that&apos;s why we have to show those fools the way by force.
      </TypographyBlockquote>
      <TypographyH4>The Great Well</TypographyH4>
      <TypographyP>
        The <strong>Abyssal Well</strong>, prize of the Empire. The expansive
        city stretches around as much as half of the <em>Well</em>, hauling
        giant buckets of water from within. Much of <em>The Great Well</em> is
        structured to facilitate retrieving and transporting water across the
        nation to each village in need.
      </TypographyP>
      <TypographyP>
        A part of this process is ritual worship of the <em>Well God</em>.
        Dozens of cathedrals dedicated to <em>Him</em> dot the city and ritual
        chants are performed at sunrise and sunset to appease <em>Him</em>. When
        the prayers are insufficient to bring water, it is the priests&apos;
        responsibility to make more substantial offerings to the <em>Well</em>.
      </TypographyP>
      <TypographyH4>King&apos;s Glory</TypographyH4>
      <TypographyP>
        <em>King&apos;s Glory</em> is <strong>Fenrir&apos;s</strong> largest
        city, in fact it may be the world&apos;s largest city. It is difficult
        to tell the true number of residents since without walls, it sprawls in
        all directions. The center of the city however, is far different from
        the squalor of the outer city. The King District is a massive complex of
        marble palaces, fortresses, and academies. Most namely of them all are
        the Palace of Pride where <strong>Kingwulf</strong> resides, Tooth and
        Nail Fortress where <strong>Vandalwulf</strong> resides, and Darkeye
        Academy.
      </TypographyP>
      <TypographyP>
        The young <strong>Fenrir</strong> who show promise in{' '}
        <em>Cleansing City</em> are sent to Brighteye Academy where they are
        tutored in all things war and tome. Those who stand out there are
        brought before <strong>Kingwulf</strong> himself to be recognized as
        exceptional pupils and admitted into Darkeye Academy when they come of
        age.
      </TypographyP>
      <TypographyP>
        Once in Darkeye Academy, the students are schooled by the{' '}
        <strong>Wolf Duke&apos;s</strong> finest captains. Learning in Darkeye
        Academy is a great honor, and a great responsibility. The{' '}
        <strong>Wolf Duke</strong> detests failure. And if students fail to live
        up to his expectations, they are expelled disgracefully, never to
        return.
      </TypographyP>
      <TypographyP>
        Many of the residents of <em>King&apos;s Glory</em> are{' '}
        <strong>Fenrir&apos;s</strong> aristocracy: families with powerful
        bloodlines who have produced a worthy brood for many generations. They
        stay in the city to serve <strong>Kingwulf</strong> directly in hopes of
        currying his favor and being awarded more wives with which to expand
        their heritage.
      </TypographyP>
      <TypographyP>
        The outer city is home to those who don&apos;t have the King&apos;s
        attention. Hunters returning to the city must be good in a scrap, as
        it&apos;s common for bandits to set upon those carrying food openly in
        the streets. Hungry packs of <Donum>Donum Lupus</Donum> roam the streets
        in search of an easy mark. It is a good day when those without{' '}
        <em>Donums</em> aren&apos;t caught in the middle of a pack fight, wheter
        it be for territory, food, or women.
      </TypographyP>
      <TypographyH3>The Bear Pack</TypographyH3>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            The <strong>Duke of Bears</strong> is <strong>Gaathabaira</strong>.
            She rules over the empire&apos;s northern provices, overseeing all
            the lands that were once <strong>Cumerian</strong>. She and the
            ferocious <strong>Bear Pack</strong> fight tenaciously to beat back
            the creatures of the woods as well as the frequent{' '}
            <strong>Cumerian</strong> raids.
          </TypographyP>
          <TypographyP>
            Life in the North is dismal, gritty, and uncertain. Only the most
            resolute of <strong>Fenrir</strong> choose to live in the{' '}
            <strong>Titan Pines</strong>, but the possible bounty is great. Many
            live in the North simply because they want to get rich on{' '}
            <em>Adamantine</em>. And it is the <strong>Bear Pack&apos;s</strong>{' '}
            duty to protect these people as well as maintaining the border that
            is so hard-fought.
          </TypographyP>
          <TypographyH4>Colony</TypographyH4>
          <TypographyP>
            In the <strong>Glorious Northern War</strong>,{' '}
            <strong>Rathi</strong> warriors were set upon by a titanic dire bear
            and her offspring. In the aftermath of the battle, soldiers
            discovered her lair, an expansive network of caves underneath the
            trees. This is where the city of <strong>Colony</strong> was built.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>The King&apos;s Leniency</h6>
          <TypographyP>
            Generations after siezing territory from <strong>Cumeria</strong>,
            new transformations began to be more frequent, but not just
            abberations like those of <Donum>Exsecratus Portentum</Donum>.{' '}
            <strong>Kingwulf</strong> declared the two most common of the new
            transformations to be part of his empire. To be under{' '}
            <strong>Kingwulf&apos;s</strong> rule and protection, but never to
            be on equal standing with the <Donum>Donum Lupus</Donum>.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Lupus</Donum>: Gift of the Wolf
            </li>
            <li>
              <Donum>Donum Ursa</Donum>: Gift of the Bear
            </li>
            <li>
              <Donum>Donum Corvus</Donum>: Gift of the Crow
            </li>
            <li>
              <Donum>Donum Somnium</Donum>: Gift of Dreams
            </li>
            <li>
              <Donum>Donum Sangius</Donum>: Gift of Blood
            </li>
          </ul>
        </div>
      </div>
      <TypographyP>
        Thousands of homes carved from the rock and lit by torches make up the
        city, and at the center is <strong>Spike Fortress</strong>, named after
        how it was carved from a single stalagmite.
      </TypographyP>
      <TypographyP>
        Despite the spartan environment outside of <strong>Colony</strong>, most
        in the city make thier living from foraging, crafting, and hunting.
        Mothers let their children play in the streets and allyways because{' '}
        <strong>Colony</strong> is perhaps one of the safest places in the
        world. <strong>Gaathabaira</strong> will let nothing and no one put a
        stain on her reign, her shining city, her legacy, her offering to{' '}
        <strong>Kingwulf</strong>.
      </TypographyP>
      <TypographyP>
        A steady stream of rejects from <strong>Cleansing City</strong> arrives
        at the <strong>Duke of Bears&apos;s</strong> doorstep, replacements
        which she despearately needs. She tells them to fret not, they will lead
        a meaningful life under her guidance. Under her, they will expand the
        caves, mine for the metals that will make them rich. They will build the
        roads for generations to tread upon. They will sure up the walls that
        will keep their families safe. They will bear the pike-wall on the front
        lines to pave their bretherens&apos; way to victory on the battlefield.
        They will make <strong>Colony</strong> a better place for the future,
        and for the glory of <strong>Fenrir</strong>.
      </TypographyP>
      <TypographyH3>The Raven Flock</TypographyH3>
      <TypographyP>
        The second new transformation recognized by <strong>Kingwulf</strong> is{' '}
        <Donum>Donum Corvus</Donum>. The <strong>Duke of Ravens</strong> is{' '}
        <strong>Ansisamslo</strong>. He rules over the southwest of the empire,
        spearheading the effort to expand into <strong>Kipos</strong>. The{' '}
        <strong>Raven Flock</strong> and <strong>Kipos&apos;s</strong>{' '}
        <strong>Eagle Militia</strong> have been mortal enemies for the last two
        hundred years, the <strong>Fenrir</strong> and <strong>Kiposi</strong>{' '}
        armies clashing in a constant struggle for territory.
      </TypographyP>
      <TypographyP>
        <strong>Ansisamslo</strong> rules from <strong>Cleansing City</strong>,
        but he doesn&apos;t care for a throne. In fact, he doesn&apos;t like to
        be recognized at all. His orders are issued through a network of
        captains, but other than them, no one knows what he looks like.
        It&apos;s said that in battle, he dresses in the exact same uniform as
        the common soldiers so that enemy commanders can&apos;t know when to
        expect his blade at their throats.
      </TypographyP>
      <TypographyH4>Cleansing City</TypographyH4>
      <TypographyP>
        The <strong>Duke of Ravens</strong> was given two orders by{' '}
        <strong>Kingwulf</strong> in return of rulership: expand the western
        border, and to rear the young <strong>Fenrir</strong> children - weeding
        out any who are not fit for survival. <strong>Cleansing City</strong> is
        where <strong>Ansisamslo</strong> makes this happen.
      </TypographyP>
      <TypographyP>
        Daily caravans of young <strong>Fenrir</strong> are lead into the city
        by their Shepherds, priests handpicked by{' '}
        <strong>Ansisamslo&apos;s</strong> captains to watch over the children.
        Once in the city, the children undergo rigorous and brutal education and
        physical training. Those who can&apos;t keep up are sent to the North to
        reinforce <strong>Gaathabaira</strong>. Those who show promise are
        instead sent to the capitol to be recognized by the King.
      </TypographyP>
      <TypographyP>
        The rest are lead by the Shepherds on a pilgrimmage from{' '}
        <strong>Life Duct</strong> to <strong>Life Duct</strong>, drinking from
        each one they pass. Every child partakes in the cyclical pilgrmmage for
        five years, or until they gain a <em>Donum</em>. Those without a{' '}
        <em>Donum</em> are allowed to return home in shame. Those who do gain a{' '}
        <em>Donum</em> are taken to the city corresponding to their
        transformation for further training.
      </TypographyP>
      <TypographyP>
        Those who are <Donum>Exsecratus Portentum</Donum> are instead trained to
        be suicide soldiers on the front lines, so that they might serve in the
        only way they&apos;re allowed to: by dying.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/cumeria">
          <Button variant="outline">
            <ChevronLeft /> Cumeria
          </Button>
        </Link>
        <Link href="/setting/second-age/gredora">
          <Button variant="outline">
            Gredora <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
