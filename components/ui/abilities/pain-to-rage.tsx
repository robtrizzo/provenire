import { TypographyP } from '@/components/ui/typography';
import Link from 'next/link';
export default function PainToRage() {
  return (
    <div>
      <TypographyP>
        When the{' '}
        <span className="font-bold text-fuchsia-700 underline">
          <Link href="#">The King's Spell</Link>
        </span>{' '}
        is used on you, you may choose to ignore it. If you do, you must attack
        them.
      </TypographyP>
    </div>
  );
}
