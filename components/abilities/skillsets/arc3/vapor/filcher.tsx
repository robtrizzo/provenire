import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Filcher() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> pickpocket while the stakes are lethal
      </span>
      <TypographyP>
        Whenever something dramatic happens which captures everyone&apos;s
        attention, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        If you would gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        while you already have it, you may steal any object in the scene which
        is not held, worn, or tied down.
      </TypographyP>
    </>
  );
}
