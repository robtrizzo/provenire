import { Skeleton } from "@/components/ui/skeleton";

export default function WealthTrackerSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-[35px] w-[35px] rounded-full" />
    </div>
  );
}
