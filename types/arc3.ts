export type ActionV3 = {
  name: string;
  type: ActionVariantV3;
  level: number[];
  description?: string;
};

export type ActionVariantV3 = "ability" | "skill" | "bond";
