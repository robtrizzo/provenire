"use client";
import { PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  rating: {
    label: "Rating",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function SleeveChart({
  dur,
  bea,
  mod,
  sen,
  int,
  com,
}: {
  dur: number;
  bea: number;
  mod: number;
  sen: number;
  int: number;
  com: number;
}) {
  const chartData = [
    { name: "Durability", rating: dur },
    { name: "Beast", rating: bea },
    { name: "Moddability", rating: mod },
    { name: "Sensory", rating: sen },
    { name: "Intellect", rating: int },
    { name: "Comfort", rating: com },
  ];
  return (
    <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
      <RadarChart data={chartData}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis dataKey="name" domain={[0, 5]} />
        <PolarAngleAxis dataKey="name" />
        <Radar
          dataKey="rating"
          fill="var(--color-rating)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
}

export function DonumSleeveChart({
  dur,
  bea,
  mod,
  sen,
  int,
  com,
  don,
}: {
  dur: number;
  bea: number;
  mod: number;
  sen: number;
  int: number;
  com: number;
  don: number;
}) {
  const chartData = [
    { name: "Durability", rating: dur },
    { name: "Beast", rating: bea },
    { name: "Moddability", rating: mod },
    { name: "Sensory", rating: sen },
    { name: "Intellect", rating: int },
    { name: "Comfort", rating: com },
    { name: "Donum", rating: don },
  ];
  return (
    <ChartContainer config={chartConfig} className="mx-auto max-h-[250px]">
      <RadarChart data={chartData}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <PolarRadiusAxis dataKey="name" domain={[0, 5]} />
        <PolarAngleAxis dataKey="name" />
        <Radar
          dataKey="rating"
          fill="var(--color-rating)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
}
