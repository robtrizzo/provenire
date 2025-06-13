import { Item } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";

export default function AlchemySummary({
  item,
  className,
}: {
  item: Item;
  className?: string;
}) {
  const { name, clock, ticks, slots, traits, uses = 3 } = item;
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">{name}</span>
      <div className="col-span-1">
        <Clock
          max={clock}
          current={ticks}
          width={20}
          height={20}
          clickable={false}
        />
      </div>
      <span className="ml-2 text-muted-foreground text-sm col-span-4">
        {traits.join(", ")}
      </span>
      <span className="ml-auto mr-1 col-span-2">
        {slots} {slots > 1 ? "slots" : "slot"}
      </span>
      <div className="col-span-1">
        <Clock
          max={3}
          current={uses}
          width={20}
          height={20}
          clickable={false}
        />
      </div>
    </div>
  );
}
