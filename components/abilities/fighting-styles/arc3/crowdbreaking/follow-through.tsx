import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function FollowThrough() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Cascade
      </span>
      <TypographyP>
        While you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , your attacks with crowdbreaking weapons knock opponents back or over.
      </TypographyP>
      <TypographyP>
        If a foe flees from you, gain{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
