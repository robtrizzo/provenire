import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";

export default function ActionSection() {
  const { abilities, skills, MAX_ABILITIES, MAX_SKILLS } = useCharacterSheet();
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-1">
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground order-1">
        Abilities
      </TypographyH2>
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground order-2 md:order-1">
        Skills
      </TypographyH2>
      <div className="col-span-1 flex flex-col gap-0.5 order-1">
        {abilities.map((a, idx) => (
          <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
            <Action.Wrapper.Menu action={a}>
              <Action.Wrapper.Rollable action={a}>
                <Action.HeaderContent.Simple action={a} />
              </Action.Wrapper.Rollable>
            </Action.Wrapper.Menu>
          </Action.Wrapper.Tooltip>
        ))}
        {Array.from({ length: MAX_ABILITIES - abilities.length }).map(
          (_, idx) => (
            <Action.HeaderContent.Unlock
              type="ability"
              className="p-2"
              key={`unlock-ability-${idx}`}
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
