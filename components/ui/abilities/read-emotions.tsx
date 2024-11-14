import {
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
export default function ReadEmotions() {
  return (
    <div>
      <TypographyP>
        When the Artist <b>consorts</b> or <b>gathers information</b> about a
        person&apos;s life or conditions, the <b>Narrator</b> will truthfully
        answer one of the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What&apos;s upsetting them?</li>
        <li>How could I minimize conflict with this person?</li>
        <li>What could I do to befriend them?</li>
      </TypographyUnorderedList>
    </div>
  );
}
