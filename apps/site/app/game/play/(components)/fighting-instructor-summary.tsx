import { FightingInstructor } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { CircleCheckBig } from "lucide-react";

export default function FightingInstructorSummary({
  fightingInstructor,
  className,
}: {
  fightingInstructor: FightingInstructor;
  className?: string;
}) {
  const { name, fightingStyle, clock, ticks, description } = fightingInstructor;

  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">
        {name} ({fightingStyle})
      </span>
      <div className="col-span-2">
        {ticks >= clock ? (
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
      <div className="col-span-6">
        <span className="text-muted-foreground text-xs">{description}</span>
      </div>
    </div>
  );
}
