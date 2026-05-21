import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function BattleRhythm() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Dancing Fan
      </span>
      <TypographyP>
        Your swirling blades can be dangerous to allies just as much as foes.
        But to the initiated, the blades swing to a predictable beat. Allies
        trained in any musical or dance skills can syncopate their movements and
        carefully pass through your dance. Narscillians can do so even without
        being able to see.
      </TypographyP>
      <TypographyP>
        If an ally is making music as combat begins, you gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
