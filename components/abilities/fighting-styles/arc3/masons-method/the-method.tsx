import { TypographyP } from "@/components/ui/typography";
export default function TheMethod() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Trickster&apos;s Grin
      </span>
      <TypographyP>
        If you&apos;ve fooled your foe at least once throughout the fight you
        may <b>push yourself</b> to reveal your real agenda.{" "}
        <i>
          While they thought you were attacking them, what were you actually
          accomplishing?
        </i>
      </TypographyP>
    </>
  );
}
