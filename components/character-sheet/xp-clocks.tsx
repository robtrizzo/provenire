"use client";
import { FC, ReactNode, useState } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Skeleton } from "@/components/ui/skeleton";

interface XPClocksProps {
  children: ReactNode;
}

interface ClocksProps {
  initial: number;
  setVal: (n: number) => void;
}

interface ControlsProps {
  initial: number;
  setVal: (n: number) => void;
}

type Clocks = FC<ClocksProps> & {
  Skeleton: FC;
};

type Controls = FC<ControlsProps> & {
  Skeleton: FC;
};

type XPClocks = FC<XPClocksProps> & {
  Clocks: Clocks;
  Controls: Controls;
};

function useXPClocks(initial: number, setVal: (n: number) => void) {
  const [xp, setXp] = useState<number>(initial);

  const addXP = () => {
    setXp(xp + 1);
    setVal(xp + 1);
  };

  const removeXP = () => {
    if (xp > 0) {
      setXp(xp - 1);
      setVal(xp - 1);
    }
  };

  const spendClock = () => {
    if (xp >= 6) {
      setXp(xp - 6);
      setVal(xp - 6);
    }
  };

  return {
    xp,
    addXP,
    removeXP,
    spendClock,
    clocks: Math.floor(xp / 6) || 0,
    segments: xp % 6,
  };
}

const XPClocks: XPClocks = ({ children }: XPClocksProps) => {
  return (
    <div className="p-1 flex items-center gap-2 justify-between select-none flex-wrap">
      {children}
    </div>
  );
};

const Clocks: Clocks = ({ initial, setVal }: ClocksProps) => {
  const { theme } = useTheme();
  const { clocks, segments } = useXPClocks(initial, setVal);

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
    <div className="p-1 flex items-center gap-2 select-none">
      <Clock
        width={35}
        height={35}
        max={6}
        current={segments}
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
            {clocks}
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
};

const ClocksSkeleton: FC = () => {
  return (
    <div className="p-1 flex items-center gap-2 select-none">
      <Skeleton className="h-[35px] w-[35px] rounded-full" />
      <Skeleton className="h-[35px] w-[35px] rounded-full" />
    </div>
  );
};

const Controls: Controls = ({ initial, setVal }: ControlsProps) => {
  const { xp, addXP, removeXP, spendClock } = useXPClocks(initial, setVal);
  return (
    <div className="flex flex-wrap">
      <Button
        variant="ghost"
        className="text-xs text-muted-foreground text-center"
        disabled={xp < 6}
        onClick={spendClock}
      >
        spend clock
      </Button>
      <Button
        variant="ghost"
        className="text-xs text-muted-foreground text-center"
        onClick={addXP}
      >
        +xp
      </Button>
      <Button
        variant="ghost"
        className="text-xs text-muted-foreground text-center"
        disabled={xp <= 0}
        onClick={removeXP}
      >
        -xp
      </Button>
    </div>
  );
};

const ControlsSkeleton: FC = () => {
  return (
    <div className="flex flex-wrap">
      <Button
        variant="ghost"
        className="text-xs text-muted-foreground text-center"
        disabled
      >
        spend clock
      </Button>
      <Button
        variant="ghost"
        className="text-xs text-muted-foreground text-center"
        disabled
      >
        +xp
      </Button>
      <Button
        variant="ghost"
        className="text-xs text-muted-foreground text-center"
        disabled
      >
        -xp
      </Button>
    </div>
  );
};
Clocks.Skeleton = ClocksSkeleton;
XPClocks.Clocks = Clocks;
Controls.Skeleton = ControlsSkeleton;
XPClocks.Controls = Controls;
export default XPClocks;
