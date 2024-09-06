import { TypographyP } from '@/components/ui/typography';
export default function Overwhelmed() {
  return (
    <div>
      <TypographyP>
        The Artist has an extra condition they may mark called{' '}
        <strong>Overwhelmed</strong>. While it's marked, they take{' '}
        <strong>+1 stress</strong> from all sources. It may be cleared by by
        rolling a <strong>6</strong> on a <strong>relax</strong> action.
      </TypographyP>
    </div>
  );
}
