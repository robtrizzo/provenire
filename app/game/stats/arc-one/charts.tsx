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
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import Breadcrumbs from "@/components/ui/breadcrumbs";

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
          Wow, you guys rolled a 6{" "}
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
          Well this looks about how I&apos;d expect. Nightshift reign supreme on
          non-combat actions where Dayshift takes the killing cake! But
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
    </div>
  );
}

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
  console.log("rollsbynumberofdice", rollsByNumberOfDice);

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
                      {"841".toLocaleString()}
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
