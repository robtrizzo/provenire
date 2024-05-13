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
      <TypographyH1>Kilder</TypographyH1>
      <TypographyBlockquote>
        It defies precedent, the senses, common thought: the way those warriors
        fight, they may as well have <em>Donums</em>, even if we know they
        can&apos;t.
      </TypographyBlockquote>
      <TypographyP>
        Each and every <strong>Kilder</strong> is an accomplished warrior. The
        marshes of their homeland ensure that anything less than grit and skill
        quickly fades from a bloodline. At a first glance, a group of{' '}
        <strong>Kilder</strong> would appear to be uncivilized barbarians. Their
        garb covers the bare minimum to be decent, their bodies covered in dirt
        and girme, quiet and sullen. But even a short interaction with{' '}
        <strong>Kilder</strong> warriors reveals quite the contrary.
      </TypographyP>
      <TypographyH2>Survival Through Dicipline</TypographyH2>
      <TypographyP>
        To combat the harsh conditions of their homelands without any{' '}
        <em>Donum</em>,<strong>Kilder</strong> society is structured in a strict
        hierarchy of command. No child is born into a higher rank than any
        other; there are no nobles in <strong>Kilder</strong>, only officers.
      </TypographyP>
      <TypographyP>
        The <strong>Kilder</strong> separeted themselves into three warbands.
        each warbard consisting of three companies, and each company consisting
        of nine caravans. Each caravan is allowed their own structure to suit
        their needs. The twenty seven caravans of a warband typically correspond
        to clusters of families that prefer to work together or that are related
        through strings of marriage.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            At the age of five, a child has a role assigned to them. Those roles
            fall under four categories of: Hunter, Craftsman, Soldier, or
            Philosopher. Regardless of that child&apos;s predispositions, that
            role becomes their lot in life, and they are taught to strive to be
            the best possible incarnation of their role.
          </TypographyP>
          <TypographyP>
            Every <strong>Kilder</strong> aspires to become the embodiment of
            their profession and be awarded with the honorary first name of
            their position. Such perfection, in the{' '}
            <strong>Kilder&apos;s</strong> eyes, is the maning of life and the
            way that the <strong>Kilder</strong> will one day conquer the land
            they inhabit.
          </TypographyP>
          <TypographyP>
            Each role a child is assigned completely shapes the way they live.
            But regardless of role, every <strong>Kilder</strong> is expected to
            pass a series of intensive and unforgiving physical tests before
            they are are recognized by their officers as true{' '}
            <strong>Kilder</strong>.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>The name of Siad</TypographyH4>
          <TypographyP>
            It is exceptionally rare to find a <strong>Kilder</strong> who has
            received the <strong>Siad</strong>, or Hunter, honorary. This would
            mean that they have become the embodiment of all techniques and
            practices that a hunter can posses. The perfect predator. Much more
            often a master of a particular aspect of hunting is honored with
            that name.
          </TypographyP>
          <TypographyH4>Hunter Names</TypographyH4>
          <ul className="list-none">
            <li>
              <strong>Ram</strong>: Archer
            </li>
            <li>
              <strong>Ramah</strong>: Lancer
            </li>
            <li>
              <strong>Matarid</strong>: Stalker
            </li>
            <li>
              <strong>Alfura</strong>: Tracker
            </li>
          </ul>
        </div>
      </div>
      <TypographyH2>Slayers of Beasts</TypographyH2>
      <TypographyP>
        In <strong>Kilder</strong>, simply providing food for the warband is the
        most dangerous asignment to have. In addition to their mandatory
        physical fitness training, hunters train with bows, spears, and most
        importantly, traps. All of these methods must be mastered to survive a
        single day hunting basilisks, hydras, gray renders, dire tigers, and
        swarms of dirges.
      </TypographyP>
      <TypographyP>
        Luckily for the hunters, many of these creatures will feed the warband
        for more than a day by themselves, and for those few days the hunters
        can scavenge for smaller prey, which are far harder to find but far less
        dangerous to hunt.
      </TypographyP>
      <TypographyP>
        A <strong>Kilder</strong> hunter collects a trophy from each one of
        their kills, slowly building them into a bridal wreath of teeth, scale,
        and fang. A hunter is only ever allowed to marry once this wreath is
        complete, which can take anywhere from five to twenty years depending of
        the skill of the hunter. Most hunters don&apos;t complete their wreath
        before the creatures of the marsh take them.
      </TypographyP>
      <TypographyH2>Bone Spears and Wicker Baskets</TypographyH2>
      <TypographyP>
        <strong>Kilder</strong> crafts and products are not sought after by the
        other nations, but they suit the <strong>Kilder</strong> just fine. To a{' '}
        <strong>Kilder</strong> craftsman, artistry and design are frivolous
        distractions from the utilitarian purpose of a tool.
      </TypographyP>
      <TypographyP>
        There is typically only one metalsmith in an entire warband due to the
        scarcity of metal in <strong>Kilder</strong>. Being assigned the task of
        smith however is a great honor for a child in addition to the great
        responsibility of forging weapons and armor for the warband&apos;s
        greatest warriors.
      </TypographyP>
      <TypographyP>
        A craftsman typically spends most of the day whittling bone into new
        weapons, as bone weapons frequently break in the field. Occasionally the
        need for new tents, baskets, and other small odds and ends come up. This
        is unusual however since all <strong>Kilder</strong> take meticulous
        care of their equipment as per the teachings of the{' '}
        <strong>Kilder</strong> philosophers.
      </TypographyP>
      <TypographyP>
        The other large part of a craftman&apos;s routine is practicing music on
        the drums and flutes they&apos;ve made. Each night the craftsmen play
        their instruments as the philisophers sing and the the hunters dance and
        spar.
      </TypographyP>
      <TypographyH2>Slayers of Men</TypographyH2>
      <TypographyP>
        Almost a quarter of children are selected to become soldiers of{' '}
        <strong>Kilder</strong>, a great privilege. At age seven, a soldier is
        expected to be able to hild a three pound sword and a ten pound shield
        with their arms outstretched for an hour. This is the first of many
        spartan requirements put upon children training to become perfect combat
        matchines. By age twelve they must be proficient with bows, spears,
        swords, shields, and javelins. Next, by age thirteen, they must best an
        adult hunter five times out of five in one of the nightly rallies.
      </TypographyP>
      <TypographyP>
        Finally, by age sixteen, they must travel to <strong>Helix</strong>, a
        two year journey. Once there they must pass the exams to join the peace
        keeping force - an exam designed to be difficult even for those with a{' '}
        <em>Donum</em>. They are expected to serve in the peace keeping force
        for three years and to learn from the warriors of other cultures,
        bringing home all they learn to teach others. After this trial, they are
        finally aknowledged as a <strong>Kilder</strong> soldier at age twenty
        three.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/gredora">
          <Button variant="outline">
            <ChevronLeft /> Gredora
          </Button>
        </Link>
        <Link href="/setting/first-age/narscillia">
          <Button variant="outline">
            Narscillia <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
