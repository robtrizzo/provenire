import type { SunburstData } from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SankeyInput = {
  name: string;
  roles?: string[];
  produces?: number | string;
  location?: string[];
  max?: number;
  modifiers?: { name: string; weight: number; color?: string }[];
  targets: { name: string; weight: number; color?: string }[];
}[];

export type SankeyLocation = {
  name: string;
  targets: { name: string; weight: number; color?: string }[];
};

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
  location?: string[];
  totalOutput?: number;
  max?: number;
  producesRatio?: string;
  modifiers?: DynamicTarget[];
  targets: DynamicTarget[];
};

type ResolvedLink = { name: string; value: number; color?: string };

// ─── Private utilities ────────────────────────────────────────────────────────

function resolveProduces(
  produces: number | string | undefined,
  inflow: number,
): number {
  if (produces === undefined) return inflow;
  if (typeof produces === "number") return produces;
  const [inp, out] = produces.split(":").map(Number);
  return Math.round((inflow * out) / inp);
}

function topologicalSort(
  nodes: { name: string; targets: { name: string }[] }[],
): string[] {
  const nameSet = new Set<string>();
  for (const node of nodes) {
    nameSet.add(node.name);
    for (const t of node.targets) nameSet.add(t.name);
  }

  const nodeMap = new Map(nodes.map((n) => [n.name, n]));
  const inDegree = new Map<string, number>(
    Array.from(nameSet).map((n) => [n, 0]),
  );
  for (const node of nodes)
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
  if (order.length !== nameSet.size) {
    console.warn("Sankey graph contains a cycle; affected nodes were skipped.");
  }
  return order;
}

function propagateFlow(
  order: string[],
  remainingCapacity: Map<string, number>,
  getLinks: (name: string, inflow: number) => ResolvedLink[] | null,
): Map<string, ResolvedLink[]> {
  const inflows = new Map<string, number>();
  const resolved = new Map<string, ResolvedLink[]>();
  for (const name of order) {
    const inflow = inflows.get(name) ?? 0;
    const links = getLinks(name, inflow);
    if (!links || links.length === 0) continue;
    resolved.set(name, links);
    for (const link of links) {
      inflows.set(link.name, (inflows.get(link.name) ?? 0) + link.value);
      if (remainingCapacity.has(link.name)) {
        remainingCapacity.set(
          link.name,
          Math.max(0, remainingCapacity.get(link.name)! - link.value),
        );
      }
    }
  }
  return resolved;
}

