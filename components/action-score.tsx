"use client";
import { ActionCheckbox } from "@/components/action-checkbox";
import { cn } from "@/lib/utils";

export function ActionScore({
  score,
  onChange,
  disabled = false,
  className,
}: {
  score: number[];
  onChange: (s: number[]) => void;
  disabled: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <ActionCheckbox
        initialLevel={score?.[0] ?? 0}
        onClick={(n) => {
          if (disabled) return;
          onChange([n, score?.[1] ?? 0]);
        }}
        disabled={disabled}
      />
      <ActionCheckbox
        initialLevel={score?.[1] ?? 0}
        onClick={(n) => {
          if (disabled) return;
          onChange([score?.[0] ?? 0, n]);
        }}
        disabled={disabled}
      />
    </div>
  );
}
