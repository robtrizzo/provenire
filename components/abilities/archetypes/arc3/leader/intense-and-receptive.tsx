import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function IntenseAndReceptive() {
  return (
    <>
      <TypographyP>
        At the start of a mission the Leader can either explain their plan or
        listen to the team&apos;s ideas.
      </TypographyP>
      <TypographyP>
        If they explain their plan, everyone else on the team gains{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        If they listen to the team&apos;s ideas, they mark <b>1 xp</b> and can{" "}
        <b>assist</b> each teammate once at <b>-1 stress cost</b>.
      </TypographyP>
    </>
  );
}
