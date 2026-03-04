import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function GettingInvolved() {
  return (
    <TypographyP>
      If the Leader spends a <b>downtime</b> activity helping someone else, both
      the Leader and that character gain{" "}
      <InlineSymbol>
        <Advantage />
      </InlineSymbol>
      .
    </TypographyP>
  );
}
