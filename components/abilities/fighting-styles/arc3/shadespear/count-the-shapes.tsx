import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function CountTheShapes() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Sister Shade Isn&apos;t Smiling
      </span>
      <TypographyP>
        Unsettled and frightened foes have no way of knowing how many opponents
        they face. While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        you may choose to move and sound like more than one person, dividing
        your foes&apos; attention between threats that may or may not exist.
      </TypographyP>
    </>
  );
}
