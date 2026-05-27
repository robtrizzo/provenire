"use client";

import { TypographyH2 } from "@/components/ui/typography";
import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  SunburstChart,
  SunburstData,
  Tooltip,
} from "recharts";

const ROLES = [
  "Auger",
  "Cipher",
  "Lock",
  "Pact",
  "Scaffold",
  "Seeker",
  "Shade",
  "Vault",
  "Wright",
] as const;
type Role = (typeof ROLES)[number];

const hierarchy: SunburstData = {
  name: "Resource Production",
  value: 160,
  children: [
    {
      name: "Blood",
      fill: "var(--color-red-500)",
      value: 20,
      children: [
        {
          name: "Tithing",
          value: 13,
          children: [
            { name: "Volunteers (Vault)", value: 10 },
            { name: "Prisoners (Lock)", value: 3 },
          ],
        },
        { name: "Raiding (Auger) [Blood]", label: "Raiding (Auger)", value: 5 },
        { name: "Theft (Shade) [Blood]", label: "Theft (Shade)", value: 2 },
      ],
    },
    {
      name: "Water",
      fill: "var(--color-blue-500)",
      value: 20,
      children: [
        {
          name: "The Rain Chamber",
          value: 20,
          children: [
            { name: "Pipeline (Scaffold)", value: 10 },
            { name: "Redirected Steam (Cipher)", value: 10 },
          ],
        },
      ],
    },
    {
      name: "Food",
      fill: "var(--color-amber-500)",
      value: 20,
      children: [
        { name: "Delivered Shipment (Wright, Cipher)", value: 12 },
        { name: "Theft (Shade) [Food]", label: "Theft (Shade)", value: 3 },
        { name: "Farming (Vault)", value: 2 },
        {
          name: "Murder",
          value: 3,
          children: [
            {
              name: "Raiding (Auger) [Food]",
              label: "Raiding (Auger)",
              value: 2,
            },
            { name: "Slain Attackers (Lock)", value: 1 },
          ],
        },
      ],
    },
    {
      name: "Materials",
      fill: "var(--color-indigo-500)",
      value: 20,
      children: [
        {
          name: "Scrapping",
          value: 5,
          children: [
            { name: "The Scrapyard (Wright)", value: 3 },
            { name: "Shanty Houses (Scaffold)", value: 2 },
          ],
        },
        {
          name: "Manufacturing",
          value: 13,
          children: [
            { name: "Workshops (Wright)", value: 6 },
            { name: "The Machines (Cipher)", value: 9 },
          ],
        },
        {
          name: "Theft (Shade) [Materials]",
          label: "Theft (Shade)",
          value: 2,
        },
      ],
    },
    {
      name: "Rep",
      fill: "var(--color-lime-500)",
      value: 20,
      children: [
        { name: "Public credit for crew's acts (Pact)", value: 8 },
        {
          name: "Victorious Battles",
          value: 7,
          children: [
            {
              name: "Raiding (Auger) [Rep]",
              label: "Raiding (Auger)",
              value: 6,
            },
            {
              name: "Thwarted Attacks (Lock) [Rep]",
              label: "Thwarted Attacks (Lock)",
              value: 1,
            },
          ],
        },
        { name: "Popular Judgements (Lock)", value: 5 },
      ],
    },
    {
      name: "Goodwill",
      fill: "var(--color-pink-500)",
      value: 20,
      children: [
        { name: "Public credit for charitable acts (Pact)", value: 10 },
        { name: "Housing (Scaffold)", value: 6 },
        { name: "Fair Judgements (Lock)", value: 4 },
      ],
    },
    {
      name: "Intel",
      fill: "var(--color-sky-500)",
      value: 20,
      children: [
        {
          name: "Spying",
          value: 12,
          children: [
            { name: "Spy Network (Shade)", value: 9 },
            { name: "Spying (Seeker)", value: 3 },
          ],
        },
        { name: "Loyal Enforcers (Pact)", value: 3 },
        { name: "Community Spaces (Scaffold)", value: 5 },
      ],
    },
    {
      name: "Manpower",
      fill: "var(--color-orange-500)",
      value: 20,
      children: [
        {
          name: "Population in loyal factions",
          value: 15,
          children: [
            { name: "Inspired by the Crew (Pact)", value: 6 },
            { name: "Well Fed (Vault)", value: 9 },
          ],
        },
        {
          name: "Inspiring Victories",
          value: 5,
          children: [
            {
              name: "Raiding (Auger) [Manpower]",
              label: "Raiding (Auger)",
              value: 4,
            },
            {
              name: "Thwarted Attacks (Lock) [Manpower]",
              label: "Thwarted Attacks (Lock)",
              value: 1,
            },
          ],
        },
      ],
    },
  ],
};

const DIM_COLOR = "#374151";

function nodeMatchesRoles(name: string, selected: Set<string>): boolean {
  const match = name.match(/\(([^)]+)\)/);
  if (!match) return false;
  return match[1].split(",").some((r) => selected.has(r.trim()));
}

function applyRoleHighlight(
  node: SunburstData,
  selected: Set<string>,
  inheritedFill?: string,
): SunburstData & { _hasMatch: boolean } {
  const resolvedFill = (node.fill as string | undefined) ?? inheritedFill;
  const selfMatch = nodeMatchesRoles(node.name, selected);

  const children = node.children?.map((child) =>
    applyRoleHighlight(child, selected, resolvedFill),
  );

  const hasMatch = selfMatch || (children?.some((c) => c._hasMatch) ?? false);

  return {
    ...node,
    fill: hasMatch ? resolvedFill : DIM_COLOR,
    children,
    _hasMatch: hasMatch,
  };
}

export default function ResourceSunburstChart() {
  const [selectedRoles, setSelectedRoles] = useState<Set<Role>>(new Set());

  const toggleRole = (role: Role) => {
    setSelectedRoles((prev) => {
      const next = new Set(prev);
      if (next.has(role)) next.delete(role);
      else next.add(role);
      return next;
    });
  };

  const data = useMemo<SunburstData>(() => {
    if (selectedRoles.size === 0) return hierarchy;
    return applyRoleHighlight(hierarchy, selectedRoles) as SunburstData;
  }, [selectedRoles]);

  return (
    <div>
      <TypographyH2>Resources Produced</TypographyH2>
      <div className="flex justify-center flex-wrap gap-2 p-4">
        {ROLES.map((role) => (
          <button
            key={role}
            onClick={() => toggleRole(role)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedRoles.has(role)
                ? "bg-primary text-primary-foreground ring-2 ring-primary/50"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {role}
          </button>
        ))}
        <button
          onClick={() => setSelectedRoles(new Set())}
          className={`px-3 py-1 rounded-full text-sm font-medium bg-destructive/30 text-destructive hover:bg-destructive/60 transition-colors ${
            selectedRoles.size === 0 ? "invisible" : ""
          }`}
        >
          Clear
        </button>
      </div>
      <ResponsiveContainer width="100%" height={900}>
        <SunburstChart startAngle={90} endAngle={330} data={data}>
          <Tooltip content={<CustomTooltip />} />
        </SunburstChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const node = payload[0]?.payload;
  return (
    <div className="rounded-md border bg-background px-3 py-2 shadow-md text-sm">
      <p className="font-semibold">{node?.label ?? node?.name}</p>
      <p className="text-muted-foreground">Value: {node?.value}</p>
    </div>
  );
}
