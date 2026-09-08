"use client";

import { TypographyH2 } from "@/components/ui/typography";
import {
  MAX_ABILITIES,
  useCharacterSheet,
} from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";
import { Button } from "@/components/ui/button";
import { GripHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import BondsSection from "../sections/bonds-section";

interface ActionsWindowProps {
  onClose: () => void;
}

export default function ActionsWindow({ onClose }: ActionsWindowProps) {
  const { aptitudes, skills, fightingStyles } = useCharacterSheet();

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="fixed z-50 top-16 right-8 bg-background border rounded-lg shadow-xl flex flex-col select-none"
      style={{ width: "min(92vw, 860px)" }}
    >
      {/* Drag handle / header */}
      <div className="flex items-center justify-between px-3 py-2 border-b cursor-grab active:cursor-grabbing shrink-0">
        <div className="flex items-center gap-2">
          <GripHorizontal className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs uppercase text-muted-foreground font-semibold">
            Actions
          </span>
        </div>
        <div
          className="flex items-center gap-1"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={onClose}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Columns */}
      <div
        className="grid gap-3 p-3 overflow-y-auto max-h-[75vh] grid-cols-2"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Aptitudes */}
        <div className="flex flex-col gap-0.5">
          <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
            Aptitudes
          </TypographyH2>
          {aptitudes.map((a, idx) => (
            <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
              <Action.Wrapper.Menu action={a}>
                <Action.Wrapper.Rollable action={a}>
                  <Action.HeaderContent.Simple action={a} />
                </Action.Wrapper.Rollable>
              </Action.Wrapper.Menu>
            </Action.Wrapper.Tooltip>
          ))}
          {Array.from({ length: MAX_ABILITIES - aptitudes.length }).map(
            (_, idx) => (
              <Action.HeaderContent.Unlock
                type="aptitude"
                className="p-2"
                key={`unlock-aptitude-${idx}`}
              />
            ),
          )}
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-0.5">
          <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
            Skills
          </TypographyH2>
          {skills.map((a, idx) => (
            <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
              <Action.Wrapper.Menu action={a}>
                <Action.Wrapper.Rollable action={a}>
                  <Action.HeaderContent.Simple action={a} />
                </Action.Wrapper.Rollable>
              </Action.Wrapper.Menu>
            </Action.Wrapper.Tooltip>
          ))}
          <Action.HeaderContent.Unlock type="skill" className="p-2" />
        </div>

        <BondsSection />
      </div>
    </motion.div>
  );
}
