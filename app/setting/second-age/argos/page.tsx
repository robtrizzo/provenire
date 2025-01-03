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
      <TypographyH1>Argos</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/arboria">
          <Button variant="outline">Arboria in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>Four Houses</TypographyH2>
      <TypographyP>
        <strong>Argos</strong> split into the <strong>Four Great Houses</strong>
        , all of which are in a constant cloak-and-dagger struggle to have the
        most influence over the nation and beyond. The houes control everything
        in the nation from water to crops to where citizens are permitted to
        live. And in the classical <strong>Arborian</strong> fashion, the{' '}
        <em>Wielders</em> of these houses are among the strongest in the world.
        They take care of the people beneath them, all they require in return is
        their eternal gratitude.
      </TypographyP>
      <TypographyH3>House Arbor</TypographyH3>
      <TypographyP>
        With selective marriages and carefully curated doses of{' '}
        <strong>Life Duct</strong> water, <strong>House Arbor</strong> has
        cultivated a bloodline of exceedingly powerful <em>Wielders</em> of{' '}
        <Donum>Donum Aquae</Donum>. Where in the rest of the world, the average
        power of <em>Wielders</em> has decreased, <strong>Arbor</strong>{' '}
        <em>Wielders</em> have only become stronger, even stronger than in the
        so-called <strong>Golden Age</strong>. The <strong>Argosi</strong> are
        certain that if anyone is going to succeed at <em>Ascension</em>, it
        will be an <strong>Arbor</strong>.
      </TypographyP>
      <TypographyP>
        In <strong>Argos</strong>, <strong>House Arbor</strong> controls all
        things water-related. They control the ebb and flow of the four{' '}
        <strong>Life Ducts</strong> in <strong>Helix</strong>, the deliver water
        to the fields surrounding the city, and when paid to do so, they bring
        water to other countries.
      </TypographyP>
      <TypographyP>
        In addition to proclaimed grandiose fates, <strong>Arbor</strong>{' '}
        athletes are highly sought after for many sports. Even the{' '}
        <strong>Arbor</strong> <em>Wielders</em> who aren&apos;t strong enough
        for a house position still find success in the world of sports.
      </TypographyP>
      <TypographyH3>House Santoris</TypographyH3>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            <strong>House Santoris</strong> is the most inflential house in{' '}
            <strong>Argos</strong> in the modern day. With{' '}
            <Donum>Donum Silex</Donum>, they have honed their craft at both
            architecture and warfare. <strong>Santoris</strong>{' '}
            <em>Wielders</em> are responsible for maintaining and expanding the
            city - no small task. in addition to civilian homes, grain stores,
            cathedrals, and city defenses, almost a third of the work{' '}
            <strong>Santoris</strong> does is for{' '}
            <strong>Acedemia Arcadia</strong>. The academy frequently has
            multiple large scale projects it requires structures for, and these
            structures can be seen dotting the countryside.
          </TypographyP>
          <TypographyP>
            As for warfare, the century spent fighting the{' '}
            <strong>Kiposi</strong> lead <strong>Santoris</strong> to develop a
            slew of military technology and <em>Wielding</em> tactics. One of
            the first things <strong>Santoris</strong> did in the{' '}
            <strong>Isolation War</strong> was enlarge{' '}
            <strong>Helix&apos;s</strong> walls by five times. And on top of the
            new walls is a constant garrison of <strong>Santoris</strong> war
            machines and the engineers to operate them.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>The Isolation War</TypographyH4>
          <TypographyP>
            After the departure of the <strong>New Gods</strong>, the nobility
            of <strong>Helix</strong> made their move. For years they had been
            planning in secret a way to drive foreigners out of their shining
            city.
          </TypographyP>
          <TypographyP>
            And on one <strong>Drinking Day</strong>, they poisoned the entire
            well which the foreign peoples and their local leaders drank from.
            Yes, many <strong>Arborian</strong> <strong>Helix</strong> citizens
            died as well, but it was worth the result.
          </TypographyP>
          <TypographyP>
            With foreign powers in <strong>Helix</strong> decimated, the{' '}
            <strong>Arborian</strong> leadership easily forced all foreign
            peoples out of the city - including those of rural{' '}
            <strong>Arboria</strong>. In a century long conflict,{' '}
            <strong>Argos</strong> eventually won, establishing its border
            entirely enveloped by their own people they scorned - which became
            the nation of <strong>Kipos</strong>.
          </TypographyP>
        </div>
      </div>
      <TypographyH3>House Sylva</TypographyH3>
      <TypographyP>
        <strong>House Sylva</strong> is the weakest house in modern day{' '}
        <strong>Argos</strong>, despite the large role they play.{' '}
        <Donum>Donum Sylva</Donum> was thought to have died out when{' '}
        <strong>House Mercator</strong> was destroyed in the{' '}
        <strong>Isolation War</strong>. But after the war, the <em>Donum</em>{' '}
        revived in a new family. <strong>Sylva</strong> is responsible for all
        plant life in <strong>Argos</strong>. This means crops as well as the{' '}
        <strong>Barrier Forest</strong> which surrounds the nation - a kind of
        pseudo wall to keep out the <strong>Kiposi</strong>.
      </TypographyP>
      <TypographyP>
        In addition to cultivating plants, many <strong>Sylva</strong>{' '}
        <em>Wielders</em> are tasked with stemming the encroachment of the{' '}
        <strong>Titan Pines</strong> on <strong>Argosi</strong> soil. The dark
        forest seems to have taken an interest in the cultivated fertile soil of{' '}
        <strong>Argos</strong>. <strong>Sylva</strong> toils to prevent the
        gentle farmland from being overtaken by the trees and beasts.
      </TypographyP>
      <TypographyH3>House Prisca</TypographyH3>
      <TypographyP>
        <strong>Prisca</strong>. The bloodline was thought to be extinct after
        the upheaval between ages. But after the <strong>New Gods</strong> left,{' '}
        <strong>Prisca</strong> reemerged in <strong>Argos</strong>, and
        stronger than ever. Today, <strong>House Prisca</strong> is synonymous
        with the criminal underworld in <strong>Helix</strong>. Their roots go
        deep into the affairs of the common people and the secret dealings of
        the nobility.
      </TypographyP>
      <TypographyP>
        The other houses tolerate <strong>Prisca</strong> for two reasons:
        first, they keep crime in the city in check, and second,{' '}
        <strong>Prisca</strong> has made it known to{' '}
        <strong>Helix&apos;s</strong> nobles that they know all about their
        private affairs.
      </TypographyP>
      <TypographyP>
        <strong>House Prisca</strong> isn&apos;t responsible for anything in
        particular in <strong>Argos</strong>, but <strong>Prisca</strong>{' '}
        soldiers and <em>Wielders</em> are known for their ruthlessness and
        cunning, for the legend their house gained in the{' '}
        <strong>First Age</strong>. Blaming <strong>Prisca</strong> for
        assassinations around the world has become quite popular in recent
        years. Controversial figures all across the world suddenly dying from an
        unseen blade or choking on poison: <strong>Prisca</strong> never denies
        its involvement in these events. The world&apos;s nobility largely looks
        the other way, lest they be next on <strong>Prisca&apos;s</strong>{' '}
        docket.
      </TypographyP>
      <TypographyH2>Academia Arcadia</TypographyH2>
      <TypographyP>
        The fabled <strong>Helix</strong> academy where six of the{' '}
        <strong>New Gods</strong> had been taught to wield their <em>Donums</em>
        . The most esteemed, prestigious academy for <em>Wielders</em> the world
        over: an institution given unlimited resources by the{' '}
        <strong>Argosi</strong> houses. <strong>Academia Arcadia</strong> is
        where every aspiring <em>Wielder</em> would hope to study.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            The small building where the <strong>New Gods</strong> lived while
            at the academy is no longer in use, it is now a museum and a relic
            of ages past. The new campus now spans the entire city, sporting
            hundreds of new entrants every year, and producing a graduating
            class of less than thrity. It&apos;s a place where mettle is tested,
            a crucible for the young and talented, a <em>provenire</em> as its
            headmasters are fond of saying.
          </TypographyP>
          <TypographyP>
            Despite the <strong>Isolation War</strong>,{' '}
            <strong>Academia Arcadia</strong> has always maintained its
            tradition of accepting students regardless of any factor other than
            their skill and potential. Those who come to study at the academy
            however, do have to pay a price. Either the family of the student
            can make a worthy contribution to <strong>Argos</strong> in exchange
            for the education, or the student upon falling out or graduating
            must serve in the <strong>Argosi</strong> military for as long as
            they studied.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Gifts of Antiquity</TypographyH4>
          <TypographyP>
            The world is so different since the last age. Nations, landscapes,
            cultures, the very nature of <em>Donums</em>. <strong>Argos</strong>{' '}
            rejected this change, clinging to the old ways. The{' '}
            <strong>Argosi</strong> houses have succeeded in some ways. The{' '}
            <em>Donums</em> of yore still run in their families&apos; veins.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Aquae</Donum>: The Gift of Water
            </li>
            <li>
              <Donum>Donum Dolus</Donum>: The Gift of Deceit
            </li>
            <li>
              <Donum>Donum Silex</Donum>: The Gift of Stone
            </li>
            <li>
              <Donum>Donum Sylva</Donum>: The Gift of Nature
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/anidine">
          <Button variant="outline">
            <ChevronLeft /> Anidinie
          </Button>
        </Link>
        <Link href="/setting/second-age/bwarhei">
          <Button variant="outline">
            Bwarhei <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
