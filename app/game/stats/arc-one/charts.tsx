"use client";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  LabelList,
  Pie,
  PieChart,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Roll } from "@/types/roll";
import {
  actionRollsbyResultAndShiftTransform,
  actionRollsByResultTransform,
  diceByColorAndShiftTransform,
  diceByTypeTransform,
  rollsByActionTransform,
  rollsByActtionAndTypeTransform,
  rollsByCharacterTransform,
  rollsByColorTransform,
  rollsByNumberAndColorTransform,
  rollsByNumberOfDiceByShiftTransform,
  rollsByNumberOfDiceTransform,
  rollsByNumberTransform,
  rollsByResultAndTypeTransform,
  rollsByResultTransform,
} from "@/lib/roll-transforms";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CornerLeftUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Charts({ data }: { data: Roll[] }) {
  return (
    <div className="flex flex-col w-full">
      <Breadcrumbs
        crumbs={[
          { name: "Stats", href: "#" },
          { name: "Arc One", href: "#" },
        ]}
      />
      <TypographyH1>Arc One Dice Stats</TypographyH1>
      <div className="py-8">
        <TypographyP>
          Welcome, gamers! It&apos;s not often you get to collect data on a
          roleplaying game you play in. Will it help us understand the game? Or
          will our assumptions be confirmed?{" "}
          <i>Is Jane Maire actually cursed?</i> Find out all this and more in a
          circus of lighthearted competition, wild speculation, and pretty
          colors! All in the name of fun!
        </TypographyP>
        <TypographyP>
          First off, let&apos;s take a look at the raw number of dice that got
          rolled since we started keeping track. A whopping near three thousand!
          We&apos;re truly gaming out here. Or at least, you guys are. I
          dont&apos;t even roll any!
        </TypographyP>
      </div>

      <DiceByColor data={data} />

      <div className="py-8">
        <TypographyP>
          Almost an even split, but not quite!{" "}
          <u>
            <b>
              <code>52.259%</code>
            </b>
          </u>{" "}
          of the dice guys rolled were red, with{" "}
          <u>
            <b>
              <code>47.741%</code>
            </b>
          </u>{" "}
          being blue. Makes sense to me, you guys started with mostly red dice
          in your actions.
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Onto the important questions! Did the dice screw you over? Or were
          they kind?
        </TypographyP>
      </div>

      <DiceByNumber data={data} />

      <div className="py-8">
        <TypographyP>
          Seems like a pretty even distribution, but how does it stack up to the
          average 1d6 roll of 3.5? Crunching the numbers...
        </TypographyP>
        <TypographyP>
          Turns out you guys are <i>slightly</i> unlucky!{" "}
          <u>
            <b>
              <code>0.024%</code>
            </b>
          </u>{" "}
          more unlucky than the average person, as it turns out. You got an
          average die roll of{" "}
          <u>
            <b>
              <code>3.4992</code>
            </b>
          </u>
          .
        </TypographyP>
        <TypographyP>Let&apos;s see that broken down by color!</TypographyP>
      </div>

      <DiceByNumberAndColor data={data} />

      <div className="py-8">
        <TypographyP>
          Seems like the dice stay close in proportion to the total number of
          rolled red/blue... except red seems to like 1&apos;s and blue seems to
          like 6&apos;s. <b>Conclusion: the dice just love the drama?</b>{" "}
          Let&apos;s do a little bit of math to confirm...
        </TypographyP>
        <TypographyP>
          Well it&apos;s official: red dice are worse than blue dice! Red dice
          were{" "}
          <u>
            <b>
              <code>1.489%</code>
            </b>
          </u>{" "}
          <i>less</i> lucky than the average, as opposed to blue dice which were{" "}
          <u>
            <b>
              <code>1.531%</code>
            </b>
          </u>{" "}
          <i>more</i> lucky! Guess all that pushing for bonus dice was worth it!
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Now I know what you all are really here for, I won&apos;t delay any
          longer. Let&apos;s start by taking a look at differences between the
          two shifts! Starting with the total number of rolls made (not dice!)
        </TypographyP>
      </div>

      <div className="py-8 flex justify-center items-center gap-4 w-full">
        <div className="flex flex-col items-center">
          <b className="text-6xl text-indigo-500">583</b>
          <span>Nightshift</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center">
          <b className="text-6xl text-orange-500">689</b>
          <span>Dayshift</span>
        </div>
      </div>

      <RollsByCharacter data={data} />

      <div className="py-8">
        <TypographyP>
          Seems like dayshift made more rolls overall! But it&apos;s close...
          and influenced by our highest roller - Dave! Though, this is likely
          because of all that testing he did on the rolling system.
        </TypographyP>
        <TypographyP>
          Which reminds me, these stats are only possible because of the work
          Dave put into the rolls.{" "}
          <i>A big round of applause for Dave! Thank you Dave! 🎊</i>
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          I wonder if this is any different if we look at the number of dice...
        </TypographyP>
      </div>

      <DiceByColorAndShift data={data} />

      <div className="py-8">
        <TypographyBlockquote>
          They kind of look like Poke-balls...
        </TypographyBlockquote>
        <TypographyP>
          Now that&apos;s a surprise! Despite less total rolls, Nightshift has
          rolled{" "}
          <u>
            <b>
              <code>17.8%</code>
            </b>
          </u>{" "}
          more dice! More pushing? More assists? A preference for rolls that are
          more of a sure-bet? Let&apos;s dig in and see what we find.
        </TypographyP>
        <TypographyP>
          First up, let&apos;s see what the ratios of red/blue dice are between
          the two shifts.
        </TypographyP>
      </div>

      <div className="py-8 flex justify-center items-center gap-4 w-full">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">
            <u className=" text-red-500">
              <b>
                <code>52.4%</code>
              </b>
            </u>{" "}
            /{" "}
            <u className=" text-blue-500">
              <b>
                <code>47.6%</code>
              </b>
            </u>
          </span>
          <span>Nightshift</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">
            <u className=" text-red-500">
              <b>
                <code>52.1%</code>
              </b>
            </u>{" "}
            /{" "}
            <u className=" text-blue-500">
              <b>
                <code>47.9%</code>
              </b>
            </u>
          </span>
          <span>Dayshift</span>
        </div>
      </div>
      <div className="py-8">
        <TypographyP>
          Honestly, this is surprising! I thought there would have been more of
          a difference between the two shifts, but turns out it&apos;s hardly
          marginal.
        </TypographyP>
      </div>
      <div className="py-8">
        <TypographyP>
          Let&apos;s take a look at the breakdown of dice per roll.
        </TypographyP>
      </div>

      <RollsByNumberOfDice data={data} />

      <div className="py-8">
        <TypographyP>
          Oof! That&apos;s a lot of rolls with 0 dice. You must have a mean GM
          😈. The average number of dice per roll is{" "}
          <u>
            <b>
              <code>2.23</code>
            </b>
          </u>
          !
        </TypographyP>
        <TypographyP>
          But more importantly, there were 2 rolls with{" "}
          <u>
            <b>
              <code>six dice</code>
            </b>
          </u>
          ! I&apos;m excited to find out who rolled those later.
        </TypographyP>
        <TypographyP>
          Before we get there, I want to see the roll breakdown per shift. I
          hypothesize that Nightshift has a higher average number of dice per
          roll...
        </TypographyP>
      </div>

      <RollsByNumberOfDiceByShift data={data} />

      <div className="py-8">
        <TypographyP>
          Huh, well my hypothesis isn&apos;t clear to me by the graph, but there
          are some neat takeaways before we crunch some numbers!
        </TypographyP>
        <TypographyP>
          This does confirm the roughy 100 more rolls Dayshift made than
          Nightshift. Seems Dayshift was particularly fond of rolls on either
          end of the extremes. And Nighshift really loved their 3-die rolls!{" "}
          <i>
            Though of course I think no one would complain about getting more
            dice in their rolls...
          </i>
        </TypographyP>
        <TypographyP>
          Okay the numbers are in - and I was right! Despite appearances,
          Nightshift had a higher average number of dice per roll at{" "}
          <u>
            <b>
              <code>2.256</code>
            </b>
          </u>
          . Dayshift on the other hand had an average of{" "}
          <u>
            <b>
              <code>2.206</code>
            </b>
          </u>
          . A <i className="text-xs">whopping</i>{" "}
          <u>
            <b>
              <code>2.243%</code>
            </b>
          </u>{" "}
          difference!
        </TypographyP>
      </div>
      <div className="py-8">
        <TypographyP>
          Now, sure if we put all the dice together in a big pool it all looks
          very even. But what if we look at a slightly different angle?
          Let&apos;s see what the actual roll values ended up being!
        </TypographyP>
      </div>

      <RollsByResult data={data} />

      <div className="py-8">
        <TypographyP>
          Wow, your average roll result was a{" "}
          <u>
            <b>
              <code>4.406</code>
            </b>
          </u>
          . Not to mention you guys rolled a 6{" "}
          <u>
            <b>
              <code>31.761%</code>
            </b>
          </u>{" "}
          of the time! What I choose to take away from this is that I could be
          way <i>more</i> mean ☺️.
        </TypographyP>
        <TypographyP>Okay but how many of these were action rolls?</TypographyP>
      </div>

      <div className="py-8 flex justify-center items-end gap-4 w-full">
        <div className="flex flex-col items-center gap-2">
          <b className="text-4xl text-cyan-500">245</b>
          <span>Resist</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-stone-500">66</b>
          <span>Project</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-5xl text-rose-500">841</b>
          <span>Action</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-3xl text-yellow-500">120</b>
          <span>Fortune</span>
        </div>
      </div>

      <div className="py-8 flex justify-center items-end gap-4 w-full">
        <TypographyP>
          Woah, that&apos;s a lot of action rolls! And I&apos;m surprised by the
          low number of resistance rolls as well as the high number of fortune
          rolls! Let&apos;s break theis down.
        </TypographyP>
      </div>

      <RollsByResultAndType data={data} />

      <div className="py-8 flex justify-center items-end gap-4 w-full">
        <TypographyP>
          What strikes me immediately is how even the fortune rolls are
          distributed. This would make sense if they typically have less dice
          per roll. Guess that&apos;s worth taking a look at too! But later.
          What I&apos;m most interested in right now is the proportion of
          6&apos;s for each of these types.
        </TypographyP>
      </div>

      <div className="py-8 flex justify-center items-end gap-4 w-full">
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-cyan-500">
            <u>
              <code>28.571%</code>
            </u>
          </b>
          <span>Resist</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-stone-500">
            <u>
              <code>40.909%</code>
            </u>
          </b>
          <span>Project</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-rose-500">
            <u>
              <code>33.294%</code>
            </u>
          </b>
          <span>Action</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-yellow-500">
            <u>
              <code>22.5%</code>
            </u>
          </b>
          <span>Fortune</span>
        </div>
      </div>
      <div className="py-8">
        <TypographyP>
          Yikes, fortune rolls aren&apos;t all that fortuitous! And on the
          flipside, project rolls seem to be incredibly successful... unless
          we&apos;re talking about crafting armor. It makes sense, given how you
          all patiently accrued bonus dice for your agendas!
        </TypographyP>
        <TypographyP>
          Not only that, you guys succeeded with no consequences on your action
          rolls a third of the time! I think that&apos;s a pretty good ratio,
          considering that means you guys had to deal with{" "}
          <b>
            <u>
              <code>561</code>
            </u>
          </b>{" "}
          consequences to your actions!
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Let&apos;s take a quick look at each of the roll types and how lucky
          they are.
        </TypographyP>
      </div>

      <DiceByType data={data} />

      <div className="py-8">
        <TypographyP>
          Darn, no obvious outliers here. I was hoping for some nonsense! But
          let&apos;s check and make sure.
        </TypographyP>
      </div>

      <div className="py-8 flex justify-center items-end gap-4 w-full">
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-cyan-500">
            <u>
              <code>3.378</code>
            </u>
          </b>
          <b className="text-xs text-red-500">
            <u>
              <code>-3.625%</code>
            </u>
          </b>
          <span>Resist</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-stone-500">
            <u>
              <code>3.626</code>
            </u>
          </b>
          <b className="text-xs text-green-500">
            <u>
              <code>+3.485%</code>
            </u>
          </b>
          <span>Project</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-rose-500">
            <u>
              <code>3.518</code>
            </u>
          </b>
          <b className="text-xs text-green-500">
            <u>
              <code>+0.518%</code>
            </u>
          </b>
          <span>Action</span>
        </div>
        <Separator orientation="vertical" className="h-24" />
        <div className="flex flex-col items-center gap-2">
          <b className="text-2xl text-yellow-500">
            <u>
              <code>3.516</code>
            </u>
          </b>
          <b className="text-xs text-green-500">
            <u>
              <code>+0.442%</code>
            </u>
          </b>
          <span>Fortune</span>
        </div>
      </div>

      <div className="py-8">
        <TypographyP>
          Perhaps the fortune rolls weren&apos;t so successful, but they{" "}
          <i>were</i> lucky! <span className="text-xs">(barely)</span> So...
          skill issues? 😆
        </TypographyP>
        <TypographyP>
          The <i>real</i> problem here are your resistance rolls! They were the
          source of <i>ALL</i> of your bad luck! How dare they! At least they
          can&apos;t fail.
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Let&apos;s take a deep dive into the most frequent rolls - action
          rolls!
        </TypographyP>
        <TypographyP>
          We can start with the basics. There were{" "}
          <b className="text-5xl text-rose-500 font-sans">841</b> action rolls
          and <b className="text-5xl text-rose-500 font-sans">2001</b> dice that
          were a part of those rolls - so an average of{" "}
          <b>
            <u>
              <code>2.379</code>
            </u>
          </b>{" "}
          dice per action roll. We already know that{" "}
          <b>
            <u>
              <code>33.294%</code>
            </u>
          </b>{" "}
          of those rolls ended in a full success, but what about the rest? And
          what about crits? Let&apos;s find out.
        </TypographyP>
      </div>

      <ActionRollsByResult data={data} />

      <div className="py-8">
        <TypographyP>
          Wow, the crew succeeded at what they were doing{" "}
          <b>
            <u>
              <code>77.408%</code>
            </u>
          </b>{" "}
          of the time! Hats off, you ran a tight ship. It wasn&apos;t without
          sacrifice though, this shows off that you had to suffer consequences{" "}
          <b>
            <u>
              <code>66.706%</code>
            </u>
          </b>{" "}
          of the time.
        </TypographyP>
        <TypographyP>
          As for crits - there were{" "}
          <b>
            <u>
              <code>38</code>
            </u>
          </b>{" "}
          times your enemies <i>rued the day!</i> And something I find
          fascinating is the rate of crits -{" "}
          <b>
            <u>
              <code>4.518%</code>
            </u>
          </b>
          , half a percent off of how often you&apos;d be critting in a d20
          system!
        </TypographyP>
        <TypographyP>
          I&apos;m curious though, are there any major differences between the
          two shifts?
        </TypographyP>
      </div>

      <ActionRollsByResultAndShift data={data} />

      <div className="py-8">
        <TypographyP>
          Well waddaya know, we got some differences. Let&apos;s take a look!
        </TypographyP>
      </div>

      <div className="py-8 flex flex-wrap justify-center items-center gap-8 w-full">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 items-center">
            <span className="text-pink-500">
              <b className="text-2xl">86</b>:{" "}
              <b>
                <u>
                  <code>21.446%</code>
                </u>
              </b>
            </span>
            <span className="text-cyan-500">
              <b className="text-2xl">176</b>:{" "}
              <b>
                <u>
                  <code>43.89%</code>
                </u>
              </b>
            </span>
            <span className="text-green-500">
              <b className="text-2xl">124</b>:{" "}
              <b>
                <u>
                  <code>30.923%</code>
                </u>
              </b>
            </span>
            <span className="text-amber-500">
              <b className="text-2xl">15</b>:{" "}
              <b>
                <u>
                  <code>3.741%</code>
                </u>
              </b>
            </span>
          </div>
          <span>Nightshift</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-6 items-center">
            <span className="text-pink-500">
              <b className="text-2xl">104</b>:{" "}
              <b>
                <u>
                  <code>23.636%</code>
                </u>
              </b>
            </span>
            <span className="text-cyan-500">
              <b className="text-2xl">195</b>:{" "}
              <b>
                <u>
                  <code>44.318%</code>
                </u>
              </b>
            </span>
            <span className="text-green-500">
              <b className="text-2xl">118</b>:{" "}
              <b>
                <u>
                  <code>26.818%</code>
                </u>
              </b>
            </span>
            <span className="text-amber-500">
              <b className="text-2xl">23</b>:{" "}
              <b>
                <u>
                  <code>5.227%</code>
                </u>
              </b>
            </span>
          </div>
          <span>Dayshift</span>
        </div>
      </div>
      <div className="py-8">
        <TypographyP>
          Looks like Nighshift had a slightly better go of it! Their success
          rate is{" "}
          <b>
            <u>
              <code>79.052%</code>
            </u>
          </b>{" "}
          as opposed to Dayshift&apos;s{" "}
          <b>
            <u>
              <code>76.364%</code>
            </u>
          </b>
          . Not to mention, Nightshift also suffered less consequences at{" "}
          <b>
            <u>
              <code>65.337%</code>
            </u>
          </b>{" "}
          compared to their suffering comrades at{" "}
          <b>
            <u>
              <code>67.955%</code>
            </u>
          </b>
          . But Dayshift has a pretty big silver lining! They crit substantially
          more often, making up{" "}
          <b>
            <u>
              <code>60.526%</code>
            </u>
          </b>{" "}
          of the crew&apos;s crits!
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Well that was cool and all, but now for another imporant question:{" "}
          <i>which action was the most popular?</i> I have my suspicions... 🤸
        </TypographyP>
      </div>

      <RollsByAction data={data} />

      <div className="py-8">
        <TypographyP>
          The crew used a total of{" "}
          <b>
            <u>
              <code>44</code>
            </u>
          </b>{" "}
          unique actions throughout the game! That warms my heart, you guys
          rock.
        </TypographyP>
        <TypographyP>
          Okay so acrobatics is definitely up there, but taking the top spot is{" "}
          <i>PROWL</i> which has been used in{" "}
          <b>
            <u>
              <code>230</code>
            </u>
          </b>{" "}
          rolls! You heard it here folks, worthwhile stat to level up! Wow,
          that&apos;s a solid{" "}
          <b>
            <u>
              <code>27.348%</code>
            </u>
          </b>{" "}
          of rolls.
        </TypographyP>
        <TypographyP>
          Our runner up is <i>SURVEY</i> with a total of{" "}
          <b>
            <u>
              <code>205</code>
            </u>
          </b>{" "}
          rolls, making up{" "}
          <b>
            <u>
              <code>24.376%</code>
            </u>
          </b>{" "}
          of all rolls!
        </TypographyP>
        <TypographyP>
          Let&apos;s take a look at some of the least used actions...{" "}
          <span className="text-xs">
            oh god oh fuck goddamnit I see the 4 rolls for &quot;undefined&quot;
          </span>{" "}
          anyway moving on, we have our least used action: <i>SQUEEZE</i> with{" "}
          <b>
            <u>
              <code>2</code>
            </u>
          </b>{" "}
          uses this campaign! Our runner up is <i>CROWDBREAKING</i> coming in
          with{" "}
          <b>
            <u>
              <code>5</code>
            </u>
          </b>{" "}
          uses, but no surprise, Naaza didn&apos;t have many sessions to get
          that in.
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Why don&apos;t we see if any of this changes between the shifts?
        </TypographyP>
      </div>

      <RollsByActionNightshift data={data} />
      <RollsByActionDayshift data={data} />

      <div className="py-8">
        <TypographyP>
          Well this looks about how I&apos;d expect. Nightshift reigns supreme
          on non-combat actions where Dayshift takes the killing cake! But
          let&apos;s linger on some of the findings, then differences.
        </TypographyP>
      </div>

      <div className="py-8 flex flex-wrap justify-center items-center gap-8 w-full">
        <div className="flex flex-col items-center">
          <span className="text-2xl text-indigo-500">Nightshift</span>
          <Separator className="mb-2" />
          <div className="flex gap-6 items-center">
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-amber-500">#1</span>: PROWL
              </b>
              <span>
                <b>
                  <u>
                    <code>195</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>48.628%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>511.365%</code>
                  </u>
                </b>{" "}
                more than Dayshift
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-slate-500">#2</span>: SURVEY
              </b>
              <span>
                <b>
                  <u>
                    <code>120</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>29.925%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>54.907%</code>
                  </u>
                </b>{" "}
                more than Dayshift
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-stone-500">#3</span>: ACROBATICS
              </b>
              <span>
                <b>
                  <u>
                    <code>110</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>27.431%</code>
                  </u>
                </b>
                )
              </span>
              <span>Most used skillset action!</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl text-orange-500">Dayshift</span>
          <Separator className="mb-2" />
          <div className="flex gap-6 items-center">
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-amber-500">#1</span>: CHARGE
              </b>
              <span>
                <b>
                  <u>
                    <code>167</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>37.955%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>407.352%</code>
                  </u>
                </b>{" "}
                more than Nightshift
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-slate-500">#2</span>: DEFY
              </b>
              <span>
                <b>
                  <u>
                    <code>118</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>26.818%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>110.866%</code>
                  </u>
                </b>{" "}
                more than Nightshift
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-stone-500">#3</span>: PERSUADE
              </b>
              <span>
                <b>
                  <u>
                    <code>108</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>24.545%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>58.754%</code>
                  </u>
                </b>{" "}
                more than Nightshift
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="py-8">
        <TypographyP>
          I find the parallels here very interesting! I hope this can give each
          group some insight into how the other shift operates! I&apos;d be
          interested in seeing what the breakdown is for action rolls and
          resistance rolls... let&apos;s find out!
        </TypographyP>
      </div>

      <span className="text-lg">Action Rolls</span>
      <RollsByActionAction data={data} />

      <span className="text-lg">Resistance Rolls</span>
      <RollsByActionResist data={data} />

      <div className="py-8">
        <TypographyP>
          Honestly I&apos;m not sure what I was expecting here, it&apos;s just
          fun to find out! Let&apos;s see those rankings.
        </TypographyP>
      </div>

      <div className="py-8 flex flex-wrap justify-center items-center gap-8 w-full">
        <div className="flex flex-col items-center">
          <span className="text-2xl text-rose-500">Action</span>
          <Separator className="mb-2" />
          <div className="flex gap-6 items-center">
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-amber-500">#1</span>: PROWL
              </b>
              <span>
                <b>
                  <u>
                    <code>186</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>22.117%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>38.943%</code>
                  </u>
                </b>{" "}
                more than Resists
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-slate-500">#2</span>: SURVEY
              </b>
              <span>
                <b>
                  <u>
                    <code>151</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>17.955%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-red-500">
                  <u>
                    <code>6.193%</code>
                  </u>
                </b>{" "}
                less than Resists
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-stone-500">#3</span>: CHARGE
              </b>
              <span>
                <b>
                  <u>
                    <code>141</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>16.766%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-red-500">
                  <u>
                    <code>10.705%</code>
                  </u>
                </b>{" "}
                less than Resists
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl text-sky-500">Resist</span>
          <Separator className="mb-2" />
          <div className="flex gap-6 items-center">
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-amber-500">#1</span>: DEFY
              </b>
              <span>
                <b>
                  <u>
                    <code>69</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>28.163%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>166.115%</code>
                  </u>
                </b>{" "}
                more than Actions
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-slate-500">#2</span>: SURVEY
              </b>
              <span>
                <b>
                  <u>
                    <code>47</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>19.185%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>6.193%</code>
                  </u>
                </b>{" "}
                more than Actions
              </span>
            </span>
            <span className="flex flex-col items-center">
              <b className="text-2xl">
                <span className="text-stone-500">#3</span>: CHARGE
              </b>
              <span>
                <b>
                  <u>
                    <code>46</code>
                  </u>
                </b>{" "}
                rolls (
                <b>
                  <u>
                    <code>18.776%</code>
                  </u>
                </b>
                )
              </span>
              <span>
                <b className="text-green-500">
                  <u>
                    <code>10.705%</code>
                  </u>
                </b>{" "}
                more than Actions
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="py-8">
        <TypographyP>
          A higher ratio of Charge in resists? I didn&apos;t see <i>that</i>{" "}
          coming. Cool! As for the rest - it seems the crew is more intent on
          using Prowl to solve problems than get out of trouble. And Survey is
          the winner of most versatile action!
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>
          Now for the moment you&apos;ve been waiting for - what do these
          numbers look like for each character? Let&apos;s find out if Jane
          Marie is cursed!
        </TypographyP>
      </div>

      <CharacterStatsSection data={data} />

      <div className="py-8">
        <TypographyP>
          This is so cool - let&apos;s award some superlatives! 🏆
        </TypographyP>
      </div>

      <div className="flex flex-col gap-16 w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <span>
            Most dice rolled{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Malgus Veradun</span>
          <span>
            With a total of{" "}
            <b>
              <u>
                <code>433</code>
              </u>
            </b>{" "}
            dice rolled -{" "}
            <b className="text-green-500">
              <u>
                <code>49.517%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            And related, most rolls{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Malgus Veradun</span>
          <span>
            With a total of{" "}
            <b>
              <u>
                <code>186</code>
              </u>
            </b>{" "}
            rolls -{" "}
            <b className="text-green-500">
              <u>
                <code>59.718%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Reddest character{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">
            Lilya Shirin Prisca Amati
          </span>
          <span>
            Red dice made up{" "}
            <b>
              <u>
                <code>77.737%</code>
              </u>
            </b>{" "}
            of her dice pools -{" "}
            <b className="text-green-500">
              <u>
                <code>48.753%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Bluest character{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Drusa Santoris</span>
          <span>
            Blue dice made up{" "}
            <b>
              <u>
                <code>75.585%</code>
              </u>
            </b>{" "}
            of their dice pools -{" "}
            <b className="text-green-500">
              <u>
                <code>58.323%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Luckiest duck{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Malgus Veradun</span>
          <span>
            Their average die roll was{" "}
            <b>
              <u>
                <code>3.624</code>
              </u>
            </b>{" "}
            -{" "}
            <b className="text-green-500">
              <u>
                <code>3.567%</code>
              </u>
            </b>{" "}
            <i>more</i> lucky than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            And our least fortunate son{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Twenty-One</span>
          <span>
            Their average die roll was{" "}
            <b>
              <u>
                <code>3.371</code>
              </u>
            </b>{" "}
            -{" "}
            <b className="text-red-500">
              <u>
                <code>3.664%</code>
              </u>
            </b>{" "}
            <i>less</i> lucky than the party average...
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Highest roller{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">
            Lilya Shirin Prisca Amati
          </span>
          <span>
            Her average highest die was{" "}
            <b>
              <u>
                <code>4.65</code>
              </u>
            </b>{" "}
            -{" "}
            <b className="text-green-500">
              <u>
                <code>5.538%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Driver of the struggle bus{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Twenty-One</span>
          <span>
            His average highest die was{" "}
            <b>
              <u>
                <code>4.107</code>
              </u>
            </b>{" "}
            -{" "}
            <b className="text-red-500">
              <u>
                <code>6.786%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average...
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Dice gremlin{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Nail</span>
          <span>
            His average dice per roll was{" "}
            <b>
              <u>
                <code>2.698</code>
              </u>
            </b>{" "}
            -{" "}
            <b className="text-green-500">
              <u>
                <code>20.987%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Risk taker{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Malgus Veradun</span>
          <span>
            He made{" "}
            <b>
              <u>
                <code>16</code>
              </u>
            </b>{" "}
            rolls with{" "}
            <b>
              <u>
                <code>0</code>
              </u>
            </b>{" "}
            dice -{" "}
            <b className="text-green-500">
              <u>
                <code>102.638%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Remembered to click the <i>Resist</i> button{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">
            Lilya Shirin Prisca Amati
          </span>
          <span>
            <b>
              <u>
                <code>25%</code>
              </u>
            </b>{" "}
            of her rolls were resistance rolls -{" "}
            <b className="text-green-500">
              <u>
                <code>29.796%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Industrious{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Nail</span>
          <span>
            <b>
              <u>
                <code>12.95%</code>
              </u>
            </b>{" "}
            of his rolls were project rolls -{" "}
            <b className="text-green-500">
              <u>
                <code>149.566%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Ain&apos;t nobody got time for that{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Aika Drak</span>
          <span>
            Never clicked the <i>Project</i> roll button! (but we know she was
            explorin it up)
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Taking action{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Bessemer</span>
          <span>
            <b>
              <u>
                <code>78.03%</code>
              </u>
            </b>{" "}
            of his rolls were action rolls -{" "}
            <b className="text-green-500">
              <u>
                <code>18.02%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Taking a nap{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Nail</span>
          <span>
            <b>
              <u>
                <code>57.554%</code>
              </u>
            </b>{" "}
            of his rolls were action rolls -{" "}
            <b className="text-red-500">
              <u>
                <code>12.95%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Gambler{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Jonah</span>
          <span>
            <b>
              <u>
                <code>13.333%</code>
              </u>
            </b>{" "}
            of his rolls were fortune rolls -{" "}
            <b className="text-green-500">
              <u>
                <code>41.329%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Least fortunate fortunes{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">
            Liliya Shirin Prisca Amati
          </span>
          <span>
            Her fortune rolls were an average of{" "}
            <b>
              <u>
                <code>2.889</code>
              </u>
            </b>{" "}
            -{" "}
            <b className="text-red-500">
              <u>
                <code>22.96%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Concer of quences{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Merit</span>
          <span>
            She suffered consequences to her actions{" "}
            <b>
              <u>
                <code>76.316%</code>
              </u>
            </b>{" "}
            of the time -{" "}
            <b className="text-red-500">
              <u>
                <code>14.4%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Can&apos;t lose{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">
            Lilya Shirin Prisca Amati
          </span>
          <span>
            She failed{" "}
            <b>
              <u>
                <code>8.065%</code>
              </u>
            </b>{" "}
            of her actions -{" "}
            <b className="text-green-500">
              <u>
                <code>64.302%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Partialist{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Aika Drak</span>
          <span>
            <b>
              <u>
                <code>51.282%</code>
              </u>
            </b>{" "}
            of her actions were partial successes -{" "}
            <b className="text-green-500">
              <u>
                <code>16.249%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Roaring success{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">
            Lilya Shirin Prisca Amati
          </span>
          <span>
            <b>
              <u>
                <code>46.774%</code>
              </u>
            </b>{" "}
            of her actions were full successes -{" "}
            <b className="text-green-500">
              <u>
                <code>62.551%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Critter{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Nail</span>
          <span>
            <b>
              <u>
                <code>10%</code>
              </u>
            </b>{" "}
            of his actions were crits -{" "}
            <b className="text-green-500">
              <u>
                <code>121.337%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Acrobatic{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Aika Drak</span>
          <span>
            <b>
              <u>
                <code>58.824%</code>
              </u>
            </b>{" "}
            of her rolls were using mobility skills -{" "}
            <b className="text-green-500">
              <u>
                <code>206.647%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Three left feet{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Nail & Jonah</span>
          <span>Neither of them ever used a mobility skill...</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Cerebral{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Von</span>
          <span>
            <b>
              <u>
                <code>58.685%</code>
              </u>
            </b>{" "}
            of his actions were using perceptive skills -{" "}
            <b className="text-green-500">
              <u>
                <code>143.486%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Straighforward{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-indigo-500">Twenty One</span>
          <span>
            <b>
              <u>
                <code>4.167%</code>
              </u>
            </b>{" "}
            of his actions were using perceptive skills -{" "}
            <b className="text-red-500">
              <u>
                <code>82.711%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Talkative{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Merit</span>
          <span>
            <b>
              <u>
                <code>59.77%</code>
              </u>
            </b>{" "}
            of her actions were using social skills -{" "}
            <b className="text-green-500">
              <u>
                <code>131.891%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Shy{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Nail</span>
          <span>
            <b>
              <u>
                <code>2.542%</code>
              </u>
            </b>{" "}
            of his actions were using social skills -{" "}
            <b className="text-red-500">
              <u>
                <code>90.138%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Warrior{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Jonah</span>
          <span>
            <b>
              <u>
                <code>78.912%</code>
              </u>
            </b>{" "}
            of his actions were using combat skills -{" "}
            <b className="text-green-500">
              <u>
                <code>162.14%</code>
              </u>
            </b>{" "}
            <i>more</i> than the party average!
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span>
            Dove{" "}
            <span className="text-xs text-muted-foreground">goes to...</span>
          </span>
          <span className="text-5xl text-orange-500">Drusa Santoris</span>
          <span>
            <b>
              <u>
                <code>3.226%</code>
              </u>
            </b>{" "}
            of her actions were using combat skills -{" "}
            <b className="text-red-500">
              <u>
                <code>89.283%</code>
              </u>
            </b>{" "}
            <i>less</i> than the party average!
          </span>
        </div>
      </div>

      <div className="py-8">
        <TypographyP>
          Wow, that was a whole lot of fun. Thanks to those of you who made it
          to the end! This game has been a joy and I hope this makes it just
          that little bit greater of an experience.
        </TypographyP>
      </div>

      <div className="py-8">
        <TypographyP>See you in Arc 2, soldier.</TypographyP>
      </div>
    </div>
  );
}

const mobilitySkills = [
  "Carry",
  "Prowl",
  "Acrobatics",
  "Pipedancing",
  "Squeeze",
  "Lift",
];
const mobilityPercent = 19.183;
const socialSkills = [
  "Impersonate",
  "Persuade",
  "Suggest",
  "Rally",
  "Ignite",
  "Manipulate",
  "Challenge",
  "Comfort",
  "Organize",
  "Inspire",
  "Spin",
  "Encourage",
  "Rhetoric",
  "Drama",
  "Frighten",
  "Fuel",
];
const socialPercent = 25.775;
const perceptionSkills = [
  "Rummage",
  "Interface",
  "Survey",
  "Observe",
  "Assess",
  "Study",
  "Logic",
  "Eavesdrop",
  "Disconnect",
];
const perceptionPercent = 24.102;
const combatSkills = [
  "Charge",
  "Defy",
  "Mirado",
  "Intercede",
  "Backsnap",
  "Loyalty",
  "Persevere",
  "Brace",
  "Smash",
  "Pull",
  "Bleedout",
  "Crowdbreaking",
];
const combatPercent = 30.103;

function DiceByColor({ data }: { data: Roll[] }) {
  const rollsByColor = rollsByColorTransform(data);

  const totalDice = useMemo(() => {
    return rollsByColor.reduce((acc, curr) => acc + curr.total, 0);
  }, [rollsByColor]);

  const rollsByColorConfig = {
    dice: {
      label: "Dice",
    },
    red: {
      label: "Red",
      color: "var(--chart-red)",
    },
    blue: {
      label: "Blue",
      color: "var(--chart-blue)",
    },
  };

  return (
    <ChartContainer
      config={rollsByColorConfig}
      className="mx-auto aspect-square max-h-[450px] w-full"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={rollsByColor}
          dataKey="total"
          nameKey="color"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {totalDice.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Dice
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

function DiceByNumber({ data }: { data: Roll[] }) {
  const rollsByNumber = rollsByNumberTransform(data);

  const rollsByNumberConfig = {
    count: {
      label: "Count",
      color: "#ad46ff",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByNumberConfig}
      className="min-h-[200px] w-full"
    >
      <BarChart accessibilityLayer data={rollsByNumber}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="number"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          //   tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

function DiceByNumberAndColor({ data }: { data: Roll[] }) {
  const rollsByNumberAndColor = rollsByNumberAndColorTransform(data);
  const rollsByNumberAndColorConfig = {
    red: {
      label: "Red",
      color: "var(--chart-red)",
    },
    blue: {
      label: "Blue",
      color: "var(--chart-blue)",
    },
  };

  return (
    <ChartContainer config={rollsByNumberAndColorConfig}>
      <BarChart accessibilityLayer data={rollsByNumberAndColor}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="number"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="red" fill="var(--color-red)" radius={4} />
        <Bar dataKey="blue" fill="var(--color-blue)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

function RollsByCharacter({ data }: { data: Roll[] }) {
  const rollsByCharacter = rollsByCharacterTransform(data);

  const rollsByCharacterConfig = {
    numRolls: {
      label: "Total Rolls",
    },
    label: {
      color: "#000000",
    },
    nightshift: {
      color: "#6366f1",
    },
    dayshift: {
      color: "#f97316",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByCharacterConfig}
      className="min-h-[200px] w-full"
    >
      <BarChart
        accessibilityLayer
        data={rollsByCharacter}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="charName"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          hide
          //   tickFormatter={(value) => value.slice(0, 3)}
        />
        <XAxis dataKey="numRolls" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="numRolls"
          layout="vertical"
          fill="var(--color-numRolls)"
          radius={4}
        >
          <LabelList
            dataKey="charName"
            position="insideLeft"
            offset={8}
            className="fill-(--color-label)"
            fontSize={12}
          />
          <LabelList
            dataKey="numRolls"
            position="right"
            offset={8}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function DiceByColorAndShift({ data }: { data: Roll[] }) {
  const diceByColorAndShift = diceByColorAndShiftTransform(data);
  const { totalNightshiftDice, totalDayshiftDice } = useMemo(() => {
    return {
      totalNightshiftDice: diceByColorAndShift.nightshift.reduce(
        (acc, curr) => acc + curr.total,
        0
      ),
      totalDayshiftDice: diceByColorAndShift.dayshift.reduce(
        (acc, curr) => acc + curr.total,
        0
      ),
    };
  }, [diceByColorAndShift]);

  const diceByColorAndShiftConfig = {
    dice: {
      label: "Dice",
    },
    red: {
      label: "Red",
      color: "var(--chart-red)",
    },
    blue: {
      label: "Blue",
      color: "var(--chart-blue)",
    },
  };

  return (
    <div className="flex">
      <ChartContainer
        config={diceByColorAndShiftConfig}
        className="mx-auto aspect-square max-h-[450px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={diceByColorAndShift.nightshift}
            dataKey="total"
            nameKey="color"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-indigo-500 text-3xl font-bold"
                      >
                        {totalNightshiftDice.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Dice (Nightshift)
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <ChartContainer
        config={diceByColorAndShiftConfig}
        className="mx-auto aspect-square max-h-[450px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={diceByColorAndShift.dayshift}
            dataKey="total"
            nameKey="color"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-orange-500 text-3xl font-bold"
                      >
                        {totalDayshiftDice.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Dice (Dayshift)
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}

function RollsByNumberOfDice({ data }: { data: Roll[] }) {
  const rollsByNumberOfDice = rollsByNumberOfDiceTransform(data);

  const rollsByNumberOfDiceConfig = {
    count: {
      label: "Count",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByNumberOfDiceConfig}
      className="min-h-[200px] w-full"
    >
      <BarChart accessibilityLayer data={rollsByNumberOfDice}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="numDice"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

function RollsByNumberOfDiceByShift({ data }: { data: Roll[] }) {
  const rollsByNumberOfDiceByShift = rollsByNumberOfDiceByShiftTransform(data);
  const rollsByNumberOfDiceByShiftConfig = {
    nightshift: {
      label: "Nightshift",
      color: "#6366f1",
    },
    dayshift: {
      label: "Dayshift",
      color: "#f97316",
    },
  };

  return (
    <ChartContainer config={rollsByNumberOfDiceByShiftConfig}>
      <BarChart accessibilityLayer data={rollsByNumberOfDiceByShift}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="number"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="nightshift" fill="var(--color-nightshift)" radius={4} />
        <Bar dataKey="dayshift" fill="var(--color-dayshift)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

function RollsByResult({ data }: { data: Roll[] }) {
  const rollsByResult = rollsByResultTransform(data);

  const rollsByResultConfig = {
    count: {
      label: "Count",
      color: "#ad46ff",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByResultConfig}
      className="min-h-[200px] w-full"
    >
      <BarChart accessibilityLayer data={rollsByResult}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="number"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" fill="var(--color-count)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

function RollsByResultAndType({ data }: { data: Roll[] }) {
  const rollsByResultAndType = rollsByResultAndTypeTransform(data);
  const rollsByResultAndTypeConfig = {
    action: {
      label: "Action",
      color: "#f43f5e",
    },
    resist: {
      label: "Resist",
      color: "#22d3ee",
    },
    project: {
      label: "Project",
      color: "#78716c",
    },
    fortune: {
      label: "Fortune",
      color: "#eab308",
    },
  };

  return (
    <ChartContainer config={rollsByResultAndTypeConfig}>
      <BarChart accessibilityLayer data={rollsByResultAndType}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="number"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="resist" fill="var(--color-resist)" radius={4} />
        <Bar dataKey="project" fill="var(--color-project)" radius={4} />
        <Bar dataKey="action" fill="var(--color-action)" radius={4} />
        <Bar dataKey="fortune" fill="var(--color-fortune)" radius={4} />
        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  );
}
function DiceByType({ data }: { data: Roll[] }) {
  const diceByType = diceByTypeTransform(data);
  const diceByTypeConfig = {
    action: {
      label: "Action",
      color: "#f43f5e",
    },
    resist: {
      label: "Resist",
      color: "#22d3ee",
    },
    project: {
      label: "Project",
      color: "#78716c",
    },
    fortune: {
      label: "Fortune",
      color: "#eab308",
    },
  };

  return (
    <ChartContainer config={diceByTypeConfig}>
      <BarChart accessibilityLayer data={diceByType}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="number"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dashed" />}
        />
        <Bar dataKey="resist" fill="var(--color-resist)" radius={4} />
        <Bar dataKey="project" fill="var(--color-project)" radius={4} />
        <Bar dataKey="action" fill="var(--color-action)" radius={4} />
        <Bar dataKey="fortune" fill="var(--color-fortune)" radius={4} />
        <ChartLegend content={<ChartLegendContent />} />
      </BarChart>
    </ChartContainer>
  );
}

function ActionRollsByResult({ data }: { data: Roll[] }) {
  const actionRollsByResult = actionRollsByResultTransform(data);
  const totalRolls = actionRollsByResult.reduce((acc, e) => acc + e.count, 0);

  const actionRollsByResultConfig = {
    fail: {
      label: "Failure",
      color: "#ec4899",
    },
    partial: {
      label: "Partial",
      color: "#06b6d4",
    },
    success: {
      label: "Success",
      color: "#22c55e",
    },
    critical: {
      label: "Crit",
      color: "#f59e0b",
    },
  };

  return (
    <ChartContainer
      config={actionRollsByResultConfig}
      className="mx-auto aspect-square max-h-[450px] w-full"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={actionRollsByResult}
          dataKey="count"
          nameKey="result"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-rose-500 text-3xl font-bold"
                    >
                      {totalRolls.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Rolls
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  );
}

function ActionRollsByResultAndShift({ data }: { data: Roll[] }) {
  const actionRollsByResult = actionRollsbyResultAndShiftTransform(data);

  const actionRollsByResultConfig = {
    fail: {
      label: "Failure",
      color: "#ec4899",
    },
    partial: {
      label: "Partial",
      color: "#06b6d4",
    },
    success: {
      label: "Success",
      color: "#22c55e",
    },
    critical: {
      label: "Crit",
      color: "#f59e0b",
    },
  };

  return (
    <div className="flex">
      <ChartContainer
        config={actionRollsByResultConfig}
        className="mx-auto aspect-square max-h-[450px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={actionRollsByResult}
            dataKey="nightshift"
            nameKey="result"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-indigo-500 text-3xl font-bold"
                      >
                        {"401".toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Nightshift
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
      <ChartContainer
        config={actionRollsByResultConfig}
        className="mx-auto aspect-square max-h-[450px] w-full"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={actionRollsByResult}
            dataKey="dayshift"
            nameKey="result"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-orange-500 text-3xl font-bold"
                      >
                        {"440".toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Dayshift
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <ChartLegend content={<ChartLegendContent />} />
        </PieChart>
      </ChartContainer>
    </div>
  );
}

function RollsByAction({ data }: { data: Roll[] }) {
  const rollsByAction = rollsByActionTransform(data);

  const rollsByActionConfig = {
    label: {
      color: "#ffffff",
    },
    nightshift: {
      label: "Nightshift",
      color: "#6366f1",
    },
    dayshift: {
      label: "Dayshift",
      color: "#f97316",
    },
    total: {
      color: "var(--chart-4)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByActionConfig}
      className="min-h-[800px] aspect-square w-full max-w-600"
    >
      <BarChart
        accessibilityLayer
        data={rollsByAction}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="action"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval={0}
          hide
        />
        <XAxis dataKey="total" type="number" />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="total"
          layout="vertical"
          fill="var(--color-total)"
          radius={4}
        >
          <LabelList
            dataKey="action"
            position="insideLeft"
            offset={8}
            className="fill-(--color-label) font-bold"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function RollsByActionNightshift({ data }: { data: Roll[] }) {
  const rollsByAction = rollsByActionTransform(data)
    .filter((e) => e.nightshift > 0)
    .sort((a, b) => b.nightshift - a.nightshift);

  const rollsByActionConfig = {
    label: {
      color: "#ffffff",
    },
    nightshift: {
      label: "Nightshift",
      color: "#6366f1",
    },
    dayshift: {
      label: "Dayshift",
      color: "#f97316",
    },
    total: {
      color: "var(--chart-4)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByActionConfig}
      className="min-h-[800px] aspect-square w-full max-w-600"
    >
      <BarChart
        accessibilityLayer
        data={rollsByAction}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="action"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval={0}
          hide
        />
        <XAxis dataKey="nightshift" type="number" />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="nightshift"
          layout="vertical"
          fill="var(--color-nightshift)"
          radius={4}
        >
          <LabelList
            dataKey="action"
            position="insideLeft"
            offset={8}
            className="fill-(--color-label) font-bold"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function RollsByActionDayshift({ data }: { data: Roll[] }) {
  const rollsByAction = rollsByActionTransform(data)
    .filter((e) => e.dayshift > 0)
    .sort((a, b) => b.dayshift - a.dayshift);

  const rollsByActionConfig = {
    label: {
      color: "#ffffff",
    },
    nightshift: {
      label: "Nightshift",
      color: "#6366f1",
    },
    dayshift: {
      label: "Dayshift",
      color: "#f97316",
    },
    total: {
      color: "var(--chart-4)",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByActionConfig}
      className="min-h-[800px] aspect-square w-full max-w-600"
    >
      <BarChart
        accessibilityLayer
        data={rollsByAction}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="action"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval={0}
          hide
        />
        <XAxis dataKey="dayshift" type="number" />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="dayshift"
          layout="vertical"
          fill="var(--color-dayshift)"
          radius={4}
        >
          <LabelList
            dataKey="action"
            position="insideLeft"
            offset={8}
            className="fill-(--color-label) font-bold"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function RollsByActionAction({ data }: { data: Roll[] }) {
  const rollsByActionAndType = rollsByActtionAndTypeTransform(data, "action");

  const rollsByActionAndTypeConfig = {
    label: {
      color: "#ffffff",
    },
    nightshift: {
      label: "Nightshift",
      color: "#6366f1",
    },
    dayshift: {
      label: "Dayshift",
      color: "#f97316",
    },
    total: {
      color: "#f43f5e",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByActionAndTypeConfig}
      className="min-h-[800px] aspect-square w-full max-w-600"
    >
      <BarChart
        accessibilityLayer
        data={rollsByActionAndType}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="action"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval={0}
          hide
        />
        <XAxis dataKey="total" type="number" />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="total"
          layout="vertical"
          fill="var(--color-total)"
          radius={4}
        >
          <LabelList
            dataKey="action"
            position="insideLeft"
            offset={8}
            className="fill-(--color-label) font-bold"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function RollsByActionResist({ data }: { data: Roll[] }) {
  const rollsByActionAndType = rollsByActtionAndTypeTransform(data, "resist");

  const rollsByActionAndTypeConfig = {
    label: {
      color: "#ffffff",
    },
    nightshift: {
      label: "Nightshift",
      color: "#6366f1",
    },
    dayshift: {
      label: "Dayshift",
      color: "#f97316",
    },
    total: {
      color: "#0ea5e9",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={rollsByActionAndTypeConfig}
      className="min-h-[800px] aspect-square w-full max-w-600"
    >
      <BarChart
        accessibilityLayer
        data={rollsByActionAndType}
        layout="vertical"
        margin={{ right: 16 }}
      >
        <CartesianGrid horizontal={false} />
        <YAxis
          dataKey="action"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          interval={0}
          hide
        />
        <XAxis dataKey="total" type="number" />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Bar
          dataKey="total"
          layout="vertical"
          fill="var(--color-total)"
          radius={4}
        >
          <LabelList
            dataKey="action"
            position="insideLeft"
            offset={8}
            className="fill-(--color-label) font-bold"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

function CharacterStatsSection({ data }: { data: Roll[] }) {
  const characters = [
    "Bessemer",
    "Twenty-One",
    "Aika Drak",
    "Lilya Amati",
    "Von",
    "Jonah",
    "Naaza",
    "Merit",
    "Drusa S.",
    "Nail",
    "Malgus Veradun",
  ];

  return (
    <div className="w-full" id="tabs">
      <Tabs defaultValue="info">
        <TabsList>
          {characters.map((c, i) => (
            <TabsTrigger key={c + i + "trigger"} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="info">
          <div className="p-4">
            <TypographyP>Select a tab to begin!</TypographyP>
          </div>
        </TabsContent>
        {characters.map((c, i) => (
          <TabsContent key={c + i + "content"} value={c}>
            <CharacterStats data={data} characterName={c} />
          </TabsContent>
        ))}
      </Tabs>
      <Link href="#tabs">
        <Button size="sm" variant="outline">
          <CornerLeftUp /> back to tabs
        </Button>
      </Link>
    </div>
  );
}

function CharacterStats({
  data,
  characterName,
}: {
  data: Roll[];
  characterName: string;
}) {
  const characterRolls = data.filter((e) => e.charName === characterName);

  if (characterRolls.length === 0) {
    return (
      <div>
        <TypographyP className="text-red-500">
          No data for {characterName}!
        </TypographyP>
      </div>
    );
  }

  return (
    <div className="p-4">
      <TypographyH3>{characterName}</TypographyH3>
      <DiceByColor data={characterRolls} />
      <DiceByColorInfo data={characterRolls} c={characterName} />
      <div className="py-6">
        <TypographyP>
          Drum roll, please 🥁! Let&apos;s see this broken down by dice numbers!
          Time to find out how lucky you were...
        </TypographyP>
      </div>
      <DiceByNumber data={characterRolls} />
      <DiceByNumberInfo data={characterRolls} c={characterName} />

      <div className="py-6">
        <TypographyP>
          That&apos;s some valuable insight, but it may not yet be the full
          picture! After all, you take the highest of your dice (most of the
          time). So let&apos;s see how lucky your <i>rolls</i> are compared to
          your dice!
        </TypographyP>
      </div>

      <RollsByResult data={characterRolls} />
      <RollsByResultInfo data={characterRolls} c={characterName} />

      <div className="py-6">
        <TypographyP>
          Now let&apos;s take a look at number of dice per roll! I&apos;m
          curious to see who was loading up on bonds and assists.
        </TypographyP>
      </div>
      <RollsByNumberOfDice data={characterRolls} />
      <RollsByNumberOfDiceInfo data={characterRolls} c={characterName} />

      <div className="py-6">
        <TypographyP>
          So how do these rolls break down per type? And how lucky were they?
        </TypographyP>
      </div>

      <RollsByResultAndType data={characterRolls} />
      <RollsByResultAndTypeInfo data={characterRolls} />

      <div className="py-6">
        <TypographyP>
          Incredibly related to the last stats, how often did this character
          succeed on their action rolls? How do they stack up against the rest
          of the party?
        </TypographyP>
      </div>

      <ActionRollsByResult data={characterRolls} />
      <ActionRollsByResultInfo data={characterRolls} />

      <div className="py-6">
        <TypographyP>
          Last but certainly not least, what were their favorite abilities?
        </TypographyP>
      </div>

      <RollsByAction data={characterRolls} />

      <div className="py-6">
        <TypographyP>
          Sadly the effort to every skill&apos;s percentage versus the party
          would be a whole lot more effort - but it would have been cool!
          Here&apos;s a breakdown of your skill use based on some rough
          categories!
        </TypographyP>
      </div>

      <ActionsByCategory data={characterRolls} />

      <div className="py-6">
        <TypographyP>
          Let&apos;s take a look at {characterName}&apos;s favorite abilities by
          action and resist roll, then wrap this all up!
        </TypographyP>
      </div>
      <span className="text-xl">Action Rolls</span>
      <RollsByActionAction data={characterRolls} />
      <span className="text-xl">Resistance Rolls</span>
      <RollsByActionResist data={characterRolls} />
    </div>
  );
}

function getRatio(n: number, d: number): number {
  return Number((100 - (n / d) * 100).toFixed(3));
}

function getPercent(n: number, d: number): number {
  return Number(((n / d) * 100).toFixed(3));
}

function DiceByColorInfo({ data, c }: { data: Roll[]; c: string }) {
  const averageDice = 289.6;
  const averageRedRatio = 52.259;
  const averageBlueRatio = 47.741;

  const rollsByColor = rollsByColorTransform(data);

  const totalDice = useMemo(() => {
    return rollsByColor.reduce((acc, curr) => acc + curr.total, 0);
  }, [rollsByColor]);

  const percentTotal = getRatio(totalDice, averageDice);
  const ptMore = percentTotal < 0;

  const red = rollsByColor.find((e) => e.color === "red")!.total;
  const redRatio = getPercent(red, totalDice);
  const redRatioDiff = getRatio(redRatio, averageRedRatio);
  const rrdMore = redRatioDiff < 0;

  const blue = rollsByColor.find((e) => e.color === "blue")!.total;
  const blueRatio = getPercent(blue, totalDice);
  const blueRatioDiff = getRatio(blueRatio, averageBlueRatio);
  const brdMore = blueRatioDiff < 0;

  return (
    <div className="my-8">
      <TypographyP>
        Looks like {c} rolled{" "}
        <b className={cn(ptMore ? "text-green-500" : "text-red-500")}>
          <u>
            <code>{ptMore ? percentTotal * -1 : percentTotal}%</code>
          </u>
        </b>{" "}
        <i>{ptMore ? "more" : "less"}</i> dice than the average player! (
        <b>
          <u>
            <code>289.6</code>
          </u>
        </b>
        ). Breaking this down into red and blue dice, {c} rolled red dice{" "}
        <b>
          <u>
            <code>{redRatio}%</code>
          </u>
        </b>{" "}
        of the time, that&apos;s{" "}
        <b className={cn(rrdMore ? "text-green-500" : "text-red-500")}>
          <u>
            <code>{rrdMore ? redRatioDiff * -1 : redRatioDiff}%</code>
          </u>
        </b>{" "}
        <i>{rrdMore ? "more" : "less"}</i> than the average player! (
        <b>
          <u>
            <code>{averageRedRatio}%</code>
          </u>
        </b>
        ). On the flipside, {c} rolled blue dice{" "}
        <b>
          <u>
            <code>{blueRatio}%</code>
          </u>
        </b>{" "}
        of the time, that&apos;s{" "}
        <b className={cn(brdMore ? "text-green-500" : "text-red-500")}>
          <u>
            <code>{brdMore ? blueRatioDiff * -1 : blueRatioDiff}%</code>
          </u>
        </b>{" "}
        <i>{brdMore ? "more" : "less"}</i> than the average player! (
        <b>
          <u>
            <code>{averageBlueRatio}%</code>
          </u>
        </b>
        ).
      </TypographyP>
    </div>
  );
}

function DiceByNumberInfo({ data, c }: { data: Roll[]; c: string }) {
  const rollsByNumber = rollsByNumberTransform(data);

  const totalRolls = rollsByNumber.reduce((acc, e) => acc + e.count, 0);

  const averageRoll = Number(
    (
      rollsByNumber.reduce((acc, e) => acc + e.count * e.number, 0) / totalRolls
    ).toFixed(3)
  );

  const partyAvg = 3.4992;

  const avgRatio = getRatio(averageRoll, partyAvg);
  const aMore = avgRatio < 0;

  return (
    <div className="py-6">
      <TypographyP>
        Looks like {c} had an average roll of{" "}
        <b>
          <u>
            <code>{averageRoll}</code>
          </u>
        </b>
        . That makes them{" "}
        <b className={cn(aMore ? "text-green-500" : "text-red-500")}>
          <u>
            <code>{aMore ? avgRatio * -1 : avgRatio}%</code>
          </u>
        </b>{" "}
        <i>{aMore ? "more" : "less"}</i> lucky than our average player!{" "}
        {aMore ? "Good for you!" : "Sucks to be you!"}
      </TypographyP>
    </div>
  );
}

function RollsByNumberOfDiceInfo({ data, c }: { data: Roll[]; c: string }) {
  const rollsByNumberOfDice = rollsByNumberOfDiceTransform(data);

  const totalRolls = rollsByNumberOfDice.reduce((acc, e) => acc + e.count, 0);
  const partyAvgRolls = 116.455;
  const totalRollRatio = getRatio(totalRolls, partyAvgRolls);

  const avg = Number(
    (
      rollsByNumberOfDice.reduce((acc, e) => acc + e.count * e.numDice, 0) /
      totalRolls
    ).toFixed(3)
  );

  const partyAvg = 2.23;

  const ratio = getRatio(avg, partyAvg);
  const rMore = ratio < 0;

  const partyTotalRolls = 1272;
  const partyTotals = [54, 147, 635, 347, 70, 17, 2];

  return (
    <div className="py-6">
      <TypographyP>
        {c} made a total of{" "}
        <b>
          <u>
            <code>{totalRolls}</code>
          </u>
        </b>{" "}
        rolls! That&apos;s <RatioSection ratio={totalRollRatio} />
        !(
        <b>
          <u>
            <code>{partyAvgRolls}</code>
          </u>
        </b>
        ). Of these{" "}
        <b>
          <u>
            <code>{totalRolls}</code>
          </u>
        </b>{" "}
        rolls, they had an average of{" "}
        <b>
          <u>
            <code>{avg}</code>
          </u>
        </b>{" "}
        dice per roll. That&apos;s <RatioSection ratio={ratio} />.{" "}
        {rMore ? "Nice!" : "Ouch."}
      </TypographyP>
      <TypographyP>
        Why don&apos;t we break this down further though? I want to see each die
        value here...
      </TypographyP>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full mx-auto">
        {rollsByNumberOfDice.map((e, i) => (
          <RollsWithDieValueInfo
            key={`${i}${e.numDice}`}
            dVal={e.numDice}
            cVal={e.count}
            cTotal={totalRolls}
            pVal={partyTotals[e.numDice]}
            pTotal={partyTotalRolls}
          />
        ))}
      </div>
    </div>
  );
}

function RollsWithDieValueInfo({
  dVal,
  cVal,
  cTotal,
  pVal,
  pTotal,
}: {
  dVal: number;
  cVal: number;
  cTotal: number;
  pVal: number;
  pTotal: number;
}) {
  const per = getPercent(cVal, cTotal);
  const ratio = getRatio(per, getPercent(pVal, pTotal));
  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <b className="text-4xl">{dVal}</b>
      <span>
        <b>
          <u>
            <code>{per}%</code>
          </u>
        </b>{" "}
        (
        <b>
          <u>
            <code>
              {cVal}/{cTotal}
            </code>
          </u>
        </b>
        ) of their rolls
      </span>
      <RatioSection ratio={ratio} />.
    </div>
  );
}

function RollsByResultInfo({ data, c }: { data: Roll[]; c: string }) {
  const rollsByResult = rollsByResultTransform(data);

  const totalRolls = rollsByResult.reduce((acc, e) => acc + e.count, 0);
  const averageResult = Number(
    (
      rollsByResult.reduce((acc, e) => acc + e.count * e.number, 0) / totalRolls
    ).toFixed(3)
  );
  const ratio = getRatio(averageResult, 4.406);
  const rMore = ratio < 0;

  return (
    <div className="py-6">
      <TypographyP>
        {c}&apos;s average highest die per roll was{" "}
        <b>
          <u>
            <code>{averageResult}</code>
          </u>
        </b>
        . That&apos;s <RatioSection ratio={ratio} />.{" "}
        {rMore ? "You lucky bastard!" : "Bad luck, friend..."}
      </TypographyP>
    </div>
  );
}

function RatioSection({ ratio }: { ratio: number }) {
  const rMore = ratio < 0;
  return (
    <span>
      <b className={cn(rMore ? "text-green-500" : "text-red-500")}>
        <u>
          <code>{rMore ? ratio * -1 : ratio}%</code>
        </u>
      </b>{" "}
      <i>{rMore ? "more" : "less"}</i> than the party average
    </span>
  );
}

function RollsByResultAndTypeInfo({ data }: { data: Roll[] }) {
  const rollsByResultAndType = rollsByResultAndTypeTransform(data);
  let a = 0;
  let p = 0;
  let r = 0;
  let f = 0;
  let avgA = 0;
  let avgP = 0;
  let avgR = 0;
  let avgF = 0;
  for (const entry of rollsByResultAndType) {
    a += entry.action;
    avgA += entry.action * entry.number;
    p += entry.project;
    avgP += entry.project * entry.number;
    r += entry.resist;
    avgR += entry.resist * entry.number;
    f += entry.fortune;
    avgF += entry.fortune * entry.number;
  }
  avgA = Number((avgA / a).toFixed(3));
  avgP = Number((avgP / p).toFixed(3));
  avgR = Number((avgR / r).toFixed(3));
  avgF = Number((avgF / f).toFixed(3));
  const totals = [
    { type: "action", total: a },
    { type: "project", total: p },
    { type: "resist", total: r },
    { type: "fortune", total: f },
  ].sort((a, b) => a.total - b.total);
  const total = a + p + r + f;

  const par = 66.116;
  const ppr = 5.189;
  const prr = 19.261;
  const pfr = 9.434;

  const paa = 4.489;
  const ppa = 4.939;
  const pra = 4.298;
  const pfa = 3.75;

  return (
    <div className="py-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto">
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <b
              className={`text-${
                2 + totals.findIndex((e) => e.type === "resist")
              }xl text-cyan-500`}
            >
              {r}
            </b>
            <span>Resist</span>
          </div>
          <span>
            <b>
              <u>
                <code>{getPercent(r, total)}%</code>
              </u>
            </b>{" "}
            of their rolls
          </span>
          <RatioSection ratio={getRatio(getPercent(r, total), prr)} />
          <span>
            with an average roll of{" "}
            <b>
              <u>
                <code>{avgR}</code>
              </u>
            </b>
          </span>
          <span>
            <RatioSection ratio={getRatio(avgR, pra)} /> (
            <b>
              <u>
                <code>{pra}</code>
              </u>
            </b>
            )
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <b
              className={`text-${
                2 + totals.findIndex((e) => e.type === "project")
              }xl text-stone-500`}
            >
              {p}
            </b>
            <span>Project</span>
          </div>
          <span>
            <b>
              <u>
                <code>{getPercent(p, total)}%</code>
              </u>
            </b>{" "}
            of their rolls
          </span>
          <RatioSection ratio={getRatio(getPercent(p, total), ppr)} />
          <span>
            with an average roll of{" "}
            <b>
              <u>
                <code>{avgP}</code>
              </u>
            </b>
          </span>
          <span>
            <RatioSection ratio={getRatio(avgP, ppa)} /> (
            <b>
              <u>
                <code>{ppa}</code>
              </u>
            </b>
            )
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <b
              className={`text-${
                2 + totals.findIndex((e) => e.type === "action")
              }xl text-rose-500`}
            >
              {a}
            </b>
            <span>Action</span>
          </div>
          <span>
            <b>
              <u>
                <code>{getPercent(a, total)}%</code>
              </u>
            </b>{" "}
            of their rolls
          </span>
          <RatioSection ratio={getRatio(getPercent(a, total), par)} />
          <span>
            with an average roll of{" "}
            <b>
              <u>
                <code>{avgA}</code>
              </u>
            </b>
          </span>
          <span>
            <RatioSection ratio={getRatio(avgA, paa)} /> (
            <b>
              <u>
                <code>{paa}</code>
              </u>
            </b>
            )
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <b
              className={`text-${
                2 + totals.findIndex((e) => e.type === "fortune")
              }xl text-yellow-500`}
            >
              {f}
            </b>
            <span>Fortune</span>
          </div>
          <span>
            <b>
              <u>
                <code>{getPercent(f, total)}%</code>
              </u>
            </b>{" "}
            of their rolls
          </span>
          <RatioSection ratio={getRatio(getPercent(f, total), pfr)} />
          <span>
            with an average roll of{" "}
            <b>
              <u>
                <code>{avgF}</code>
              </u>
            </b>
          </span>
          <span>
            <RatioSection ratio={getRatio(avgF, pfa)} /> (
            <b>
              <u>
                <code>{pfa}</code>
              </u>
            </b>
            )
          </span>
        </div>
      </div>
    </div>
  );
}

function ActionRollsByResultInfo({ data }: { data: Roll[] }) {
  const actionRollsByResult = actionRollsByResultTransform(data);
  const total = actionRollsByResult.reduce((acc, e) => acc + e.count, 0);

  const f = actionRollsByResult.find((e) => e.result === "fail")!.count;
  const p = actionRollsByResult.find((e) => e.result === "partial")!.count;
  const s = actionRollsByResult.find((e) => e.result === "success")!.count;
  const c = actionRollsByResult.find((e) => e.result === "critical")!.count;

  const paf = 22.592;
  const pap = 44.114;
  const pas = 28.775;
  const pac = 4.518;

  return (
    <div className="py-6 w-full grid grid-cols-1 md:grid-cols-2 mx-auto">
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-pink-500`}>{f}</b>
          <span>Failed</span>
        </div>
        <span>
          <b>
            <u>
              <code>{getPercent(f, total)}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(getPercent(f, total), paf)} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-cyan-500`}>{p}</b>
          <span>Partial</span>
        </div>
        <span>
          <b>
            <u>
              <code>{getPercent(p, total)}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(getPercent(p, total), pap)} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-green-500`}>{s}</b>
          <span>Succeeded</span>
        </div>
        <span>
          <b>
            <u>
              <code>{getPercent(s, total)}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(getPercent(s, total), pas)} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-yellow-500`}>{c}</b>
          <span>Crit</span>
        </div>
        <span>
          <b>
            <u>
              <code>{getPercent(c, total)}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(getPercent(c, total), pac)} />
      </div>
    </div>
  );
}

function ActionsByCategory({ data }: { data: Roll[] }) {
  // const actionRollsByResult = actionRollsByResultTransform(data);
  const rollsByAction = rollsByActionTransform(data);
  const total = rollsByAction.reduce((acc, e) => acc + e.total, 0);
  let mobile = 0;
  let social = 0;
  let perception = 0;
  let combat = 0;
  for (const entry of rollsByAction) {
    if (mobilitySkills.includes(entry.action)) {
      mobile += entry.total;
    }
    if (socialSkills.includes(entry.action)) {
      social += entry.total;
    }
    if (perceptionSkills.includes(entry.action)) {
      perception += entry.total;
    }
    if (combatSkills.includes(entry.action)) {
      combat += entry.total;
    }
  }
  const mobileP = getPercent(mobile, total);
  const socialP = getPercent(social, total);
  const perceptionP = getPercent(perception, total);
  const combatP = getPercent(combat, total);

  return (
    <div className="py-6 w-full grid grid-cols-1 md:grid-cols-2 mx-auto">
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-fuchsia-500`}>{mobile}</b>
          <span>Mobility</span>
        </div>
        <span>
          <b>
            <u>
              <code>{mobileP}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(mobileP, mobilityPercent)} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-lime-500`}>{social}</b>
          <span>Social</span>
        </div>
        <span>
          <b>
            <u>
              <code>{socialP}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(socialP, socialPercent)} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-zinc-500`}>{perception}</b>
          <span>Perceptive</span>
        </div>
        <span>
          <b>
            <u>
              <code>{perceptionP}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(perceptionP, perceptionPercent)} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <b className={`text-4xl text-emerald-500`}>{combat}</b>
          <span>Combat</span>
        </div>
        <span>
          <b>
            <u>
              <code>{combatP}%</code>
            </u>
          </b>{" "}
          of their rolls
        </span>
        <RatioSection ratio={getRatio(combatP, combatPercent)} />
      </div>
    </div>
  );
}
