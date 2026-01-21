"use client";
import { TypographyH1, TypographyH3 } from "@/components/ui/typography";
import {
  AbilityDice,
  BondDice,
  calculateAdvantageProbability,
  calculateCritProbability,
  calculateEffectProbability,
  calculateThreatProbability,
  PushDie,
  SkillDice,
} from "@/lib/dice";
import { DiceDataEntry, DiceStatsChart } from "./(components)/chart";
import { Die } from "@/types/dice";

interface DiceConfig {
  label: string;
  dice: Die[];
}

/**
 * Generate dice statistics data from an array of dice configurations
 */
export function generateDiceData(configs: DiceConfig[]): DiceDataEntry[] {
  return configs.map(({ label, dice }) => {
    const threat = calculateThreatProbability(dice);
    const advantage = calculateAdvantageProbability(dice);
    const crit = calculateCritProbability(dice);
    const effect = calculateEffectProbability(dice);

    // Build threat face distribution entries
    const threatFaceEntries: Record<`threat${number}Faces`, number> = {};
    threat.threatCountDistribution.forEach((probability, count) => {
      threatFaceEntries[`threat${count}Faces`] = parseFloat(
        probability.toFixed(2),
      );
    });

    return {
      dice: label,
      threat: parseFloat(threat.threatProbability.toFixed(2)),
      success: parseFloat(effect.anyEffectProbability.toFixed(2)),
      crit: parseFloat(crit.critProbability.toFixed(2)),
      advantage: parseFloat(advantage.advantageProbability.toFixed(2)),
      reducedEffect: parseFloat(effect.reducedEffectProbability.toFixed(2)),
      standardEffect: parseFloat(effect.standardEffectProbability.toFixed(2)),
      enhancedEffect: parseFloat(effect.enhancedEffectProbability.toFixed(2)),
      ...threatFaceEntries,
    };
  });
}

