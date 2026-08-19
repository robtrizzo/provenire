import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function UseYourImagination() {
  return (
    <>
      <TypographyP>
        If you simply wait and watch, the murderous silence unsettles or
        frightens your foes. Gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        Unsettled and frightened foes cannot locate you at all, regardless of
        smell or sound.
      </TypographyP>
    </>
  );
}
