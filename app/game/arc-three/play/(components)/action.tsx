import { useRoll } from "@/contexts/arc3RollContext";
import { cn } from "@/lib/utils";
import { ActionV3 } from "@/types/arc3";
import { FC, ReactNode } from "react";

interface ActionProps {
  action: ActionV3;
}

type HeaderContent = {
  Detailed: FC<ActionProps>;
  Simple: FC<ActionProps>;
};

type RollPosition = "left" | "right";

interface RollableWrapperProps extends ActionProps {
  position: RollPosition;
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

function RollableWrapper({ action, position, children }: RollableWrapperProps) {
  const { rollLeft, rollRight, setRollLeft, setRollRight, swapDice } =
    useRoll();
  return (
    <GridWrapper
      className={cn(
        "hover:bg-input/50",
        action.type === "ability" && "hover:bg-yellow-500/20",
        action.type === "skill" && "hover:bg-violet-500/20",
      )}
      onClick={() => {
        if (position === "left") {
          const prevAction = rollLeft;
          setRollLeft(action);
          swapDice(prevAction, action);
        } else if (position === "right") {
          const prevAction = rollRight;
          setRollRight(action);
          swapDice(prevAction, action);
        } else {
          console.error("invalid action position");
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
      {action.level.map((l, idx) => (
        <code className="col-span-1" key={idx}>
          {l}
        </code>
      ))}
    </>
  );
}
function DetailedHeaderContent({ action }: { action: ActionV3 }) {
  return <></>;
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
