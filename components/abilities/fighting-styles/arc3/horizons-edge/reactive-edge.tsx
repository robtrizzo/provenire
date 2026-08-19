import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ReactiveEdge() {
  return (
    <>
      <TypographyP>
        Even skilled opponents can read hesitation as weakness and become
        overconfident. When they do, they often show you <i>the line</i>. If you
        pass <b>initiative</b> to your foes, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
