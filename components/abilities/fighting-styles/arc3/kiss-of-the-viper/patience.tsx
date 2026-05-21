import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Patience() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Kiss
      </span>
      <TypographyP>
        Once you&apos;ve applied a toxin, all you have to do is hold out long
        enough for it to take its toll. If you do, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        . You may disengage from, defend against, and reposition around an
        afflicted foe without fear of their reprisal.
      </TypographyP>
    </>
  );
}
