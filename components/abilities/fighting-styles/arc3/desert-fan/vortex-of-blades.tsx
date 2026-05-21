import { InlineSymbol } from "@/components/dice/dice-borders";
import { Threat } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function VortexOfBlades() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Circles in the Sand
      </span>
      <TypographyP>
        For as long as you maintain the stationary dance, you always gain an
        opportunity to parry incoming attacks that you are aware of with{" "}
        <b>-1 stress cost</b> on a{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
