import { TypographyP } from "@/components/ui/typography";
export default function Hilt() {
  return (
    <div className="flex flex-col gap-3">
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to wield a
        familiar tool as naturally as it were an extension of your body.
      </TypographyP>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          0 Stamina
        </span>
        <TypographyP>
          The art empowers a few heartbeats of superhuman accuracy and dexterity
          with your tool. You are your choice of <i>tunnel-visioned</i> or{" "}
          <i>knuckle-locked</i>. Mark <b>3 stress</b>.
        </TypographyP>
      </div>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          8 Stamina
        </span>
        <TypographyP>
          The art empowers 1 minute of superhuman accuracy and dexterity with
          your tool. You are never at a disadvantage due to the quality of your
          tool. Mark <b>2 stress</b> or be <i>tunnel-visioned</i> or{" "}
          <i>knuckle-locked</i>.
        </TypographyP>
      </div>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          20 Stamina
        </span>
        <TypographyP>
          The art sustains superhuman accuracy and dexterity with a tool for a
          scene. Its work is functionally flawless. You may instead use this in{" "}
          <b>downtime</b> to instantly and perfectly complete a task that would
          otherwise take hours or be beyond human capability.
        </TypographyP>
      </div>
    </div>
  );
}
