"use client";

import { TypographyH2 } from "@/components/ui/typography";
import {
  MAX_ABILITIES,
  MAX_SKILLS,
  useCharacterSheet,
  useField,
} from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";
import { getActions } from "@/lib/actions";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GripHorizontal, X } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import BondsSection from "../sections/bonds-section";

interface ActionsWindowProps {
  onClose: () => void;
}

export default function ActionsWindow({ onClose }: ActionsWindowProps) {
  const { aptitudes, skills, fightingStyles } = useCharacterSheet();
  const [remembrance] = useField("remembrance");
  const [showRemembranceSkills, setShowRemembranceSkills] = useState(false);

  const remembranceSkills = remembrance?.skills
    ? getActions(remembrance.skills, "skill")
    : [];

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
          {remembrance && (
            <Button
              variant="ghost"
              className="h-auto text-xs py-1 text-indigo-500 hover:text-indigo-400"
              onClick={() => setShowRemembranceSkills((v) => !v)}
            >
              {showRemembranceSkills
                ? `Hide ${remembrance.name}`
                : remembrance.name}
            </Button>
          )}
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
        className={cn(
          "grid gap-3 p-3 overflow-y-auto max-h-[75vh]",
          showRemembranceSkills && remembrance ? "grid-cols-3" : "grid-cols-2",
        )}
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
          {Array.from({ length: MAX_SKILLS - skills.length }).map((_, idx) => (
            <Action.HeaderContent.Unlock
              type="skill"
              className="p-2"
              key={`unlock-skill-${idx}`}
            />
          ))}
        </div>

        {/* Remembrance skills (optional 3rd column) */}
        {showRemembranceSkills && remembrance && (
          <div className="flex flex-col gap-0.5">
            <TypographyH2 className="text-md mt-0 uppercase text-indigo-500">
              {remembrance.name}
            </TypographyH2>
            {remembranceSkills.map((a, idx) => (
              <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
                <div>
                  <Action.Wrapper.Rollable action={a}>
                    <Action.HeaderContent.Static action={a} />
                  </Action.Wrapper.Rollable>
                </div>
              </Action.Wrapper.Tooltip>
            ))}
          </div>
        )}

        <BondsSection />

        {/* Fighting Styles */}
        <div className="flex flex-col gap-0.5">
          <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
            Fighting Styles
          </TypographyH2>
          {fightingStyles.map((a, idx) => (
            <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
              <Action.Wrapper.Menu action={a}>
                <Action.Wrapper.Rollable action={a}>
                  <Action.HeaderContent.Simple action={a} />
                </Action.Wrapper.Rollable>
              </Action.Wrapper.Menu>
            </Action.Wrapper.Tooltip>
          ))}
          {Array.from({ length: 1 }).map((_, idx) => (
            <Action.HeaderContent.Unlock
              type="fightingStyle"
              className="p-2"
              key={`unlock-fightingStyle-${idx}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
