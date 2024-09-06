import { TypographyP } from '@/components/ui/typography';
import Link from 'next/link';
export default function EfficiencyIsKing() {
  return (
    <div>
      <TypographyP>
        Commanders may always perform an extra downtime action to instruct a
        teammate how they could be more efficient. Give them advice and make a
        <span className="text-red-700 font-bold underline">
          <Link href="/game/the-churn#project-rolls">project roll</Link>
        </span>
        . If they take the advice, they mark a number of segments on whatever
        project they&apos;re working on according to the result. If they reject
        the advice, you mark an amount of stress equal to the result.
      </TypographyP>
    </div>
  );
}
