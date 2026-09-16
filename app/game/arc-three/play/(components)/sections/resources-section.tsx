import { InlineSymbol } from "@/components/dice/dice-borders";
import { Advantage } from "@/components/dice/dice-symbols";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TypographyH2 } from "@/components/ui/typography";
import { useResource } from "@/contexts/arc3CharacterSheetContext";
import { cn } from "@/lib/utils";
import {
  Boxes,
  Brain,
  ChessPawn,
  Droplet,
  Droplets,
  Handshake,
  Speech,
  Wheat,
} from "lucide-react";
import { ReactNode } from "react";
import ResourceOptions from "../configs/resource-options";

export default function ResourcesSection() {
  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Resources <ResourceOptions />
      </TypographyH2>
      <div className="mt-2 flex items-center gap-2 flex-wrap">
        <ResourceEntry name="advantage">
          <div className="-ml-1">
            <InlineSymbol size={24}>
              <Advantage />
            </InlineSymbol>
          </div>
        </ResourceEntry>
        <ResourceEntry name="blood">
          <div className="text-red-500">
            <Droplets />
          </div>
        </ResourceEntry>
        <ResourceEntry name="water">
          <div className="text-blue-500">
            <Droplet />
          </div>
        </ResourceEntry>
      </div>
      <div className="mt-1 flex items-center gap-2 flex-wrap">
        <ResourceEntry name="food">
          <div className="text-amber-500">
            <Wheat />
          </div>
        </ResourceEntry>
        <ResourceEntry name="materials">
          <div className="text-purple-500">
            <Boxes />
          </div>
        </ResourceEntry>
        <ResourceEntry name="rep">
          <div className="text-lime-500">
            <Speech />
          </div>
        </ResourceEntry>
        <ResourceEntry name="goodwill">
          <div className="text-pink-500">
            <Handshake />
          </div>
        </ResourceEntry>
        <ResourceEntry name="intel">
          <div className="text-teal-500">
            <Brain />
          </div>
        </ResourceEntry>
        <ResourceEntry name="manpower">
          <div className="text-orange-500">
            <ChessPawn />
          </div>
        </ResourceEntry>
      </div>
    </>
  );
}

const MAX_PIPS = 6;
const PIPS_PER_ROW = 3;

// clicking spends current and marks a mission use; right-click undoes both
function MissionPips({
  used,
  limit,
  onSpend,
  onUndo,
}: {
  used: number;
  limit: number;
  onSpend: () => void;
  onUndo: () => void;
}) {
  const visiblePips = Math.min(limit, MAX_PIPS);
  const overflowTotal = Math.max(0, limit - MAX_PIPS);
  const overflowUsed = Math.max(0, used - MAX_PIPS);
  const rows = Math.ceil(visiblePips / PIPS_PER_ROW);

  return (
    <div
      className="flex gap-1 items-center self-stretch border-l px-2 cursor-pointer select-none hover:bg-muted/50"
      onClick={(e) => {
        e.stopPropagation();
        onSpend();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onUndo();
      }}
    >
      <div className="flex flex-col gap-0.5">
        {Array.from({ length: rows }, (_, row) => (
          <div key={row} className="flex items-center gap-0.5">
            {Array.from(
              {
                length: Math.min(
                  PIPS_PER_ROW,
                  visiblePips - row * PIPS_PER_ROW,
                ),
              },
              (_, col) => {
                const pipIndex = row * PIPS_PER_ROW + col;
                return (
                  <div
                    key={col}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      pipIndex < used
                        ? "bg-foreground"
                        : "bg-muted-foreground/30",
                    )}
                  />
                );
              },
            )}
          </div>
        ))}
      </div>
      {overflowTotal > 0 && (
        <span
          className={cn(
            "text-[9px] tabular-nums",
            overflowUsed === 0 ? "text-muted-foreground/60" : "text-foreground",
            overflowUsed >= overflowTotal && "text-amber-500",
          )}
        >
          +{overflowUsed}/{overflowTotal}
        </span>
      )}
    </div>
  );
}

function ResourceEntry({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const [res, set] = useResource(name);
  const hasMissionLimit = res?.missionLimit !== undefined;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          {hasMissionLimit ? (
            <div className="inline-flex items-center rounded-md border text-xs font-semibold overflow-hidden">
              {/* left zone: gain/lose current */}
              <div
                className={cn(
                  "flex items-center gap-1 px-2 py-0.5 cursor-pointer select-none hover:bg-muted/50",
                  res.current === 0 && "opacity-50",
                )}
                onClick={() => set("current", res.current + 1)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  set("current", res.current - 1);
                }}
              >
                {children}
                <span
                  className={cn(
                    "tabular-nums",
                    res.current === 0 && "text-muted-foreground",
                  )}
                >
                  {res.current}
                </span>
              </div>
              {/* right zone: spend (D2) */}
              <MissionPips
                used={res.missionUsed ?? 0}
                limit={res.missionLimit!}
                onSpend={() => {
                  set("missionUsed", (res.missionUsed ?? 0) + 1);
                  set("current", res.current - 1);
                }}
                onUndo={() => {
                  set("missionUsed", (res.missionUsed ?? 0) - 1);
                }}
              />
            </div>
          ) : (
            <div
              className={cn(
                "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-semibold cursor-pointer select-none hover:bg-muted/50",
                res.current === 0 && "opacity-50",
                res.max !== undefined &&
                  res.current > res.max &&
                  "border-red-500",
              )}
              onClick={() => set("current", res.current + 1)}
              onContextMenu={(e) => {
                e.preventDefault();
                set("current", res.current - 1);
              }}
            >
              <span className={cn(res.current === 0 && "opacity-50")}>
                {children}
              </span>
              {res.max !== undefined ? (
                <span
                  className={cn(
                    "tabular-nums",
                    res.current === 0 && "text-muted-foreground",
                    res.current > res.max && "text-red-500",
                  )}
                >
                  {res.current}/{res.max}
                </span>
              ) : (
                <span
                  className={cn(
                    "tabular-nums",
                    res.current === 0 && "text-muted-foreground",
                  )}
                >
                  {res.current}
                </span>
              )}
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <span className="capitalize">{name}</span>
          {hasMissionLimit && (
            <span className="ml-1 text-muted-foreground text-xs">
              ({res.missionUsed ?? 0}/{res.missionLimit} used)
            </span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
