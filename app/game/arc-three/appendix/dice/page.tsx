import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { Die } from "@/components/dice/dice";
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

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Dice</TypographyH1>
      <TypographyH2>Aptitude Dice</TypographyH2>
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
      <TypographyH2>Skill Dice</TypographyH2>
      <TypographyP>
        <b>
          <code>level 1</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-200">skill die</code>:
      </TypographyP>
      <Die size={64} die={SkillDice[1]} />
      <TypographyP>
        <b>
          <code>level 2</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-200">skill die</code>:
      </TypographyP>
      <Die size={64} die={SkillDice[2]} />
      <TypographyP>
        <b>
          <code>level 3</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-200">skill die</code>:
      </TypographyP>
      <Die size={64} die={SkillDice[3]} />
      <TypographyP>
        <b>
          <code>level 4</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-200">skill die</code>:
      </TypographyP>
      <Die size={64} die={SkillDice[4]} />
      <TypographyH2>Bond Dice</TypographyH2>
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
      <TypographyH2>Bonus Dice</TypographyH2>
      <TypographyP>
        <code className="text-emerald-900 dark:text-emerald-200">push die</code>
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
      <TypographyH2>Fortune Dice</TypographyH2>
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
    </>
  );
}
