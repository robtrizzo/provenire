"use client";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { TypographyH1, TypographyH3 } from "@/components/ui/typography";
import {
  calculateAdvantageProbability,
  calculateCritProbability,
  calculateEffectProbability,
  calculateThreatProbability,
  DieFace,
} from "@/lib/dice";

// Example usage:
const dice1: DieFace[][] = [
  ["t", "t", "t", "t", "t:r", "e:r"],
  ["t", "_", "ta", "ta", "t:s", "e:s"],
  ["t", "_", "ta", "ta", "t:s", "e:s"],
];

const result1 = calculateThreatProbability(dice1);
const result1a = calculateAdvantageProbability(dice1);
const result1c = calculateCritProbability(dice1);
const result1e = calculateEffectProbability(dice1);
console.log(`Threat: ${result1.threatProbability.toFixed(2)}%`); // 57.87%
console.log(`No Threat: ${result1.noThreatProbability.toFixed(2)}%`); // 42.13%
console.log(`Advantage: ${result1a.advantageProbability.toFixed(2)}%`);
console.log(`Crit: ${result1c.critProbability.toFixed(2)}%`);
console.log(`Success: ${result1e.anyEffectProbability.toFixed(2)}%`);
console.log(`ReducedEffect: ${result1e.reducedEffectProbability.toFixed(2)}%`);
console.log(
  `StandardEffect: ${result1e.standardEffectProbability.toFixed(2)}%`
);
console.log(
  `EnhancedEffect: ${result1e.enhancedEffectProbability.toFixed(2)}%`
);

const dice2: DieFace[][] = [
  ["t", "t", "t", "t", "t:r", "e:r"],
  ["t", "_", "ta", "ta", "t:s", "e:s"],
  ["t", "_", "ta", "ta", "a:s", "e:e"],
];

const result2 = calculateThreatProbability(dice2);
const result2a = calculateAdvantageProbability(dice2);
const result2c = calculateCritProbability(dice2);
const result2e = calculateEffectProbability(dice2);
console.log(`Threat: ${result2.threatProbability.toFixed(2)}%`); // 46.30%
console.log(`No Threat: ${result2.noThreatProbability.toFixed(2)}%`); // 53.70%
console.log(`Advantage: ${result2a.advantageProbability.toFixed(2)}%`);
console.log(`Crit: ${result2c.critProbability.toFixed(2)}%`);
console.log(`Success: ${result2e.anyEffectProbability.toFixed(2)}%`);
console.log(`ReducedEffect: ${result2e.reducedEffectProbability.toFixed(2)}%`);
console.log(
  `StandardEffect: ${result2e.standardEffectProbability.toFixed(2)}%`
);
console.log(
  `EnhancedEffect: ${result2e.enhancedEffectProbability.toFixed(2)}%`
);

// Sample data - replace this with your actual data
const currentDiceData = [
  { dice: 0, threat: 97.22, success: 25, crit: 0 },
  { dice: 1, threat: 83.33, success: 50, crit: 0 },
  { dice: 2, threat: 69.44, success: 75, crit: 2.78 },
  { dice: 3, threat: 57.86, success: 87.5, crit: 7.41 },
  { dice: 4, threat: 48.22, success: 93.75, crit: 13.19 },
  { dice: 5, threat: 40.18, success: 96.88, crit: 19.62 },
  { dice: 6, threat: 33.48, success: 98.44, crit: 26.32 },
];

const level1DiceData = [
  {
    dice: "1A₀",
    threat: 100,
    success: 33.33,
    crit: 0,
    advantage: 0,
  },
  {
    dice: "1A₁",
    threat: 83.33,
    success: 33.33,
    crit: 0,
    advantage: 0,
  },
  {
    dice: "1A₁1S₁",
    threat: 69.44,
    success: 55.56,
    crit: 2.78,
    advantage: 16.67,
  },
  {
    dice: "2A₁1S₁",
    threat: 57.86,
    success: 70.73,
    crit: 7.41,
    advantage: 16.67,
  },
  {
    dice: "2A₁2S₁",
    threat: 48.22,
    success: 80.25,
    crit: 13.19,
    advantage: 30.56,
  },
  {
    dice: "2A₁2S₁P",
    threat: 40.18,
    success: 86.83,
    crit: 19.62,
    advantage: 42.13,
  },
  {
    dice: "2A₁2S₁P1B₁",
    threat: 33.48,
    success: 89.03,
    crit: 26.32,
    advantage: 51.77,
  },
];

