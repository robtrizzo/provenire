import { useState } from "react";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import universal_actions from "@/public/universal_actions.json";
import { type Action } from "@/types/game";
import { Button } from "@/components/ui/button";
import { BookOpen, X } from "lucide-react";
import ActionDescription from "@/components/action-description";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { useCharacterSheet } from "@/contexts/characterSheetContext";

export default function ActionsSummaryPopover() {
  const [actionReferencePopopverOpen, setActionReferencePopopverOpen] =
    useState(false);

  const {
    selectedArchetype,
    selectedSkillset,
    selectedBackground,
    selectedFightingStyle,
  } = useCharacterSheet();

  return (
    <Popover
      open={actionReferencePopopverOpen}
      onOpenChange={setActionReferencePopopverOpen}
    >
      <PopoverTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="p-1 text-blue-600 hover:text-blue-600 h-10 w-10"
        >
          <BookOpen style={{ height: "24px", width: "24px" }} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[600px] max-w-screen h-[500px] overflow-auto relative">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH4 className="text-md">Actions</TypographyH4>
        <TypographyH3 className="mt-4 text-sm text-muted-foreground">
          Universal Actions
        </TypographyH3>
        <div className="ml-2">
          {universal_actions.map((action, i) => (
            <ActionDescription
              key={i}
              action={action as Action}
              className="mt-2"
            />
          ))}
        </div>
        {selectedBackground && (
          <div>
            <TypographyH3 className="text-sm text-red-500">
              {selectedBackground?.name}&apos;s Actions
            </TypographyH3>
            <div className="ml-2">
              {selectedBackground?.actions?.map((action, i) => (
                <ActionDescription key={i} action={action} className="mt-2" />
              ))}
            </div>
          </div>
        )}
        {selectedSkillset && (
          <div>
            <TypographyH3 className="text-sm text-indigo-500">
              {selectedSkillset?.name}&apos;s Actions
            </TypographyH3>
            <div className="ml-2">
              {selectedSkillset?.actions?.map((action, i) => (
                <ActionDescription key={i} action={action} className="mt-2" />
              ))}
            </div>
          </div>
        )}
        {selectedArchetype && (
          <div>
            <TypographyH3 className="text-sm text-amber-500">
              {selectedArchetype?.name}&apos;s Action
            </TypographyH3>
            <div className="ml-2">
              {selectedArchetype?.actions?.map((action, i) => (
                <ActionDescription key={i} action={action} className="mt-2" />
              ))}
            </div>
          </div>
        )}
        {selectedFightingStyle && (
          <div>
            <TypographyH3 className="text-sm text-emerald-500">
              {selectedFightingStyle?.name}&apos;s Action
            </TypographyH3>
            <div className="ml-2">
              {selectedFightingStyle?.actions?.map((action, i) => (
                <ActionDescription key={i} action={action} className="mt-2" />
              ))}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
