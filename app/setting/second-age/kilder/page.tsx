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
      <TypographyH1>Kilder</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/kilder">
          <Button variant="outline">Kilder in the First Age</Button>
        </Link>
      </div>
      <TypographyP>
        <strong>Kilder&apos;s</strong> borders have not changed, and much of
        life in the dread swamp is as it was four hundred years ago. Three
        warbards live within its borders, each composed of its subordinate
        companies. Over the centuries, <strong>Kilder</strong> have further
        refined their organization and coordination techniques. Larger areas of
        the swamp have been claimed by warriors who have become more skilled
        with each generation.
      </TypographyP>
      <TypographyP>
        <strong>Kilder&apos;s</strong> soliders have become so adept at teaching
        in fact, that it is home to two of the world&apos;s finest military
        academies: Acedemia Legaria and Acedemia Rukmoor. Foreign academies have
        seen a dwindling number of <strong>Kilder</strong> students over the
        last few decades as the nation has become somewhat more enigmatic.
      </TypographyP>
      <TypographyP>
        This isolation has made <strong>Kilder&apos;s</strong> neighbors
        nervous. Fewer and fewer traders are allowed into{' '}
        <strong>Kilder&apos;s</strong> borders, and the <strong>Kilder</strong>{' '}
        caravans that travel to buy foreign goods have been tight-lipped about
        news from their homeland. Rumors have begun to spread about{' '}
        <strong>Kilder</strong> with <em>Donums</em>. The fourth coming of{' '}
        <Donum>Donum Duellum</Donum> would surely spell turmoil, maybe even
        disaster. But to the common peoples&apos; relief,{' '}
        <strong>Kilder</strong> hasn&apos;t made the slightest aggressive move.
        Life goes on, let the nobles worry about the matters of state.
      </TypographyP>
      <TypographyH2>
        <em>Donum Duellum</em>
      </TypographyH2>
      <TypographyP>
        There have only ever been three to bear <Donum>Donum Duellum</Donum>.
        The first was <strong>Hamdi Ghodbane</strong>, conqueror of the southern
        world and the restorer of the <strong>Helix Accords</strong>.
      </TypographyP>
      <TypographyP>
        The second was <strong>Akil the Ruler</strong>, uniter of{' '}
        <strong>Cumeria</strong> and <strong>Gredora</strong> and who ascended
        into godhood.
      </TypographyP>
      <TypographyP>
        The third was <strong>Aalia the Martyr</strong>.
      </TypographyP>
      <TypographyP>
        <strong>Aalia&apos;s</strong> powers were no secret to the world. From a
        young age she demonstrated strategic and tactical genius as well as the
        adoration of the <strong>Kilder</strong> people. She lead a viscious
        campaign to claim the northern territories in <strong>Kilder</strong>{' '}
        from the beasts, making it her own and founding the city of{' '}
        <strong>Tria Aderfia</strong>. But as the celebrations of victory
        concluded, <strong>Kilder</strong> was met with four armies on its
        doorstep. <strong>Heia</strong>, <strong>Yama</strong>,{' '}
        <strong>Gredora</strong>, and <strong>Anidine</strong> had formed the{' '}
        <strong>Cardinal Concord</strong>, an oath to band together if{' '}
        <strong>Kilder</strong> ever saw another <Donum>Donum Duellum</Donum>.
      </TypographyP>
      <TypographyP>
        <strong>Aalia</strong> along with her best negotiators desperately sued
        for diplomacy, they had no plans for expanding{' '}
        <strong>Kilder&apos;s</strong> borders. The{' '}
        <strong>Cardinal Concord</strong> had no intention of backing down
        however. They brazenly marched their four armies into the swamps, and{' '}
        <strong>Aalia&apos;s</strong> armies marched to meet them. Scholars from
        the <strong>Cardinal Concord&apos;s</strong> nations claim that victory
        was imminent that day, but the <strong>Kilder</strong> know differently.
        Despite the superior numbers and host of <em>Wielders</em>, every
        soldier under <strong>Aalia&apos;s</strong> command knew they would be
        lead to slaughter the enemy.
      </TypographyP>
      <TypographyP>
        But luckily for the <strong>Concord</strong> and <strong>Kilder</strong>{' '}
        soldiers alike, the battle wasn&apos;t to be. On the morning of the
        battle, <strong>Aalia</strong> walked alone into the center of the two
        armies and took her own life where all could see. The next day, the{' '}
        <strong>Cardinal Concord</strong> began the march home, leaving the{' '}
        <strong>Kilder</strong> to grieve the loss of their great leader. The
        city of <strong>Tria Aderfia</strong> was renamed in her honor.
      </TypographyP>
      <TypographyH2>Aalia City</TypographyH2>
      <TypographyP>
        The only city in <strong>Kilder</strong>, <strong>Aalia</strong> is a
        sight to behold. the architects of the settlement exemplified{' '}
        <strong>Kilder</strong> dicipline and attention to detail. The entire
        city is made of wood and reeds, but despite that the buildings are
        durable and beautiful. Towering structures with flowing natural designs
        radiate from a central monument to <strong>Aalia</strong> herself. Most
        buildings have twisted vines of multicolored flowering plants woven into
        the walls. The streets are carved and polished{' '}
        <strong>Titan Pine</strong>, a gift from <strong>Anidine</strong> after
        the almost-war. <strong>Aalia</strong> is a beacon of respite in the
        harsh swamp and a humbling reminder of the severity of{' '}
        <Donum>Donum Duellum</Donum>.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age/heia">
          <Button variant="outline">
            <ChevronLeft /> Heia
          </Button>
        </Link>
        <Link href="/setting/second-age/kipos">
          <Button variant="outline">
            Kipos <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
