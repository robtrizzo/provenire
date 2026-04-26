import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";

export default function TheDance() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Basic Movements
      </span>
      <TypographyP>
        For as long as you choose to evade attacks instead of attacking a foe,
        you cannot be caught by someone without special training (
        <i>machinist, flywheel, pipedancer</i>) or a special ability (
        <i>bestial transformation</i>).
      </TypographyP>
      <TypographyP>
        You may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to briefly evade attacks from those with special training.
      </TypographyP>
    </>
  );
}
