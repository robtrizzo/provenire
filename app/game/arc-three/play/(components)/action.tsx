import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCharacterSheet } from "@/contexts/arc3CharacterSheetContext";
import { useRoll } from "@/contexts/arc3RollContext";
import {
  AbilityDice,
  BondDice,
  getMaxDieLevel,
  getMinDieLevel,
  MAX_ACTION_DICE,
  MAX_BOND_DICE,
  SkillDice,
} from "@/lib/dice";
import { cn } from "@/lib/utils";
import { ActionV3, ActionVariantV3 } from "@/types/arc3";
import {
  Dices,
  LockKeyholeOpen,
  MousePointer2,
  MousePointerClick,
  Plus,
  Trash,
} from "lucide-react";
import { FC, ReactNode, useState } from "react";
import actions_list from "@/public/arc3/actions.json";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface ActionProps {
  action: ActionV3;
}

interface UnlockActionProps {
  className?: string;
  type: ActionVariantV3;
}

type HeaderContent = {
  Detailed: FC<ActionProps>;
  Simple: FC<ActionProps>;
  Unlock: FC<UnlockActionProps>;
};

interface RollableWrapperProps extends ActionProps {
  children: ReactNode;
}

interface MenuWrapperProps
  extends ActionProps, React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

type Wrapper = {
  Grid: FC<GridWrapperProps>;
  Rollable: FC<RollableWrapperProps>;
  Menu: FC<MenuWrapperProps>;
};

interface GridWrapperProps {
  className?: string;
  children: ReactNode;
}

type Action = {
  HeaderContent: HeaderContent;
  Wrapper: Wrapper;
};

function GridWrapper({ className, children }: GridWrapperProps) {
  return (
    <div className={cn("p-2 grid grid-cols-8 gap-2", className)}>
      {children}
    </div>
  );
}

function RollableWrapper({ action, children }: RollableWrapperProps) {
  const { dice, rollLeft, rollRight, setRollLeft, setRollRight, swapDice } =
    useRoll();
  const { bonds } = useCharacterSheet();
  return (
    <div
      onClick={() => {
        switch (action.type) {
          case "ability": {
            const prevAction = rollLeft;
            setRollLeft(action);
            swapDice(prevAction, action);
            break;
          }
          case "skill": {
            const prevAction = rollRight;
            setRollRight(action);
            swapDice(prevAction, action);
            break;
          }
          case "bond": {
            const existingBondDie = dice.find((d) => d.variant === "bond");
            let prevBond;
            if (existingBondDie) {
              prevBond = bonds.find((b) => b.name === existingBondDie.label);
            }
            swapDice(prevBond, action);
            break;
          }
          default:
            console.error("invalid action position");
            return;
        }
      }}
    >
      <GridWrapper
        className={cn(
          "hover:bg-input/50",
          action.type === "ability" && "hover:bg-yellow-500/20",
          action.type === "skill" && "hover:bg-violet-500/20",
          action.type === "bond" && "hover:bg-sky-500/20",
        )}
      >
        {children}
      </GridWrapper>
    </div>
  );
}

