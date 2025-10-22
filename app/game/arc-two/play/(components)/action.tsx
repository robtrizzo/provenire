import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  Brain,
  BrainCircuit,
  Dices,
  Repeat,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCharacterSheet } from "@/contexts/arc2CharacterSheetContext";
import { ActionV2 } from "@/types/game";
import { ActionScore } from "@/components/action-score";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getActionSubscription } from "@/lib/actions";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useRoll } from "@/contexts/arc2RollContext";
import { FC, ReactNode } from "react";

interface ActionProps {
  action: ActionV2;
}

interface GridWrapperProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

type HeaderContent = {
  Detailed: FC<ActionProps>;
  Simple: FC<ActionProps>;
};

type MenuWrapperProps = {
  action: ActionV2;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type Action = {
  GridWrapper: FC<GridWrapperProps>;
  RollableWrapper: FC<ActionProps & { children: ReactNode }>;
  HeaderContent: HeaderContent;
  EditControls: FC<ActionProps>;
  MenuWrapper: FC<MenuWrapperProps>;
};

function useActionWidget(action: ActionV2) {
  const { handleRemoveAvailableAction, handleEditAction } = useCharacterSheet();

  const handleRemoveAction = () => {
    handleRemoveAvailableAction(action.name);
  };

  const toggleEgo = () => {
    handleEditAction({
      ...action,
      type: action.type === "ego" ? "codex" : "ego",
    });
  };

  const toggleReimbursed = () => {
    handleEditAction({ ...action, subscriptionPaid: !action.subscriptionPaid });
  };

  const togglePosition = () => {
    handleEditAction({
      ...action,
      position: action.position === "left" ? "right" : "left",
    });
  };

  const handleChangeScore = (s: number[]) => {
    const newScore: [number, number] = [s[0] || 0, s[1] || 0];
    handleEditAction({
      ...action,
      score: newScore,
      subscription: getActionSubscription(
        action.overCorpClassification,
        newScore
      ),
    });
  };

  return {
    handleRemoveAction,
    toggleEgo,
    toggleReimbursed,
    togglePosition,
    handleChangeScore,
  };
}

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

function RollableWrapper({
  action,
  children,
}: {
  action: ActionV2;
  children: ReactNode;
}) {
  const { setRollLeft, setRollRight } = useRoll();
  return (
    <GridWrapper
      className={cn(
        "hover:bg-input/50",
        action.type === "codex" && "hover:bg-fuchsia-500/20",
        action.type === "ego" && "hover:bg-rose-500/20"
      )}
      onClick={() => {
        if (action.position === "left") {
          setRollLeft(action);
        } else if (action.position === "right") {
          setRollRight(action);
        } else {
          console.error("invalid action position");
        }
      }}
    >
      {children}
    </GridWrapper>
  );
}

function DetailedHeaderContent({ action }: { action: ActionV2 }) {
  const { handleChangeScore } = useActionWidget(action);
  return (
    <>
      <div className="flex flex-col items-start justify-center col-span-3">
        <span className="text-md">{action.name}</span>
        <span className="text-xs text-muted-foreground">
          {action.description}
        </span>
      </div>
      <ActionScore
        score={action.score}
        onChange={handleChangeScore}
        className="col-span-1"
      />
    </>
  );
}

function SimpleHeaderContent({ action }: { action: ActionV2 }) {
  const { handleChangeScore } = useActionWidget(action);
  return (
    <>
      <div className="flex items-center col-span-6">
        <span className="text-lg">{action.name}</span>
      </div>
      <ActionScore
        score={action.score}
        onChange={handleChangeScore}
        className="col-span-1"
      />
    </>
  );
}

function EditControls({ action }: { action: ActionV2 }) {
  const { handleRemoveAction, toggleEgo, toggleReimbursed, togglePosition } =
    useActionWidget(action);
  return (
    <>
      <div className="col-span-3 flex items-center gap-3">
        <div className="flex items-center gap-2 ">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline" onClick={toggleEgo}>
                {action.type === "codex" ? (
                  <BrainCircuit className="text-fuchsia-500" />
                ) : (
                  <Brain className="text-rose-500" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="border-border border-[1px]">
              <p>
                Toggle <span className="text-rose-500">Ego</span> /{" "}
                <span className="text-fuchsia-500">Codex</span>
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
        {action.type === "codex" && action.subscription && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={toggleReimbursed}>
                <div className="flex flex-col">
                  <span
                    className={cn(
                      "font-cyber text-sm",
                      action.subscriptionPaid
                        ? "text-emerald-500"
                        : "text-muted-foreground"
                    )}
                  >
                    <Repeat className="inline" size={14} />{" "}
                    {action.subscription} ¤P
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {action.overCorpClassification}
                  </span>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="border-border border-[1px]">
              <p>
                Toggle <span className="text-emerald-500">active</span> /{" "}
                <span className="text-muted-foreground">paused</span>{" "}
                subscription
              </p>
            </TooltipContent>
          </Tooltip>
        )}
        {!(action.type === "codex" && !action.subscriptionPaid) && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={togglePosition}>
                {action.position}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="border-border border-[1px]">
              <p>Toggle action on left / right</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <Button size="icon" variant="destructive" onClick={handleRemoveAction}>
          <Trash />
        </Button>
      </div>
    </>
  );
}

function MenuWrapper({ action, children, ...props }: MenuWrapperProps) {
  const { handleRemoveAction, toggleEgo, toggleReimbursed, togglePosition } =
    useActionWidget(action);
  const { doRoll } = useRoll();
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div {...props}>{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem
          onClick={() => {
            doRoll("action", action, undefined);
          }}
        >
          <Dices /> Roll
        </ContextMenuItem>
        <ContextMenuItem onClick={togglePosition}>
          {action.position === "left" ? (
            <span>
              Move right <ArrowBigRightDash className="inline-block" />
            </span>
          ) : (
            <span>
              Move left <ArrowBigLeftDash className="inline-block" />
            </span>
          )}
        </ContextMenuItem>
        <ContextMenuItem onClick={toggleEgo}>
          <span>
            Swap from{" "}
            {action.type === "ego" ? (
              <span>
                <Brain className="text-rose-500 inline-block" /> to{" "}
                <BrainCircuit className="text-fuchsia-500 inline-block" />
              </span>
            ) : (
              <span>
                <BrainCircuit className="text-fuchsia-500 inline-block" /> to{" "}
                <Brain className="text-rose-500 inline-block" />
              </span>
            )}
          </span>
        </ContextMenuItem>
        {action.type === "codex" && (
          <ContextMenuItem onClick={toggleReimbursed}>
            {action.subscriptionPaid && (
              <span>
                <span className="text-muted-foreground">Pause</span>{" "}
                subscription (
                <span className="font-cyber text-sm text-emerald-500">
                  <Repeat className="inline text-emerald-500" size={14} />{" "}
                  {action.subscription} ¤P
                </span>
                )
              </span>
            )}
          </ContextMenuItem>
        )}
        <ContextMenuSeparator />
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

const Action: Action = {
  GridWrapper,
  RollableWrapper,
  HeaderContent: {
    Detailed: DetailedHeaderContent,
    Simple: SimpleHeaderContent,
  },
  EditControls,
  MenuWrapper,
};

export default Action;
