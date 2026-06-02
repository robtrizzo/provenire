import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useActions,
  useCharacterSheet,
  useField,
} from "@/contexts/arc3CharacterSheetContext";
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
  LockKeyholeOpen,
  MousePointer2,
  MousePointerClick,
  Plus,
  Star,
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
import { useDirectionalTooltip } from "@/hooks/use-directional-tooltip";
import ClockCost from "@/components/clock-cost";

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
  Static: FC<ActionProps>;
  Unlock: FC<UnlockActionProps>;
};

interface GridWrapperProps {
  className?: string;
  children: ReactNode;
}

interface RollableWrapperProps extends ActionProps {
  children: ReactNode;
}

interface MenuWrapperProps
  extends ActionProps, React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TooltipWrapperProps extends ActionProps {
  children: ReactNode;
}

type Wrapper = {
  Grid: FC<GridWrapperProps>;
  Rollable: FC<RollableWrapperProps>;
  Menu: FC<MenuWrapperProps>;
  Tooltip: FC<TooltipWrapperProps>;
};

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
  const {
    dice,
    rollLeft,
    rollRight,
    setRollLeft,
    setRollRight,
    swapDice,
    removeDieByLabel,
  } = useRoll();
  const { bonds } = useCharacterSheet();
  return (
    <div
      onClick={() => {
        switch (action.type) {
          case "aptitude": {
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
            const bondAlreadyInRoll = dice.some((d) => d.label === action.name);
            if (bondAlreadyInRoll) {
              removeDieByLabel(action.name);
            } else {
              swapDice(undefined, action);
            }
            break;
          }
          case "fightingStyle": {
            const onlyLeftTaken = rollLeft?.name === action.name && !rollRight;
            const onlyRightTaken = rollRight?.name === action.name && !rollLeft;

            if (onlyLeftTaken) {
              setRollLeft(undefined);
              setRollRight(action);
            } else if (onlyRightTaken) {
              setRollRight(undefined);
              setRollLeft(action);
            } else if (!rollRight) {
              setRollRight(action);
              swapDice(undefined, action);
            } else if (!rollLeft) {
              setRollLeft(action);
              swapDice(undefined, action);
            }
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
          action.type === "aptitude" && "hover:bg-yellow-500/20",
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
  const { actions, setActions } = useActions();
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

function SimpleHeaderContentStatic({ action }: { action: ActionV3 }) {
  return (
    <>
      <div className="flex items-center col-span-6">
        <span className="text-lg">{action.name}</span>
      </div>
      <ActionLevelStatic action={action} />
    </>
  );
}

function DetailedHeaderContent({ action }: { action: ActionV3 }) {
  return <></>;
}

function ActionLevel({ action }: { action: ActionV3 }) {
  const { updateAction } = useActions();
  const [xpSpent, setXpSpent] = useField("xpSpent");
  const diceLength = action.type === "bond" ? MAX_BOND_DICE : MAX_ACTION_DICE;
  let maxLevel = 0;
  switch (action.type) {
    case "aptitude":
      maxLevel = getMaxDieLevel(AbilityDice);
      break;
    case "skill":
      maxLevel = getMaxDieLevel(SkillDice);
      break;
    case "bond":
      maxLevel = getMaxDieLevel(BondDice);
      break;
    case "fightingStyle":
      maxLevel = getMaxDieLevel(SkillDice);
      break;
  }
  const handleActionLevelChange = (index: number) => (newLevel: number) => {
    let minLevel = 0;
    switch (action.type) {
      case "aptitude":
        minLevel = getMinDieLevel(AbilityDice);
        break;
      case "skill":
        minLevel = getMinDieLevel(SkillDice);
        break;
      case "bond":
        minLevel = getMinDieLevel(BondDice);
        break;
      case "fightingStyle":
        minLevel = getMinDieLevel(SkillDice);
        break;
      default:
        console.error("Invalid action type: ", action.type);
        return;
    }
    if (newLevel > maxLevel) return;
    if (newLevel < minLevel) {
      setXpSpent(xpSpent - 5);
      handleLockLevel(index);
      return;
    }
    const newAction = { ...action };
    const oldLevel = action.level[index];
    newAction.level[index] = newLevel;
    if (newLevel > oldLevel) {
      setXpSpent(xpSpent + newLevel);
    } else if (newLevel < oldLevel) {
      setXpSpent(xpSpent - oldLevel);
    }
    updateAction(newAction);
  };
  const handleUnlockLevel = () => {
    let minLevel = 0;
    switch (action.type) {
      case "aptitude":
        minLevel = getMinDieLevel(AbilityDice);
        break;
      case "skill":
        minLevel = getMinDieLevel(SkillDice);
        break;
      case "bond":
        minLevel = getMinDieLevel(BondDice);
        break;
      case "fightingStyle":
        minLevel = getMinDieLevel(SkillDice);
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
              isAtMax={action.level[idx] >= maxLevel}
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

function ActionLevelStatic({ action }: { action: ActionV3 }) {
  const diceLength = action.type === "bond" ? MAX_BOND_DICE : MAX_ACTION_DICE;
  return (
    <>
      {Array.from({ length: diceLength }).map((_, idx) =>
        idx < action.level.length ? (
          <div className="col-span-1" key={idx}>
            <div className="border-border border rounded-full w-6 h-6 flex items-center justify-center select-none">
              <code>{action.level[idx]}</code>
            </div>
          </div>
        ) : (
          <div className="col-span-1" key={idx}>
            <div className="border-border border rounded-full w-6 h-6 flex items-center justify-center select-none">
              <LockKeyholeOpen size={16} />
            </div>
          </div>
        ),
      )}
    </>
  );
}

function ActionLevelBubble({
  level,
  isAtMax,
  handleChange,
}: {
  level: number;
  isAtMax: boolean;
  handleChange: (newLevel: number) => void;
}) {
  const { side, onMouseMove, onMouseLeave } = useDirectionalTooltip();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="border-border hover:border-primary border rounded-full w-6 h-6 flex items-center justify-center hover:bg-input hover:cursor-pointer hover:font-bold select-none"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
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
      <TooltipContent
        side={side}
        className="flex flex-col items-start gap-1 border-border border"
      >
        {isAtMax ? (
          <span className="flex items-center gap-1 text-muted-foreground">
            <Star size={16} className="text-yellow-400" /> Max level reached!
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <MousePointerClick size={16} className="text-emerald-600" />
            <b>Left-click</b> to level{" "}
            <span className="text-emerald-600">up</span>
            <ClockCost ticks={5} num={level + 1} r={20} />
          </span>
        )}
        <span className="flex items-center gap-1">
          <MousePointer2 size={16} className="text-red-600" />
          <b>Right-click</b> to level <span className="text-red-600">down</span>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}

function UnlockLevelBubble({ handleUnlock }: { handleUnlock: () => void }) {
  const { side, onMouseMove, onMouseLeave } = useDirectionalTooltip();
  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="border-border hover:border-primary border rounded-full w-6 h-6 flex items-center justify-center hover:bg-input hover:cursor-pointer hover:font-bold select-none"
          onClick={(e) => {
            e.stopPropagation();
            handleUnlock();
          }}
        >
          <LockKeyholeOpen size={16} />
        </div>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className="flex flex-col items-start gap-1 border-border border"
      >
        <span className="flex items-center gap-1">
          <MousePointerClick size={16} className="text-emerald-600" /> unlock
          die <ClockCost ticks={5} num={5} r={20} />
        </span>
      </TooltipContent>
    </Tooltip>
  );
}

function UnlockHeaderContent({ className, type }: UnlockActionProps) {
  const { actions, setActions } = useActions();
  const [open, setOpen] = useState(false);

  const actionNames = new Set(actions.map((a) => a.name));

  function handleAddAction(action: { name: string; description: string }) {
    const foundAction = actions.find((a) => a.name === action.name);
    if (!!foundAction) return;
    const newAction: ActionV3 = {
      name: action.name,
      description: action.description,
      type,
      level: type === "skill" || type === "fightingStyle" ? [1] : [0],
    };
    setActions([...actions, newAction]);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={(newOpen) => setOpen(newOpen)}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "col-span-8 flex justify-center border-border border-dashed border rounded-sm hover:bg-secondary/50 hover:cursor-pointer",
            className,
          )}
        >
          <div className="h-6.5 flex items-center">
            <span className="text-sm text-muted-foreground uppercase">
              Unlock {type}
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="max-w-screen w-150 relative max-h-125 overflow-auto">
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
              <CommandGroup heading="Aptitudes">
                {actions_list.Aptitudes.map((action, i) => {
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
              </CommandGroup>
              <CommandGroup heading="Skills">
                {actions_list.Skills.map((action, i) => {
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
              </CommandGroup>
              <CommandGroup heading="Fighting Styles">
                {actions_list.FightingStyles.map((action, i) => {
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
              </CommandGroup>
            </CommandList>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  );
}

function TooltipWrapper({ action, children }: TooltipWrapperProps) {
  const { side, onMouseMove, onMouseLeave } = useDirectionalTooltip();
  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className="flex flex-col items-start gap-1 border-border border"
      >
        {action.description}
      </TooltipContent>
    </Tooltip>
  );
}

const Action: Action = {
  Wrapper: {
    Grid: GridWrapper,
    Rollable: RollableWrapper,
    Menu: MenuWrapper,
    Tooltip: TooltipWrapper,
  },
  HeaderContent: {
    Simple: SimpleHeaderContent,
    Detailed: DetailedHeaderContent,
    Unlock: UnlockHeaderContent,
    Static: SimpleHeaderContentStatic,
  },
};

export default Action;
