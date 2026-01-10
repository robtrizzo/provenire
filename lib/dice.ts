// Base faces without any effect
export type BaseFace = "t" | "a" | "ta" | "_";

// Effect degrees: r = reduced, s = standard, e = enhanced
export type EffectDegree = "r" | "s" | "e";

// DieFace can be:
// - A base face with no effect: "t", "a", "ta", "_"
// - A base face with effect: "t:s", "ta:e", etc.
// - Pure effect: "e:r", "e:s", "e:e"
export type DieFace =
  | BaseFace
  | `${BaseFace}:${EffectDegree}`
  | `e:${EffectDegree}`;

// Helper functions for working with faces
export const hasEffect = (face: DieFace): boolean => face.includes(":");

export const getEffectDegree = (face: DieFace): EffectDegree | null => {
  if (!face.includes(":")) return null;
  return face.split(":")[1] as EffectDegree;
};

export const getBaseFace = (face: DieFace): string => face.split(":")[0];

export const hasThreat = (face: DieFace): boolean => {
  const base = getBaseFace(face);
  return base.includes("t");
};

export const hasAdvantage = (face: DieFace): boolean => {
  const base = getBaseFace(face);
  return base.includes("a");
};

// Check if face cancels threats (has any effect)
export const cancelsThreats = (face: DieFace): boolean => {
  return hasEffect(face) && !hasThreat(face);
};

interface DiceResult {
  threatProbability: number;
  noThreatProbability: number;
  totalOutcomes: number;
  threatOutcomes: number;
  noThreatOutcomes: number;
}

/**
 * Calculate the probability of rolling at least one threat
 */
export function calculateThreatProbability(dice: DieFace[][]): DiceResult {
  if (dice.length === 0) {
    throw new Error("At least one die is required");
  }

  const totalOutcomes = Math.pow(6, dice.length);

  // Calculate P(no threat-canceling effect rolled)
  let probNoEffect = 1;
  for (const die of dice) {
    const effectCount = die.filter(cancelsThreats).length;
    probNoEffect *= (6 - effectCount) / 6;
  }

  // When no effect is rolled, count outcomes with at least one threat
  const outcomesWithNoEffect = probNoEffect * totalOutcomes;

  // Calculate outcomes where all dice show blank when no effect
  let probAllBlankGivenNoEffect = 1;
  for (const die of dice) {
    const effectCount = die.filter(cancelsThreats).length;
    const blankCount = die.filter((face) => face === "_").length;
    const nonEffectCount = 6 - effectCount;

    if (nonEffectCount === 0) {
      probAllBlankGivenNoEffect = 0;
      break;
    }
    probAllBlankGivenNoEffect *= blankCount / nonEffectCount;
  }

  const threatOutcomes = Math.round(
    outcomesWithNoEffect * (1 - probAllBlankGivenNoEffect)
  );
  const noThreatOutcomes = totalOutcomes - threatOutcomes;

  return {
    threatProbability: (threatOutcomes / totalOutcomes) * 100,
    noThreatProbability: (noThreatOutcomes / totalOutcomes) * 100,
    totalOutcomes,
    threatOutcomes,
    noThreatOutcomes,
  };
}

interface AdvantageResult {
  advantageProbability: number;
  noAdvantageProbability: number;
  totalOutcomes: number;
  advantageOutcomes: number;
  noAdvantageOutcomes: number;
}

/**
 * Calculate the probability of rolling at least one advantage
 */
export function calculateAdvantageProbability(
  dice: DieFace[][]
): AdvantageResult {
  if (dice.length === 0) {
    throw new Error("At least one die is required");
  }

  const totalOutcomes = Math.pow(6, dice.length);

  // Calculate P(no advantage rolled on any die)
  let probNoAdvantage = 1;
  for (const die of dice) {
    const advantageCount = die.filter(hasAdvantage).length;
    probNoAdvantage *= (6 - advantageCount) / 6;
  }

  const noAdvantageOutcomes = Math.round(probNoAdvantage * totalOutcomes);
  const advantageOutcomes = totalOutcomes - noAdvantageOutcomes;

  return {
    advantageProbability: (advantageOutcomes / totalOutcomes) * 100,
    noAdvantageProbability: (noAdvantageOutcomes / totalOutcomes) * 100,
    totalOutcomes,
    advantageOutcomes,
    noAdvantageOutcomes,
  };
}

interface CritResult {
  critProbability: number;
  noCritProbability: number;
  totalOutcomes: number;
  critOutcomes: number;
  noCritOutcomes: number;
}

