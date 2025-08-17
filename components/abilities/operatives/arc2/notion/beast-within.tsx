import { TypographyP } from "@/components/ui/typography";
export default function BeastWithin() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Night Terrors
      </span>
      <TypographyP>
        After enough time in shared nightmares and life-or-death scenarios,{" "}
        <span className="font-cyber">Notion</span> may begin to either:
        harmonize with <span className="text-muted-foreground text-sm">OR</span>{" "}
        wrest control of <span className="font-cyber">&quot;Ravager&quot;</span>{" "}
        (player&apos;s choice). One way or another,{" "}
        <span className="font-cyber">Notion</span> learns to tap into{" "}
        <span className="font-cyber">&quot;Ravager&quot;</span> never-ending
        thirst for vengeance.
      </TypographyP>
      <TypographyP>
        <span className="font-cyber">Notion</span> may <b>push themself</b> and
        gain <b>+2 heat</b> to multi-manifest bestial transformations.
      </TypographyP>
    </>
  );
}
