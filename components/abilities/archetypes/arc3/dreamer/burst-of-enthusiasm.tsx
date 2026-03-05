import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function BurstOfEnthusiasm() {
  return (
    <TypographyP>
      Until the first setback of the mission, the Dreamer gains{" "}
      <InlineSymbol>
        <Advantage />
      </InlineSymbol>{" "}
      whenever they <b>assist</b> an ally. After this, it costs them{" "}
      <b>+1 stress</b> to <b>assist</b>.
    </TypographyP>
  );
}
