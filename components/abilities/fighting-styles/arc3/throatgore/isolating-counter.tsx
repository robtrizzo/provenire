import { InlineSymbol } from "@/components/dice/dice-borders";
import { Threat } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function IsolatingCounter() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Pack Tactics
      </span>
      <TypographyP>
        If an isolated foe attacks an ally, you gain an opportunity to interfere
        with <b>-1 stress cost</b> on a{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        .
      </TypographyP>
      <i className="text-sm text-muted-foreground font-serif">
        If this makes the <b>stress</b> cost negative, instead recover that much{" "}
        <b>stress</b>.
      </i>
    </>
  );
}
