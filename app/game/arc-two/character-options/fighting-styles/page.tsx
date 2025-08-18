import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import CrowdbreakingSkillTree from "@/components/fighting-styles/crowdbreaking-skill-tree";
import BacksnapSkillTree from "@/components/fighting-styles/backsnap-skill-tree";
import BleedoutSkillTree from "@/components/fighting-styles/bleedout-skill-tree";
import ThroatgoreSkillTree from "@/components/fighting-styles/throatgore-skill-tree";
import MiradoSkillTree from "@/components/fighting-styles/mirado-skill-tree";
import Link from "next/link";
import LotarlinSkillTree from "@/components/fighting-styles/lotarlin-skill-tree";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Fighting Styles</TypographyH1>

      <TypographyH2 id="strain" className="mt-8">
        Strain
      </TypographyH2>
      <TypographyP>
        Some abilities call for your character to <b>strain</b> themself. When
        they do this, they draw upon an inner reserve of energy to accomplish a
        normally impossible feat of strength, speed, or cunning. As the name
        suggests, afterwards the character feels a deep fatigue different from
        the norm. Mark a{" "}
        <b>
          level one harm: <i>strained</i>.
        </b>
      </TypographyP>
      <TypographyH2 className="mt-8">Beastial Styles</TypographyH2>
      <TypographyP>
        Generations of fighters have come and gone in the fighting pits. Their
        styles have been shaped by the dominance of beasts and their animalistic
        tactics. Some styles have adopted elements of these tactics into styles
        used by fighters who can&apos;t shapeshift.
      </TypographyP>
      <TypographyH3 id="backsnap" className="mt-8 flex gap-2">
        Backsnap
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Overwhelming aggression
      </TypographyP>
      <BacksnapSkillTree />
      <TypographyH4 className="mt-6">Reckless Mindset</TypographyH4>
      <TypographyP>
        Backsnappers utilize such a frightening recklessness and savagery that
        most think their tactics thoughtless. Much to the contrary, it takes a
        special kind of resolve to risk the body as backsnappers do; and a
        practiced technique to crush foes&apos; bodies in the way they do.
      </TypographyP>
      <TypographyH4 className="mt-6">Immediate Brutality</TypographyH4>
      <TypographyP>
        When you charge an opponent before they can take stock of the situation,
        they become vulnerable to you.
      </TypographyP>
      <TypographyH4 className="mt-6">Bloody Counter</TypographyH4>
      <TypographyP>
        If you allow a foe&apos;s strike to hit you, you gain a guaranteed
        strike on them in return.
      </TypographyP>
      <TypographyH4 className="mt-6">Reaper&apos;s Surge</TypographyH4>
      <TypographyP>
        You may{" "}
        <Link href="#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to perform a feat of terrible strength on an opponent
        vulnerable to you.
      </TypographyP>
      <TypographyH4 className="mt-6">Unstoppable</TypographyH4>
      <TypographyP>
        For as long as you are fighting, your <b>Harms</b> cannot be used to
        prevent you from continuing to fight.
      </TypographyP>
      <TypographyH3 id="bleedout" className="mt-8 flex gap-2">
        Bleedout
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Small, precise strikes in vital regions
      </TypographyP>
      <BleedoutSkillTree />
      <TypographyH4 className="mt-6">Skirmish</TypographyH4>
      <TypographyP>
        Bleedouts lurk on the periphery of battle, waiting for their chance to
        strike and retreat once again. They train to watch their foes closely
        and to stab precisely with quick weapons.
      </TypographyP>
      <TypographyH4 className="mt-6">Debilitating Strikes</TypographyH4>
      <TypographyP>
        Your attacks naturally hamper your foes in some way (
        <i>slowing, fatiguing, clouding senses, weakening</i>), though your
        strikes are less lethal.
      </TypographyP>
      <TypographyH4 className="mt-6">Predatory Focus</TypographyH4>
      <TypographyP>
        If you choose to focus your attention on a single foe, you gain an
        opportunity to strike them unless they also devote their full attention
        to tracking your movements. While you do this, allies of your focused
        foe may gain opportunities to strike you.
      </TypographyP>
      <TypographyH4 className="mt-6">Combat Canny</TypographyH4>
      <TypographyP>
        After spending some time fighting a foe, you discover an exploitable
        vital spot of theirs.
      </TypographyP>
      <TypographyH4 className="mt-6">Deceiver&apos;s Surge</TypographyH4>
      <TypographyP>
        You may{" "}
        <Link href="#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to gain an opportunity to strike a foe and retreat, even if
        their full focus is on you.
      </TypographyP>
      <TypographyH3 id="throatgore" className="mt-8 flex gap-2">
        Throatgore
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Pack tactics, go for the throat
      </TypographyP>
      <ThroatgoreSkillTree />
      <TypographyH4 className="mt-6">Pack Tactics</TypographyH4>
      <TypographyP>
        Throatgores train to fight as part of a small unit. They watch for
        opportunities their allies create, or create those opportunities
        themselves. And when the time is right, they pounce.
      </TypographyP>
      <TypographyH4 className="mt-6">Coordinated Assault</TypographyH4>
      <TypographyP>
        When you assist a teammate on an attack, on a <b>4+</b> the foe is also
        one of (<i>tripped, knocked back, disarmed</i>).
      </TypographyP>
      <TypographyH4 className="mt-6">Fatal Opening</TypographyH4>
      <TypographyP>
        When you rush your foes but then reposition at the last second, you give
        an ally an opportunity to strike. On a crit, the foe is vulnerable to
        your ally.
      </TypographyP>
      <TypographyH4 className="mt-6">Isolating Counter</TypographyH4>
      <TypographyP>
        If an isolated foe attacks an ally, you gain an opportunity to strike.
      </TypographyP>
      <TypographyH4 className="mt-6">Fatal Finisher</TypographyH4>
      <TypographyP>
        You may{" "}
        <Link href="#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to make a devastating blow against an overwhelmed, cornered, or
        prone foe.
      </TypographyP>
      <TypographyH2 className="mt-8">Modern Styles</TypographyH2>
      <TypographyH3 id="crowdbreaking" className="mt-8 flex gap-2">
        Crowdbreaking
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Maximize damage to groups of surrounding foes
      </TypographyP>
      <CrowdbreakingSkillTree />
      <TypographyH4 className="mt-6">Basic Weapons Training</TypographyH4>
      <TypographyP>
        Crowdbreakers utilize large sweeping weapons (like chains and whips) and
        broad firing weapons like grenade launchers and automatic firearms. The
        basic motions of crowdbreaking are slow, methodical, powerful, and
        intimidating.
      </TypographyP>
      <TypographyH4 className="mt-6">Cascade</TypographyH4>
      <TypographyP>
        When you shove, knock aside, or otherwise unwillingly reposition an
        opponent, you may affect a second foe. A third on a crit.
      </TypographyP>
      <TypographyP>
        You are not subject to your own weapons&apos; repositioning effects
        (though you are subject to its damage if applicable).
      </TypographyP>
      <TypographyH4 className="mt-6">Follow Through</TypographyH4>
      <TypographyP>
        Your attacks with crowdbreaking weapons naturally knock opponents back
        or over.
      </TypographyP>
      <TypographyH4 className="mt-6">Clear a Path</TypographyH4>
      <TypographyP>
        You sweep your weapon in a particularly slow, obvious, and intimidating
        fashion. Weak willed foes will be frightened and want to move out of the
        way. Quick foes may gain a chance to strike. Foes you do strike with
        these motions are hit with significant force.
      </TypographyP>
      <TypographyH4 className="mt-6">Muscular Surge</TypographyH4>
      <TypographyP>
        You may{" "}
        <Link href="#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to fight a gang of surrounding foes on equal footing.
      </TypographyP>
      <TypographyH3 id="mirado" className="mt-8 flex gap-2">
        Mirado
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Situational awareness and adaptability
      </TypographyP>
      <MiradoSkillTree />
      <TypographyH4 className="mt-6">Combat Awareness</TypographyH4>
      <TypographyP>
        Mirado is the hand to hand martial art which compliments soldiers
        equipped with integrated combat awareness systems. Mirado is about
        centering yourself in the eye of the storm and reacting to the situation
        as it changes.
      </TypographyP>
      <TypographyH4 className="mt-6">Combat Instinct</TypographyH4>
      <TypographyP>
        You cannot be surprise attacked by anything which is possible to
        perceive with ordinary senses. This is best complimented with cyberware
        granting sensory input beyond normal human ranges.
      </TypographyP>
      <TypographyH4 className="mt-6">Six Edged Intersection</TypographyH4>
      <TypographyP>
        Mirado is an ancient Hiean word, which roughly translates into &quot;the
        art of six edges&quot;. The combat awareness aspects of the martial art
        is new, but the striking style has retained its roots. When up close and
        personal with a foe, large weapons and movements become ineffective
        against you.
      </TypographyP>
      <TypographyH4 className="mt-6">Third Eye</TypographyH4>
      <TypographyP>
        While already in the thick of combat, you may <b>push yourself</b> to
        ask the <b>Narrator</b> <i>&quot;What am I missing?&quot;</i>. The{" "}
        <b>Narrator</b> must answer honestly.
      </TypographyP>
      <TypographyH4 className="mt-6">Mirado Surge</TypographyH4>
      <TypographyP>
        You may{" "}
        <Link href="#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to deliver a series of rapid consecutive strikes which are
        devastating to an overwhelmed, fatigued, or overconfident foe.
      </TypographyP>
      <TypographyH3 id="mirado" className="mt-8 flex gap-2">
        Lotarlin Flow
      </TypographyH3>
      <TypographyP className="text-muted-foreground">
        Constant movement, persistent pressure
      </TypographyP>
      <LotarlinSkillTree />
      <TypographyH4 className="mt-6">Cut the Water</TypographyH4>
      <TypographyP>
        Lotarlin Flow can trace its origins to the Lotarlin Rebellion. The
        rebels had a unique style of movement which has been popularized by
        modern media. Contemporary Lotarlin focuses on this spirit:
        practitioners &quot;cut&quot; from location A to B.
      </TypographyP>
      <TypographyH4 className="mt-6">Permeate</TypographyH4>
      <TypographyP>
        Your evasions are effortless and smooth when traversing difficult
        terrain. While a still-navigable barrier is within reach, foes cannot
        strike you with precision.
      </TypographyP>
      <TypographyH4 className="mt-6">Cut the Sky</TypographyH4>
      <TypographyP>
        Lotarlin experts learn to perform large aerial movements, making foes
        relying on cover vulnerable to them. While in these maneuvers, the
        practitioner is also vulnerable to sweeping or area attacks.
      </TypographyP>
      <TypographyH4 className="mt-6">Ripples Return</TypographyH4>
      <TypographyP>
        Your strikes come predictably but reletlessly. Foes which you focus your
        efforts on eventually become your choice of <i>tired</i> or{" "}
        <i>scattered</i>.
      </TypographyP>
      <TypographyH4 className="mt-6">Flowing Surge</TypographyH4>
      <TypographyP>
        You may{" "}
        <Link href="#strain">
          <span className="text-red-500 underline font-bold">strain</span>
        </Link>{" "}
        yourself to allow your hands to flow freely: your weapons uninterrupted
        by your body&apos;s maneuverings for a few breaths.
      </TypographyP>
    </>
  );
}
