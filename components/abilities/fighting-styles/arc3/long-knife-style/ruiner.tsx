import { TypographyP } from "@/components/ui/typography";
export default function Ruiner() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Spacing
      </span>
      <TypographyP>
        When you inflict a substantial blow you may choose to make it less
        lethal in exchange for <i>disfiguring</i> - a scar, a missing ear, a
        ruined eye. Foes who see you do this may hesitate before engaging. You
        gain <b>+1 spite</b>.
      </TypographyP>
    </>
  );
}
