"use client";
import { useState } from "react";
import Clock from "@/components/clock";
import { Button } from "@/components/ui/button";
export default function XPClocks({
  current,
  setVal,
}: {
  current: number;
  setVal: (n: number) => void;
}) {
  console.log("current", current);
  const [xp, setXp] = useState<number>(current);
  console.log("xp", xp);

  const numClocks = 5;

  return (
    <div className="p-1 flex items-center gap-2 justify-between select-none">
      <div className="p-1 flex items-center gap-2 select-none">
        {Array.from({ length: numClocks }, (_, i) => {
          const clockVal = Math.min(Math.max(xp - i * 6, 0), 6);
          return (
            <Clock
              key={i}
              width={35}
              height={35}
              max={6}
              current={clockVal}
              clickable={false}
            />
          );
        })}
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
          disabled={xp >= 30}
          onClick={() => {
            if (xp < 30) {
              setXp(xp + 1);
              setVal(xp + 1);
            }
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
