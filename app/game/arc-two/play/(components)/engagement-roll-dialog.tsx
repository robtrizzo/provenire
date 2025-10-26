"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Zap } from "lucide-react";
import { FC, ReactNode } from "react";

interface EngagementRollDialogProps {
  children: ReactNode;
}

type EngagementRollDialog = FC<EngagementRollDialogProps> & {
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

function RollControls() {
  return <></>;
}

EngagementRollDialog.RollControls = RollControls;

export default EngagementRollDialog;
