"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ItemEntry,
  ItemTrait,
  useItems,
} from "@/contexts/arc3CrewSheetContext";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import { XIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nanoid } from "@/lib/nanoid";

const EQUIPMENT_POSITIVE_TRAITS: ItemTrait[] = [
  {
    name: "Advanced",
    description: "experts get better results in dire or pressing circumstances",
    tag: "positive",
  },
  {
    name: "Concealable",
    description: "possible to hide on your person",
    tag: "positive",
  },
  {
    name: "Destructive",
    description: "especially effective at crushing and smashing",
    tag: "positive",
  },
  {
    name: "Emblazoned",
    description: "its design is an overt expression of resistance",
    tag: "positive",
  },
  {
    name: "Fortified",
    description: "the first time this item would break, it doesn't",
    tag: "positive",
  },
  {
    name: "Simple",
    description: "requires less effort to craft and repair",
    tag: "positive",
  },
  {
    name: "Tailored",
    description:
      "made to suit the style of one particular person. Others find it difficult to use",
    tag: "positive",
  },
  {
    name: "Valuable",
    description: "easy to trade for resources",
    tag: "positive",
  },
];

const EQUIPMENT_NEGATIVE_TRAITS: ItemTrait[] = [
  {
    name: "Bulky",
    description:
      "prevents you from squeezing into any tight spaces or moving acrobatically",
    tag: "negative",
  },
  {
    name: "Convoluted",
    description:
      "involves arbitrary factoids or steps to achieve the desired result",
    tag: "negative",
  },
  {
    name: "Dim",
    description: "only illuminates immediate surroundings",
    tag: "negative",
  },
  {
    name: "Dull",
    description: "can't cut through anything more protective than clothing",
    tag: "negative",
  },
  {
    name: "Fragile",
    description: "any amount of stress or damage will ruin this item",
    tag: "negative",
  },
  {
    name: "Heavy",
    description: "fatigues you faster while under stress",
    tag: "negative",
  },
  {
    name: "Imprecise",
    description: "requires skill to use properly, even in ideal circumstances",
    tag: "negative",
  },
  {
    name: "Memorable",
    description: "unique design that people will recognize",
    tag: "negative",
  },
  {
    name: "Noisy",
    description: "can be clearly heard from a short distance away",
    tag: "negative",
  },
  {
    name: "Tangled",
    description: "possibly snags on machinery or trips people",
    tag: "negative",
  },
  {
    name: "Unreliable",
    description: "has a chance of not working, even in ideal circumstances",
    tag: "negative",
  },
  {
    name: "Unwieldy",
    description: "using this item may give quick foes opportunities to react",
    tag: "negative",
  },
  {
    name: "Volatile",
    description: "explodes when ignited",
    tag: "negative",
  },
];

const EQUIPMENT_ALL_PRESETS: ItemTrait[] = [
  ...EQUIPMENT_POSITIVE_TRAITS,
  ...EQUIPMENT_NEGATIVE_TRAITS,
];

const ALCHEMY_POSITIVE_TRAITS: ItemTrait[] = [
  {
    name: "Nutritious",
    description: "tick healing clock by 1",
    tag: "positive",
  },
  {
    name: "Potent",
    description: "lasts longer than normal",
    tag: "positive",
  },
  {
    name: "Simple",
    description: "create five doses per batch",
    tag: "positive",
  },
  {
    name: "Soothing",
    description: "recover 1 stress",
    tag: "positive",
  },
  {
    name: "Tasty",
    description: "can be passed off as a normal drink",
    tag: "positive",
  },
];

