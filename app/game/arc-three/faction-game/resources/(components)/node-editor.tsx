"use client";
import { DynamicNode, DynamicTarget } from "@/lib/sankey";
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

const ATTRITION_COLORS: Record<string, string> = {
  Lost: "var(--color-neutral-500)",
  Attacks: "var(--color-mauve-500)",
  Stolen: "var(--color-slate-500)",
  Wasted: "var(--color-olive-500)",
  Destroyed: "var(--color-olive-500)",
  Slag: "var(--color-olive-500)",
};

interface NodeEditorProps {
  nodes: DynamicNode[];
  onChange: (nodes: DynamicNode[]) => void;
}

export function NodeEditor({ nodes, onChange }: NodeEditorProps) {
  const update = (id: string, patch: Partial<DynamicNode>) =>
    onChange(nodes.map((n) => (n.id === id ? { ...n, ...patch } : n)));

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

  return (
    <div className="space-y-3 p-4 mb-4">
      {nodes.map((node) => {
        const attritionWeight = node.targets
          .filter((t) => t.isAttrition)
          .reduce((s, t) => s + (t.weight ?? 1), 0);
        const producerWeight = node.weight ?? 1;
        const totalWeight = producerWeight + attritionWeight;
        const effectivePct =
          attritionWeight > 0
            ? Math.round((producerWeight / totalWeight) * 100)
            : null;

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
                <Select
                  value={node.role ?? "_none"}
                  onValueChange={(val) =>
                    update(node.id, { role: val === "_none" ? undefined : val })
                  }
                >
                  <SelectTrigger className="w-28">
                    <SelectValue placeholder="No Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="_none">No Role</SelectItem>
                    {ROLES.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  className="w-28"
                  placeholder="Location"
                  value={node.location ?? ""}
                  onChange={(e) =>
                    update(node.id, { location: e.target.value || undefined })
                  }
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
                {effectivePct !== null && (
                  <Badge variant="outline" className="font-mono text-xs">
                    {effectivePct}% productive
                  </Badge>
                )}
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

              {/* Productive weight — only shown when attrition is present */}
              {attritionWeight > 0 && (
                <div className="flex items-center gap-2">
                  <Label className="text-muted-foreground whitespace-nowrap">
                    Productive Weight
                  </Label>
                  <Input
                    type="number"
                    min={1}
                    className="w-16 font-mono"
                    value={node.weight ?? 1}
                    onChange={(e) =>
                      update(node.id, { weight: Number(e.target.value) })
                    }
                  />
                </div>
              )}

              {/* Targets */}
              <div className="pl-2 space-y-1.5">
                {node.targets.map((t) => (
                  <div key={t.id} className="flex gap-2 items-center">
                    <Input
                      className="w-32"
                      placeholder="Destination"
                      value={t.name}
                      onChange={(e) => {
                        const name = e.target.value;
                        const isAttrition = name in ATTRITION_COLORS;
                        updateTarget(node.id, t.id, {
                          name,
                          isAttrition,
                          color: ATTRITION_COLORS[name] ?? t.color,
                          weight: t.weight ?? 1,
                        });
                      }}
                    />
                    {t.isAttrition ? (
                      <>
                        <span className="text-muted-foreground text-xs whitespace-nowrap">
                          weight
                        </span>
                        <Input
                          type="number"
                          min={1}
                          className="w-14 font-mono text-center"
                          value={t.weight ?? 1}
                          onChange={(e) =>
                            updateTarget(node.id, t.id, {
                              weight: Number(e.target.value),
                            })
                          }
                        />
                        <Badge
                          variant="outline"
                          className="text-yellow-500 border-yellow-500/30 whitespace-nowrap"
                        >
                          attrition
                        </Badge>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
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
