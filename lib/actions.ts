import actionsArc3 from "@/public/arc3/actions.json";
import { ActionV3, ActionVariantV3 } from "@/types/arc3";

export const codexSubscriptions = {
  basic: [1, 2, 3, 4],
  restricted: [1, 2, 3, 4],
  forbidden: [2, 3, 5, 7],
};

export function getActionSubscription(
  category: "basic" | "restricted" | "forbidden" | undefined,
  score: [number, number],
) {
  if (!category) return 1;
  return codexSubscriptions[category][Math.max(0, score[0] + score[1] - 1)];
}

const all_actions_v3 = [...actionsArc3.Abilities, ...actionsArc3.Skills];

export function getActions(
  names: (string | { name: string; level: number[] })[],
  type: ActionVariantV3,
): ActionV3[] {
  return names
    .map((entry) => {
      const actionName = typeof entry === "string" ? entry : entry.name;
      const level = typeof entry === "string" ? [] : entry.level;
      const found = all_actions_v3.find((a) => a.name === actionName);
      if (!found) return null;
      return { ...found, type, level };
    })
    .filter(Boolean) as ActionV3[];
}
