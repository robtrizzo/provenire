import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function PressTheAdvantage() {
  return (
    <TypographyP>
      You may hold a second{" "}
      <InlineSymbol>
        <Advantage />
      </InlineSymbol>
      .
    </TypographyP>
  );
}
