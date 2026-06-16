import { cn } from "@/lib/utils";

export default function ActionDot({ className }: { className?: string }) {
  return (
    <span className="inline-block">
      <span className="flex gap-2">
        <span
          className={cn(
            "rounded-full border border-solid border-primary h-4 w-4",
            className,
          )}
        ></span>
      </span>
    </span>
  );
}
