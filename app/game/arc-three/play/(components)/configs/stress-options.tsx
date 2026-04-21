"use client";

import { Button } from "@/components/ui/button";
import { Ellipsis, Minus, Plus, RotateCcw } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DEFAULT_MAX_STRESS,
  useField,
  useFields,
} from "@/contexts/arc3CharacterSheetContext";

export default function StressOptions() {
  const [{ maxStress, currentConditions }, set] = useFields();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="start">
        <DropdownMenuItem onSelect={() => set({ maxStress: maxStress + 1 })}>
          <Plus /> increase max stress
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={maxStress <= currentConditions.length}
          onSelect={() =>
            set({
              maxStress: Math.max(maxStress - 1, currentConditions.length),
            })
          }
        >
          <Minus /> decrease max stress
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => set({ maxStress: DEFAULT_MAX_STRESS })}
        >
          <RotateCcw /> reset to default
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
