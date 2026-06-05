import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Ambush() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Traps
      </span>
      <TypographyP>
        If a foe thinks they are attacking you while isolated, you and any
        number of allies may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to act out of <b>initiative</b> order and attack it all at once before
        their strike can complete.
      </TypographyP>
    </>
  );
}
