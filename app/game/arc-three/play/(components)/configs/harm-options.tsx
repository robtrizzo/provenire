"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Settings2, X } from "lucide-react";
import { TypographyH3 } from "@/components/ui/typography";
import { useFields, useHarms } from "@/contexts/arc3CharacterSheetContext";
import { Minus, Plus } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";

export default function HarmOptions() {
  const { harms, setMaxSlots, setLevelCount } = useHarms();
  const [{ maxHealing, healing }, set] = useFields();
  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button size="icon" variant="outline">
              <Settings2 />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>configure harms</TooltipContent>
      </Tooltip>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto text-sm">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3>Harms</TypographyH3>
        <FieldSet>
          <FieldDescription>
            Configure the number of ticks in your healing clock.
          </FieldDescription>
          <FieldGroup className="mt-2">
            <Field orientation="horizontal" className="justify-between">
              <FieldLabel>Healing clock ticks</FieldLabel>
              <div className="flex items-center gap-1">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  disabled={maxHealing <= 1}
                  onClick={() =>
                    set({
                      maxHealing: maxHealing - 1,
                      healing: Math.min(healing, maxHealing - 1),
                    })
                  }
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-4 text-center">{maxHealing}</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  onClick={() => set({ maxHealing: maxHealing + 1 })}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </Field>
          </FieldGroup>
          <Separator />
          <FieldDescription>
            Configure the number of harm levels and slots per level.
          </FieldDescription>

          {/* Add / remove harm levels */}
          <FieldGroup className="mt-2">
            <Field orientation="horizontal" className="justify-between">
              <FieldLabel>Harm levels</FieldLabel>
              <div className="flex items-center gap-1">
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  disabled={Object.keys(harms).length <= 1}
                  onClick={() => setLevelCount(Object.keys(harms).length - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-4 text-center">
                  {Object.keys(harms).length}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  onClick={() => setLevelCount(Object.keys(harms).length + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </Field>
          </FieldGroup>

          <FieldGroup className="mt-4 gap-3">
            {Object.entries(harms).map(([level, { maxSlots }]) => (
              <Field
                orientation="horizontal"
                key={level}
                className="justify-between"
              >
                <FieldLabel>Level {level} slots</FieldLabel>
                <div className="flex items-center gap-1">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6"
                    disabled={maxSlots <= 1}
                    onClick={() => setMaxSlots(Number(level), maxSlots - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-4 text-center">{maxSlots}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-6 w-6"
                    onClick={() => setMaxSlots(Number(level), maxSlots + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      </PopoverContent>
    </Popover>
  );
}