const upgradePathAbilityDiceData = [
  {
    dice: "2A₁1S₁",
    threat: 57.86,
    success: 70.73,
    crit: 7.41,
    advantage: 16.67,
    reducedEffect: 54.06,
    standardEffect: 16.67,
    enhancedffect: 0,
  },
  {
    dice: "1A₁1A₂1S₁",
    threat: 57.86,
    success: 77.78,
    crit: 7.41,
    advantage: 16.67,
    reducedEffect: 47.22,
    standardEffect: 30.56,
    enhancedffect: 0,
  },
  {
    dice: "1A₁1A₃1S₁",
    threat: 57.86,
    success: 77.78,
    crit: 7.41,
    advantage: 16.67,
    reducedEffect: 19.45,
    standardEffect: 58.33,
    enhancedffect: 0,
  },
  {
    dice: "2A₂1S₁",
    threat: 57.86,
    success: 83.33,
    crit: 7.41,
    advantage: 16.67,
    reducedEffect: 41.2,
    standardEffect: 42.13,
    enhancedffect: 0,
  },
  {
    dice: "1A₂1A₃1S₁",
    threat: 57.86,
    success: 83.33,
    crit: 7.41,
    advantage: 16.67,
    reducedEffect: 18.05,
    standardEffect: 65.28,
    enhancedffect: 0,
  },
  {
    dice: "2A₃1S₁",
    threat: 57.86,
    success: 83.33,
    crit: 7.41,
    advantage: 16.67,
    reducedEffect: 4.16,
    standardEffect: 79.17,
    enhancedffect: 0,
  },
];

const upgradePathSkillDiceData = [
  {
    dice: "1A₁2S₁",
    threat: 57.86,
    success: 70.73,
    crit: 7.41,
    advantage: 30.56,
    reducedEffect: 39.81,
    standardEffect: 30.56,
    enhancedEffect: 0,
  },
  {
    dice: "1A₁1S₁1S₂",
    threat: 57.86,
    success: 70.73,
    crit: 7.41,
    advantage: 44.44,
    reducedEffect: 25.93,
    standardEffect: 44.44,
    enhancedEffect: 0,
  },
  {
    dice: "1A₁2S₂",
    threat: 57.86,
    success: 70.73,
    crit: 7.41,
    advantage: 55.56,
    reducedEffect: 14.81,
    standardEffect: 55.56,
    enhancedEffect: 0,
  },
  {
    dice: "1A₁1S₂1S₃",
    threat: 46.3,
    success: 70.37,
    crit: 7.41,
    advantage: 66.67,
    reducedEffect: 14.81,
    standardEffect: 38.89,
    enhancedEffect: 16.67,
  },
  {
    dice: "1A₁2S₃",
    threat: 37.04,
    success: 70.37,
    crit: 7.41,
    advantage: 75,
    reducedEffect: 14.81,
    standardEffect: 25,
    enhancedEffect: 30.56,
  },
  {
    dice: "1A₁1S₃1S₄",
    threat: 27.78,
    success: 70.37,
    crit: 7.41,
    advantage: 83.33,
    reducedEffect: 14.81,
    standardEffect: 11.12,
    enhancedEffect: 44.44,
  },
  {
    dice: "1A₁2S₄",
    threat: 27.78,
    success: 70.37,
    crit: 7.41,
    advantage: 88.89,
    reducedEffect: 14.81,
    standardEffect: 0,
    enhancedEffect: 55.56,
  },
];

const chartConfig = {
  threat: {
    label: "Threat",
    color: "oklch(70.4% 0.191 22.216)",
  },
  success: {
    label: "Success",
    color: "oklch(74.6% 0.16 232.661)",
  },
  reducedEffect: {
    label: "Reduced Effect",
    color: "oklch(67.3% 0.182 276.935)",
  },
  standardEffect: {
    label: "Standard Effect",
    color: "oklch(71.4% 0.203 305.504)",
  },
  enhancedEffect: {
    label: "Enhanced Effect",
    color: "oklch(71.8% 0.202 349.761)",
  },
  crit: {
    label: "Crit",
    color: "oklch(79.2% 0.209 151.711)",
  },
  advantage: {
    label: "Advantage",
    color: "oklch(82.8% 0.189 84.429)",
  },
} satisfies ChartConfig;

