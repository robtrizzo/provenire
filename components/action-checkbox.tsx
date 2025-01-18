"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
export function ActionCheckbox({
  initialLevel,
  onClick,
}: {
  initialLevel?: number;
  onClick?: (n: number) => void;
}) {
  const [level, setLevel] = useState(initialLevel || 0);
  if (level === 0) {
    return (
      <Checkbox
        onClick={() => {
          setLevel(1);
          onClick && onClick(1);
        }}
        className="rounded-full"
        checked={false}
      />
    );
  }
  if (level === 1) {
    return (
      <Checkbox
        onClick={() => {
          setLevel(2);
          onClick && onClick(2);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setLevel(0);
          onClick && onClick(0);
        }}
        className="rounded-full data-[state=checked]:bg-red-600 data-[state=checked]:text-red-600"
        checked={true}
      />
    );
  }
  if (level === 2) {
    return (
      <Checkbox
        onClick={() => {
          setLevel(0);
          onClick && onClick(0);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setLevel(1);
          onClick && onClick(1);
        }}
        className="rounded-full data-[state=checked]:bg-blue-600 data-[state=checked]:text-blue-600"
        checked={true}
      />
    );
  }
}