/**
 * Distributes `total` integer units among `targets` proportionally, respecting
 * per-target max caps. Overflow from capped targets is redistributed iteratively.
 * Guarantees sum(result) === total exactly (no rounding drift).
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

    // Proportional distribution with largest-remainder rounding (no drift)
    const tentative: number[] =
      totalWeight === 0
        ? weights.map(() => 0)
        : (() => {
            const exact = weights.map((w) => (remaining * w) / totalWeight);
            const floored = exact.map(Math.floor);
            const rem = remaining - floored.reduce((a, b) => a + b, 0);
            exact
              .map((v, i) => ({ frac: v - Math.floor(v), i }))
              .sort((a, b) => b.frac - a.frac)
              .slice(0, rem)
              .forEach(({ i }) => floored[i]++);
            return floored;
          })();

    let overflow = 0;
    const newlyCapped: number[] = [];
    active.forEach((idx, j) => {
      const headroom =
        targets[idx].max !== undefined
          ? targets[idx].max! - result[idx]
          : Infinity;
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

// ─── Static pipeline ──────────────────────────────────────────────────────────

export function toSankeyData(input: SankeyInput) {
  const validInput = input.map((node) => ({
    ...node,
    targets: node.targets.filter((t) => t.weight > 0 && t.name.trim() !== ""),
  }));

  const nodeMap = new Map(validInput.map((n) => [n.name, n]));
  const order = topologicalSort(validInput);

  // Initialize intake capacity for nodes with a max
  const remainingCapacity = new Map<string, number>();
  for (const node of validInput) {
    if (node.max !== undefined) remainingCapacity.set(node.name, node.max);
  }

  // Flow propagation
  const resolvedLinks = propagateFlow(
    order,
    remainingCapacity,
    (name, inflow) => {
      const node = nodeMap.get(name);
      if (!node || node.targets.length === 0) return null;
      const output = resolveProduces(node.produces, inflow);
      const values = distributeWithCaps(
        output,
        node.targets.map((t) => ({
          weight: t.weight,
          max: remainingCapacity.get(t.name),
        })),
      );
      return node.targets.map((t, i) => ({
        name: t.name,
        value: values[i],
        color: t.color,
      }));
    },
  );

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

// ─── Dynamic pipeline ─────────────────────────────────────────────────────────

/** Convert static SankeyInput to editable DynamicNode[]. */
export function toDynamicNodes(input: SankeyInput): DynamicNode[] {
  const targetNames = new Set(
    input.flatMap((n) => n.targets.map((t) => t.name)),
  );
  return input.map((node) => {
    // A node with no incoming edges is treated as a source: its totalOutput
    // defaults to the sum of its target weights when produces is not explicit.
    const isSource = !targetNames.has(node.name);
    const total = node.targets.reduce((s, t) => s + t.weight, 0);
    return {
      id: node.name,
      name: node.name,
      roles: node.roles,
      location: node.location,
      max: node.max,
      totalOutput:
        typeof node.produces === "number"
          ? node.produces
          : isSource
            ? total
            : undefined,
      producesRatio:
        typeof node.produces === "string" ? node.produces : undefined,
      targets: node.targets.map((t) => ({
        id: `${node.name}->${t.name}`,
        name: t.name,
        color: t.color,
        weight: t.weight,
      })),
      modifiers: node.modifiers?.map((m) => ({
        id: `${node.name}->mod->${m.name}`,
        name: m.name,
        color: m.color,
        weight: m.weight,
      })),
    };
  });
}

/**
 * Derive SankeyInput from DynamicNode[] using topological flow propagation.
 * Source nodes use their explicit totalOutput; pass-through nodes derive theirs
 * from the sum of incoming links.
 */
export function computeDynamicSankey(nodes: DynamicNode[]): SankeyInput {
  const validNodes = nodes.map((node) => ({
    ...node,
    targets: node.targets.filter(
      (t) => t.name.trim() !== "" && (t.weight === undefined || t.weight > 0),
    ),
  }));
  const nodeMap = new Map(validNodes.map((n) => [n.name, n]));
  const order = topologicalSort(validNodes);

  // Initialize intake capacity for nodes with a max
  const remainingCapacity = new Map<string, number>();
  for (const node of validNodes) {
    if (node.max !== undefined) remainingCapacity.set(node.name, node.max);
  }

  // Updating capacity as we go so later sources respect how much earlier
  // sources already consumed.
  const resolvedTargets = propagateFlow(
    order,
    remainingCapacity,
    (name, inflow) => {
      const node = nodeMap.get(name);
      if (!node || node.targets.length === 0) return null;
      const output = node.producesRatio
        ? resolveProduces(node.producesRatio, inflow)
        : (node.totalOutput ?? inflow);
      const values = distributeWithCaps(
        output,
        node.targets.map((t) => ({
          weight: t.weight ?? 1,
          max: remainingCapacity.get(t.name),
        })),
      );
      return node.targets.map((t, i) => ({
        name: t.name,
        value: values[i],
        color: t.color ?? node.color,
      }));
    },
  );

  return nodes.map((node) => {
    const links = resolvedTargets.get(node.name) ?? [];
    return {
      name: node.name,
      roles: node.roles,
      produces: links.reduce((s, l) => s + l.value, 0),
      targets: links.map((l) => ({
        name: l.name,
        weight: l.value,
        color: l.color,
      })),
      modifiers: node.modifiers?.map((m) => ({
        name: m.name,
        weight: m.weight ?? 0,
        color: m.color,
      })),
    };
  });
}

