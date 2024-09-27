import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';

export default async function Page() {
  return (
    <>
      <TypographyH1>The Cycle of Play</TypographyH1>
      <TypographyP>
        Sessions of <span className="italic">Provenire</span> take place in
        three major phases: <strong>Prelude</strong>,{' '}
        <strong>The Mission</strong>, and <strong>The Churn</strong>. Each
        session always begins with <strong>Prelude</strong> and ends with{' '}
        <strong>The Churn</strong>. Multiple cycles can take place durring one
        session depending on how long you&apos;re together.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/actions-and-attributes">
          <Button variant="outline">
            <ChevronLeft /> Actions & Attributes
          </Button>
        </Link>
        <Link href="/game/prelude">
          <Button variant="outline">
            Prelude <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
