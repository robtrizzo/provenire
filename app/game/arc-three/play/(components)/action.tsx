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
import { ActionV3 } from "@/types/arc3";
import { LockKeyholeOpen } from "lucide-react";
import { FC, ReactNode } from "react";

interface ActionProps {
  action: ActionV3;
}

type HeaderContent = {
  Detailed: FC<ActionProps>;
  Simple: FC<ActionProps>;
};

interface RollableWrapperProps extends ActionProps {
  children: ReactNode;
}
type Wrapper = {
  Grid: FC<GridWrapperProps>;
  Rollable: FC<RollableWrapperProps>;
};

interface GridWrapperProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

type Action = {
  HeaderContent: HeaderContent;
  Wrapper: Wrapper;
};

function GridWrapper({ className, children, onClick }: GridWrapperProps) {
  return (
    <div
      className={cn("p-2 grid grid-cols-8 gap-2", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function RollableWrapper({ action, children }: RollableWrapperProps) {
  const { dice, rollLeft, rollRight, setRollLeft, setRollRight, swapDice } =
    useRoll();
  const { bonds } = useCharacterSheet();
  return (
    <GridWrapper
      className={cn(
        "hover:bg-input/50",
        action.type === "ability" && "hover:bg-yellow-500/20",
        action.type === "skill" && "hover:bg-violet-500/20",
        action.type === "bond" && "hover:bg-sky-500/20",
      )}
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
      {children}
    </GridWrapper>
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
  );
}

function UnlockLevelBubble({ handleUnlock }: { handleUnlock: () => void }) {
  return (
    <div
      className="border-border hover:border-primary border-[1px] rounded-full w-6 h-6 flex items-center justify-center hover:bg-input hover:cursor-pointer hover:font-bold select-none"
      onClick={(e) => {
        e.stopPropagation();
        handleUnlock();
      }}
    >
      <LockKeyholeOpen size={16} />
    </div>
  );
}

const Action: Action = {
  Wrapper: {
    Grid: GridWrapper,
    Rollable: RollableWrapper,
  },
  HeaderContent: {
    Simple: SimpleHeaderContent,
    Detailed: DetailedHeaderContent,
  },
};

export default Action;
