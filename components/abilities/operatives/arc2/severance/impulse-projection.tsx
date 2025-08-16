import { TypographyP } from "@/components/ui/typography";
export default function ImpulseProjection() {
  return (
    <>
      <TypographyP>
        It takes time for{" "}
        <span className="font-cyber">&quot;Sympathy&quot;</span> to calibrate to
        a new psyche, so while it does, <b>Harys</b> recommends taking it easy
        and only attempting to impact small movements. Your own movements will
        likely have to be exaggerated to get the desired effect on the target.
      </TypographyP>
      <div className="my-2">
        <span>
          When you activate{" "}
          <span className="font-cyber">&quot;Sympathy&quot;</span>, make a{" "}
          <b>condition</b> roll.
        </span>
        <div className="ml-2">
          <span>
            <b>1-3:</b> nasty feedback loop, <b>mark 2 stress</b>
            <br />
            <b>4,5:</b> the impulse goes through but one of their reflexes or
            emotions also reflects back onto you
            <br />
            <b>6:</b> it works
            <br />
            <b>Crit:</b> it works and they think its their own mind messing with
            them
          </span>
        </div>
      </div>
    </>
  );
}
