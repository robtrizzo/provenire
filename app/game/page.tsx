import Donum from '@/components/stats/donum';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { TypographyH1, TypographyP } from '@/components/ui/typography';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default function Page() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Introduction', href: '#' }]} />
      <TypographyH1 className="text-red-500">
        Introduction to Provenire
      </TypographyH1>
      <TypographyP>
        The word <Donum>Provenire</Donum> is Latin, and has a cluster of
        meanings. To <b>derive</b> or <b>originate</b> from; to <b>come</b> from{' '}
        <b>an implied location</b>; to <b>descend</b> from; to <b>arise</b>; to{' '}
        <b>come forth</b>.
      </TypographyP>
      <TypographyP>
        <Donum>Provenire</Donum> is both a setting and a system. The system is a
        narrative-focused and rules-light system based heavily on{' '}
        <span className="italic">Blades in the Dark</span>,{' '}
        <span className="italic">Masks</span>,{' '}
        <span className="italic">Band of Blades</span>, and{' '}
        <span className="italic">Fellowship</span>. The setting is a world with
        very alien forces and natural laws at play, and barely understood by the
        people who live in it.
      </TypographyP>
      <Separator />
      <div className="flex flex-row mt-2">
        <Link href="/game/setting" className="ml-auto">
          <Button variant="outline">
            Setting <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
