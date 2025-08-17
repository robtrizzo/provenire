import { TypographyP } from "@/components/ui/typography";
export default function Indominable() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Hurt Me Once...
      </span>
      <TypographyP>
        The difference between a dead <span className="font-cyber">Impact</span>{" "}
        and one that manages to stick around is how well they make use of the
        dampening field. Doing that effectively takes practice, dangerous
        practice.
      </TypographyP>
      <TypographyP>
        At the moment of damaging impact,{" "}
        <span className="font-cyber">Impact</span> can twist and spin to
        distribute the force across more of the dampening field&apos;s surface
        area. Doing so allows them to split up a <b>harm</b> into multiple
        lesser <b>harms</b> totaling the original.
      </TypographyP>
    </>
  );
}