export function dynamicNodesToRawInput(nodes: DynamicNode[]): SankeyInput {
  return nodes.map((node) => ({
    name: node.name,
    roles: node.roles,
    location: node.location,
    max: node.max,
    modifiers: node.modifiers?.map((m) => ({
      name: m.name,
      weight: m.weight ?? 0,
      color: m.color,
    })),
    produces: node.producesRatio ?? node.totalOutput,
    targets: node.targets
      .filter(
        (t) => t.name.trim() !== "" && (t.weight === undefined || t.weight > 0),
      )
      .map((t) => ({ name: t.name, weight: t.weight ?? 1, color: t.color })),
  }));
}

export function applyLocationTargets(
  input: SankeyInput,
  locations: SankeyLocation[],
  exemptions: string[] = [],
): SankeyInput {
  const locationMap = new Map(locations.map((l) => [l.name, l]));

  return input.map((node) => {
    if (!node.location?.length) return node;

    const locTargets = node.location.flatMap(
      (name) => locationMap.get(name)?.targets ?? [],
    );

    const byName = new Map<string, { weight: number; color?: string }[]>();
    for (const t of locTargets) {
      if (!byName.has(t.name)) byName.set(t.name, []);
      byName.get(t.name)!.push(t);
    }

    const modifierMap = new Map(
      (node.modifiers ?? []).map((m) => [m.name, m.weight]),
    );

    const locationDerivedTargets = Array.from(byName.entries())
      .filter(([name]) => !exemptions.includes(name))
      .map(([name, entries]) => {
        const avgWeight =
          entries.reduce((s, e) => s + e.weight, 0) / entries.length;
        const modifier = modifierMap.get(name) ?? 0;
        return {
          name,
          weight: Math.max(0, Math.round(avgWeight + modifier)),
          color: entries[0].color,
        };
      })
      .filter((t) => t.weight > 0);

    return {
      ...node,
      targets: [...node.targets, ...locationDerivedTargets],
    };
  });
}

export function sankeyToSunburstData(
  input: SankeyInput,
  label: string,
  fill: string,
  rootNodeName = "Available",
): SunburstData {
  const { nodes, links } = toSankeyData(input);

  // Map: node index → sources that feed it (with actual computed flow values)
  const incomingLinks = new Map<number, { source: number; value: number }[]>();
  for (const link of links) {
    if (!incomingLinks.has(link.target)) incomingLinks.set(link.target, []);
    incomingLinks
      .get(link.target)!
      .push({ source: link.source, value: link.value });
  }

  // Build a name→roles map for role-filter annotation
  const rolesMap = new Map(input.map((n) => [n.name, n.roles]));

  const rootIdx = nodes.findIndex((n) => n.name === rootNodeName);
  if (rootIdx === -1) return { name: label, fill, value: 0 };

  const rootValue = (incomingLinks.get(rootIdx) ?? []).reduce(
    (s, l) => s + l.value,
    0,
  );

  let counter = 0;
  const visited = new Set<number>();

  function buildTree(nodeIdx: number, allocatedValue: number): SunburstData {
    visited.add(nodeIdx);

    const nodeName = nodes[nodeIdx].name;
    const roles = rolesMap.get(nodeName);
    const displayName = roles?.length
      ? `${nodeName} (${roles.join(", ")})`
      : nodeName;
    const uniqueName = `${label}/${displayName}__${counter++}`;

    const sources = incomingLinks.get(nodeIdx) ?? [];
    const unvisited = sources.filter(
      (l) => l.value > 0 && !visited.has(l.source),
    );

    if (unvisited.length === 0)
      return { name: uniqueName, label: displayName, value: allocatedValue };

    const totalInflow = sources.reduce((s, l) => s + l.value, 0);
    const children = unvisited.map((l) => {
      const childAlloc = Math.round((l.value / totalInflow) * allocatedValue);
      return buildTree(l.source, childAlloc);
    });

    return {
      name: uniqueName,
      label: displayName,
      value: allocatedValue,
      children,
    };
  }

  const children = (incomingLinks.get(rootIdx) ?? [])
    .filter((l) => l.value > 0)
    .map((l) => buildTree(l.source, l.value));

  return { name: label, fill, value: rootValue, children };
}
