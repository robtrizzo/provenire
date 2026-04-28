import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ForkedTongue() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> fell a foe with your lies
      </span>
      <TypographyP>
        Magical or cybernetic means can never cause you to tell the truth or
        divulge your plans.
      </TypographyP>
      <TypographyP>
        When you successfully tell a consequential lie, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
