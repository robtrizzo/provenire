import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Lesson() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Ruiner
      </span>
      <TypographyP>
        You don&apos;t have to win the fight. You need to make them regret
        getting in your way. If you would successfully <b>Finish Them</b>, you
        may instead choose to carve them up in a particularly grisly manner, but
        leave them alive. If you do, gain <b>+2 rep; +1 spite</b>. Gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        at combat start against anyone cowardly or squeamish who has seen your
        handiwork.
      </TypographyP>
    </>
  );
}
