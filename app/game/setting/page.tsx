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
      <TypographyH1 className="">
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
      <TypographyH2 id="kingwulf">Kingwulf</TypographyH2>
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
      <TypographyH2 id="liberty-city">Liberty City</TypographyH2>
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
      <TypographyH2 id="the-steel-trap">The Steel Trap</TypographyH2>
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
      <TypographyH4 id="fabrication">Fabrication</TypographyH4>
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
        someone&apos;s home. Chains, ladders, and ramshackle platforms decorate
        the vertical neighborhood. This is where the <strong>Youngers</strong>{' '}
        stake their claim: bullying and extorting the most vulnerable for food
        and materials.
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
        machines. Always a risky proposition because of the factory&apos;s
        fickleness. This is where the work gets done. Where hands get stained
        with oil and blood. <strong>The Scarbacks</strong> patrol these streets.
        Everyone works: most get fed. That&apos;s the way of things. No one
        slacks off on their watch. No one makes trouble for Fab. Or else.
      </TypographyP>
      <TypographyH2>Culture</TypographyH2>
      <TypographyP>
        <strong>Rath</strong> is vast. It stretches from the King&apos;s jungle
        doorstep to the northern Tarakon Bogs to Ilswinth&apos;s sandswept dunes
        in the West. The people of Rath are as varied as the land itself. But
        there are common threads that bind them all.
      </TypographyP>
      <TypographyH3>Blood</TypographyH3>
      <TypographyP>
        Kingwulf&apos;s holy bloodline reigns supreme. The three bestial
        bloodlines (wolves, bears, crows) beneath him: bloodline of the wolf
        above the rest. But even further, there is a convoluted matrix of lesser
        geniologies and hierarchies which dictate one&apos;s place in society.
      </TypographyP>
      <TypographyP>
        It is a subject of fascination for Rath&apos;s high society, though only
        understood by geniological scholars. Heritage outside of the beastly
        bloodlines is undesirable, though if it is in a small proportion and
        hails from a notable bloodline, it is desirable. Being capable of
        bestial transformation is incredibly important, though those only
        capable of partial transformation is looked down upon. Being birthed
        from a mother in a bestial form is confoundingly undesirable as opposed
        to being birthed from a human mother. It goes on and on. Most people
        colloquially use the terms <strong>thickblood</strong> (meaning{' '}
        <i>good</i>, <i>powerful</i>, <i>pure</i>, higher in the hierarchy) and{' '}
        <strong>thinblood</strong> (meaning lower) to approximate.
      </TypographyP>
      <TypographyH3>Marriage</TypographyH3>
      <TypographyP>
        The obsession with bloodline extends to marriage and children.{' '}
        <strong>Thickblooded</strong> Rathi view it as their societal duty to
        spread their bloodline as far as they can. Though paradoxically, as much
        of the geniological drivel is, most Rathi highborns are unwilling to
        have children with <strong>thinbloods</strong>.
      </TypographyP>
      <TypographyP>
        Even more pernicious is the tradition of marriage itself. To the Rathi,{' '}
        <strong>Kingwulf</strong> posesses the right to marry any woman. And so
        anyone who wants to marry needs <strong>Kingwulf&apos;s</strong>{' '}
        permission first. And he does not give it lightly. Before one can take a
        wife, they must prove themselves in the eyes of the King. This is
        typically military or hunting success, though there is no consistent
        metric.
      </TypographyP>
      <TypographyP>
        Once they have been granted a wife, they may choose any unmarried woman
        in the empire. And that man may keep proving himself and keep taking
        wives for as long as <strong>Kingwulf</strong> chooses to grant them.
        The women they choose get no say in the matter. Their only way out is to
        kill their husband. And many do; it&apos;s seen as what happens when a
        man chooses a wife outside of his station. This has created a cultural
        phenomenon of powerful and desirable women with a string of dead
        husbands. The more husbands they kill, the more powerful her bloodline
        clearly is - which in turn makes her even more desirable. These women
        are coined <i>dire wives.</i>
      </TypographyP>
      <TypographyP>
        It would be impossible for <strong>Kingwulf</strong> to give his spoken
        permission to every marriage in the empire. So this right has unspokenly
        passed on to Dukes and even some lesser nobility as the King&apos;s
        proxies. <strong>Kingwulf</strong> never spoke this into law, but he has
        not spoken against it either. And so marriage rights have become as
        complicated as the matrix of bloodline heirarchy is. Who exactly can
        give marriage permissions? What happens when two nobles disagree on
        giving permission? Since the King&apos;s proxies have authority to marry
        any woman, what happens when they use that right in another proxy&apos;s
        territory?
      </TypographyP>
      <TypographyP>
        In reality, this means the powerful hoard wives and the weak are left to
        work and toil desperately for their approval. The term for these
        desperate unmarried men is simply: <i>unworthy</i>. A population of men
        willing to resort to more and more extreme lengths to gain a wife.
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
