import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TypographyH2 } from "@/components/ui/typography";
import { ItemEntry, useItems } from "@/contexts/arc3CrewSheetContext";
import AddItemDialog from "../dialogs/add-item-dialog";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Clock from "@/components/clock";

export default function ItemsSection() {
  const { items, removeItem } = useItems();

  const [editingItem, setEditingItem] = useState<ItemEntry | null>(null);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Equipment
      </TypographyH2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Traits</TableHead>
            <TableHead>Upgrade</TableHead>
            <TableHead>Slots</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <ContextMenu key={item.id}>
              <ContextMenuTrigger asChild>
                <TableRow className="text-xs align-top">
                  <TableCell className="whitespace-nowrap font-medium">
                    {item.name}
                  </TableCell>
                  <TableCell className="w-full">
                    <div className="flex flex-wrap gap-1">
                      {item.traits.map((trait) => (
                        <Tooltip key={trait.name}>
                          <TooltipTrigger asChild>
                            <span
                              className={cn(
                                "cursor-default rounded border px-1.5 py-0.5 text-[10px] font-medium leading-tight",
                                trait.tag === "positive"
                                  ? "border-green-500/40 text-green-600 dark:text-green-400"
                                  : "border-red-500/40 text-red-600 dark:text-red-400",
                              )}
                            >
                              {trait.name}
                            </span>
                          </TooltipTrigger>
                          {trait.description && (
                            <TooltipContent
                              side="top"
                              className="max-w-[200px] text-xs"
                            >
                              {trait.description}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Clock
                      clickable={false}
                      max={item.ticks}
                      current={0}
                      width={24}
                      height={24}
                    />
                  </TableCell>
                  <TableCell>{item.slots}</TableCell>
                </TableRow>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem onClick={() => setEditingItem(item)}>
                  <Edit /> Edit
                </ContextMenuItem>
                <ContextMenuItem
                  className="bg-destructive"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash className="text-destructive-foreground" /> Remove
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
      <AddItemDialog />
      {editingItem && (
        <AddItemDialog
          item={editingItem}
          open={true}
          onOpenChange={(open) => {
            if (!open) setEditingItem(null);
          }}
        />
      )}
    </>
  );
}
