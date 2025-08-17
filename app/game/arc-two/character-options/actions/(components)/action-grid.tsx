import type { Action } from "@/types/game";
import { cn } from "@/lib/utils";
import ActionDescription from "@/components/character-sheet/action-description";

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
        <ActionDescription key={a.name + i} action={a} />
      ))}
    </div>
  );
}
