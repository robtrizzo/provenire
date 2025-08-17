import { TypographyP } from "@/components/ui/typography";
export default function UnlockPotential() {
  return (
    <>
      <span className="font-cyber text-muted-foreground">
        <b>
          <u>Prerequisite</u>:
        </b>{" "}
        Maximum Effort
      </span>
      <TypographyP>
        Once the <span className="font-cyber">&quot;Underdog&quot;</span>{" "}
        absorbs a critical amount of energy, it begins dispelling it into the
        air in an attempt to make room for more. This creates a shimmering heat
        effect around <span className="font-cyber">Impact</span>. A visual
        indicator that they are now at their strongest.
      </TypographyP>
      <TypographyP>
        When <span className="font-cyber">Impact&apos;s</span>{" "}
        <b>harm tracker</b> is full, they can harness the stored energy in{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> to unlock
        superhuman strength and speed for a scene. If they would take another
        hit before doing so,{" "}
        <span className="font-cyber">&quot;Underdog&quot;</span> overloads
        and... well don&apos;t let that happen, okay?
      </TypographyP>
    </>
  );
}
