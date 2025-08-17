import { StringUnion } from "@/lib/utils";

export const RollType = StringUnion("action", "fortune", "resist", "project");
export type RollType = typeof RollType.type;

export const RollResult = StringUnion("failure", "partial", "success", "crit");
export type RollResult = typeof RollResult.type;

export const RollEffect = StringUnion("reduced", "normal", "improved");
export type RollEffect = typeof RollEffect.type;

export type Roll = {
  charName: string;
  userid: string;
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

// export function validateRoll(roll: Roll) {
//   let valid =
//     (roll.redDice && roll.redDice.length > 0) ||
//     (roll.blueDice && roll.blueDice.length > 0) ||
//     (roll.pinkDice && roll.pinkDice.length > 0);
//   valid = valid && roll.userid !== "" && roll.userid !== undefined;
//   if (!valid) {
//     throw new Error("Rolls require at least 1 die roll");
//   }
//   RollType.assert(roll.type);
//   RollResult.assert(roll.result);
//   RollEffect.assert(roll.effect);
//   return roll;
// }

// export function getHighestRollColor(roll: Roll): "red" | "blue" | "pink" {
//   if (roll.result === "crit") {
//     // Check for 6s in order of priority: pink > blue > red
//     if (roll.pinkDice?.some((d) => d === 6)) {
//       return "pink";
//     }
//     if (roll.blueDice.some((d) => d === 6)) {
//       return "blue";
//     }
//     return "red"; // Must be red if we got here with a crit
//   }

//   // crit won't be used but lets us use RollResult
//   const categories = {
//     red: { failure: 0, partial: 0, success: 0, crit: 0 },
//     blue: { failure: 0, partial: 0, success: 0, crit: 0 },
//     pink: { failure: 0, partial: 0, success: 0, crit: 0 },
//   };

//   const countDie = (die: number): RollResult => {
//     switch (die) {
//       case 1:
//       case 2:
//       case 3:
//         return "failure";
//       case 4:
//       case 5:
//         return "partial";
//       case 6:
//         return "success";
//       default:
//         return "failure"; // shouldn't happen
//     }
//   };

//   roll.redDice.forEach((die) => {
//     categories.red[countDie(die)]++;
//   });

//   roll.blueDice.forEach((die) => {
//     categories.blue[countDie(die)]++;
//   });

//   roll.pinkDice?.forEach((die) => {
//     categories.pink[countDie(die)]++;
//   });

//   // Check successes first (priority: pink > blue > red)
//   if (
//     categories.pink.success >= 1 ||
//     categories.blue.success >= 1 ||
//     categories.red.success >= 1
//   ) {
//     if (categories.pink.success >= 1) return "pink";
//     if (categories.blue.success >= 1) return "blue";
//     return "red";
//   }

//   // Check partials (priority: pink > blue > red)
//   if (
//     categories.pink.partial >= 1 ||
//     categories.blue.partial >= 1 ||
//     categories.red.partial >= 1
//   ) {
//     if (categories.pink.partial >= 1) return "pink";
//     if (categories.blue.partial >= 1) return "blue";
//     return "red";
//   }

//   // All failures - return based on presence (priority: pink > blue > red)
//   if (categories.pink.failure >= 1) return "pink";
//   if (categories.blue.failure >= 1) return "blue";
//   return "red";
// }

// // Update the existing blueHigher function to use the new function
// export function blueHigher(roll: Roll): boolean {
//   const highest = getHighestRollColor(roll);
//   return highest === "blue" || highest === "pink";
// }

// export function stressFromResist(roll: Roll): number {
//   let stress: number;
//   switch (roll.result) {
//     case "failure":
//       stress = blueHigher(roll) ? 2 : 3;
//       break;
//     case "partial":
//       stress = blueHigher(roll) ? 1 : 2;
//       break;
//     case "success":
//       stress = blueHigher(roll) ? 0 : 1;
//       break;
//     case "crit":
//       stress = -1;
//       break;
//   }
//   return stress;
// }

// export function ticksFromProject(roll: Roll): number[] {
//   const ticks = [];
//   switch (roll.result) {
//     case "failure":
//       ticks.push(0, 1, 1);
//       break;
//     case "partial":
//       ticks.push(1, 2, 3);
//       break;
//     case "success":
//       ticks.push(2, 3, 5);
//       break;
//     case "crit":
//       ticks.push(3, 5, 7);
//       break;
//   }
//   return ticks;
// }

// export function resultsMessage(roll: Roll): string {
//   const blueIsHigher = blueHigher(roll);
//   let resultText = "";
//   switch (roll.type) {
//     case "resist":
//       const stress = stressFromResist(roll);
//       switch (stress) {
//         case -1:
//           resultText = "Crit! Clear 1 stress.";
//           break;
//         case 0:
//           resultText = `${
//             roll.result === "crit" ? "Crit! " : ""
//           }Take no stress.`;
//           break;
//         default:
//           resultText = `Take ${stress} stress.`;
//           break;
//       }
//       break;
//     case "project":
//       switch (roll.result) {
//         case "crit":
//           resultText = `Crit! ${
//             blueIsHigher ? "" : "(but take reduced effect)"
//           }`;
//           break;
//         case "success":
//           resultText = `Hit${blueIsHigher ? "." : ", and take reduced effect"}`;
//           break;
//         case "partial":
//           resultText = `Partial hit${
//             blueIsHigher ? "." : ", and take reduced effect"
//           }`;
//           break;
//         case "failure":
//           resultText = `Miss${
//             blueIsHigher ? "." : ", and take reduced effect"
//           }`;
//           break;
//       }
//       break;
//     default:
//       switch (roll.result) {
//         case "crit":
//           resultText = "Crit! Succeed with improved effect.";
//           break;
//         case "failure":
//           resultText = "Miss. Suffer the consequences.";
//           break;
//         case "partial":
//           resultText = `Partial hit. Succeed, but suffer the consequences${
//             roll.effect ? "" : " and take reduced effect"
//           }.`;
//           break;
//         case "success":
//           resultText = `Hit! Succeed${
//             roll.effect ? "" : ", but take reduced effect"
//           }.`;
//           break;
//       }
//   }
//   return resultText;
// }
