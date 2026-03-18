import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function SteelyEyed() {
  return (
    <>
      <TypographyP>
        Magical or cybernetic means can never cause you to back down or flee
        from a fight. When this happens, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
      <TypographyP>
        If you would get into a fight with an insurmountable foe, clear the{" "}
        <b>Afraid condition</b> if it is marked.
      </TypographyP>
    </>
  );
}
