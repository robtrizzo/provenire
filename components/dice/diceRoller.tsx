'use client';
import useDice from '@/hooks/useDice';

export default function DiceRoller({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const dice = useDice();
  return (
    <div className={className} id="dice-arena">
      {children}
    </div>
  );
}
