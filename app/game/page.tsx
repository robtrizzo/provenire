import Donum from '@/components/stats/donum';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { TypographyH1, TypographyP } from '@/components/ui/typography';
export default function Page() {
  return (
    <>
      <TypographyH1>Introduction to Provenire</TypographyH1>
      <TypographyP>
        The word <Donum>Provenire</Donum> is Latin, and has a cluster of
        meanings. To <strong>derive</strong> or <strong>originate</strong> from;
        to <strong>come</strong> from <strong>an implied location</strong>; to{' '}
        <strong>descend</strong> from; to <strong>arise</strong>; to{' '}
        <strong>come forth</strong>.
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
