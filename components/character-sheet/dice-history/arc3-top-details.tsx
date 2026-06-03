import { DieFace } from "@/components/dice/dice";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RollArc3 } from "@/types/roll";

export default function Arc3DieTopDetails({ roll }: { roll: RollArc3 }) {
  return (
    <div className="flex gap-1 items-center relative">
      <span className="text-muted-foreground text-xs block items-center gap-2 absolute top-0 right-0">
        {roll.charName || "Unnamed Character"}
      </span>
      <div className="mt-2 text-md flex flex-col">
        <span className="text-sm font-semibold capitalize">
          {roll.tag ?? "Roll"}
        </span>
        <div className="flex flex-wrap gap-1 mt-1">
          {roll.rolledFaces.map((f, idx) => (
            <Tooltip key={`${f}-${idx}`}>
              <TooltipTrigger asChild>
                <div className="hover:bg-background">
                  <DieFace
                    size={64}
                    face={roll.dice[idx].faces[f]}
                    variant={roll.dice[idx].variant}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent className="border">
                <div className="flex flex-col">
                  <div>
                    <b className="capitalize">{roll.dice[idx].label} (</b>
                    <span>{roll.dice[idx].variant}</span>)
                  </div>
                  <div className="text-muted-foreground">
                    {roll.dice[idx].level != null && (
                      <code>level {roll.dice[idx].level} | </code>
                    )}
                    <code>face {roll.rolledFaces[idx]}</code>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="mt-6" />
        {roll.timestamp && (
          <span className="text-muted-foreground text-xs block gap-2 absolute bottom-0 right-0">
            {new Date(roll.timestamp).toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}
