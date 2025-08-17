import { TypographyP } from "@/components/ui/typography";

export default function WarmupRoutine() {
  return (
    <>
      <TypographyP>
        <span className="font-cyber">&quot;Overkill, Beibe&quot;</span> warmup
        procedure is a series of three phases: <i>ignition</i>, <i>cascade</i>,
        and <i>primed</i>. Each phase takes time; once <i>primed</i>, the weapon
        is ready to fire. Skilled <span className="font-cyber">Canons</span>{" "}
        have learned to use the situation to their advantage and get shots off
        faster.
      </TypographyP>
      <TypographyP>
        During <i>ignition</i>, the motor is just attempting to trigger a
        contained energy cascade. If <span className="font-cyber">Canon</span>{" "}
        manages to catch a source of volitile energy within{" "}
        <span className="font-cyber">&quot;Overkill, Beibe&apos;s&quot;</span>{" "}
        blast chamber, they can jumpstart the process.
      </TypographyP>
    </>
  );
}
