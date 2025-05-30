import { Item } from "@/types/game";

export default function ItemEntry({ item }: { item: Item }) {
  return (
    <span>
      <b>{item.name}</b> ({item.clock}){" "}
      <i className="text-muted-foreground">{item.traits.join(", ")}</i>:{" "}
      {item.description}
    </span>
  );
}
