"use client";

import { TypographyH2 } from "@/components/ui/typography";
import {
  MAX_ABILITIES,
  useCharacterSheet,
} from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";
import BondsSection from "./bonds-section";
import ActionsWindow from "../windows/action-window";

export default function ActionSection() {
  const { aptitudes, skills, fightingStyles } = useCharacterSheet();
  const [showActionsWindow, setShowActionsWindow] = useState(false);

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
              <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground flex justify-between items-end">
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
              <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground flex justify-between items-end">
                <span className="ml-2">Skills</span>
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
          </div>

          {/* Fighting Styles */}
          <TypographyH2 className="text-md mt-4 uppercase text-muted-foreground flex justify-between items-end">
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
