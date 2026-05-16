import { TypographyP } from "@/components/ui/typography";
export default function Rhythm() {
  return (
    <div className="flex flex-col gap-3">
      <TypographyP>
        You may spend <b className="text-red-500">1 Blood</b> to perpetuate or
        repeat a familiar motion for far longer than would otherwise be humanly
        possible. Kilder armies would use this to run for days at a time.
      </TypographyP>
      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          0 Stamina
        </span>
        <TypographyP>
          The art enables a full day of nonstop strenuous motion. Once done,
          fill all open <b>harms</b> with <b>exhausted</b>.
        </TypographyP>
      </div>

      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          10 Stamina
        </span>
        <TypographyP>
          Increase your <b className="text-red-500">max Blood</b> by <b>1</b>.
        </TypographyP>
        <TypographyP>
          The art empowers a full week of nonstop strenuous motion. Once done,
          mark two <b>level 1 harms: fatigued</b>.
        </TypographyP>
      </div>

      <div className="border-l-2 pl-3">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">
          25 Stamina
        </span>
        <TypographyP>
          Increase your <b className="text-red-500">max Blood</b> by <b>2</b>.
        </TypographyP>
        <TypographyP>
          The art empowers the body to continue perpetually, or until starvation
          or exposure take their toll.
        </TypographyP>
      </div>
    </div>
  );
}
