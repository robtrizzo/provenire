import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { Clock as ClockType } from "@/types/game";
import { CircleCheckBig } from "lucide-react";

export default function ScoutingSummary({
  scoutingClock,
  customName,
  className,
}: {
  scoutingClock: ClockType;
  customName?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-10">
        {customName ? customName : scoutingClock.name}
      </span>
      <div className="col-span-2 mx-auto">
        {scoutingClock.ticks >= scoutingClock.clock ? (
          <CircleCheckBig className="text-green-600" />
        ) : (
          <Clock
            max={scoutingClock.clock}
            current={scoutingClock.ticks}
            width={20}
            height={20}
            clickable={false}
          />
        )}
      </div>
    </div>
  );
}
