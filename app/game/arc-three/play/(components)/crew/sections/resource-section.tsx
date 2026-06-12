import { Separator } from "@/components/ui/separator";
import { useCrewResource } from "@/contexts/arc3CrewSheetContext";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ResourceSection() {
  return (
    <div>
      <span className="text-xs text-muted-foreground uppercase tracking-wide">
        Resources
      </span>
      <Separator />
      <div className="mt-1 flex flex-wrap gap-2">
        <ResourcePill name="blood">
          <Droplets className="text-red-500" />
        </ResourcePill>
        <ResourcePill name="water">
          <Droplet className="text-blue-500" />
        </ResourcePill>
        <ResourcePill name="food">
          <Wheat className="text-amber-500" />
        </ResourcePill>
        <ResourcePill name="materials">
          <Boxes className="text-purple-500" />
        </ResourcePill>
        <ResourcePill name="rep">
          <Speech className="text-lime-500" />
        </ResourcePill>
        <ResourcePill name="goodwill">
          <Handshake className="text-pink-500" />
        </ResourcePill>
        <ResourcePill name="intel">
          <Brain className="text-teal-500" />
        </ResourcePill>
        <ResourcePill name="manpower">
          <ChessPawn className="text-orange-500" />
        </ResourcePill>
      </div>
    </div>
  );
}

function ResourcePill({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const [res, set] = useCrewResource(name);
  if (!res) return null;
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-semibold cursor-pointer select-none hover:bg-muted/50 transition-colors",
              res.current === 0 && "opacity-50",
              res.current === res.max && "border-amber-500",
              res.current > res.max && "border-red-500",
            )}
            onClick={() => set("current", res.current + 1)}
            onContextMenu={(e) => {
              e.preventDefault();
              set("current", res.current - 1);
            }}
          >
            {children}
            <span className="capitalize">{name}</span>
            <span
              className={cn(
                "tabular-nums text-muted-foreground",
                res.current === res.max && "text-amber-500 font-bold",
                res.current > res.max && "text-red-500 font-bold",
              )}
            >
              {res.current}/{res.max}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <span className="capitalize">click +1, right-click −1</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
