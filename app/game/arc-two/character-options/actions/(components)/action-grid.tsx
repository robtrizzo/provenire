import { Action } from "@/types/game";
import { cn } from "@/lib/utils";

export default async function ActionGrid({
  actions,
  className,
}: {
  actions: Action[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-2", className)}>
      {actions.map((a, i) => (
        <div key={a.name + i} className="flex flex-col">
          <b className="text-lg text-red-500">
            {a.name}
            {!!a.restrictAtStart && (
              <span className="text-amber-500 font-normal">*</span>
            )}
          </b>
          {a.suboptions && (
            <span className="text-xs text-red-700 mb-1">
              {a.suboptions.join(", ")}
            </span>
          )}
          <span className="text-sm text-muted-foreground">{a.description}</span>
        </div>
      ))}
    </div>
  );
}
