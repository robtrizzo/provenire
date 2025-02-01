import { Blackmail } from "@/types/game";
import { cn } from "@/lib/utils";

export default function BlackmailSummary({
  blackmail,
  className,
}: {
  blackmail: Blackmail;
  className?: string;
}) {
  const { name, effect } = blackmail;
  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">{name}</span>
      <div className="col-span-8">
        <span className="text-sm text-muted-foreground">{effect}</span>
      </div>
    </div>
  );
}
