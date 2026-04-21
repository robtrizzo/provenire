import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

export default function ClearableSelect<
  T extends { name: string; shortDescription?: string },
>({
  items,
  value,
  placeholder,
  triggerClassName,
  showDescription,
  onSelect,
  onClear,
}: {
  items: T[];
  value: string | undefined;
  placeholder: string;
  triggerClassName?: string;
  showDescription?: boolean;
  onSelect: (item: T) => void;
  onClear: () => void;
}) {
  return (
    <Select
      key={value || "empty"}
      value={value}
      onValueChange={(v) => {
        const found = items.find((item) => item.name === v);
        if (found) onSelect(found);
      }}
    >
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.name} value={item.name}>
            {item.name}
            {showDescription && item.shortDescription && (
              <span className="text-muted-foreground ml-4">
                {item.shortDescription}
              </span>
            )}
          </SelectItem>
        ))}
        <SelectSeparator />
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
      </SelectContent>
    </Select>
  );
}
