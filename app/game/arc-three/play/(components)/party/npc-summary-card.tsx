"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
import { NpcSummaryCard as NpcCard } from "@/contexts/arc3CrewSheetContext";
import NpcCardEditor from "./npc-card-editor";
import dpData from "@/public/arc3/dramatis_personae.json";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type DPEntry = {
  name: string;
  portrait?: boolean;
  fileName?: string;
  type: string;
};
const dpMap = new Map((dpData as DPEntry[]).map((e) => [e.name, e]));

function buildNpcPortraitSrc(dpName: string): string | undefined {
  const entry = dpMap.get(dpName);
  if (!entry) return undefined;
  if (entry.portrait === false) return undefined;
  const base = process.env.NEXT_PUBLIC_S3_BUCKET;
  if (!base) return undefined;
  const [customFile, customExt] = (entry.fileName ?? "").split(".");
  const fileName =
    customFile || dpName.toLocaleLowerCase().replaceAll(" ", "_");
  const ext = customExt ? `.${customExt}` : ".png";
  return `${base}/npc-art/${fileName}${ext}`;
}

export default function NpcSummaryCard({
  card,
  isAdmin,
  onUpdate,
  onRemove,
  onToggleActive,
}: {
  card: NpcCard;
  isAdmin: boolean;
  onUpdate: (changes: Partial<Omit<NpcCard, "id">>) => void;
  onRemove: () => void;
  onToggleActive: () => void;
}) {
  const {
    stress,
    maxStress,
    conditions,
    harms,
    dramatisPersonaeName,
    active,
    name,
    abilities,
    defenses,
  } = card;
  const [editing, setEditing] = useState(false);
  const portraitSrc = dramatisPersonaeName
    ? buildNpcPortraitSrc(dramatisPersonaeName)
    : undefined;

  return (
    <>
      <div className="rounded-lg border bg-card p-3 flex flex-col gap-2 text-sm relative">
        {isAdmin && (
          <div className="absolute top-2 right-2 flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={onToggleActive}
              title={active ? "Deactivate" : "Activate"}
            >
              {active ? (
                <Eye className="h-3 w-3" />
              ) : (
                <EyeOff className="h-3 w-3" />
              )}
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6"
              onClick={() => setEditing(true)}
            >
              <Pencil className="h-3 w-3" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 text-destructive hover:text-destructive"
              onClick={onRemove}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Header: portrait + name */}
        <div className="flex items-center gap-2">
          {portraitSrc && (
            <div className="relative h-12 w-12 rounded-md overflow-hidden shrink-0 border border-border">
              <Image
                src={portraitSrc}
                alt={name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          )}
          <span className="font-semibold leading-tight">{name}</span>
        </div>

        {/* Stress */}
        {maxStress > 0 && (
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-muted-foreground text-xs w-12">Stress</span>
            <div className="flex gap-0.5 flex-wrap">
              {Array.from({ length: maxStress }).map((_, i) => {
                const disabled = i >= maxStress - conditions.length;
                const filled = !disabled && i < stress;
                return (
                  <div
                    key={i}
                    className={`h-3 w-3 rounded-sm border ${
                      disabled
                        ? "bg-muted border-muted-foreground/20"
                        : filled
                          ? "bg-red-500 border-red-500"
                          : "border-muted-foreground"
                    }`}
                  />
                );
              })}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              {stress}/{maxStress - conditions.length}
            </span>
          </div>
        )}

        {/* Conditions */}
        {conditions.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {conditions.map((c) => (
              <Badge key={c} variant="secondary" className="text-xs">
                {c}
              </Badge>
            ))}
          </div>
        )}

        {/* Harms */}
        {Object.keys(harms).length > 0 && (
          <div className="flex flex-col gap-1">
            {Object.entries(harms)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(
                ([level, { slots }]) =>
                  slots.length > 0 && (
                    <div key={level} className="flex gap-1 items-center">
                      <span className="text-xs text-muted-foreground w-3 shrink-0">
                        {level}
                      </span>
                      {slots.map((slot, i) => (
                        <div
                          key={i}
                          className={`flex-1 h-5 border rounded px-1.5 text-xs min-w-0 truncate flex items-center ${
                            slot.trim()
                              ? "border-destructive/40 text-destructive"
                              : "border-muted-foreground/25"
                          }`}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  ),
              )}
          </div>
        )}

        {/* Abilities */}
        {abilities.length > 0 && [
          <div className="flex gap-1 items-center">
            <Separator className="flex-1" />
            <div className="font-light text-muted-foreground text-xs">
              abilities
            </div>
            <Separator className="flex-1" />
          </div>,
          <div className="flex flex-col gap-0.5">
            {abilities.map((a, i) => (
              <div key={i} className="text-xs">
                <span className="font-medium">{a.name}</span>
                {a.description && (
                  <span className="text-muted-foreground">
                    {" "}
                    — {a.description}
                  </span>
                )}
              </div>
            ))}
          </div>,
        ]}

        {/* Defenses */}
        {defenses.length > 0 && [
          <div className="flex gap-1 items-center">
            <Separator className="flex-1" />
            <div className="font-light text-muted-foreground text-xs">
              defenses
            </div>
            <Separator className="flex-1" />
          </div>,
          <div className="flex flex-wrap gap-x-1 gap-y-0.5">
            {defenses.map((d, i) => (
              <span key={i} className="flex items-center gap-x-0.5">
                {d.description ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        className={cn(
                          "text-xs cursor-default hover:underline decoration-dotted underline-offset-2",
                          !d.active &&
                            "text-muted-foreground italic line-through",
                        )}
                      >
                        {d.name}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-48 text-xs">
                      {d.description}
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <span
                    className={cn(
                      "text-xs",
                      !d.active && "text-muted-foreground italic line-through",
                    )}
                  >
                    {d.name}
                  </span>
                )}
                {i < defenses.length - 1 && (
                  <span className="text-xs text-muted-foreground">,</span>
                )}
              </span>
            ))}
          </div>,
        ]}
      </div>

      <NpcCardEditor
        open={editing}
        onOpenChange={setEditing}
        initial={card}
        onSave={(updated) => onUpdate({ ...updated })}
      />
    </>
  );
}
