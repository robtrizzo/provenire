"use client";
import { Layer, Rectangle, SankeyNodeProps, useChartWidth } from "recharts";

export function SankeyNode({
  x,
  y,
  width,
  height,
  index,
  payload,
}: SankeyNodeProps) {
  const containerWidth = useChartWidth();
  if (containerWidth == null) {
    return null; // Return null if used outside a chart context
  }
  const isOut = x + width + 6 > containerWidth;
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill="var(--color-foreground)"
        fillOpacity="1"
      />
      <text
        textAnchor={isOut ? "end" : "start"}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        fontWeight="bold"
        stroke="white"
        strokeWidth={1.3}
        paintOrder="stroke fill"
      >
        {payload.name}
      </text>
      <text
        textAnchor={isOut ? "end" : "start"}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        fontWeight="bold"
        stroke="white"
        strokeWidth={1.3}
        paintOrder="stroke fill"
      >
        {`${payload.value}`}
      </text>
    </Layer>
  );
}
