import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from "@/components/ui/typography";
import RemembranceCard from "./(components)/remembrance-card";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Remembrances</TypographyH1>
      <TypographyP>
        Each remembrance represents a life your character experienced in the{" "}
        <i className="font-old">Crucible</i>. Each remembrance makes a set of{" "}
        <b>skills</b>, <b>abilities</b>, and <b>histories</b> available. The
        manner of learning or accessing these options is determined by your{" "}
        <Link
          href="/game/arc-three/character-options/integrations"
          className="text-red-500 underline font-bold"
        >
          integration
        </Link>
        .
      </TypographyP>

      <div className="flex flex-col gap-2 mt-4">
        <RemembranceCard name="Dunstan" img="flower">
          <span className="text-muted-foreground">
            Argos, post the cataclysm (OSG) and pre Fenrir&apos;s rise.
          </span>
          <TypographyP>
            A peaceful soul disinterested in duty or strife - instead fostering
            a love for art and growing things. A heartbreaking betrayal forces
            him to pursue familial ambitions. After years of conditioning, he
            demonstrates to all that he cannot be made into someone he is not.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> art, gardening, education,
            espionage, <b className="text-fuchsia-500">Donum Dolus</b>, fleeting
            knowledge of Helix.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Engel" img="chain">
          <span className="text-muted-foreground">
            Ulgatia, post the cataclysm (OSG) and pre Fenrir&apos;s rise.
          </span>
          <TypographyP>
            A boy with humble beginnings discovers his generational talent with
            the sword. Arrogance overtakes him with a meteoric rise of
            reputation. A humbling moment changes his heart, shaping him into a
            dedicated mentor. When Rath finally comes for his city, his sword
            skills spare his life, though he spent the rest of his days a slave
            in the Steel Trap.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> leadership, mentorship,
            military tactics, <b className="text-red-500">Ulgatian Aldams</b>,{" "}
            <b className="text-emerald-500">Swordstyles</b>, knowledge of
            Ulgatia and the early Steel Trap.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Issa" img="wolves">
          <span className="text-muted-foreground">Era One, Gredora.</span>
          <TypographyP>
            An unwilling inheritor of the power to forge war machines. A man at
            odds with his family and society for his beliefs. Beliefs which
            ultimately lead to his violent death, as well as the death of his
            caravan at the hands of Rathi hounds.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> art, forging, survival,{" "}
            <b className="text-fuchsia-500">Donum Fornax</b>,{" "}
            <b className="text-red-500">Gredoran Aldams</b>, knowledge of
            ancient Gredora.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Luciana" img="gate">
          <span className="text-muted-foreground">
            Yama, during the cataclysm (OSG)
          </span>
          <TypographyP>
            A Heian girl with the unexpected power to animate the dead. Cast out
            from her home she subsists and ventures to the Hidden City in hope
            for a better life. Her search nearly kills her, but she&apos;s saved
            by women who can animate the dead: just like her.
          </TypographyP>
          <TypographyP>
            She enjoys a brief span of tutilage and sisterhood before
            Order&apos;s armies march into Yama to conquer. Luciana and twelve
            sisters hold a narrow pass against thousands. She suffers grievous
            injury and loses everyone she loves, but she lives. And if only her
            strife ended there...
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> survival, labor, education,{" "}
            <b className="text-fuchsia-500">Donum Ossis</b>,{" "}
            <b className="text-red-500">Heian Aldams</b>, knowledge of Heia,
            Yama, and the Cataclysm.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Makino" img="skeletons">
          <span className="text-muted-foreground">
            Era Two, the Hidden City.
          </span>
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
          <TypographyP>
            <b className="text-lg">Abilities:</b> theft, stealth,{" "}
            <b className="text-fuchsia-500">Donum Cinis</b>,{" "}
            <b className="text-red-500">Heian Aldams</b>,{" "}
            <b className="text-emerald-500">Long-knife Style</b>, knowledge of
            the Hidden City.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Matteo" img="desert">
          <span className="text-muted-foreground">Era One, Narscillia.</span>
          <TypographyP>
            A kindhearted soul unfit to live a lonesome life is damned to be a
            Relict by cruel chance. Forbidden from close bonds, he metes out a
            miserable existence doing his duty - until life has other plans. By
            sheer chance, he finds a new family and a love. His duty takes him
            away from her time and time again but they always meet again.
          </TypographyP>
          <TypographyP>
            And then life takes her from him. Brutally. Violently. No, it
            wasn&apos;t life that did this. People did this. To his dying day,
            Matteo made it his mission to kill every last person he could.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> survival, hunting, music,{" "}
            <b className="text-red-500">Narscillian Aldams</b>,{" "}
            <b className="text-emerald-500">Shadespear</b>, knowledge of ancient
            Narscillia.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Takota" img="volcano">
          <span className="text-muted-foreground">Era One, Gredora.</span>
          <TypographyP>
            An adopted son of a Gredoran Duke, ever prideful, even patriotic,
            ever ready to prove himself. A lifetime of ambition and burned
            bridges culminates in a choice between country and family. A choice
            which the Gredoran Son rejects, instead sacrificing himself for a
            chance to save it all - for a chance at redemption.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> military tactics, diplomacy,
            espionage, <b className="text-red-500">Gredoran Aldams</b>,{" "}
            <b className="text-emerald-500">Phalanx Style</b>, knowledge of
            ancient Gredora.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Velda" img="crow">
          <span className="text-muted-foreground">
            Fenrir, post the cataclysm (OSG) and pre Fenrir&apos;s rise.
          </span>
          <TypographyP>
            A wolf desperate to save her infant son from the Owl. The foul
            creature sends her on a journey to steal Kingwulf&apos;s flame.
            Protected by her burning love for her son, she consumes the flame
            and returns to the Owl, who returns her son to her. But victory is
            short lived. Kingwulf rampages through the jungle, kills the foul
            Owl, and seals Velda away in the deepest, darkest dungeon in his
            empire.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> hunting, survival,{" "}
            <b className="text-fuchsia-500">Donum Rex</b>,{" "}
            <b className="text-fuchsia-500">Donum Ignis</b>,{" "}
            <b className="text-emerald-500">Throatgore</b>, knowledge of Fenrir,
            Kingwulf, and the early days of the Steel Trap.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Ygg" img="noose">
          <span className="text-muted-foreground">Rath, Era One.</span>
          <TypographyBlockquote className="text-red-500 mb-0 mt-1">
            Content warning
          </TypographyBlockquote>
          <TypographyP>
            Birthed of a mother hung from a noose after suffering a most awful
            fate. A creature boy more like a calamity roamed the wilderness.
            Misunderstood, feared, and often betrayed, Ygg develops a disdain
            for people - preferring the law of the jungle.
          </TypographyP>
          <TypographyP>
            Rathi warrior after Rathi warrior venture out into Ygg&apos;s jungle
            to slay the beast for glory, never to return. Superstition builds.
            Mosters flock to Ygg&apos;s safety.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> hunting, survival,{" "}
            <b className="text-fuchsia-500">Donum Portentum</b>, knowledge of
            Kingwulf.
          </TypographyP>
        </RemembranceCard>
        <RemembranceCard name="Zephyr" img="stars">
          <span className="text-muted-foreground">Era One, Narscillia.</span>
          <TypographyP>
            A young girl with power over the wind; and also stalked by tragedy.
            As her power grows, so too do the attacks on her and those near her
            by creatures of the night. A half decade of escalating conflict
            culminates in a final confrontation with the God of Night and Stars
            which altered the very terrain of her home.
          </TypographyP>
          <TypographyP>
            <b className="text-lg">Abilities:</b> hunting, survival, music,{" "}
            <b className="text-red-500">Narscillian Aldams</b>,{" "}
            <b className="text-fuchsia-500">Donum Ventus</b>, knowledge of
            ancient Narscillia and the God of Night and Stars.
          </TypographyP>
        </RemembranceCard>
      </div>

      <div className="mt-8" />
    </>
  );
}
