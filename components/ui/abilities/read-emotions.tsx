import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function ReadEmotions() {
  return (
    <div>
      <TypographyP>
        The Artist may spend a downtime activty to make a{' '}
        <strong>gather information</strong> roll on a character they&apos;ve
        spent time with. If they do, they may ask any of:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What&apos;s upsetting them?</li>
        <li>How could I minimize conflict with this person?</li>
        <li>What could I do to befriend them?</li>
      </TypographyUnorderedList>
    </div>
  );
}
