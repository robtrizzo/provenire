import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";

export default function ActionSection() {
  const { abilities, skills, MAX_ABILITIES, MAX_SKILLS } = useCharacterSheet();
  return (
    <div className="mt-4 grid grid-cols-2 gap-1">
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
        Abilities
      </TypographyH2>
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
        Skills
      </TypographyH2>
      <div className="col-span-1 flex flex-col gap-0.5">
        {abilities.map((a, idx) => (
          <Action.Wrapper.Rollable key={idx + a.name} action={a}>
            <Action.HeaderContent.Simple action={a} />
          </Action.Wrapper.Rollable>
        ))}
        {Array.from({ length: MAX_ABILITIES - abilities.length }).map(
          (_, idx) => (
            <Action.Wrapper.Grid className="p-0" key={`unlock-ability-${idx}`}>
              <Action.HeaderContent.Unlock type="ability" className="p-2" />
            </Action.Wrapper.Grid>
          ),
        )}
      </div>
      <div className="col-span-1 flex flex-col gap-0.5">
        {skills.map((a, idx) => (
          <Action.Wrapper.Rollable key={idx + a.name} action={a}>
            <Action.HeaderContent.Simple action={a} />
          </Action.Wrapper.Rollable>
        ))}
        {Array.from({ length: MAX_SKILLS - skills.length }).map((_, idx) => (
          <Action.Wrapper.Grid className="p-0" key={`unlock-skill-${idx}`}>
            <Action.HeaderContent.Unlock type="skill" className="p-2" />
          </Action.Wrapper.Grid>
        ))}
      </div>
    </div>
  );
}
