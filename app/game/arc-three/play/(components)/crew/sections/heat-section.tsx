import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2 } from "@/components/ui/typography";
import XPClocks from "@/components/character-sheet/xp-clocks";
import { SectorEntry, useCrewSheet } from "@/contexts/arc3CrewSheetContext";
import { nanoid } from "@/lib/nanoid";
import { Trash } from "lucide-react";

function SectorRow({ sector }: { sector: SectorEntry }) {
  const { dispatch } = useCrewSheet();

  return (
    <div
      className="px-1 flex items-center justify-between gap-1 cursor-pointer rounded-md hover:bg-secondary"
      onClick={() =>
        dispatch({
          type: "UPDATE_SECTOR",
          id: sector.id,
          changes: { heat: sector.heat + 1 },
        })
      }
      onContextMenu={(e) => {
        e.preventDefault();
        if (sector.heat > 0)
          dispatch({
            type: "UPDATE_SECTOR",
            id: sector.id,
            changes: { heat: sector.heat - 1 },
          });
      }}
    >
      <span className="flex items-center gap-1">
        <Input
          className="h-6 text-xs px-1.5 w-32"
          value={sector.name}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_SECTOR",
              id: sector.id,
              changes: { name: e.target.value },
            })
          }
        />
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6 text-muted-foreground hover:text-red-400"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "REMOVE_SECTOR", id: sector.id });
          }}
        >
          <Trash className="h-3 w-3" />
        </Button>
      </span>
      {/* clock = heat within tier, red counter = escalation */}
      <XPClocks key={sector.id + sector.heat}>
        <XPClocks.Clocks
          initial={sector.heat}
          max={9}
          setVal={(n) =>
            dispatch({
              type: "UPDATE_SECTOR",
              id: sector.id,
              changes: { heat: n },
            })
          }
          r={28}
        />
      </XPClocks>
    </div>
  );
}

export default function HeatSection() {
  const { state, dispatch } = useCrewSheet();

  return (
    <div className="mt-3 flex flex-col">
      <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
        Heat
      </TypographyH2>
      {state.sectors.map((sector) => (
        <SectorRow key={sector.id} sector={sector} />
      ))}
      <Button
        className="mt-1 w-full border-dashed text-sm text-muted-foreground"
        variant="outline"
        onClick={() =>
          dispatch({
            type: "ADD_SECTOR",
            payload: { id: nanoid(), name: "New Sector", heat: 0 },
          })
        }
      >
        ADD SECTOR
      </Button>
    </div>
  );
}
