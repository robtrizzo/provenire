import {
  GangEntry,
  GangTrait,
  useGangs,
} from "@/contexts/arc3CrewSheetContext";
import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const GANG_POSITIVE_TRAITS: GangTrait[] = [
  {
    name: "Brutal",
    description: "won't shy away from extreme violence",
    tag: "positive",
  },
  {
    name: "Fearsome",
    description: "terrifying in aspect and reputation",
    tag: "positive",
  },
  {
    name: "Independant",
    description:
      "can be trusted to take the initiative and make good decisions on their own",
    tag: "positive",
  },
  {
    name: "Loyal",
    description:
      "won't be swayed away from the crew by bribes or nonlethal pressure",
    tag: "positive",
  },
  {
    name: "Numerous",
    description: "can't be easily wiped out",
    tag: "positive",
  },
  {
    name: "Tenacious",
    description: "won't be deterred from a task",
    tag: "positive",
  },
];

const GANG_NEGATIVE_TRAITS: GangTrait[] = [
  {
    name: "Braggarts",
    description: "leak evidence and spread self aggrandizing gossip",
    tag: "negative",
  },
  {
    name: "Disorganized",
    description: "ineffective at complex tasks",
    tag: "negative",
  },
  {
    name: "Principled",
    description: "there are certain ethics this gang won't betray",
    tag: "negative",
  },
  {
    name: "Skiddish",
    description: "won't take big risks; easily intimidated",
    tag: "negative",
  },
  {
    name: "Unreliable",
    description: "possibly busy, unwilling, or unable to help",
    tag: "negative",
  },
];

const ALL_GANG_PRESETS: GangTrait[] = [
  ...GANG_POSITIVE_TRAITS,
  ...GANG_NEGATIVE_TRAITS,
];

interface AddGangDialogProps {
  gang?: GangEntry;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function AddGangDialog({
  gang,
  open: controlledOpen,
  onOpenChange,
}: AddGangDialogProps) {
  const { addGang, updateGang } = useGangs();

  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  const [name, setName] = useState(gang?.name ?? "");
  const [ticks, setTicks] = useState(gang?.ticks ?? 3);
  const [maxToughness, setMaxToughnesss] = useState(gang?.toughness.max ?? 2);
  const [traits, setTraits] = useState<GangTrait[]>(gang?.traits ?? []);

  const [customName, setCustomName] = useState("");
  const [customDesc, setCustomDesc] = useState("");
  const [customTag, setCustomTag] = useState<"positive" | "negative">(
    "positive",
  );

  const selectedPresetNames = traits
    .filter((t) => ALL_GANG_PRESETS.some((p) => p.name === t.name))
    .map((t) => t.name);

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

  const handleSaveGang = () => {
    if (gang) {
      updateGang(gang.id, {
        ...gang,
        name,
        ticks,
        toughness: { current: gang.toughness.current, max: maxToughness },
        traits,
      });
    } else {
      addGang({
        id: nanoid(),
        name,
        ticks,
        toughness: { current: 0, max: maxToughness },
        traits,
      });
    }
    setName("");
    setTicks(3);
    setMaxToughnesss(2);
    setTraits([]);
    setOpen(false);
  };

  function handlePresetChange(names: string[]) {
    const customTraits = traits.filter(
      (t) => !ALL_GANG_PRESETS.some((p) => p.name === t.name),
    );
    const presetTraits = names.map(
      (n) => ALL_GANG_PRESETS.find((p) => p.name === n)!,
    );
    setTraits([...presetTraits, ...customTraits]);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="mt-1 w-full border-dashed text-sm text-muted-foreground"
          variant="outline"
        >
          ADD GANG
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Gang</DialogTitle>
          <DialogDescription>
            New gangs typically begin with 2 negative traits
          </DialogDescription>
        </DialogHeader>

        {/* Gang name */}
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Gang name"
        />

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <span className="text-sm text-muted-foreground">toughness</span>
            <Input
              type="number"
              value={maxToughness}
              onChange={(e) => {
                e.preventDefault();
                const n = parseInt(e.target.value);
                setMaxToughnesss(n);
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
              {GANG_POSITIVE_TRAITS.map((trait) => {
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
              {GANG_NEGATIVE_TRAITS.map((trait) => (
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
        <Button disabled={!name.trim()} onClick={handleSaveGang}>
          Save Item
        </Button>
      </DialogContent>
    </Dialog>
  );
}
