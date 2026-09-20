import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import { Droplet, Droplets, UserStar } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Minimal shape we read from the saved character JSON in Redis
type PcData = {
  id: string;
  name: string;
  portrait?: string;
  stress?: number;
  maxStress?: number;
  currentConditions?: { name: string }[];
  harms?: Record<number, { slots: string[]; maxSlots: number }>;
  resources?: Record<
    string,
    {
      current: number;
      max?: number;
      missionUsed?: number;
      missionLimit?: number;
    }
  >;
  actions?: { name: string; type: string; level: number[] }[];
};

function buildPcPortrait(char: PcData): string | undefined {
  if (char.portrait) return char.portrait;
  const base = process.env.NEXT_PUBLIC_S3_BUCKET;
  if (!base) return undefined;
  return `${base}/pc-art/${char.name}`;
}

export default function PcSummaryCard({ char }: { char: PcData }) {
  const portraitSrc = buildPcPortrait(char);
  const stress = char.stress ?? 0;
  const maxStress = char.maxStress ?? 9;
  const conditions = char.currentConditions ?? [];
  const resources = char.resources ?? {};
  const bonds = (char.actions ?? []).filter((a) => a.type === "bond");
  const anyBondFilled = bonds.some((b) => b.level.some((l) => l > 0));

  return (
    <div className="rounded-lg border bg-card p-3 flex flex-col gap-2 text-sm">
      {/* Header */}
      <div className="flex items-center gap-2">
        {portraitSrc && (
          <div className="relative h-12 w-12 rounded-md overflow-hidden shrink-0 border border-border">
            <Image
              src={portraitSrc}
              alt={char.name}
              fill
              className="object-cover"
              sizes="48px"
              onError={() => {}} // silently hide broken images
            />
          </div>
        )}
        <span className="font-semibold leading-tight flex-1">
          {char.name || "Unnamed"}
        </span>
        {anyBondFilled && (
          <Popover>
            <PopoverTrigger asChild>
              <button className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                <UserStar className="h-3.5 w-3.5" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-3" align="end">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Bonds
              </p>
              <div className="flex flex-col gap-1.5">
                {bonds.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-xs flex-1 truncate">{b.name}</span>
                    <code className="text-xs shrink-0 truncate">{b.level}</code>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>

      {/* Stress */}
      <div className="flex items-center gap-1 flex-wrap">
        <span className="text-muted-foreground text-xs w-12">Stress</span>
        <div className="flex gap-0.5 flex-wrap">
          {Array.from({ length: maxStress }).map((_, i) => {
            const disabled = i >= maxStress - conditions.length;
            const filled = !disabled && i < stress;
            return (
              <div
                key={i}
                className={`h-3 w-3 rounded-sm border ${
                  disabled
                    ? "bg-muted border-muted-foreground/20"
                    : filled
                      ? "bg-red-500 border-red-500"
                      : "border-muted-foreground"
                }`}
              />
            );
          })}
        </div>
        <span className="text-xs text-muted-foreground ml-1">
          {stress}/{maxStress - conditions.length}
        </span>
      </div>

      {/* Conditions */}
      {conditions.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {conditions.map((c) => (
            <Badge key={c.name} variant="secondary" className="text-xs">
              {c.name}
            </Badge>
          ))}
        </div>
      )}

      {/* Harms */}
      {char.harms && Object.keys(char.harms).length > 0 && (
        <div className="flex flex-col gap-1">
          {Object.entries(char.harms)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([level, { slots }]) => (
              <div key={level} className="flex gap-1 items-center">
                <span className="text-xs text-muted-foreground w-3 shrink-0">
                  {level}
                </span>
                {slots.map((slot, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-5 border rounded px-1.5 text-xs min-w-0 truncate flex items-center ${
                      slot.trim()
                        ? "border-destructive/40 text-destructive"
                        : "border-muted-foreground/25"
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}

      {/* Resources: Advantage, Blood, Water */}
      <div className="flex gap-3 pt-1.5 border-t border-border">
        <div className="flex gap-1">
          {Array.from({ length: resources.advantage?.current ?? 0 }).map(
            (_, i) => (
              <InlineSymbol key={"adv" + i} size={20}>
                <Advantage />
              </InlineSymbol>
            ),
          )}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: resources.blood?.missionUsed ?? 0 }).map(
            (_, i) => (
              <Droplets className="text-red-500" key={"blood" + i} size={16} />
            ),
          )}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: resources.water?.missionUsed ?? 0 }).map(
            (_, i) => (
              <Droplet className="text-blue-500" key={"water" + i} size={16} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
