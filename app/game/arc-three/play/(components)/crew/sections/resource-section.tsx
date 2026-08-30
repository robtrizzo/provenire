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
import ResourcesDialog from "../dialogs/resource-dialog";
import { TypographyH2 } from "@/components/ui/typography";
import XPClocks from "@/components/character-sheet/xp-clocks";
import { useResource } from "@/contexts/arc3CrewSheetContext";

export default function ResourceSection() {
  return (
    <div>
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Resources <ResourcesDialog />
      </TypographyH2>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <ResourceRow
          name="blood"
          icon={<Droplets className="text-red-500" />}
        />
        <ResourceRow
          name="water"
          icon={<Droplet className="text-blue-500" />}
        />
        <ResourceRow name="food" icon={<Wheat className="text-amber-500" />} />
        <ResourceRow
          name="materials"
          icon={<Boxes className="text-purple-500" />}
        />
        <ResourceRow name="rep" icon={<Speech className="text-lime-500" />} />
        <ResourceRow
          name="goodwill"
          icon={<Handshake className="text-pink-500" />}
        />
        <ResourceRow name="intel" icon={<Brain className="text-teal-500" />} />
        <ResourceRow
          name="manpower"
          icon={<ChessPawn className="text-orange-500" />}
        />
      </div>
    </div>
  );
}

function ResourceRow({ name, icon }: { name: string; icon: React.ReactNode }) {
  const { resource, updateResource } = useResource(name);

  return (
    <div className="flex items-center gap-1">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <span className="flex items-center gap-1 text-xs font-semibold capitalize text-muted-foreground w-20 shrink-0">
              {icon} {name}
            </span>
          </TooltipTrigger>
          <TooltipContent>{name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <XPClocks key={name.toLocaleLowerCase() + resource.current}>
        <XPClocks.Clocks
          initial={resource.current}
          max={resource.max}
          setVal={(n) => updateResource({ current: n })}
        />
      </XPClocks>
    </div>
  );
}
