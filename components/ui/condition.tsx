'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TypographyP } from '@/components/ui/typography';

export function Condition({
  name,
  active = false,
  onClick = () => {},
  disabled = false,
}: {
  name: string;
  active: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const [isActive, setIsActive] = useState(active);

  return (
    <div
      onClick={() => {
        if (disabled) return;
        setIsActive(!isActive);
        onClick();
      }}
    >
      <TypographyP
        className={cn(
          'border-2 text-sm py-0.5 px-4 rounded-lg hover:cursor-pointer hover:bg-border',
          isActive
            ? 'border-red-950 bg-red-950 hover:bg-red-900 text-white'
            : 'border-border text-muted-foreground',
          disabled
            ? 'border-border text-muted-foreground opacity-50 hover:cursor-not-allowed hover:bg-inherit'
            : ''
        )}
      >
        {name}
      </TypographyP>
    </div>
  );
}