/**
 * Calculate the probability of rolling a critical hit (2+ dice showing their highest face)
 */
export function calculateCritProbability(dice: DieFace[][]): CritResult {
  if (dice.length <= 1) {
    const totalOutcomes = dice.length === 0 ? 0 : dice[0].length;
    return {
      critProbability: 0,
      noCritProbability: 100,
      totalOutcomes,
      critOutcomes: 0,
      noCritOutcomes: totalOutcomes,
    };
  }

  // Calculate total outcomes (product of all die sizes)
  const totalOutcomes = dice.reduce((product, die) => product * die.length, 1);

  // Calculate P(exactly k dice show their highest face) for k >= 2
  // Using complement: P(crit) = 1 - P(0 highest) - P(1 highest)

  // P(no dice show highest face)
  let probNoHighest = 1;
  for (const die of dice) {
    probNoHighest *= (die.length - 1) / die.length;
  }

  // P(exactly 1 die shows highest face)
  let probOneHighest = 0;
  for (let i = 0; i < dice.length; i++) {
    let prob = 1 / dice[i].length; // This die shows highest
    for (let j = 0; j < dice.length; j++) {
      if (i !== j) {
        prob *= (dice[j].length - 1) / dice[j].length; // All other dice don't show highest
      }
    }
    probOneHighest += prob;
  }

  const probCrit = 1 - probNoHighest - probOneHighest;
  const critOutcomes = Math.round(probCrit * totalOutcomes);
  const noCritOutcomes = totalOutcomes - critOutcomes;

  return {
    critProbability: probCrit * 100,
    noCritProbability: (1 - probCrit) * 100,
    totalOutcomes,
    critOutcomes,
    noCritOutcomes,
  };
}

interface EffectResult {
  anyEffectProbability: number;
  noEffectProbability: number;
  reducedEffectProbability: number;
  standardEffectProbability: number;
  enhancedEffectProbability: number;
  totalOutcomes: number;
  anyEffectOutcomes: number;
  noEffectOutcomes: number;
  reducedEffectOutcomes: number;
  standardEffectOutcomes: number;
  enhancedEffectOutcomes: number;
}

/**
 * Calculate the probability of rolling each type of effect
 * Enhanced overrides Standard and Reduced, Standard overrides Reduced
 */
export function calculateEffectProbability(dice: DieFace[][]): EffectResult {
  if (dice.length === 0) {
    throw new Error("At least one die is required");
  }

  // Calculate total outcomes (product of all die sizes)
  const totalOutcomes = dice.reduce((product, die) => product * die.length, 1);

  // For each outcome, determine the final effect level
  let enhancedOutcomes = 0;
  let standardOutcomes = 0;
  let reducedOutcomes = 0;
  let noEffectOutcomes = 0;

  // Generate all possible outcomes
  function generateOutcomes(diceIndex: number, currentRoll: DieFace[]): void {
    if (diceIndex === dice.length) {
      // Determine the effect level for this outcome
      let hasEnhanced = false;
      let hasStandard = false;
      let hasReduced = false;

      for (const face of currentRoll) {
        const degree = getEffectDegree(face);
        if (degree === "e") hasEnhanced = true;
        else if (degree === "s") hasStandard = true;
        else if (degree === "r") hasReduced = true;
      }

      // Apply override rules
      if (hasEnhanced) {
        enhancedOutcomes++;
      } else if (hasStandard) {
        standardOutcomes++;
      } else if (hasReduced) {
        reducedOutcomes++;
      } else {
        noEffectOutcomes++;
      }
      return;
    }

    // Recurse through all faces of current die
    for (const face of dice[diceIndex]) {
      generateOutcomes(diceIndex + 1, [...currentRoll, face]);
    }
  }

  generateOutcomes(0, []);

  const anyEffectOutcomes =
    enhancedOutcomes + standardOutcomes + reducedOutcomes;

  return {
    anyEffectProbability: (anyEffectOutcomes / totalOutcomes) * 100,
    noEffectProbability: (noEffectOutcomes / totalOutcomes) * 100,
    reducedEffectProbability: (reducedOutcomes / totalOutcomes) * 100,
    standardEffectProbability: (standardOutcomes / totalOutcomes) * 100,
    enhancedEffectProbability: (enhancedOutcomes / totalOutcomes) * 100,
    totalOutcomes,
    anyEffectOutcomes,
    noEffectOutcomes,
    reducedEffectOutcomes: reducedOutcomes,
    standardEffectOutcomes: standardOutcomes,
    enhancedEffectOutcomes: enhancedOutcomes,
  };
}
