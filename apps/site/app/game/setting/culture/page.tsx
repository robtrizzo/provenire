import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typography";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Setting", href: "/game" },
          { name: "Era 3", href: "/setting" },
          { name: "Culture", href: "#" },
        ]}
      />
      <div className="z-30 relative">
        <div
          className="absolute top-0 w-full max-w-[1067px] mx-auto"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/wolves_crows_bears-XuELQ9zQQpjnbAyW7AnTMaNXQIkw9J.png"
            alt="room"
            layout="fill"
            objectFit="cover"
            className="rounded-xl opacity-20 z-10"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
        </div>
        <div className="relative z-30 flex flex-col">
          <TypographyH1 className="mt-4">Culture</TypographyH1>
          <TypographyP>
            <strong>Rath</strong> is vast. It stretches from the King&apos;s
            jungle doorstep to the northern Tarakon Bogs to Ilswinth&apos;s
            sandswept dunes in the West. The people of Rath are as varied as the
            land itself. But there are common threads that bind them all.
          </TypographyP>
          <TypographyH2 className="mt-4">Blood</TypographyH2>
          <TypographyP>
            Kingwulf&apos;s holy bloodline reigns supreme. The three bestial
            bloodlines (wolves, bears, crows) beneath him: bloodline of the wolf
            above the rest. But even further, there is a convoluted matrix of
            lesser geniologies and hierarchies which dictate one&apos;s place in
            society.
          </TypographyP>
          <TypographyP>
            It is a subject of fascination for Rath&apos;s high society, though
            only understood by geniological scholars. Heritage outside of the
            beastly bloodlines is undesirable, though if it is in a small
            proportion and hails from a notable bloodline, it is desirable.
            Being capable of bestial transformation is incredibly important,
            though those only capable of partial transformation is looked down
            upon. Being birthed from a mother in a bestial form is confoundingly
            undesirable as opposed to being birthed from a human mother. It goes
            on and on. Most people colloquially use the terms{" "}
            <strong>thickblood</strong> (meaning <i>good</i>, <i>powerful</i>,{" "}
            <i>pure</i>, higher in the hierarchy) and <strong>thinblood</strong>{" "}
            (meaning lower) to approximate.
          </TypographyP>

          <div className="relative mt-4">
            <div
              className="absolute top-0 w-full max-w-[1067px] mx-auto mt-32"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/spookymoose_painting_of_a_menacing_blackbear._pastel_dark_gra_a6a90ab1-3f4e-4161-a767-5b6809d8c2c3_1-HLxUwCiiN7JmANfxXOkCou8uAMMeZt.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-20 z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
            </div>
            <div className="relative z-30">
              <TypographyH2>Beasts</TypographyH2>
              <TypographyP>
                The three bestial bloodlines are at the very core of Rathi
                culture.
              </TypographyP>
              <TypographyH3>Bears</TypographyH3>
              <TypographyP>
                In a time from long before, only wolves were welcome in{" "}
                <b>Kingwulf&apos;s</b> ravenous pack. The rest were named
                monsters and cast out into the jungle to die. Most did, but some
                were so foul and so cursed that they lived on.
              </TypographyP>
              <TypographyP>
                There was one such creature once upon a time. The most vile and
                corrupted monster that had ever walked the jungle.{" "}
                <b>Kingwulf</b> commanded it be slain. He ordered three hunts.
                And three hunts vanished never to return. The creature had
                collected other lesser foul monsters to serve it. With this, the
                ever magnanimous <b>Kingwulf</b> began to respect the creature.
                Though it is foul, it is mighty.
              </TypographyP>
              <TypographyP>
                And so <b>Kingwulf</b> invited the creature to hunt with him. He
                wanted to see if the creature&apos;s might was worthy of
                acceptance into the pack. The two hunted for three days and
                three nights before it betrayed the king attempting to score a
                cheap wound. <b>Kingwulf</b> laughed. No creature, no matter how
                foul, could ever harm him. <b>Kingwulf</b> ordered his sons to
                fell the traitorous monster.
              </TypographyP>
              <TypographyP>
                Though it could not harm the king, the creature was indeed
                mighty. The battle lasted for days, if not weeks.{" "}
                <b>Kingwulf</b> lost many sons, and would have lost more if not
                for the intervention of unlikely allies.
              </TypographyP>
              <TypographyP>
                Bears burst from the earth from which they had their burrows.
                They grabbed the creature and held it down long enough to be
                slain. They begged forgiveness, for they had followed the
                creature for its might, not its treason. The living princes
                brought the bears to their father, who said,{" "}
                <b
                  style={{
                    textShadow: "crimson 1px 0 16px",
                  }}
                >
                  &quot;Though you are not quick, you are strong. Though your
                  jaws cannot tear like mine, your paws can scrape the earth and
                  make homes unlike any other. You will serve me and live
                  besides my kin.&quot;
                </b>
              </TypographyP>
              <TypographyH4>Bears in society</TypographyH4>
              <TypographyP>
                To be a bear, or bearlike, is to be sturdy, loyal, and
                domestic-minded. They are said to be loving parents and
                excellent homemakers, though this nature raises weak children
                unsuited for the hunt. They are considered protectors and
                dutiful servants. They are also considered slow and dumb, best
                left to manual labor or simpler tasks. Some view them as lazy,
                gesturing towards normal bears&apos; tendency to hibernate,
                though this is not necessary for those with the transformation.
              </TypographyP>
              <TypographyH4>Ursine Transformations</TypographyH4>
              <TypographyP>
                For those who are gifted with an <b>ursine transformation</b>,
                it begins young. Body hair, elongated fingernails, sharp teeth -
                all things that are easily confused with a{" "}
                <b>lupine transformation</b>. The clear distincifying feature is
                the size. Where any <b>thickblooded</b> child can have{" "}
                <i>surge sickness</i>, it&apos;s no less painful and deadly for
                the <b>ursine</b>. Spontaneously doubling or tripling in size
                before returning to normal is incredibly stressful on the body
                and leaves many maimed or dead. Not to mention anyone too close
                to them can get hurt as well.
              </TypographyP>
              <TypographyP>
                For the ones who make it to maturity, they often stand out in a
                crowd. The transformation leaves a permanent impact on the body,
                growing larger than others will naturally. Most with the{" "}
                <b>ursine transformation</b> manifest the bear&apos;s traits
                sparingly, knowing that it will be followed by an immense
                appetite.
              </TypographyP>
              <TypographyP>
                Something which most <b>usrines</b> keep to themselves, but
                which is undenaibly true, is that they have a deep affinity for
                dreams. Some with a greater gift have been said to lay in bed
                for days and weeks in a pleasant slumber which they don&apos;t
                want to be woken from. Others dread sleep for the torturous
                visions they claim their dreams bring.
              </TypographyP>
            </div>
          </div>
          <div className="relative mt-4">
            <div
              className="absolute bottom-0 w-full max-w-[1067px] mx-auto mb-60"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/spookymoose_painting_of_a_royal_crow._pastel_dark_graphic_nov_32d63fee-4704-42a4-939a-883e291d99b9_2-6wKEBMLxlCZVfCAbdjYTkvDwmPVIXo.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-20 z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
            </div>
            <div className="relative z-30">
              <TypographyH3>Crows</TypographyH3>
              <TypographyP>
                Much like bears, crows were not accepted in Rath once upon a
                time. Only a time which <b>Kingwulf</b> can remember, though the
                tale of their <i>Provenire</i> has stood the test of time.
              </TypographyP>
              <TypographyP>
                As the story goes, in <b>Kingwulf&apos;s</b> youth he loved the
                hunt-hearths and feasting fires of his clan. But as he feasted
                and gorged and sired bloodlines, he continued to grow. He grew
                and he grew and he grew until no camp bonfire could warm him
                anymore.
              </TypographyP>
              <TypographyP>
                And so <b>Kingwulf</b> went in search of a flame powerful enough
                to warm his masive body. For three days and three nights he
                wandered the jungle until he found it: a pillar of fire so great
                and so wild that it threatened to consume the jungle itself.
                With three great breaths, <b>Kingwulf</b> blew out the fires to
                the North. He blew out the fires tot he East, and he blew out
                the fires to the West. He tamed the fire and declared it his;
                and he curled up around it and for the first time in many years
                he felt warm.
              </TypographyP>
              <TypographyP>
                As the story goes, there was a horrid and terrible creature that
                haunted the Northern woods. Preying upon the weak and young. A
                despicable creature, but a cunning one. It lurked and it
                festered for many moons before it spotted a young wolf. Lively
                and fierce - certainly one of <b>Kingwulf&apos;s</b> brood. The
                terrible creature stole the youngster in the dead of night,
                knowing who would come looking.
              </TypographyP>
              <TypographyP>
                And she did. A princess, <b>Kingwulf&apos;s</b> own daughter
                snarled and gnashed her teeth and threatened to tear the foul
                creature to bits, but the cunning monster had hidden her son.
                &quot;Put out your father&apos;s flame,&quot; it said, &quot;and
                for every night I wait, I will eat a toe.&quot;
              </TypographyP>
              <TypographyP>
                The Princess growled and she howled, but ultimately she conceded
                to the foul monster. &quot;The way is guarded, how can I
                possibly sneak past?&quot; she despaired.
              </TypographyP>
              <TypographyP>
                &quot;It is easy,&quot; the creature smirked, &quot;My servant
                the serpent will take you there. You will crawl on your belly
                and slither through the grime and you will get to your
                father&apos;s flame unnoticed.&quot;
              </TypographyP>
              <TypographyP>
                The serpent hissed. Another despicable and foul monster spawned
                from a cursed womb, but like its master it was full of cunning.
                It knew the ways beneath the trees and took cruel delight of
                debasing the Princess all the way to their destination.
              </TypographyP>
              <TypographyP>
                At the mere sight of the royal flame, the foul serpent hissed
                and burrowed into the earth. Left alone with the flame, the
                Princess hatched a cunning plan of her own. She tore a piece of
                the flame away, consuming it. It burned her so very much, but
                her father&apos;s blood sheltered her from the worst of the
                heat. She feasted for two days and two nights, lamenting the
                deformation of her son.
              </TypographyP>
              <TypographyP>
                But on the third morning, she had finished her task. She
                returned to the monster of the North and demanded her son
                returned. The creature cackled &quot;You foolish wolf, I had
                eaten your son long before you found me! And now your father
                will never be warm again!&quot;
              </TypographyP>
              <TypographyP>
                The Princess returned home to tell her father what had happend
                and beg his forgiveness. &quot;Though your grandson is dead, I
                have saved your flame.&quot; The Princess breathes, and the fire
                she consumed flickers in her gut.
              </TypographyP>
              <TypographyP>
                <b>Kingwulf</b> few into a rage, banishing the Princess to the
                deepest, darkest prison in all his kingdoms. He then rampaged
                through the jungle, but the foul creature was nowhere to be
                found.
              </TypographyP>
              <TypographyP>
                This is when a crow landed on the King&apos;s shoulder, carrying
                a serpent in it&apos;s beak. &quot;O great and mighty{" "}
                <b>Kingwulf</b>, I may not be your kin, but I am a humble
                servant. You see, I have captured the creature that led your
                daughter to your flame. And with your grace, I will make it tell
                you where its master hides from you.&quot;
              </TypographyP>
              <TypographyP>
                <b>Kingwulf</b>, ever gracious, gave the crow its chance to
                prove herself to him.The crow plucked an eye from the serpent.
                Then the other, then finally its teeth before it hissed and
                betrayed its master.
              </TypographyP>
              <TypographyP>
                <b>Kingwulf&apos;s</b> rage returned to him, he ravaged the
                jungle where the monster hid and devoured it for all to see.
                When he was done, he said to the crow,{" "}
                <b
                  style={{
                    textShadow: "crimson 1px 0 16px",
                  }}
                >
                  &quot;You do serve me well. With your sharp eyes, you will be
                  my wardens against the little creatures that slither
                  underfoot. With your sharp beaks you will pull answers from
                  your prey and deliver me the truth. And you will live side by
                  side with my kin.&quot;
                </b>
              </TypographyP>
              <TypographyH4>Crows in society</TypographyH4>
              <TypographyP>
                To be a crow, or crowlike, is to be cunning, observant,
                ruthless, and communal. They are said to be capable and
                independant servants, though cruel masters. The most
                intellectually or tactfully demanding tasks in Fenrir are
                usually performed by the corvids, though they are often
                suspected for treachery or exploitation.
              </TypographyP>
              <TypographyH4>Corvid Transformations</TypographyH4>
              <TypographyP>
                Their transformation can begin early, but it takes much longer
                than the <b>lupine</b> or <b>ursun</b> to reach maturity.
                Painful quills will grow from the child&apos;s skin and
                wingbones will wrinkle their backs. <i>Surge sickness</i> can
                outright kill a corvid child: the wings bursting from the back
                and the arms pulling into the body can cause catastrophic blood
                loss for the unlucky.
              </TypographyP>
              <TypographyP>
                Among the corvids, child-rearing is a community effort. Where a
                child does have a mother and father, every elder in the pod is
                their parent. For the vast majority of children who can begin to
                manifest corvid traits, they have many trials still ahead of
                them. Flight sadly doesn&apos;t come naturally and must be
                taught. Under the glaring eyes of their parents, the corvid
                children are forced to learn quickly to avoid more extreme
                tactics of tutilage.
              </TypographyP>
              <TypographyP>
                Once at maturity, the <b>corvid transformation</b> is one which
                its possessors use without much effort. For plenty, their corvid
                form becomes more comfortable to them than their bipedal one.
              </TypographyP>
            </div>
          </div>
          <div className="relative mt-4">
            <div
              className="absolute top-0 w-full max-w-[1067px] mx-auto mt-10"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/spookymoose_painting_of_a_royal_wolf._pastel_dark_graphic_nov_66b2be79-d797-4d41-9b2d-dbbd43088ea4_2-MMDqH7eR7B78QgxnFO5GPWw6iN0mHT.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-20 z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
            </div>
            <div className="relative z-30">
              <TypographyH3>Wolves</TypographyH3>
              <TypographyP>
                The heirs of <b>Kingwulf&apos;s</b> blood. The apex predators of
                the jungle, then the world. Wolves reign supreme over all other
                forms of life.
              </TypographyP>
              <TypographyP>
                In ancient Rath, there was only one pack of wolves in the entire
                world. When they would hunt, they would become a ravenous
                scourge, leaving nothing in their tracks. When <b>Kingwulf</b>{" "}
                came into power, he changed the pack forever. They only hunt
                when he signals they hunt. They only eat once he has had his
                fill. They can only mate when he sees it fit. And{" "}
                <b>Kingwulf</b> would signal these things sparingly. The once
                apocalyptic pack became tamed, coexisting with nature until
                their king howled to signal the next feast. And when he did,
                their bloodlust emerged stronger than ever.
              </TypographyP>
              <TypographyP>
                During the <b>War of All</b>, <b>Kingwulf</b> holwed so
                ferociously, so deafeningly, that every wolf across the empire
                could hear: the hunt had begun again. A hunt and a feast which
                has never ended in the untold years since.
              </TypographyP>
              <TypographyH4>Wolves in society</TypographyH4>
              <TypographyP>
                To be a wolf is to rule, to hunt, to feast on anything and
                everything you see fit. But it also means an undying respect for{" "}
                <b>Kingwulf&apos;s</b> hierarchy. To be wolf-like is to serve
                your superiors and to lord over your lessers. It is synonymous
                with being &quot;good,&quot; and so it also has far less social
                and cultural attribution.
              </TypographyP>
              <TypographyP>
                Wolves fill nearly every leadership role in the empire, though
                there are uncommon exceptions. When the rare crow or bear
                commands wolves, they often find themselves needing to prove
                their strength over and over again by spiteful and jealous wolf
                underlings who plot their demise.
              </TypographyP>
              <TypographyP>
                When it comes to family, wolves often group themselves into a
                pack of a handful of families. There is a strict hierarchy even
                among the families and the pack: always with one leader. That
                being said, pups are often spoiled and doted on by their
                parents. They have nothing to prove, not to them. But once
                they&apos;re grown, they&apos;ll certainly have to prove
                themselves to <b>Kingwulf</b>.
              </TypographyP>
              <TypographyH4>Lupine Transformations</TypographyH4>
              <TypographyP>
                Of the three royal beast transformations, the{" "}
                <b>lupine transformation</b> is the easiest on the body. Some{" "}
                <b>thickblooded</b> children are born in their wolf form and
                effortlessly switch between the two. Many find that they
                gradually and instinctually shift in their crawling years; yet
                more still force the transformations by the time they&apos;re an
                adolescent.
              </TypographyP>
              <TypographyP>
                The rare <b>thickblooded lupine</b> child with{" "}
                <i>surge sickness</i> often survives. Unlike the other
                transformations, this one is purely of <b>Kingwulf&apos;s</b>{" "}
                blood, and so of course the children are meant to survive it.
              </TypographyP>
              <TypographyP>
                As for <b>thinblooded lupines</b>, all of this can take far
                longer. Sharp teeth, yellow eyes, hooked canine legs: individual
                traits manifest from time to time and are sometimes
                uncontrollable. <b>Thinblooded lupines</b> are lucky if they can
                fully transform. By maturity, the most that many can do is hold
                one trait steady for a few hours.
              </TypographyP>
            </div>
          </div>
          <div className="relative mt-4">
            <div
              className="absolute top-0 w-full max-w-[1067px] mx-auto mt-20"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="https://mz3l6y8ywafu109t.public.blob.vercel-storage.com/setting_photos/wreath-80AnziWcrn5ZKA6rq9nc01I8tmyE5j.png"
                alt="room"
                layout="fill"
                objectFit="cover"
                className="rounded-xl opacity-20 z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-xl shadow-fuzzy-inset z-20"></div>
            </div>
            <div className="relative z-30">
              <TypographyH2 className="mt-4">Marriage</TypographyH2>
              <TypographyP>
                The obsession with bloodline extends to marriage and children.{" "}
                <strong>Thickblooded</strong> Rathi view it as their societal
                duty to spread their bloodline as far as they can. Though
                paradoxically, as much of the geniological drivel is, most Rathi
                highborns are unwilling to have children with{" "}
                <strong>thinbloods</strong>.
              </TypographyP>
              <TypographyP>
                Even more pernicious is the tradition of marriage itself. To the
                Rathi, <strong>Kingwulf</strong> posesses the right to marry any
                woman. And so anyone who wants to marry needs{" "}
                <strong>Kingwulf&apos;s</strong> permission first. And he does
                not give it lightly. Before one can take a wife, they must prove
                themselves in the eyes of the King. This is typically military
                or hunting success, though there is no consistent metric.
              </TypographyP>
              <TypographyP>
                Once they have been granted a wife, they may choose any
                unmarried woman in the empire. And that man may keep proving
                himself and keep taking wives for as long as{" "}
                <strong>Kingwulf</strong> chooses to grant them. The women they
                choose get no say in the matter. Their only way out is to kill
                their husband. And many do; it&apos;s seen as what happens when
                a man chooses a wife outside of his station. This has created a
                cultural phenomenon of powerful and desirable women with a
                string of dead husbands. The more husbands they kill, the more
                powerful her bloodline clearly is - which in turn makes her even
                more desirable. These women are coined <i>dire wives.</i>
              </TypographyP>
              <TypographyP>
                It would be impossible for <strong>Kingwulf</strong> to give his
                spoken permission to every marriage in the empire. So this right
                has unspokenly passed on to Dukes and even some lesser nobility
                as the King&apos;s proxies. <strong>Kingwulf</strong> never
                spoke this into law, but he has not spoken against it either.
                And so marriage rights have become as complicated as the matrix
                of bloodline heirarchy is. Who exactly can give marriage
                permissions? What happens when two nobles disagree on giving
                permission? Since the King&apos;s proxies have authority to
                marry any woman, what happens when they use that right in
                another proxy&apos;s territory?
              </TypographyP>
              <TypographyP>
                In reality, this means the powerful hoard wives and the weak are
                left to work and toil desperately for their approval. The term
                for these desperate unmarried men is simply: <i>unworthy</i>. A
                population of men willing to resort to more and more extreme
                lengths to gain a wife.
              </TypographyP>
              <div className="relative z-30">
                <Separator className="my-4" />
                <div className="w-full flex justify-between">
                  <Link href="/game/setting">
                    <Button variant="outline">
                      <ChevronLeft /> Era 3
                    </Button>
                  </Link>
                  <Link href="/game/setting/steel-trap">
                    <Button variant="outline">
                      The Steel Trap <ChevronRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
