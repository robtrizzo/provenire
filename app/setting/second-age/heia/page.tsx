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
      <TypographyH1>Heia</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/shian-tor">
          <Button variant="outline">Shian Tor in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>Many Peoples, One Nation</TypographyH2>
      <TypographyP>
        Before <strong>Akil the Ruler</strong> and{' '}
        <strong>Asherah the Healer</strong> drove the dragons away from the
        lakes, what is now <strong>Heia</strong> was called{' '}
        <strong>Shian Tor</strong>. According to the histories, the{' '}
        <strong>Torans</strong> were much like the <strong>Yamans</strong> are
        now, which could not be farther from how <strong>Heians</strong> are
        today.
      </TypographyP>
      <TypographyP>
        Today, there is a combination of <strong>Toran</strong>,{' '}
        <strong>Narscillian</strong>, <strong>Gredoran</strong>, and{' '}
        <strong>Kilder</strong> descendants in <strong>Heia</strong>. This can
        be seen starkly in the nation&apos;s only city:{' '}
        <strong>Dragon Lakes</strong>.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            Despite <strong>Dragon Lakes</strong> being the center of attention
            in <strong>Heia</strong>, there is a rich culture in the
            countryside. Nomadic communities roam the grasslands in pursuit of
            herds of animals. Many small fishing villages dot the perimeter of
            the <strong>Dragon Lakes</strong>. The{' '}
            <strong>International Trade Road</strong> flows straight through the
            middle of the country. Many small settlements exist along the road
            to service and trade with travellers and merchants.
          </TypographyP>
        </div>
        <div className="w-1/2">
          <div className="h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
            <TypographyH4>Cultures Coming Together</TypographyH4>
            <TypographyP>
              As cultures mixed, some got along better than others, forming
              their own communities. Over generations, they became distinct
              cultures of their own, but still part of the whole.
            </TypographyP>
            <ul className="list-none">
              <li>
                <strong>Vagabondi</strong>: <strong>Narscillian</strong> and{' '}
                <strong>Gredoran</strong>
              </li>
              <li>
                <strong>Tochi</strong>: <strong>Toran</strong> and{' '}
                <strong>Kilder</strong>
              </li>
              <li>
                <strong>San</strong>: <strong>Toran</strong> and{' '}
                <strong>Gredoran</strong>
              </li>
              <li>
                <strong>Rasquia</strong>: <strong>Narscillian</strong> and{' '}
                <strong>Kilder</strong>
              </li>
            </ul>
          </div>
          <div className="mt-2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
            <TypographyH4>Powers of Many Peoples</TypographyH4>
            <ul className="list-none">
              <li>
                <Donum>Donum Aevum</Donum>: Gift of Eternity
              </li>
              <li>
                <Donum>Donum Ferro</Donum>: Gift of Iron
              </li>
              <li>
                <Donum>Donum Fulgur</Donum>: Gift of Lightning
              </li>
              <li>
                <Donum>Donum Lux</Donum>: Gift of Light
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TypographyP>
        The <strong>Toran</strong>, <strong>Kilder</strong>, and{' '}
        <strong>Gredoran</strong> cultures all intersect on the importance of
        physical fitness and martial prowess. <strong>Heians</strong> have
        invented dozens of martial arts and fitness routines involving weapons
        and hand-to-hand combat to beautify a favorite national passtime.
        Despite the increase in civilization in the grasslands, the wilderness
        is still dangerous - maybe even moreso these days, so the skills learned
        for fun are often used for survival.
      </TypographyP>
      <TypographyP>
        Patrols of hunters, trackers, and warriors move from village to village
        in an attempt to keep them safe from especially dangerous predators.
        Being a patrolman is one of the mre dangerous jobs one can take in{' '}
        <strong>Heia</strong>, but it comes with a great deal of respect and
        grattitude from the people they protect.
      </TypographyP>
      <TypographyP>
        From the <strong>Kilder</strong> and <strong>Gredoran</strong>{' '}
        influences, <strong>Heia</strong> has a large and well-structured
        standing military. Fortresses dot the countryside and are always
        stationed with soldiers. A military career is a common one in the
        country, especially since it&apos;s fairly likely that one won&apos;t
        see combat while in service.
      </TypographyP>
      <TypographyH2>Dragon Lakes</TypographyH2>
      <TypographyP>
        The metal city, or &ldquo;Metal Helix&rdquo; as the{' '}
        <strong>Argosi</strong> and <strong>Kiposi</strong> call it. Its layout
        is very reminiscent of <strong>Helix</strong>, as the four main streets
        spiral out from the center palace. But that is where the similarities
        end. The architecture of the inner city is glistening brass towers and
        spires. A network of elegant sky bridges span the gap between towers
        high in the sky.
      </TypographyP>
      <TypographyP>
        Noble families and the most successful merchants live in the inner city,
        often displaying their wealth on their section of the tower for all to
        see. To combat the sweltering heat of metal buildings, many of them are
        decorated heavily with clinging vines. It is a popular sport to see who
        can climb up to the top of a tower using only the vines.
      </TypographyP>
      <TypographyH3>The Outer City</TypographyH3>
      <TypographyP>
        The Outer City is a cluttered mess of cultures meeting. The
        miscellaneous groups mix and mingle, but many of the communites have a
        prevalence of one or the other.
      </TypographyP>
      <TypographyH4>Temple City</TypographyH4>
      <TypographyP>
        Temple City is home of the <strong>Tochi</strong>, a religious and
        traditional people. Temples dedicated to many <strong>Tochi</strong>{' '}
        gods are prominent throughout the area, all of which have large
        congregations. The center of their community is the the{' '}
        <strong>Cathedral of Midir, Saint of Violence</strong>. The temple is
        like a giant pyramid entered at the top and decorated with offerings of
        war.
      </TypographyP>
      <TypographyH4>Market Town</TypographyH4>
      <TypographyP>
        Market Town is home of the <strong>Vagabondi</strong>. It is known to
        the entire world as the largest and grandest trading hub. Anything can
        be found in Market Town, if only you look for it long enough in the
        happy chaos. Because of how much money and influence Market Town has,
        the mayor has almost as much power as the Governor of{' '}
        <strong>Dragon Lakes</strong>. Market Town even has its own independant
        police force.
      </TypographyP>
      <TypographyH4>Akilora</TypographyH4>
      <TypographyP>
        Named after their God and idol, the <strong>San</strong> live in
        Akilora. This community is where <strong>Dragon Academy</strong> is
        located. Although not as prestigious as{' '}
        <strong>Acedemia Arcadia</strong>, it strives to be.{' '}
        <strong>Dragon Academy</strong> is home to a more innovative and
        ambitious teaching style than other schools, and it has produced
        talented graduates for generations.
      </TypographyP>
      <TypographyH4>Concert Isle</TypographyH4>
      <TypographyP>
        Home of the <strong>Rasquia</strong>, Concert Isle is one of the louder
        places someone could find themself. Between the descendants of{' '}
        <strong>Narscillian</strong> string instruments and{' '}
        <strong>Kilder</strong> drums, the town is a constant cacophony of
        music. Fortunately for the ears, the citizens sync their beats to one
        another, so despite the noise, a grand concert of music is ongoing. The
        other thing the <strong>Rasquia</strong> love are sports - arenas are
        scattered throughout the town and spectators are always roaring their
        support.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/gredora">
          <Button variant="outline">
            <ChevronLeft /> Gredora
          </Button>
        </Link>
        <Link href="/setting/second-age/kilder">
          <Button variant="outline">
            Kilder <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
