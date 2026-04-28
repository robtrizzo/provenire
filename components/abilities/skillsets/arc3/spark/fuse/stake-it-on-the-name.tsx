import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function StakeItOnTheName() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> become overwhelmingly recognized as well
        intentioned
      </span>
      <TypographyP>
        Your reputation is powerful enough to demand trust. If two groups who
        know you are at odds, may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to immediately put an end to the current disagreement.
      </TypographyP>
      <TypographyP>
        If you are ever found out to be untrustworthy, all disagreements
        resolved this way will resume. Mark <b>Guilty</b> until they are all
        once more resolved.
      </TypographyP>
    </>
  );
}
