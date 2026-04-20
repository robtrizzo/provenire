export default function ClockCost({
  num,
  ticks = 6,
  r = 35,
}: {
  num: number;
  ticks?: number;
  r?: number;
}) {
  const borderThickness = 2;
  const adjustedWidth = r - 2 * borderThickness;
  const adjustedHeight = r - 2 * borderThickness;

  const cx = adjustedWidth / 2;
  const cy = adjustedHeight / 2;
  const outerRadius = Math.min(adjustedWidth, adjustedHeight) / 2;
  const spokes = Array.from({ length: ticks }, (_, i) => {
    const angle = (360 / ticks) * i - 90;
    const x = cx + outerRadius * Math.cos((angle * Math.PI) / 180);
    const y = cy + outerRadius * Math.sin((angle * Math.PI) / 180);

    return (
      <line
        key={i}
        x1={cx}
        y1={cy}
        x2={x}
        y2={y}
        stroke={"hsl(215 20.2% 65.1%)"}
        strokeWidth={1}
      />
    );
  });
  const fontSize = r * 0.6; // e.g. 21px when r=35
  const shadowBlur = r * 0.06; // e.g. 2px when r=35

  return (
    <div className="p-1 flex items-center gap-2 select-none">
      <div
        className="relative border-solid border-2 border-muted-foreground rounded-full bg-red-500"
        style={{ height: r, width: r }}
      >
        <div
          className="absolute flex items-center justify-center"
          style={{ height: r, width: r }}
        >
          <span
            className="font-bold z-10 text-black mr-0.5"
            style={{
              fontSize,
              textShadow: `0px 0px ${shadowBlur}px white, 0px 0px ${shadowBlur}px white, 0px 0px ${shadowBlur}px white`,
            }}
          >
            {num}
          </span>
        </div>
        <svg
          width={r}
          height={r}
          viewBox={`0 0 ${r} ${r}`}
          className="absolute z-0"
        >
          <g>{spokes}</g>
        </svg>
      </div>
    </div>
  );
}
