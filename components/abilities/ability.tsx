import type { Ability } from "@/types/game";
import dynamic from "next/dynamic";

const ABILITIES_DIR = "@/components/abilities";

interface AbilityProps {
  ability: Ability;
  category: string;
  arc: string;
  type: string;
}

export default async function Ability(props: AbilityProps) {
  const { ability, category, arc, type } = props;
  const importPath = `${ABILITIES_DIR}/${category}/${arc}/${type}/${ability.slug}`;
  const Ability = dynamic(
    () =>
      import(importPath).catch(() => ({
        default: () => (
          <div>
            <span className="text-red-500">
              Ability not found: {ability.name}. Check{" "}
              <code className="text-muted-foreground text-xs">
                {importPath}
              </code>
            </span>
          </div>
        ),
      })),
    {
      loading: () => <p>Loading ability...</p>,
    }
  );
  return <Ability />;
}
