import { TypographyP } from "@/components/ui/typography";
export default function FatalFinisher() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> Fatal Opening
      </span>
      <TypographyP>
        You may <b>push yourself</b> to make a devastating blow against an
        overwhelmed, cornered, or prone foe.
      </TypographyP>
    </>
  );
}
