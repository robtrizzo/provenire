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
      <TypographyH1>Kipos</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/arboria">
          <Button variant="outline">Arboria in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>The Mountain</TypographyH2>
      <TypographyP>
        The most important figure in <strong>Kipos</strong> is the{' '}
        <strong>Mountain</strong>. Not just a landmark, but their God. In the{' '}
        <strong>Isolation War</strong>, what became the <strong>Kiposi</strong>{' '}
        were stranded in the wilderness outside of <strong>Helix</strong> - no
        water, no shelter, no clue what to do next. Without even a prayer, they
        were saved by the <strong>Mountain</strong>. Fresh, cold water flowed
        from its peak, creating a twisting river that carved a path through the
        woods.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            The <strong>Kiposi</strong> believe that within the{' '}
            <strong>Mountain</strong> is a god, trapped, but still alive, and
            blessing the <strong>Kiposi</strong> people with the miracle of the
            river. The <strong>Kiposi</strong> engage in many forms of worship,
            but the main way they show their fealty is a fanatical commitment to
            brutal combat sports.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Mystery Mountain</TypographyH4>
          <TypographyP>
            Before the <strong className="text-white">Isolation War</strong>,
            there was never a mountain on the horizon anywhere in{' '}
            <strong className="text-white">Arboria</strong>. Where did the{' '}
            <strong className="text-white">Mountain</strong> come from? Why did
            it appear when it did? How does water flow from the peak? No one
            knows.
          </TypographyP>
        </div>
      </div>
      <TypographyH2>Greetings to All</TypographyH2>
      <TypographyP>
        <strong>Greetings to All</strong> is a strange name for a city, but it
        suits the <strong>Kiposi</strong>. The city is built from sculpted stone
        in a tiered design. Towering cathedrals to the <strong>Mountain</strong>{' '}
        and expansive sports arenas are visible from outside the city, and
        through the center of it all flows a waterfall from the{' '}
        <strong>Heart of the Mountain</strong>.
      </TypographyP>
      <TypographyP>
        <strong>Greetings to All</strong> is also famous for its lively attitude
        and its graciousness to visitors and guests.{' '}
        <strong>Narscillian</strong> caravarns visit the city several times a
        year, sparking festivals for weeks. Some <strong>Narscillians</strong>{' '}
        have liked the city so much that over the generations, some caravans
        have decided to stay. This lead to the creation of the lower part of the
        city at the foot of the mountain, what the locals call the Circuis - a
        sprawling ring of buildings crafted out of the disassembled caravans.
      </TypographyP>
      <TypographyH2>Turios</TypographyH2>
      <TypographyP>
        The capitol of <strong>Kipos</strong>, modled closely after{' '}
        <strong>Helix</strong>, it is a circular walled city, except{' '}
        <strong>Turios</strong> sports a massive dock where much of city life
        revolves around. Fish are abundant in <strong>Lake Ozeros</strong>, and
        they are the main food source of the city. Dozens, if not hundreds of
        fishing vessels are always coming and going from the docks, bringing in
        their hauls.
      </TypographyP>
      <TypographyP>
        Fishing is not a peaceful life though. In addition to smaller schools of
        fish, there are larger predators in the deep waters of{' '}
        <strong>Ozeros</strong>, predators dangerous enough to pose a threat to
        an unprepared fishing skiff. And sice fish can only be found in{' '}
        <strong>Ozeros</strong> and <strong>Dragon Lakes</strong>, salted fish
        can be worth their weight in coins to foreign nobles. Competition for
        the most delicious fish is intense; many ships get sunk in the struggle.
      </TypographyP>
      <TypographyH2>Bastion</TypographyH2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            <strong>Bastion</strong> was created to be a fortress in the{' '}
            <strong>Beast War</strong>, an ongoing conflict between{' '}
            <strong>Kipos</strong> and <strong>Fenrir</strong>. During the war,
            many civilians have migrated to its walls for safety. Today, it
            still fulfills its purpose as a fortress, still protecting the
            border from the <strong>Raven Flock</strong>.{' '}
            <strong>General Pelopidas</strong> commands the{' '}
            <strong>Eagle Militia</strong> in battles against the{' '}
            <strong>Duke of Ravens</strong>, <strong>Ansisamslo</strong>.
          </TypographyP>
          <TypographyP>
            Everyday life and war are one and the same for the people of{' '}
            <strong>Bastion</strong>, and their escape are particularly brutal
            varieties of <strong>Kiposi</strong> combat sports and gladitorial
            combat with captured <strong>Fenrir</strong> soldiers; the line
            between professional athlete and soldier has become blurry here.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Powers of the Mountain</TypographyH4>
          <TypographyP>
            Despite being the descendants of <strong>Arborians</strong> as well
            as so close to the <strong>Argosi</strong>, the{' '}
            <strong>Kiposi</strong> have a completely different set of{' '}
            <em>Donums</em> that they credit to the <strong>Mountain</strong>.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Iter</Donum>: Gift of Journey
            </li>
            <li>
              <Donum>Donum Lignum</Donum>: Gift of Wood
            </li>
            <li>
              <Donum>Donum Messis</Donum>: Gift of Harvest
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/kilder">
          <Button variant="outline">
            <ChevronLeft /> Kilder
          </Button>
        </Link>
        <Link href="/setting/second-age/narscillia">
          <Button variant="outline">
            Narscillia <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