function MenuWrapper({ action, children, ...props }: MenuWrapperProps) {
  const { actions, setActions } = useCharacterSheet();
  const handleRemoveAction = () => {
    setActions(actions.filter((a) => a.name !== action.name));
  };
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div {...props}>{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          className="bg-destructive"
          onClick={handleRemoveAction}
        >
          <Trash className="text-destructive-foreground" /> Remove
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function SimpleHeaderContent({ action }: { action: ActionV3 }) {
  return (
    <>
      <div className="flex items-center col-span-6">
        <span className="text-lg">{action.name}</span>
      </div>
      <ActionLevel action={action} />
    </>
  );
}

function DetailedHeaderContent({ action }: { action: ActionV3 }) {
  return <></>;
}

function ActionLevel({ action }: { action: ActionV3 }) {
  const { updateAction, xpSpent, setXpSpent } = useCharacterSheet();
  const diceLength = action.type === "bond" ? MAX_BOND_DICE : MAX_ACTION_DICE;
  const handleActionLevelChange = (index: number) => (newLevel: number) => {
    let maxLevel = 0;
    let minLevel = 0;
    switch (action.type) {
      case "ability":
        maxLevel = getMaxDieLevel(AbilityDice);
        minLevel = getMinDieLevel(AbilityDice);
        break;
      case "skill":
        maxLevel = getMaxDieLevel(SkillDice);
        minLevel = getMinDieLevel(SkillDice);
        break;
      case "bond":
        maxLevel = getMaxDieLevel(BondDice);
        minLevel = getMinDieLevel(BondDice);
        break;
      default:
        console.error("Invalid action type: ", action.type);
        return;
    }
    if (newLevel > maxLevel) return;
    if (newLevel < minLevel) {
      setXpSpent(Math.max(0, xpSpent - 5));
      handleLockLevel(index);
      return;
    }
    const newAction = { ...action };
    newAction.level[index] = newLevel;
    setXpSpent(xpSpent + newLevel);
    updateAction(newAction);
  };
  const handleUnlockLevel = () => {
    let minLevel = 0;
    switch (action.type) {
      case "ability":
        minLevel = getMinDieLevel(AbilityDice);
        break;
      case "skill":
        minLevel = getMinDieLevel(SkillDice);
        break;
      case "bond":
        minLevel = getMinDieLevel(BondDice);
        break;
      default:
        console.error("Invalid action type: ", action.type);
        return;
    }
    const newAction = { ...action, level: [...action.level, minLevel] };
    setXpSpent(xpSpent + 5);
    updateAction(newAction);
  };
  const handleLockLevel = (index: number) => {
    const newAction = {
      ...action,
      level: action.level.filter((_, i) => i !== index),
    };
    updateAction(newAction);
  };
  return (
    <>
      {Array.from({ length: diceLength }).map((_, idx) =>
        idx < action.level.length ? (
          <div className="col-span-1" key={idx}>
            <ActionLevelBubble
              level={action.level[idx]}
              handleChange={handleActionLevelChange(idx)}
            />
          </div>
        ) : (
          <div className="col-span-1" key={idx}>
            <UnlockLevelBubble handleUnlock={handleUnlockLevel} />
          </div>
        ),
      )}
    </>
  );
}

function ActionLevelBubble({
  level,
  handleChange,
}: {
  level: number;
  handleChange: (newLevel: number) => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="border-border hover:border-primary border-[1px] rounded-full w-6 h-6 flex items-center justify-center hover:bg-input hover:cursor-pointer hover:font-bold select-none"
          onClick={(e) => {
            e.stopPropagation();
            handleChange(level + 1);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            handleChange(level - 1);
          }}
        >
          <code>{level}</code>
        </div>
      </TooltipTrigger>
      <TooltipContent className="flex flex-col items-start gap-1 border-border border-[1px]">
        <span className="flex items-center gap-1">
          <MousePointerClick size={16} className="text-emerald-600" />
          <b>Left-click</b> to level{" "}
          <span className="text-emerald-600">up</span>
        </span>
        <span className="flex items-center gap-1">
          <MousePointer2 size={16} className="text-red-600" />
          <b>Right-click</b> to level <span className="text-red-600">down</span>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}

function UnlockLevelBubble({ handleUnlock }: { handleUnlock: () => void }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="border-border hover:border-primary border-[1px] rounded-full w-6 h-6 flex items-center justify-center hover:bg-input hover:cursor-pointer hover:font-bold select-none"
          onClick={(e) => {
            e.stopPropagation();
            handleUnlock();
          }}
        >
          <LockKeyholeOpen size={16} />
        </div>
      </TooltipTrigger>
      <TooltipContent className="flex flex-col items-start gap-1 border-border border-[1px]">
        <span className="flex items-center gap-1">
          <MousePointerClick size={16} className="text-emerald-600" /> unlock
          die
        </span>
      </TooltipContent>
    </Tooltip>
  );
}

function UnlockHeaderContent({ className, type }: UnlockActionProps) {
  const { actions, setActions } = useCharacterSheet();
  const [open, setOpen] = useState(false);

  const allActions = [...actions_list.Abilities, ...actions_list.Skills];

  const actionNames = new Set(actions.map((a) => a.name));

  function handleAddAction(action: { name: string; description: string }) {
    console.log("add action", action);
    const foundAction = actions.find((a) => a.name === action.name);
    console.log("foundAction", foundAction);
    if (!!foundAction) return;
    const newAction: ActionV3 = {
      name: action.name,
      description: action.description,
      type,
      level: type === "skill" ? [1] : [0],
    };
    setActions([...actions, newAction]);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={(newOpen) => setOpen(newOpen)}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "col-span-8 flex justify-center border-border border-dashed border-[1px] rounded-sm hover:bg-secondary/50 hover:cursor-pointer",
            className,
          )}
        >
          <div className="h-[26px] flex items-center">
            <span className="text-sm text-muted-foreground uppercase">
              Unlock {type}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-[600px] relative max-h-[500px] overflow-auto">
        {type === "bond" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const bondName = formData.get("bond-name") as string;
              if (!bondName) return;
              handleAddAction({ name: bondName, description: "" });
            }}
            className="flex gap-1"
          >
            <Input name="bond-name" placeholder="Enter bond name..." />
            <Button type="submit" variant="secondary">
              <Plus />
              Add
            </Button>
          </form>
        ) : (
          <Command>
            <CommandInput placeholder="Search actions..." className="h-9" />
            <CommandList>
              <CommandEmpty>No action found.</CommandEmpty>
              {allActions.map((action, i) => {
                const skillUnlocked = actionNames.has(action.name);
                return (
                  <CommandItem
                    key={action.name + i}
                    value={action.name}
                    onSelect={() => {
                      handleAddAction(action);
                    }}
                    className={cn(
                      "hover:cursor-pointer",
                      skillUnlocked &&
                        "text-muted-foreground bg-accent/50 hover:cursor-auto data-[selected=true]:bg-accent/50 data-[selected=true]:text-muted-foreground",
                    )}
                  >
                    <div className="grid grid-cols-8 w-full">
                      <span className="col-span-2">{action.name}</span>
                      <span className="col-span-6">{action.description}</span>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandList>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  );
}

const Action: Action = {
  Wrapper: {
    Grid: GridWrapper,
    Rollable: RollableWrapper,
    Menu: MenuWrapper,
  },
  HeaderContent: {
    Simple: SimpleHeaderContent,
    Detailed: DetailedHeaderContent,
    Unlock: UnlockHeaderContent,
  },
};

export default Action;
