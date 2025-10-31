"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRoll } from "@/contexts/arc2RollContext";
import { cn } from "@/lib/utils";
import { EngagementRollQuestion } from "@/types/roll";
import { Check, Cog, Dices, Plus, Save, Trash2, X, Zap } from "lucide-react";
import { useSession } from "next-auth/react";
import React, {
  ChangeEvent,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface EngagementRollDialogProps {
  children: ReactNode;
}

interface VoteControlProps {
  votes: string[];
  color: string;
  handleVote: () => void;
  children: ReactNode;
}

type VoteComponents = {
  DiceDisplay: FC;
  Questions: FC;
  VoteControl: FC<VoteControlProps>;
  RollControls: FC;
  ConfigureEngagementRollButton: FC;
};

type EngagementRoll = {
  Dialog: {
    Wrapper: FC<EngagementRollDialogProps>;
    VoteBase: FC<EngagementRollDialogProps>;
    ConfigureBase: FC<EngagementRollDialogProps>;
  };
  Configure: FC;
  Vote: VoteComponents;
};

const VoteDialogBase = ({ children }: { children: ReactNode }) => {
  const { engagementRollAlert } = useRoll();
  return (
    <>
      <DialogTrigger asChild>
        <Button variant="secondary" className="relative">
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className={cn(engagementRollAlert ? "visible" : "hidden")}
          />
          <Zap /> Engagement Roll
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Engagement Roll</DialogTitle>
        {children}
      </DialogContent>
    </>
  );
};

function Questions() {
  const { engagementRoll, loadEngagementRoll, engagementRollQuestionVote } =
    useRoll();

  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      loadEngagementRoll();
      hasLoaded.current = true;
    }
  }, [loadEngagementRoll]);

  const handleVote = (idx: number, vote: "yes" | "no") => () => {
    engagementRollQuestionVote(idx, vote);
  };

  return (
    <div className="flex flex-col gap-1">
      {engagementRoll.map((q, idx) => (
        <React.Fragment key={q.question + idx}>
          <div className="grid grid-cols-12">
            <div className="col-span-9">
              <span className="text-sm">
                {q.question}{" "}
                <i className="text-muted-foreground">({q.weight}d)</i>
              </span>
            </div>
            <div className="col-span-3 flex justify-end items-center gap-2">
              <VoteControl
                votes={q.yesVotes}
                color="green"
                handleVote={handleVote(idx, "yes")}
              >
                <Check />
              </VoteControl>
              <VoteControl
                votes={q.noVotes}
                color="red"
                handleVote={handleVote(idx, "no")}
              >
                <X />
              </VoteControl>
            </div>
          </div>
          <Separator className="mt-1" />
        </React.Fragment>
      ))}
    </div>
  );
}

function VoteControl({ votes, color, handleVote, children }: VoteControlProps) {
  const numVotes = votes.length;

  const session = useSession();
  const username = session.data?.user.name;
  if (!username) return null;

  const voted = votes.includes(username);

  return (
    <div className="relative">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="outline" onClick={handleVote}>
            <div className={cn(voted && `text-${color}-500`)}>{children}</div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className={cn(`border-${color}-500`, "border-[1px]")}>
          {numVotes > 0 ? (
            <div className="flex flex-col">
              {votes.map((u, idx) => (
                <span key={u + idx}>{u}</span>
              ))}
            </div>
          ) : (
            <span>no votes</span>
          )}
        </TooltipContent>
      </Tooltip>
      {numVotes > 0 && (
        <Badge
          className={cn(
            `text-${color}-500`,
            "absolute bottom-[-5px] right-[-5px] ml-1 rounded-full px-1 py-0 bg-secondary-500/80 hover:bg-secondary-500/80 font-mono  border-primary border-[1px]"
          )}
        >
          {numVotes}
        </Badge>
      )}
    </div>
  );
}

function RollControls() {
  const { numEngagementRollDice, handleEngagementRoll } = useRoll();
  const numDice = numEngagementRollDice();
  return (
    <Button onClick={handleEngagementRoll}>
      <Dices /> Roll ( {numDice} )
    </Button>
  );
}

