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
            When Anya Arbor traveled the world to spread her people&apos;s gifts
            to all, she never came to Kilder. The people who needed{" "}
            <b>Donums</b> more than any other were abandoned by the first and
            last kind figure in their short history.
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
            <b>Donums</b>, Icati&apos;s philosophy mandated an order of strict
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
            things many will experience. And so the Kilder don&apos;t
            participate in the monogamous customs of other cultures.
          </TypographyP>
          <TypographyP>
            Marriages in Kilder are non-monogamous as well. Marriage is a public
            declaration of love and a private dedication to a person for the
            remainder of your lives. Anything beyond this, in the Kilder&apso;s
            eyes, is strange and laden with uncomfortable baggage.
          </TypographyP>
          <TypographyP>
            Love and marriage aren&apos;t even about family. Icati&apos;s
            philosophy makes it clear that giving birth to a child does not make
            you the rightful protector, rearer, and tutor. Instead, once
            children are old enough to eat solid food they are sent to the
            individuals considered best at parenthood.
          </TypographyP>
          <TypographyH3>The pursuit of mastery</TypographyH3>
          <TypographyP>
            At the age of five, children are assigned the role they will fulfill
            in the caravan. This can be any of: <i>hunter</i>, <i>weaver</i>,{" "}
            <i>soldier</i>, or <i>philosopher</i>. Regardless of their wants,
            desires, or predispositions, this becomes the child&apos;s lot in
            life. They are taught to strive to be the best possible incarnation
            of their role.
          </TypographyP>
          <TypographyP>
            This aspiration to become the embodiment of their profession is the
            meaning of life, in the Kilder&apos;s eyes. Those few who perfect
            their craft are given the honorary first name of that role. It is
            through this dedication that one day the Kilder will conquer the
            land they inhabit.
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
            dangerous assignment. In addition to everyone&apos;s high standards
            for fitness, hunters train with javelins, spears, and most
            importantly: traps. All of these methods must be mastered to survive
            a single day hunting the monstrous predators of the swamp.
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
            Kilder crafts are not sought after by the other cultures in the
            world, but the suit the Kilder.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
