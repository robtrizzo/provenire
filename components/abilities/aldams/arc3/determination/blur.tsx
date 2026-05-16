import { TypographyP } from "@/components/ui/typography";
export default function Blur() {
  return (
    <div className="flex flex-col gap-3">
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to flush your
        nerves and ligaments for a blistering burst of speed. Foes cannot react
        to it without circumstantial special training (
        <i>
          pipedancer with <b>The Dance</b>, spark with <b>Reflexes</b>
        </i>
        ) or a special ability (<i>aldams, bestial transformations</i>).
      </TypographyP>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          0 Stamina
        </span>
        <TypographyP>
          The art empowers a single motion with superhuman speed; it is your
          choice of <i>weak</i> or <i>clumsy</i>. Mark a{" "}
          <b>level 3 harm: fractures</b>.
        </TypographyP>
      </div>

      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          12 Stamina
        </span>
        <TypographyP>
          The art empowers your body with a few heartbeats of superhuman speed;
          the motions are your choice of <i>weak</i>, <i>clumsy</i>, or{" "}
          <i>painful</i> (mark a <b>level 1 harm: creaks</b>). You may use this
          to act out of <b>initiative</b> order.
        </TypographyP>
      </div>

      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          30 Stamina
        </span>
        <TypographyP>
          The art empowers your body with superhuman speed for a scene. Only
          comparably impressive speed can react to you (
          <i>Donum Aevum, Iter, Fulgur, powerful Aldams</i>). You may end it
          early to reposition anywhere in the scene.
        </TypographyP>
      </div>
    </div>
  );
}
