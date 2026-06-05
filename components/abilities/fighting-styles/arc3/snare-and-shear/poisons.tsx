import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Poisons() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> By any Means
      </span>
      <TypographyP>
        The swamplands holds an abundance of deadly toxins and creatures who use
        them. The Steel Trap&apos;s predators may be incredibly different, but
        every living thing has somthing toxic to extract.
      </TypographyP>
      <TypographyP>
        When you strike a foe you can spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        and an <b>item slot</b> to afflict them with an extracted toxin that
        makes them <i>clumsy</i>, <i>agonized</i>, or <i>septic</i>.
      </TypographyP>
      <TypographyP>
        The larger the foe, the more toxin it takes to affect them.
      </TypographyP>
    </>
  );
}
