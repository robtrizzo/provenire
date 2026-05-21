import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Leverage() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Open Hand
      </span>
      <TypographyP>
        Whenever you would strike a foe vulnerable to you, you may instead take
        them hostage. While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , they can&apos;t slip from your grasp unscathed.
      </TypographyP>
    </>
  );
}
