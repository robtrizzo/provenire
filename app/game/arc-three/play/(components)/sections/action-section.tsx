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
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ActionSection() {
  const { aptitudes, skills, fightingStyles } = useCharacterSheet();
  const [remembrance] = useField("remembrance");

  const [showRemembranceSkills, setShowRemembranceSkills] = useState(false);

  const remembranceSkills = remembrance?.skills
    ? getActions(remembrance.skills, "skill")
    : [];
  return (
    <div className="mt-4 space-y-1">
      <div
        className={cn(
          "grid gap-4 lg:gap-1",
          showRemembranceSkills && remembrance
            ? "grid-cols-1 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2",
        )}
      >
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
          <div className="flex items-center gap-2">
            <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground flex-1 flex justify-between items-end">
              Skills
              {remembrance && (
                <Button
                  variant="ghost"
                  className="h-auto text-xs py-1 text-indigo-500 hover:text-indigo-400"
                  onClick={() => setShowRemembranceSkills((v) => !v)}
                >
                  {showRemembranceSkills ? (
                    <span className="flex">
                      <ChevronRight /> Hide
                    </span>
                  ) : (
                    <span className="flex">
                      <ChevronLeft />
                      {remembrance.name}
                    </span>
                  )}
                </Button>
              )}
            </TypographyH2>
          </div>
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

        {/* Remembrance skills column */}
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
    </div>
  );
}
