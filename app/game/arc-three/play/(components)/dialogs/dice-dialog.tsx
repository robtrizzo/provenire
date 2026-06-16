"use client";

import { Die } from "@/components/dice/dice";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { BookOpen } from "lucide-react";
import {
  AldamDie,
  AptitudeDice,
  BondDice,
  DonumDie,
  FortuneDice,
  PushDie,
  SkillDice,
  TransformationDie,
} from "@/lib/dice";

export default function DiceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <BookOpen />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-160 overflow-y-auto">
        <VisuallyHidden>
          <DialogTitle>Dice</DialogTitle>
        </VisuallyHidden>
        <TypographyH2>Dice</TypographyH2>
        <TypographyH3>Aptitude Dice</TypographyH3>
        <TypographyP>
          <b>
            <code>level 0</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AptitudeDice[0]} />
        <TypographyP>
          <b>
            <code>level 1</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AptitudeDice[1]} />
        <TypographyP>
          <b>
            <code>level 2</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AptitudeDice[2]} />
        <TypographyP>
          <b>
            <code>level 3</code>
          </b>{" "}
          <code className="text-yellow-900 dark:text-yellow-200">
            aptitude die
          </code>
          :
        </TypographyP>
        <Die size={64} die={AptitudeDice[3]} />
        <TypographyH3>Skill Dice</TypographyH3>
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
        <TypographyH3>Bond Dice</TypographyH3>
        <TypographyP>
          <b>
            <code>level 0</code>
          </b>{" "}
          <code className="text-sky-900 dark:text-sky-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[0]} />
        <TypographyP>
          <b>
            <code>level 1</code>
          </b>{" "}
          <code className="text-sky-900 dark:text-sky-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[1]} />
        <TypographyP>
          <b>
            <code>level 2</code>
          </b>{" "}
          <code className="text-sky-900 dark:text-sky-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[2]} />
        <TypographyP>
          <b>
            <code>level 3</code>
          </b>{" "}
          <code className="text-sky-900 dark:text-sky-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[3]} />
        <TypographyP>
          <b>
            <code>level 4</code>
          </b>{" "}
          <code className="text-sky-900 dark:text-sky-200">bond die</code>:
        </TypographyP>
        <Die size={64} die={BondDice[4]} />
        <TypographyH3>Bonus Dice</TypographyH3>
        <TypographyP>
          <code className="text-emerald-900 dark:text-emerald-200">
            push die
          </code>
          :
        </TypographyP>
        <Die size={64} die={PushDie} />
        <TypographyP>
          <code className="text-red-900 dark:text-red-200">aldam die</code>:
        </TypographyP>
        <Die size={64} die={AldamDie} />
        <TypographyP>
          <code className="text-orange-900 dark:text-orange-200">
            transformation die
          </code>
          :
        </TypographyP>
        <Die size={64} die={TransformationDie} />
        <TypographyP>
          <code className="text-fuchsia-900 dark:text-fuchsia-200">
            donum die
          </code>
          :
        </TypographyP>
        <Die size={64} die={DonumDie} />
        <TypographyH3>Fortune Dice</TypographyH3>
        <TypographyP>
          <b>
            <code>level 0</code>
          </b>{" "}
          <code className="text-gray-900 dark:text-gray-200">fortune die</code>:
        </TypographyP>
        <Die size={64} die={FortuneDice[0]} />
        <TypographyP>
          <b>
            <code>level 1</code>
          </b>{" "}
          <code className="text-gray-900 dark:text-gray-200">fortune die</code>:
        </TypographyP>
        <Die size={64} die={FortuneDice[1]} />
      </DialogContent>
    </Dialog>
  );
}
