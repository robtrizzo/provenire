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
    <div className="@container">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Resources <ResourcesDialog />
      </TypographyH2>
      <div className="mt-2 grid grid-cols-2 @lg:grid-cols-3 gap-2">
        <ResourceRow
          name="blood"
          icon={<Droplets size={28} className="text-red-500 shrink-0" />}
        />
        <ResourceRow
          name="water"
          icon={<Droplet size={28} className="text-blue-500" />}
        />
        <ResourceRow
          name="food"
          icon={<Wheat size={28} className="text-amber-500 shrink-0" />}
        />
        <ResourceRow
          name="materials"
          icon={<Boxes size={28} className="text-purple-500 shrink-0" />}
        />
        <ResourceRow
          name="rep"
          icon={<Speech size={28} className="text-lime-500 shrink-0" />}
        />
        <ResourceRow
          name="goodwill"
          icon={<Handshake className="text-pink-500 shrink-0" />}
        />
        <ResourceRow
          name="intel"
          icon={<Brain size={28} className="text-teal-500 shrink-0" />}
        />
        <ResourceRow
          name="manpower"
          icon={<ChessPawn size={28} className="text-orange-500 shrink-0" />}
        />
      </div>
    </div>
  );
}

function ResourceRow({ name, icon }: { name: string; icon: React.ReactNode }) {
  const { resource, updateResource } = useResource(name);

  return (
    <div
      className="px-1 flex items-center justify-between gap-1 cursor-pointer rounded-md hover:bg-secondary"
      onClick={() => updateResource({ current: resource.current + 1 })}
      onContextMenu={(e) => {
        e.preventDefault();
        if (resource.current > 0)
          updateResource({ current: resource.current - 1 });
      }}
    >
      <span className="flex items-center gap-1.5 text-sm font-semibold capitalize text-muted-foreground w-20">
        {icon} {name}
      </span>

      <XPClocks key={name.toLocaleLowerCase() + resource.current}>
        <XPClocks.Clocks
          initial={resource.current}
          max={resource.max}
          setVal={(n) => updateResource({ current: n })}
          r={28}
        />
      </XPClocks>
    </div>
  );
}
