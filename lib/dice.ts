// Base faces without any effect
export type BaseFace = "t" | "a" | "ta" | "_";

// Effect degrees: r = reduced, s = standard, e = enhanced
export type EffectDegree = "r" | "s" | "e";

export type CritMarker = "c";

// DieFace can be:
// - A base face with no effect: "t", "a", "ta", "_"
// - A base face with crit marker: "tc", "ac", "tac", "_c"
// - A base face with effect: "t:s", "ta:e", etc.
// - A base face with crit and effect: "tc:s", "tac:e", etc.
// - Pure effect: "e:r", "e:s", "e:e"
// - Pure effect with crit: "ec:r", "ec:s", "ec:e"
export type DieFace =
  | BaseFace
  | `${BaseFace}${CritMarker}`
  | `${BaseFace}:${EffectDegree}`
  | `${BaseFace}${CritMarker}:${EffectDegree}`
  | `e:${EffectDegree}`
  | `e${CritMarker}:${EffectDegree}`;

export type Die = DieFace[];

export type DieVariant =
  | "default"
  | "bond"
  | "ability"
  | "skill"
  | "emotion"
  | "push";

export const AbilityDice: Record<0 | 1 | 2 | 3, Die> = {
  0: ["t", "t", "t", "t", "t:r", "t:r"],
  1: ["t", "t", "t", "t", "t:r", "ec:r"],
  2: ["t", "t", "t", "t:r", "t:r", "ec:s"],
  3: ["t", "t", "t", "t:s", "t:s", "ec:s"],
};

export const SkillDice: Record<1 | 2 | 3 | 4, Die> = {
  1: ["t", "t", "_", "ta", "t:r", "ec:s"],
  2: ["t", "_", "ta", "ta", "t:s", "ec:s"],
  3: ["t", "_", "ta", "ta", "a:s", "ec:e"],
  4: ["t", "_", "ta", "a", "a:e", "ac:e"],
};

export const BondDice: Record<0 | 1 | 2 | 3 | 4, Die> = {
  0: ["t", "t", "_", "_", "a", "t:r"],
  1: ["t", "_", "_", "_", "a", "ec:r"],
  2: ["t", "_", "_", "a", "a", "ac:r"],
  3: ["t", "_", "a", "a", "a", "ac:s"],
  4: ["t", "a", "a", "a", "a", "ac:e"],
};

export const PushDie: Die = ["t", "t", "t", "t", "ta:r", "ec:e"];

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

export const isCritCandidate = (face: DieFace): boolean => {
  const base = getBaseFace(face);
  return base.includes("c");
};

// Check if face cancels threats (has any effect)
export const cancelsThreats = (face: DieFace): boolean => {
  return hasEffect(face) && !hasThreat(face);
};

/**
 * Calculate total outcomes for a set of dice based on each die's number of faces
 */
export const calculateTotalOutcomes = (dice: Die[]): number => {
  return dice.reduce((product, die) => product * die.length, 1);
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
 * A threat occurs when:
 * 1. At least one die shows a face with threat (t, ta, or their effect variants like t:r, t:s, ta:e)
 * 2. AND no die shows a threat-canceling effect (a face with an effect that doesn't have threat)
 */
export function calculateThreatProbability(dice: Die[]): DiceResult {
  if (dice.length === 0) {
    throw new Error("At least one die is required");
  }

  const totalOutcomes = calculateTotalOutcomes(dice);

  // We need to enumerate all outcomes to correctly calculate threat probability
  // Threat occurs when: at least one threat face AND no threat-canceling effect
  let threatOutcomes = 0;

  function generateOutcomes(diceIndex: number, currentRoll: DieFace[]): void {
    if (diceIndex === dice.length) {
      // Check if any face has a threat-canceling effect
      const hasThreactCancelingEffect = currentRoll.some(cancelsThreats);

      if (hasThreactCancelingEffect) {
        // No threat - effect cancels it
        return;
      }

      // Check if at least one face has threat
      const hasAnyThreat = currentRoll.some(hasThreat);

      if (hasAnyThreat) {
        threatOutcomes++;
      }
      return;
    }

    for (const face of dice[diceIndex]) {
      generateOutcomes(diceIndex + 1, [...currentRoll, face]);
    }
  }

  generateOutcomes(0, []);

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
export function calculateAdvantageProbability(dice: Die[]): AdvantageResult {
  if (dice.length === 0) {
    throw new Error("At least one die is required");
  }

  const totalOutcomes = calculateTotalOutcomes(dice);

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
 * Calculate the probability of rolling a critical hit (2+ dice showing a crit candidate face marked with 'c')
 */
export function calculateCritProbability(dice: Die[]): CritResult {
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
  const totalOutcomes = calculateTotalOutcomes(dice);

  // Calculate probability based on crit candidate faces
  // P(crit) = 1 - P(0 crit candidates) - P(1 crit candidate)

  // Calculate probability of showing a crit candidate for each die
  const critProbs = dice.map((die) => {
    const critFaces = die.filter(isCritCandidate).length;
    return critFaces / die.length;
  });

  // P(no dice show crit candidate)
  let probNoCrit = 1;
  for (const p of critProbs) {
    probNoCrit *= 1 - p;
  }

  // P(exactly 1 die shows crit candidate)
  let probOneCrit = 0;
  for (let i = 0; i < dice.length; i++) {
    let prob = critProbs[i]; // This die shows crit candidate
    for (let j = 0; j < dice.length; j++) {
      if (i !== j) {
        prob *= 1 - critProbs[j]; // All other dice don't show crit candidate
      }
    }
    probOneCrit += prob;
  }

  const probCrit = 1 - probNoCrit - probOneCrit;
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
export function calculateEffectProbability(dice: Die[]): EffectResult {
  if (dice.length === 0) {
    throw new Error("At least one die is required");
  }

  // Calculate total outcomes (product of all die sizes)
  const totalOutcomes = calculateTotalOutcomes(dice);

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
