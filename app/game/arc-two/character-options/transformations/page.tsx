import Breadcrumbs from "@/components/ui/breadcrumbs";
import ConditionalLink from "@/components/ui/conditional-link";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { distortedStyle } from "@/lib/styles";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">Transformations</TypographyH1>
      <TypographyP>
        <b>Rath</b> and its citizens of <b className="font-cyber">Feasting</b>{" "}
        have gained immortality, but at the cost of who they once were.{" "}
        <b>Kingwulf&apos;s</b> bloodline has become obscured; twisted and warped
        into ceremonial growing pains easily eschewed for the right price.
        Easily mimicked for paltry more.
      </TypographyP>
      <TypographyP>
        Of course, this is <b>Kingwulf&apos;s</b> will, and so his wisdom in
        this won&apos;t be questioned. The fact of the matter is that bestial
        transformations mean both far less and far more than they did in
        antiquity.
      </TypographyP>
      <TypographyP>
        There are only two groups in <b className="font-cyber">Feasting</b> who
        consistently, genuinely, manifest bestial transformations: the Dynastic
        Families and the Biofundamentalists. In the age of cybernetics and
        cortical stacks, the Dynastic Families have embraced technology.
        Biofundamentalists have forsworn tainting their bloodline with
        technology or cheapening bestial shapes with prefabricated sleeves.
      </TypographyP>
      <TypographyBlockquote>
        In <b className="font-cyber">Feasting</b>, anyone could have traces of
        Rathi blood. If you choose, you may select a{" "}
        <b>bestial transformation</b>. This does not lock you to only this{" "}
        <b>Donum</b> permanently, but this is a permanent choice and will affect
        character options throughout the game.
      </TypographyBlockquote>
      <TypographyP>
        Bestial transformations have an <b>Emergence clock</b>. Each time your
        character marks a condition or a level 3 harm, they mark the{" "}
        <i>Emergence clock</i>. Once full, your character unlocks their{" "}
        <i>Donum Provenire</i>: a moment of your choosing where the
        transformation fully manifests and provides your character with dramatic
        power in that scene.
      </TypographyP>
      <TypographyBlockquote>
        You may only advance the <b>Emergence clock</b> while in your{" "}
        <b>birthsleeve</b> or from within a sleeve with specially manufactured
        genemods (like the <b>Pride Hide</b>).
      </TypographyBlockquote>
      <TypographyP>
        After the <i>Donum Provenire</i>, the transformation enters a new phase:{" "}
        <i>Donum Nascence</i>. Your character&apos;s <i>Maeonic Gut</i> grows,
        storing more blood than prey could.
      </TypographyP>
      <TypographyBlockquote>
        You gain <b className="text-red-500">+1 max Blood</b>. Any time your
        belly is empty (no blood), take a{" "}
        <b>level 1 permanent harm: blood-starved</b>.
      </TypographyBlockquote>
      <TypographyP>
        Nascent beasts can control elements of their transformations, though
        they still have a lifetime to grow into the art.
      </TypographyP>
      <TypographyBlockquote>
        Your character may advance their <i>Donum&apos;s Nascence</i> skill tree
        by spending <b>3 xp clocks</b> during the <b>Train</b> activity.
      </TypographyBlockquote>
      <TypographyP>
        Anytime you are transformed and roll a <b>1-3</b>, you experience a{" "}
        <i>mishap</i>. A <i>mishap</i> is a danger or complication spawned from
        your unfamiliarity with your own power. When <i>mishaps</i> occur,{" "}
        <b>mark 1 xp</b>; they may be resisted as normal.
      </TypographyP>
      <TypographyP>
        <i>Nascent</i> beasts have a <b>Nascence clock</b>. Each time your
        character unlocks an ability or experiences a <i>mishap</i>, they mark
        the <b>Nascence clock</b>. Once full, your character unlocks their{" "}
        <i>Donum Metamorphosis</i>: a moment of your choosing where the
        transformation permanently evolves and provides your character with
        dangerous power in that scene.
      </TypographyP>
      <TypographyP>
        After the <i>Donum Metamorphosis</i>, the transformation enters a new
        phase: <i>Donum Versance</i>.
      </TypographyP>
      <p style={distortedStyle} className="select-none mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ut
        explicabo autem in provident deserunt ipsa pariatur excepturi maxime,
        omnis, id officia blanditiis minima repellendus esse necessitatibus,
        obcaecati qui! Itaque. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vero quia error voluptatem aperiam, architecto
        reiciendis aliquam? Dolorum, odio voluptas dolores ab esse veniam autem,
        reiciendis, incidunt nemo ad perspiciatis voluptatem?
      </p>
      <TypographyH2 className="font-cyber">Transformation Types</TypographyH2>
      <ConditionalLink
        href="/game/arc-two/character-options/transformations/donum-accipiter"
        perm="donum-accipiter"
      >
        <TypographyH3>
          Donum Accipiter{" "}
          <span className="text-muted-foreground">
            (Gift of the Bird of Prey)
          </span>
        </TypographyH3>
      </ConditionalLink>
      <TypographyH3>
        Donum Corvus{" "}
        <span className="text-muted-foreground">(Gift of the Crow)</span>
      </TypographyH3>
      <ConditionalLink
        href="/game/arc-two/character-options/transformations/donum-leo"
        perm="donum-leo"
      >
        <TypographyH3>
          Donum Leo{" "}
          <span className="text-muted-foreground">(Gift of the Lion)</span>
        </TypographyH3>
      </ConditionalLink>
      <ConditionalLink
        href="/game/arc-two/character-options/transformations/donum-rex"
        perm="donum-rex"
      >
        <TypographyH3>
          Donum Rex{" "}
          <span className="text-muted-foreground">(Gift of the King)</span>
        </TypographyH3>
      </ConditionalLink>
      <TypographyH3>
        Donum Ursa{" "}
        <span className="text-muted-foreground">(Gift of the Bear)</span>
      </TypographyH3>
      <ConditionalLink
        href="/game/arc-two/character-options/transformations/donum-portentum"
        perm="donum-portentum"
      >
        <TypographyH3>
          Exsecratus Portentum{" "}
          <span className="text-muted-foreground">(Accursed Monster)</span>
        </TypographyH3>
      </ConditionalLink>
    </>
  );
}
