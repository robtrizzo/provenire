import { Item } from "@/types/game";

export default async function ItemEntry({ item }: { item: Item }) {
  return (
    <span>
      <b>{item.name}</b> ({item.ticks}){" "}
      <i className="text-muted-foreground">{item.traits.join(", ")}</i>:{" "}
      {item.description}
    </span>
  );
}
