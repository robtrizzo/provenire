import { TypographyP } from "@/components/ui/typography";

export default function Ripple() {
  return (
    <div className="flex flex-col gap-3">
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to flush your
        muscles with strength for an explosive burst of power.
      </TypographyP>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          0 Stamina
        </span>
        <TypographyP>
          The art empowers a single motion with superhuman strength; it is your
          choice of <i>slow</i> or <i>wild</i>. Mark a{" "}
          <b>level 3 harm: ruptures</b>.
        </TypographyP>
      </div>

      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          8 Stamina
        </span>
        <TypographyP>
          The art empowers your body with a few heartbeats of superhuman
          strength; it is your choice of <i>slow</i>, <i>wild</i>, or{" "}
          <i>painful</i> (mark a <b>level 1 harm: needles</b>).
        </TypographyP>
      </div>

      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          20 Stamina
        </span>
        <TypographyP>
          The art empowers your body with superhuman strength for a scene. You
          may end it early to reinforce your body against physical trauma
          (reduce an incoming <b>harm</b> by <b>2 steps</b>)
        </TypographyP>
      </div>
    </div>
  );
}
