import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Socialite() {
  return (
    <>
      <TypographyP>
        When the Adventurer <b>consorts</b> with someone for the first time,
        they gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        . If they keep it light and don&apos;t talk about anything serious, they
        gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        again.
      </TypographyP>
      <TypographyP>
        If the Adventurer <b>takes a breather</b> and does not{" "}
        <b>overindulge</b>, they gain <b>1 goodwill</b> from the community.
      </TypographyP>
    </>
  );
}
