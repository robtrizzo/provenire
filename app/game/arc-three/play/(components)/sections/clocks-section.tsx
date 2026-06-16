"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2 } from "@/components/ui/typography";
import Clock from "@/components/clock";
import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import XPClocks from "@/components/character-sheet/xp-clocks";
import {
  ClockEntry,
  CLOCK_TEMPLATES,
  useClocks,
} from "@/contexts/arc3CharacterSheetContext";
import { nanoid } from "@/lib/nanoid";
import { Trash2, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TEMPLATE_DEFAULT = "0";
const DEFAULT_MAX = CLOCK_TEMPLATES[0].defaultMax;

export default function ClocksSection() {
  const { clocks, addClock, removeClock, updateClock } = useClocks();
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [templateIdx, setTemplateIdx] = useState(TEMPLATE_DEFAULT);
  const [newMax, setNewMax] = useState(DEFAULT_MAX);
  const [labels, setLabels] = useState<{
    spend: string;
    add: string;
    remove: string;
  }>({
    spend: "",
    add: "",
    remove: "",
  });

  const tpl = CLOCK_TEMPLATES[Number(templateIdx)];

  const handleAdd = () => {
    const entry: ClockEntry = {
      id: nanoid(),
      name: newName.trim() || tpl.label,
      current: 0,
      max: newMax,
      type: tpl.type,
      labels:
        tpl.type === "accumulation"
          ? {
              spend: labels.spend || undefined,
              add: labels.add || undefined,
              remove: labels.remove || undefined,
            }
          : undefined,
    };
    addClock(entry);
    setNewName("");
    setTemplateIdx(TEMPLATE_DEFAULT);
    setNewMax(DEFAULT_MAX);
    setAdding(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Clocks &amp; Trackers
        <Button
          size="icon"
          variant="outline"
          onClick={() => setAdding((v) => !v)}
        >
          <Plus />
        </Button>
      </TypographyH2>

      {adding && (
        <div className="flex flex-col gap-2 p-3 border rounded-md">
          <Input
            placeholder="Name (optional)"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
              if (e.key === "Escape") setAdding(false);
            }}
            autoFocus
          />
          <div className="flex gap-2">
            <Select
              value={templateIdx}
              onValueChange={(val) => {
                setTemplateIdx(val);
                setNewMax(CLOCK_TEMPLATES[Number(val)].defaultMax);
              }}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Choose type" />
              </SelectTrigger>
              <SelectContent>
                {CLOCK_TEMPLATES.map((t, i) => (
                  <SelectItem key={i} value={String(i)}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              min={1}
              max={20}
              value={newMax}
              onChange={(e) =>
                setNewMax(Math.max(1, Math.floor(Number(e.target.value))))
              }
              className="w-20"
              aria-label="Max"
            />
          </div>

          {tpl.type === "accumulation" && (
            <div className="flex gap-2">
              <Input
                placeholder="spend label"
                value={labels.spend}
                onChange={(e) =>
                  setLabels((l) => ({ ...l, spend: e.target.value }))
                }
              />
              <Input
                placeholder="+ label"
                value={labels.add}
                onChange={(e) =>
                  setLabels((l) => ({ ...l, add: e.target.value }))
                }
              />
              <Input
                placeholder="- label"
                value={labels.remove}
                onChange={(e) =>
                  setLabels((l) => ({ ...l, remove: e.target.value }))
                }
              />
            </div>
          )}

          {/* Live preview */}
          <div className="flex items-center gap-3 rounded-md bg-muted/40 px-3 py-2">
            <ClockPreview type={tpl.type} max={newMax} />
            <span className="text-sm text-muted-foreground truncate">
              {newName.trim() || tpl.label}
            </span>
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="ghost" size="sm" onClick={() => setAdding(false)}>
              Cancel
            </Button>
            <Button size="sm" onClick={handleAdd}>
              Add
            </Button>
          </div>
        </div>
      )}

      {clocks.length > 0 && (
        <div className="flex flex-col gap-3 mt-1">
          {clocks.map((clock) => (
            <ClockRow
              key={clock.id}
              clock={clock}
              onUpdate={(changes) => updateClock(clock.id, changes)}
              onRemove={() => removeClock(clock.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ClockPreview({
  type,
  max,
}: {
  type: ClockEntry["type"];
  max: number;
}) {
  if (type === "clock") {
    return (
      <Clock width={35} height={35} max={max} current={0} clickable={false} />
    );
  }
  if (type === "accumulation") {
    return (
      <XPClocks>
        <XPClocks.Clocks initial={0} max={max} setVal={() => {}} />
      </XPClocks>
    );
  }
  // tracker
  return <BuildupCheckboxes max={max} current={0} />;
}

function ClockRow({
  clock,
  onUpdate,
  onRemove,
}: {
  clock: ClockEntry;
  onUpdate: (changes: Partial<Omit<ClockEntry, "id">>) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      {clock.type === "accumulation" ? (
        <XPClocks key={`xpclocks-${new Date().getTime()}`}>
          <XPClocks.Clocks
            initial={clock.current}
            max={clock.max}
            setVal={(n) => onUpdate({ current: n })}
          />
          <div className="flex flex-col items-center">
            <span className="text-sm flex-1 min-w-0 truncate">
              {clock.name}
            </span>
            <XPClocks.Controls
              initial={clock.current}
              max={clock.max}
              setVal={(n) => onUpdate({ current: n })}
              spendLabel={clock.labels?.spend}
              addLabel={clock.labels?.add}
              removeLabel={clock.labels?.remove}
            />
          </div>
        </XPClocks>
      ) : clock.type === "clock" ? (
        <>
          <div className="ml-2">
            <Clock
              width={35}
              height={35}
              max={clock.max}
              current={clock.current}
              setVal={(n) => onUpdate({ current: n })}
            />
          </div>
          <span className="text-sm flex-1 min-w-0 truncate">{clock.name}</span>
        </>
      ) : (
        <>
          <BuildupCheckboxes
            max={clock.max}
            current={clock.current}
            onChange={(n) => onUpdate({ current: n })}
          />
          <span className="text-sm flex-1 min-w-0 truncate">{clock.name}</span>
        </>
      )}

      <Button
        size="icon"
        variant="ghost"
        className="shrink-0 ml-auto text-muted-foreground hover:text-destructive h-7 w-7"
        onClick={onRemove}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
