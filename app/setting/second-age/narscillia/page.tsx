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
      <TypographyH1>Narscillia</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/narscillia">
          <Button variant="outline">Narscillia in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>The Green Road</TypographyH2>
      <TypographyP>
        The <strong>International Trade Road</strong> winds its way all the way
        through <strong>Narscillia&apos;s</strong> western region. The{' '}
        <strong>Narscillians</strong> have a different name for it though: the{' '}
        <strong>Green Road</strong>. During the <strong>Golden Age</strong>,{' '}
        <strong>Vinnicent Greenwake</strong> wandered through the desert on this
        very path, leaving behind a garden of edible plants everywhere he tread.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            To the <strong>Narscillians</strong>, this road is holy. Their sand
            ships make regular trips to the road for supplies, and they are
            imperatively cautious not to over-farm the plants. In the four
            centuries since the <strong>Departure</strong>,{' '}
            <strong>Narscillian</strong> botantists have forever been unable to
            understand what makes the plants grow out of the sand. So the{' '}
            <strong>Narscillians</strong> take what they need and leave the rest
            so that more will grow in time.
          </TypographyP>
          <TypographyH2>The Inner Desert</TypographyH2>
          <TypographyP>
            Before the <strong>Golden Age</strong>, the{' '}
            <strong>Inner Desert</strong> was one of the more dangerous biomes
            in the world. Now it is by far the most deadly, even outranking the{' '}
            <strong>Titan Pines</strong> in that respect. Where most cultures
            have endless reverence of the <strong>New Gods</strong>, the{' '}
            <strong>Narscillians</strong> only have any fondess for{' '}
            <strong>Vinnicnet Greenwake</strong>. Because no{' '}
            <strong>Narscillian</strong> can understand why the{' '}
            <strong>New Gods</strong> created such a horrible place.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Desert Winds</TypographyH4>
          <TypographyP>
            As the years passed and more <em>Donums</em> manifested in{' '}
            <strong>Narscillian</strong> children, perhaps no other has had
            quite the impact of <Donum>Donum Ventus</Donum>, or the Gift of
            Wind. Wind power revolutionized <strong>Narscillian</strong>{' '}
            caravans. Where before they were dragged by massive beasts of
            burden, now they are propelled by wind caught in massive sails.
          </TypographyP>
          <TypographyP>
            These sand ships can be worked up to great speeds, some designed so
            that they can ramp off of dunes and glide for a short time.
          </TypographyP>
          <TypographyP>
            Other than <Donum>Donum Ventus</Donum>, the{' '}
            <strong>Narscillians</strong> still recieve their traditional{' '}
            <em>Donums</em>.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Lux</Donum>: Gift of Light
            </li>
            <li>
              <Donum>Donum Tueor</Donum>: Gift of Beholding
            </li>
            <li>
              <Donum>Donum Umbra</Donum>: Gift of Shade
            </li>
            <li>
              <Donum>Donum Ventus</Donum>: Gift of Wind
            </li>
          </ul>
        </div>
      </div>
      <TypographyP>
        Great crystals surround the <strong>Inner Desert</strong>, towering
        hundreds of feet high and radiating such heat that approaching can be
        deadly. The heat from the crystals has melted the surrounding sand into
        glass. Not only that, but the beasts that roam the{' '}
        <strong>Inner Desert</strong> are unlike anything seen in the rest of
        the world. True monstrous behemoths that stop at nothing to devour
        everything in their path. The crystals keep the beasts in like a cage,
        but it&apos;s not unheard of for one to break free.
      </TypographyP>
      <TypographyH3>Relicts</TypographyH3>
      <TypographyP>
        One out of thirty children are selected to become a{' '}
        <strong>Relict</strong>. Soldiers trained from birth to be{' '}
        <strong>Narscillia&apos;s</strong> spear and shade.{' '}
        <strong>Relict</strong> children have the fate of their people on their
        shoulders. They have the lessons of their forefathers drilled into them.
      </TypographyP>
      <blockquote>Duty before death.</blockquote>
      <TypographyP>
        <strong>Relict</strong> trainees are sent off to academies across the
        world before they come back to he desert to serve. Once they return,
        half are sent to the <strong>Inner Desert</strong> to find the flowers
        necessary to open <strong>Life Ducts</strong> of the{' '}
        <strong>Outer Desert</strong>. The other half are sent North to help
        reclaim the <strong>Floodplains</strong> they lost long ago.
      </TypographyP>
      <TypographyH2>Northern Floodplains</TypographyH2>
      <TypographyP>
        Once <strong>Akil the Ruler</strong> had driven dragons from the{' '}
        <strong>Toran</strong> lakes, they migrated West. This drove the western{' '}
        <strong>Torans</strong> out of their homes and forced them to move East.
        This left vast tracks of territory where dragons held, but men could not
        live.
      </TypographyP>
      <TypographyP>
        After the <strong>Departure</strong>, the <strong>Narscillians</strong>{' '}
        declared the territory theirs and marched to drive the dragons out once
        and for all. But to their dismay, they discovered that the dragons had
        an ally. One of the nameless, inscrutable <strong>Old Gods</strong> had
        somehow, some way, escaped or evaded the <strong>New Gods</strong> and
        was now aiding the dragons.
      </TypographyP>
      <TypographyP>
        For the last four hundred years, the <strong>Narscillians</strong> have
        been mounting invasion after invasion to claim the rivers and bay of the
        North, but the <strong>Old God</strong> they named{' '}
        <strong>Old and Terrible Boro</strong> and the dragons have always
        bested them.
      </TypographyP>
      <TypographyP>
        <strong>Boro</strong> never fights on its own, but it has attracted the
        patronage of thousands. Exiles, miscreants, theives who have been driven
        out of their societies have found a place in the{' '}
        <strong>Floodplains</strong> doing the bidding of the{' '}
        <strong>Old God</strong>. Even worse, some armies that have marched
        North to fight have never returned, not a word. The{' '}
        <strong>Narscillians</strong> fear that <strong>Boro</strong> has
        somehow turned their loyalty.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/kipos">
          <Button variant="outline">
            <ChevronLeft /> Kipos
          </Button>
        </Link>
        <Link href="/setting/second-age/yama">
          <Button variant="outline">
            Yama <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
