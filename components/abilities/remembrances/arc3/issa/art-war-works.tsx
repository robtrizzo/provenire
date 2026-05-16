import { TypographyP } from "@/components/ui/typography";
export default function ArtWarWorks() {
  return (
    <>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        <b>Art</b>
      </TypographyP>
      <TypographyP>
        As a <b>downtime activity</b>, you may spend <b>2 Materials</b> and
        create a beautiful piece of art for someone. If you do,{" "}
        <b>clear a condition</b> and clear a tick from the{" "}
        <b>Dissonance clock</b> (if unlocked).
      </TypographyP>
      <TypographyP>
        <b>War</b>
      </TypographyP>
      <TypographyP>
        As a <b>downtime activity</b>, you may spend <b>2 Materials</b> and
        create a creatively effective weapon for someone. It can have a trait
        selected from <i>flashy, sadistic,</i> or <i>symbolic</i>.
      </TypographyP>
    </>
  );
}
