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
import Breadcrumbs from '@/components/ui/breadcrumbs';

const distortedStyle = {
  filter: 'blur(4px)', // Apply a blur effect
  textShadow: `
      1px 1px 2px rgba(0, 0, 0, 0.5),
      -1px -1px 2px rgba(0, 0, 0, 0.5),
      1px -1px 2px rgba(0, 0, 0, 0.5),
      -1px 1px 2px rgba(0, 0, 0, 0.5)
    `, // Add multiple shadows for distortion
  opacity: 0.5, // Adjust the opacity if needed
};

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Setting', href: '/game' },
          { name: 'Era 3', href: '/game/setting' },
          { name: 'Strange Forces of the Steel Trap', href: '#' },
        ]}
      />
      <TypographyH1>Strange Forces of the Steel Trap</TypographyH1>
      <TypographyH2>The Drone</TypographyH2>
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quia
        obcaecati itaque eum aperiam quisquam molestias sequi temporibus atque,
        dolores odit, magni, impedit distinctio dolor? Quos, totam minima.
        Nostrum!
      </p>
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        doloremque, nihil modi iure consequuntur officiis error rem debitis
        natus minima aspernatur maiores nulla ab quod. Asperiores tenetur
        suscipit odit dolorem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident at iure obcaecati, voluptatem nihil velit
        veniam ratione rem placeat officiis a, dignissimos ex vero ut sed esse
        incidunt, voluptatibus est!
      </p>
      <TypographyH2>The King&apos;s Spell</TypographyH2>
      <TypographyP>
        For some workers, they find salvation in the embrace of{' '}
        <b>Kingwulf&apos;s</b> order. For this, they may wield the{' '}
        <b className="text-fuchsia-700">King&apos;s Spell</b>. A simple yet
        powerful force of domination: its wielders invoke <b>Kingwulf&apos;s</b>{' '}
        name and levy a command onto their lessers. Invoked by{' '}
        <i>thinblooded</i> workers, this becomes a contest of will. For
        overseers, it is divine evidence of their rightful place at the apex.
      </TypographyP>
      <TypographyP>
        When you wield the <b className="text-fuchsia-700">King&apos;s Spell</b>
        , utter <b>Kingwulf&apos;s</b> name and make a simple demand. If they
        are your lesser, they must either do it or struggle to resist. Each time
        they successfully struggle, make a <b>resistance roll</b>. Whoever gives
        in first is the loser.
      </TypographyP>
      <TypographyP>
        When the <b className="text-fuchsia-700">King&apos;s Spell</b> is
        wielded against you, either do what they say or make a{' '}
        <b>resistance roll</b>. If you do, the wielder must in turn struggle to
        keep inflicting the spell on you. Whoever gives in first is the loser.
      </TypographyP>
      <TypographyH2>Dreamstorms</TypographyH2>
      <p style={distortedStyle} className="select-none">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam error
        minima id possimus, eaque molestias delectus sequi suscipit quo
        consequuntur, harum doloribus aliquid! Minus asperiores labore fugit,
        recusandae exercitationem laboriosam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rem cum reiciendis, libero natus earum
        optio voluptatum officiis fuga quod consequuntur, ut a. Corporis harum
        praesentium repellendus ea accusamus esse. In.
      </p>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game">
          <Button variant="outline">
            <ChevronLeft /> Era 3
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
