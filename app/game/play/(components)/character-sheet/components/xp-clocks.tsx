"use client";
import { useState } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
export default function XPClocks({
  current,
  setVal,
}: {
  current: number;
  setVal: (n: number) => void;
}) {
  const { theme } = useTheme();
  const [xp, setXp] = useState<number>(current);

  const dark = theme === "dark";

  const borderThickness = 2;

  const adjustedWidth = 35 - 2 * borderThickness;
  const adjustedHeight = 35 - 2 * borderThickness;

  const cx = adjustedWidth / 2;
  const cy = adjustedHeight / 2;
  const outerRadius = Math.min(adjustedWidth, adjustedHeight) / 2;

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
        stroke={dark ? "hsl(215 20.2% 65.1%)" : "hsl(215.4 16.3% 46.9%)"}
        strokeWidth={1}
      />
    );
  });

  return (
    <div className="p-1 flex items-center gap-2 justify-between select-none flex-wrap">
      <div className="p-1 flex items-center gap-2 select-none">
        <Clock
          width={35}
          height={35}
          max={6}
          current={xp % 6}
          clickable={false}
        />
        <div className="relative h-[35px] w-[35px] border-solid border-2 border-muted-foreground rounded-full bg-red-500">
          <div className="absolute h-[35px] w-[35px] flex items-center justify-center">
            <span
              className="font-bold z-10 text-black text-2xl mr-0.5"
              style={{
                textShadow:
                  "0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white",
              }}
            >
              {Math.floor(xp / 6)}
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
      <div className="flex">
        <Button
          variant="ghost"
          className="text-xs text-muted-foreground text-center w-full"
          disabled={xp < 6}
          onClick={() => {
            if (xp >= 6) {
              setXp(xp - 6);
              setVal(xp - 6);
            }
          }}
        >
          spend clock
        </Button>
        <Button
          variant="ghost"
          className="text-xs text-muted-foreground text-center w-full"
          onClick={() => {
            setXp(xp + 1);
            setVal(xp + 1);
          }}
        >
          +xp
        </Button>
        <Button
          variant="ghost"
          className="text-xs text-muted-foreground text-center w-full"
          disabled={xp <= 0}
          onClick={() => {
            if (xp > 0) {
              setXp(xp - 1);
              setVal(xp - 1);
            }
          }}
        >
          -xp
        </Button>
      </div>
    </div>
  );
}
