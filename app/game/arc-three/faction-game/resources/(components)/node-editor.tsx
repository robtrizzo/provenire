"use client";
import { DynamicNode, DynamicTarget, SankeyLocation } from "@/lib/sankey";
import { ROLES } from "./role-filter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Plus } from "lucide-react";

const COLOR_OPTIONS = [
  { label: "None", value: "_none" },
  { label: "Amber", value: "var(--color-amber-500)" },
  { label: "Red", value: "var(--color-red-500)" },
  { label: "Blue", value: "var(--color-blue-500)" },
  { label: "Olive", value: "var(--color-olive-500)" },
  { label: "Neutral", value: "var(--color-neutral-500)" },
  { label: "Mauve", value: "var(--color-mauve-500)" },
  { label: "Slate", value: "var(--color-slate-500)" },
];

interface NodeEditorProps {
  nodes: DynamicNode[];
  onChange: (nodes: DynamicNode[]) => void;
  locations: string[];
  locationDefs: SankeyLocation[];
}

export function NodeEditor({
  nodes,
  onChange,
  locations,
  locationDefs,
}: NodeEditorProps) {
  const update = (id: string, patch: Partial<DynamicNode>) => {
    const oldName = nodes.find((n) => n.id === id)?.name;
    const newName = patch.name;
    const isRename = newName !== undefined && newName !== oldName;

    onChange(
      nodes.map((n) => {
        if (n.id === id) return { ...n, ...patch };
        if (!isRename) return n;
        return {
          ...n,
          targets: n.targets.map((t) =>
            t.name === oldName ? { ...t, name: newName } : t,
          ),
        };
      }),
    );
  };

  const updateTarget = (
    nodeId: string,
    tid: string,
    patch: Partial<DynamicTarget>,
  ) =>
    onChange(
      nodes.map((n) =>
        n.id === nodeId
          ? {
              ...n,
              targets: n.targets.map((t) =>
                t.id === tid ? { ...t, ...patch } : t,
              ),
            }
          : n,
      ),
    );

  const addNode = () =>
    onChange([
      ...nodes,
      {
        id: crypto.randomUUID(),
        name: "New Producer",
        totalOutput: 10,
        targets: [],
      },
    ]);

  const addTarget = (nodeId: string) =>
    onChange(
      nodes.map((n) =>
        n.id === nodeId
          ? {
              ...n,
              targets: [
                ...n.targets,
                { id: crypto.randomUUID(), name: "", weight: 1 },
              ],
            }
          : n,
      ),
    );

  const addModifier = (nodeId: string) =>
    onChange(
      nodes.map((n) =>
        n.id === nodeId
          ? {
              ...n,
              modifiers: [
                ...(n.modifiers ?? []),
                { id: crypto.randomUUID(), name: "", weight: 0 },
              ],
            }
          : n,
      ),
    );

  const updateModifier = (
    nodeId: string,
    mid: string,
    patch: Partial<DynamicTarget>,
  ) =>
    onChange(
      nodes.map((n) =>
        n.id === nodeId
          ? {
              ...n,
              modifiers: (n.modifiers ?? []).map((m) =>
                m.id === mid ? { ...m, ...patch } : m,
              ),
            }
          : n,
      ),
    );

  function getDerivedTargets(node: DynamicNode) {
    if (!node.location?.length) return [];
    const defMap = new Map(locationDefs.map((l) => [l.name, l]));
    const locTargets = node.location.flatMap(
      (name) => defMap.get(name)?.targets ?? [],
    );
    const byName = new Map<string, { weight: number; color?: string }[]>();
    for (const t of locTargets) {
      if (!byName.has(t.name)) byName.set(t.name, []);
      byName.get(t.name)!.push(t);
    }
    const modMap = new Map(
      (node.modifiers ?? []).map((m) => [m.name, m.weight ?? 0]),
    );
    return Array.from(byName.entries()).map(([name, entries]) => {
      const avg = entries.reduce((s, e) => s + e.weight, 0) / entries.length;
      return {
        name,
        weight: Math.max(0, Math.round(avg + (modMap.get(name) ?? 0))),
        color: entries[0].color,
      };
    });
  }

  return (
    <div className="space-y-3 p-4 mb-4">
      {nodes.map((node) => {
        return (
          <Card key={node.id}>
            <CardContent className="pt-4 space-y-3">
              {/* Node header */}
              <div className="flex gap-2 items-center flex-wrap">
                <Input
                  className="font-medium w-36"
                  value={node.name}
                  onChange={(e) => update(node.id, { name: e.target.value })}
                />

                {node.totalOutput !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <Label className="text-muted-foreground whitespace-nowrap">
                      Output
                    </Label>
                    <Input
                      type="number"
                      min={0}
                      className="w-20"
                      value={node.totalOutput}
                      onChange={(e) =>
                        update(node.id, { totalOutput: Number(e.target.value) })
                      }
                    />
                  </div>
                )}
                {node.producesRatio !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <Label className="text-muted-foreground whitespace-nowrap">
                      Ratio
                    </Label>
                    <Input
                      type="number"
                      min={1}
                      className="w-14 font-mono text-center"
                      value={node.producesRatio.split(":")[0] ?? "1"}
                      onChange={(e) => {
                        const out = node.producesRatio!.split(":")[1] ?? "1";
                        update(node.id, {
                          producesRatio: `${e.target.value}:${out}`,
                        });
                      }}
                    />
                    <span className="text-muted-foreground text-sm">:</span>
                    <Input
                      type="number"
                      min={1}
                      className="w-14 font-mono text-center"
                      value={node.producesRatio.split(":")[1] ?? "1"}
                      onChange={(e) => {
                        const inp = node.producesRatio!.split(":")[0] ?? "1";
                        update(node.id, {
                          producesRatio: `${inp}:${e.target.value}`,
                        });
                      }}
                    />
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Label className="text-muted-foreground whitespace-nowrap">
                    Max
                  </Label>
                  <Input
                    type="number"
                    min={1}
                    placeholder="∞"
                    className="w-20"
                    value={node.max ?? ""}
                    onChange={(e) =>
                      update(node.id, {
                        max:
                          e.target.value === ""
                            ? undefined
                            : Number(e.target.value),
                      })
                    }
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    onChange(nodes.filter((n) => n.id !== node.id))
                  }
                  className="ml-auto text-destructive/70 hover:text-destructive"
                >
                  Remove
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1 border-border border-r">
                  {locations.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {locations.map((loc) => {
                        const active = node.location?.includes(loc) ?? false;
                        return (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => {
                              const current = node.location ?? [];
                              update(node.id, {
                                location: active
                                  ? current.filter((x) => x !== loc)
                                  : [...current, loc],
                              });
                            }}
                            className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                              active
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/70"
                            }`}
                          >
                            {loc}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="col-span-1">
                  <div className="flex flex-wrap gap-1">
                    {ROLES.map((r) => {
                      const active = node.roles?.includes(r) ?? false;
                      return (
                        <button
                          key={r}
                          type="button"
                          onClick={() => {
                            const current = node.roles ?? [];
                            update(node.id, {
                              roles: active
                                ? current.filter((x) => x !== r)
                                : [...current, r],
                            });
                          }}
                          className={`px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                            active
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/70"
                          }`}
                        >
                          {r}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Targets */}
              <div className="pl-2 space-y-1.5">
                {node.targets.map((t) => (
                  <div key={t.id} className="flex gap-2 items-center">
                    <Input
                      className="w-32"
                      placeholder="Destination"
                      value={t.name}
                      onChange={(e) =>
                        updateTarget(node.id, t.id, { name: e.target.value })
                      }
                    />
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      weight
                    </span>
                    <Input
                      type="number"
                      min={1}
                      className="w-16 font-mono text-center"
                      value={t.weight ?? 1}
                      onChange={(e) =>
                        updateTarget(node.id, t.id, {
                          weight: Number(e.target.value),
                        })
                      }
                    />
                    <Select
                      value={t.color ?? "_none"}
                      onValueChange={(val) =>
                        updateTarget(node.id, t.id, {
                          color: val === "_none" ? undefined : val,
                        })
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue>
                          {t.color ? (
                            <span className="flex items-center gap-1.5">
                              <span
                                className="inline-block h-3 w-3 rounded-full shrink-0"
                                style={{ backgroundColor: t.color }}
                              />
                              {COLOR_OPTIONS.find((o) => o.value === t.color)
                                ?.label ?? "Custom"}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">
                              No color
                            </span>
                          )}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {COLOR_OPTIONS.map((o) => (
                          <SelectItem key={o.value} value={o.value}>
                            <span className="flex items-center gap-1.5">
                              {o.value !== "_none" && (
                                <span
                                  className="inline-block h-3 w-3 rounded-full shrink-0"
                                  style={{ backgroundColor: o.value }}
                                />
                              )}
                              {o.label}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive shrink-0"
                      onClick={() =>
                        onChange(
                          nodes.map((n) =>
                            n.id === node.id
                              ? {
                                  ...n,
                                  targets: n.targets.filter(
                                    (x) => x.id !== t.id,
                                  ),
                                }
                              : n,
                          ),
                        )
                      }
                    >
                      <X className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ))}
                {getDerivedTargets(node).map((t) => (
                  <div
                    key={`loc-${t.name}`}
                    className="flex gap-2 items-center"
                  >
                    <Input className="w-32" value={t.name} disabled />
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      loc weight
                    </span>
                    <Input
                      type="number"
                      className="w-16 font-mono text-center"
                      value={t.weight}
                      disabled
                    />
                    {t.color && (
                      <span
                        className="inline-block h-3 w-3 rounded-full shrink-0"
                        style={{ backgroundColor: t.color }}
                      />
                    )}
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-2 text-muted-foreground"
                  onClick={() => addTarget(node.id)}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add Destination
                </Button>
              </div>

              {/* Modifiers */}
              {(node.location?.length ?? 0) > 0 && (
                <div className="flex flex-col pl-2 space-y-1.5 border-t pt-2">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">
                    Target Modifiers
                  </Label>
                  {(node.modifiers ?? []).map((m) => {
                    const defMap = new Map(
                      locationDefs.map((l) => [l.name, l]),
                    );
                    const availableTargetNames = Array.from(
                      new Set(
                        node.location!.flatMap(
                          (name) =>
                            defMap.get(name)?.targets.map((t) => t.name) ?? [],
                        ),
                      ),
                    );
                    return (
                      <div key={m.id} className="flex gap-2 items-center">
                        <Select
                          value={m.name || "_none"}
                          onValueChange={(val) =>
                            updateModifier(node.id, m.id, {
                              name: val === "_none" ? "" : val,
                            })
                          }
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Target…" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="_none">
                              <span className="text-muted-foreground">
                                Target…
                              </span>
                            </SelectItem>
                            {availableTargetNames.map((name) => (
                              <SelectItem key={name} value={name}>
                                {name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <span className="text-muted-foreground text-xs whitespace-nowrap">
                          modifier
                        </span>
                        <Input
                          type="number"
                          className="w-16 font-mono text-center"
                          value={m.weight ?? 0}
                          onChange={(e) =>
                            updateModifier(node.id, m.id, {
                              weight: Number(e.target.value),
                            })
                          }
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive shrink-0"
                          onClick={() =>
                            onChange(
                              nodes.map((n) =>
                                n.id === node.id
                                  ? {
                                      ...n,
                                      modifiers: (n.modifiers ?? []).filter(
                                        (x) => x.id !== m.id,
                                      ),
                                    }
                                  : n,
                              ),
                            )
                          }
                        >
                          <X className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    );
                  })}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mr-auto h-7 px-2 text-muted-foreground"
                    onClick={() => addModifier(node.id)}
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add Modifier
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
      <Button
        variant="outline"
        className="w-full border-dashed"
        onClick={addNode}
      >
        <Plus className="h-4 w-4" />
        Add Producer
      </Button>
    </div>
  );
}
