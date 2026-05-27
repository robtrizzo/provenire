export type SankeyInput = {
  name: string;
  color?: string;
  role?: string;
  targets: { name: string; value: number; color?: string }[];
}[];

export function toSankeyData(input: SankeyInput) {
  const nameSet = new Set<string>();
  for (const node of input) {
    nameSet.add(node.name);
    for (const t of node.targets) nameSet.add(t.name);
  }

  const nodes = Array.from(nameSet).map((name) => ({ name }));
  const indexMap = new Map(nodes.map((n, i) => [n.name, i]));

  const links = input.flatMap((node) =>
    node.targets.map((t) => ({
      source: indexMap.get(node.name)!,
      target: indexMap.get(t.name)!,
      value: t.value,
      color: t.color ?? node.color,
    })),
  );

  return { nodes, links };
}
