import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";
import { checkAuth } from "@/lib/auth";
export default async function Page() {
  return (
    <>
      <TypographyH1>Curses</TypographyH1>
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quia
        obcaecati itaque eum aperiam quisquam molestias sequi temporibus atque,
        dolores odit, magni, impedit distinctio dolor? Quos, totam minima.
        Nostrum!
      </p>
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
        doloremque, nihil modi iure consequuntur officiis error rem debitis
        natus minima aspernatur maiores nulla ab quod. Asperiores tenetur
        suscipit odit dolorem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident at iure obcaecati, voluptatem nihil velit
        veniam ratione rem placeat officiis a, dignissimos ex vero ut sed esse
        incidunt, voluptatibus est!
      </p>
      <CusedSight />
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/sources-of-power/donums">
          <Button variant="outline">
            <ChevronLeft /> Donums
          </Button>
        </Link>
      </div>
    </>
  );
}

async function CusedSight() {
  const { error } = await checkAuth("user", ["outer-sight"]);
  if (error) {
    return (
      <div className="mt-4">
        <span style={distortedStyle}>
          <TypographyH2>Redac Tedredacted</TypographyH2>
        </span>
        <p style={distortedStyle} className="select-none">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          doloremque, nihil modi iure consequuntur officiis error rem debitis
          natus minima aspernatur maiores nulla ab quod. Asperiores tenetur
          suscipit odit dolorem? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident at iure obcaecati, voluptatem nihil velit
          veniam ratione rem placeat officiis a, dignissimos ex vero ut sed esse
          incidunt, voluptatibus est!
        </p>
      </div>
    );
  }

  return (
    <>
      <TypographyH2>Curse of Outer Sight</TypographyH2>
      <TypographyP>
        You stumbled into a place with <i>the eyes</i>. They saw you. And in
        turn, you saw so, so much. Your life: both thus far and future. You saw
        your own doom. But so much information is difficult for any mind to
        grasp, much less one addled by the <i>drone</i>. Regardless of what you
        do and don&apos;t remember, you can&apos;t shake the feeling that it is
        coming.
      </TypographyP>
      <TypographyH3>Abilities</TypographyH3>
      <OuterSightSkillTree />
      <TypographyH4>Doomed</TypographyH4>
      <TypographyP>
        The curse&apos;s worst impacts can be mitigated by careful
        compartmentalization and isolation. Though, embracing the curse grants
        certain abilities. At the cost of <b>stress</b>. Your character gains a
        new <b>condition: Doomed</b>.
      </TypographyP>
      <TypographyBlockquote>
        <b>Doomed</b>: A flood of unwanted memories and the inevitability of the{" "}
        <b>Curse of Outer Sight</b> takes an emotional toll. You cannot{" "}
        <b>comfort</b> or <b>shift blame</b>. Clear by ticking your{" "}
        <b>Doom clock</b>.
      </TypographyBlockquote>
      <TypographyP>
        <b>Curse of Outer Sight</b> has a <b>Doom clock</b>. Each time your
        character marks another tick on the clock, they unlock a new ability
        granted by the curse. When the clock fills, your doom arrives.
      </TypographyP>
      <TypographyH4>Omens</TypographyH4>
      <TypographyP>
        Seeing forward to your own doom can have its advantages. Sometimes you
        remember events and places you&apos;ll be. It comes to you in dreams and
        hallucinations, troubling you but allowing you a degree of foresight.
        Once per <b>downtime</b>, you may mark <b>2 stress</b> to receive an
        omen.
      </TypographyP>
      <TypographyH4>Glimpse</TypographyH4>
      <TypographyP>
        One of the most painful aspects of the curse is triggered by physical
        contact with others. When you do, you see their entire lives play out in
        a heartbeat. It&apos;s an overwhelming torrent of information and
        emotion which leaves you worse for wear.
      </TypographyP>
      <TypographyP>
        When you make skin on skin contact with someone else, mark{" "}
        <b>3 stress</b>. You may use downtime activities and narrative moments
        to recall relevant facts from the person&apos;s life. During a mission,
        this costs <b>1 stress</b>.
      </TypographyP>
      <TypographyH4>Ripples</TypographyH4>
      <TypographyP>
        Smaller moments in your future memories have changed or not come true.
        The future isn&apos;t set in stone it seems... and you&apos;re gaining
        some mastery over how to affect it. You may <b>assist</b> crewmates even
        when you aren&apos;t in the scene or otherwise couldn&apos;t possibly
        help.
      </TypographyP>
      <TypographyH4>Premonition</TypographyH4>
      <TypographyP>
        Forcing yourself to recall similar moments to the one you&apos;re in
        right now is difficult, but can be a life-saver. Mark <b>3 stress</b> to
        completely negate a consequence of a roll or situation, even if{" "}
        <b>resisting</b> would normally only reduce it.
      </TypographyP>
      <TypographyH4>Inner Peace</TypographyH4>
      <TypographyP>Gain an additional stress box.</TypographyP>
      <TypographyH4>Agent of Fate</TypographyH4>
      <TypographyP>
        Once per downtime, you may pursue a special <b>long term project</b>:{" "}
        <b>dominos</b>. This project can be infinitely advanced. You may choose
        any actions for this project: you will always have{" "}
        <b>standard effect</b>.
      </TypographyP>
      <TypographyP>
        At any time you may mark <b>2 stress</b> and unveil the inexplicable
        work you&apos;ve done in the past which has built up to an advantage in
        the moment. The degree of advantage depends on how far <b>dominos</b> is
        advanced before being unveiled.
      </TypographyP>
      <TypographyH4>Never Looking Back</TypographyH4>
      <TypographyP>
        It&apos;s so close: your doom. The moment seared into your memory for as
        long as you&apos;ve been cursed with the <b>Outer Sight</b>. Will it
        come to pass, or have your ripples changed your future?
      </TypographyP>
      <TypographyP>
        <b>Avert Doom</b>: Automatically crit one roll of your choosing in the
        scene. Once you have, clear <b>doom</b> and one more <b>condition</b> of
        your choice. <i>The power begins to change...</i>
      </TypographyP>
      <TypographyP>
        <b>Embrace Doom</b>: Clear a condition. For the rest of the scene you
        may push yourself as many times as you have the stress the pay for. Once
        done, your doom comes to pass.
      </TypographyP>
    </>
  );
}

async function OuterSightSkillTree() {
  return (
    <div className="border-[1px] border-border rounded-md p-6 flex items-center max-w-[340px] md:max-w-none overflow-auto">
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Doomed
          </TypographyP>
        </div>
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[356px] bg-muted-foreground" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Omens
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Glimpse
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Ripples
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
        <div className="w-16 h-36 flex items-center justify-center">
          <div className="w-16 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Premonition
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Inner Peace
          </TypographyP>
        </div>
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Agent of Fate
          </TypographyP>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
        <div className="w-8 h-36 flex items-center justify-center">
          <div className="w-8 h-1 bg-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-1 h-[356px] bg-muted-foreground" />
      </div>
      <div className="w-8 h-24 flex items-center justify-center">
        <div className="w-8 h-1 bg-muted-foreground" />
      </div>
      <div className="flex flex-col">
        <div className="h-24 w-36 p-2 bg-muted-foreground text-primary-foreground flex flex-col items-center justify-center">
          <TypographyP className="text-lg text-center font-bold">
            Never Looking Back
          </TypographyP>
        </div>
      </div>
    </div>
  );
}
