import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from '@/components/ui/typography';
import Blood from '@/components/stats/blood';

export default async function Page() {
  return (
    <>
      <TypographyH1>
        <span className="italic">Provenire</span>, Era 3
      </TypographyH1>
      <TypographyH2>Rath</TypographyH2>
      <TypographyP>
        The world of bygone ages, its lands, peoples, history: it&apos;s all
        gone. Cycle after cycle, slowly devoured by the ever-ravenous{' '}
        <strong>Rathi Empire</strong> and its God King. Rath is mighty. Rath is
        eternal. Rath is all that is left, save for a desperate few who struggle
        for survival in the world&apos;s fringes...{' '}
        <span className="italic">
          or so they say within the King&apos;s reaches
        </span>
        .
      </TypographyP>
      <TypographyH2>Kingwulf</TypographyH2>
      <TypographyP>
        Immortal God King of the <strong>Rathi Empire</strong>. They{' '}
        <span className="italic">say</span> he has been King since the day the
        world came to be. They <span className="italic">say</span> he gifted the
        sun, the wind, the soil, fire and most importantly <Blood /> to all. The{' '}
        <span className="italic">say</span> he takes the form of a massive wolf,
        the like of which causes the earth to tremble and his bloodline to fall
        in worship. They <span className="italic">say</span> that it is by his
        eternal love that the world strives on day after day. They{' '}
        <span className="italic">say</span> that one day, he will bless the
        world one final time when he devours it.
      </TypographyP>
      <TypographyH2>Liberty City</TypographyH2>
      <TypographyP>
        Our story begins in <strong>Vizgod</strong>, a territory of the{' '}
        <strong>Rathi Empire</strong> characterized by a forest of massive pines
        stretching a mile high or more. Oversized and deadly predators roam
        these wildlands. In <strong>Vizgod</strong> are a few cities, but our
        story takes place in <strong>Liberty City</strong>. It&apos;s a
        sprawling industrial affair. Some compare it to a prison more than a
        city, since fleeing into the <strong>Titan Pines</strong> is almost
        certain death.{' '}
        <span className="italic">
          But our protagonists know nothing of Vizgod or its hostile
          environment. They only know the dark chambers of their home.
        </span>
      </TypographyP>
      <TypographyP>
        Within <strong>Liberty City</strong> there are those{' '}
        <span className="italic">with</span> and those{' '}
        <span className="italic">without</span>. Half shanty town half factory
        district, <strong>The Kennels</strong> are one such place for the ones{' '}
        <span className="italic">without</span>. Thick smoke chokes the streets,
        King&apos;s Guards prowl and devour anyone out of line, and the
        overseers maintain their vice grip on the food supply.
      </TypographyP>
      <TypographyP>
        The source of smoke in the streets, the reason for punitive overseer
        patrols, the dark splotch in <strong>The Kennel&apos;s</strong> skyline
        is the <strong>Steel Trap</strong>. A munitions factory for the{' '}
        <strong>Royal Rathi Army</strong>. A truly miserable and hopeless place.
        This is where our protagonists come in. They are the unluckiest of the
        unlucky wretches in this wretched town, in a wretched city, in a
        wretched forest, in a wretched empire.{' '}
        <span className="italic">
          But our protagonists know nothing of the slick city streets or its
          shanty towns. They only know screeching pipes and roaring furnaces.
        </span>
      </TypographyP>
      <TypographyH2>The Steel Trap</TypographyH2>
      <TypographyP>
        A factory full of workers pushed to their breaking point. Unlovingly
        named <span className="italic">The Steel Trap</span>, it produces
        munitions for the <span className="italic">Royal Rathi Army</span>. Its
        workers labor among a dangerous matrix of twisted, screeching machinery;
        breathe in the foulness that leaves them dizzy for days; and must
        withstand the casual abuses from the overseers. Towering above the
        workforce is <strong>The Master</strong>, their fearsome foreman who
        weilds power with fear and violence.
      </TypographyP>
      <TypographyP>
        Punishing and brutal work only punctuated by the sleeping hours. Workers
        wake in cramped quarters never meant to house so many. Some are lucky
        enough to live in the dormitories constructed generations ago. Most take
        shelter in cobbled lean-tos fit between, around, and above the hissing
        machines.
      </TypographyP>
      <TypographyP>
        A trustless, friendless place. Just like how children learn to tune out
        the noise of the machines, they no longer hear the{' '}
        <span className="italic">drone</span>. A perpetual low rumble, like the
        factory itself growling an inaudible warning. One that becomes a device
        of control. <span className="italic">&quot;It is natural&quot;</span>{' '}
        they say,{' '}
        <span className="italic">
          &quot;for your body to know your place and bow. It is in your blood to
          serve.&quot;
        </span>
      </TypographyP>
      <TypographyP>
        But even unquestioning obedience doesn&apos;t mean a full belly. Food is
        scarce. Dolled out meagerly by the overseers, and only to their most
        loyal followers. The rest must beg, scrounge, or fight to survive.
      </TypographyP>
      <TypographyP>
        But everyday life goes on. The workers push on. Families, friends,
        communities quietly defy their conditioning, defy their overseers, defy
        the <span className="italic">drone</span> and come together to make life
        more bearable for each other. Quietly, secretly, they dream of a better
        future.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game">
          <Button variant="outline">
            <ChevronLeft /> Introduction
          </Button>
        </Link>
        <Link href="/game/core-system">
          <Button variant="outline">
            Core System <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
