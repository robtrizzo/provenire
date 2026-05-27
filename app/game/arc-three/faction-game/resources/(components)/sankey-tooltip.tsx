export function SankeyTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const node = payload[0]?.payload;
  const role = node.role;
  return (
    <div className="rounded-md border bg-background px-3 py-2 shadow-md text-sm">
      <p className="font-semibold">{node?.name}</p>
      {role && <p className="text-muted-foreground italic">{role}</p>}
      <p className="text-muted-foreground">Value: {node?.value}</p>
    </div>
  );
}
