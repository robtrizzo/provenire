import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function Strain() {
  return (
    <TypographyP>
      You may mark a <b>level 2 harm</b> (
      <i className="text-muted-foreground">
        cannot be <b>resisted</b> or reduced
      </i>
      ) rather than marking <b>2 stress</b> to <b>push yourself</b> while in
      combat. If you do, also gain{" "}
      <InlineSymbol>
        <Advantage />
      </InlineSymbol>
      .
    </TypographyP>
  );
}
