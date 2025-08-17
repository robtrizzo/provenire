"use client";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function BuildupCheckboxes({
  max,
  numDisabled,
  current,
  defaultCurrent = 0,
  onChange,
  clearPosition = "start",
  className,
}: {
  max: number;
  numDisabled?: number;
  current?: number;
  defaultCurrent?: number;
  onChange?: (n: number) => void;
  clearPosition?: "start" | "end";
  className?: string;
}) {
  const numToDisable = numDisabled || 0;
  const [internalCurrent, setInternalCurrent] = useState(defaultCurrent);
  const isControlled = current !== undefined;
  const currentValue = isControlled ? current : internalCurrent;

  useEffect(() => {
    if (current !== undefined) {
      setInternalCurrent(current);
    }
  }, [current]);

  const handleOnChange = (n: number) => {
    if (!isControlled) {
      setInternalCurrent(n);
    }
    if (onChange) {
      onChange(n);
    }
  };
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {clearPosition === "start" && (
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
      )}
      {Array.from({ length: Math.min(currentValue, max - numToDisable) }).map(
        (_, i) => (
          <Checkbox
            key={`checked-${i}`}
            onClick={() => {
              handleOnChange(i + 1);
            }}
            checked={true}
            className="rounded-none data-[state=checked]:bg-red-600 data-[state=checked]:text-red-600"
          />
        )
      )}
      {Array.from({ length: max - numToDisable - currentValue }).map((_, i) => (
        <Checkbox
          key={`unchecked-${i}`}
          onClick={() => {
            handleOnChange(currentValue + i + 1);
          }}
          checked={false}
          className="rounded-none"
        />
      ))}
      {Array.from({ length: numToDisable }).map((_, i) => (
        <Checkbox
          key={`disabled-${i}`}
          disabled={true}
          checked={true}
          className="rounded-none data-[state=checked]:bg-red-800 data-[state=checked]:text-red-800"
        />
      ))}
      {clearPosition === "end" && (
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
      )}
    </div>
  );
}
