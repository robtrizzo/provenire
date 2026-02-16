"use client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import RemembrancePortrait from "../(components)/remembrance-portrait";
import ClockCost from "@/components/clock-cost";
import Action from "../../../play/(components)/action";
import { ActionV3 } from "@/types/arc3";
import { getActions } from "@/lib/actions";

const actions: ActionV3[] = getActions(
  [
    { name: "Acrobatics", level: [2] },
    { name: "Ambush", level: [3] },
    { name: "Lift", level: [2, 1] },
    { name: "Lurk", level: [1] },
    { name: "Scheme", level: [1, 1] },
    { name: "Stubborn", level: [1, 1] },
  ],
  "skill",
);

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
        <div>
          <TypographyH1 className="font-old">Makino</TypographyH1>
          <span className="text-muted-foreground">Yama, Era Two</span>
          <TypographyP>
            A surreptitious vigilante within the Hidden City undergoes profane
            rituals to murder evildoers sheltering within the walls. A
            particularly wretched warlord gets to his loved ones; and the ritual
            goes awry. For fourteen days, the assassin and his two closest
            friends are trapped in a cycle of heartbreak and vengeance. During
            their reign of terror they exact torturous vengeance on wrongdoers.
            On the fourteenth day, they see themselves for what they are and ask
            the moon to take them somwehere else.
          </TypographyP>
          <TypographyH3>Psyche</TypographyH3>
          <TypographyP>
            Fueled by rage and more than half mad with grief. A deep seeded
            drive to rid the world of powerful people and to be reunited with
            his loves.
          </TypographyP>
        </div>
        <RemembrancePortrait width={200} height={200} img="skeletons" />
      </div>
      <div className="mt-4 grid grid-cols-8 gap-2">
        <div className="col-span-5">
          <TypographyH2 className="font-old">Histories</TypographyH2>
          <div className="mt-2 flex items-center gap-4">
            <TypographyH3 className="mt-0">The Hidden City</TypographyH3>
            <ClockCost num={3} ticks={5} />
          </div>
        </div>
        <div className="col-span-3">
          <TypographyH2 className="font-old">Skills</TypographyH2>
          <div className="flex flex-col">
            {actions.map((a, idx) => (
              <Action.Wrapper.Tooltip action={a} key={idx + a.name}>
                <div>
                  <Action.Wrapper.Grid>
                    <Action.HeaderContent.Static action={a} />
                  </Action.Wrapper.Grid>
                </div>
              </Action.Wrapper.Tooltip>
            ))}
          </div>
        </div>
      </div>
      <TypographyH2 className="font-old">Abilities</TypographyH2>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Ghost of the Grasses</TypographyH3>
        <ClockCost num={4} ticks={5} />
      </div>
      <span className="text-red-500 text-sm font-old">Aldam</span>
      <TypographyP>
        Gredorans are always talking about the divinity of a bodily triangle or
        some nonsense like that. Heian Aldams don&apos;t have all that
        ceremonial fluff. They&apos;re just useful. They allow extreme
        flexibility and precise movement. Probably developed from hunting big
        cats in the grasses. Or at least that&apos;s what Makino assumes. He
        never went to school.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Donum Cinis</TypographyH3>
        <ClockCost num={5} ticks={5} />
      </div>
      <span className="text-fuchsia-500 text-sm font-old">The Gift of Ash</span>
      <TypographyP>
        Makino has complicated feelings about his <b>Donum</b>. It&apos;s widely
        known to be the worst one. Not really useful for making money. Not
        nearly as good for fighting. But then again, it seems gross to be
        ungrateful for a <b>Donum</b>. It is a gift after all. Regardless of its
        reputation, Makino has learned to make it work for his own purposes.
        Maybe when people judged it they weren&apos;t thinking like a thief.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Long-knife Style</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-emerald-500 text-sm font-old">Fighting Style</span>
      <TypographyP>
        Just out of range of fists. Just inside the range of a spear. This style
        focuses on slashing fingers and gauging eyes. The point is the pain and
        grisly scars you leave, even if you can&apos;t get the job done.
      </TypographyP>
      <div className="mt-2 flex items-center gap-4">
        <TypographyH3 className="mt-0">Punish the Wrongdoers</TypographyH3>
        <ClockCost num={3} ticks={5} />
      </div>
      <span className="text-amber-500 text-sm font-old">Psyche</span>
      <TypographyP>
        Whenever you learn about wretched behavior in your own community, mark
        the <b>Angry</b> condition.
      </TypographyP>
      <TypographyP>
        As a <b>donwtime activity</b> you may <b>Punish the Wrongdoers</b>. You
        hunt down a bad actor within your own community and give them a grisly
        end. Justice is the example they leave for others.{" "}
        <b>Clear a condition</b>.
      </TypographyP>
    </>
  );
}
