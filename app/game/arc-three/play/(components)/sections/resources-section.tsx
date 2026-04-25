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
          <div className="ml-[-4px]">
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

function ResourceEntry({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const [res, set] = useResource(name);
  const dec = () => set("current", res.current - 1);
  const inc = () => set("current", res.current + 1);

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
