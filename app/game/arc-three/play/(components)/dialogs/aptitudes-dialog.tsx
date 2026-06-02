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
import { AbilityDice } from "@/lib/dice";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookOpen } from "lucide-react";

export default function AptitudesDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Aptitudes</DialogTitle>
        </VisuallyHidden>
        <TypographyP>
          <b>
            <code>level 0</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AbilityDice[0]} />
        <TypographyP>
          <b>
            <code>level 1</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AbilityDice[1]} />
        <TypographyP>
          <b>
            <code>level 2</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AbilityDice[2]} />
        <TypographyP>
          <b>
            <code>level 3</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AbilityDice[3]} />
      </DialogContent>
    </Dialog>
  );
}
