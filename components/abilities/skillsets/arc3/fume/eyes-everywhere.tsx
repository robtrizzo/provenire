import { TypographyP } from "@/components/ui/typography";
export default function EyesEverywhere() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> sacrifice a pawn for the mission
      </span>
      <TypographyP>
        You may trade <b>manpower</b> for <b>intel</b>. You may spend{" "}
        <b>1 intel</b> to reveal a <b>Faction clock</b> or <b>3 intel</b> for
        blackmail on a key <b>Faction NPC</b>.
      </TypographyP>
    </>
  );
}
