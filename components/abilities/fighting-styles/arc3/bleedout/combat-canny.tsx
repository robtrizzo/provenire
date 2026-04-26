import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function CombatCanny() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Skirmish
      </span>
      <TypographyP>
        After spending some time fighting a foe, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        You may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to discover an exploitable vital spot on a foe you&apos;ve spent time
        fighting.
      </TypographyP>
    </>
  );
}
