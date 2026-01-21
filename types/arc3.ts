import { Die } from "./dice";

export type ActionV3 = {
  name: string;
  type: "ability" | "skill" | "bond";
  level: number[];
};
