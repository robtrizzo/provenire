import { Faction } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { Skull } from "lucide-react";

export default function ItemSummary({
  faction,
  className,
}: {
  faction: Faction;
  className?: string;
}) {
  const { name, location, description, ticks, clock } = faction;
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">{name}</span>
      <div className="col-span-1">
        {ticks >= clock ? (
          <Skull className="text-red-800" />
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
        {description}
      </span>
      <span className="ml-auto col-span-2">{location}</span>
    </div>
  );
}
