import Breadcrumbs from '@/components/ui/breadcrumbs';
import { TypographyH1 } from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default async function Page() {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { name: 'Character Creation', href: '/game/character-creation' },
          { name: 'Fighting Styles', href: '#' },
        ]}
      />
      <TypographyH1>Fihgting Styles</TypographyH1>
      <Separator className="my-3" />
      <div className="w-full flex justify-between">
        <Link href="/game/archetypes">
          <Button variant="outline">
            <ChevronLeft /> Archetypes
          </Button>
        </Link>
        <Link href="/game/character-sheet">
          <Button variant="outline">
            Character Sheet <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
