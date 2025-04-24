import { checkAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  const { error } = await checkAuth("user", ["view-donums"]);
  if (error) redirect("/game");
  return (
    <>
      <TypographyH1>Sources of Power</TypographyH1>
      <Aldams />
      <Transformations />
      <Donums />
      <Curses />
      <Redacted />
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/fighting-styles">
          <Button variant="outline">
            <ChevronLeft /> Fighting Styles
          </Button>
        </Link>
        <Link href="/game/sources-of-power/aldams">
          <Button variant="outline">
            Aldams <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}

async function Donums() {
  return (
    <>
      <TypographyH2>Donums</TypographyH2>
      <TypographyP className="mb-2">
        A lucky few have dreamt a man who calls himself <i>The Owl</i>. He
        guides them to a place deep in the jungle dream - an ancient zigurrat
        vault. <i>Owl</i> and the accompanying silent order offer a vial from a
        table of many. No two alike. If you choose wisely, you may survive the
        vial&apos;s affect on your body.
      </TypographyP>
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
    </>
  );
}

async function Aldams() {
  return (
    <>
      <TypographyH2>Aldams</TypographyH2>
      <TypographyP>
        <b>Aldam</b> is an ancient <i>Gredoran</i> word. The original meaning is
        long lost to history, but now it can be described as a cluster of
        meanings. <b>Made from earth&apos;s mud</b>, a{" "}
        <b>phantom of the self</b>, the <b>intensity of blackness</b>, a moment
        of <b>wishful thinking</b>, and most commonly, the{" "}
        <b>art of burning blood</b>.
      </TypographyP>
      <TypographyP>
        In bygone ages, many cultures had unique practices of <b>Aldam</b>. But
        the workers of the <b>Steel Trap</b> are ignorant to this history. To
        the <i>Rathi</i>, <b>Aldam</b> is synonymous with the power of a well
        fed beast.
      </TypographyP>
    </>
  );
}

async function Transformations() {
  return (
    <>
      <TypographyH2>Bestial Transformations</TypographyH2>
      <TypographyP>
        They range from minor bodily changes to full bestial shapeshifting. For{" "}
        <i>thinbloods,</i> this process wracks them with pain and can leave them
        partially warped in a way which they can&apos;t reverse. As for the{" "}
        <i>thickblooded</i> beasts, the mastery of their form is limited only by
        the purity of their bloodline and the volume of their appetite.
      </TypographyP>
      <TypographyP>
        Most children, even the <i>thinblooded</i> ones, begin manifesting signs
        before their teenage years. Many will be wracked with{" "}
        <i>surge sickness</i>: uncontrollable and sudden transformations which
        can leave the child severely wounded. Overcoming this is part of coming
        of age in Rathi society.
      </TypographyP>
      <TypographyP>
        For some though, (especially for those with particularly thin Rathi
        heritage), they may not see signs of transformation until well into
        their adulthood. Moments of extreme duress can coax the transformation
        out. Rathi scholars speculate that this is a defense mechanism of the{" "}
        <i>thinblooded</i>: a last ditch effort to become predator even as they
        are the prey.
      </TypographyP>
    </>
  );
}

async function Curses() {
  return (
    <>
      <TypographyH2>Curses</TypographyH2>
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
    </>
  );
}

async function Redacted() {
  return (
    <>
      <div className="mt-4" />
      <span style={distortedStyle}>
        <TypographyH2>Redacted</TypographyH2>
      </span>
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
    </>
  );
}
