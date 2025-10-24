import { useState } from "react";
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
  SquarePen,
} from "lucide-react";
import { cn } from "@/lib/utils";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function ItemsTable({
  className,
  items,
  loadout,
  handleToggleItemSubscription,
  handleAddItem,
  handleRemoveItem,
  handleEditItem,
}: {
  className?: string;
  items: ItemV2[];
  loadout?: Loadout;
  handleToggleItemSubscription: (index: number) => void;
  handleAddItem: (item: ItemV2) => void;
  handleRemoveItem: (index: number) => void;
  handleEditItem: (updatedItem: ItemV2, index: number) => void;
}) {
  const usedSlots = items?.reduce((acc, item) => acc + Number(item.slots), 0);

  const addItem = (item: ItemV2) => {
    handleAddItem(item);
  };

  const handleEdit = (idx: number) => (item: ItemV2) => {
    handleEditItem(item, idx);
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
              handleToggleItemSubscription={() =>
                handleToggleItemSubscription(i)
              }
              handleRemoveItem={() => {
                handleRemoveItem(i);
              }}
              handleEditItem={handleEdit(i)}
            />
          ))}
        </TableBody>
      </Table>
      <Separator className="my-1" />
      <div className="flex items-center justify-between">
        <ItemsList addBasicItem={addItem} items={allItems as ItemV2[]} />
        <CustomItemDialog handleSaveItem={addItem} />
      </div>
    </div>
  );
}

function ItemRow({
  item,
  handleToggleItemSubscription,
  handleRemoveItem,
  handleEditItem,
}: {
  item: ItemV2;
  handleToggleItemSubscription: () => void;
  handleRemoveItem: () => void;
  handleEditItem: (newItem: ItemV2) => void;
}) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const handleDelayedDialogOpen = () =>
    setTimeout(() => setEditDialogOpen(true), 100);

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <TableRow>
            <TableCell>
              <span>{item.name}</span>
            </TableCell>
            <TableCell className="text-center">
              <span>{item.slots}</span>
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
                  <Repeat size={16} className="inline-flex" />{" "}
                  {item.subscription} ¤P
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
          <ContextMenuItem onClick={handleDelayedDialogOpen}>
            <SquarePen /> Edit
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            className="bg-destructive"
            onClick={handleRemoveItem}
          >
            <Trash className="text-destructive-foreground" /> Remove
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <EditItemDialog
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        handleSaveItem={handleEditItem}
        item={item}
      />
    </>
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

function CustomItemDialog({
  handleSaveItem,
}: {
  handleSaveItem: (item: ItemV2) => void;
}) {
  const [open, setOpen] = useState(false);

  const [subEnabled, setSubEnabled] = useState(false);

  const handleSubmitCustomItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const slots = (formData.get("slots") || 0) as number;
    const subscription = subEnabled
      ? ((formData.get("subscription") || 0) as number)
      : undefined;

    const newItem: ItemV2 = {
      name,
      description,
      slots,
      subscription,
      subscriptionPaid: subEnabled ? true : undefined,
    };
    handleSaveItem(newItem);

    setOpen(false);
    setSubEnabled(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="ml-2 mt-1">
          <DiamondPlus /> add custom item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmitCustomItem}>
          <DialogHeader>
            <DialogTitle>Add a custom item</DialogTitle>
            <DialogDescription>
              Make changes to the item here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue="new item" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="add an item description here..."
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="slots">Slots</Label>
              <Input id="slots" name="slots" defaultValue={0} type="number" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subscription-enabled">Subscription</Label>
              <Checkbox
                checked={subEnabled}
                onCheckedChange={(checked) => setSubEnabled(!!checked)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subscription">Subscription Amount</Label>
              <Input
                disabled={!subEnabled}
                id="subscription"
                name="subscription"
                defaultValue={0}
                type="number"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function EditItemDialog({
  item,
  handleSaveItem,
  open,
  setOpen,
}: {
  item: ItemV2;
  handleSaveItem: (item: ItemV2) => void;
  open: boolean;
  setOpen: (newOpen: boolean) => void;
}) {
  const [subEnabled, setSubEnabled] = useState(
    !!item.subscription && item.subscriptionPaid
  );

  const handleSubmitCustomItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const slots = (formData.get("slots") || 0) as number;
    const subscription = subEnabled
      ? ((formData.get("subscription") || 0) as number)
      : undefined;

    const newItem: ItemV2 = {
      name,
      description,
      slots,
      subscription,
      subscriptionPaid: subEnabled ? true : undefined,
    };
    handleSaveItem(newItem);

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmitCustomItem}>
          <DialogHeader>
            <DialogTitle>Add a custom item</DialogTitle>
            <DialogDescription>
              Make changes to the item here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={item.name} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="add an item description here..."
                defaultValue={item.description}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="slots">Slots</Label>
              <Input
                id="slots"
                name="slots"
                defaultValue={item.slots}
                type="number"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subscription-enabled">Subscription</Label>
              <Checkbox
                checked={subEnabled}
                onCheckedChange={(checked) => setSubEnabled(!!checked)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subscription">Subscription Amount</Label>
              <Input
                disabled={!subEnabled}
                id="subscription"
                name="subscription"
                defaultValue={item.subscription}
                type="number"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
