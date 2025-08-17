import { useCallback, useState } from "react";
import { ItemV2, Loadout } from "@/types/game";
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
import {
  DiamondPlus,
  X,
  Repeat,
  List,
  CornerDownRight,
  Trash,
} from "lucide-react";
import { cn, debounce } from "@/lib/utils";
import { Close } from "@radix-ui/react-popover";
import { TypographyH4 } from "@/components/ui/typography";
import allItems from "@/public/arc2/items.json";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ItemsTable({
  className,
  items,
  loadout,
  handleChangeItemName,
  handleChangeItemSlots,
  handleToggleItemSubscription,
  handleAddItem,
  handleAddBasicItem,
  handleRemoveItem,
}: {
  className?: string;
  items: ItemV2[];
  loadout?: Loadout;
  handleChangeItemName: (index: number, name: string) => void;
  handleChangeItemSlots: (index: number, slots: number) => void;
  handleToggleItemSubscription: (index: number) => void;
  handleAddItem: () => void;
  handleAddBasicItem: (item: ItemV2) => void;
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

  const addBasicItem = (item: ItemV2) => {
    handleAddBasicItem(item);
  };

  return (
    <div className={className}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="flex gap-2 items-center">Item</TableHead>
            <TableHead className="w-[100px]">
              slots
              {loadout && (
                <span>
                  ({usedSlots}/{loadout.load})
                </span>
              )}
            </TableHead>
            <TableHead className="w-[60px]">subscription</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items?.map((item: ItemV2, i: number) => (
            <ItemRow
              key={i + item.name}
              item={item}
              handleChangeItemName={(name) => handleNameChange(i, name)}
              handleChangeItemSlots={(slots) => handleSlotsChange(i, slots)}
              handleToggleItemSubscription={() =>
                handleToggleItemSubscription(i)
              }
              handleRemoveItem={() => {
                handleRemoveItem(i);
              }}
            />
          ))}
        </TableBody>
      </Table>
      <Separator className="my-1" />
      <div className="flex items-center justify-between">
        <ItemsList addBasicItem={addBasicItem} items={allItems as ItemV2[]} />
        <Button
          size="sm"
          variant="outline"
          className="ml-2 mt-1"
          onClick={() => {
            handleAddItem();
          }}
        >
          <DiamondPlus /> add custom item
        </Button>
      </div>
    </div>
  );
}

