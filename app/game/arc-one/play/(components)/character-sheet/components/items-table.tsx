import { useCallback, useState } from "react";
import { Item, Loadout } from "@/types/game";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DiamondPlus, X, BookOpen } from "lucide-react";
import { debounce } from "@/lib/utils";
import { Close } from "@radix-ui/react-popover";
import { TypographyH4 } from "@/components/ui/typography";
import { useCrewSheet } from "@/contexts/crewSheetContext";

export default function ItemsTable({
  className,
  items,
  loadout,
  handleChangeItemName,
  handleChangeItemSlots,
  handleAddItem,
  handleAddBasicItem,
  handleRemoveItem,
}: {
  className?: string;
  items: Item[];
  loadout?: Loadout;
  handleChangeItemName: (index: number, name: string) => void;
  handleChangeItemSlots: (index: number, slots: number) => void;
  handleAddItem: () => void;
  handleAddBasicItem: (item: Item) => void;
  handleRemoveItem: (index: number) => void;
}) {
  const usedSlots = items?.reduce((acc, item) => acc + item.slots, 0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChangeItemName = useCallback(
    debounce((index: number, name: string) => {
      handleChangeItemName(index, name);
    }, 300),
    [handleChangeItemName]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChangeItemSlots = useCallback(
    debounce((index: number, slots: number) => {
      handleChangeItemSlots(index, slots);
    }, 300),
    [handleChangeItemSlots]
  );

  const handleNameChange = (index: number, name: string) => {
    const newItems = [...items];
    newItems[index].name = name;
    debouncedHandleChangeItemName(index, name);
  };

  const handleSlotsChange = (index: number, slots: number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], slots };
    debouncedHandleChangeItemSlots(index, slots);
  };

  const addBasicItem = (item: Item) => {
    handleAddBasicItem(item);
  };

  return (
    <Table className={className}>
      <TableHeader>
        <TableRow>
          <TableHead className="flex gap-2 items-center">
            <ItemsList addBasicItem={addBasicItem} />
            Item
          </TableHead>
          <TableHead className="w-[100px]">
            slots
            {loadout && (
              <span>
                ({usedSlots}/{loadout.load})
              </span>
            )}
          </TableHead>
          <TableHead className="w-[60px]">
            <Button
              size="icon"
              variant="ghost"
              className="p-1 text-green-600 hover:text-green-600 h-10 w-10"
              onClick={() => {
                handleAddItem();
              }}
            >
              <DiamondPlus style={{ height: "24px", width: "24px" }} />
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items?.map((item: Item, i: number) => (
          <ItemRow
            key={i}
            item={item}
            handleChangeItemName={(name) => handleNameChange(i, name)}
            handleChangeItemSlots={(slots) => handleSlotsChange(i, slots)}
            handleRemoveItem={() => {
              handleRemoveItem(i);
            }}
          />
        ))}
      </TableBody>
    </Table>
  );
}

function ItemRow({
  item,
  handleChangeItemName,
  handleChangeItemSlots,
  handleRemoveItem,
}: {
  item: Item;
  handleChangeItemName: (name: string) => void;
  handleChangeItemSlots: (slots: number) => void;
  handleRemoveItem: (name: string) => void;
}) {
  const [localItem, setLocalItem] = useState(item);
  return (
    <TableRow>
      <TableCell>
        <Input
          value={localItem.name}
          onChange={(e) => {
            setLocalItem({ ...localItem, name: e.target.value });
            handleChangeItemName(e.target.value);
          }}
        />
      </TableCell>
      <TableCell className="text-center">
        <Input
          type="number"
          value={item.slots}
          onChange={(e) => {
            setLocalItem({ ...localItem, slots: parseInt(e.target.value) });
            handleChangeItemSlots(parseInt(e.target.value));
          }}
        />
      </TableCell>
      <TableCell>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-red-400 hover:text-red-400 h-6 w-6"
          onClick={() => {
            handleRemoveItem(item.name);
          }}
        >
          <X className="h-3 w-3" />
        </Button>
      </TableCell>
    </TableRow>
  );
}

function ItemsList({ addBasicItem }: { addBasicItem: (item: Item) => void }) {
  const [open, setOpen] = useState(false);
  const { items: crew_items } = useCrewSheet();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
        >
          <BookOpen style={{ height: "24px", width: "24px" }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 relative">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH4 className="text-md">Items</TypographyH4>
        <div className="flex flex-col">
          <span className="font-serif text-sm text-muted-foreground mt-0">
            List of items available to your character
          </span>
          <div className="flex flex-col gap-1 mt-2">
            {crew_items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 box-border px-2 rounded-sm hover:bg-secondary hover:cursor-pointer"
                onClick={() => addBasicItem(item)}
              >
                <span>{item.name}</span>
                <span className="text-muted-foreground">{item.slots}</span>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