const ALCHEMY_NEGATIVE_TRAITS: ItemTrait[] = [
  {
    name: "Acrid",
    description: "difficult to keep down on an empty stomach",
    tag: "negative",
  },
  {
    name: "Addling",
    description: "slow to react or think through complex situations",
    tag: "negative",
  },
  {
    name: "Diluted",
    description: "not nearly as effective as it could be",
    tag: "negative",
  },
  {
    name: "Groggy",
    description:
      "risk missing details, or falling asleep while doing simple tasks",
    tag: "negative",
  },
  {
    name: "Imprecise",
    description: "requires skill to use properly, even in ideal circumstances",
    tag: "negative",
  },
  {
    name: "Jittery",
    description: "difficult to remain still or perform precise tasks",
    tag: "negative",
  },
  {
    name: "Light-blind",
    description: "difficult to see in illuminated areas",
    tag: "negative",
  },
  {
    name: "Messy",
    description: "leaves behind overwhelming amounts of evidence",
    tag: "negative",
  },
  {
    name: "Stains",
    description: "difficult to wash off after application",
    tag: "negative",
  },
  {
    name: "Withdrawal",
    description: "leaves you feeling worse for wear afterwards",
    tag: "negative",
  },
];

const ALCHEMY_ALL_PRESETS: ItemTrait[] = [
  ...ALCHEMY_POSITIVE_TRAITS,
  ...ALCHEMY_NEGATIVE_TRAITS,
];

