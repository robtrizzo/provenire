import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Breakpoint() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Chiseling Strikes
      </span>
      <TypographyP>
        Everything has a weak spot, doesn&apos;t matter if you found it or
        created it. When you strike a weak spot in a foe&apos;s defenses, they
        are also your choice of <i>stunned</i>, <i>hampered</i>, or{" "}
        <i>chilled</i>.
      </TypographyP>
      <TypographyP>
        Alternatively you may bluff and telegraph an attack at a foe&apos;s weak
        spot, but strike somewhere else at the last second. If you do, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
