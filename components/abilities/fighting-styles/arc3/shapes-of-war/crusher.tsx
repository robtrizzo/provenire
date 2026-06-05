import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Crusher() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Drills
      </span>
      <TypographyP>
        Named after predators which constrict and grind their prety to pulp,
        this formation is meant to envolop a disorganized enemy and ruthlessly
        crush them under the weight of their own bodies. Soldiers are ideally
        equipped with shields and spears.
      </TypographyP>
      <TypographyP>
        While the envelopment holds, the greater the foes&apos; panic, the
        faster the grind takes its toll. You may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to gore a foe who manages to escape the press.
      </TypographyP>
    </>
  );
}
