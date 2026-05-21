import { TypographyP } from "@/components/ui/typography";
export default function Snap() {
  return (
    <>
      <span className="text-sm text-muted-foreground">
        <u>Prerequisite:</u> The Line, an Aldam
      </span>
      <TypographyP>
        Nicknamed <i>&quot;snap&quot;</i> for the sound novices&apos; bodies
        make while performing it, this maneuver constitutes the primary form of
        the discipline. When you see <i>the line</i>, you may spend{" "}
        <b className="text-red-500">1 Blood</b> to execute a single powerful
        blow. If you do so with substandard weaponry, your weapon is destroyed
        by the force of the blow. If you were unarmed, mark a{" "}
        <b>level 2 harm: fractures</b>.
      </TypographyP>
    </>
  );
}
