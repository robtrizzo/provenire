"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import data from "@/public/arc3/dramatis_personae.json";
import NamePortrait from "@/app/game/arc-one/play/(components)/name-portrait";

type Entry = {
  name: string;
  portrait?: boolean;
  fileName?: string;
  neighborhood?: string;
  faction?: string;
  job?: string;
  type: "pc" | "npc";
  dead?: boolean;
};

const ALL = "all";
const entries = data as Entry[];

function unique(arr: (string | undefined)[]): string[] {
  return Array.from(new Set(arr.filter(Boolean))).sort() as string[];
}

export default function DramatisPersonae() {
  const neighborhoods = useMemo(
    () => unique(entries.map((e) => e.neighborhood)),
    [],
  );
  const factions = useMemo(() => unique(entries.map((e) => e.faction)), []);
  const jobs = useMemo(() => unique(entries.map((e) => e.job)), []);

  const [neighborhoodFilter, setNeighborhoodFilter] = useState(ALL);
  const [factionFilter, setFactionFilter] = useState(ALL);
  const [jobFilter, setJobFilter] = useState(ALL);
  const [showDead, setShowDead] = useState(true);

  const filtered = useMemo(
    () =>
      entries.filter(
        (e) =>
          (neighborhoodFilter === ALL ||
            e.neighborhood === neighborhoodFilter) &&
          (factionFilter === ALL || e.faction === factionFilter) &&
          (jobFilter === ALL || e.job === jobFilter) &&
          (showDead || !e.dead),
      ),
    [neighborhoodFilter, factionFilter, jobFilter, showDead],
  );

  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-4 mb-6">
        <FilterSelect
          label="Neighborhood"
          value={neighborhoodFilter}
          options={neighborhoods}
          onChange={setNeighborhoodFilter}
        />
        <FilterSelect
          label="Faction"
          value={factionFilter}
          options={factions}
          onChange={setFactionFilter}
        />
        <FilterSelect
          label="Job"
          value={jobFilter}
          options={jobs}
          onChange={setJobFilter}
        />
        <div className="flex flex-col gap-1 min-w-40 justify-end">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={showDead}
              onChange={(e) => setShowDead(e.target.checked)}
              className="h-4 w-4"
            />
            Show deceased
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((entry, i) => (
          <CharacterCard key={`${entry.name}-${i}`} entry={entry} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-sm text-muted-foreground">
            No characters match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1 min-w-40">
      <label className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={`All ${label}s`} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={ALL}>All {label}s</SelectItem>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function CharacterCard({ entry }: { entry: Entry }) {
  const s3 = entry.portrait === undefined || entry.portrait;
  return (
    <div className="flex flex-col items-center gap-2 rounded-md">
      <div className="relative h-56 w-56 group">
        <NamePortrait
          name={entry.name}
          file={entry.fileName || undefined}
          s3={s3}
          pc={entry.type === "pc"}
          dead={entry.dead}
        />
        <div className="absolute bottom-1 w-56 group-hover:opacity-0 transition-all duration-300">
          <div className="flex flex-wrap justify-center gap-1 px-1">
            {entry.neighborhood && (
              <Badge variant="default" className="text-xs">
                {entry.neighborhood}
              </Badge>
            )}
            {entry.faction && (
              <Badge variant="secondary" className="text-xs">
                {entry.faction}
              </Badge>
            )}
            {entry.job && (
              <Badge className="text-xs" variant="destructive">
                {entry.job}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
