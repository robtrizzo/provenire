import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Empathize() {
  return (
    <>
      <TypographyP>
        When <b>comforting</b>, instead of rolling the Idealist can ask a deep
        personal question. The character they comfort may answer or reject it.
      </TypographyP>
      <TypographyP>
        If they answer it, you may advance your <b>bond</b> with one another and
        choose one other <b>comfort</b> option.
      </TypographyP>
      <TypographyP>
        If they reject it, the Idealist marks <b>1 stress</b> and the character
        they were trying to <b>comfort</b> gains{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
