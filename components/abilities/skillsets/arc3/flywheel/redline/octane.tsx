import { TypographyP } from "@/components/ui/typography";
export default function Octane() {
  return (
    <>
      <span className="text-muted-foreground">
        <u>Prerequisite:</u> perform an acrobatic stunt with lethal consequences
      </span>
      <TypographyP>
        <b>-1 stress cost</b> to <b>resist</b> acrobatic mishaps. <b>-2</b> when
        in a <b>desperate position</b>.
      </TypographyP>
      <i className="text-sm text-muted-foreground">
        If this makes the <b>stress</b> cost negative, instead recover that much{" "}
        <b>stress</b>.
      </i>
    </>
  );
}
