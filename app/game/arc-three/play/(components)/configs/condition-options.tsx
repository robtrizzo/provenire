"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { X, Settings2 } from "lucide-react";
import { TypographyH3 } from "@/components/ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DEFAULT_CONDITIONS,
  OPTIONAL_CONDITONS,
  useFields,
} from "@/contexts/arc3CharacterSheetContext";
import ConditionDescription from "@/components/condition-description";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Condition } from "@/types/game";
import { cn } from "@/lib/utils";

const sourceTypeColors: Record<string, string> = {
  remembrance: "text-purple-600",
  archetype: "text-amber-600",
  skillset: "text-violet-600",
  donum: "text-fuchsia-600",
  transformation: "text-orange-600",
};

export default function ConditionOptions() {
  const [{ conditions, currentConditions }, set] = useFields();

  const handleCheckedChanged = (
    condition: Condition,
    checked: CheckedState,
  ) => {
    if (checked) {
      set({ conditions: [...conditions, condition] });
    } else {
      set({
        conditions: conditions.filter((c) => c.name !== condition.name),
        currentConditions: currentConditions.filter(
          (c) => c.name !== condition.name,
        ),
      });
    }
  };

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
        <TooltipContent>configure conditions</TooltipContent>
      </Tooltip>
      <PopoverContent className="max-w-screen w-[450px] relative h-[500px] overflow-auto text-sm">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3>Conditions</TypographyH3>
        <FieldSet>
          <FieldDescription>
            Select the conditions you want enabled for your character
          </FieldDescription>
          <FieldGroup className="gap-3 mt-[-12px]">
            {DEFAULT_CONDITIONS.map((c) => (
              <Field orientation="horizontal" key={c.name}>
                <Checkbox
                  id={`finder-pref-9k2-${c}-ljj-checkbox`}
                  name={`finder-pref-9k2-${c}-ljj-checkbox`}
                  checked={!!conditions.find((cond) => cond.name === c.name)}
                  onCheckedChange={(checked) =>
                    handleCheckedChanged(c, checked)
                  }
                />
                <FieldLabel
                  htmlFor={`finder-pref-9k2-${c}-ljj-checkbox`}
                  className="font-normal flex flex-col gap-0.5"
                >
                  {c.name}
                  <ConditionDescription condition={c} />
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
          <FieldSeparator>optional conditions</FieldSeparator>
        </FieldSet>
        <FieldGroup className="gap-3 mt-3">
          {OPTIONAL_CONDITONS.map((c) => (
            <Field orientation="horizontal" key={c.name}>
              <Checkbox
                id={`finder-pref-9k2-${c}-ljj-checkbox`}
                name={`finder-pref-9k2-${c}-ljj-checkbox`}
                checked={!!conditions.find((cond) => cond.name === c.name)}
                onCheckedChange={(checked) =>
                  handleCheckedChanged(c as Condition, checked)
                }
              />
              <FieldLabel
                htmlFor={`finder-pref-9k2-${c}-ljj-checkbox`}
                className="font-normal flex flex-col gap-0.5"
              >
                <span className="flex gap-1">
                  {c.name}
                  {c.source && (
                    <span className="text-muted-foreground">
                      (
                      <span
                        className={cn(
                          "text-muted-foreground opacity-90",
                          sourceTypeColors[c.sourceType ?? ""],
                        )}
                      >
                        {c.source}
                      </span>
                      )
                    </span>
                  )}{" "}
                </span>
                <ConditionDescription condition={c as Condition} />
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </PopoverContent>
    </Popover>
  );
}
