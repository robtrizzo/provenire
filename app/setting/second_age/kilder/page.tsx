import Donum from '@/components/Donum';
import Next from '@/components/Next';
import Previous from '@/components/Previous';
import Link from 'next/link';
export default function Kilder() {
  return (
    <>
      <h1>Kilder</h1>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/setting/first_age/kilder"
          className="no-underline py-4 px-8 border-2 border-black rounded-md bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 text-white"
        >
          Kilder in the First Age
        </Link>
      </div>
      <p>
        <strong>Kilder's</strong> borders have not changed, and much of life in
        the dread swamp is as it was four hundred years ago. Three warbards live
        within its borders, each composed of its subordinate companies. Over the
        centuries, <strong>Kilder</strong> have further refined their
        organization and coordination techniques. Larger areas of the swamp have
        been claimed by warriors who have become more skilled with each
        generation.
      </p>
      <p>
        <strong>Kilder's</strong> soliders have become so adept at teaching in
        fact, that it is home to two of the world's finest military academies:
        Acedemia Legaria and Acedemia Rukmoor. Foreign academies have seen a
        dwindling number of <strong>Kilder</strong> students over the last few
        decades as the nation has become somewhat more enigmatic.
      </p>
      <p>
        This isolation has made <strong>Kilder's</strong> neighbors nervous.
        Fewer and fewer traders are allowed into <strong>Kilder's</strong>{' '}
        borders, and the <strong>Kilder</strong> caravans that travel to buy
        foreign goods have been tight-lipped about news from their homeland.
        Rumors have begun to spread about <strong>Kilder</strong> with{' '}
        <em>Donums</em>. The fourth coming of <Donum>Donum Duellum</Donum> would
        surely spell turmoil, maybe even disaster. But to the common peoples'
        relief, <strong>Kilder</strong> hasn't made the slightest aggressive
        move. Life goes on, let the nobles worry about the matters of state.
      </p>
      <h2>
        <em>Donum Duellum</em>
      </h2>
      <p>
        There have only ever been three to bear <Donum>Donum Duellum</Donum>.
        The first was <strong>Hamdi Ghodbane</strong>, conqueror of the southern
        world and the restorer of the <strong>Helix Accords</strong>.
      </p>
      <p>
        The second was <strong>Akil the Ruler</strong>, uniter of{' '}
        <strong>Cumeria</strong> and <strong>Gredora</strong> and who ascended
        into godhood.
      </p>
      <p>
        The third was <strong>Aalia the Martyr</strong>.
      </p>
      <p>
        <strong>Aalia's</strong> powers were no secret to the world. From a
        young age she demonstrated strategic and tactical genius as well as the
        adoration of the <strong>Kilder</strong> people. She lead a viscious
        campaign to clain the northern territories in <strong>Kilder</strong>{' '}
        from the beasts, making it her own and founding the city of{' '}
        <strong>Tria Aderfia</strong>. But as the celebrations of victory
        concluded, <strong>Kilder</strong> was met with four armies on its
        doorstep. <strong>Heia</strong>, <strong>Yama</strong>,{' '}
        <strong>Gredora</strong>, and <strong>Anidine</strong> had formed the{' '}
        <strong>Cardinal Concord</strong>, an oath to band together if{' '}
        <strong>Kilder</strong> ever saw another <Donum>Donum Duellum</Donum>.
      </p>
      <p>
        <strong>Aalia</strong> along with her best negotiators desperately sued
        for diplomacy, they had no plans for expanding <strong>Kilder's</strong>{' '}
        borders. The <strong>Cardinal Concord</strong> had no intention of
        backing down however. They brazenly marched their four armies into the
        swamps, and <strong>Aalia's</strong> armies marched to meet them.
        Scholars from the <strong>Cardinal Concord's</strong> nations claim that
        victory was imminent that day, but the <strong>Kilder</strong> know
        differently. Despite the superior numbers and host of <em>Wielders</em>,
        every soldier under <strong>Aalia's</strong> command knew they would be
        lead to slaughter the enemy.
      </p>
      <p>
        But luckily for the <strong>Concord</strong> and <strong>Kilder</strong>{' '}
        soldiers alike, the battle wasn't to be. On the morning of the battle,{' '}
        <strong>Aalia</strong> walked alone into the center of the two armies
        and took her own life where all could see. The next day, the{' '}
        <strong>Cardinal Concord</strong> began themarch home, leaving the{' '}
        <strong>Kilder</strong> to grieve the loss of their great leader. The
        city of <strong>Tria Aderfia</strong> was renamed in her honor.
      </p>
      <h2>Aalia City</h2>
      <p>
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
      </p>
      <div className="flex flex-row mt-2">
        <Previous href="/setting/second_age/heia" text="Heia" />
        <Next href="/setting/second_age/kipos" text="Kipos" />
      </div>
    </>
  );
}
