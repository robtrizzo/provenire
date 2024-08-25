'use client';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
export function BuildupCheckboxes({
  max,
  current,
  onChange,
}: {
  max: number;
  current: number;
  onChange: (n: number) => void;
}) {
  const [localCurrent, setLocalCurrent] = useState(current);
  const handleOnChange = (n: number) => {
    setLocalCurrent(n);
    onChange(n);
  };
  return (
    <div className="flex justify-between items-center gap-1">
      <Button
        size="icon"
        variant="ghost"
        className="p-1 text-red-400 hover:text-red-400 h-6 w-6"
        onClick={() => {
          handleOnChange(0);
        }}
      >
        <X className="h-3 w-3" />
      </Button>
      {Array.from({ length: localCurrent }).map((_, i) => (
        <Checkbox
          key={`checked-${i}`}
          onClick={() => {
            handleOnChange(i + 1);
          }}
          checked={true}
          className="rounded-none data-[state=checked]:bg-red-600 data-[state=checked]:text-red-600"
        />
      ))}
      {Array.from({ length: max - localCurrent }).map((_, i) => (
        <Checkbox
          key={`unchecked-${i}`}
          onClick={() => {
            handleOnChange(localCurrent + i + 1);
          }}
          checked={false}
          className="rounded-none"
        />
      ))}
    </div>
  );
}
