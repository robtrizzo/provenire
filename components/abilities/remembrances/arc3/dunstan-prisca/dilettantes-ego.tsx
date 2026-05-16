import { TypographyBlockquote, TypographyP } from "@/components/ui/typography";
export default function DilettantesEgo() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        You cannot be made to doubt your sense of identity or what you want.
        Replace the <b>Insecure</b> condition with <b>Disinterested</b>. You
        gain an <b>xp trigger:</b>{" "}
        <i>Did you unapolagetically pursue your desires?</i>
      </TypographyP>
      <TypographyBlockquote>
        <b>Disinterested:</b> clear with <b>1 Food</b> or <b>1 Material</b>, and
        by refusing to do something important asked of you.
      </TypographyBlockquote>
    </>
  );
}
