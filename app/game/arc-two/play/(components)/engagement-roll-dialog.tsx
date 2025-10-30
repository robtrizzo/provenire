"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Dices, X, Zap } from "lucide-react";
import { FC, ReactNode } from "react";

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
    <div className="flex gap-2">
      {children}
      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline">
          <Check />
        </Button>
        <Button size="icon" variant="outline">
          <X />
        </Button>
      </div>
    </div>
  );
}

function DiceDisplay() {
  return (
    <>
      <Dices /> {1}
    </>
  );
}

function RollControls() {
  return (
    <Button>
      <DiceDisplay /> Roll
    </Button>
  );
}

EngagementRollDialog.RollControls = RollControls;
EngagementRollDialog.Questions = Questions;

export default EngagementRollDialog;
