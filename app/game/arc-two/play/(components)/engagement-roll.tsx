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
import { EngagementRollQuestion } from "@/types/roll";
import { Check, Cog, Dices, Plus, Save, Trash2, X, Zap } from "lucide-react";
import { ChangeEvent, FC, ReactNode, useState } from "react";

interface EngagementRollDialogProps {
  children: ReactNode;
}

interface VoteControlsProps {
  children: ReactNode;
  weight: number;
}

type EngagementRollDialog = FC<EngagementRollDialogProps> & {
  DiceDisplay: FC;
  Questions: FC;
  RollControls: FC;
  ConfigureEngagementRollButton: FC;
};

type EngagementRollConfiguration = {
  Dialog: FC;
  Content: FC;
};

type EngagementRoll = {
  Dialog: EngagementRollDialog;
  Configure: EngagementRollConfiguration;
};

const EngagementRollDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Zap /> Engagement Roll
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Engagement Roll</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

function Questions() {
  return (
    <div className="flex flex-col">
      <VoteControls weight={1}>
        <span>Is this operation particularly bold or daring?</span>
      </VoteControls>
      <VoteControls weight={-1}>
        <span>
          Is this operation overly complex or contingent on many factors?
        </span>
      </VoteControls>
    </div>
  );
}

function VoteControls({ children, weight }: VoteControlsProps) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">{children}</div>
      <div className="col-span-3 flex justify-end items-center gap-2">
        <div className="relative">
          <Button size="icon" variant="outline">
            <Check />
          </Button>
          <Badge className="absolute bottom-[-5px] right-[-5px] ml-1 rounded-full px-1 py-0 bg-secondary-500/80 font-mono text-green-500 border-primary border-[1px]">
            1
          </Badge>
        </div>
        <div className="relative">
          <Button size="icon" variant="outline">
            <X />
          </Button>
          <Badge className="absolute bottom-[-5px] right-[-5px] ml-1 rounded-full px-1 py-0 bg-secondary-500/80 font-mono text-red-500 border-primary border-[1px]">
            1
          </Badge>
        </div>
      </div>
    </div>
  );
}

function DiceDisplay() {
  return (
    <>
      <Dices />
    </>
  );
}

function RollControls() {
  return (
    <Button>
      <DiceDisplay /> Roll ( {1} )
    </Button>
  );
}

function ConfigureDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Cog /> Configure Engagement Roll
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Configure Engagement Roll</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
}

function ConfigureContent() {
  const [questions, setQuestions] = useState<EngagementRollQuestion[]>([
    { weight: 1, question: "test" },
  ]);

  const handleWeightChange =
    (idx: number) => (e: ChangeEvent<HTMLInputElement>) =>
      setQuestions((prev) => {
        prev[idx] = {
          ...prev[idx],
          weight: Number(e.target.value),
        };
        return prev;
      });

  const handleQuestionChange =
    (idx: number) => (e: ChangeEvent<HTMLInputElement>) =>
      setQuestions((prev) => {
        prev[idx] = {
          ...prev[idx],
          question: e.target.value,
        };
        return prev;
      });

  const handleRemoveQuestion = (idx: number) => () =>
    setQuestions(questions.filter((_, i) => i !== idx));

  const handleAddQuestion = () =>
    setQuestions([...questions, { weight: 1, question: "New question" }]);

  const handleSave = () => {};

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2">
        <i className="text-muted-foreground text-xs">weight</i>
      </div>
      <div className="col-span-9">
        <i className="text-muted-foreground text-xs">question</i>
      </div>
      <div className="col-span-1"></div>
      {questions.map((q, idx) => (
        <>
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
        </>
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

EngagementRollDialog.RollControls = RollControls;
EngagementRollDialog.Questions = Questions;

const EngagementRoll = {
  Dialog: EngagementRollDialog,
  Configure: {
    Dialog: ConfigureDialog,
    Content: ConfigureContent,
  },
};

export default EngagementRoll;
