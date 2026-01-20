import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import Action from "../action";

export default function ActionSection() {
  const { abilities, skills } = useCharacterSheet();
  return (
    <div className="mt-4 grid grid-cols-2 gap-1">
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
        Abilities
      </TypographyH2>
      <TypographyH2 className="text-md mt-0 uppercase text-muted-foreground">
        Skills
      </TypographyH2>
      <div className="col-span-1">
        {abilities.map((a, idx) => (
          <Action.Wrapper.Rollable
            key={idx + a.name}
            position="left"
            action={a}
          >
            <Action.HeaderContent.Simple action={a} />
          </Action.Wrapper.Rollable>
        ))}
      </div>
      <div className="col-span-1">
        {skills.map((a, idx) => (
          <Action.Wrapper.Rollable
            key={idx + a.name}
            position="right"
            action={a}
          >
            <Action.HeaderContent.Simple action={a} />
          </Action.Wrapper.Rollable>
        ))}
      </div>
    </div>
  );
}
