import { SankeyInput, SankeyLocation } from "@/lib/sankey";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DatasetEntry {
  label: string;
  data: SankeyInput;
}

interface LocationsDisplayProps {
  locationDefs: SankeyLocation[];
  datasets: DatasetEntry[];
}

export default function LocationsDisplay({
  locationDefs,
  datasets,
}: LocationsDisplayProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
      {locationDefs.map((loc) => {
        const totalWeight = loc.targets.reduce((sum, t) => sum + t.weight, 0);

        const nodesHere = datasets.flatMap(({ label, data }) =>
          data
            .filter((node) => node.location?.includes(loc.name))
            .map((node) => ({ ...node, resourceType: label })),
        );

        const groupedNodes = Object.values(
          nodesHere.reduce<
            Record<
              string,
              {
                name: string;
                roles?: string[];
                produces?: number | string;
                max?: number;
                resourceTypes: string[];
              }
            >
          >((acc, n) => {
            if (acc[n.name]) {
              acc[n.name].resourceTypes.push(n.resourceType);
            } else {
              acc[n.name] = {
                name: n.name,
                roles: n.roles,
                produces: n.produces,
                max: n.max,
                resourceTypes: [n.resourceType],
              };
            }
            return acc;
          }, {}),
        );

        return (
          <Card key={loc.name} className="gap-4">
            <CardHeader className="pb-0">
              <CardTitle className="text-base">{loc.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Attrition pressure bar */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
                  Attrition Pressure
                </p>
                <div className="flex rounded overflow-hidden h-2.5">
                  {loc.targets.map((t) => (
                    <div
                      key={t.name}
                      style={{
                        width: `${(t.weight / totalWeight) * 100}%`,
                        backgroundColor: t.color,
                      }}
                      title={`${t.name}: ${t.weight}`}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  {loc.targets.map((t) => (
                    <span
                      key={t.name}
                      className="flex items-center gap-1 text-xs"
                    >
                      <span
                        className="inline-block w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: t.color }}
                      />
                      {t.name}: <strong>{t.weight}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Nodes stationed here */}
              {groupedNodes.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
                    Stationed Here
                  </p>
                  <div className="space-y-2">
                    {groupedNodes.map((n) => (
                      <div key={n.name} className="text-xs space-y-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium">{n.name}</span>
                          <div className="flex gap-1 shrink-0 flex-wrap justify-end">
                            {n.resourceTypes.map((rt) => (
                              <Badge
                                key={rt}
                                variant="outline"
                                className="text-[10px] h-4 py-0"
                              >
                                {rt}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {(n.roles ?? []).length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {n.roles!.map((r) => (
                              <Badge
                                key={r}
                                variant="secondary"
                                className="text-[10px] h-4 py-0"
                              >
                                {r}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {(n.produces !== undefined || n.max !== undefined) && (
                          <p className="text-muted-foreground">
                            {n.produces !== undefined && (
                              <>Produces: {n.produces}</>
                            )}
                            {n.produces !== undefined &&
                              n.max !== undefined &&
                              " · "}
                            {n.max !== undefined && <>Max: {n.max}</>}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
