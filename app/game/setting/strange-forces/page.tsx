import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { distortedStyle } from "@/lib/styles";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Setting", href: "/game" },
          { name: "Era 3", href: "/game/setting" },
          { name: "Strange Forces of the Steel Trap", href: "#" },
        ]}
      />
      <TypographyH1>Strange Forces of the Steel Trap</TypographyH1>
      <TypographyH2>The Drone</TypographyH2>
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
      <TypographyH2 id="kings-spell">The King&apos;s Spell</TypographyH2>
      <TypographyP>
        For some workers, they find salvation in the embrace of{" "}
        <b>Kingwulf&apos;s</b> order. For this, they may wield the{" "}
        <b className="text-fuchsia-700">King&apos;s Spell</b>. A simple yet
        powerful force of domination: its wielders invoke <b>Kingwulf&apos;s</b>{" "}
        name and levy a command onto their lessers. Invoked by{" "}
        <i>thinblooded</i> workers, this becomes a contest of will. For
        overseers, it is divine evidence of their rightful place at the apex.
      </TypographyP>
      <TypographyP>
        When you wield the <b className="text-fuchsia-700">King&apos;s Spell</b>
        , utter <b>Kingwulf&apos;s</b> name and make a simple demand. If they
        are your lesser, they must either do it or struggle to resist. Each time
        they successfully struggle, make a <b>resistance roll</b>. Whoever gives
        in first is the loser.
      </TypographyP>
      <TypographyP>
        When the <b className="text-fuchsia-700">King&apos;s Spell</b> is
        wielded against you, either do what they say or make a{" "}
        <b>resistance roll</b>. If you do, the wielder must in turn struggle to
        keep inflicting the spell on you. Whoever gives in first is the loser.
      </TypographyP>
      <TypographyBlockquote>
        If a PC has the <b className="text-fuchsia-700">King&apos;s Spell</b>{" "}
        used on them, their player may for any reason signal that this makes
        them uncomfortable and opt out of this happening.
      </TypographyBlockquote>
      <TypographyH2>Dreamstorms</TypographyH2>
      <TypographyP>
        Speculated to be related to <b>slumberings</b>, but much different.{" "}
        <b>Operators</b> are tasked with sounding the alarm at it&apos;s first
        signs, though often the storm announces itself with it&apos;s
        characteristic cacophony. As the invisible storm moves through the
        factory, all the workers in its path collapse and begin screaming in
        their sleep.
      </TypographyP>
      <TypographyP>
        Everyone caught in the storm joins each other in a nightmare where each
        individual&apos;s fears are made manifest - and deadly. The workers are
        taught to survive a Dreamstorm&apos;s nightmare by harmonizing in
        thought. For this situation, every child is taught a chant to recite
        together:{" "}
        <i>
          &quot;By his blood he will shelter us. By his might he will save
          us.&quot;
        </i>
        .
      </TypographyP>
      <TypographyP>
        Dreamstorms are said to be summoned by music. In the wake of one, the
        enforcers scour Fabrication to find the degenerates reckless enough to
        invite disaster on everyone in the lair.
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
      <TypographyH2>The Machines</TypographyH2>
      <p style={distortedStyle} className="select-none">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam error
        minima id possimus, eaque molestias delectus sequi suscipit quo
        consequuntur, harum doloribus aliquid! Minus asperiores labore fugit,
        recusandae exercitationem laboriosam? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rem cum reiciendis, libero natus earum
        optio voluptatum officiis fuga quod consequuntur, ut a. Corporis harum
        praesentium repellendus ea accusamus esse. In.
      </p>
      <p style={distortedStyle} className="select-none">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic asperiores
        optio illum similique assumenda numquam veniam maxime earum incidunt
        velit, praesentium aut tenetur, laborum facilis libero dolore quisquam
        nemo! Repudiandae. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Quidem, maiores beatae dignissimos quibusdam repellat eius
        voluptatum accusantium reprehenderit impedit, ipsum earum! Ullam
        quisquam expedita aperiam rerum quis illum voluptate mollitia. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. A vitae quidem
        fugiat, perspiciatis molestias soluta explicabo ipsa nemo consectetur
        rem voluptas excepturi, laborum eaque corporis recusandae possimus
        itaque, beatae maxime.
      </p>
      <Separator className="my-4" />
      <div className="w-full flex justify-between">
        <Link href="/game">
          <Button variant="outline">
            <ChevronLeft /> Era 3
          </Button>
        </Link>
        <Link href="/game/core-system">
          <Button variant="outline">
            Core System <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
