import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import regions from "@/public/regions.json";
import ScoutingSummary from "./scouting-summary";
import { Clock } from "@/types/game";

export default function AddScouting({
  addScouting,
}: {
  addScouting: (clock: Clock) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="secondary">
          <Plus /> add scouting
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <TypographyH4 className="mt-0">Scouting Missions</TypographyH4>
        {regions.map((r, idx) => (
          <div key={`${r.name}${idx}`}>
            <TypographyP className="text-lg font-bold">{r.name}</TypographyP>
            {r.pathways.map((p, idx) => {
              const customName = `Pathway from ${r.name} to ${p.name}`;
              return (
                <div
                  key={`${p.name}${idx}`}
                  onClick={() => addScouting({ ...p, name: customName })}
                >
                  <ScoutingSummary
                    scoutingClock={p}
                    customName={customName}
                    className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
                  />
                </div>
              );
            })}
            <div
              onClick={() =>
                addScouting({
                  ...r.contact,
                  name: `Discover ${r.name}'s unique contact`,
                })
              }
            >
              <ScoutingSummary
                scoutingClock={r.contact}
                customName={`Discover ${r.name}'s unique contact`}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            </div>
            <div
              onClick={() =>
                addScouting({
                  ...r.danger,
                  name: `Discover ${r.name}'s unique danger`,
                })
              }
            >
              <ScoutingSummary
                scoutingClock={r.danger}
                customName={`Discover ${r.name}'s unique danger`}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            </div>
            <div
              onClick={() =>
                addScouting({
                  ...r.feature,
                  name: `Discover ${r.name}'s special feature`,
                })
              }
            >
              <ScoutingSummary
                scoutingClock={r.feature}
                customName={`Discover ${r.name}'s special feature`}
                className="mt-2 px-1 pt-[2px] rounded-md hover:bg-secondary"
              />
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
