import { InlineSymbol } from "@/components/dice/dice-borders";
import { Threat } from "@/components/dice/dice-symbols";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Donums</TypographyH1>
      <TypographyP>
        <b>Donum</b> is the <b>Arborian </b> word for &ldquo;gift&rdquo;,
        representing how the <b>Arborians</b> believe these powers to be gifts
        from their god, <b>Jolana Arbor</b>. Also according to the{" "}
        <b>Arborians</b>, <b>Jolana&apos;s</b> daughter <b>Anya</b> named each
        of the <b>Donums</b> as they were discovered.
      </TypographyP>
      <TypographyH2>Donum Provenire</TypographyH2>
      <TypographyP>
        <b>Donums</b> begin with death. The water permeates every layer of your
        body, scraping you and hollowing you out so that something new can grow.
        Some <b>donums </b> are deadlier than others; some people aren&apos;t as
        affected. As best anyone can tell, rare individuals have an innate
        affinity to a particular <b>donum</b>. This one will be less lethal to
        them.
      </TypographyP>
      <TypographyBlockquote>
        When you drink a <b>donum flask</b>, determine if your character has an
        affinity with your chosen <b>donum</b>. If <i>yes</i>, mark a{" "}
        <b>
          level 4 harm: <i>permeated</i>
        </b>
        ; if <i>no</i>, mark a{" "}
        <b>
          level 5 harm: <i>hollowed</i>
        </b>
        .
      </TypographyBlockquote>
      <TypographyP>
        <b>Donums</b> have an <b>Emergence clock</b>. Each time your character
        marks a condition or level 3 harm, they mark the <b>Emergence clock</b>.
        Once full, your character unlocks their <i>Donum Provenire</i>: a moment
        of your choosing where the power fully manifests and provides your
        character with dramatic ability in that scene.
      </TypographyP>
      <TypographyH2>Donum Metamorphosis</TypographyH2>
      <TypographyP>
        Nascent <b>Donum</b> wielders can control aspects of their power, though
        it is still faltering. Sometimes even unstable.
      </TypographyP>
      <TypographyBlockquote>
        Your character may advance their Donum&apos;s Nascence skill tree by
        spending <b>3 xp clocks</b> during the <b>Train</b> activity. .
      </TypographyBlockquote>
      <TypographyP>
        Anytime you (or allies) are under the effect of your <b>Donum</b> and
        you roll a{" "}
        <InlineSymbol>
          <Threat />
        </InlineSymbol>
        , they may experience a <i>mishap</i>. A <i>mishap</i> is a danger or
        complication spawned from your unfamiliarity with your own power. When{" "}
        <i>mishaps</i> occur, <b>mark 1 xp</b>; they may be resisted as normal.
      </TypographyP>
      <TypographyP>
        Nascent wielders have a <b>Nascence clock</b>. Each time your character
        spends <b className="text-blue-500">water</b> or experiences a{" "}
        <i>mishap</i>, they mark the <b>Nascence clock</b>. Once full, your
        character unlocks their <i>Donum Metamorphosis</i>: a moment of your
        choosing where the power permanently evolves and provides your character
        with dangerous power in that scene.
      </TypographyP>
      <TypographyP>
        After the <i>Donum Metamorphosis</i>, the power enters a new phase:{" "}
        <i>Donum Versance</i>.
      </TypographyP>
      <TypographyH2>Donum Versance</TypographyH2>
      <p style={distortedStyle} className="select-none mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non quia
        obcaecati itaque eum aperiam quisquam molestias sequi temporibus atque,
        dolores odit, magni, impedit distinctio dolor? Quos, totam minima.
        Nostrum!
      </p>
      <p style={distortedStyle} className="select-none mt-4">
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
