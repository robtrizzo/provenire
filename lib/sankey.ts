export type SankeyInput = {
  name: string;
  roles?: string[];
  produces?: number; // total output for source nodes
  location?: string;
  targets: { name: string; weight: number; color?: string }[];
}[];

export function toSankeyData(input: SankeyInput) {
  const validInput = input.map((node) => ({
    ...node,
    targets: node.targets.filter((t) => t.weight > 0 && t.name.trim() !== ""),
  }));

  const nodeMap = new Map(validInput.map((n) => [n.name, n]));
  const nameSet = new Set<string>();
  for (const node of validInput) {
    nameSet.add(node.name);
    for (const t of node.targets) nameSet.add(t.name);
  }

  // Kahn's topological sort
  const inDegree = new Map<string, number>(
    Array.from(nameSet).map((n) => [n, 0]),
  );
  for (const node of validInput)
    for (const t of node.targets)
      inDegree.set(t.name, inDegree.get(t.name)! + 1);

  const queue = [...inDegree.entries()]
    .filter(([, d]) => d === 0)
    .map(([n]) => n);
  const order: string[] = [];
  const rem = new Map(inDegree);
  while (queue.length > 0) {
    const name = queue.shift()!;
    order.push(name);
    for (const t of nodeMap.get(name)?.targets ?? []) {
      const d = rem.get(t.name)! - 1;
      rem.set(t.name, d);
      if (d === 0) queue.push(t.name);
    }
  }

  // Flow propagation
  const inflows = new Map<string, number>();
  const resolvedLinks = new Map<
    string,
    { name: string; value: number; color?: string }[]
  >();
  for (const name of order) {
    const node = nodeMap.get(name);
    if (!node || node.targets.length === 0) continue;
    const output = node.produces ?? inflows.get(name) ?? 0;
    const totalWeight = node.targets.reduce((s, t) => s + t.weight, 0);
    const values = distributeByWeight(
      output,
      node.targets.map((t) => t.weight),
      totalWeight,
    );
    resolvedLinks.set(
      name,
      node.targets.map((t, i) => ({
        name: t.name,
        value: values[i],
        color: t.color,
      })),
    );
    for (let i = 0; i < node.targets.length; i++)
      inflows.set(
        node.targets[i].name,
        (inflows.get(node.targets[i].name) ?? 0) + values[i],
      );
  }

  const visibleNames = new Set<string>();
  for (const [src, links] of resolvedLinks) {
    if (links.some((l) => l.value > 0)) {
      visibleNames.add(src);
      for (const l of links) if (l.value > 0) visibleNames.add(l.name);
    }
  }
  const nodes = Array.from(visibleNames).map((name) => ({ name }));
  const indexMap = new Map(nodes.map((n, i) => [n.name, i]));
  const links = [...resolvedLinks.entries()].flatMap(([src, targets]) =>
    targets
      .filter((t) => t.value > 0)
      .map((t) => ({
        source: indexMap.get(src)!,
        target: indexMap.get(t.name)!,
        value: t.value,
        color: t.color,
      })),
  );
  return { nodes, links };
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export type DynamicTarget = {
  id: string;
  name: string;
  color?: string;
  weight?: number; // attrition targets only — relative pressure
};

export type DynamicNode = {
  id: string;
  name: string;
  roles?: string[];
  color?: string;
  location?: string;
  totalOutput?: number;
  max?: number; // productive targets only — hard cap on flow received};
  targets: DynamicTarget[];
};

/** Convert static SankeyInput to editable DynamicNode[]. */
export function toDynamicNodes(input: SankeyInput): DynamicNode[] {
  const targetNames = new Set(
    input.flatMap((n) => n.targets.map((t) => t.name)),
  );
  return input.map((node) => {
    const isSource = !targetNames.has(node.name);
    const total = node.targets.reduce((s, t) => s + t.weight, 0);
    return {
      id: node.name,
      name: node.name,
      roles: node.roles,
      location: node.location,
      totalOutput: node.produces ?? (isSource ? total : undefined),
      targets: node.targets.map((t) => ({
        id: `${node.name}->${t.name}`,
        name: t.name,
        color: t.color,
        weight: t.weight,
      })),
    };
  });
}

/**
 * Distributes `total` integer units among `weights` proportionally,
 * guaranteeing sum(result) === total exactly (no rounding drift).
 */
function distributeByWeight(
  total: number,
  weights: number[],
  totalWeight: number,
): number[] {
  if (totalWeight === 0 || weights.length === 0) return weights.map(() => 0);
  const exact = weights.map((w) => (total * w) / totalWeight);
  const floored = exact.map(Math.floor);
  const remainder = total - floored.reduce((a, b) => a + b, 0);
  exact
    .map((v, i) => ({ frac: v - Math.floor(v), i }))
    .sort((a, b) => b.frac - a.frac)
    .slice(0, remainder)
    .forEach(({ i }) => floored[i]++);
  return floored;
}

/**
 * Like distributeByWeight, but respects per-target max caps.
 * Overflow from capped targets is redistributed to uncapped ones iteratively.
 */
function distributeWithCaps(
  total: number,
  targets: { weight: number; max?: number }[],
): number[] {
  const result = new Array(targets.length).fill(0);
  let remaining = total;
  let active = targets.map((_, i) => i);

  while (active.length > 0 && remaining > 0) {
    const weights = active.map((i) => targets[i].weight);
    const totalWeight = weights.reduce((a, b) => a + b, 0);
    const tentative = distributeByWeight(remaining, weights, totalWeight);

    let overflow = 0;
    const newlyCapped: number[] = [];

    active.forEach((idx, j) => {
      const cap = targets[idx].max;
      const headroom = cap !== undefined ? cap - result[idx] : Infinity;
      if (tentative[j] > headroom) {
        overflow += tentative[j] - headroom;
        result[idx] += headroom;
        newlyCapped.push(idx);
      } else {
        result[idx] += tentative[j];
      }
    });

    if (newlyCapped.length === 0) break;
    remaining = overflow;
    active = active.filter((i) => !newlyCapped.includes(i));
  }

  return result;
}

function resolveTargetValues(
  node: DynamicNode,
  output: number,
  remainingCapacity: Map<string, number>,
) {
  const values = distributeWithCaps(
    output,
    node.targets.map((t) => ({
      weight: t.weight ?? 1,
      max: remainingCapacity.get(t.name),
    })),
  );
  return node.targets.map((t, i) => ({
    name: t.name,
    weight: values[i],
    color: t.color ?? node.color,
  }));
}

/**
 * Derive SankeyInput from DynamicNode[] using topological flow propagation.
 * Source nodes use their explicit totalOutput; pass-through nodes derive theirs
 * from the sum of incoming links.
 */
export function computeDynamicSankey(nodes: DynamicNode[]): SankeyInput {
  const nodeMap = new Map(nodes.map((n) => [n.name, n]));

  // Kahn's algorithm to get topological order
  const inDegree = new Map<string, number>(nodes.map((n) => [n.name, 0]));
  for (const node of nodes) {
    for (const t of node.targets) {
      if (!inDegree.has(t.name)) inDegree.set(t.name, 0);
      inDegree.set(t.name, inDegree.get(t.name)! + 1);
    }
  }
  const queue = [...inDegree.entries()]
    .filter(([, d]) => d === 0)
    .map(([n]) => n);
  const order: string[] = [];
  const remaining = new Map(inDegree);
  while (queue.length > 0) {
    const name = queue.shift()!;
    order.push(name);
    for (const t of nodeMap.get(name)?.targets ?? []) {
      const deg = remaining.get(t.name)! - 1;
      remaining.set(t.name, deg);
      if (deg === 0) queue.push(t.name);
    }
  }

  // Initialize intake capacity for nodes with a max
  const remainingCapacity = new Map<string, number>();
  for (const node of nodes) {
    if (node.max !== undefined) remainingCapacity.set(node.name, node.max);
  }

  // Compute once and cache — updating capacity as we go so later sources
  // respect how much earlier sources already consumed.
  const inflows = new Map<string, number>();
  const resolvedTargets = new Map<
    string,
    ReturnType<typeof resolveTargetValues>
  >();
  for (const name of order) {
    const node = nodeMap.get(name);
    if (!node) continue;
    const output = node.totalOutput ?? inflows.get(name) ?? 0;
    const targets = resolveTargetValues(node, output, remainingCapacity);
    resolvedTargets.set(name, targets);
    for (const tv of targets) {
      inflows.set(tv.name, (inflows.get(tv.name) ?? 0) + tv.weight);
      if (remainingCapacity.has(tv.name)) {
        remainingCapacity.set(
          tv.name,
          Math.max(0, remainingCapacity.get(tv.name)! - tv.weight),
        );
      }
    }
  }

  return nodes.map((node) => {
    const targets = resolvedTargets.get(node.name) ?? [];
    return {
      name: node.name,
      roles: node.roles,
      produces: targets.reduce((s, t) => s + t.weight, 0),
      targets,
    };
  });
}
