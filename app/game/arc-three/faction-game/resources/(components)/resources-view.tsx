"use client";
import { Fragment, useState } from "react";
import { SankeyInput, SankeyLocation } from "@/lib/sankey";
import EditableSankeyChart from "./editable-sankey-chart";
import { TypographyH2 } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Plus } from "lucide-react";

interface ResourcesViewProps {
  datasets: { label: string; data: SankeyInput; exemptions?: string[] }[];
  locationDefs: SankeyLocation[];
}

function collectLocations(datasets: SankeyInput[]): string[] {
  const set = new Set<string>();
  for (const data of datasets)
    for (const node of data)
      for (const loc of node.location ?? []) set.add(loc);
  return Array.from(set);
}

export default function ResourcesView({
  datasets,
  locationDefs,
}: ResourcesViewProps) {
  const allData = datasets.map((d) => d.data);

  const [locationNames, setLocationNames] = useState<string[]>(() => {
    const fromDefs = locationDefs.map((l) => l.name);
    const fromNodes = collectLocations(allData);
    return Array.from(new Set([...fromDefs, ...fromNodes]));
  });
  const [locations, setLocations] = useState<string[]>(() =>
    collectLocations(allData),
  );
  const [newLocation, setNewLocation] = useState("");

  const activeLocationDefs = locationDefs.filter((l) =>
    locationNames.includes(l.name),
  );

  const addLocation = () => {
    const trimmed = newLocation.trim();
    if (trimmed && !locations.includes(trimmed)) {
      setLocations([...locations, trimmed]);
      setNewLocation("");
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center mt-4 p-3 rounded-md border bg-muted/30">
        <span className="text-sm text-muted-foreground font-medium">
          Locations:
        </span>
        {locations.map((loc) => (
          <Badge key={loc} variant="secondary" className="gap-1">
            {loc}
            <button
              type="button"
              onClick={() => setLocations(locations.filter((l) => l !== loc))}
              className="rounded-full hover:bg-destructive/20"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <div className="flex gap-1 items-center">
          <Input
            className="h-7 w-36 text-xs"
            placeholder="New location…"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addLocation();
            }}
          />
          <Button
            size="sm"
            variant="ghost"
            className="h-7 px-2"
            onClick={addLocation}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {datasets.map(({ label, data, exemptions }) => (
        <Fragment key={label}>
          <TypographyH2>{label}</TypographyH2>
          <div className="mt-8">
            <EditableSankeyChart
              initialData={data}
              locationNames={locationNames}
              locationDefs={activeLocationDefs}
              exemptions={exemptions}
            />
          </div>
        </Fragment>
      ))}
    </>
  );
}
