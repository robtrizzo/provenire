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
import { ReactNode, useState } from "react";
import ResourceOptions from "../configs/resource-options";

export default function ResourcesSection() {
  const [isCompact, setIsCompact] = useState(true);

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Resources{" "}
        <ResourceOptions
          isCompact={isCompact}
          onToggleView={() => setIsCompact(!isCompact)}
        />
      </TypographyH2>
      {isCompact ? (
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <ResourceEntry name="advantage" isCompact={isCompact}>
            <div className="ml-[-4px]">
              <InlineSymbol size={24}>
                <Advantage />
              </InlineSymbol>
            </div>
          </ResourceEntry>
          <ResourceEntry name="blood" isCompact={isCompact}>
            <div className="text-red-500">
              <Droplets />
            </div>
          </ResourceEntry>
          <ResourceEntry name="water" isCompact={isCompact}>
            <div className="text-blue-500">
              <Droplet />
            </div>
          </ResourceEntry>
          <ResourceEntry name="food" isCompact={isCompact}>
            <div className="text-amber-500">
              <Wheat />
            </div>
          </ResourceEntry>
          <ResourceEntry name="materials" isCompact={isCompact}>
            <div className="text-purple-500">
              <Boxes />
            </div>
          </ResourceEntry>
          <ResourceEntry name="rep" isCompact={isCompact}>
            <div className="text-lime-500">
              <Speech />
            </div>
          </ResourceEntry>
          <ResourceEntry name="goodwill" isCompact={isCompact}>
            <div className="text-pink-500">
              <Handshake />
            </div>
          </ResourceEntry>
          <ResourceEntry name="intel" isCompact={isCompact}>
            <div className="text-teal-500">
              <Brain />
            </div>
          </ResourceEntry>
          <ResourceEntry name="manpower" isCompact={isCompact}>
            <div className="text-orange-500">
              <ChessPawn />
            </div>
          </ResourceEntry>
        </div>
      ) : (
        <>
          <div className="mt-2 flex items-center gap-4 flex-wrap">
            <ResourceEntry name="advantage" isCompact={isCompact}>
              <div className="ml-[-4px]">
                <InlineSymbol size={36}>
                  <Advantage />
                </InlineSymbol>
              </div>
            </ResourceEntry>
            <ResourceEntry name="blood" isCompact={isCompact}>
              <div className="text-red-500">
                <Droplets />
              </div>
            </ResourceEntry>
            <ResourceEntry name="water" isCompact={isCompact}>
              <div className="text-blue-500">
                <Droplet />
              </div>
            </ResourceEntry>
          </div>
          <div className="mt-2 flex items-center gap-4 flex-wrap">
            <ResourceEntry name="food" isCompact={isCompact}>
              <div className="text-amber-500">
                <Wheat />
              </div>
            </ResourceEntry>
            <ResourceEntry name="materials" isCompact={isCompact}>
              <div className="text-purple-500">
                <Boxes />
              </div>
            </ResourceEntry>
          </div>
          <div className="mt-2 flex items-center gap-4 flex-wrap">
            <ResourceEntry name="rep" isCompact={isCompact}>
              <div className="text-lime-500">
                <Speech />
              </div>
            </ResourceEntry>
            <ResourceEntry name="goodwill" isCompact={isCompact}>
              <div className="text-pink-500">
                <Handshake />
              </div>
            </ResourceEntry>
            <ResourceEntry name="intel" isCompact={isCompact}>
              <div className="text-teal-500">
                <Brain />
              </div>
            </ResourceEntry>
            <ResourceEntry name="manpower" isCompact={isCompact}>
              <div className="text-orange-500">
                <ChessPawn />
              </div>
            </ResourceEntry>
          </div>
        </>
      )}
    </>
  );
}

function ResourceEntry({
  name,
  children,
  isCompact,
  compactEntry,
}: {
  name: string;
  children: ReactNode;
  isCompact: boolean;
  compactEntry?: ReactNode;
}) {
  const [res, set] = useResource(name);
  const dec = () => set("current", res.current - 1);
  const inc = () => set("current", res.current + 1);

  if (isCompact) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-semibold cursor-pointer select-none hover:bg-muted/50",
                res.current === 0 && "opacity-50",
                res.current > res.max && "border-red-500",
              )}
              onClick={inc}
              onContextMenu={(e) => {
                e.preventDefault();
                dec();
              }}
            >
              <span className={cn(res.current === 0 && "opacity-50")}>
                {children}
              </span>
              <span
                className={cn(
                  "tabular-nums",
                  res.current === 0 && "text-muted-foreground",
                  res.current > res.max && "text-red-500",
                )}
              >
                {res.current}/{res.max}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <span className="capitalize">{name}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="w-24 h-12 flex items-center justify-center border-border border-1 p-1 rounded-md hover:bg-muted/30"
            onClick={inc}
            onContextMenu={(e) => {
              e.preventDefault();
              dec();
            }}
          >
            <div className="w-full grid grid-cols-2 gap-1">
              <div
                className={cn(
                  "col-span-1 flex items-center justify-center",
                  res.current === 0 && "opacity-50",
                )}
              >
                {children}
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <span
                  className={cn(
                    "text-sm tabular-nums select-none",
                    res.current === 0 && "text-muted-foreground",
                    res.current > res.max && "text-red-500",
                  )}
                >
                  {res.current} / {res.max}
                </span>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span className="capitalize">{name}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
