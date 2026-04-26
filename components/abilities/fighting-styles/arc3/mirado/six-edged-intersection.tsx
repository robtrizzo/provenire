import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function SixEdgedIntersection() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Combat Awareness
      </span>
      <TypographyP>
        Mirado is an ancient Hiean word, which roughly translates into &quot;the
        art of six edges&quot;. The combat awareness aspects of the martial art
        is new, but the striking style has retained its roots. While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , staying close up and personal with a foe makes their large weapons and
        movements become ineffective against you.
      </TypographyP>
    </>
  );
}