function ItemRow({
  item,
  handleChangeItemName,
  handleChangeItemSlots,
  handleToggleItemSubscription,
  handleRemoveItem,
}: {
  item: ItemV2;
  handleChangeItemName: (name: string) => void;
  handleChangeItemSlots: (slots: number) => void;
  handleToggleItemSubscription: () => void;
  handleRemoveItem: () => void;
}) {
  const [localItem, setLocalItem] = useState(item);

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <TableRow>
          <TableCell>
            <Input
              value={localItem.name}
              onChange={(e) => {
                setLocalItem({ ...localItem, name: e.target.value });
                handleChangeItemName(e.target.value);
              }}
              className="!text-xs"
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
              className="!text-xs"
            />
          </TableCell>
          <TableCell>
            {item.subscription && (
              <div
                className={cn(
                  "text-right font-cyber text-sm",
                  item.subscriptionPaid
                    ? "text-emerald-500"
                    : "text-muted-foreground line-through"
                )}
              >
                <Repeat size={16} className="inline-flex" /> {item.subscription}{" "}
                ¤P
              </div>
            )}
          </TableCell>
        </TableRow>
      </ContextMenuTrigger>
      <ContextMenuContent>
        {item.subscription !== undefined && (
          <>
            <ContextMenuItem onClick={handleToggleItemSubscription}>
              <span>
                {item.subscriptionPaid ? (
                  <span>
                    <span className="text-muted-foreground">Pause</span>{" "}
                    subscription
                  </span>
                ) : (
                  <span>
                    <span className="text-emerald-500">Resume</span>{" "}
                    subscription
                  </span>
                )}{" "}
                (
                <span className="font-cyber text-sm text-emerald-500">
                  <Repeat className="inline text-emerald-500" size={14} />{" "}
                  {item.subscription} ¤P
                </span>
                )
              </span>
            </ContextMenuItem>
            <ContextMenuSeparator />
          </>
        )}
        <ContextMenuItem className="bg-destructive" onClick={handleRemoveItem}>
          <Trash className="text-destructive-foreground" /> Remove
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function ItemsList({
  addBasicItem,
  items,
}: {
  addBasicItem: (item: ItemV2) => void;
  items: ItemV2[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline">
          <List className="text-blue-500" /> items list
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[600px] relative h-[500px] overflow-auto">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH4 className="text-md">Items</TypographyH4>
        <div className="flex flex-col">
          <span className="font-serif text-sm text-muted-foreground mt-0">
            List of items available to your character
          </span>
          <div className="flex flex-col gap-1 mt-2">
            <div className="grid grid-cols-8 gap-2 box-border px-2">
              <span className="text-xs font-cyber text-muted-foreground col-span-4">
                Item Name
              </span>
              <span className="text-xs font-cyber text-muted-foreground col-span-1">
                Slots
              </span>
              <span className="text-xs font-cyber text-muted-foreground col-span-1">
                Cost
              </span>
              <span className="text-xs font-cyber text-muted-foreground col-span-2">
                Subscription
              </span>
            </div>
            {items.map((item, i) => {
              if (item.options && item.options.length > 0) {
                return (
                  <div
                    key={item.name + i + "opts"}
                    className="grid grid-cols-8 gap-2 box-border px-2"
                  >
                    <Collapsible className="col-span-8">
                      <CollapsibleTrigger asChild>
                        <div className="grid-grid-cols-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="col-span-1"
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>
                                {item.name} ({item.options.length})
                              </span>
                              <List />
                            </div>
                          </Button>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="mt-1 flex flex-col gap-1">
                          {item.options.map((o, idx) => {
                            return (
                              <div
                                key={o.name + idx}
                                className="grid grid-cols-8 gap-2 text-sm"
                              >
                                <div className="col-span-1">
                                  {idx === 0 && (
                                    <CornerDownRight className="text-secondary" />
                                  )}
                                </div>
                                <div
                                  className="col-span-7 grid grid-cols-7 gap-2 box-border px-2 rounded-sm hover:bg-secondary hover:cursor-pointer"
                                  onClick={() =>
                                    addBasicItem({
                                      name: `${item.name} (${o.name})`,
                                      slots: item.slots,
                                      cost: o.cost,
                                      subscription: o.subscription,
                                      subscriptionPaid: true,
                                      dangerous: o.dangerous,
                                      codexExpansion: o.codexExpansion,
                                    })
                                  }
                                >
                                  <span className="col-span-3 text-sm">
                                    {o.name}
                                  </span>
                                  <span className="text-muted-foreground font-cyber text-xs col-span-1">
                                    {item.slots}
                                  </span>
                                  {o.cost !== undefined && (
                                    <span className=" col-span-1 font-cyber text-xs text-emerald-500">
                                      {o.cost} ¤P
                                    </span>
                                  )}
                                  {o.subscription !== undefined && (
                                    <span className=" col-span-2 font-cyber text-xs text-emerald-500">
                                      <Repeat
                                        className="inline-block"
                                        size={14}
                                      />{" "}
                                      {o.subscription} ¤P
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <Separator />
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                );
              }
              return (
                <>
                  <div
                    key={item.name + i}
                    className="grid grid-cols-8 gap-2 box-border px-2 rounded-sm hover:bg-secondary hover:cursor-pointer"
                    onClick={() =>
                      addBasicItem({
                        name: item.name,
                        slots: item.slots,
                        cost: item.cost,
                        subscription: item.subscription,
                        subscriptionPaid: true,
                        dangerous: item.dangerous,
                        codexExpansion: item.codexExpansion,
                      })
                    }
                  >
                    <span className="col-span-4">{item.name}</span>
                    <span className="text-muted-foreground font-cyber text-sm col-span-1">
                      {item.slots}
                    </span>
                    {item.cost !== undefined && (
                      <span className=" col-span-1 font-cyber text-sm text-emerald-500">
                        {item.cost} ¤P
                      </span>
                    )}
                    {item.subscription !== undefined && (
                      <span className="col-span-2 font-cyber text-sm text-emerald-500">
                        <Repeat className="inline-block" /> {item.subscription}{" "}
                        ¤P
                      </span>
                    )}
                  </div>
                  <Separator />
                </>
              );
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
