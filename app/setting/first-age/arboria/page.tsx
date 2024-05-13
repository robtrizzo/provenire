import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Arboria</TypographyH1>
      <TypographyBlockquote>
        We are the chosen. The descendants of the first <em>Donum</em>, and
        it&apos;s finest masters. It is our destiny to shape the world as she
        intended it.
      </TypographyBlockquote>
      <TypographyP>
        <em>Donum</em> is the <strong>Arborian</strong> word for &lsquo;The
        Gift,&rsquo; as <strong>Jolana Arbor</strong> called it centuries ago.
        To wield a <em>Donum</em> means that one has inherited some of the soul
        of <strong>Jolana</strong>, as an <strong>Arborian</strong> would put
        it.
      </TypographyP>
      <TypographyH2>Civilized Pursuits</TypographyH2>
      <TypographyP>
        Since <strong>Arboria</strong> was founded around <strong>Helix</strong>{' '}
        and its endless supply of water, <strong>Arborians</strong> have never
        experienced the strife of thirst and constant battle against predators
        for survival. Rather than their <em>Wielders</em> training for combat,
        their best and brightest focused their efforts on architecture,
        agriculture, and scholarly pursuits
      </TypographyP>
      <TypographyP>
        The <strong>Arborians</strong> consider it low-class to be a warrior or
        hunter. The attitude is that if an <strong>Arborian</strong>{' '}
        <em>Wielder</em> has to train for combat, they were probably not strong
        enough to be worth esteem in the first place. And if ordinary folk deign
        to hunt or practice warfare, it is seen as barbaric and an extreme
        disrespect for the <strong>Arborian</strong> legacy of architecture and
        agricultural plenty.
      </TypographyP>
      <TypographyH3>Community and Charity</TypographyH3>
      <TypographyBlockquote>
        If you have a need, your only need is to ask!
      </TypographyBlockquote>
      <TypographyP>
        The greatest virtue in <strong>Arborian</strong> society is charity.
        Almost nowhere in <strong>Arboria</strong> will you see paupers,
        orphans, or the infirmed. To <strong>Arborians</strong>, the life of
        heroism is one of providing for one&apos;s fellow citizens.
      </TypographyP>
      <TypographyP>
        Prominent in <strong>Helix</strong> are academies, orphanages, and
        hospitals. Any &ldquo;self respecting <strong>Arborian</strong>&rdquo;
        does their best to make the largest contribution to society. That can
        take the form of raising orphans, sending their children to the most
        prestigious schools and academies, tending to the sick, or creating
        public art.{' '}
      </TypographyP>
      <TypographyH2>Helix</TypographyH2>
      <TypographyP>
        The only city in the world: <strong>Helix</strong>. A sprawling
        metropolis named for its nine swirling canals. Each hill, every slope,
        every last curve of the earth in <strong>Helix</strong> has been
        sculpted by <strong>Arborian</strong> <em>Wielders</em> to meet their
        standard of perfection. The streets are not cobbled but have a perfectly
        smooth stone road, its angles painstakingly calculated.
      </TypographyP>
      <TypographyP>
        <strong>Arborian</strong> structures rise far above what anyone thought
        possible before <em>Donum Silex</em> was first manifested. Owning a home
        in <strong>Helix</strong> costs nothing other than asking for one to be
        made for you. <strong>Water</strong> is available for all, and as much
        as anyone wants to take. Seeds for a garden are given to every new
        citizen of <strong>Helix</strong> once they have a home. It is a
        paradise the <strong>Arborians</strong> have worked hard to create.
      </TypographyP>
      <TypographyP>
        Not only <strong>Arborians</strong> live in <strong>Helix</strong>, but
        those of every nationality. Often those of the highest status leave
        their homeland in favor of <strong>Helix</strong>. The{' '}
        <strong>Arborians</strong> are completely different when interacting
        with foreigners, often only allowing the best, brightest, or wealthiest
        of other nations to live in <strong>Helix</strong>.{' '}
        <strong>Ghodbane</strong> hoped to change this with his amendments to
        the <strong>Helix Accords</strong>, but since that day, only one{' '}
        <strong>non-Arborian</strong> Imperator has ever lived: a{' '}
        <strong>Narscillian</strong> named <strong>Kachina Occius</strong>.{' '}
      </TypographyP>
      <TypographyH3>Drinking Day</TypographyH3>
      <TypographyP>
        Once a year on High Summer Eve, the <strong>Arborians</strong> and
        residents of <strong>Helix</strong> celebrate{' '}
        <strong>Drinking Day</strong>. The holiday is to give thanks for the
        bountiful water in <strong>Helix</strong> and to celebrate the coming of
        age of the next generation.
      </TypographyP>
      <TypographyP>
        After a long day of feasting, parades, and games, everyone who turned
        eighteen since the last <strong>Drinking Day</strong> gather in{' '}
        <strong>Helix</strong> and are ushered to{' '}
        <strong>Jolana&apos;s Duct</strong>.
      </TypographyP>
      <TypographyP>
        The waters of <strong>Jolana&apos;s Duct</strong> are mythical in their
        ability to awaken <em>Donums</em> in those who drink from it. The duct
        is sealed off and guarded at all times, only opened on{' '}
        <strong>Drinking Days</strong>{' '}
      </TypographyP>
      <TypographyP>
        As the sun sets, those coming of age are allowed to sip the water from
        the duct. The most esteemed students and artists are allowed to sip
        first, descending in social hierarchy until eventually foreigners are
        allowed to sip as well.
      </TypographyP>
      <TypographyH2>Great Families</TypographyH2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            <strong>Arboria</strong> was founded by <strong>Anya Arbor</strong>,
            but she never produced an heir. Rather than let her name die out,
            the strongest of the <Donum>Donum Aquae</Donum> took on the{' '}
            <strong>Arbor</strong> name, founding the{' '}
            <strong>House of Arbor</strong>. Heirs of <strong>Arbor</strong>{' '}
            often inherit <Donum>Donum Aquae</Donum> and the uncommon heir will
            receive <Donum>Donum Silva</Donum>. Such children are immediately
            sent to <strong>Helix</strong> for the best possible upbringing in
            the arts of <em>Wielding</em>.
          </TypographyP>
          <TypographyP>
            Two other great houses vie for influence in <strong>Arboria</strong>
            . The <strong>Mercators</strong> and the <strong>Santoris</strong>.{' '}
            <strong>House Mercator</strong> once was a great house of{' '}
            <Donum>Donum Silva</Donum>, but after the civil war in{' '}
            <strong>Helix</strong> near a century ago, it is exceptionally rare
            for a member of <strong>Mercator</strong> to manifest anything other
            than <Donum>Donum Silex</Donum>, much like their{' '}
            <strong>House Santoris</strong> competitors.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>
            Arborian <em>Donums</em>
          </TypographyH4>
          <TypographyP>
            Since <em>Donums</em> originated with{' '}
            <strong>Arboria&apos;s</strong> founder, <strong>Anya Arbor</strong>
            , the <strong>Arborian</strong> language has always been used to
            name the powers which <em>Wielders</em> manifest. Rough translations
            of the <em>Donums</em> most-to-least commonly found in{' '}
            <strong>Arboria</strong> are:
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Silex</Donum> The Gift of Stone
            </li>
            <li>
              <Donum>Donum Aquae</Donum> The Gift of Water
            </li>
            <li>
              <Donum>Donum Dolus</Donum> The Gift of Deciet
            </li>
            <li>
              <Donum>Donum Silva</Donum> The Gift of Nature
            </li>
          </ul>
        </div>
      </div>
      <TypographyH3>The Fourth Family</TypographyH3>
      <TypographyP>
        There is one more founding family of <strong>Arboria</strong>,{' '}
        <strong>House Prisca</strong>. The <strong>Heirs of Prisca</strong>{' '}
        inherit the responsibility of the defense of the common man. They have a
        unique fighting style which draws upon everything the{' '}
        <strong>Heirs of Prisca</strong> have learned from the foreign warriors
        living in <strong>Helix</strong>. They use this to defend those under
        threat from creatures that wander into the gentle farmland from the
        primal wilderness outside the carrefully landscaped hills around{' '}
        <strong>Helix</strong>. They endure this task alone, ridiculed and
        disdained by the other <em>Wielders</em> living the high life in{' '}
        <strong>Arboria</strong>, those with powerful enough <em>Donum</em> that
        they have never had to train a day in combat to stave off the monsters.{' '}
      </TypographyP>
      <TypographyP>
        But the <strong>Heirs of Prisca</strong> have a darker purpose which has
        gained them their veritable exile. They use their{' '}
        <Donum>Donum Dolus</Donum> to carry out the tasks that no one in{' '}
        <strong>Arboria</strong> would dare ask them to do, but know needs to be
        done. Because of this, the <strong>Heirs of Prisca</strong> are often
        blamed for many of the assassinations throughout the world, but perhaps
        that blame falls in the right place more often than not.{' '}
      </TypographyP>
      <TypographyH2>The Arborian Biome</TypographyH2>
      <TypographyP>
        In the center of <strong>Arboria</strong> stands the only city in the
        world: <strong>Helix</strong>. Nealry eighty percent of all{' '}
        <strong>Arborians</strong> live in the great city, which sprawls to
        almost thirteen miles across. The countryside around{' '}
        <strong>Helix</strong> has been cultivated and sculpted by{' '}
        <strong>Arborian</strong> <em>Wielders</em> for hundreds of years. A
        picture of the <strong>Arborian</strong> hills is one of aesthetic
        perfection. Bright green grass framed by neat square pens for livestock
        and perfectly trimmed gardens around beautifully sculpted stone houses.{' '}
      </TypographyP>
      <TypographyP>
        As a consequence of so many <strong>Arborians</strong> living near{' '}
        <strong>Helix</strong>, there remains more than ninety percent of{' '}
        <strong>Arborian</strong> territory which is untamed, dangerous forests,
        the <strong>Mamoth Willows</strong>. Very few choose to live in the{' '}
        <strong>Willows</strong>, and those who do are folk hardened by years of
        coexisting with ferocious predators that roam the woods.{' '}
        <strong>House Prisca</strong> does its best to aid those living in the{' '}
        <strong>Willows</strong>, but can only do so much in such an expansive
        wilderness.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age">
          <Button variant="outline">
            <ChevronLeft /> The First Age
          </Button>
        </Link>
        <Link href="/setting/first-age/cumeria">
          <Button variant="outline">
            Cumeria <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
