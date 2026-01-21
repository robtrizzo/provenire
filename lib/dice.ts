import { Die, DieFace, EffectDegree } from "@/types/dice";

export const MAX_ACTION_DICE = 2;
export const MAX_BOND_DICE = 1;

export const AbilityDice: Record<0 | 1 | 2 | 3, Die> = {
  0: { faces: ["tc", "t", "t", "t", "t:r", "t:r"], variant: "ability" },
  1: { faces: ["tc", "t", "t", "t", "t:r", "ec:r"], variant: "ability" },
  2: { faces: ["tc", "t", "t", "t:r", "t:r", "ec:s"], variant: "ability" },
  3: { faces: ["tc", "t", "t", "t:s", "t:s", "ec:s"], variant: "ability" },
};

export const SkillDice: Record<1 | 2 | 3 | 4, Die> = {
  1: { faces: ["t", "t", "_", "ta", "t:r", "ec:s"], variant: "skill" },
  2: { faces: ["t", "_", "ta", "ta", "t:s", "ec:s"], variant: "skill" },
  3: { faces: ["t", "_", "ta", "ta", "ta:s", "ec:e"], variant: "skill" },
  4: { faces: ["t", "_", "ta", "ta", "a:e", "ac:e"], variant: "skill" },
};

export const BondDice: Record<0 | 1 | 2 | 3 | 4, Die> = {
  0: { faces: ["t", "t", "_", "_", "a", "t:r"], variant: "bond" },
  1: { faces: ["t", "_", "_", "_", "a", "ec:r"], variant: "bond" },
  2: { faces: ["t", "_", "_", "a", "a", "ac:r"], variant: "bond" },
  3: { faces: ["t", "_", "a", "a", "a", "ac:s"], variant: "bond" },
  4: { faces: ["_", "a", "a", "a", "a", "ac:e"], variant: "bond" },
};

export const PushDie: Die = {
  faces: ["t", "t", "t", "t", "tac:r", "ec:e"],
  variant: "push",
};

export const EmotionDie: Die = {
  faces: ["t", "t", "t", "t", "tc", "ac"],
  variant: "emotion",
};

// Helper to get max die level from a dice set
export function getMaxDieLevel(diceSet: Record<number, Die>): number {
  return Math.max(...Object.keys(diceSet).map(Number));
}

// Helper to get min die level from a dice set
export function getMinDieLevel(diceSet: Record<number, Die>): number {
  return Math.min(...Object.keys(diceSet).map(Number));
}

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
  return dice.reduce((product, die) => product * die.faces.length, 1);
};

interface ThreatResult {
  threatProbability: number;
  noThreatProbability: number;
  totalOutcomes: number;
  threatOutcomes: number;
  noThreatOutcomes: number;
  /** Distribution of threat face counts: index = number of threat faces, value = probability percentage */
  threatCountDistribution: number[];
  /** Raw outcome counts for each threat face count */
  threatCountOutcomes: number[];
}

/**
 * Calculate the probability of rolling at least one threat
 * A threat occurs when:
 * 1. At least one die shows a face with threat (t, ta, or their effect variants like t:r, t:s, ta:e)
 * 2. AND no die shows a threat-canceling effect (a face with an effect that doesn't have threat)
 */
export function calculateThreatProbability(dice: Die[]): ThreatResult {
  if (dice.length === 0) {
    return {
      threatProbability: 0,
      noThreatProbability: 100,
      totalOutcomes: 0,
      threatOutcomes: 0,
      noThreatOutcomes: 0,
      threatCountDistribution: [],
      threatCountOutcomes: [],
    };
  }

  const totalOutcomes = calculateTotalOutcomes(dice);

  // We need to enumerate all outcomes to correctly calculate threat probability
  // Threat occurs when: at least one threat face AND no threat-canceling effect
  let threatOutcomes = 0;

  // Track outcomes by number of threat faces rolled (ignoring cancellation)
  const threatCountOutcomes: number[] = new Array(dice.length + 1).fill(0);

  function generateOutcomes(diceIndex: number, currentRoll: DieFace[]): void {
    if (diceIndex === dice.length) {
      // Count the number of threat faces in this roll
      const threatFaceCount = currentRoll.filter(hasThreat).length;
      threatCountOutcomes[threatFaceCount]++;

      // Check if any face has a threat-canceling effect
      const hasThreactCancelingEffect = currentRoll.some(cancelsThreats);

      if (hasThreactCancelingEffect) {
        // No threat - effect cancels it
        return;
      }

      // Check if at least one face has threat
      const hasAnyThreat = threatFaceCount > 0;

      if (hasAnyThreat) {
        threatOutcomes++;
      }
      return;
    }

    for (const face of dice[diceIndex].faces) {
      generateOutcomes(diceIndex + 1, [...currentRoll, face]);
    }
  }

  generateOutcomes(0, []);

  const noThreatOutcomes = totalOutcomes - threatOutcomes;

  // Convert threat count outcomes to probabilities
  const threatCountDistribution = threatCountOutcomes.map(
    (count) => (count / totalOutcomes) * 100,
  );

  return {
    threatProbability: (threatOutcomes / totalOutcomes) * 100,
    noThreatProbability: (noThreatOutcomes / totalOutcomes) * 100,
    totalOutcomes,
    threatOutcomes,
    noThreatOutcomes,
    threatCountDistribution,
    threatCountOutcomes,
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
    return {
      advantageProbability: 0,
      noAdvantageProbability: 100,
      totalOutcomes: 0,
      advantageOutcomes: 0,
      noAdvantageOutcomes: 0,
    };
  }

  const totalOutcomes = calculateTotalOutcomes(dice);

  // Calculate P(no advantage rolled on any die)
  let probNoAdvantage = 1;
  for (const die of dice) {
    const advantageCount = die.faces.filter(hasAdvantage).length;
    probNoAdvantage *= (die.faces.length - advantageCount) / die.faces.length;
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
 * Calculate the probability of rolling a critical hit (3+ dice showing a crit candidate face marked with 'c')
 */
export function calculateCritProbability(
  dice: Die[],
  critCountRequired: number = 3,
): CritResult {
  if (dice.length < critCountRequired) {
    const totalOutcomes = dice.length === 0 ? 0 : dice[0].faces.length;
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

  // Enumerate all possible outcomes to count those with >= critCountRequired crit candidates
  let critOutcomes = 0;

  function generateOutcomes(diceIndex: number, currentRoll: DieFace[]): void {
    if (diceIndex === dice.length) {
      // Count the number of crit candidate faces in this roll
      const critFaceCount = currentRoll.filter(isCritCandidate).length;
      if (critFaceCount >= critCountRequired) {
        critOutcomes++;
      }
      return;
    }
    for (const face of dice[diceIndex].faces) {
      generateOutcomes(diceIndex + 1, [...currentRoll, face]);
    }
  }

  generateOutcomes(0, []);

  const noCritOutcomes = totalOutcomes - critOutcomes;
  const probCrit = totalOutcomes === 0 ? 0 : critOutcomes / totalOutcomes;

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
    return {
      anyEffectProbability: 0,
      noEffectProbability: 100,
      reducedEffectProbability: 0,
      standardEffectProbability: 0,
      enhancedEffectProbability: 0,
      totalOutcomes: 0,
      anyEffectOutcomes: 0,
      noEffectOutcomes: 0,
      reducedEffectOutcomes: 0,
      standardEffectOutcomes: 0,
      enhancedEffectOutcomes: 0,
    };
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
    for (const face of dice[diceIndex].faces) {
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
