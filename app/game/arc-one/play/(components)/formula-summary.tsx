import { Item } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { CircleCheckBig } from "lucide-react";

export default function FormulaSummary({
  item,
  className,
}: {
  item: Item;
  className?: string;
}) {
  const { name, clock, ticks, traits } = item;
  console.log("ticks", ticks);
  console.log("clock", clock);
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-5">{name}</span>
      <div className="col-span-2 mx-auto">
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
      <span className="ml-2 text-muted-foreground text-sm col-span-5">
        {traits.join(", ")}
      </span>
    </div>
  );
}
