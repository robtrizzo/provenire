import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Drills() {
  return (
    <>
      <TypographyP>
        What the Kilder lack in <b>Donums</b> and equipment they make up for
        with discipline and teamwork. Kilder&apos;s armies drilled their
        soldiers in a variety of formations; each one tailored to the weaknesses
        of a particular foe.
      </TypographyP>
      <TypographyP>
        Whenver you unlock a <b>Shapes of War</b> ability, pick a gang to teach
        it to. Whenever you begin combat, pick a starting formation. If
        you&apos;re alongside a gang trained in this formation, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        Unlock the <b>Shapes of War</b> skill.
      </TypographyP>
    </>
  );
}
