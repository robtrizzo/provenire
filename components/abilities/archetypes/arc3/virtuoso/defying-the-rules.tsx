import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function DefyingTheRules() {
  return (
    <div>
      <TypographyP>
        The Virtuoso can <b>push themself</b> and spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        to explain an out-of-the-box solution. If they do, they can roll with
        any action they choose with <b>standard effect</b>.
      </TypographyP>
    </div>
  );
}
