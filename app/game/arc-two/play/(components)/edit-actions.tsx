import { BrainCog, X } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Close } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import allActions from "@/public/arc2/actions.json";
import { DictionaryAction } from "@/types/game";
import ActionDescription from "@/components/character-sheet/action-description";
import { AddActionCombobox } from "./add-action-combobox";
import Action from "./action";

const ALL_ACTIONS: DictionaryAction[] = [
  ...allActions.Basic,
  ...allActions.Restricted,
  ...allActions.Forbidden,
];

function getAction(name: string | undefined) {
  if (!name) return;
  return ALL_ACTIONS.find((a) => a.name === name);
}

export default function EditActions() {
  const [open, setOpen] = useState(false);
  const { selectedArchetype, selectedBackground, selectedOperative, actions } =
    useCharacterSheet();
  const bgActions = selectedBackground?.actions;
  const arAction = getAction(selectedArchetype?.startingAction);
  const opAction = getAction(selectedOperative?.action);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <BrainCog className="text-pink-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[600px] relative h-[500px] overflow-auto">
        <Close className="absolute top-2 right-2 h-6 w-6 text-red-400 hover:text-red-400 hover:bg-background rounded-md flex items-center justify-center">
          <X className="h-4 w-4" />
        </Close>
        <TypographyH3 className="mt-8 font-cyber flex items-end justify-between flex-wrap">
          Configure Actions <AddActionCombobox />
        </TypographyH3>
        {actions.map((a, i) => (
          <Action.GridWrapper key={a.name + i}>
            <Action.HeaderContent.Detailed action={a} />
            <Action.EditControls action={a} />
          </Action.GridWrapper>
        ))}
        <TypographyH3 className="font-cyber">Starting Actions</TypographyH3>
        <TypographyH4 className="font-cyber text-amber-500 text-center">
          {selectedArchetype?.name || "Archetype"}
        </TypographyH4>
        {!!selectedArchetype && !!arAction && (
          <ActionDescription action={arAction} />
        )}
        <TypographyH4 className="font-cyber text-red-500 text-center">
          {selectedBackground?.name || "Background"}
        </TypographyH4>
        {!!bgActions && bgActions.starting.length > 0 && (
          <>
            <p className="text-xs text-center">starting</p>
            {bgActions.starting.map((a, idx) => {
              const dictAction = getAction(a);
              if (!dictAction) return null;
              return <ActionDescription action={dictAction} key={a + idx} />;
            })}
          </>
        )}
        {!!bgActions && bgActions.baggage.length > 0 && (
          <>
            <p className="text-xs text-center">baggage</p>
            {bgActions.baggage.map((a, idx) => {
              const dictAction = getAction(a);
              if (!dictAction) return null;
              return <ActionDescription action={dictAction} key={a + idx} />;
            })}
          </>
        )}
        <TypographyH4 className="font-cyber text-indigo-500 text-center">
          {selectedOperative?.name || "Operative"}
        </TypographyH4>
        {!!selectedOperative && !!opAction && (
          <ActionDescription action={opAction} />
        )}
      </PopoverContent>
    </Popover>
  );
}
