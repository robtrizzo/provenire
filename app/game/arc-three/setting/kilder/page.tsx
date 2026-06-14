import { checkAuth } from "@/lib/auth";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Kilder</TypographyH1>
      <Ancient />
      <div className="mt-8" />
    </>
  );
}

async function Ancient() {
  const { error } = await checkAuth("user", ["ancient-kilder"]);

  if (error) {
    return <TypographyH2>Ancient Kilder</TypographyH2>;
  }

  return (
    <>
      <TypographyH2>Ancient Kilder</TypographyH2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyP>
            Each and every Kilder is first and foremost a survivor. The marshes
            of their homeland ensure that anything less than skill and grit
            fades away. Their garb is simple and practical: small straps and
            slips of hide, the bare minimum to be decent and avoid painful
            accidents. To foreigners, seeing the sullen Kilder covered in grime
            and near naked - it leaves an impression. Just the first of many
            misunderstandings between the Kilder and the peoples of gifts.
          </TypographyP>
          <TypographyH3>The harshest homeland</TypographyH3>
          <TypographyP>
            When Anya Arbor traveled the world to spread her people's gifts to
            all, she never came to Kilder. The people who needed <b>Donums</b>{" "}
            more than any other were abandoned by the first and last kind figure
            in their short history.
          </TypographyP>
          <TypographyP>
            The creatures of the Kilder swamps are cunning and ravenous. The
            peoples at their borders were flushed with power and unwilling to
            share. Scattered, scared, and starving, the Kilder abandoned all
            hope.
          </TypographyP>
          <TypographyH3>Survival through discipline</TypographyH3>
          <TypographyP>
            Icati Haran is the savior Anya refused to be. She pulled the
            hopeless from the muck and gave them a purpose: her purpose. A new
            way of life centered on survival and community.
          </TypographyP>
          <TypographyP>
            To combat the harshest environment of the world without any{" "}
            <b>Donums</b>, Icati's philosophy mandated an order of strict
            hierarchy. No child is born into a higher rank than any other; there
            are no nobles or kings, only the officers who have earned their
            rights of command.
          </TypographyP>
          <TypographyP>
            The Kilder separated themselves into three Caravans, each caravan
            consisting of three Warbands, and each Warband of nine Companies.
            Icati permitted each Company their own structure to suit their
            needs. Each of these Companies slowly became one large family tied
            together by strings of marriages.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyH3>Love and family</TypographyH3>
          <TypographyP>
            The second misunderstanding Kilder suffer from foreigners is their
            customs of love, marriage, and children. Love should be freely given
            and taken. Life is too short to restrict one of the only wonderful
            things many will experience. And so the Kilder don't participate in
            the monogamous customs of other cultures.
          </TypographyP>
          <TypographyP>
            Marriages in Kilder are non-monogamous as well. Marriage is a public
            declaration of love and a private dedication to a person for the
            remainder of your lives. Anything beyond this, in the Kilder's eyes,
            is strange and laden with uncomfortable baggage.
          </TypographyP>
          <TypographyP>
            Love and marriage aren't even about family. Icati's philosophy makes
            it clear that giving birth to a child does not make you the rightful
            protector, rearer, and tutor. Instead, once children are old enough
            to eat solid food they are sent to the individuals considered best
            at parenthood.
          </TypographyP>
          <TypographyH3>The pursuit of mastery</TypographyH3>
          <TypographyP>
            At the age of five, children are assigned the role they will fulfill
            in the caravan. This can be any of: <i>hunter</i>, <i>weaver</i>,{" "}
            <i>soldier</i>, or <i>philosopher</i>. Regardless of their wants,
            desires, or predispositions, this becomes the child's lot in life.
            They are taught to strive to be the best possible incarnation of
            their role.
          </TypographyP>
          <TypographyP>
            This aspiration to become the embodiment of their profession is the
            meaning of life, in the Kilder's eyes. Those few who perfect their
            craft are given the honorary first name of that role. It is through
            this dedication that one day the Kilder will conquer the land they
            inhabit.
          </TypographyP>
          <TypographyP>
            Regardless of what a child is assigned, they first and foremost must
            be capable of survival. Each child is expected to pass a series of
            intensive and unforgiving physical tests before they are recognized
            by their parents and officers as true Kilder.
          </TypographyP>
        </div>
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyH3>Hunters</TypographyH3>
          <TypographyP>
            In Kilder, simply providing food for the Company is the most
            dangerous assignment. In addition to everyone's high standards for
            fitness, hunters train with javelins, spears, and most importantly:
            traps. All of these methods must be mastered to survive a single day
            hunting the monstrous predators of the swamp.
          </TypographyP>
          <TypographyP>
            Fortunately for the hunters, a single kill can often feed the
            Company for more than a day. For those days the hunters can scavenge
            for smaller prey, which are far less common but also less dangerous.
          </TypographyP>
          <TypographyP>
            Kilder hunters collect a trophy from each kill. They add these
            trophies one by one to a bridal wreath; once complete, they are
            allowed to gift the wreath to a lover as a marriage proposal. These
            wreaths take most hunters years to make. Many never complete them
            before the creatures of the marsh take them.
          </TypographyP>
          <TypographyH3>Weaver</TypographyH3>
          <TypographyP>
            Weaver dosn't just mean someone who makes baskets and blankets. It
            means anyone dedicated to making the wicker and bone tools used by
            their caravan. These crafts are not sought after by the other
            cultures in the world, but they suit the Kilder. To Kilder weavers,
            artistry and design are frivolous distractions from the utilitarian
            purpose of a tool.
          </TypographyP>
          <TypographyP>
            Most of the day is usually spent whittling bone into new weapons;
            they often break in the field and need frequent repair or
            replacement. Sometimes there's a need for new baskets, tents,
            blankets, and other small odds and ends. It's unusual though since
            most take good care of their sparse possessions.
          </TypographyP>
          <TypographyP>
            Most days end with music. Weavers play the drums and flute while
            Philosophers sing and the Hunters and Soldiers dance and spar.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyH3>Soldiers</TypographyH3>
          <TypographyP>
            Nearly a quarter of children are selected to become soldiers. It
            would seem a huge waste - who is there to fight? No one invades
            Kilder, there's nothing here to want. But as the Philosophers have
            learned, it is easiest to trade with peoples who would rather you
            not come take what's theirs.
          </TypographyP>
          <TypographyP>
            At age seven, child soldiers are expected to hold a three pound
            sword and a ten pound shield with their arms outstretched for an
            hour. The first of many punishing requirements placed on the
            children to mold them into combat machines. By twelve they must be
            proficient with spears, bows, and javelins as well. By fifteen they
            must best an adult hunter five times out of five in a bout.
          </TypographyP>
          <TypographyP>
            Finally at sixteen, the most promising are sent on a journey across
            the world to Helix. They must pass the rigged entry exam to join{" "}
            <i>Sulta 'Ankar</i> and serve there for three years. Then they must
            return home to teach everything they learned.
          </TypographyP>
          <TypographyH3>Philosophers</TypographyH3>
          <TypographyP>
            Very few are destined to become philosophers. Perhaps three or four
            in a generation. The heaviest expectations are placed on these
            children; they must do everything a soldier must while also studying
            tactics, warfare, and the nature of <b>Donums</b>. Each one without
            exception must make the pilgrimmage to Helix and succeed as the best
            soldiers must.
          </TypographyP>
          <TypographyP>
            Out of wartime, philosophers study the arcane runes lining the
            Kilder <i>Life Ducts</i>. The exact nature of their findings is kept
            strictly secret within their order. Secrets hard kept and more
            hardly ever used. Some say that the final test for a philosopher is
            opening a <i>Life Duct</i>. If they do, they never tell.
          </TypographyP>
          <TypographyP>
            During wartime, philosophers are diplomats, commanders, and generals
            - in that order. They hone these skills amongst each other with
            wargames, puzzles, and public debates.
          </TypographyP>
        </div>
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyH3>Slaughter at the steps of paradise</TypographyH3>
          <TypographyP>
            In the days before the concept of tracking years, before Kilder,
            Gredora, or any of the ancient feuds there were people scattered.
            They wandered the world, starving during the day and cowering from
            creatures in the night.
          </TypographyP>
          <TypographyP>
            That's when the scattered people heard a story that gave them hope.
            A story about heaven in the South. A place where food sprung from
            the dirt and the monsters were soft and small enough to kill.
          </TypographyP>
          <TypographyP>
            The scattered people left the holes they hid in and braved the wide
            frightening world to find that paradise. They walked even though the
            sun blistered their skin. They walked even though iron needles tore
            at their soles. They walked even when they had no strength left.
          </TypographyP>
          <TypographyP>
            And when they arrived in the land of soft grasses, they discovered
            paradise locked behind a great stone wall. The scattered people
            gathered at the wall by the tens of thousands to beg and plead.
            Their prayers were answered with ten silhouettes who summoned floods
            of water, tangles of razor vines, and upheaveal of the very earth.
          </TypographyP>
          <TypographyP>
            The scattered people's bodies were shattered at the foot of those
            walls. Their hopes lay there dying with them.
          </TypographyP>
          <TypographyH3>Anya Arbor, the Betrayer</TypographyH3>
          <TypographyP>
            A short and disappointing chapter of Kilder's history. A messiah
            left the gates of paradise and traveled the world, blessing one
            people after another with water and wondrous power. Word of her
            miracles spread even to the far corner of the world. The scattered
            people of the deadly swamp nurtured an ember of hope that she would
            save them too.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyP>
            The people of the swamp gathered by the thousands at the border with
            flowers and music to welcome the heroine Anya. But she never came.
            Only weeks later the people of the swamp heard she had turned back
            once their homeland was on the horizon. Years after that, the Kilder
            heard of the army of six peoples Anya led to demand access to Helix
            for all. All except the Kilder, that is.
          </TypographyP>
          <TypographyH3>Donum Duellum</TypographyH3>
          <TypographyP>
            So it should have been no surprise that when the Kidler found a{" "}
            <b>Donum</b> of their own, they sought to right history's wrongs. A
            young Hamdi Ghodbane rose to become his people's leader, annointed
            with the first and only title of Kilder Malak.
          </TypographyP>
          <TypographyP>
            Malak led a brutal and efficient campaign, conquering the Gredorans,
            then the Rathi within a matter of months, and with minimal
            casualties on all sides. With three armies under his banner, he
            marched on paradise. But instead of an assault, he asked to
            negotiate.
          </TypographyP>
          <TypographyP>
            To everyone's surprise except young Ghodbane's, the Imperator of
            Helix accepted his invitation. He had two demands, neither of which
            were surrender nor material. The first was to found a peacekeeping
            force, <i>Sulta 'Ankar</i>, based in Helix in which any nation's
            warriors could join should they prove themselves strong enough. The
            second demaind was to amend Helix's laws to select their leaders.
            Rather than sham elections held in Helix, it would be a merit based
            trial by tournament combat held every ten years. Each people would
            field their finest, and the greatest would sit the thrones in
            heaven.
          </TypographyP>
          <TypographyP>
            Once again to the surprise of all but Ghodbane, the Imperator
            accepted. Malak Ghodbane and his forces left Helix and he released
            his vassals back to their homelands.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
