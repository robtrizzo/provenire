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
      <TypographyH1>Gredora</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/gredora">
          <Button variant="outline">Gredora in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>Nomad Armies</TypographyH2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            Most <strong>Gredorans</strong> still live as their ancestors did:
            following the herds of animals across the plateaus. The difference
            is that back in the <strong>Golden Age</strong>, most caravans were
            civilians focused on crafting and mercantilism. There were very few
            wandering armies back then. But now, nearly every caravan is lead by
            a Merchant-General commanding thousands of troops. For every
            soldier, there are many more civilians, but the armies are still
            massive.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>The Failed Empire</TypographyH4>
          <TypographyP>
            <strong>Gredora</strong> is a shadow of its former power. The elders
            recount what their forefathers told them about the glory of{' '}
            <strong>Gredora</strong> in years past, about how{' '}
            <strong>Gredora</strong> was everything from the volcanic mounts all
            the way to the edge of the <strong>Titan Pines</strong>.{' '}
            <strong>Gredorans</strong> yearn for those days, and they quietly
            resolve it within themselves to bring back the might of their
            people, to be known as the most powerful once again.
          </TypographyP>
        </div>
      </div>
      <TypographyH2>The Iron Pyres</TypographyH2>
      <TypographyP>
        A twisting and flowing mass of metal, the city is simply one giant spire
        reaching into the sky. Emanating from the spire are monolithic metal
        pyres leading to the two <strong>Life Ducts</strong> closest to the
        city, to light the way for night pilgrimmages.
      </TypographyP>
      <div className="flex flex-row gap-2 p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
        <div className="w-1/2">
          <TypographyP>
            Paradoxically, while <strong>Gredora</strong> as a people have been
            crippled in the wake of the <strong>Departure</strong>, their
            descendants have become flushed with power of new variety and
            strengths.
          </TypographyP>
          <TypographyP>
            <strong>Gredora</strong> is still a culture of metal and fire, but
            the addition of <Donum>Donum Sangius</Donum> and especially{' '}
            <Donum>Donum Ira</Donum> is troubling to many - what is to become of
            a culture obsessed with rage and blood?
          </TypographyP>
        </div>
        <div className="w-1/2">
          <ul className="list-none">
            <li>
              <Donum>Donum Ferro</Donum>: The Gift of Iron
            </li>
            <li>
              <Donum>Donum Fornax</Donum>: The Gift of the Forge
            </li>
            <li>
              <Donum>Donum Fulgur</Donum>: The Gift of Lightning
            </li>
            <li>
              <Donum>Donum Ignis</Donum>: The Gift of Fire
            </li>
            <li>
              <Donum>Donum Ira</Donum>: The Gift of Rage
            </li>
            <li>
              <Donum>Donum Sangius</Donum>: The Gift of Blood
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/cumeria">
          <Button variant="outline">
            <ChevronLeft /> Cumeria
          </Button>
        </Link>
        <Link href="/setting/second-age/heia">
          <Button variant="outline">
            Heia <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
