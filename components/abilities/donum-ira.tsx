import { TypographyP, TypographyBlockquote } from "@/components/ui/typography";
export default function DonumIra() {
  return (
    <>
      <TypographyP>
        When the <b className="text-blue-500">Water</b> hollowed you out, it
        made space for a flood of powerful emotions. They course through you
        like hot currents in a cool basin: stirring you to action. Pushing you
        to anger. When you are, wielding it comes easy, like opening your hand
        to release steam. When you&apos;re centered though, it&apos;s like
        forcing a smile on your worst of days.
      </TypographyP>
      <TypographyP>
        Gain <b>+1 max Stress</b> and the <b>Enraged Condition</b>. When
        you&apos;re <b>Enraged</b>, <b>Donum Ira</b> is empowered. When
        you&apos;re not <b>Enraged</b>, abilities cost an additional{" "}
        <b>1 Stress</b> to use.
      </TypographyP>
      <TypographyBlockquote>
        <b>Enraged:</b> This goes beyond momentary anger, this is a
        generational, primal emotion. You cannot participate in group actions to
        avoid danger. Clear by draining your body of{" "}
        <b className="text-blue-500">Water</b>.
      </TypographyBlockquote>
      <TypographyP>
        Developing <b>Donum Ira</b> further is a deeply personal task, requiring
        the wielder to reckon with their own emotions as well as the new ones
        introduced to their psyche. And do a substantial degree, it requires
        understanding others&apos; emotions as well.
      </TypographyP>
    </>
  );
}
