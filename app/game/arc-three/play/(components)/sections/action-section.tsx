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
import { GripHorizontal, Maximize2, Minimize2, X } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import BondsSection from "./bonds-section";
import ActionsWindow from "../windows/action-window";

export default function ActionSection() {
  const { aptitudes, skills, fightingStyles } = useCharacterSheet();
  const [remembrance] = useField("remembrance");
  const [showActionsWindow, setShowActionsWindow] = useState(false);
  const [showRemembranceSkills, setShowRemembranceSkills] = useState(false);

  const remembranceSkills = remembrance?.skills
    ? getActions(remembrance.skills, "skill")
    : [];

  return (
    <div className="mt-4 space-y-1">
      {/* Pop-out button */}
      <div className="flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          className="h-auto py-1 text-xs text-muted-foreground gap-1"
          onClick={() => setShowActionsWindow(!showActionsWindow)}
        >
          {showActionsWindow ? (
            <>
              <Minimize2 className="h-3 w-3" />
              Minimize Actions
            </>
          ) : (
            <>
              <Maximize2 className="h-3 w-3" />
              Expand Actions
            </>
          )}
        </Button>
      </div>

      {/* Main sheet actions — hidden when window is open */}
      {!showActionsWindow && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* Aptitudes column */}
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

            {/* Skills column */}
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
              {Array.from({ length: MAX_SKILLS - skills.length }).map(
                (_, idx) => (
                  <Action.HeaderContent.Unlock
                    type="skill"
                    className="p-2"
                    key={`unlock-skill-${idx}`}
                  />
                ),
              )}
            </div>
          </div>

          {/* Fighting Styles */}
          <TypographyH2 className="text-md mt-4 uppercase text-muted-foreground">
            Fighting Styles
          </TypographyH2>
          <div className="flex flex-col gap-0.5">
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

          <div className="mt-4">
            <BondsSection />
          </div>
        </>
      )}

      {/* Floating actions window */}
      {showActionsWindow && (
        <ActionsWindow onClose={() => setShowActionsWindow(false)} />
      )}
    </div>
  );
}
