import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function OneDecisiveStrike() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Reactive Edge, Snap
      </span>
      <TypographyP>
        When a foe is about to end the fight with a powerful attack of their
        own, you may <b>push yourself</b>, spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , and spend <b className="text-red-500">1 Blood</b> to put your
        strongest strike directly at odds with theirs. You may roll to{" "}
        <b>Finish Them</b>. If you fail, thier attack will be all the more
        devastating. May the best win.
      </TypographyP>
    </>
  );
}
