'use client';
import { useState } from 'react';
import { Pie, PieChart, LabelList } from 'recharts';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import { useTheme } from 'next-themes';

export default function Clock({
  max,
  current = 0,
  size = 100,
  setVal = () => {},
}: {
  max: number;
  current?: number;
  size?: number;
  setVal?: (n: number) => void;
}) {
  const { theme } = useTheme();
  const [time, setTime] = useState<number>(current);
  if (max === 0) return null;
  if (current > max) current = max;
  const chartData = [
    { status: 'filled', val: time, fill: 'var(--color-filled)' },
    { browser: 'empty', val: max - time, fill: 'var(--color-empty)' },
  ];
  const chartConfig = {
    filled: {
      color: '#991b1b',
    },
    empty: {
      color: theme === 'dark' ? '#000000' : '#ffffff',
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer
      onClick={() => {
        if (time >= max) return;
        setTime(time + 1);
        setVal(time + 1);
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        if (time <= 0) return;
        setTime(time - 1);
        setVal(time - 1);
      }}
      config={chartConfig}
      className="aspect-square mx-auto grow flex-shrink-0"
      style={{
        maxHeight: `${size}px`,
        maxWidth: `${size}px`,
        flexBasis: `${size}px`,
      }} // Inline style for dynamic height
    >
      <PieChart width={size} height={size}>
        <Pie
          data={chartData}
          dataKey="val"
          startAngle={90}
          endAngle={-360}
          animationDuration={300}
          animationEasing="ease-in-out"
          isAnimationActive={false}
          stroke="#94A3B8"
          strokeWidth={1}
        >
          <LabelList
            dataKey="val"
            position="outside"
            content={({ viewBox }) => {
              // @ts-ignore
              const { cx, cy, outerRadius } = viewBox;
              const spokes = [];
              for (let i = 0; i < max; i++) {
                const angle = (360 / max) * i - 90;
                const x = cx + outerRadius * Math.cos((angle * Math.PI) / 180);
                const y = cy + outerRadius * Math.sin((angle * Math.PI) / 180);
                spokes.push(
                  <line
                    key={i}
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="black"
                    strokeWidth={1}
                  />
                );
              }
              return <g>{spokes}</g>;
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
