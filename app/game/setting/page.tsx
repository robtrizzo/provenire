import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import Blood from '@/components/stats/blood';
import FactoryMap from '@/components/ui/factory-map';

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
      <TypographyH3>Lairs of the Steel Trap</TypographyH3>
      <TypographyP>
        Within the factory-prison-fortress there are distinct{' '}
        <span className="italic">&quot;sectors&quot;</span>, though the workers
        call them lairs. Each is isolated from its neighbors, secured with vault
        doors and enforcers to guard them. Sometimes <strong>runners</strong>{' '}
        are sent between, though it is a perilous journey into the unknown
        across the vault doors.
      </TypographyP>
      <FactoryMap />
      <TypographyH4>Fabrication</TypographyH4>
      <TypographyP>
        This is where our protagonists live. The background noise of their home
        is hissing, buzzing, sawing, grinding, clattering. The air is acrid with
        metal dust and tar smoke. Large chambers that may once have been open
        are now crammed full with dilapidated machinery and shanty homes.
        Workers maintain machines that rarely produce the same thing twice.
        Incomprehensible designs added to each next shipment. The floor is
        littered with piles of scrap and debris.
      </TypographyP>
      <TypographyP>
        <strong>The Bends</strong>: a neighborhood built on top of a factory
        beam that got bent to a near right angle at some point in the past. Some
        elders still debate wheter it was an overseer or manufacturing defect
        that caused it. Regardless of the truth, it&apos;s now a community
        landmark. <span className="italic">Rub the bend for good luck.</span>.{' '}
        <strong>Gorger</strong> and his gang of enforcers rule here. Anyone out
        of line goes missing.
      </TypographyP>
      <TypographyP>
        <strong>Stairwell</strong>: Seventy two flights of stairs from Fab to
        the Pits. Every corner you turn on the stairs has you passing through
        someone's home. Chains, ladders, and ramshackle platforms decorate the
        vertical neighborhood. This is where the <strong>Youngers</strong> stake
        their claim: bullying and extorting the most vulnerable for food and
        materials.
      </TypographyP>
      <TypographyP>
        <strong>Lofts</strong>: Thousands of homes arranged on catwalks and
        platforms above the main factory floor. Difficult to tell what was
        original construction and what has been added over the generations.
        It&apos;s warm there, but <strong>Amalina</strong> and her{' '}
        <strong>Shrikes</strong> have a habit of dropping from the darkness
        above and terrorizing the community.
      </TypographyP>
      <TypographyP>
        <strong>Fab Floor</strong>: Houses stacked on each other between the
        machines. Always a risky proposition because of the factory&apps;s
        fickleness. This is where the work gets done. Where hands get stained
        with oil and blood. <strong>The Scarbacks</strong> patrol these streets.
        Everyone works: most get fed. That&apos;s the way of things. No one
        slacks off on their watch. No one makes trouble for Fab. Or else.
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
