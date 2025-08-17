"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import allActions from "@/public/arc2/actions.json";
import { DictionaryAction } from "@/types/game";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { getActionSubscription } from "@/lib/actions";

export function AddActionCombobox() {
  const [open, setOpen] = React.useState(false);
  const [selectedAction, setSelectedAction] =
    React.useState<DictionaryAction | null>(null);
  const [selectedActionCategory, setSelectedActionCategory] = React.useState<
    "basic" | "restricted" | "forbidden" | undefined
  >();
  const [showSuboptions, setShowSuboptions] = React.useState(false);

  const { handleAddAvailableAction } = useCharacterSheet();

  const handleActionSelect = (category: string, action: DictionaryAction) => {
    const cat = category.toLocaleLowerCase() as
      | "basic"
      | "restricted"
      | "forbidden"
      | undefined;
    if (action.suboptions) {
      setSelectedAction(action);
      setSelectedActionCategory(cat);
      setShowSuboptions(true);
    } else {
      handleAddAvailableAction({
        name: action.name,
        description: action.description,
        score: [1, 0],
        type: "codex",
        subscription: getActionSubscription(cat, [1, 0]),
        subscriptionPaid: false,
        overCorpClassification: cat,
        position: "left",
      });
      setOpen(false);
    }
  };

  const handleSuboptionSelect = (suboption: string) => {
    if (selectedAction) {
      const fullName = selectedAction.name.replace("[X]", `[${suboption}]`);
      handleAddAvailableAction({
        name: fullName,
        description: selectedAction.description,
        score: [1, 0],
        type: "codex",
        subscription: getActionSubscription(selectedActionCategory, [1, 0]),
        subscriptionPaid: false,
        overCorpClassification: selectedActionCategory,
        position: "left",
      });
    }
    setOpen(false);
    setShowSuboptions(false);
    setSelectedAction(null);
    setSelectedActionCategory(undefined);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          Add an action...
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search actions..." className="h-9" />
          <CommandList>
            {!showSuboptions ? (
              <>
                <CommandEmpty>No action found.</CommandEmpty>
                {Object.entries(allActions).map(([category, actions]) => (
                  <React.Fragment key={category}>
                    <CommandGroup heading={category}>
                      {actions.map((action: DictionaryAction, i) => (
                        <CommandItem
                          key={action.name + i}
                          value={action.name}
                          onSelect={() => handleActionSelect(category, action)}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span>{action.name}</span>
                            {action.suboptions && (
                              <span className="text-xs">
                                ({action.suboptions.length}) →
                              </span>
                            )}
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                    <CommandSeparator />
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
                <CommandItem
                  onSelect={() => {
                    setShowSuboptions(false);
                    setSelectedAction(null);
                  }}
                >
                  ← Back to actions
                </CommandItem>
                <CommandSeparator />
                <CommandGroup heading={`${selectedAction?.name} options`}>
                  {selectedAction?.suboptions?.map((suboption, i) => (
                    <CommandItem
                      key={suboption + i}
                      value={suboption}
                      onSelect={() => handleSuboptionSelect(suboption)}
                    >
                      {selectedAction.name.replace("[X]", `[${suboption}]`)}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
