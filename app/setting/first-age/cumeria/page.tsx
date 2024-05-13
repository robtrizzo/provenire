import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Cumeria</TypographyH1>
      <TypographyBlockquote>
        Quail at the sound of our horns. None are our equal. Not even the
        &ldquo;Greatest King&rdquo; dared brave the darkness of the{' '}
        <strong>Titan Pines</strong>.
      </TypographyBlockquote>
      <TypographyP>
        <strong>Cumeria</strong> is the undisputedly most dangerous place in the
        world. The <strong>Titan Pines</strong> allow few survivors - even{' '}
        <strong>Anya Arbor</strong> and her companions almost died in those
        trees.
      </TypographyP>
      <TypographyH2>Roaming Tribes</TypographyH2>
      <TypographyP>
        Huntable prey is scarce in the <strong>Titan Pines</strong>, so the{' '}
        <strong>Cumerians</strong> live in small tribes of around one hundred.
        Each clan defends their territory ferociously; because if even one hunt
        is stolen from their lands, many can go hungry.
      </TypographyP>
      <TypographyP>
        Most creatures in the <strong>Pines</strong> however, are too large or
        too dangerous to hunt. Those predators most be avoided at all costs to
        ensure the survival of the tribe. To evade these creatures, the{' '}
        <strong>Cumerians</strong> make their homes high in the trees. The trees
        in the <strong>Titan Pines</strong> are large enough to house entire
        tribes inside carved out burrows, which they sculpt artfully. Tribes
        often have between five to ten of these abodes so that they can stay on
        the move on their hunts.{' '}
      </TypographyP>
      <TypographyP>
        The leader of each tibe is usually a <em>Wielder</em> with either{' '}
        <Donum>Donum Denieth</Donum> or <Donum>Donum Vitae</Donum>, who is
        titled the tribal <strong>Wisdom</strong>. In addition to a leadership
        role, the <strong>Wisdom</strong> is usually responsible for tending to
        the sick and injured as well. If a tribe has no <em>Wielder</em> to be
        their <strong>Wisdom</strong>, they will often seek out a{' '}
        <em>Wielder</em> from another tribe to join them until a{' '}
        <em>Wielder</em> born of the tribe can succeed them.
      </TypographyP>
      <TypographyH2>The Hunt</TypographyH2>
      <TypographyP>
        The primary food source for <strong>Cumerians</strong> are the enormous
        varieties of boar, bear, and owl that live in the{' '}
        <strong>Titan Pines</strong>. The blood of those beasts is the primary
        drinking source for the tribe as well. Such dangerous quarry demands the
        utmost skill from hunters to succeed. As such, becoming a hunter in{' '}
        <strong>Cumeria</strong> is a grueling upbringing ending in deadly test.
        Those who pass achieve high status in the tribe, only behind the{' '}
        <strong>Wisdom</strong> and the <strong>Hornblower</strong>. Usually a
        tribe will have around five hunters.
      </TypographyP>
      <TypographyP>
        Those who fail the test, as most do, become scavengers for the tribe.
        They are still held in high esteem since just surviving the
        hunter&apos;s test is an accomplishment. Scavengers serve as scouts and
        gatherers. They train to become master climbers and traverse the{' '}
        <strong>Titan Pines</strong> unnoticed.
      </TypographyP>
      <TypographyBlockquote>
        Fear is a contagion. One that we must cast out, quarantine, and squelch
        if we wish to survive here.
      </TypographyBlockquote>
      <TypographyP>
        There are some who take the hunter&apos;s test and flee. They are cast
        out as cowards, left to fend for themselves.
      </TypographyP>
      <TypographyP>
        Tribespeople who don&apos;t have the will or skill to become hunters or
        scavengers perform every other job the tribe needs - mostly carpentry
        and crafts.
      </TypographyP>
      <TypographyH2>Warriors of Reckless Abandon</TypographyH2>
      <TypographyP>
        The <strong>Cumerians</strong> are patient, calculated hunters, but on
        the battlefield they are something else entirely.{' '}
        <strong>Cumerian</strong> warhorns are a signal of swiftly approaching
        death as their berzerking warriors charge with no regard to their own
        lives.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            Over the centuries, the <strong>Cumerians</strong> have been invaded
            countless times by the <strong>Gredorans</strong>,{' '}
            <strong>Kilder</strong>, and <strong>Rathi</strong> for the
            forest&apos;s greatest resource: <em>Adamantine</em> - harvested
            from the bones of the <strong>Titan Pines&apos;</strong> deadliest
            predator - the <strong>Naga</strong>.
          </TypographyP>
          <TypographyP>
            Few invasions into the <strong>Titan Pines</strong> have yielded
            anything but death and defeat for the aggressors. Armies struggle to
            adapt to the perpetual darkness of the woods and the danger of
            making camp on the forest floor. Even armies that survive the
            punishing conditions and predators rarely last long against the
            relentless <strong>Cumerian</strong> hunters and berzerkers
            attacking from the trees and vanishing into shadows.{' '}
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>Wisdoms at War</TypographyH4>
          <TypographyP>
            <strong>Cumerian</strong> <em>Wielders</em>, or{' '}
            <strong>Wisdoms</strong> once they lead a tribe, inherit the{' '}
            <em>Donums</em> that make the <strong>Cumerian</strong> berzerkers
            what they are. <strong>Wisdoms</strong> inherit one of two{' '}
            <em>Donums</em>, with the rare prodigy gaining both:
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Denieth</Donum> The Gift of Denial
            </li>
            <li>
              <Donum>Donum Vitae</Donum> The Gift of Vitality
            </li>
          </ul>
        </div>
      </div>
      <TypographyP>
        The <strong>Cumerians</strong> favor brutal surprise attacks with their
        warriros cloaked in the magical armor of <Donum>Donum Denieth</Donum>{' '}
        and wielding the giant war pikes with <em>Adamantine</em> tips they are
        infamous for. After the attack, they retreat back into the treetops
        where their bodies are quickly repaired with <Donum>Donum Vitae</Donum>.
      </TypographyP>
      <TypographyH2>Unlikely Friends</TypographyH2>
      <TypographyP>
        Early in <strong>Cumerian</strong> history, they learned to flee to the
        treetops to avoid the predators below, but they they never knew why
        predators who could clearly climb wouldn&apos;t follow them. It
        wasn&apos;t until a few brave scavengers climbed even higher into the
        trees that they discovered the reason.
      </TypographyP>
      <TypographyP>
        Roosting at the peaks of the <strong>Titan Pines</strong> are flocks of
        griffons, strangely unpurtubed by humans - curious even. Over the course
        of years, these scavengers built a relationship of friendship by
        bringing the griffons offerings of shiny baubles and warm furs to line
        their nests. Slowly but surely the griffons allowed humans to approach
        closer and closer until peaceful first contact was made.
      </TypographyP>
      <TypographyP>
        In the generations to come, those scavengers&apos; descendants grew up
        with the young of the griffons, eventuaslly bonding enough to become the
        first griffon riders, a tradition now sacred to the{' '}
        <strong>Cumerians</strong>. To harm a griffon is to declare war on all
        of <strong>Cumeria</strong> or to be executed for the crime.
      </TypographyP>
      <TypographyH2>The Horns of Life</TypographyH2>
      <TypographyBlockquote>
        Most unlucky folk only ever hear the <strong>Cumerian&apos;s</strong>{' '}
        warhorns. But there&apos;s a second kind of horn the blow. If
        you&apos;re fortunate enough to hear those, seek them out. You will
        never feast with more gracious and wonderful hosts.
      </TypographyBlockquote>
      <TypographyP>
        Other than <strong>Wisdom</strong>, <strong>Hornblower</strong> is the
        second highest title one can have. In the wake of{' '}
        <strong>Anya Arbor</strong> teaching the <strong>Cumerians</strong> of
        the <strong>Life Ducts</strong>, when the <strong>Cumerians</strong>{' '}
        were one large horde, the few with the knowledge she imparted met swift
        and mysterious deaths. Long years of greusome war erupted in the{' '}
        <strong>Titan Pines</strong> as the <strong>Cumerians</strong> turned on
        each other, slaughtering one another for food and blood.
      </TypographyP>
      <TypographyP>
        In the midst of the war, a husband and wife,{' '}
        <strong>Turan and Sara Kazemi</strong> wandered the{' '}
        <strong>Pines</strong> with their three children in search of refuge
        from the conflict. One night their youngest son, <strong>Arvin</strong>,
        wandered off into the woods. <strong>Turan</strong> awoke to see his
        child missing and quickly found him crying at the base of the tree. But
        before <strong>Turan</strong> could bring Arvin the short walk home,
        they were set upon by the most dangerous predator in the{' '}
        <strong>Pines</strong>: a <strong>Naga</strong>.
      </TypographyP>
      <TypographyP>
        In a pitched battle that lasted until the next sunset,{' '}
        <strong>Turan</strong> joined by <strong>Sara</strong> fought the{' '}
        <strong>Naga</strong>, protecting their children and becoming the first
        slayers of a <strong>Naga</strong>. The family feasted on the bountiful
        meat and <strong>Sara</strong> carved the largest of the creature&apos;s{' '}
        <em>Adamantine</em> ribs into a massive, ornate horn: the likes of which
        no one had ever seen before.
      </TypographyP>
      <TypographyH3>The Solemn Note</TypographyH3>
      <TypographyP>
        Despite their best efforts to ride out the war, the{' '}
        <strong>Kazemis</strong> became caught up in the struggle. In a pitched
        battle for control of a <strong>Life Duct</strong> that no one even knew
        how to activate, <strong>Sara Kazemi</strong> witnessed her children
        fall one by one. Overcome with grief and defeat, <strong>Sara</strong>{' '}
        blew a solemn note on the horn she had carved years ago - a memento of
        her love for her children.
      </TypographyP>
      <TypographyBlockquote>
        <TypographyP>
          I remember slumping down into the basin of the{' '}
          <strong>Life Duct</strong>. A brief rest, I told myself. I&apos;d be
          back on my feet soon. So much blood was pooling in the basin. Enough
          for my family to drink for weeks, I remember thinking. The warcries
          and death dirges were so loud they made my head throb with the noise.
        </TypographyP>
        <TypographyP>
          But then we all heard a note - somber and clear - it quieted the
          madness for a moment. And then I felt something cool washing away the
          blood on my back.
        </TypographyP>
      </TypographyBlockquote>
      <TypographyP>
        No one understands why, but <strong>Sara Kazemi&apos;s</strong> horn
        opened the <strong>Life Duct</strong> that day - and then crumbled to
        dust. The fighting ceased and <strong>Sara</strong> was able to tell her
        story.
      </TypographyP>
      <TypographyP>
        The <strong>Cumerians</strong> learned how to battle{' '}
        <strong>Nagas</strong> and sculpt the <strong>Horns of Life</strong>{' '}
        from the <strong>Kazemis</strong>. A new way of life was born.
      </TypographyP>
      <TypographyH3>A New Way</TypographyH3>
      <TypographyP>
        To this day, only the greatest of hunters are capable of battling{' '}
        <strong>Nagas</strong>, and only the most skilled carvers are permitted
        to touch the largest rib of the creature from which the horns are made.
      </TypographyP>
      <TypographyP>
        Usually several tribes band together on one of these hunts, travelling
        together to the nearest <strong>Life Duct</strong> with their bounty.
      </TypographyP>
      <TypographyP>
        The greatest duty of this process is on the <strong>Hornblower</strong>.
        Often trained from a young age, <strong>Hornblowers</strong> are
        responsible for sounding the <strong>Horn of Life</strong> with as pure
        and long of a note as they can. The greater the note, the more water
        flows from the <strong>Life Duct</strong>, or so the elders say.
      </TypographyP>
      <TypographyP>
        When water flows from a <strong>Life Duct</strong> in the{' '}
        <strong>Titan Pines</strong>, it&apos;s a holiday the{' '}
        <strong>Cumerians</strong> celebrate to the fullest with dancing,
        drinking, feasting, and contests of skill. Any children who have not
        drank water undergo the <em>Ceremony of the Gift</em> where it is
        determined if the water will grant them a <em>Donum</em>. Any couples
        who have been together for more than a year traditionally marry at these
        great holidays.
      </TypographyP>
      <TypographyP>
        Where normally <strong>Cumerians</strong> are territorial and
        suspicious, any and all are welcome to their water festivals, often
        bringing multiple tribes together for the few days the{' '}
        <strong>Duct</strong> will remain open.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/arboria">
          <Button variant="outline">
            <ChevronLeft /> Arboria
          </Button>
        </Link>
        <Link href="/setting/first-age/gredora">
          <Button variant="outline">
            Gredora <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
