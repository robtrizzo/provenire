import { InlineSymbol } from "@/components/dice/dice-borders";
import { ArrowDouble } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function VillainousIntellect() {
  return (
    <div>
      <TypographyP>
        When they <b>shift the blame</b>, the Strategist may spend{" "}
        <b>1 goodwill</b> and explain their plans to the scapegoat as it&apos;s
        happening. If they do, they gain{" "}
        <InlineSymbol>
          <ArrowDouble />
        </InlineSymbol>
        , <b>1 rep</b>, and <b>mark 1 xp</b>.
      </TypographyP>
    </div>
  );
}
