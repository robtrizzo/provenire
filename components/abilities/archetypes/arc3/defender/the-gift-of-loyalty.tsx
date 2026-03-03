import { InlineSymbol } from "@/components/dice/dice-borders";
import { ArrowDouble } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function TheGiftOfLoyalty() {
  return (
    <>
      <TypographyP>
        Magical or cybernetic means can never cause you to hurt or sabotage your
        crew or loved ones. When this happens, gain{" "}
        <InlineSymbol>
          <ArrowDouble />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        <b>+2 stress cost</b> to <b>resist</b> being manipulated, persuaded, or
        read by someone you&apos;re close to.
      </TypographyP>
    </>
  );
}
