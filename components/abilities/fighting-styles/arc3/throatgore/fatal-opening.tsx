import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage, ThetaTriple } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function FatalOpening() {
  return (
    <>
      <TypographyP>
        When you feint a charge, you grant an ally{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        . On a{" "}
        <InlineSymbol>
          <ThetaTriple />
        </InlineSymbol>
        , the target is vulnerable to your ally&apos;s next strike.
      </TypographyP>
    </>
  );
}
