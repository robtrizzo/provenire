import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function ThirdEye() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Combat Instinct
      </span>
      <TypographyP>
        If you would gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        while you already have it during combat, you may ask the <b>Narrator</b>{" "}
        <i>&quot;What am I missing?&quot;</i>. The <b>Narrator</b> must answer
        honestly.
      </TypographyP>
    </>
  );
}
