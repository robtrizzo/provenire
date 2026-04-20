"use client";
import { Toggle } from "@/components/ui/toggle";

interface ConditionProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function Condition({
  name,
  active = false,
  onClick = () => {},
  disabled = false,
}: ConditionProps) {
  return (
    <Toggle
      pressed={active}
      onPressedChange={() => onClick()}
      disabled={disabled}
      size="sm"
      variant="outline"
      className="rounded-full px-4 py-0.5 data-[state=on]:bg-red-950 data-[state=on]:text-white data-[state=on]:border-red-900"
    >
      {name}
    </Toggle>
  );
}
