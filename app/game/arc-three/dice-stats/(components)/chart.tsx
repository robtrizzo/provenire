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

export interface DiceDataEntry {
  dice: string;
  threat: number;
  success: number;
  crit: number;
  advantage: number;
  reducedEffect: number;
  standardEffect: number;
  enhancedEffect: number;
}

export type DiceMetric = keyof Omit<DiceDataEntry, "dice">;

const defaultChartConfig = {
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

interface DiceStatsChartProps {
  data: DiceDataEntry[];
  metrics?: DiceMetric[];
  chartConfig?: ChartConfig;
  className?: string;
  yAxisDomain?: [number, number];
}

const defaultMetrics: DiceMetric[] = ["threat", "success", "crit", "advantage"];

export function DiceStatsChart({
  data,
  metrics = defaultMetrics,
  chartConfig = defaultChartConfig,
  className = "min-h-[400px] w-full",
  yAxisDomain,
}: DiceStatsChartProps) {
  return (
    <ChartContainer config={chartConfig} className={className}>
      <LineChart accessibilityLayer data={data}>
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
          domain={yAxisDomain}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        {metrics.map((metric) => (
          <Line
            key={metric}
            type="monotone"
            dataKey={metric}
            stroke={`var(--color-${metric})`}
            strokeWidth={2}
            dot={{ fill: `var(--color-${metric})` }}
          />
        ))}
      </LineChart>
    </ChartContainer>
  );
}

export { defaultChartConfig };
