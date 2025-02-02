import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { Operation } from "@/types/game";

export default function OperationSummary({
  operation,
  className,
}: {
  operation: Operation;
  className?: string;
}) {
  const { name, clock, ticks, effect } = operation;
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">{name}</span>
      <div className="col-span-2">
        <Clock
          max={clock}
          current={ticks}
          width={20}
          height={20}
          clickable={false}
        />
      </div>
      <span className="ml-2 text-muted-foreground text-sm col-span-6">
        {effect}
      </span>
    </div>
  );
}
