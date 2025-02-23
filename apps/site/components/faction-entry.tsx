import type { Faction } from "@/types/game";
export default async function FactionEntry({ faction }: { faction: Faction }) {
  return (
    <span>
      <b>{faction.name}</b> ({faction.location}){" "}
      <i className="text-muted-foreground">{faction.description}</i>:{" "}
      {faction.agenda}
    </span>
  );
}
