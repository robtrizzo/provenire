import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectSeparator,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { Button } from "../ui/button";
import { ReactNode } from "react";

export function ClearableMultiSelect<
  T extends { name: string; shortDescription?: string },
>({
  items,
  values,
  placeholder,
  triggerClassName,
  showDescription,
  badgeLabel,
  onValuesChange,
  onClear,
}: {
  items: T[];
  values: string[];
  placeholder: ReactNode;
  triggerClassName?: string;
  showDescription?: boolean;
  badgeLabel?: (item: T) => ReactNode;
  onValuesChange: (values: string[]) => void;
  onClear: () => void;
}) {
  return (
    <MultiSelect values={values} onValuesChange={onValuesChange}>
      <MultiSelectTrigger className={triggerClassName}>
        <MultiSelectValue placeholder={placeholder} />
      </MultiSelectTrigger>
      <MultiSelectContent>
        {items.map((item) => (
          <MultiSelectItem
            key={item.name}
            value={item.name}
            badgeLabel={badgeLabel?.(item)}
          >
            {item.name}
            {showDescription && item.shortDescription && (
              <span className="text-muted-foreground ml-4">
                {item.shortDescription}
              </span>
            )}
          </MultiSelectItem>
        ))}
        <MultiSelectSeparator />
        <Button
          variant="secondary"
          size="sm"
          className="w-full px-2"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          Clear
        </Button>
      </MultiSelectContent>
    </MultiSelect>
  );
}
