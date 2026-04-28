import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage, ThetaDouble } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";

export default function Opportunist() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Improvised Weaponry
      </span>
      <TypographyP>
        If you search for a way to use the factory as a weapon, you find a
        deadly trap on a{" "}
        <InlineSymbol>
          <ThetaDouble />
        </InlineSymbol>
        +. Spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , to not be in danger from your own trap.
      </TypographyP>
    </>
  );
}
