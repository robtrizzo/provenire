import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function XPClocksSkeleton() {
  return (
    <div className="p-1 flex items-center gap-2 justify-between select-none flex-wrap">
      <div className="p-1 flex items-center gap-2 select-none">
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
      </div>
      <div className="flex flex-wrap">
        <Button
          variant="ghost"
          className="text-xs text-muted-foreground text-center"
          disabled
        >
          spend clock
        </Button>
        <Button
          variant="ghost"
          className="text-xs text-muted-foreground text-center"
          disabled
        >
          +xp
        </Button>
        <Button
          variant="ghost"
          className="text-xs text-muted-foreground text-center"
          disabled
        >
          -xp
        </Button>
      </div>
    </div>
  );
}