const currentDiceData: DiceDataEntry[] = [
  {
    dice: "0",
    threat: 97.22,
    success: 25,
    crit: 0,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
  {
    dice: "1",
    threat: 83.33,
    success: 50,
    crit: 0,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
  {
    dice: "2",
    threat: 69.44,
    success: 75,
    crit: 2.78,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
  {
    dice: "3",
    threat: 57.86,
    success: 87.5,
    crit: 7.41,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
  {
    dice: "4",
    threat: 48.22,
    success: 93.75,
    crit: 13.19,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
  {
    dice: "5",
    threat: 40.18,
    success: 96.88,
    crit: 19.62,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
  {
    dice: "6",
    threat: 33.48,
    success: 98.44,
    crit: 26.32,
    advantage: 0,
    reducedEffect: 0,
    standardEffect: 0,
    enhancedEffect: 0,
  },
];

const level1DiceConfigs: DiceConfig[] = [
  { label: "1A₀", dice: [AbilityDice[0]] },
  { label: "1A₁", dice: [AbilityDice[1]] },
  { label: "1A₁1S₁", dice: [AbilityDice[1], SkillDice[1]] },
  { label: "2A₁1S₁", dice: [AbilityDice[1], AbilityDice[1], SkillDice[1]] },
  {
    label: "2A₁2S₁",
    dice: [AbilityDice[1], AbilityDice[1], SkillDice[1], SkillDice[1]],
  },
  {
    label: "2A₁2S₁P",
    dice: [AbilityDice[1], AbilityDice[1], SkillDice[1], SkillDice[1], PushDie],
  },
  {
    label: "2A₁2S₁P1B₁",
    dice: [
      AbilityDice[1],
      AbilityDice[1],
      SkillDice[1],
      SkillDice[1],
      PushDie,
      BondDice[1],
    ],
  },
];

const level1DiceData = generateDiceData(level1DiceConfigs);

const upgradePathAbilityDiceConfigs: DiceConfig[] = [
  { label: "2A₁1S₁", dice: [AbilityDice[1], AbilityDice[1], SkillDice[1]] },
  { label: "1A₁1A₂1S₁", dice: [AbilityDice[1], AbilityDice[2], SkillDice[1]] },
  { label: "1A₁1A₃1S₁", dice: [AbilityDice[1], AbilityDice[3], SkillDice[1]] },
  { label: "2A₂1S₁", dice: [AbilityDice[2], AbilityDice[2], SkillDice[1]] },
  { label: "1A₂1A₃1S₁", dice: [AbilityDice[2], AbilityDice[3], SkillDice[1]] },
  { label: "2A₃1S₁", dice: [AbilityDice[3], AbilityDice[3], SkillDice[1]] },
];

const upgradePathAbilityDiceData = generateDiceData(
  upgradePathAbilityDiceConfigs,
);

const upgradePathSkillDiceConfigs: DiceConfig[] = [
  { label: "1A₁2S₁", dice: [AbilityDice[1], SkillDice[1], SkillDice[1]] },
  { label: "1A₁1S₁1S₂", dice: [AbilityDice[1], SkillDice[1], SkillDice[2]] },
  { label: "1A₁2S₂", dice: [AbilityDice[1], SkillDice[2], SkillDice[2]] },
  { label: "1A₁1S₂1S₃", dice: [AbilityDice[1], SkillDice[2], SkillDice[3]] },
  { label: "1A₁2S₃", dice: [AbilityDice[1], SkillDice[3], SkillDice[3]] },
  { label: "1A₁1S₃1S₄", dice: [AbilityDice[1], SkillDice[3], SkillDice[4]] },
  { label: "1A₁2S₄", dice: [AbilityDice[1], SkillDice[4], SkillDice[4]] },
];

const upgradePathSkillDiceData = generateDiceData(upgradePathSkillDiceConfigs);

const upgradePathBondDiceConfigs: DiceConfig[] = [
  { label: "1A₁1S₁1B₀", dice: [AbilityDice[1], SkillDice[1], BondDice[0]] },
  { label: "1A₁1S₁1B₁", dice: [AbilityDice[1], SkillDice[1], BondDice[1]] },
  { label: "1A₁1S₁1B₂", dice: [AbilityDice[1], SkillDice[1], BondDice[2]] },
  { label: "1A₁1S₁1B₃", dice: [AbilityDice[1], SkillDice[1], BondDice[3]] },
  { label: "1A₁1S₁1B₄", dice: [AbilityDice[1], SkillDice[1], BondDice[4]] },
];

const upgradePathBondDiceData = generateDiceData(upgradePathBondDiceConfigs);

const upgradePathIndividualDiceConfigs: DiceConfig[] = [
  { label: "1A₀1S₁1B₀", dice: [AbilityDice[0], SkillDice[1], BondDice[0]] },
  { label: "1A₁1S₂1B₁", dice: [AbilityDice[1], SkillDice[2], BondDice[1]] },
  { label: "1A₂1S₃1B₂", dice: [AbilityDice[2], SkillDice[3], BondDice[2]] },
  { label: "1A₃1S₄1B₃", dice: [AbilityDice[3], SkillDice[4], BondDice[3]] },
  { label: "1A₃1S₄1B₄", dice: [AbilityDice[3], SkillDice[4], BondDice[4]] },
];

const upgradePathIndividualDiceData = generateDiceData(
  upgradePathIndividualDiceConfigs,
);

const upgradePathMoreDiceConfigs: DiceConfig[] = [
  { label: "1A₁1S₁1B₁", dice: [AbilityDice[1], SkillDice[1], BondDice[1]] },
  {
    label: "2A₁1S₁1B₁",
    dice: [AbilityDice[1], AbilityDice[1], SkillDice[1], BondDice[1]],
  },
  {
    label: "2A₁2S₁1B₁",
    dice: [
      AbilityDice[1],
      AbilityDice[1],
      SkillDice[1],
      SkillDice[1],
      BondDice[1],
    ],
  },
];
const upgradePathMoreDiceData = generateDiceData(upgradePathMoreDiceConfigs);

const upgradePathFullConfigs: DiceConfig[] = [
  { label: "1A₀", dice: [AbilityDice[0]] },
  { label: "1A₀1S₁", dice: [AbilityDice[0], SkillDice[1]] },
  { label: "1A₁1S₁", dice: [AbilityDice[1], SkillDice[1]] },
  { label: "1A₁1S₂", dice: [AbilityDice[1], SkillDice[2]] },
  { label: "1A₂1S₂", dice: [AbilityDice[2], SkillDice[2]] },
  { label: "1A₂1A₁1S₂", dice: [AbilityDice[2], AbilityDice[1], SkillDice[2]] },
  { label: "2A₂1S₂", dice: [AbilityDice[2], AbilityDice[2], SkillDice[2]] },
  { label: "2A₂1S₃", dice: [AbilityDice[2], AbilityDice[2], SkillDice[3]] },
  {
    label: "2A₂1S₃1S₁",
    dice: [AbilityDice[2], AbilityDice[2], SkillDice[3], SkillDice[1]],
  },
  {
    label: "2A₂2S₃",
    dice: [AbilityDice[2], AbilityDice[2], SkillDice[3], SkillDice[3]],
  },
  {
    label: "1A₂1A₃2S₃",
    dice: [AbilityDice[2], AbilityDice[3], SkillDice[3], SkillDice[3]],
  },
  {
    label: "1A₂1A₃1S₃1S₄",
    dice: [AbilityDice[2], AbilityDice[3], SkillDice[3], SkillDice[4]],
  },
  {
    label: "2A₃1S₃1S₄",
    dice: [AbilityDice[3], AbilityDice[3], SkillDice[3], SkillDice[4]],
  },
  {
    label: "2A₃2S₄",
    dice: [AbilityDice[3], AbilityDice[3], SkillDice[4], SkillDice[4]],
  },
];

const upgradePathFullDiceData = generateDiceData(upgradePathFullConfigs);

const diceGremlinConfigs: DiceConfig[] = [
  {
    label: "1A₀1S₁1B₀P",
    dice: [AbilityDice[0], SkillDice[1], BondDice[0], PushDie],
  },
  {
    label: "1A₁1S₁1B₀P",
    dice: [AbilityDice[1], SkillDice[1], BondDice[0], PushDie],
  },
  {
    label: "1A₁1S₁1B₁P",
    dice: [AbilityDice[1], SkillDice[1], BondDice[1], PushDie],
  },
  {
    label: "1A₁2S₁1B₁P",
    dice: [AbilityDice[1], SkillDice[1], SkillDice[1], BondDice[1], PushDie],
  },
  {
    label: "2A₁2S₁1B₁P",
    dice: [
      AbilityDice[1],
      AbilityDice[1],
      SkillDice[1],
      SkillDice[1],
      BondDice[1],
      PushDie,
    ],
  },
  {
    label: "2A₁1S₂1S₁1B₁P",
    dice: [
      AbilityDice[1],
      AbilityDice[1],
      SkillDice[2],
      SkillDice[1],
      BondDice[1],
      PushDie,
    ],
  },
  {
    label: "2A₁1S₂1S₁1B₂P",
    dice: [
      AbilityDice[1],
      AbilityDice[1],
      SkillDice[2],
      SkillDice[1],
      BondDice[2],
      PushDie,
    ],
  },
  {
    label: "1A₂1A₁1S₂1S₁1B₂P",
    dice: [
      AbilityDice[2],
      AbilityDice[1],
      SkillDice[2],
      SkillDice[1],
      BondDice[2],
      PushDie,
    ],
  },
  {
    label: "1A₂1A₁2S₂1B₂P",
    dice: [
      AbilityDice[2],
      AbilityDice[1],
      SkillDice[2],
      SkillDice[2],
      BondDice[2],
      PushDie,
    ],
  },
  {
    label: "2A₂2S₂1B₂P",
    dice: [
      AbilityDice[2],
      AbilityDice[2],
      SkillDice[2],
      SkillDice[2],
      BondDice[2],
      PushDie,
    ],
  },
  {
    label: "2A₂1S₂1S₃1B₂P",
    dice: [
      AbilityDice[2],
      AbilityDice[2],
      SkillDice[2],
      SkillDice[3],
      BondDice[2],
      PushDie,
    ],
  },
  {
    label: "2A₂1S₂1S₃1B₃P",
    dice: [
      AbilityDice[2],
      AbilityDice[2],
      SkillDice[2],
      SkillDice[3],
      BondDice[3],
      PushDie,
    ],
  },
  {
    label: "2A₂2S₃1B₃P",
    dice: [
      AbilityDice[2],
      AbilityDice[2],
      SkillDice[3],
      SkillDice[3],
      BondDice[3],
      PushDie,
    ],
  },
  {
    label: "1A₂1A₃2S₃1B₃P",
    dice: [
      AbilityDice[2],
      AbilityDice[3],
      SkillDice[3],
      SkillDice[3],
      BondDice[3],
      PushDie,
    ],
  },
  {
    label: "1A₂1A₃1S₃1S₄1B₃P",
    dice: [
      AbilityDice[2],
      AbilityDice[3],
      SkillDice[4],
      SkillDice[3],
      BondDice[3],
      PushDie,
    ],
  },
  {
    label: "1A₂1A₃1S₃1S₄1B₄P",
    dice: [
      AbilityDice[2],
      AbilityDice[3],
      SkillDice[4],
      SkillDice[3],
      BondDice[4],
      PushDie,
    ],
  },
  {
    label: "1A₂1A₃2S₄1B₄P",
    dice: [
      AbilityDice[2],
      AbilityDice[3],
      SkillDice[4],
      SkillDice[4],
      BondDice[4],
      PushDie,
    ],
  },
  {
    label: "2A₃2S₄1B₄P",
    dice: [
      AbilityDice[3],
      AbilityDice[3],
      SkillDice[4],
      SkillDice[4],
      BondDice[4],
      PushDie,
    ],
  },
];

const diceGremlinDiceData = generateDiceData(diceGremlinConfigs);

const standardMetrics = [
  "threat",
  "success",
  "crit",
  "advantage",
  "reducedEffect",
  "standardEffect",
  "enhancedEffect",
] as const;

const threatMetrics = [
  "threat",
  "threat1Faces",
  "threat2Faces",
  "threat3Faces",
  "threat4Faces",
  "threat5Faces",
  "threat6Faces",
] as const;

export default function Page() {
  return (
    <div className="flex flex-col w-full p-8">
      <TypographyH1>Arc Three Dice Stats</TypographyH1>

      <div className="py-8">
        <TypographyH3>Current Dice System</TypographyH3>
      </div>
      <DiceStatsChart
        data={currentDiceData}
        metrics={["threat", "success", "crit"]}
      />

      <div className="py-8">
        <TypographyH3>Level 1 Dice - New System</TypographyH3>
      </div>
      <DiceStatsChart data={level1DiceData} yAxisDomain={[0, 100]} />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Ability Dice</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathAbilityDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Skill Dice</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathSkillDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Bond Dice</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathBondDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Dice Levels</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathIndividualDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />
      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Dice Levels - Threats</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathIndividualDiceData}
        metrics={[...threatMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Dice Number</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathMoreDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />
      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Dice Number - Threats</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathMoreDiceData}
        metrics={[...threatMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Dice Fully</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathFullDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Dice Fully - Threats</TypographyH3>
      </div>
      <DiceStatsChart
        data={upgradePathFullDiceData}
        metrics={[...threatMetrics]}
        yAxisDomain={[0, 100]}
      />

      <div className="py-8">
        <TypographyH3>Case Study - Dice Gremlin</TypographyH3>
      </div>
      <DiceStatsChart
        data={diceGremlinDiceData}
        metrics={[...standardMetrics]}
        yAxisDomain={[0, 100]}
      />
      <div className="py-8">
        <TypographyH3>Case Study - Dice Gremlin - Threats</TypographyH3>
      </div>
      <DiceStatsChart
        data={diceGremlinDiceData}
        metrics={[...threatMetrics]}
        yAxisDomain={[0, 100]}
      />
    </div>
  );
}
