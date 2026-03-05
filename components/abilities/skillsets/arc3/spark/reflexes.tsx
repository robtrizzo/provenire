import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Reflexes() {
  return (
    <TypographyP>
      Gain{" "}
      <InlineSymbol>
        <Advantage />
      </InlineSymbol>{" "}
      when combat begins. You may spend{" "}
      <InlineSymbol>
        <Advantage />
      </InlineSymbol>{" "}
      to act out of <b>initiative</b> order. This still counts as taking your
      turn.
    </TypographyP>
  );
}
