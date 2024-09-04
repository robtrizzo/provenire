'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TypographyP } from '@/components/ui/typography';

export function Condition({
  name,
  active = false,
  onClick = () => {},
}: {
  name: string;
  active: boolean;
  onClick?: () => void;
}) {
  const [isActive, setIsActive] = useState(active);

  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
        onClick();
      }}
    >
      <TypographyP
        className={cn(
          'border-2 text-sm py-0.5 px-4 rounded-lg hover:cursor-pointer hover:bg-border',
          isActive
            ? 'border-red-950 bg-red-950 hover:bg-red-900 text-white'
            : 'border-border text-muted-foreground'
        )}
      >
        {name}
      </TypographyP>
    </div>
  );
}
