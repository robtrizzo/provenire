import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import {
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
export default function CallThemOut() {
  return (
    <div>
      <TypographyP>
        If the Adventurer would gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        while they already have it, they can ask someone:
      </TypographyP>
      <TypographyUnorderedList>
        <li>What are your true feelings toward _?</li>
        <li>How long have you been hiding your part in _ scheme?</li>
      </TypographyUnorderedList>
      <TypographyP>
        If they answer, they mark <strong>1 xp</strong>. If they refuse, they
        mark <strong>2 stress</strong>.
      </TypographyP>
    </div>
  );
}
