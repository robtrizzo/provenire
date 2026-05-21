import { TypographyP } from "@/components/ui/typography";
export default function PartTheWind() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Battle Rhythm
      </span>
      <TypographyP>
        You may <b>push yourself</b> and end the dance with one final flourish.
        Which strikes all foes adjacent to your zone of control and deflects any
        incoming strike from a small weapon.
      </TypographyP>
    </>
  );
}
