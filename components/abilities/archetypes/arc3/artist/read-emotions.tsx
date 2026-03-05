import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function ReadEmotions() {
  return (
    <>
      <TypographyP>
        When the Artist <b>consorts</b> with a character or{" "}
        <b>gathers information</b> about a their life or conditions, the{" "}
        <b>Narrator</b> will truthfully answer one of the following:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What&apos;s upsetting them?</li>
        <li>How could I minimize conflict with this person?</li>
        <li>What could I do to befriend them?</li>
      </TypographyUnorderedList>
    </>
  );
}
