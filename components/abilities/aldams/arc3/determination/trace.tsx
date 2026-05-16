import { TypographyP } from "@/components/ui/typography";
export default function Trace() {
  return (
    <div className="flex flex-col gap-3">
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to dilate your
        senses and drink in your surroundings.
      </TypographyP>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          0 Stamina
        </span>
        <TypographyP>
          The art empowers your senses with superhuman acuity for a breath.
          Afterwards your mind is sluggish: you struggle to react to urgent
          stimuli and you always go last in <b>initiative</b> order.
        </TypographyP>
      </div>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          6 Stamina
        </span>
        <TypographyP>
          The art empowers your body with superhuman senses for a minute. During
          this time any intense sensations are highly agitating, mark a{" "}
          <b>level 1 harm: overloaded</b>.
        </TypographyP>
      </div>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          15 Stamina
        </span>
        <TypographyP>
          The art empowers your body with superhuman senses for an hour. Instead
          of active perception you may choose to meditate on the surrounding
          stimuli: anytime something which makes noise could surprise you, you
          may spend <b>2 stress</b> to instead be prepared.
        </TypographyP>
      </div>
    </div>
  );
}
