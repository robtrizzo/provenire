import { BuildupCheckboxes } from "@/components/buildup-checkboxes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { TypographyH2 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/characterSheetContext";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Plus } from "lucide-react";

export default function ResourcesSection() {
  const {
    blood,
    setBlood,
    maxBlood,
    increaseMaxBlood,
    water,
    setWater,
    maxWater,
    abilities,
    setChanges,
  } = useCharacterSheet();

  const hasNickelVessel = abilities.includes("Nickel Vessel");

  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
          Blood
          <div className="flex items-end gap-1">
            <BuildupCheckboxes
              max={4}
              numDisabled={Math.max(4 - maxBlood, 0)}
              current={blood}
              onChange={(n) => {
                setBlood(n);
                setChanges(true);
              }}
            />
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="h-6 w-6">
                  <Button
                    size="icon"
                    className="p-1 h-6 w-6"
                    variant="outline"
                    disabled={!hasNickelVessel}
                    onClick={() => {
                      increaseMaxBlood();
                      setChanges(true);
                    }}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                {hasNickelVessel ? "Increase Max" : "Locked"}
              </TooltipContent>
            </Tooltip>
          </div>
        </TypographyH2>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <TypographyH2 className="text-md text-muted-foreground flex items-end justify-between">
          Water
          <BuildupCheckboxes
            max={4}
            numDisabled={Math.max(4 - maxWater, 0)}
            current={water}
            onChange={(n) => {
              setWater(n);
              setChanges(true);
            }}
          />
        </TypographyH2>
      </div>
    </>
  );
}
