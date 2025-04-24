import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
    <>
      <TypographyH1>Donums</TypographyH1>
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
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game/sources-of-power/transformations">
          <Button variant="outline">
            <ChevronLeft /> Transformations
          </Button>
        </Link>
        <Link href="/game/sources-of-power/curses">
          <Button variant="outline">
            Curses <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
