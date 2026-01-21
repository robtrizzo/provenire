"use client";
import {
  DiceDataEntry,
  DiceStatsChart,
} from "@/app/game/arc-three/dice-stats/(components)/chart";
import { generateDiceData } from "@/app/game/arc-three/dice-stats/page";
import { AbilityDice, BondDice, PushDie, SkillDice } from "@/lib/dice";
import { Die } from "@/types/dice";

interface DiceConfig {
  label: string;
  dice: Die[];
}

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

export function CurrentDice() {
  return (
    <DiceStatsChart
      data={currentDiceData}
      metrics={["threat", "success", "crit"]}
    />
  );
}

export function UpgradeFully() {
  return (
    <DiceStatsChart
      data={upgradePathFullDiceData}
      metrics={[...standardMetrics]}
      yAxisDomain={[0, 100]}
    />
  );
}

export function UpgradeFullyThreat() {
  return (
    <DiceStatsChart
      data={upgradePathFullDiceData}
      metrics={[...threatMetrics]}
      yAxisDomain={[0, 100]}
    />
  );
}

export function MaxDice() {
  return (
    <DiceStatsChart
      data={diceGremlinDiceData}
      metrics={[...standardMetrics]}
      yAxisDomain={[0, 100]}
    />
  );
}

export function MaxDiceThreat() {
  return (
    <DiceStatsChart
      data={diceGremlinDiceData}
      metrics={[...threatMetrics]}
      yAxisDomain={[0, 100]}
    />
  );
}
