import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Tempered() {
  return (
    <>
      <TypographyP>
        Whenever the Hammer marks a <b>level 3 harm</b>, they gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        and record what dealt the damage as having <i>left an impression</i>.
      </TypographyP>
      <TypographyP>
        For as long as they have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , <b>-1 stress cost</b> to <b>resisting harms</b> from sources which
        have <i>left an impression</i>.
      </TypographyP>
    </>
  );
}
