'use client';
import { ActionCheckbox } from '@/components/ui/action-checkbox';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function ActionScore({
  score,
  onChange,
  className,
}: {
  score: number[];
  onChange: (s: number[]) => void;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <ActionCheckbox
        initialLevel={score?.[0] ?? 0}
        onClick={(n) => {
          onChange([n, score?.[1] ?? 0]);
        }}
      />
      <ActionCheckbox
        initialLevel={score?.[1] ?? 0}
        onClick={(n) => {
          onChange([score?.[0] ?? 0, n]);
        }}
      />
    </div>
  );
}
