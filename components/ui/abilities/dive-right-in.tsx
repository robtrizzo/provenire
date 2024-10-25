import { TypographyP } from '@/components/ui/typography';
export default function DiveRightIn() {
  return (
    <div>
      <TypographyP>
        During the mission when there&apos;s a lull in the action, the
        Adventurer can make an <strong>engagement roll</strong> with their{' '}
        <strong>Initiate</strong> action. If they do, they explain their
        approach, launch the crew into action, and mark <strong>1 xp</strong>.
        If they end up in a desperate position, they mark a unique condition:{' '}
        <strong>Frantic</strong> (this condition may also be marked as normal).
      </TypographyP>
      <TypographyP>
        <strong>Frantic</strong>: You cannot <strong>relax</strong> or{' '}
        <strong>recover</strong>. Clear by making it up to the crew (fix the
        current situation or spend downtime activities helping others until
        you&apos;re forgiven).
      </TypographyP>
    </div>
  );
}
