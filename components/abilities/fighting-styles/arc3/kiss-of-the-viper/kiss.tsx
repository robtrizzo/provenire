import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Kiss() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> The Factory Has Fangs
      </span>
      <TypographyP>
        When you strike a foe you can spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        and an <b>item slot</b> to afflict them with a toxin that makes them{" "}
        <i>loose-lipped</i>, <i>reckless</i>, or <i>fascinated</i>.
      </TypographyP>
      <TypographyP>
        The larger the foe, the more toxin it takes to afflict them.
      </TypographyP>
    </>
  );
}
