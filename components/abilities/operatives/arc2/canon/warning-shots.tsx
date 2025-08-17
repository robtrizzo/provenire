import { TypographyP } from "@/components/ui/typography";

export default function WarningShots() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Warmup Routine
      </span>
      <TypographyP>
        During <i>cascade</i>, the weapon is building up a critical amount of
        energy so that it can be fired for full effect. There are safety
        measures to prevent early energy release, but some{" "}
        <span className="font-cyber">Canons</span> have learned to fiddle their
        way around this for some extra shots.
      </TypographyP>
      <TypographyP>
        When you bypass{" "}
        <span className="font-cyber">&quot;Overkill, Beibe&apos;s&quot;</span>{" "}
        safety protocols, fire off some much weaker shots (only by comparison).
        Then make an action roll. <b>1-3:</b> fuel cell depleted; <b>4,5:</b>{" "}
        fall back to <i>ignition</i>; <b>6</b>: no consequence.
      </TypographyP>
    </>
  );
}
