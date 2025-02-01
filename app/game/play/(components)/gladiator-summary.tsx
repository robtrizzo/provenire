import { Gladiator } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";

export default function GladiatorSummary({
  gladiator,
  className,
}: {
  gladiator: Gladiator;
  className?: string;
}) {
  const { name, rank } = gladiator;
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-10">{name}</span>
      <div className="col-span-2">
        <Clock
          max={4}
          current={rank}
          width={20}
          height={20}
          clickable={false}
        />
      </div>
    </div>
  );
}
