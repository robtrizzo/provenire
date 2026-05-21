import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ChiselingStrikes() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Dead Weight
      </span>
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
