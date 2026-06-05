import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function NeedleWing() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Drills
      </span>
      <TypographyP>
        Named after swarms of winged blood sucking parasites, this formation is
        loose and mobile, meant to wear down slow or outnumbered foes. Ideally
        the soldiers are equipped with short javelins. They fight while on the
        run, harrying enemies and forcing their attention.
      </TypographyP>
      <TypographyP>
        Until the formation becomes winded, foes are forced to choose between
        ignoring it and sustaining steady attrition{" "}
        <span className="text-muted-foreground">OR</span> overcommitting to
        catch a few of the slowest. When foes overcommit in this way, they
        become disorganized if you have{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        .
      </TypographyP>
    </>
  );
}
