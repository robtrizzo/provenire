import { TypographyP } from '@/components/ui/typography';
import Link from 'next/link';
export default function TheLifeOfTheMind() {
  return (
    <div>
      <TypographyP>
        A cerebral sort often lost in day-dreams. Once per mission during a
        desperate situation, the Engineer may withdraw into their thoughts. If
        they do, they don&apos;t get to participate in solving or escaping the
        situation, but they may make a{' '}
        <span className="text-red-700 font-bold underline">
          <Link href="/game/the-churn#project-rolls">project roll</Link>
        </span>{' '}
        on any project that the crew is working on, spending crew resources if
        appropriate. If this completes the project, describe the moment of
        genius that brings it all together and introduces the result into the
        scene.
      </TypographyP>
    </div>
  );
}
