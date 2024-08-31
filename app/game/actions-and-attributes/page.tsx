import Donum from '@/components/stats/donum';
import Defiance from '@/components/stats/defiance';
import Heart from '@/components/stats/heart';
import Ingenuity from '@/components/stats/ingenuity';
import Machina from '@/components/stats/machina';
import Savagery from '@/components/stats/savagery';
import Blood from '@/components/stats/blood';
import Hunger from '@/components/stats/hunger';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';

export default function Page() {
  return (
    <>
      <TypographyH1>Actions & Attributes</TypographyH1>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/game/core-system">
          <Button variant="outline">
            <ChevronLeft /> Core System
          </Button>
        </Link>
        <Link href="/game/the-churn">
          <Button variant="outline">
            The Churn <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
