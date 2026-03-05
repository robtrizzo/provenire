import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function Overwhelmed() {
  return (
    <>
      <TypographyP>
        The Artist has an extra condition they may mark called{" "}
        <b>Overwhelmed</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Overwhelmed:</b> <b>+1 stress</b> from all sources. Clear by{" "}
        <b>taking a breather</b>.
      </TypographyBlockquote>
    </>
  );
}
