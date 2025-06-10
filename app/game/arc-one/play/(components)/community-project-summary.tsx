import { CommunityProject } from "@/types/game";
import { cn } from "@/lib/utils";
import Clock from "@/components/clock";
import { CircleCheckBig } from "lucide-react";

export default function CommunityProjectSummary({
  communityProject,
  className,
}: {
  communityProject: CommunityProject;
  className?: string;
}) {
  const { name, description, clock, ticks } = communityProject;

  return (
    <div className={cn("grid grid-cols-12", className)}>
      <span className="min-w-22 col-span-4">{name}</span>
      <div className="col-span-2">
        {ticks >= clock ? (
          <CircleCheckBig className="text-green-600" />
        ) : (
          <Clock
            max={clock}
            current={ticks}
            width={20}
            height={20}
            clickable={false}
          />
        )}
      </div>
      <span className="ml-2 text-muted-foreground text-sm col-span-6">
        {description}
      </span>
    </div>
  );
}
