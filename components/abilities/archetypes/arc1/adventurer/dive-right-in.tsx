import { TypographyP } from '@/components/ui/typography';
export default function DiveRightIn() {
  return (
    <div>
      <TypographyP>
        During the mission when there&apos;s a lull in the action, the
        Adventurer can explain what they want and declare that they&apos;re{' '}
        <b>diving in</b>. They mark <b>1 xp</b>. The <b>Narrator</b> describes
        the first obstacle; the Adventurer describes how the crew has already
        overcome it and makes an action roll using <b>Initiate</b>. <b>Crit</b>:
        no consequences; <b>6</b>: one consequence; <b>4,5</b>: two
        consequences; <b>1-3</b>: two consequences and the Adventurer marks a
        unique condition: <b>Frantic</b>.
      </TypographyP>
      <TypographyP>
        <strong>Frantic</strong>: You cannot <strong>take a breather</strong> or{' '}
        <strong>recover</strong>. Clear by making it up to the crew (fix the
        current situation or spend downtime activities helping others until
        you&apos;re forgiven).
      </TypographyP>
    </div>
  );
}
