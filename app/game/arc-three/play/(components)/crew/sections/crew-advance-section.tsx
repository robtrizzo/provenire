"use client";

import Clock from "@/components/clock";
import { TypographyH2 } from "@/components/ui/typography";
import type {
  CrewAdvanceBlock,
  CrewAdvanceSection,
} from "@/contexts/arc3CrewSheetContext";
import { useCrewAdvanceBlocks } from "@/contexts/arc3CrewSheetContext";
import AddCrewAdvanceBlockDialog from "../dialogs/add-crew-advance-block-dialog";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { cn } from "@/lib/utils";
import { Edit, Lock, Trash } from "lucide-react";
import { useState } from "react";

export default function CrewAdvanceSectionView({
  section,
  onRemove,
}: {
  section: CrewAdvanceSection;
  onRemove?: () => void;
}) {
  const { crewAdvanceBlocks, removeCAB } = useCrewAdvanceBlocks(section.id);

  const [editingBlock, setEditingBlock] = useState<CrewAdvanceBlock | null>(
    null,
  );

  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger>
          <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between cursor-context-menu">
            {section.name}
          </TypographyH2>
        </ContextMenuTrigger>
        {onRemove && (
          <ContextMenuContent>
            <ContextMenuItem className="bg-destructive" onClick={onRemove}>
              <Trash className="text-destructive-foreground" /> Remove Section
            </ContextMenuItem>
          </ContextMenuContent>
        )}
      </ContextMenu>
      <div className="mt-2 flex flex-col gap-2">
        {crewAdvanceBlocks.map((block) => (
          <ContextMenu key={block.id}>
            <ContextMenuTrigger asChild>
              <div>
                <CrewAdvanceBlockView sectionId={section.id} block={block} />
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={() => setEditingBlock(block)}>
                <Edit /> Edit
              </ContextMenuItem>
              <ContextMenuItem
                className="bg-destructive"
                onClick={() => removeCAB(block.id)}
              >
                <Trash className="text-destructive-foreground" /> Remove
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </div>
      <AddCrewAdvanceBlockDialog sectionId={section.id} />
      {editingBlock && (
        <AddCrewAdvanceBlockDialog
          sectionId={section.id}
          block={editingBlock}
          open={true}
          onOpenChange={(open) => {
            if (!open) setEditingBlock(null);
          }}
        />
      )}
    </div>
  );
}

function CrewAdvanceBlockView({
  sectionId,
  block,
}: {
  sectionId: string;
  block: CrewAdvanceBlock;
}) {
  const { updateCAB } = useCrewAdvanceBlocks(sectionId);
  return (
    <div className="border rounded-md py-2 px-4">
      <div className="flex items-end gap-4">
        <span>{block.name}</span>{" "}
        {block.progression === "sequence" && (
          <div className="flex items-center gap-1 grow">
            {block.advances.map((a, idx) => {
              const priorUnlocked =
                idx === 0 ||
                block.advances[idx - 1].ticks.current ===
                  block.advances[idx - 1].ticks.max;
              console.log("idx", idx, "priorunlocked", priorUnlocked);
              return (
                <>
                  <div className="relative">
                    {!priorUnlocked && (
                      <Lock className="absolute z-1 left-0.5 text-muted-foreground" />
                    )}
                    <Clock
                      max={a.ticks.max}
                      current={a.ticks.current}
                      height={28}
                      width={28}
                      clickable={priorUnlocked}
                      setVal={(n) => {
                        const newAdvances = block.advances.map((advance, i) =>
                          i === idx
                            ? {
                                ...advance,
                                ticks: { ...advance.ticks, current: n },
                              }
                            : advance,
                        );
                        updateCAB(block.id, { advances: newAdvances });
                      }}
                    />
                  </div>
                  {idx < block.advances.length - 1 && (
                    <div className="border h-0.5 grow" />
                  )}
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-3 ml-2 mb-2 flex flex-col gap-3">
        {block.advances.map((a, idx) => {
          const unlocked = a.ticks.current === a.ticks.max;
          return (
            <div className="flex items-center gap-3">
              {block.progression === "adhoc" && (
                <div className="shrink-0">
                  <Clock
                    max={a.ticks.max}
                    current={a.ticks.current}
                    height={28}
                    width={28}
                    setVal={(n) => {
                      const newAdvances = block.advances.map((advance, i) =>
                        i === idx
                          ? {
                              ...advance,
                              ticks: { ...advance.ticks, current: n },
                            }
                          : advance,
                      );
                      updateCAB(block.id, { advances: newAdvances });
                    }}
                  />
                </div>
              )}
              <span
                className={cn("text-xs", !unlocked && "text-muted-foreground")}
              >
                <b>{a.name}:</b> <i>{a.description}</i>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
