import { TypographyH2 } from "@/components/ui/typography";
import {
  MAX_ABILITIES,
  MAX_SKILLS,
  useCharacterSheet,
} from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";

export default function ActionSection() {
  const { aptitudes, skills } = useCharacterSheet();
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-1">
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground order-1">
        Aptitudes
      </TypographyH2>
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground order-2 md:order-1">
        Skills
      </TypographyH2>
      <div className="col-span-1 flex flex-col gap-0.5 order-1">
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
      <div className="col-span-1 flex flex-col gap-0.5 order-3 md:order-1">
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
    </div>
  );
}
