import {
  TypographyH1,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heritages from '@/public/heritages.json';

export default async function Page() {
  return (
    <div>
      <TypographyH1 className="mb-12">Heritages</TypographyH1>
      {heritages.map((heritage, i) => (
        <div key={i} className="mt-6">
          <TypographyH3 id={heritage.name} className="text-sky-500">
            {heritage.name}
          </TypographyH3>
          <TypographyP>{heritage.remembrance}</TypographyP>
          <Separator className="my-3" />
        </div>
      ))}
      <div className="w-full flex justify-between">
        <Link href="/game/character-creation">
          <Button variant="outline">
            <ChevronLeft /> Character Creation
          </Button>
        </Link>
        <Link href="/game/backgrounds">
          <Button variant="outline">
            Backgrounds <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
