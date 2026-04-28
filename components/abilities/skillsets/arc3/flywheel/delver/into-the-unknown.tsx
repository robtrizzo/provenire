import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function IntoTheUnknown() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> discover an entrance into the <i>wallsapce</i>
      </span>
      <TypographyP>
        You&apos;ve learned the signs of the Wall Peoples&apos; passing. You may
        spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to identify an entrance into the <i>wallspace</i> which they inhabit.
        But be careful. They&apos;re in here somewhere...
      </TypographyP>
    </>
  );
}
