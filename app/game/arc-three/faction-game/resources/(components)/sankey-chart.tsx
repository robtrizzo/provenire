"use client";
import { SankeyInput, toSankeyData } from "@/lib/sankey";
import { useMemo, useState } from "react";
import { ResponsiveContainer, Sankey, Tooltip } from "recharts";
import { DIM_COLOR, Role, RoleFilter } from "./role-filter";
import { SankeyLink } from "./sankey-link";
import { SankeyNode } from "./sankey-node";
import { SankeyTooltip } from "./sankey-tooltip";

interface SankeyChartProps {
  data: SankeyInput;
}

export default function SankeyChart({ data }: SankeyChartProps) {
  const [selectedRoles, setSelectedRoles] = useState<Set<Role>>(new Set());

  const toggleRole = (role: Role) => {
    setSelectedRoles((prev) => {
      const next = new Set(prev);
      if (next.has(role)) next.delete(role);
      else next.add(role);
      return next;
    });
  };

  const sankeyData = useMemo(() => {
    if (selectedRoles.size === 0) return toSankeyData(data);
    return toSankeyData(
      data.map((node) => ({
        ...node,
        targets: node.targets.map((t) => ({
          ...t,
          color: node.roles?.some((r) => selectedRoles.has(r as Role))
            ? t.color
            : DIM_COLOR,
        })),
      })),
    );
  }, [selectedRoles, data]);

  const nodeKey = sankeyData.nodes.map((n) => n.name).join(",");

  return (
    <div>
      <RoleFilter
        selectedRoles={selectedRoles}
        onToggle={toggleRole}
        onClear={() => setSelectedRoles(new Set())}
      />
      <ResponsiveContainer width="100%" aspect={2}>
        <Sankey
          key={nodeKey}
          data={sankeyData}
          node={SankeyNode}
          nodePadding={50}
          margin={{ bottom: 30 }}
          link={SankeyLink}
        >
          <Tooltip content={<SankeyTooltip />} />{" "}
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
}
