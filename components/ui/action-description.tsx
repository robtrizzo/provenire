import type { Action } from '@/types/game';
import { TypographyH4 } from '@/components/ui/typography';
import { VenetianMask, Flame, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

function AttributeIcon({
  attribute,
}: {
  attribute: 'Heart' | 'Instinct' | 'Machina';
}) {
  switch (attribute) {
    case 'Heart':
      return <Flame className="inline-block mb-3" />;
    case 'Instinct':
      return <Activity className="inline-block mb-4" />;
    case 'Machina':
      return <VenetianMask className="inline-block mb-2" />;
    default:
      return null;
  }
}

export default function ActionDescription({
  action,
  className,
}: {
  action: Action;
  className?: string;
}) {
  return (
    <TypographyH4 className={cn(className)}>
      {action.name} <AttributeIcon attribute={action.attribute} />:{' '}
      <span className="text-sm">{action.description}</span>
    </TypographyH4>
  );
}
