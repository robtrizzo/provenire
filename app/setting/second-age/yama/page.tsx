import Donum from '@/components/stats/donum';
import {
  TypographyH1,
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
      <TypographyH1>Yama</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/gredora">
          <Button variant="outline">Gredora in the First Age</Button>
        </Link>
        <Link href="/setting/first-age/shian-tor">
          <Button variant="outline">Shian Tor in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>Eternal Obligation</TypographyH2>
      <TypographyP>
        The <strong>Yamans</strong> still adhere to their ancient dogma of
        honor, <strong>Dictate</strong>. The <strong>Heians</strong> also
        observe <strong>Dictate</strong> to some extent, but the{' '}
        <strong>Yamans</strong> take it far more seriously.
      </TypographyP>
      <TypographyP>
        Within the confines of <strong>Dictate</strong>, obligation an
        incredibly serious matter. Those with so much obligation that they could
        no longer confidently partake in society would exile themselves into the
        mountains.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            During the <strong>Golden Age</strong>, two of the{' '}
            <strong>New Gods</strong>, <strong>Qorrin the Destroyer</strong> and{' '}
            <strong>Vinnicent Greenwake</strong> created the{' '}
            <strong>Hidden City</strong>, giving the forlorn mountain exiles a
            home. In their eyes, the mountain exiles had incured the greatest
            obligation of all. To this day, the <strong>Yamans</strong> insist
            it&apos;s still an obligation unpaid.
          </TypographyP>
          <TypographyP>
            As the years flowed, many <strong>Gredorans</strong> fled to the{' '}
            <strong>Hidden City</strong> to escape the{' '}
            <strong>Anidinian Civil War</strong>. This included many military
            forces and <em>Wielders</em> in addition to civilians. The{' '}
            <strong>Yamans</strong> were accepting and welcoming, as long as the
            foreigners abided by the <strong>Dictate</strong>.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>Mountain Exiles</h6>
          <TypographyP>
            Before the <strong>Golden Age</strong>, what is now{' '}
            <strong>Heia</strong> was a nation called <strong>Shian Tor</strong>
            . The legends say that the <strong>Toran</strong> tribes who were
            too weak to contest for water were banished into the northern
            mountains to die. But the legends were wrong. They toiled on, making
            this new existence their own. By the time the{' '}
            <strong>New Gods</strong> surveyed the mountains, there were tens of
            thousands of banished <strong>Torans</strong> living on the icy
            peaks.
          </TypographyP>
        </div>
      </div>
      <TypographyP>
        There was peace for a time as the city had more than enough water for
        all. But once the <strong>Gredorans</strong> were comfortable, they
        began to question the <strong>Yaman</strong> way. They objected to
        living under the &ldquo;archaic and punishing&rdquo;{' '}
        <strong>Dictate</strong>. The <strong>Yamans</strong> were unwilling to
        let go of their ways and the <strong>Gredorans</strong> were no longer
        willing to live under them.
      </TypographyP>
      <TypographyP>
        Conflict began and became the <strong>War of Refuge</strong> over
        ownership of the <strong>Hidden City</strong>. It was long and bloody,
        as the <strong>Gredorans</strong> are experts at warfare. But eventually
        they were driven out of the mountains by the <strong>Yamans</strong>. It
        didn&apos;t end there though. The <strong>Yaman</strong> commander,{' '}
        <strong>General Oyami</strong>, rallied his forces to push farther. He
        lead the <strong>Yamans</strong> to not only retake the northern
        mountains, but to conquer the southern mountains and volcanoes of{' '}
        <strong>Gredora</strong>.
      </TypographyP>
      <TypographyH2>The Hidden City</TypographyH2>
      <TypographyP>
        During the <strong>Golden Age</strong>, two of the{' '}
        <strong>New Gods</strong> disappeared for some time. When they
        reemerged, they proclaimed that they had built a hidden city with
        unlimited water in the mountains, but they would not say where it was or
        how to find it. The mountain exiles of <strong>Shian Tor</strong> were
        the first ones to find it.
      </TypographyP>
      <TypographyP>
        The city itself is said to be the most spectacular in all the world.
        Beautiful flowing walls decorated with lookout towers ring the city,
        many claim them to be even stronger than the walls of{' '}
        <strong>Helix</strong>. Within the city, every home is a palace large
        enough to support many families. Along all of the main streets are
        channels of water and gardens with edible plants.
      </TypographyP>
      <TypographyP>
        Greatest of all, hovering high above the city is{' '}
        <strong>The Water Moon</strong>. A massive enigmatic orb of water which
        drips and fills the city&apos;s central basin from which all of the
        channels flow. The <strong>Water Moon</strong> is both the city&apos;s
        greatest asset and it&apos;s diety.
      </TypographyP>
      <TypographyH3>Twin Dictates</TypographyH3>
      <TypographyP>
        Inscribed on the doors of the <strong>Hidden City</strong> is an oath
        created by <strong>Vinnicent Greenwake</strong> and{' '}
        <strong>Qorrin the Destroyer</strong>. The oath requires those who wish
        to live in the city to swear not to engage in any kind of violence while
        inside the walls. Breaking this oath means banashment from the city.
      </TypographyP>
      <TypographyP>
        While following this, the <strong>Yamans</strong> also came to hold an
        even more strict version of the <strong>Dictate</strong> as the
        generations were taught of the horrors of the <strong>Gredorans</strong>{' '}
        who have no honor. The <strong>Yamans</strong> named observing these two
        systems the <strong>Twin Dictates</strong>.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            During the <strong>War of Refuge</strong>, the{' '}
            <strong>Gredorans</strong> broke the oath to gain the advantage in
            the city, almost winning the war outright since the{' '}
            <strong>Yamans</strong> were unwilling to fight inside the walls.
            After the war, <strong>Great Moon Priests</strong> decided that a
            sworn oath is not powerful enough to protect the city. The priests
            called on the <strong>Water Moon</strong> to bind the{' '}
            <strong>Twin Dictates</strong> with magic, to tie a thread to those
            who swear the oath, to sever that thread were they ever to break
            their word.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <h6>Power of the Dictates</h6>
          <TypographyP>
            <strong>Yama</strong>, like <strong>Kipos</strong> seems to have
            gained the most new and unusual <em>Donums</em> of the{' '}
            <strong>Second Age</strong>.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Cinis</Donum>: Gift of Ash
            </li>
            <li>
              <Donum>Donum Ignis</Donum>: Gift of Fire
            </li>
            <li>
              <Donum>Donum Luna</Donum>: Gift of the Moon
            </li>
            <li>
              <Donum>Donum Ossis</Donum>: Gift of Bones
            </li>
          </ul>
        </div>
      </div>

      <TypographyP>
        Now, to enter the city, one must cut their palm and touch the inscribed
        gates, uttering the oath of the door and swearing to follow the{' '}
        <strong>Twin Dictates</strong> while in the walls. If anyone breakes the
        oath, they are branded upon their face for all to see; water dries
        before it enters their mouth, plants wither away at their touch. The
        city becomes inhospitable for them.
      </TypographyP>
      <TypographyH3>Eternal Protectors</TypographyH3>
      <TypographyP>
        In adherence to tradition, the <strong>Yamans</strong> never built a
        road to the <strong>Hidden City</strong>. The way to the city is only
        passed by word of mouth and it&apos;s a perilous journey. In addition,
        travellers are often unnerved by the unmoving sentinels dotting the
        mountainside. The <strong>Priests of the Moon</strong> are an order that
        still work to protect the city from foreign invasion, and to do so, they
        utilize one of the new <em>Donums</em> native to <strong>Yama</strong>:{' '}
        <Donum>Donum Ossis</Donum>. All <strong>Yamans</strong> who die are said
        to be blessed by the priests to live on forever as unwavering watchers
        and protectors of the land.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/narscillia">
          <Button variant="outline">
            <ChevronLeft /> Narscillia
          </Button>
        </Link>
        <Link href="/setting/third-age">
          <Button variant="outline">
            Third Age <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
