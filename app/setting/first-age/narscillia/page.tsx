import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
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
      <TypographyBlockquote>
        It&apos;s truly special, what they have. Everywhere they go, they make
        people happy, hopeful, excited to meet new friends.
      </TypographyBlockquote>
      <TypographyH2>Celebrate Light, Life</TypographyH2>
      <TypographyP>
        Anyone nearby can hear the sounds of boisterous music and mischivious
        laughter far before a <strong>Narscillian</strong>{' '}
        <em>compagnia&apos;s</em> shadowy globe comes into view. Flutes, drums,
        and light hearted voices boom wherever a <em>compagnia</em> goes. These
        sounds are greeted with smiles and welcome by any <strong>Toran</strong>
        , <strong>Arborian</strong>, or <strong>Cumerian</strong> close enough
        to the border to take temporary part in the daily celebrations.
      </TypographyP>
      <TypographyP>
        The <strong>Narscillians</strong> are always more than happy to have
        guests, welcoming all who wish to join and travel with them as long as
        they wish. The <em>compagnia</em> never stops moving though, so the
        occasional inebriated guest finds themselves waking up many miles from
        home.
      </TypographyP>
      <TypographyP>
        These celebrations entail dancing, drinking, games of contest, and the
        music <strong>Narscillians</strong> are famous for. All of which is
        under a dome of shadow, shielding those underneath from the harsh rays
        of the desert sun.
      </TypographyP>
      <TypographyP>
        And as the night draws near, the dome of shadow is replaced by the warm
        glow of <strong>Narscillian</strong> <Donum>Donum Lux</Donum> lighting
        the way of the perpetual march.
      </TypographyP>
      <TypographyH2>Song of the Hunt</TypographyH2>
      <TypographyP>
        To most, <strong>Narscillian</strong> music sounds chaotic and
        uproarious, but one with the trained ear can tell the antics of the{' '}
        <em>compagnia</em> simply by listening. Many of the creatures of the
        desert are fearsome to those untrained in their ways. But the{' '}
        <strong>Narscillians</strong> know that these predators have poor
        eyesight and hunt by sound alone.
      </TypographyP>
      <TypographyP>
        So when <strong>Narscillian</strong> hunters trail off the{' '}
        <em>compagnia</em>, the music will change to overwhelm the senses of
        mosnters: higher pitched for some, lower for others. With the music
        drowning out the sound of the hunters, they make short work of their
        quarry and bring back a feast for their compatriots.
      </TypographyP>
      <TypographyP>
        These creatures have excellent camoflage however, especially from those
        travelling on foot. So the <strong>Narscillians</strong> have
        camel-pulled wagons with crow&apos;s nests attached. Lookouts scour the
        sand dunes from these vantage points for potential threats, signlalling
        danger and direction with a unique flute, blending their alert perfectly
        into the song of the <em>compagnia</em> of course.
      </TypographyP>
      <TypographyH2>
        <em>Mantello Dovere</em>
      </TypographyH2>
      <TypographyBlockquote>
        Ours is the measure which has no limit, the task which has no end.
      </TypographyBlockquote>
      <TypographyP>
        So goes the mantra of the <em>Relicts</em>, those few burdened with the
        weight of all <strong>Narscillia</strong>. The <em>Relicts</em> bear the{' '}
        <em>Mantello Dovere</em>, or the Mantra of Duty. Every five years, the
        children under the age of five are entered into a lottery. One child is
        selected to bear the <em>Mantle</em>, and given a red cape to symbolize
        their life&apos;s duty.
      </TypographyP>
      <TypographyP>
        The <em>compagnias</em> have always been effective at gathering food and
        fighting the foes of the outer desert. But as{' '}
        <strong>Anya Arbor</strong> showed the <strong>Narscillians</strong>, it
        requires significant offering to open a <strong>Life Duct</strong>. The
        kind of offering that can only be found by those who press deeper into
        the desert. A rare blue flower grows around strange crystals scattered
        throughout the desert. These flowers are the only way to open the{' '}
        <strong>Life Ducts</strong> in <strong>Narscillia</strong>.
      </TypographyP>
      <TypographyBlockquote>
        <TypographyP>
          That tone, the one that sounds kind of sad, what is that one for?
        </TypographyP>
        <TypographyP>A red cape on the horizon.</TypographyP>
      </TypographyBlockquote>
      <TypographyP>
        Not only is it too dangerous for the <em>compagnias</em> to venture into
        the inner desert, the time it would take them to find a crystal, find
        their way out, and travel to a <strong>Life Duct</strong> in the outer
        desert would be far too great. So a radical course was taken: a select
        few would roam the inner desert, collecting flowers and bringing them to
        the <strong>Life Ducts</strong> so that fresh water would be available
        whenever a <em>compangia</em> arrived.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            The <em>Manello Dovere</em> does not only apply to keeping the{' '}
            <em>compagnias</em> supplied, but to protecting them as well.{' '}
            <em>Relicts</em> are the front line defense against creatures of the
            inner desert who find their way to the rim. And when the{' '}
            <strong>Narscillians</strong> declare war, the <em>Relicts</em> are
            their elite agents, doing what must be done, <em>whatever</em> must
            be done to protect their people.
          </TypographyP>
          <TypographyP>
            To bear the <em>Mantle</em> means to lead a solitary life. If a{' '}
            <em>Relict</em> is lucky, they may meet another of their order in
            their travels, but mostly they wander alone, facing the desert for
            the good of their kinsmen. Suffering so that others don&apos;t need
            to. For a <em>Relict</em>, death would truly be a release from their
            cruel life, but none have ever relented, for if they do, they know
            it means the deaths of their people.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>
            Shepherds of the <em>compagnia</em>
          </TypographyH4>
          <TypographyP>
            <strong>Narscillians</strong> have some of the most rigid{' '}
            <em>Donum</em> heredities, with nearly all{' '}
            <strong>Narscillian</strong> <em>Weilders</em> developing one of two{' '}
            <em>Donums</em>, oftentimes both.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Lux</Donum>: The Gift of Light
            </li>
            <li>
              <Donum>Donum Umbra</Donum>: The Gift of Shade
            </li>
          </ul>
          <TypographyP>
            Every few generations, the <strong>Narscillians</strong> believe the
            spirit of their ancestors bless a child with a particular{' '}
            <em>Donum</em> which only one <em>Wielder</em> has ever had at one
            time.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Tueor</Donum>: The Gift of Beholding
            </li>
          </ul>
        </div>
      </div>
      <TypographyP>
        Regardless of a <em>Relict</em> possessing <em>Donum</em> or not, they
        are trained by the best hunters, trackers, and warriors in their{' '}
        <em>compagnia</em> before being sent to <strong>Helix</strong> to study
        in the <strong>Academia Arcadia</strong>, which no <em>Relict</em> has
        ever failed to gain entry to.
      </TypographyP>
      <TypographyP>
        After their studies in <strong>Helix</strong>, <em>Relicts</em> become
        apprentices for three years before setting off into the inner desert on
        their own.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/kilder">
          <Button variant="outline">
            <ChevronLeft /> Kilder
          </Button>
        </Link>
        <Link href="/setting/first-age/rath">
          <Button variant="outline">
            Rath <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
