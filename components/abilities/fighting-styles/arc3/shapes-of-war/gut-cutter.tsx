import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function GutCutter() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Drills
      </span>
      <TypographyP>
        Named after shelled reptiles which hunt by charging their prey, this
        formation is meant to penetrate a stationary defensive formation.
        Ideally soldiers are equipped with tower shields which double as
        battering rams for the vanguard. The formation is a wedge tip with a
        column of allies tightly packed behind.
      </TypographyP>
      <TypographyP>
        When executed properly, render an organized foe disorganized; or throw a
        disorganized foe into chaos. Spend{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>{" "}
        as part of the initial charge to cause a chosen foe to be surrounded by
        your allies.
      </TypographyP>
    </>
  );
}
