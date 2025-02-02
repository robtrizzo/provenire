import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { Clock as ClockType } from "@/types/game";
import { CircleCheckBig } from "lucide-react";

export default function ClockSummary({
  clock,
  customName,
  className,
}: {
  clock: ClockType;
  customName?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-10">
        {customName ? customName : clock.name}
      </span>
      <div className="col-span-2 mx-auto">
        {clock.ticks >= clock.clock ? (
          <CircleCheckBig className="text-green-600" />
        ) : (
          <Clock
            max={clock.clock}
            current={clock.ticks}
            width={20}
            height={20}
            clickable={false}
          />
        )}
      </div>
    </div>
  );
}
