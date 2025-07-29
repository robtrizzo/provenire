const borderThickness = 2;

const adjustedWidth = 35 - 2 * borderThickness;
const adjustedHeight = 35 - 2 * borderThickness;

const cx = adjustedWidth / 2;
const cy = adjustedHeight / 2;
const outerRadius = Math.min(adjustedWidth, adjustedHeight) / 2;

export default async function ClockCost({ num }: { num: number }) {
  const spokes = Array.from({ length: 6 }, (_, i) => {
    const angle = (360 / 6) * i - 90;
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

  return (
    <div className="p-1 flex items-center gap-2 select-none">
      <div className="relative h-[35px] w-[35px] border-solid border-2 border-muted-foreground rounded-full bg-red-500">
        <div className="absolute h-[35px] w-[35px] flex items-center justify-center">
          <span
            className="font-bold z-10 text-black text-2xl mr-0.5"
            style={{
              textShadow:
                "0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white",
            }}
          >
            {num}
          </span>
        </div>
        <svg
          width={35}
          height={35}
          viewBox={`0 0 ${35} ${35}`}
          className="absolute z-0"
        >
          <g>{spokes}</g>
        </svg>
      </div>
    </div>
  );
}
