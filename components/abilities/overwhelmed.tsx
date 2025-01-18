import { TypographyP } from '@/components/ui/typography';
export default function Overwhelmed() {
  return (
    <div>
      <TypographyP>
        The Artist has an extra condition they may mark called{' '}
        <b>Overwhelmed</b>. While it&apos;s marked, they take <b>+1 stress</b>{' '}
        from all sources. It may be cleared by <b>taking a breather</b>.
      </TypographyP>
    </div>
  );
}
