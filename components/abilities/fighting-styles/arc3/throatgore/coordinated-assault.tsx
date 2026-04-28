import { InlineSymbol } from "@/components/dice/dice-borders";
import { ThetaDouble } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function CoordinatedAssault() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Pack Tactics
      </span>
      <TypographyP>
        When you assist a teammate on an attack, on a{" "}
        <InlineSymbol>
          <ThetaDouble />
        </InlineSymbol>
        {"+ "}
        the foe is also one of (<i>tripped, knocked back, disarmed</i>).
      </TypographyP>
    </>
  );
}
