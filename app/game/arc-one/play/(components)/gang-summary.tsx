import { Cohort } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { CircleCheckBig } from "lucide-react";

export default function GangSummary({
  gang,
  variant,
  className,
}: {
  gang: Cohort;
  variant?: string;
  className?: string;
}) {
  const { name, location, clock, ticks, traits } = gang;
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">{name}</span>
      <div className="col-span-1">
        {variant === "recruit" && ticks >= clock ? (
          <CircleCheckBig className="text-green-600" />
        ) : (
          <Clock
            max={clock}
            current={ticks}
            width={20}
            height={20}
            clickable={false}
          />
        )}
      </div>
      <span className="ml-2 text-muted-foreground text-sm col-span-5">
        {traits.join(", ")}
      </span>
      <span className="ml-auto col-span-2 text-sm text-wrap">{location}</span>
    </div>
  );
}
