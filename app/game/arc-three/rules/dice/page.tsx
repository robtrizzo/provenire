import ActionDot from "@/app/blog/posts/funky-dice/(components)/action-dot";
import SampleActions from "@/app/blog/posts/funky-dice/(components)/sample-actions";
import {
  CritBorderGradient,
  D6,
  InlineSymbol,
} from "@/components/dice/dice-borders";
import {
  Advantage,
  Theta,
  ThetaDouble,
  ThetaTriple,
  Threat,
  ThreatSpread,
} from "@/components/dice/dice-symbols";
import { Die, DieFace } from "@/components/dice/dice";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyOrderedList,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import {
  AptitudeDice,
  AldamDie,
  BondDice,
  DonumDie,
  PushDie,
  SkillDice,
  TransformationDie,
} from "@/lib/dice";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Dice</TypographyH1>
      <TypographyP>
        From Arc 2 to Arc 3 of our game we&apos;re making a transition from
        traditional six sided dice to something weirder. This page will teach
        you the new system!
      </TypographyP>
      <TypographyH2>The prior system</TypographyH2>
      <TypographyP>
        Before we jump directly into the new system, this section will walk
        through how the current dice work. If you have a good grasp of this,
        feel free to skip ahead!
      </TypographyP>
      <TypographyP>
        This dice system is first inspired by Forged in the Dark (FitD). This is
        an{" "}
        <b>
          <code>Xd6</code>
        </b>{" "}
        dice pool system. A few key changes have been made to that structure.
      </TypographyP>
      <TypographyP>
        First, in this system, each skill can only have up to 2 dice rather than
        FitD&apos;s 4. Second, the character&apso;s skills are split up into
        Left and Right sides of the sheet. Each roll can include one skill from
        the left and one from the right. Lastly, dice are color coded as{" "}
        <b className="text-red-500">
          <code>red</code>
        </b>{" "}
        or{" "}
        <b className="text-blue-500">
          <code>blue</code>
        </b>{" "}
        where{" "}
        <b className="text-red-500">
          <code>red</code>
        </b>{" "}
        indicates reduced effect. On the character sheet that ends up looking
        like:
      </TypographyP>
      <div className="p-6">
        <SampleActions />
      </div>
      <TypographyP>
        What the dots represent is the color of die you roll when you use that
        action. <ActionDot className="bg-red-500" /> represents rolling a die
        with reduced effect on a success where{" "}
        <ActionDot className="bg-blue-500" /> has full effect. A <ActionDot />{" "}
        means you have{" "}
        <b>
          <code>0d</code>
        </b>{" "}
        in that action and you roll{" "}
        <b>
          <code>2d6</code>
        </b>{" "}
        with disadvantage and reduced effect. When rolling, players pick up to
        two actions, one from each side of the sheet. <ActionDot /> are ignored
        if there are other red or blue dice in the pool.
      </TypographyP>
      <TypographyP>
        Other than the action scores, using an ability or getting an assist can
        add either a <ActionDot className="bg-red-500" /> or{" "}
        <ActionDot className="bg-blue-500" /> circumstantially. Pushing yourself
        or taking <i>the devil&apos;s bargain</i> always grants a{" "}
        <ActionDot className="bg-blue-500" />. And now you&apos;re all caught
        up!
      </TypographyP>
      <TypographyH2>The new system</TypographyH2>
      <TypographyP>
        Where it looks radically different at first, this new system adopts
        (what are in my opinion) the best parts of FitD, Genesys, and my own
        system. So let&apos;s go step by step!
      </TypographyP>
      <TypographyH3>How to read the runes</TypographyH3>
      <div className="my-2 flex gap-4">
        <D6 size={84}>
          <Theta />
        </D6>
        <D6 size={84}>
          <ThetaDouble />
        </D6>
        <D6 size={84}>
          <ThetaTriple />
        </D6>
        <TypographyP className="font-serif text-md">
          <b>Success (Reduced / Standard / Enhanced Effect)</b>
        </TypographyP>
      </div>
      <TypographyP>
        These symbols represent the character succeeding at what they were
        doing. The fact that there are three versions of success allows for a
        continuity with the red/blue die system the players are already familiar
        with. As a reminder, a success on a red die results in reduced effect
        where success on a blue die results in standard effect. So the last
        success symbol (Enhanced Effect) is a new addition.
      </TypographyP>
      <div className="my-2 flex gap-4">
        <D6 size={84}>
          <Threat />
        </D6>
        <TypographyP className="font-serif text-md">
          <b>Threat</b>
        </TypographyP>
      </div>
      <TypographyP>
        This represents a consequence or complication occurring, identical to
        how FitD handles rolling a{" "}
        <b>
          <code>1-5</code>
        </b>
        .
      </TypographyP>
      <div className="my-2 flex gap-4">
        <D6 size={84}>
          <Advantage />
        </D6>
        <TypographyP className="font-serif text-md">
          <b>Advantage</b>
        </TypographyP>
      </div>
      <TypographyP>
        This represents an additional benefit, stroke of luck, or generated
        resource for a player - but always tangential to success!
      </TypographyP>
      <TypographyP>
        All of these symbols can be combined as well so that a single face could
        even indicate a success, threat, and advantage all at once! Here&apos;s
        a complete set of the possible die faces.
      </TypographyP>
      <div className="flex my-4">
        <div className="flex gap-2 mx-auto">
          <div className="flex flex-col gap-2">
            <D6 size={84}></D6>
            <D6 size={84}>
              <Theta />
            </D6>
            <D6 size={84}>
              <ThetaDouble />
            </D6>
            <D6 size={84}>
              <ThetaTriple />
            </D6>
          </div>
          <div className="flex flex-col gap-2">
            <D6 size={84}>
              <Threat />
            </D6>
            <D6 size={84}>
              <>
                <ThreatSpread />
                <Theta />
              </>
            </D6>
            <D6 size={84}>
              <>
                <ThreatSpread />
                <ThetaDouble />
              </>
            </D6>
            <D6 size={84}>
              <>
                <ThreatSpread />
                <ThetaTriple />
              </>
            </D6>
          </div>
          <div className="flex flex-col gap-2">
            <D6 size={84}>
              <Advantage />
            </D6>
            <D6 size={84}>
              <>
                <Advantage />
                <Theta />
              </>
            </D6>
            <D6 size={84}>
              <>
                <Advantage />
                <ThetaDouble />
              </>
            </D6>
            <D6 size={84}>
              <>
                <Advantage />
                <ThetaTriple />
              </>
            </D6>
          </div>
          <div className="flex flex-col gap-2">
            <D6 size={84}>
              <>
                <ThreatSpread />
                <Advantage />
              </>
            </D6>
            <D6 size={84}>
              <>
                <ThreatSpread />
                <Advantage />
                <Theta />
              </>
            </D6>
            <D6 size={84}>
              <>
                <ThreatSpread />
                <Advantage />
                <ThetaDouble />
              </>
            </D6>
            <D6 size={84}>
              <>
                <ThreatSpread />
                <Advantage />
                <ThetaTriple />
              </>
            </D6>
          </div>
        </div>
      </div>
      <TypographyH3>The dice</TypographyH3>
      <TypographyP>
        Okay so we&apos;ve gone over the symbols that can be on the dice, but
        what are the dice actually? Let&apos;s start with what the dice are in
        the original system with red/blue dice that range from{" "}
        <b>
          <code>1-6</code>
        </b>
        .
      </TypographyP>
      <TypographyH4>Original dice</TypographyH4>
      <TypographyP>
        Say we were just using the symbols to replicate our original
        system&apos;s red die. We&apos;d only need 3 of the 16 symbols.
      </TypographyP>
      <div className="mt-2 px-4">
        <Die
          die={{
            variant: "default",
            faces: ["t", "t", "t", "t:r", "t:r", "ec:r"],
          }}
        />
      </div>
      <TypographyP>So a blue die would be...</TypographyP>
      <div className="mt-2 px-4">
        <Die
          die={{
            variant: "default",
            faces: ["t", "t", "t", "t:s", "t:s", "ec:s"],
          }}
        />
      </div>
      <TypographyP>
        Right now you might be wondering -{" "}
        <i>
          &quot;Hey what&apos;s that glimmering border on the last face?&quot;
        </i>{" "}
        That&apos;s a good question. That indicates the die is a crit candidate
        - meaning you need to roll at least three of those to crit. This works
        the same way as needing to roll at least two{" "}
        <b>
          <code>6s</code>
        </b>{" "}
        worked before.
      </TypographyP>
      <TypographyH4>So what&apos;s actually new?</TypographyH4>
      <TypographyP>
        I&apos;ve demonstrated how the new symbols could be used to achieve the
        dice we already use, but we won&apos;t be using those dice. Instead,
        we&apos;ll be creating distinctions between die{" "}
        <b>
          <code>type</code>
        </b>{" "}
        and die{" "}
        <b>
          <code>level</code>
        </b>
        .
      </TypographyP>
      <TypographyP>
        Let&apos;s get into it, starting with die{" "}
        <b>
          <code>level</code>
        </b>
        . Just as before, players can upgrade their dice rather than just
        accumulating more. Except instead of upgrading from <ActionDot /> to{" "}
        <ActionDot className="bg-red-500" /> to{" "}
        <ActionDot className="bg-blue-500" />, players can level their actions
        from{" "}
        <b>
          <code>level 0</code>
        </b>{" "}
        to{" "}
        <b>
          <code>level 4</code>
        </b>
        .
      </TypographyP>
      <TypographyP>
        What does a die level mean? Well, it means the die gets some or more of:
        better odds of success, higher effects of success, higher chance of
        advantage, or lower odds of threats.
      </TypographyP>
      <TypographyH4>Aptitude Dice</TypographyH4>
      <TypographyP>
        Let&apos;s begin with{" "}
        <code className="text-amber-900 dark:text-amber-200">
          aptitude dice
        </code>
        . We&apos;ll get into what the{" "}
        <code className="text-amber-900 dark:text-amber-200">aptitude</code>{" "}
        <b>
          <code>type</code>
        </b>{" "}
        means later.
      </TypographyP>
      <TypographyP>
        This is the{" "}
        <b>
          <code>level 0</code>
        </b>{" "}
        <code className="text-amber-900 dark:text-amber-200">aptitude die</code>
        :
      </TypographyP>
      <Die die={AptitudeDice[0]} />
      <TypographyP>
        You&apos;ll notice a few things about it right off the bat.
      </TypographyP>
      <TypographyOrderedList>
        <li>there&apos;s a threat on every face</li>
        <li>there are only two success faces</li>
        <li>there&apos;s no crit border</li>
      </TypographyOrderedList>
      <TypographyP>
        That&apos;s right. This die is <b>bad</b>! With a single die it
        represents what it&apos;s like to roll{" "}
        <b>
          <code>0d</code>
        </b>{" "}
        in FitD (
        <b>
          <code>2d6</code>
        </b>{" "}
        with disadvantage). Don&apos;t worry, you won&apos;t have to do this
        often (I hope!)
      </TypographyP>
      <TypographyP>
        Instead, you&apos;ll often be rolling a{" "}
        <b>
          <code>level 1</code>
        </b>{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        :
      </TypographyP>
      <Die die={AptitudeDice[1]} />
      <TypographyP>
        As you can see, this one is <i className="mr-1">still</i> worse than a
        red die. That&apos;s true, but fear not, you can go higher.
      </TypographyP>
      <TypographyP>
        <b>
          <code>level 2</code>
        </b>{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        :
      </TypographyP>
      <Die die={AptitudeDice[2]} />
      <TypographyP>
        <b>
          <code>level 3</code>
        </b>{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        :
      </TypographyP>
      <Die die={AptitudeDice[3]} />
      <TypographyP>
        Okay, so by the time you max out your{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        , you have the equivalent of a blue die in the original system. What is
        this, if not just a nerf?!
      </TypographyP>
      <TypographyP>
        Don&apos;t get your pitchforks and torches yet, stay with me.
      </TypographyP>
      <TypographyP>
        Let&apos;s talk about die{" "}
        <b>
          <code>type</code>
        </b>{" "}
        now.{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          Aptitude dice
        </code>{" "}
        will come from actions (now coined{" "}
        <code className="text-yellow-900 dark:text-yellow-200">aptitudes</code>)
        on the left-hand side of your character sheet.{" "}
        <code className="text-yellow-900 dark:text-yellow-200">Aptitudes</code>{" "}
        will be generally applicable to situations.
      </TypographyP>
      <TypographyP>
        You won&apos;t often run into a circumstance where none of your{" "}
        <code className="text-yellow-900 dark:text-yellow-200">aptitudes</code>{" "}
        apply. But sometimes you will, and in that case you&apos;ll roll a{" "}
        <b>
          <code>level 0</code>
        </b>{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        .
      </TypographyP>
      <TypographyP>
        Characters will start the game with{" "}
        <b>
          <code>5</code>
        </b>{" "}
        <code className="text-yellow-900 dark:text-yellow-200">aptitudes</code>{" "}
        they share in common and{" "}
        <b>
          <code>1</code>
        </b>{" "}
        that is unique to them.
      </TypographyP>
      <TypographyH4>Skill Dice</TypographyH4>
      <TypographyP>
        Next are{" "}
        <code className="text-violet-900 dark:text-violet-300">skill dice</code>
        . These will be on the right-hand side of your character sheet and will
        be more specifically applicable to situations.{" "}
        <code className="text-violet-900 dark:text-violet-300">Skill dice</code>{" "}
        can only be rolled when combined with an{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>{" "}
        or <code className="text-green-900 dark:text-green-300">push die</code>{" "}
        (more on that later), so there&apos;s no such thing as a{" "}
        <b>
          <code>level 0</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-300">skill die</code>.
      </TypographyP>
      <TypographyP>
        Each character will likely have a unique set of{" "}
        <code className="text-violet-900 dark:text-violet-300">skills</code>
        that give them distinct advantages from one another. Speaking of
        advantages,{" "}
        <code className="text-violet-900 dark:text-violet-300">
          skill dice
        </code>{" "}
        are where we first encounter the <b>Advantage</b> symbol.
      </TypographyP>
      <TypographyP>
        <b>
          <code>level 1</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-300">skill die</code>:
      </TypographyP>
      <Die die={SkillDice[1]} />
      <TypographyP>
        You may have noticed a few distinctions between this die and its
        <b>
          <code>level 1</code>
        </b>{" "}
        counterpart in the{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude dice
        </code>
        .
      </TypographyP>
      <TypographyOrderedList>
        <li>there&apos;s a blank face</li>
        <li>there&apos;s a face with an advantage</li>
        <li>there&apos;s already a full success face</li>
      </TypographyOrderedList>
      <TypographyP>
        Are{" "}
        <code className="text-violet-900 dark:text-violet-300">skill dice</code>{" "}
        just stronger than{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude dice
        </code>
        ? Yes and no. Let&apos;s look at the progression for{" "}
        <code className="text-violet-900 dark:text-violet-300">skill dice</code>
        .
      </TypographyP>
      <TypographyP>
        <b>
          <code>level 2</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-300">skill die</code>:
      </TypographyP>
      <Die die={SkillDice[2]} />
      <TypographyP>
        <b>
          <code>level 3</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-300">skill die</code>:
      </TypographyP>
      <Die die={SkillDice[3]} />
      <TypographyP>
        <b>
          <code>level 4</code>
        </b>{" "}
        <code className="text-violet-900 dark:text-violet-300">skill die</code>:
      </TypographyP>
      <Die die={SkillDice[4]} />
      <TypographyP>
        <b>
          <code>level 4</code>
        </b>{" "}
        is looking pretty awesome: enhanced effect, advantages, less threat
        faces. But it never gains a third success face. This is the
        counterbalance and what will keep progression feeling powerful without
        skewing the odds of success too high.
      </TypographyP>
      <TypographyH4>Push Dice</TypographyH4>
      <TypographyP>
        Let&apos;s talk about the{" "}
        <code className="text-green-900 dark:text-green-300">push die</code>{" "}
        now. You can gain it by pushing yourself (costing 2 stress) or taking{" "}
        <i>the devil&apos;s bargain</i>! It doesn&apos;t have levels.
      </TypographyP>
      <Die die={PushDie} />
      <TypographyP>
        In the original system, pushing yourself granted a bonus blue die. So,
        what&apos;s with this one? Well, it&apos;s better and worse. But
        importantly, it doesn&apos;t have three success faces - which would make
        higher success chance more accessible than is healthy for the game.
        Instead, enjoy your access to advantage and enhanced effect!
      </TypographyP>
      <TypographyP>
        There are a few other dice which can be added to your rolls in certain
        circumstances. You will either have abilities which explicitly tell you
        to add one of these to a roll or we can use these in circumstances where
        it makes sense that a power would grant you a bonus but there&apos;s no
        explicit rule for it. These dice have no levels.
      </TypographyP>
      <TypographyP>
        <code className="text-red-900 dark:text-red-300">aldam die</code>
      </TypographyP>
      <Die die={AldamDie} />
      <TypographyP>
        <code className="text-fuchsia-900 dark:text-fuchsia-300">
          donum die
        </code>
      </TypographyP>
      <Die die={DonumDie} />
      <TypographyP>
        <code className="text-orange-900 dark:text-orange-300">
          transformation die
        </code>
      </TypographyP>
      <Die die={TransformationDie} />
      <TypographyH4>Bond Dice</TypographyH4>
      <TypographyP>
        Next up, let&apos;s talk about a system which has always been worth
        tinkering with in this game: bonds. They&apos;ve always been a tad
        awkward. So we&apos;re taking another crack at it with the{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>. This
        one can range from{" "}
        <b>
          <code>level 0</code>
        </b>
        , representing someone you don&apos;t really like who&apos;s helping you
        out, all the way to{" "}
        <b>
          <code>level 4</code>
        </b>
        , which is someone you&apos;re probably a big fan of. And I hope talking
        about the{" "}
        <b>
          <code>level</code>
        </b>{" "}
        sounds natural, because just like how actions are no longer{" "}
        <ActionDot /> / <ActionDot className="bg-red-500" /> /{" "}
        <ActionDot className="bg-blue-500" />, it&apos;s the same deal for
        bonds.
      </TypographyP>
      <TypographyP>
        <b>
          <code>level 0</code>
        </b>{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>:
      </TypographyP>
      <Die die={BondDice[0]} />
      <TypographyP>
        <b>
          <code>level 1</code>
        </b>{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>:
      </TypographyP>
      <Die die={BondDice[1]} />
      <TypographyP>
        <b>
          <code>level 2</code>
        </b>{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>:
      </TypographyP>
      <Die die={BondDice[2]} />
      <TypographyP>
        <b>
          <code>level 3</code>
        </b>{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>:
      </TypographyP>
      <Die die={BondDice[3]} />
      <TypographyP>
        <b>
          <code>level 4</code>
        </b>{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>:
      </TypographyP>
      <Die die={BondDice[4]} />
      <TypographyP>
        As you can probably tell,{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond dice</code>{" "}
        primarily grant <b>Advantage</b>, but with a small chance of causing a{" "}
        <b>Threat</b> or granting success.
      </TypographyP>
      <TypographyP>
        You might be left with a few questions like{" "}
        <i>&quot;What do the blank faces actually do?&quot;</i>{" "}
        <i>
          &quot;What is <b className="mr-1">Advantage</b> for?&quot;
        </i>{" "}
        <i>&quot;What does advancement look like?&quot;</i>
      </TypographyP>
      <TypographyP>
        Let&apos;s get into all that, starting with the blank faces after a
        brief tangent.
      </TypographyP>
      <TypographyH4>Resistance</TypographyH4>
      <TypographyP>
        In FitD, players can choose to <b>resist</b> consequences, rolling some
        dice and paying a stress cost. In our original system, players choose
        what two actions they use to make their resistance roll. That&apos;s
        worked out quite well, but I&apos;ve noticed two patterns.
      </TypographyP>
      <TypographyOrderedList>
        <li>
          rolling the same two actions for the <b>action roll</b> and the{" "}
          <b>resistance roll</b>
        </li>
        <li>
          wondering how proactive actions fit into <b>resistance rolls</b>
        </li>
      </TypographyOrderedList>
      <TypographyP>
        Neither of these are too big a deal in the end, but it makes me want
        more simplicity. So now instead of ever needing a <b>resistance roll</b>
        , the stress cost of <b>resisting</b> is the number of{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>{" "}
        faces they rolled. Which brings us back to those blank faces! Where it
        doesn&apos;t improve your odds of success, it isn&apos;t a stress
        you&apos;d have to pay in the event of a consequence you want to{" "}
        <b>resist</b>.
      </TypographyP>
      <TypographyP>
        As always, <b>resisting</b> is optional. And in certain circumstances
        (like desperate positions), I may increase the cost by 1. But overall,
        this should streamline things.
      </TypographyP>
      <TypographyP>Let&apos;s walk through a few examples.</TypographyP>
      <TypographyP>
        <b>
          <u>Example one</u>
        </b>
      </TypographyP>
      <div className="p-4 flex gap-1">
        <DieFace face="t" variant="aptitude" />
        <DieFace face="t:r" variant="aptitude" />
        <DieFace face="ta" variant="skill" />
        <DieFace face="_" variant="bond" />
      </div>
      <TypographyP>
        In this case the player rolled two{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude dice
        </code>
        , a{" "}
        <code className="text-violet-900 dark:text-violet-300">skill die</code>,
        and a <code className="text-cyan-900 dark:text-cyan-300">bond die</code>
        . The character does succeed with reduced effect! Though they suffer a
        consequence. The player decides they&apos;d like to <b>resist</b> this
        consequence, so they count the number of{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>{" "}
        faces they rolled. In this case: 3, so it costs them 3 stress to{" "}
        <b>resist</b>.
      </TypographyP>
      <TypographyP>
        <b>
          <u>Example two</u>
        </b>
      </TypographyP>
      <div className="p-4 flex gap-1">
        <DieFace face="t" variant="aptitude" />
        <DieFace face="ec:s" variant="skill" />
        <DieFace face="ta" variant="skill" />
        <DieFace face="a" variant="bond" />
      </div>
      <TypographyP>
        In this case the player rolled an{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        , two{" "}
        <code className="text-violet-900 dark:text-violet-300">skill dice</code>
        , and a{" "}
        <code className="text-cyan-900 dark:text-cyan-300">bond die</code>. The
        character succeeds with standard effect and there are no consequences.
        No need to <b>resist</b>!
      </TypographyP>
      <TypographyP>
        <b>
          <u>Example three</u>
        </b>
      </TypographyP>
      <div className="p-4 flex gap-1">
        <DieFace face="ec:r" variant="aptitude" />
        <DieFace face="t:s" variant="skill" />
        <DieFace face="ta" variant="skill" />
        <DieFace face="_" variant="bond" />
        <DieFace face="ta:r" variant="push" />
      </div>
      <TypographyP>
        In this case the player rolled an{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>
        , two{" "}
        <code className="text-violet-900 dark:text-violet-300">skill dice</code>
        , a <code className="text-cyan-900 dark:text-cyan-300">bond die</code>,
        and a{" "}
        <code className="text-green-900 dark:text-green-300">push die</code>.
        The player is left with an interesting choice. They can choose the{" "}
        <code className="text-yellow-900 dark:text-yellow-200">
          aptitude die
        </code>{" "}
        face with reduced effect and no threat, <i>or</i> they could decide
        they&apos;d rather pick the skill die face with standard effect but a
        consequence. The player knows in advance they&apos;d have to pay 3
        stress if they want to <b>resist</b> whatever the consequence may be.
        But the Narrator won&apos;t divulge the consequence until the player has
        made their choice of die.
      </TypographyP>
      <TypographyH4>Advantage</TypographyH4>
      <TypographyP>What is it?</TypographyP>
      <TypographyP>
        <b>Advantage</b> is a resource your character can have. They can either
        have it or not have it, meaning they can hold onto only 1{" "}
        <b>Advantage</b>. If they would gain <b>Advantage</b> while they already
        have it, the new
        <b>Advantage</b> is wasted. For those of you familiar with{" "}
        <Link
          href="http://spheresofpower.wikidot.com/spheres-of-might"
          className="text-red-500 font-bold underline"
        >
          Spheres of Might
        </Link>
        , this may remind you of Martial Focus.
      </TypographyP>
      <TypographyP>How do I get it?</TypographyP>
      <TypographyP>
        Whenever you roll a die face with{" "}
        <InlineSymbol>
          <Advantage />
        </InlineSymbol>
        , you gain <b>Advantage</b>. This doesn't need to be a die face you
        select for success; any face that comes up <b>Advantage</b> grants it.
        For example,
      </TypographyP>
      <div className="p-4 flex gap-1">
        <DieFace face="t" variant="aptitude" />
        <DieFace face="ec:s" variant="skill" />
        <DieFace face="ta" variant="skill" />
        <DieFace face="a" variant="bond" />
      </div>
      <TypographyP>
        in this scenario your character succeeds with standard effect <i>and</i>{" "}
        gains <b>Advantage</b> because at least one face was marked with it. The
        fact that two faces were marked <b>Advantage</b> is just bragging points
        - only one matters.
      </TypographyP>
      <TypographyP>What can I do with it?</TypographyP>
      <TypographyP>
        <b>Advantage</b> being a binary resource creates a few ways you can use
        it. Primarily it will fuel your character&apos;s abilities. You&apos;ll
        see ability text like:
      </TypographyP>
      <TypographyUnorderedList>
        <li>
          <i>
            while you have <b>Advantage</b> you may..
          </i>
        </li>
        <li>
          <i>
            if you would gain <b>Advantage</b> while you already have it, you
            may...
          </i>
        </li>
        <li>
          <i>
            you may spend <b>Advantage</b> to...
          </i>
        </li>
      </TypographyUnorderedList>
      <TypographyP>
        Characters may also spend <b>Advantage</b> to:
      </TypographyP>
      <TypographyUnorderedList>
        <li>assist a teammate</li>
        <li>
          reduce the cost of <b>resisting</b> by 1 stress
        </li>
        <li>reduce the resource cost of an ability by 1</li>
        <li>gain a narrative edge</li>
      </TypographyUnorderedList>
      <TypographyH4>Assisting</TypographyH4>
      <TypographyP>
        Like previously discussed in the bond dice section, bonds are primarily
        added to a roll when that person is helping you. Assisting works
        identically to how it did prior: it costs players 1 stress to assit a
        character, the assisted character adds their bond with the assisting
        character to their roll.
      </TypographyP>
      <TypographyH4>Group Rolls</TypographyH4>
      <TypographyP>
        Group rolls in prior arcs were straightforwardly too good consistent at
        generating full successes and/or crits. Here&apos;s how group rolls will
        work in Arc 3:
      </TypographyP>
      <TypographyOrderedList>
        <li>A player or the Narrator prompts for a group roll</li>
        <li>
          A player volunteers to lead the roll. They spend <b>1 stress</b> and
          mark <b>1 xp</b>.
        </li>
        <li>
          At least two other players volunteer to participate. Each one spends{" "}
          <b>1 stress</b> and marks <b>1 xp</b>.
        </li>
        <li>
          Any number participating players may choose to spend <b>2 stress</b>{" "}
          to add{" "}
          <b className="text-emerald-500">
            <code>+1 push</code>
          </b>{" "}
          to the roll.
        </li>
        <li>
          The leading player makes the roll with all participating bonds and
          donated push dice.
        </li>
        <li>
          Each{" "}
          <InlineSymbol>
            <Advantage />
          </InlineSymbol>{" "}
          rolled can either be given to a participating member or spent to
          reduce the stress cost of <b>resisting</b> in the event of
          consequences.
        </li>
      </TypographyOrderedList>
      <TypographyH4>Project Rolls</TypographyH4>
      <TypographyP>
        Project rolls are advanced identically to how they were in prior arcs,
        though now they can also suffer consequences - which can be{" "}
        <b>resisted</b> as normal.
      </TypographyP>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Effect</TableHead>
            <TableHead>
              <D6 size={36}>
                <Threat />
              </D6>
            </TableHead>
            <TableHead>
              <D6 size={36}>
                <Theta />
              </D6>
            </TableHead>
            <TableHead>
              <D6 size={36}>
                <ThetaDouble />
              </D6>
            </TableHead>
            <TableHead>
              <D6 size={36}>
                <ThetaTriple />
              </D6>
            </TableHead>
            <TableHead>
              <div className="flex gap-1">
                <D6 size={36}>
                  <CritBorderGradient />
                  <Threat />
                </D6>
                <D6 size={36}>
                  <CritBorderGradient />
                  <ThetaDouble />
                </D6>
                <D6 size={36}>
                  <CritBorderGradient />
                  <ThetaTriple />
                </D6>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Limited</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Standard</TableCell>
            <TableCell>0</TableCell>
            <TableCell>1</TableCell>
            <TableCell>3</TableCell>
            <TableCell>5</TableCell>
            <TableCell>7</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Greater</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>5</TableCell>
            <TableCell>8</TableCell>
            <TableCell>12</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mb-16" />
    </>
  );
}
