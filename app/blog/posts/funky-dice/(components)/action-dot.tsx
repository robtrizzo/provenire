import { cn } from "@/lib/utils";

export default function ActionDot({ className }: { className?: string }) {
  return (
    <div className="inline-block">
      <div className="flex gap-2">
        <div
          className={cn(
            "rounded-full border-[1px] border-solid border-primary h-4 w-4",
            className
          )}
        ></div>
      </div>
    </div>
  );
}
