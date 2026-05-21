import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function CirclesInTheSand() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Dancing Fan
      </span>
      <TypographyP>
        The foundation of the dance is circles. The reach of your blade, the
        flow of your footwork, the angle of your attacks. Putting it all
        together creates a treacherous and unpredictable zone for your foes.
        While you dance like this you are stationary; but, if you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        any foe moving through your zone is automatically struck.
      </TypographyP>
    </>
  );
}
