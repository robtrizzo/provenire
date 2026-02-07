import { StringUnion } from "@/lib/utils";
import { Rollable } from "./game";
import { UserId } from "./brand";

export const RollType = StringUnion("action", "fortune", "resist", "project");
export type RollType = typeof RollType.type;

export const RollResult = StringUnion("failure", "partial", "success", "crit");
export type RollResult = typeof RollResult.type;

export const RollEffect = StringUnion("reduced", "normal", "improved");
export type RollEffect = typeof RollEffect.type;

export type Roll = {
  charName: string;
  userid: UserId;
  redDice: number[];
  blueDice: number[];
  pinkDice?: number[];
  numRed: number;
  numBlue: number;
  numPink?: number;
  type: RollType;
  effect: RollEffect;
  result: RollResult;
  resultDie: number;
  private: boolean;
  timestamp?: string;
  tag?: string; // tag is effectively a description of the roll
  metatags?: string[];
};

export type GroupRoll = {
  type: RollType;
  id: string;
  members: GroupRollMember[];
};

export type GroupRollMember = {
  charName: string;
  rollLeft: Rollable | undefined;
  rollRight: Rollable | undefined;
  bonusDiceRed: number;
  bonusDiceBlue: number;
  emotional: boolean;
  leader: boolean;
  lockedIn: boolean;
};

export type EngagementRollQuestion = {
  weight: number;
  question: string;
};

export type MultiplayerEngagementRollQuestion = EngagementRollQuestion & {
  yesVotes: string[];
  noVotes: string[];
};

export type EngagementRollState = MultiplayerEngagementRollQuestion[];

export function validateRoll(roll: Roll) {
  let valid =
    (roll.redDice && roll.redDice.length > 0) ||
    (roll.blueDice && roll.blueDice.length > 0) ||
    (roll.pinkDice && roll.pinkDice.length > 0);
  valid = valid && roll.userid !== "" && roll.userid !== undefined;
  if (!valid) {
    throw new Error("Rolls require at least 1 die roll");
  }
  RollType.assert(roll.type);
  RollResult.assert(roll.result);
  RollEffect.assert(roll.effect);
  return roll;
}
