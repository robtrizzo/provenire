import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function PreserveTheMeat() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Traps
      </span>
      <TypographyP>
        Species which you have previously butchered for meat are considered
        studied. While fighting a studied species, if you would gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        while you already have it, you may designate a foe. Strikes from you and
        your allies avoid spoiling the meat of designated foes.
      </TypographyP>
      <TypographyP>
        If you finish combat without spoiling the meat, the foe provides{" "}
        <b>1 food</b> (or even more if particularly large). If you didn&apos;t
        use toxins, gain that much <b>blood</b> as well.
      </TypographyP>
    </>
  );
}
