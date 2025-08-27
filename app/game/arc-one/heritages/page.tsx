import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heritages from "@/public/heritages.json";
import { Heritage } from "@/types/game";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default async function Page() {
  return (
    <div>
      <Breadcrumbs />
      <TypographyH1 className="mb-12">Heritages</TypographyH1>
      <HeritageSummary heritage={heritages[0]} />
      <TypographyP>
        A divine empire united by love. Where kings were feared for their might
        yet still ruled with respect and dignity. Protectors of the world.
        Champions of justice.{" "}
        <i>
          &quot;Hold your head up high, young one. You hail from the greatest
          kingdom the world has ever known.&quot;
        </i>
      </TypographyP>
      <TypographyP>
        Anidinians in the Steel Trap carry their pride for all to see. They
        nurture it and pass it from generation to generation. They tell the
        stories of the founder-gods and the heroes in the War of All. They
        remember the bountiful harvests and marriage feasts. They remember the
        peace and safety of the common man guarded by knights in shining armor.
        They remember that love is the most powerful force in the world.
      </TypographyP>
      <TypographyP>
        Fenrir children are told the tale of <i>Dalrik</i>, a wolf pup scorned
        for his weakness, though with a fierce heart. As the story goes,{" "}
        <i>Dalrik</i> was starving alone in the wilderness when he was caught
        between by almighty <b>Kingwulf</b> and his prey. But <i>Dalrik</i>{" "}
        howled and bared his teeth, showed that even the smallest and weakest
        wolf can have courage.
      </TypographyP>
      <TypographyP>
        And so <b>Kingwulf</b> blessed <i>Dalrik</i>: invited him to eat from
        the same kill as he. Little <i>Dalrik</i> grew up big and strong. So
        strong that he returned home. The people in his hometown laughed:{" "}
        <i>
          &quot;Certainly you must be a different Dalrik, not the one we cast
          out for being small and weak.&quot;
        </i>{" "}
        Ever-eager <i>Dalrik</i> kept his head high. He joined the holy war in
        the North. He served his King well in that war, and when the army
        breeched the enemy&apos;s walls, <i>Dalrik</i> came face to face with
        the evil queen&apos;s bodyguards: the <i>Six Swordsmen</i> and the{" "}
        <i>immortal she-crow</i>.
      </TypographyP>
      <TypographyP>
        They did battle. <i>Dalrik</i> once again felt small and weak against
        the <i>Six Swordsmen</i>, who had sold their souls to the wicked{" "}
        <i>she-crow</i> for power. But <i>Dalrik</i> killed one and ate him - he
        gained the strength of the kill just like <b>Kingwulf</b> had taught
        him. And with that, <i>Dalrik</i> got bigger and stronger and even ate
        the evil queen.
      </TypographyP>
      <TypographyP className="italic">
        So remember, children, eat your meat and drink your blood. That way you
        can grow up big and strong like <i>Dalrik</i>.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[1]} />
      <TypographyP>
        Argos lives on. The bloodline is preserved: and one day it will return
        to the three gates on the rolling hills. A place of infinite bounty,
        compassion, and civilized pursuits.
      </TypographyP>
      <TypographyP>
        Argosi in the Steel Trap meticulously track their family trees, holding
        especially dear any ties to one of Argos&apos;s four great families of
        yore. To some, this is a point of comfort and pride. For others, they
        talk of Fenrir&apos;s fear of their power. They gesture at their lack of
        Great House linneage and conclude that <b>Kingwulf</b> uses his
        oppressive system of marriage to thin the bloodline that could fight
        back against him.
      </TypographyP>
      <TypographyP>
        Argosi especially revere water, going through great lengths to collect,
        purify, and drink as much as they can. They do this in secret to avoid
        the viscious mockery of the Rathi.{" "}
        <i>
          &quot;Only the thinnest-blooded weaklings would prefer water to
          blood.&quot;
        </i>
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[2]} />
      <TypographyP>
        For every cruelty, for every indignity, and for every horror Fenrir has
        inflicted on the world, the Bwarhein have suffered longer and worse. The
        world is cruel. Life is not fair. In a world of kill or be killed, hunt
        or be hunted, your people are the prey; the slain. Long gone is your
        pride. It was torn to shreds - gulped and steeping in the gullets of
        Fenrir&apos;s monstrous children.
      </TypographyP>
      <TypographyP>
        All that is left of your people is a dream:{" "}
        <i>Make them hurt. As much as we can.</i>
      </TypographyP>
      <TypographyP>
        Bwarhein in the Steel Trap are indistinguishable from Fenrir. Many even
        possess a transformation - and powerful ones at that, though their
        powers are far stronger than even that. With this strength, many
        Bwarhein find that they have the potential to rise high in the ranks of
        workers and enforcers, should they choose. A fact many grapple with,
        given the consequences of their true nature becoming exposed.
      </TypographyP>
      <TypographyBlockquote>
        &quot;These accursed monsters are a smear of degeneracy on our
        bloodline. Birthed from mothers consorting with demons in vulgar dreams.
        They too must be made a living example of why even fantasizing about a
        man other than the holy appointed husband leads to profanity.&quot;
      </TypographyBlockquote>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[3]} />
      <TypographyP>
        Ferocious and independant, even after generations of conditioning to
        fall in line. The Cumerians in the Steel Trap perfer to islolate
        themselves from other communities, treacherously arranging their hovels
        high in the rafters. And when they descend, many have learned to avert
        their gaze and avoid their presence. You never know when they may next
        lash out.
      </TypographyP>
      <TypographyP>
        From the perspective of others, a Cumerian is just as likely to spit in
        an overseer&apos;s face as they are to do a normal day&apos;s work.
        They&apos;re just as likely to attack a friend as they are to defend
        them. And to make matters worse, they publicly torment their children.
        They tie them to the rafters and throw them off. If they scream, they do
        it again and again until the child meets some sort of secret critera.
      </TypographyP>
      <TypographyBlockquote>
        &quot;It&apos;s called <i>tempering</i>. It is not a child&apos;s fault
        that they fear; children are born unfinished. It is our duty as their
        protectors to wring it out of them.&quot;
      </TypographyBlockquote>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[4]} />
      <TypographyP>
        A somber, diligent, scrupulous people. Gredorans in the Steel Trap the
        perfect workers by Fenrir standards. Easily identified by the metals
        they weave into their long braids, they are the most likely to find
        genuine joy in the factory&apos;s labor. Even beyond that, it&apos;s not
        unheard of to find a Gredoran staring teary-eyed into a fire or
        reverently stroking a piece of metal.
      </TypographyP>
      <TypographyP>
        The Gredorans believe that centuries ago they were visited by their long
        lost god; a god who damned them for forgetting their name. The forgotten
        god constructed the Steel Trap to serve as a hell for the Gredorans, a
        place where they would repent until judged worthy of atonement. It is
        only natural that of all people, the forgotten god chose <b>Kingwulf</b>{" "}
        and his kin to serve as hell&apos;s jailers.
      </TypographyP>
      <TypographyP>
        And so the Gredorans work. They must accept their punishment. They
        collect metals to revere the minor deities, but the forgotten god&apos;s
        metal eludes them. If only its name wasn&apos;t lost to them as well...
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[5]} />
      <TypographyP>
        Heians aren&apos;t recognizable by any common traits or dress. Not
        necessarily a point of pride for them, but something they refuse to be
        ashamed of in spite of Rathi&apos;s scorn. In fact, more than any other
        people, the Rathi despise Heians the most.
      </TypographyP>
      <TypographyBlockquote>
        &quot;Their bloodline was so diluted that it naturally begged to be
        subsumed.&quot;
      </TypographyBlockquote>
      <TypographyP>
        What does set Heians apart in the Steel Trap are their attitudes. More
        accepting of others but harsh on themselves when it comes to a personal
        code of honor.{" "}
        <i>
          Do not commit avoidable violence. Accept defeat before considering
          treachery. Do not seek power over others.
        </i>
      </TypographyP>
      <TypographyP>
        On an espeically cold day, the Heians celebrate Draconis day. They light
        a bonfire over a basin of ice before joining in dance and song to
        remember their eternal protectors: dragons. Any and all are welcome to
        come to witness, participate, or share their own remembrances. That is,
        as long as they promise to keep the &quot;demon-worship&quot; ceremony a
        secret.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[6]} />
      <TypographyP>
        Most of the Kilder in the Steel Trap have integrated into Rathi culture,
        stripped of their traditions and beliefs. So much so, that they cannot
        be identified as Kilder, nor would they claim to be.
      </TypographyP>
      <TypographyBlockquote>
        <i>
          Who is a Kilder when taken from their marshes? When separated from
          their chain of command? When deprived the teachings of their
          community? They are just a man. Prey.
        </i>
      </TypographyBlockquote>
      <TypographyP>
        Some have chosen to nurture the vestiges of their heritage. They further
        trim their rag clothing into the minimalistic marshland garb. They
        gather every evening to play drums and dance. And they choose one member
        of the community to be their <b>philosopher</b>: someone who&apos;s only
        responsibility is to consider the bigger questions in life. The rest of
        the community provides for them in turn.
      </TypographyP>
      <TypographyP>
        On the fringes of those community gatherings, the philosophers whisper
        stories of ancient Kilder warriors and their heroics. They tell the tale
        of Malak Ghodbane, the teenage boy who defeated <b>Kingwulf</b> and
        conquered half the known world. Of Aalia, and her sacrifice to save her
        people. They whisper about Kilder&apos;s martial might - and lament
        their loss of the knowledge of how.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[7]} />
      <TypographyP>
        The Kiposi despair. This metal prison is as inhospitable an environment
        for them as they could have ever imagined. For so many centuries, their
        ancestors fought back the ravenous flock of Fenrir&apos;s Western
        territories. But in the end, they failed. Fenrir took their sky, their
        wheat fields, their hard-fought liberty - and devoured it all.
      </TypographyP>
      <TypographyP>
        This despair is generational. Parents pass it on to their children, who
        resent it, resist it, then succumb as everyone else does. Save for a
        few. The most stubborn among them try and try and try again to force
        something to grow. Anything. And in spite of their brethren, sometimes
        they succeed.
      </TypographyP>
      <TypographyP>
        Others steel their resolve in another manner. Kipos was founded on
        strong democratic values - many of which are poorly remembered, but that
        doesn&apos;t stop some from trying anyway. Many of the Steel Trap&apos;s
        worker organizations are entrenched in the internal ideological struggle
        between Kiposi democracy and Fenrir authoritarianism.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[8]} />
      <TypographyP>
        Narscillians act with a rhythm in everything they do. To one ignorant to
        their ways, it seems like bizarre swaying and flourishes. And when two
        Narscillians meet, their movements synchronize - further befuddling the
        uninitiated.
      </TypographyP>
      <TypographyP>
        The overseers banned music a long time ago. It attracts{" "}
        <i>dreamstorms</i>, inviting disaster onto a sector. Narscillians long
        refused to give up their songs, but as it turns out, the overseers spoke
        the truth. Generation after generation of Narscillians have been lost to
        the natural disasters of their own creation. So now they dance to a
        silent song. The rythm is the same, but every Narscillian is singing a
        different tune in their minds.
      </TypographyP>
      <TypographyP>
        The silent song isn&apos;t the only tradition they carry on in secret.
        Every few years, a child is picked to become a <i>Relict</i>. They are
        ruthlessly indoctrinated into the sole purpose of hurting the overseers.
        Then they are cast out - exiled from their community and forbidden from
        the silent song. Their actions cannot come back to harm their families.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[9]} />
      <TypographyP>
        Pride in the empire. Shame in their inadequacy. Prisoners to the
        hierarchy. Derision for the ones beneath them. Dream large, do not be
        afraid to dine with kings. Have no mercy for the weak who hold you back
        from your destiny. Serve your greaters dutifully and you will be
        rewarded with love and family.
      </TypographyP>
      <TypographyP>
        Where these mantras are rarely stated plainly, this is the overwhelming
        subtext of a Rathi upbringing. The empire is vast, and so Rathi culture
        varies with it. This is especially distinct between the three bestial
        transformations. People of each transformation are impacted by both a
        desire to exemplify the prototypical &quot;good&quot; traits of their
        beast as well as overcome the &quot;bad&quot;. What these things mean
        vary wildly as well.
      </TypographyP>
      <TypographyP>
        For the Rathi, there is an endemic anxiety which grows the lower down
        one finds themselves in the hierarcy. An anxiety originating from
        certain judgement, though on unpredictable and arbitrary values. The
        solution? Many throw themselves deeply into a fanatically Rathi mindset
        - let no one question your beastly virtues or dedication to Kingwulf and
        Fenrir.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[10]} />
      <TypographyP>
        The ideal workers. Scionics never put up a fight when Fenrir consumed
        their measly settlements. The human condition is to suffer. The world is
        made this way and mere mortals have no chance to change it. Having the
        arrogance to think otherwise is a disastrous folly. And Scionics make
        many follies in their lives. Love, children, defiance - sometimes their
        hearts act in conflict with their ineffable reality.
      </TypographyP>
      <TypographyP>
        Scionics tell the tale of their god, <i>Locum</i> who once had the
        chance to remake the world to be kinder. But he was defeated by{" "}
        <i>Jira</i>: the avatar of suffering, who locked <i>Locum</i> away.
      </TypographyP>
      <TypographyP>
        There is nothing the Scionics can do. No amount of prayer, rebellion,
        struggle, or might can free their god. They can only pray that{" "}
        <i>Locum</i> will one day gather the strength to escape and save the
        world.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[11]} />
      <TypographyP>
        Ulgate stemmed the tide of darkness for generation after generation;
        ultimately giving everything for the sake of victory. These short
        centuries of confinement in the Steel Trap will not defeat the human
        will. Fight.
      </TypographyP>
      <TypographyP>
        There is no longer such a thing as the Ulgatian bloodline. By all
        accounts, they were wiped out centuries ago when Fenrir first conquered
        the North. But inexplicably, their values live on.
      </TypographyP>
      <TypographyP>
        It can happen to anyone. A worker who crawls on their belly one day
        seems possessed by the spirit of defiance the next. An etherial
        contagion haunts the workers of the Steel Trap, bestowing the
        unfortunate with an unquenchable rage and indominable resolve. They are
        always short lived.
      </TypographyP>
      <Separator className="my-3" />
      <HeritageSummary heritage={heritages[12]} />

      <TypographyP>
        Yamans are always identified easily. They dress in all white, or as
        white as they can manage. And they walk with their shoulders back and
        their gaze directly in front of them, rather than the stooped posture
        and downcast eyes which workers have learned to adopt. They adhere to a
        volumnuous moral code which includes inviolable oaths and pacifism while
        within their communities.
      </TypographyP>
      <TypographyP>
        Their ways are just as incompatible with society in the Steel Trap as it
        would initially seem. As Yaman children grow older, they swear a
        progressively more strict set of oaths. Some abandon these oaths, tired
        of being perpetually exploited by overseer and worker alike.
        Unsurprisingly, the Yaman dogma never permits them back home.
      </TypographyP>
      <TypographyP>
        Despite their outwardly craven customs, the Yamans persist.
      </TypographyP>
      <TypographyBlockquote>
        This heinous Empire cannot last. Eventually they will consume themselves
        - they have enshrined it in their very mythology. There are one thousand
        ways to wait for the inevitable without compromising your morality.
      </TypographyBlockquote>
      <Separator className="my-3" />
      <div className="w-full flex justify-between">
        <Link href="/game/arc-one/character-creation">
          <Button variant="outline">
            <ChevronLeft /> Character Creation
          </Button>
        </Link>
        <Link href="/game/arc-one/backgrounds">
          <Button variant="outline">
            Backgrounds <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function HeritageSummary({ heritage }: { heritage: Heritage }) {
  return (
    <div className="mt-6">
      <TypographyH3 id={heritage.name} className="text-sky-500">
        {heritage.name}
      </TypographyH3>
      <span className="text-lg text-muted-foreground">
        {heritage.shortDescription}
      </span>
      <TypographyP className="text-md italic text-sky-800 dark:text-sky-200 font-semibold">
        {heritage.remembrance}
      </TypographyP>
    </div>
  );
}
