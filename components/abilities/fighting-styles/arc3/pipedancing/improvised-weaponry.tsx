import { InlineSymbol } from "@/components/dice/dice-borders";
import { ThetaTriple } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";

export default function ImprovisedWeaponry() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Basic Movements
      </span>
      <TypographyP>
        When you scrounge for weapons, it will have a random trait from{" "}
        <i>
          blocking, brace, deadly, disarm, distracting, nonlethal, reach, trip
        </i>
        . Two traits on a{" "}
        <InlineSymbol>
          <ThetaTriple />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
