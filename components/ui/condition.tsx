'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TypographyH4 } from '@/components/ui/typography';

export function Condition({
  name,
  active = false,
}: {
  name: string;
  active: boolean;
}) {
  const [isActive, setIsActive] = useState(active);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      <TypographyH4
        className={cn(
          'border-2 py-0.5 px-4 rounded-lg hover:cursor-pointer',
          isActive
            ? 'border-red-950 bg-red-950'
            : 'border-border text-muted-foreground'
        )}
      >
        {name}
      </TypographyH4>
    </div>
  );
}
