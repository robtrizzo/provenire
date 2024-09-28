import { TypographyP } from '@/components/ui/typography';
export default function DiveRightIn() {
  return (
    <div>
      <TypographyP>
        At the start of the mission or during the mission when there&apos;s a
        lul in the action, the Adventurer can make an{' '}
        <strong>engagement roll</strong>. If they do, they explain their
        approach and launch the crew into action. If they do, they mark{' '}
        <strong>1 xp</strong>. If they end up in a desperate position, they mark
        a unique condition: <strong>Frantic</strong>.
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