function ConfigureEngagementRollButton() {
  return <></>;
}

function DialogWrapper({ children }: { children: ReactNode }) {
  const {
    engagementRollDialogOpen,
    setEngagementRollDialogOpen,
    setEngagementRollAlert,
  } = useRoll();

  const handleOpenChange = (open: boolean) => {
    setEngagementRollAlert(false);
    setEngagementRollDialogOpen(open);
  };

  return (
    <Dialog open={engagementRollDialogOpen} onOpenChange={handleOpenChange}>
      {children}
    </Dialog>
  );
}

function ConfigureDialogBase({ children }: { children: ReactNode }) {
  return (
    <>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Cog /> Configure Engagement Roll
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Configure Engagement Roll</DialogTitle>
        {children}
      </DialogContent>
    </>
  );
}

function ConfigureContent({}) {
  const { engagementRoll, configureEngagementRoll, loadEngagementRoll } =
    useRoll();

  const engRollQuestions = engagementRoll.map((q) => ({
    question: q.question,
    weight: q.weight,
  }));

  const [localQuestions, setLocalQuestions] =
    useState<EngagementRollQuestion[]>(engRollQuestions);

  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!hasLoaded.current) {
      loadEngagementRoll();
      hasLoaded.current = true;
    }
  }, [loadEngagementRoll]);

  useEffect(() => {
    setLocalQuestions(engagementRoll);
  }, [engagementRoll]);

  const handleWeightChange =
    (idx: number) => (e: ChangeEvent<HTMLInputElement>) =>
      setLocalQuestions((prev) => {
        prev[idx] = {
          ...prev[idx],
          weight: Number(e.target.value),
        };
        return prev;
      });

  const handleQuestionChange =
    (idx: number) => (e: ChangeEvent<HTMLInputElement>) =>
      setLocalQuestions((prev) => {
        prev[idx] = {
          ...prev[idx],
          question: e.target.value,
        };
        return prev;
      });

  const handleRemoveQuestion = (idx: number) => () =>
    setLocalQuestions(localQuestions.filter((_, i) => i !== idx));

  const handleAddQuestion = () =>
    setLocalQuestions([
      ...localQuestions,
      { weight: 1, question: "New question" },
    ]);

  const handleSave = async () => configureEngagementRoll(localQuestions);

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2">
        <i className="text-muted-foreground text-xs">weight</i>
      </div>
      <div className="col-span-9">
        <i className="text-muted-foreground text-xs">question</i>
      </div>
      <div className="col-span-1"></div>
      {localQuestions.map((q, idx) => (
        <React.Fragment key={q.question + idx}>
          <Input
            type="number"
            defaultValue={q.weight}
            placeholder="1"
            onChange={handleWeightChange(idx)}
            key={"weight" + q.question + q.weight + idx}
            className="col-span-2"
          />
          <Input
            defaultValue={q.question}
            placeholder="write a question here"
            onChange={handleQuestionChange(idx)}
            key={"question" + q.question + q.weight + idx}
            className="col-span-9"
          />
          <Button
            size="icon"
            variant="outline"
            onClick={handleRemoveQuestion(idx)}
            key={"del" + q.question + q.weight + idx}
            className="col-span-1"
          >
            <Trash2 className="text-red-500" />
          </Button>
        </React.Fragment>
      ))}
      <Button
        size="sm"
        variant="outline"
        onClick={handleAddQuestion}
        className="col-span-4"
      >
        <Plus /> Add Entry
      </Button>
      <div className="col-span-4" />
      <Button
        size="sm"
        variant="outline"
        onClick={handleSave}
        className="col-span-4"
      >
        <Save /> Save
      </Button>
    </div>
  );
}

const EngagementRoll = {
  Dialog: {
    Wrapper: DialogWrapper,
    VoteBase: VoteDialogBase,
    ConfigureBase: ConfigureDialogBase,
  },
  Configure: ConfigureContent,
  Vote: {
    Questions,
    VoteControl,
    RollControls,
    ConfigureEngagementRollButton,
  },
};

export default EngagementRoll;
