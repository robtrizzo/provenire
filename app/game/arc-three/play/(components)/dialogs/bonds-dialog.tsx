"use client";

import { Die } from "@/components/dice/dice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TypographyP } from "@/components/ui/typography";
import { BondDice } from "@/lib/dice";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookOpen } from "lucide-react";

export default function BondsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Bonds</DialogTitle>
        </VisuallyHidden>
        <TypographyP>
          <b>
            <code>level 0</code>
          </b>{" "}
          <code className="text-cyan-900 dark:text-cyan-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[0]} />
        <TypographyP>
          <b>
            <code>level 1</code>
          </b>{" "}
          <code className="text-cyan-900 dark:text-cyan-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[1]} />
        <TypographyP>
          <b>
            <code>level 2</code>
          </b>{" "}
          <code className="text-cyan-900 dark:text-cyan-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[2]} />
        <TypographyP>
          <b>
            <code>level 3</code>
          </b>{" "}
          <code className="text-cyan-900 dark:text-cyan-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[3]} />
        <TypographyP>
          <b>
            <code>level 4</code>
          </b>{" "}
          <code className="text-cyan-900 dark:text-cyan-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[4]} />
      </DialogContent>
    </Dialog>
  );
}
