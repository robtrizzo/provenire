import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Intrepid() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> survive a hostile labyrinth
      </span>
      <TypographyP>
        When thrust into an unfamiliar place, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , magical or cybernetic means can never cause you to become disoriented
        or lost.
      </TypographyP>
    </>
  );
}
