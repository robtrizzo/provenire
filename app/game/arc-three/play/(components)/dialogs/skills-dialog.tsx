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
import { SkillDice } from "@/lib/dice";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookOpen } from "lucide-react";

export default function SkillsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>Skills</DialogTitle>
        </VisuallyHidden>
        <TypographyP>
          <b>
            <code>level 1</code>
          </b>{" "}
          <code className="text-violet-900 dark:text-violet-200">
            skill die
          </code>
          :
        </TypographyP>
        <Die size={64} die={SkillDice[1]} />
        <TypographyP>
          <b>
            <code>level 2</code>
          </b>{" "}
          <code className="text-violet-900 dark:text-violet-200">
            skill die
          </code>
          :
        </TypographyP>
        <Die size={64} die={SkillDice[2]} />
        <TypographyP>
          <b>
            <code>level 3</code>
          </b>{" "}
          <code className="text-violet-900 dark:text-violet-200">
            skill die
          </code>
          :
        </TypographyP>
        <Die size={64} die={SkillDice[3]} />
        <TypographyP>
          <b>
            <code>level 4</code>
          </b>{" "}
          <code className="text-violet-900 dark:text-violet-200">
            skill die
          </code>
          :
        </TypographyP>
        <Die size={64} die={SkillDice[4]} />
      </DialogContent>
    </Dialog>
  );
}
