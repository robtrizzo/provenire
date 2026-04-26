import { TypographyP } from "@/components/ui/typography";
export default function Unstoppable() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Bloody Counter
      </span>
      <TypographyP>
        For as long as you are fighting, your <b>Harms</b> cannot be used to
        prevent you from continuing to fight.
      </TypographyP>
    </>
  );
}
