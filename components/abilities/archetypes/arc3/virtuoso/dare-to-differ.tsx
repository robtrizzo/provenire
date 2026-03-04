import { InlineSymbol } from "@/components/dice/dice-borders";
import { ThetaDouble, Threat } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function DareToDiffer() {
  return (
    <div>
      <TypographyP>
        During downtime, hold <b>1 Steady</b> each time someone else rolls a
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        . Spend <b>3 Steady</b> to have a burst of impulsive and creative
        energy. If you do, you may correct the last failed roll. Approach the
        situation from a compltely different angle and spare no one&apos;s
        feelings. Treat the roll as a{" "}
        <InlineSymbol>
          <ThetaDouble />
        </InlineSymbol>{" "}
        and everyone else in the crew marks <b>1 stress</b>.
      </TypographyP>
    </div>
  );
}
