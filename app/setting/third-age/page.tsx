import Donum from '@/components/stats/donum';
import Blood from '@/components/stats/blood';
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
      <TypographyH1>Era of Lost Gods</TypographyH1>
      <TypographyP>
        Since the days of gods and their calamities, the world has been broken
        and reforged countless times by history. It has been left wilder, more
        dangerous, and more inscrutable than before.
      </TypographyP>
      <TypographyP>
        Children are born speaking a language only they can understand. The
        edges of the world are a haze which turns people back and makes them
        forget why they ever wanted to enter. Enigmatic monoliths dot the
        landscape, whispering to passerbies about dreams, dread, hope, and
        knowledge.
      </TypographyP>
      <TypographyH2>Traces of Before</TypographyH2>
      <TypographyP>
        Through the monumental efforts of the <strong>New Gods</strong>, there
        was naturally ocurring water in the world for a time. Though,
        there&apos;s no one alive who would remember this now. The concept of
        that is now as foreign as it was in the <strong>First Age</strong>.
      </TypographyP>
      <TypographyP>
        Now there are <strong>Helix&apos;s</strong> ruins, scorched branches of
        the <strong>World Tree</strong>, an expanse of mud and bones in the{' '}
        <strong>Sillish Plains</strong>, an inexplicable path of grass winding
        through <strong>Lucidio Desert</strong> - these are the remaining hints
        of what came before. And without water, the peoples of the world have
        been left to sustain their thirst with <Blood /> once again.
      </TypographyP>
      <TypographyP>
        Many things have not changed though. Huntable prey is scarce and hotly
        contested. Predators are numerous and deadly. The environments are
        harsh, strange, and unpredictable. Those with power strive to take more.
      </TypographyP>
      <TypographyH2>Dreams</TypographyH2>
      <TypographyP>
        There is a <em>Place</em> where people&apos;s minds go when they sleep:
        the same place everyone&apos;s minds go. There are many names for it:{' '}
        <strong>Dream World</strong>, <strong>Night Plains</strong>,{' '}
        <strong>Nexus</strong>, <strong>Nightly Communion</strong>,{' '}
        <strong>The Great Shade</strong>, the list goes on.
      </TypographyP>
      <TypographyP>
        Everyone knows about the <em>Place</em>, but most don&apos;t ever meet
        anyone else in their dreams. Some people are lucky enough to meet their
        loved ones, some are unlucky enough to meet their enemies. Unluckier
        still are the ones who meet the <em>others</em> who live in the{' '}
        <em>Place</em>.
      </TypographyP>
      <TypographyP>
        Hardly anything is known about the <em>others</em>. They hunt at night;
        sometimes they kill, sometimes they torment, sometimes they want
        something from the dreamer. Because of them, most people choose to sleep
        during the daytime, making most of the world nocturnal.
      </TypographyP>
      <TypographyH3>Dreamstorms</TypographyH3>
      <TypographyP>
        A natural disaster that occurs suddenly and with few warning signs. From
        an outside perspective, people start to fall unconcious and can&apos;t
        be woken up, but it&apos;s clear that they&apos;re having a nightmare.
        One of the only ways to avoid getting caught in a dreamstorm is to flee
        from the sound of screaming dreamers.
      </TypographyP>
      <TypographyP>
        For those in the dreamstorm, it&apos;s a fight for survival. Everyone
        caught in it finds themselves in a shared nightmare where the fears of
        the individual are manifested into real, deadly threats. Every child
        taught that if they are caught in a dreamstorm, you have to find a way
        to quell your fear and comfort those around you, or you will die. Most
        people don&apos;t make it.
      </TypographyP>
      <TypographyH3>Recurring Stories</TypographyH3>
      <TypographyP>
        Most folks don&apos;t remember their dreams when they wake up. And the
        people who do, they remember normal nonsensical dreamstuff. Sometimes
        though, people remember particularly vivid dreams that lack the usual
        whimsy character of fleeting thoughts, but are no less fantastical.
      </TypographyP>
      <TypographyP>
        Folks talk about dreams, they compare them - especially the notable
        ones. These vivid dreams, many people have found that they&apos;ve
        whitnessed disjointed snippets of the same narrative. There seem to be
        some stories that are a part of everyone.
      </TypographyP>
      <TypographyH2>Donums</TypographyH2>
      <TypographyP>
        <Donum>Donum</Donum> is the <strong>Arborian</strong> word for
        &ldquo;gift.&rdquo; Both <strong>Arboria</strong> and its language are
        long dead and the origins of the word forgotten, but it&apos;s still
        used to refer to the powers people gain from drinking a{' '}
        <strong>Seed Flask</strong>.
      </TypographyP>
      <TypographyP>
        <strong>Seed Flasks</strong> are vials of clear liquid with something
        suspended in it - the &ldquo;seed&rdquo;. The seed is small, but{' '}
        <em>almost always</em> indicates the nature of the power it will grant.
        Imbibing the <strong>Seed Flask</strong> is an agonizing and dangerous
        process, but if the drinker survives, they will gain a{' '}
        <Donum>Donum</Donum>.
      </TypographyP>
      <TypographyP>
        <strong>Seed Flasks</strong> aren&apos;t rare, but they are held under
        the lock and key of <strong>Rath&apos;s Lunar Scriveners</strong>.
        &ldquo;Weaker&rdquo; flasks can be purchased for a hefty price, but the
        more powerful ones are only given to the King&apos;s most loyal
        subjects.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/yama">
          <Button variant="outline">
            <ChevronLeft /> Yama
          </Button>
        </Link>
        <Link href="/setting/third-age/introduction">
          <Button variant="outline">
            Introduction <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