export default function Page() {
  return (
    <div className="flex flex-col w-full p-8">
      <TypographyH1>Arc Three Dice Stats</TypographyH1>

      <div className="py-8">
        <TypographyH3>Current Dice System</TypographyH3>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
        <LineChart accessibilityLayer data={currentDiceData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="dice"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="threat"
            stroke="var(--color-threat)"
            strokeWidth={2}
            dot={{ fill: "var(--color-threat)" }}
          />
          <Line
            type="monotone"
            dataKey="success"
            stroke="var(--color-success)"
            strokeWidth={2}
            dot={{ fill: "var(--color-success)" }}
          />
          <Line
            type="monotone"
            dataKey="crit"
            stroke="var(--color-crit)"
            strokeWidth={2}
            dot={{ fill: "var(--color-crit)" }}
          />
        </LineChart>
      </ChartContainer>

      <div className="py-8">
        <TypographyH3>Level 1 Dice - New System</TypographyH3>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
        <LineChart accessibilityLayer data={level1DiceData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="dice"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            domain={[0, 100]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="threat"
            stroke="var(--color-threat)"
            strokeWidth={2}
            dot={{ fill: "var(--color-threat)" }}
          />
          <Line
            type="monotone"
            dataKey="success"
            stroke="var(--color-success)"
            strokeWidth={2}
            dot={{ fill: "var(--color-success)" }}
          />
          <Line
            type="monotone"
            dataKey="crit"
            stroke="var(--color-crit)"
            strokeWidth={2}
            dot={{ fill: "var(--color-crit)" }}
          />
          <Line
            type="monotone"
            dataKey="advantage"
            stroke="var(--color-advantage)"
            strokeWidth={2}
            dot={{ fill: "var(--color-advantage)" }}
          />
        </LineChart>
      </ChartContainer>

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Ability Dice</TypographyH3>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
        <LineChart accessibilityLayer data={upgradePathAbilityDiceData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="dice"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            domain={[0, 100]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="threat"
            stroke="var(--color-threat)"
            strokeWidth={2}
            dot={{ fill: "var(--color-threat)" }}
          />
          <Line
            type="monotone"
            dataKey="success"
            stroke="var(--color-success)"
            strokeWidth={2}
            dot={{ fill: "var(--color-success)" }}
          />
          <Line
            type="monotone"
            dataKey="crit"
            stroke="var(--color-crit)"
            strokeWidth={2}
            dot={{ fill: "var(--color-crit)" }}
          />
          <Line
            type="monotone"
            dataKey="advantage"
            stroke="var(--color-advantage)"
            strokeWidth={2}
            dot={{ fill: "var(--color-advantage)" }}
          />
          <Line
            type="monotone"
            dataKey="reducedEffect"
            stroke="var(--color-reducedEffect)"
            strokeWidth={2}
            dot={{ fill: "var(--color-reducedEffect)" }}
          />
          <Line
            type="monotone"
            dataKey="standardEffect"
            stroke="var(--color-standardEffect)"
            strokeWidth={2}
            dot={{ fill: "var(--color-standardEffect)" }}
          />
          <Line
            type="monotone"
            dataKey="enhancedEffect"
            stroke="var(--color-enhancedEffect)"
            strokeWidth={2}
            dot={{ fill: "var(--color-enhancedEffect)" }}
          />
        </LineChart>
      </ChartContainer>

      <div className="py-8">
        <TypographyH3>Case Study - Upgrade Skill Dice</TypographyH3>
      </div>

      <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
        <LineChart accessibilityLayer data={upgradePathSkillDiceData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="dice"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            domain={[0, 100]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Line
            type="monotone"
            dataKey="threat"
            stroke="var(--color-threat)"
            strokeWidth={2}
            dot={{ fill: "var(--color-threat)" }}
          />
          <Line
            type="monotone"
            dataKey="success"
            stroke="var(--color-success)"
            strokeWidth={2}
            dot={{ fill: "var(--color-success)" }}
          />
          <Line
            type="monotone"
            dataKey="crit"
            stroke="var(--color-crit)"
            strokeWidth={2}
            dot={{ fill: "var(--color-crit)" }}
          />
          <Line
            type="monotone"
            dataKey="advantage"
            stroke="var(--color-advantage)"
            strokeWidth={2}
            dot={{ fill: "var(--color-advantage)" }}
          />
          <Line
            type="monotone"
            dataKey="reducedEffect"
            stroke="var(--color-reducedEffect)"
            strokeWidth={2}
            dot={{ fill: "var(--color-reducedEffect)" }}
          />
          <Line
            type="monotone"
            dataKey="standardEffect"
            stroke="var(--color-standardEffect)"
            strokeWidth={2}
            dot={{ fill: "var(--color-standardEffect)" }}
          />
          <Line
            type="monotone"
            dataKey="enhancedEffect"
            stroke="var(--color-enhancedEffect)"
            strokeWidth={2}
            dot={{ fill: "var(--color-enhancedEffect)" }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
