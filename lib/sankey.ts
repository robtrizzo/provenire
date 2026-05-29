export type SankeyInput = {
  name: string;
  color?: string;
  role?: string;
  targets: { name: string; value: number; color?: string }[];
}[];

export function toSankeyData(input: SankeyInput) {
  // Strip zero-value and nameless targets before recharts sees them
  const validInput = input.map((node) => ({
    ...node,
    targets: node.targets.filter((t) => t.value > 0 && t.name.trim() !== ""),
  }));

  const nameSet = new Set<string>();
  for (const node of validInput) {
    if (node.targets.length === 0) continue; // skip nodes that only sent 0-value links
    nameSet.add(node.name);
    for (const t of node.targets) nameSet.add(t.name);
  }

  const nodes = Array.from(nameSet).map((name) => ({ name }));
  const indexMap = new Map(nodes.map((n, i) => [n.name, i]));

  const links = validInput.flatMap((node) =>
    node.targets.map((t) => ({
      source: indexMap.get(node.name)!,
      target: indexMap.get(t.name)!,
      value: t.value,
      color: t.color ?? node.color,
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
  isAttrition?: boolean;
  weight?: number; // attrition targets only — relative pressure
};

export type DynamicNode = {
  id: string;
  name: string;
  role?: string;
  color?: string;
  location?: string;
  totalOutput?: number;
  weight?: number; // productive pressure — compared against attrition weights
  max?: number; // productive targets only — hard cap on flow received};
  targets: DynamicTarget[];
};

const ATTRITION_NAMES = new Set([
  "Lost",
  "Attacks",
  "Stolen",
  "Wasted",
  "Destroyed",
  "Slag",
]);

/** Convert static SankeyInput to editable DynamicNode[]. */
export function toDynamicNodes(input: SankeyInput): DynamicNode[] {
  const targetNames = new Set(
    input.flatMap((n) => n.targets.map((t) => t.name)),
  );
  return input.map((node) => {
    const isSource = !targetNames.has(node.name);
    const total = node.targets.reduce((s, t) => s + t.value, 0);

    const attritionTargets = node.targets.filter((t) =>
      ATTRITION_NAMES.has(t.name),
    );
    const productiveTargets = node.targets.filter(
      (t) => !ATTRITION_NAMES.has(t.name),
    );
    const productiveTotal = productiveTargets.reduce((s, t) => s + t.value, 0);

    const allWeights = [
      productiveTotal,
      ...attritionTargets.map((t) => t.value),
    ].filter((v) => v > 0);
    const g = allWeights.length > 0 ? allWeights.reduce(gcd) : 1;

    const prodValues = productiveTargets
      .map((t) => t.value)
      .filter((v) => v > 0);
    const gcdProd = prodValues.length > 0 ? prodValues.reduce(gcd) : 1;

    return {
      id: node.name,
      name: node.name,
      role: node.role,
      color: node.color,
      totalOutput: isSource ? total : undefined,
      weight: productiveTotal > 0 ? productiveTotal / g : 1,
      targets: node.targets.map((t) => {
        const isAttrition = ATTRITION_NAMES.has(t.name);
        if (isAttrition) {
          return {
            id: `${node.name}->${t.name}`,
            name: t.name,
            color: t.color,
            isAttrition: true,
            weight: g > 0 ? t.value / g : t.value,
          };
        }
        return {
          id: `${node.name}->${t.name}`,
          name: t.name,
          color: t.color,
          isAttrition: false,
          weight: t.value > 0 ? t.value / gcdProd : 1,
        };
      }),
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
  const attrition = node.targets.filter((t) => t.isAttrition);
  const productive = node.targets.filter((t) => !t.isAttrition);

  const producerWeight = productive.length > 0 ? (node.weight ?? 1) : 0;
  const attritionWeight = attrition.reduce((s, t) => s + (t.weight ?? 1), 0);
  const totalWeight = producerWeight + attritionWeight;

  const allWeights = [producerWeight, ...attrition.map((t) => t.weight ?? 1)];
  const distributed = distributeByWeight(output, allWeights, totalWeight);
  const productiveOutput = distributed[0];

  const productiveValues = distributeWithCaps(
    productiveOutput,
    productive.map((t) => ({
      weight: t.weight ?? 1,
      max: remainingCapacity.has(t.name)
        ? remainingCapacity.get(t.name)!
        : undefined,
    })),
  );

  return [
    ...attrition.map((t, i) => ({
      name: t.name,
      value: distributed[i + 1],
      color: t.color,
    })),
    ...productive.map((t, i) => ({
      name: t.name,
      value: productiveValues[i],
      color: t.color ?? node.color,
    })),
  ];
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
      inflows.set(tv.name, (inflows.get(tv.name) ?? 0) + tv.value);
      if (remainingCapacity.has(tv.name)) {
        remainingCapacity.set(
          tv.name,
          Math.max(0, remainingCapacity.get(tv.name)! - tv.value),
        );
      }
    }
  }

  return nodes.map((node) => ({
    name: node.name,
    role: node.role,
    color: node.color,
    targets: resolvedTargets.get(node.name) ?? [],
  }));
}
