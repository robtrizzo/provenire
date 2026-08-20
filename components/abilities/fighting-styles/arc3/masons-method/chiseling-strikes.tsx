import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ChiselingStrikes() {
  return (
    <>
      <TypographyP>
        The second time you strike a foe, you may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to create a gap in their defenses.
      </TypographyP>
    </>
  );
}
