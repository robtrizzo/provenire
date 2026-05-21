import { TypographyP } from "@/components/ui/typography";
export default function TerrorInTheDark() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Use Your Imagination
      </span>
      <TypographyP>
        Frightened foes in the dark become vulnerable to you. If a foe is
        unsettled, you may <b>push yourself</b> to ask{" "}
        <i>How do I break their resolve?</i> The <b>Narrator</b> will answer
        honestly.
      </TypographyP>
    </>
  );
}
