import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ThirstForKnowledge() {
  return (
    <div>
      <TypographyP>
        The Strategist is a lifelong student and has a network of expert
        instructors. When they <b>train</b> with one of these instructors while
        they have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , they mark <b>1 xp</b>.
      </TypographyP>
    </div>
  );
}
