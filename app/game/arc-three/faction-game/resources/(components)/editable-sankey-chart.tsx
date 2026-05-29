"use client";
import { useMemo, useState } from "react";
import {
  SankeyInput,
  DynamicNode,
  toDynamicNodes,
  computeDynamicSankey,
} from "@/lib/sankey";
import SankeyChart from "./sankey-chart";
import { NodeEditor } from "./node-editor";

interface EditableSankeyChartProps {
  initialData: SankeyInput;
}

export default function EditableSankeyChart({
  initialData,
}: EditableSankeyChartProps) {
  const [nodes, setNodes] = useState<DynamicNode[]>(() =>
    toDynamicNodes(initialData),
  );
  const [editing, setEditing] = useState(false);

  const derived = useMemo(() => computeDynamicSankey(nodes), [nodes]);

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setEditing((v) => !v)}
          className="px-3 py-1 text-xs rounded bg-muted hover:bg-muted/70"
        >
          {editing ? "Hide Editor" : "Edit"}
        </button>
      </div>
      <div className="sticky top-0 z-10 bg-background">
        <SankeyChart data={derived} />
      </div>
      {editing && <NodeEditor nodes={nodes} onChange={setNodes} />}
    </div>
  );
}
