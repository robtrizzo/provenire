"use client";

import { useCallback } from "react";
import { ItemEntry, useItems } from "@/contexts/arc3CharacterSheetContext";
import { nanoid } from "@/lib/nanoid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Plus } from "lucide-react";
import { TypographyH2 } from "@/components/ui/typography";

export default function ItemsSection() {
  const { items, addItem, removeItem, updateItem } = useItems();

  const handleAdd = useCallback(() => {
    addItem({ id: nanoid(), name: "", slots: 1 });
  }, [addItem]);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Inventory
      </TypographyH2>
      <div className="space-y-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead className="w-24 text-center">Slots</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center text-muted-foreground"
                >
                  No items
                </TableCell>
              </TableRow>
            )}
            {items.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                onChange={(changes) => updateItem(item.id, changes)}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </TableBody>
        </Table>
        <Button variant="outline" size="sm" onClick={handleAdd}>
          <Plus />
          Add item
        </Button>
      </div>
    </>
  );
}

interface ItemRowProps {
  item: ItemEntry;
  onChange: (changes: Partial<Omit<ItemEntry, "id">>) => void;
  onRemove: () => void;
}

function ItemRow({ item, onChange, onRemove }: ItemRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Input
          value={item.name}
          placeholder="Item name"
          onChange={(e) => onChange({ name: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Input
          type="number"
          min={0}
          value={item.slots}
          className="text-center"
          onChange={(e) =>
            onChange({ slots: Math.max(0, Number(e.target.value)) })
          }
        />
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          aria-label="Remove item"
        >
          <Trash2 />
        </Button>
      </TableCell>
    </TableRow>
  );
}
