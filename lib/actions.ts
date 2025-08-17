export const codexSubscriptions = {
  basic: [1, 2, 3, 4],
  restricted: [1, 2, 3, 4],
  forbidden: [2, 3, 5, 7],
};

export function getActionSubscription(
  category: "basic" | "restricted" | "forbidden" | undefined,
  score: [number, number]
) {
  if (!category) return 1;
  return codexSubscriptions[category][Math.max(0, score[0] + score[1] - 1)];
}
