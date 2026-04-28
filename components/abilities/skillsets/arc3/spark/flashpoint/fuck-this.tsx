import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function FuckThis() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> turn the tables on a hopeless situation
      </span>
      <TypographyP>
        When backed into a corner or faced with a treacherous dilemma, you may
        react with impulsive violence. If you do, clear the <b>Hopeless</b>{" "}
        condition and the crew gains{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
