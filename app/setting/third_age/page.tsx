import Blood from '@/components/Blood';
import Donum from '@/components/Donum';
import Previous from '@/components/Previous';
export default function SecondAge() {
  return (
    <>
      <h1>Era of Lost Gods</h1>
      <p>
        Since the days of gods and their calamities, the world has been broken
        and reforged countless times by history. It has been left wilder, more
        dangerous, and more inscrutable than before.
      </p>
      <p>
        Children are born speaking a language only they can understand. The
        edges of the world are a haze which turns people back and makes them
        forget why they ever wanted to enter. Enigmatic monoliths dot the
        landscape, whispering to passerbies about dreams, dread, hope, and
        knowledge.
      </p>
      <h2>Traces of Before</h2>
      <p>
        Through the monumental efforts of the <strong>New Gods</strong>, there
        was naturally ocurring water in the world for a time. Though, there's no
        one alive who would remember this now. The concept of that is now as
        foreign as it was in the <strong>First Age</strong>.
      </p>
      <p>
        Now there are <strong>Helix's</strong> ruins, scorched branches of the{' '}
        <strong>World Tree</strong>, an expanse of mud and bones in the{' '}
        <strong>Sillish Plains</strong>, an inexplicable path of grass winding
        through <strong>Lucidio Desert</strong> - these are the remaining hints
        of what came before. And without water, the peoples of the world have
        been left to sustain their thirst with <Blood /> once again.
      </p>
      <p>
        Many things have not changed though. Huntable prey is scarce and hotly
        contested. Predators are numerous and deadly. The environments are
        harsh, strange, and unpredictable. Those with power strive to take more.
      </p>
      <h2>Dreams</h2>
      <p>
        There is a <em>Place</em> where people's minds go when they sleep: the
        same place everyone's minds go. There are many names for it:{' '}
        <strong>Dream World</strong>, <strong>Night Plains</strong>,{' '}
        <strong>Nexus</strong>, <strong>Nightly Communion</strong>,{' '}
        <strong>The Great Shade</strong>, the list goes on.
      </p>
      <p>
        Everyone knows about the <em>Place</em>, but most don't ever meet anyone
        else in their dreams. Some people are lucky enough to meet their loved
        ones, some are unlucky enough to meet their enemies. Unluckier still are
        the ones who meet the <em>others</em> who live in the <em>Place</em>.
      </p>
      <p>
        Hardly anything is known about the <em>others</em>. They hunt at night;
        sometimes they kill, sometimes they torment, sometimes they want
        something from the dreamer. Because of them, most people choose to sleep
        during the daytime, making most of the world nocturnal.
      </p>
      <h3>Dreamstorms</h3>
      <p>
        A natural disaster that occurs suddenly and with few warning signs. From
        an outside perspective, people start to fall unconcious and can't be
        woken up, but it's clear that they're having a nightmare. One of the
        only ways to avoid getting caught in a dreamstorm is to flee from the
        sound of screaming dreamers.
      </p>
      <p>
        For those in the dreamstorm, it's a fight for survival. Everyone caught
        in it finds themselves in a shared nightmare where the fears of the
        individual are manifested into real, deadly threats. Every child taught
        that if they are caught in a dreamstorm, you have to find a way to quell
        your fear and comfort those around you, or you will die. Most people
        don't make it.
      </p>
      <h2>Donums</h2>
      <p>
        <Donum>Donum</Donum> is the <strong>Arborian</strong> word for 'gift.'
        Both <strong>Arboria</strong> and its language are long dead and the
        origins of the word forgotten, but it's still used to refer to the
        powers people gain from drinking a <strong>Seed Flask</strong>.
      </p>
      <p>
        <strong>Seed Flasks</strong> are vials of clear liquid with something
        suspended in it - the 'seed'. The seed is small, but{' '}
        <em>almost always</em> indicates the nature of the power it will grant.
        Imbibing the <strong>Seed Flask</strong> is an agonizing and dangerous
        process, but if the drinker survives, they will gain a{' '}
        <Donum>Donum</Donum>.
      </p>
      <p>
        <strong>Seed Flasks</strong> aren't rare, but they are held under the
        lock and key of <strong>Rath's Lunar Scriveners</strong>. 'Weaker'
        flasks can be purchased for a hefty price, but the more powerful ones
        are only given to the King's most loyal subjects.
      </p>
      <div className="flex flex-row mt-2">
        <Previous href="/setting/third_age/introduction" text="Introduction" />
      </div>
    </>
  );
}
