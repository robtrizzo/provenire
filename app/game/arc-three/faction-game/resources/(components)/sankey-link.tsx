"use client";
import { SankeyLinkProps } from "recharts";

export type CustomLinkProps = Omit<SankeyLinkProps, "payload"> & {
  payload: SankeyLinkProps["payload"] & { color?: string };
};

export function SankeyLink({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourceControlX,
  targetControlX,
  linkWidth,
  payload,
}: CustomLinkProps) {
  return (
    <path
      d={`M${sourceX},${sourceY} C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}`}
      fill="none"
      stroke={payload.color ?? "var(--color-indigo-500)"}
      strokeWidth={linkWidth}
      strokeOpacity={0.6}
    />
  );
}
