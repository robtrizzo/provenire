import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Icon() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> become the cornerstone of a community
      </span>
      <TypographyP>
        Your endless contributions to your communities have made you an
        intrinsic part of their fabric; without you they would be
        unrecognizable. While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , members of your community will always come to your defense.
      </TypographyP>
      <TypographyP>
        You may spend <b>1 manpower</b> to tick a friendly <b>Faction clock</b>.
      </TypographyP>
    </>
  );
}
