import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function OpenHand() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Spacing
      </span>
      <TypographyP>
        When you strike a foe who you&apos;ve forced into awkward spacing, you
        may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to cut their fingers or wrists. Anything that requires they have a firm
        grip (<i>grappling, wielding heavy weapons, climbing</i>) is severely
        impeded.
      </TypographyP>
    </>
  );
}
