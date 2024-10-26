import { TypographyP } from '@/components/ui/typography';
export default function Vengeful() {
  return (
    <TypographyP>
      You gain an additional <strong>xp trigger</strong>:{' '}
      <span className="italic">
        You got payback against someone who harmed you or someone you care about
      </span>
      . If your crew helped you get payback, mark <strong>+1 rep</strong>.
    </TypographyP>
  );
}
