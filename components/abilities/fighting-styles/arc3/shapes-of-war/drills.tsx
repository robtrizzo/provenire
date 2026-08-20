import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Drills() {
  return (
    <>
      <TypographyP>
        Whenver you unlock a <b>Shapes of War</b> ability, pick a gang to teach
        it to. Whenever you begin combat, pick a starting formation. If you're
        alongside a gang trained in this formation, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