interface AddItemDialogProps {
  item?: ItemEntry;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function AddItemDialog({
  item,
  open: controlledOpen,
  onOpenChange,
}: AddItemDialogProps) {
  const { addItem, updateItem } = useItems();

  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const [name, setName] = useState(item?.name ?? "");
  const [type, setType] = useState(item?.type ?? "equipment");
  const [slots, setSlots] = useState(item?.slots ?? 1);
  const [ticks, setTicks] = useState(item?.ticks ?? 3);
  const [traits, setTraits] = useState<ItemTrait[]>(item?.traits ?? []);

  const [customName, setCustomName] = useState("");
  const [customDesc, setCustomDesc] = useState("");
  const [customTag, setCustomTag] = useState<"positive" | "negative">(
    "positive",
  );

  const presets =
    type === "equipment" ? EQUIPMENT_ALL_PRESETS : ALCHEMY_ALL_PRESETS;

  const activePositiveTraits =
    type === "equipment" ? EQUIPMENT_POSITIVE_TRAITS : ALCHEMY_POSITIVE_TRAITS;
  const activeNegativeTraits =
    type === "equipment" ? EQUIPMENT_NEGATIVE_TRAITS : ALCHEMY_NEGATIVE_TRAITS;

  const selectedPresetNames = traits
    .filter((t) => presets.some((p) => p.name === t.name))
    .map((t) => t.name);

  function handlePresetChange(names: string[]) {
    const customTraits = traits.filter(
      (t) => !presets.some((p) => p.name === t.name),
    );
    const presetTraits = names.map((n) => presets.find((p) => p.name === n)!);
    setTraits([...presetTraits, ...customTraits]);
  }

  function removeTrait(traitName: string) {
    setTraits((prev) => prev.filter((t) => t.name !== traitName));
  }

  function addCustomTrait() {
    if (!customName.trim()) return;
    setTraits((prev) => [
      ...prev,
      {
        name: customName.trim(),
        description: customDesc.trim(),
        tag: customTag,
      },
    ]);
    setCustomName("");
    setCustomDesc("");
    setCustomTag("positive");
  }

  const handleSaveItem = () => {
    if (item) {
      updateItem(item.id, { ...item, name, type, slots, ticks, traits });
    } else {
      addItem({ id: nanoid(), name, type, slots, ticks, traits });
    }
    setName("");
    setType("equipment");
    setSlots(1);
    setTicks(3);
    setTraits([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="mt-1 w-full border-dashed text-sm text-muted-foreground"
          variant="outline"
        >
          ADD ITEM
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          <DialogDescription>
            New items typically begin with 3 negative traits
          </DialogDescription>
        </DialogHeader>

        {/* Item name */}
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
        />

        <div className="flex rounded-md border p-1 gap-1">
          <Button
            type="button"
            variant={type === "equipment" ? "default" : "ghost"}
            size="sm"
            className="flex-1"
            onClick={() => {
              setType("equipment");
              setTraits([]);
            }}
          >
            Equipment
          </Button>
          <Button
            type="button"
            variant={type === "alchemy" ? "default" : "ghost"}
            size="sm"
            className="flex-1"
            onClick={() => {
              setType("alchemy");
              setTraits([]);
            }}
          >
            Alchemy
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <span className="text-sm text-muted-foreground">slots</span>
            <Input
              type="number"
              value={slots}
              onChange={(e) => {
                e.preventDefault();
                const n = parseInt(e.target.value);
                setSlots(n);
              }}
            />
          </div>
          <div className="col-span-1">
            <span className="text-sm text-muted-foreground">
              ticks to upgrade
            </span>
            <Input
              type="number"
              value={ticks}
              onChange={(e) => {
                e.preventDefault();
                const n = parseInt(e.target.value);
                setTicks(n);
              }}
            />
          </div>
        </div>
        {/* Preset trait picker */}
        <MultiSelect
          values={selectedPresetNames}
          onValuesChange={handlePresetChange}
        >
          <MultiSelectTrigger className="w-full">
            <MultiSelectValue
              placeholder="Select traits…"
              overflowBehavior="wrap"
            />
          </MultiSelectTrigger>
          <MultiSelectContent>
            <MultiSelectGroup heading="Positive">
              {activePositiveTraits.map((trait) => {
                return (
                  <MultiSelectItem
                    key={trait.name}
                    value={trait.name}
                    badgeLabel={trait.name}
                  >
                    <div className="flex flex-col py-0.5">
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {trait.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {trait.description}
                      </span>
                    </div>
                  </MultiSelectItem>
                );
              })}
            </MultiSelectGroup>
            <MultiSelectGroup heading="Negative">
              {activeNegativeTraits.map((trait) => (
                <MultiSelectItem
                  key={trait.name}
                  value={trait.name}
                  badgeLabel={trait.name}
                >
                  <div className="flex flex-col py-0.5">
                    <span className="font-medium text-red-600 dark:text-red-400">
                      {trait.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {trait.description}
                    </span>
                  </div>
                </MultiSelectItem>
              ))}
            </MultiSelectGroup>
          </MultiSelectContent>
        </MultiSelect>

        {/* Selected trait chips with description + remove */}
        {traits.length > 0 && (
          <ul className="flex flex-col gap-1.5">
            {traits.map((trait) => (
              <li
                key={trait.name}
                className="flex items-start justify-between gap-2 rounded-md border px-3 py-2 text-sm"
              >
                <div className="flex flex-col gap-0.5">
                  <span
                    className={cn(
                      "font-medium",
                      trait.tag === "positive"
                        ? "text-green-600 dark:text-green-400"
                        : trait.tag === "negative"
                          ? "text-red-600 dark:text-red-400"
                          : "",
                    )}
                  >
                    {trait.name}
                  </span>
                  {trait.description && (
                    <span className="text-xs text-muted-foreground">
                      {trait.description}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeTrait(trait.name)}
                  className="mt-0.5 shrink-0 text-muted-foreground hover:text-destructive"
                >
                  <XIcon className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Custom trait form */}
        <div className="flex flex-col gap-2 rounded-md border border-dashed p-3">
          <p className="text-xs font-medium text-muted-foreground">
            Add custom trait
          </p>
          <div className="flex gap-2">
            <Input
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Trait name"
              className="flex-1"
            />
            <div className="flex-1">
              <Select
                onValueChange={(value) =>
                  setCustomTag(value as "positive" | "negative")
                }
              >
                <SelectTrigger>
                  <SelectValue defaultValue="positive" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="positive">Positive</SelectItem>
                  <SelectItem value="negative">Negative</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Input
            value={customDesc}
            onChange={(e) => setCustomDesc(e.target.value)}
            placeholder="Description (optional)"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addCustomTrait}
            disabled={!customName.trim()}
            className="self-end"
          >
            <PlusIcon className="mr-1 size-4" />
            Add
          </Button>
        </div>

        {/* Submit */}
        <Button disabled={!name.trim()} onClick={handleSaveItem}>
          Save Item
        </Button>
      </DialogContent>
    </Dialog>
  );
}
