"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronsUpDown, X, Plus, Minus } from "lucide-react";
import { NpcSummaryCard } from "@/contexts/arc3CrewSheetContext";
import { nanoid } from "@/lib/nanoid";
import { cn } from "@/lib/utils";
import dpData from "@/public/arc3/dramatis_personae.json";
import { Checkbox } from "@/components/ui/checkbox";

type DPEntry = {
  name: string;
  portrait?: boolean;
  fileName?: string;
  type: "pc" | "npc";
};
const dpEntries = (dpData as DPEntry[]).filter((e) => e.type === "npc");
const NO_LINK = "__none__";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initial?: NpcSummaryCard;
  onSave: (card: NpcSummaryCard) => void;
}

const blankCard = (): Omit<NpcSummaryCard, "id"> => ({
  name: "",
  dramatisPersonaeName: undefined,
  stress: 0,
  maxStress: 6,
  conditions: [],
  harms: {
    1: { slots: [""], maxSlots: 1 },
    2: { slots: [""], maxSlots: 1 },
    3: { slots: [""], maxSlots: 1 },
  },
  abilities: [],
  defenses: [],
  active: true,
});

export default function NpcCardEditor({
  open,
  onOpenChange,
  initial,
  onSave,
}: Props) {
  const [form, setForm] = useState<Omit<NpcSummaryCard, "id">>(blankCard());
  const [dpOpen, setDpOpen] = useState(false);
  const [conditionInput, setConditionInput] = useState("");
  const [abilityNameInput, setAbilityNameInput] = useState("");
  const [abilityDescInput, setAbilityDescInput] = useState("");
  const [defenseNameInput, setDefenseNameInput] = useState("");
  const [defenseDescInput, setDefenseDescInput] = useState("");
  const [harmText, setHarmText] = useState("");
  const [harmLevel, setHarmLevel] = useState(1);

  useEffect(() => {
    if (open) {
      setForm(initial ? { ...initial } : blankCard());
      setDpOpen(false);
      setConditionInput("");
      setAbilityNameInput("");
      setAbilityDescInput("");
      setDefenseNameInput("");
      setDefenseDescInput("");
    }
  }, [open, initial]);

  const setField = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleDpLink = (dpName: string) => {
    if (dpName === NO_LINK) {
      setField("dramatisPersonaeName", undefined);
      return;
    }
    setField("dramatisPersonaeName", dpName);
    if (!form.name) setField("name", dpName);
  };

  const addCondition = () => {
    const val = conditionInput.trim();
    if (val && !form.conditions.includes(val)) {
      setField("conditions", [...form.conditions, val]);
    }
    setConditionInput("");
  };

  const addAbility = () => {
    const name = abilityNameInput.trim();
    if (!name) return;
    setField("abilities", [
      ...form.abilities,
      { name, description: abilityDescInput.trim() || undefined },
    ]);
    setAbilityNameInput("");
    setAbilityDescInput("");
  };

  const addDefense = () => {
    const name = defenseNameInput.trim();
    if (!name) return;
    setField("defenses", [
      ...form.defenses,
      { name, description: defenseDescInput.trim() || undefined, active: true },
    ]);
    setDefenseNameInput("");
    setDefenseDescInput("");
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    onSave({ id: initial?.id ?? nanoid(), ...form });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{initial ? "Edit NPC" : "Add NPC"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Dramatis Personae combobox */}
          <div className="space-y-1">
            <Label>Link to Dramatis Personae (optional)</Label>
            <Popover open={dpOpen} onOpenChange={setDpOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={dpOpen}
                  className="w-full justify-between font-normal"
                >
                  {form.dramatisPersonaeName ?? "None"}
                  <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-(--radix-popover-trigger-width) p-0">
                <Command>
                  <CommandInput placeholder="Search characters…" />
                  <CommandList>
                    <CommandEmpty>No character found.</CommandEmpty>
                    <CommandGroup>
                      <CommandItem
                        value={NO_LINK}
                        onSelect={() => {
                          handleDpLink(NO_LINK);
                          setDpOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "h-4 w-4",
                            !form.dramatisPersonaeName
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        None
                      </CommandItem>
                      {dpEntries.map((e) => (
                        <CommandItem
                          key={e.name}
                          value={e.name}
                          onSelect={(val) => {
                            handleDpLink(
                              val === form.dramatisPersonaeName ? NO_LINK : val,
                            );
                            setDpOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "h-4 w-4",
                              form.dramatisPersonaeName === e.name
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {e.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <Label>Name</Label>
            <Input
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder="NPC name"
            />
          </div>

          {/* Stress */}
          <div className="space-y-1">
            <Label>
              Stress: {form.stress} / {form.maxStress}
            </Label>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Current</span>
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6"
                disabled={form.stress <= 0}
                onClick={() => setField("stress", form.stress - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">{form.stress}</span>
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6"
                disabled={form.stress >= form.maxStress}
                onClick={() => setField("stress", form.stress + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
              <span className="text-xs text-muted-foreground ml-4">Max</span>
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6"
                disabled={form.maxStress <= 0}
                onClick={() => setField("maxStress", form.maxStress - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-6 text-center text-sm">{form.maxStress}</span>
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6"
                onClick={() => setField("maxStress", form.maxStress + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Conditions */}
          <div className="space-y-1">
            <Label>Conditions</Label>
            <div className="flex gap-2">
              <Input
                value={conditionInput}
                onChange={(e) => setConditionInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCondition()}
                placeholder="Add condition…"
                className="flex-1"
              />
              <Button size="sm" onClick={addCondition} variant="outline">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {form.conditions.map((c) => (
                <Badge key={c} variant="secondary" className="gap-1">
                  {c}
                  <button
                    onClick={() =>
                      setField(
                        "conditions",
                        form.conditions.filter((x) => x !== c),
                      )
                    }
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>

          {/* Harms */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Harms</Label>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">Levels</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  disabled={Object.keys(form.harms).length <= 1}
                  onClick={() => {
                    const max = Math.max(
                      ...Object.keys(form.harms).map(Number),
                    );
                    setField(
                      "harms",
                      Object.fromEntries(
                        Object.entries(form.harms).filter(
                          ([k]) => Number(k) !== max,
                        ),
                      ) as typeof form.harms,
                    );
                  }}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="text-xs w-4 text-center">
                  {Object.keys(form.harms).length}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                  onClick={() => {
                    const max = Math.max(
                      ...Object.keys(form.harms).map(Number),
                    );
                    setField("harms", {
                      ...form.harms,
                      [max + 1]: { slots: [""], maxSlots: 1 },
                    });
                  }}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {Object.entries(form.harms)
                .sort(([a], [b]) => Number(b) - Number(a))
                .map(([levelStr, { slots, maxSlots }]) => {
                  const level = Number(levelStr);
                  return (
                    <div key={levelStr} className="flex gap-1 items-center">
                      <span className="text-xs text-muted-foreground w-5 shrink-0">
                        {level}
                      </span>
                      {slots.map((slot, i) => (
                        <Input
                          key={i}
                          value={slot}
                          onChange={(e) => {
                            const next = [...slots];
                            next[i] = e.target.value;
                            setField("harms", {
                              ...form.harms,
                              [level]: { slots: next, maxSlots },
                            });
                          }}
                          placeholder="Harm…"
                          className="flex-1 h-7 text-xs"
                        />
                      ))}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 shrink-0"
                        disabled={maxSlots <= 0}
                        onClick={() =>
                          setField("harms", {
                            ...form.harms,
                            [level]: {
                              slots: slots.slice(0, maxSlots - 1),
                              maxSlots: maxSlots - 1,
                            },
                          })
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 shrink-0"
                        onClick={() =>
                          setField("harms", {
                            ...form.harms,
                            [level]: {
                              slots: [...slots, ""],
                              maxSlots: maxSlots + 1,
                            },
                          })
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Abilities */}
          <div className="space-y-1">
            <Label>Abilities</Label>
            <div className="flex gap-2">
              <Input
                value={abilityNameInput}
                onChange={(e) => setAbilityNameInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addAbility()}
                placeholder="Name…"
                className="flex-1"
              />
              <Input
                value={abilityDescInput}
                onChange={(e) => setAbilityDescInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addAbility()}
                placeholder="Description (optional)"
                className="flex-1"
              />
              <Button size="sm" onClick={addAbility} variant="outline">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              {form.abilities.map((a, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="font-medium shrink-0">{a.name}</span>
                  {a.description && (
                    <span className="text-muted-foreground text-xs flex-1">
                      {a.description}
                    </span>
                  )}
                  <button
                    className="ml-auto shrink-0"
                    onClick={() =>
                      setField(
                        "abilities",
                        form.abilities.filter((_, j) => j !== i),
                      )
                    }
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Defenses */}
          <div className="space-y-1">
            <Label>Defenses</Label>
            <div className="flex gap-2">
              <Input
                value={defenseNameInput}
                onChange={(e) => setDefenseNameInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addDefense()}
                placeholder="Name…"
                className="flex-1"
              />
              <Input
                value={defenseDescInput}
                onChange={(e) => setDefenseDescInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addDefense()}
                placeholder="Description (optional)"
                className="flex-1"
              />
              <Button size="sm" onClick={addDefense} variant="outline">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              {form.defenses.map((d, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Checkbox
                    checked={d.active}
                    onCheckedChange={(checked) => {
                      console.log("checked", checked);
                      setField(
                        "defenses",
                        form.defenses.map((def) =>
                          d.name === def.name
                            ? {
                                name: d.name,
                                description: d.description,
                                active: !!checked,
                              }
                            : def,
                        ),
                      );
                    }}
                  />
                  <span
                    className={cn(
                      "font-medium shrink-0",
                      !d.active && "text-muted-foreground line-through",
                    )}
                  >
                    {d.name}
                  </span>
                  {d.description && (
                    <span className="text-muted-foreground text-xs flex-1">
                      {d.description}
                    </span>
                  )}
                  <button
                    className="ml-auto shrink-0"
                    onClick={() =>
                      setField(
                        "defenses",
                        form.defenses.filter((_, j) => j !== i),
                      )
                    }
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!form.name.trim()}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
