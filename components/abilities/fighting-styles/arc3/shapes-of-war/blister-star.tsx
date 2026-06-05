import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function BlisterStar() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Drills
      </span>
      <TypographyP>
        Named after an enormous trundling creature bristling with venomous
        spikes, this formation is meant to hold ground while surrounded. Ideally
        the soldiers are equipped with shields and pikes. They fight back to
        back in a tightly packed circle, presenting a hedge of speartips to
        approaching foes.
      </TypographyP>
      <TypographyP>
        For as long as the formation is courageously maintained, reduce{" "}
        <b>harms</b> caused by frontal charges by <b>2 steps</b>. You may spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to reduce an incoming <b>harm</b> to a formation comrade by{" "}
        <b>2 steps</b>.
      </TypographyP>
    </>
  );
}
