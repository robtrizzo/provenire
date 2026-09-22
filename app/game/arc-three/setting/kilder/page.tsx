import { checkAuth } from "@/lib/auth";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyBlockquote,
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
      <TypographyH2>Kilder, Pre-Cataclysm</TypographyH2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyBlockquote>
            Something is very, fundamentally, wrong with the world.
          </TypographyBlockquote>
          <TypographyP>
            History begins with the arrival of the <b>Talis</b>, beings of
            supreme knowledge and capability. They walked the world and
            bequeathed innumerable gifts and powers to their chosen peoples. To
            those peoples of other lands, this earned the <b>Talis</b> reverant
            or deific names. But to the Kilder, they are remembered for their
            crimes. The <b>Talis</b> translates to <i>Great Neglectors</i>.
          </TypographyP>
          <TypographyP>
            <b>Akil the Conqueror</b> was the chiefest amongst the <b>Talis</b>.
            His powers were vast, and many strange. The strangest and most
            devastating of his arsenal was a gift which he coined{" "}
            <b>Donum Duellum</b>. It was this which he wielded to conquer most
            of the known world with impunity. Once satisfied with his empire, he
            bequeathed his chosen people with cities and armies equipped with
            artifacts of incredible might.
          </TypographyP>
          <TypographyP>
            <b>Asherah, Beloved by All</b>, was betrothed to and later betrayed
            by <b>Akil</b>. Everywhere she soared on her griffon mount, she
            blessed with health and heartiness. While <b>Akil</b> conquered the
            peoples of the world, <b>Asherah</b> hunted its greatest beasts,
            exterminating them and decorating her hall with their trophies. She
            bequeathed her faithful a core of priests she made to be immortal
            and impervious to harm.
          </TypographyP>
          <TypographyP>
            <b>Anya Arbor, Bringer of Gifts</b>, walked from the gates of
            paradise and blessed the world with water and wondrous power.
            Though, just as all the other <b>Talis</b>, her generosity ceased at
            the border of the dread swamp.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyP>
            <b>Midir the Silent</b> is a <b>Talis</b> shrouded in mystery. He
            accompanied <b>Akil</b> on his exploits, but never once joined a
            battle. He left behind no great works or gifts to any people in
            particular. But, he was known to be one being which the other{" "}
            <b>Talis</b> feared.
          </TypographyP>
          <TypographyP>
            <b>Kingwulf</b>. There are two great empires in the world: Anidine
            and Fenrir. Anidine is the empire founded by <b>Akil</b> and{" "}
            <b>Asherah</b>; Fenrir by <b>Kingwulf</b>. <b>Kingwulf</b>{" "}
            bequeathed his peoples with supremacy over the jungle and a
            bloodline of bestial might. <b>Kingwulf</b> also remains the only{" "}
            <b>Talis</b> not to abandon his people.
          </TypographyP>
          <TypographyBlockquote>
            Fenri bards will claim that their god's eldest sons are older than
            even the <b>Talis</b>. A devoted embellishment, or a strand of
            truth?
          </TypographyBlockquote>
          <TypographyP>
            <b>Qorrin the Destroyer</b> was a raw force of creation and
            destruction. He rent mountains and churned fields. He summoned water
            from the skies, then vanished never to be seen again. Farms
            flourished in paradise while the Kilder became beset by floods and
            heinous winds.
          </TypographyP>
          <TypographyP>
            <b>Vinicent Greenwake</b> traveled the length of Narscillia's
            deserts and left behind a heaven of abundance. Perhaps Kilder's
            greatest envy: Narscillia was forever transformed from a harsh
            wasteland into a place of peace and bottomless plenty.
          </TypographyP>
          <TypographyBlockquote>
            A serpent must hatch from an egg laid by another. The <b>Talis</b>{" "}
            left behind a handful of children, yes, but they cannot have been
            the point which...
            <br />
            Something is very, fundamentally, wrong.
          </TypographyBlockquote>
        </div>
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyH3>Neglect</TypographyH3>
          <TypographyP>
            One by one, the <b>Talis</b> disappeared. Not a word, not a sign.
            Their peoples who'd tread a path paved by their gods became listless
            and uncertain. Uncertainty devolved into pandemonium. <b>Akil's</b>{" "}
            great empire fractured. Beasts which <b>Asherah</b> had thought
            extinct returned. Mass migration and upheaval eviscerated the world
            as it had been. But for the Kilder, nothing changed.
          </TypographyP>
          <TypographyP>
            While the rest of the world built grand temples to summon their
            absent gods, the Kilder thrashed against the swamp. While civil war
            tore civilizations apart, the Kilder were torn limb from limb by the
            predators they had been left to. And generation by generation, as
            the rest of the world healed, Kilder honed its prowess. Step by
            arduous step, the people of the swamp became better warriors, better
            hunters, better weavers, and better survivors.
          </TypographyP>
          <TypographyH3>Aalia</TypographyH3>
          <TypographyP>
            The rest of the world may be callous to Kilder's suffering, but the
            canny leaders amongst them noticed Kilder's steady growth in
            military might. Anidine, Gredora, Heia, and Yama forged the Cardinal
            Concord in secret; a pact to unite and crush Kilder should one of
            its generals ever become ambitious beyond their homeland's borders.
          </TypographyP>
          <TypographyP>
            Just as it had always been, Kilder remained peaceful with its
            neighbors. And so the Concord remained inert for generations. That
            is, until the birth of a savior.
          </TypographyP>
          <TypographyP>
            From a young age, Aalia demonstrated strategic and tactical genius
            never before seen. It was on her fourteenth birthday when Kilder's
            philosophers made it known that Aalia is an unprecedented chosen
            one. Her talent could only be <b>Akil's</b> greatest power: the one
            which vanished with him and has somehow reemerged in a Kilder child.
            With the power of a <b>Telis</b>, the Kilder would be unstoppable.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyP>
            Though she did not have to, Aalia spent her next ten years not
            conquering, but earning the trust and adoration of her people. Once
            unified through peace, she lead them into Kilder's northern reaches.
            The most viscous and untamed wilderness became a haven newly named
            Tria Aderfia. But as the celebration of victory concluded, Kilder
            was met with four armies at its doorstep. The Cardinal Concord had
            come.
          </TypographyP>
          <TypographyP>
            Aalia alongside her best negotiators desperately sued for diplomacy;
            she had no plans of expanding Kilder's borders. The Concord had no
            intention of backing down, however. They brazenly marched their
            armies into the swamps. Aalia's armies marched to meet them.
          </TypographyP>
          <TypographyBlockquote>
            Foreign scholars will claim that victory was imminent that day, but
            the Kilder knew differently. Despite the superior numbers of the
            enemy and their powerful channelers, every soldier under Aalia's
            command knew they would be led to exterminate their foes.
          </TypographyBlockquote>
          <TypographyP>
            But luckily for the Cardinal Concord and Kilder soldiers alike, the
            battle was not to be. On the morning of the impending conflict,
            Aalia walked alone into the center of the two armies and took her
            own life where all could see. The Cardinal Concord began the march
            home the next day, leaving the Kilder to grieve the loss of their
            savior. The city of Tria Aderfia was renamed Aalia City in her
            honor.
          </TypographyP>
          <TypographyH3>Onward</TypographyH3>
          <TypographyP>
            The loss of their gods brought empires to ruin. But the Kilder
            spirit soldiers on. They will continue to survive as they always
            have. But they will not forget the world's neglect, and then the
            world's unification against them.
          </TypographyP>
        </div>
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyH3>Philosophy</TypographyH3>
          <TypographyP>
            Kilder society is shaped by discipline, community, and ration.
            Philosophers ponder and debate the rations in a traditional test of
            ideas. As the soldiers adapt and invent new techniques, so too must
            the thought leaders of society with their ideas. In this age of
            Kilder, major philosophical consensus had three distinct eras.
          </TypographyP>
          <TypographyP>
            <b>Disciplinism</b>: a mantra of life duty and acceptance of what
            one cannot control. Perfection means perfect survival; we all accept
            that this will never come to pass. Death to predators is part of
            life and this is natural. The betterment of our survival is an
            essential good which must be done in concert with others to succeed.
          </TypographyP>
          <TypographyP>
            <b>Epiphanism</b>: later renamed <b>Nazirism</b> after its founder
            passed away. Scattered across the world are <i>Life Ducts</i>:
            portals through which water, flows when proper rituals are
            completed. Portals which required{" "}
            <b>Anya Arbor, Bringer of Gifts</b> open them in the first place.
            And since she abandoned her journey before Kilder, the homeland's{" "}
            <i>Life Ducts</i> remain inert.
          </TypographyP>
          <TypographyP>
            That is, until the great philosopher <b>Nazir</b> opened one. In his
            own words:
          </TypographyP>
          <TypographyBlockquote>
            Unlike my thousand failures, this time I saw a shimmer the length
            and breadth of a hair. Like the smallest crack in a great stone, it
            split the air and a drop of water rolled into my palm.
          </TypographyBlockquote>
          <TypographyP>
            <b>Nazir</b> swore the other philosophers to secrecy. The only
            defense keeping Kilder safe from invasion is its lack of anything
            the foreign powers wish to take. They can never hear of a new duct.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyP>
            Kilder's cosmic tragedy continues. Despite decades of ritual and
            experimentation, there was no power to be gained in drinking this
            water. Instead, they found something else. A creature, or being,
            trapped behind the hairline crack.
          </TypographyP>
          <TypographyBlockquote>
            It cannot speak in words like you or I. It speaks in generations.
            Through it, we could feel the spiderweb of our linneage, both past
            and future. The thousand thousand ways which our blood would spread
            or cease. Interpreting the knowledge shared became our life's work.
          </TypographyBlockquote>
          <TypographyP>
            It was named <b>The Proclamation of Generations</b> or the{" "}
            <b>Great Proclamation</b>. Its existence and its messages a
            ferociously guarded secret. In communing with it, <b>Nazir</b>{" "}
            learned:
          </TypographyP>
          <TypographyP className="uppercase">
            <b>Humanity predates the Talis.</b>
          </TypographyP>
          <TypographyP className="uppercase">
            <b>We have been robbed of our history predating the Talis.</b>
          </TypographyP>
          <TypographyP className="uppercase">
            <b>
              Akil's Donum Duellum does not belong to him. It was Kilder's
              first.
            </b>
          </TypographyP>
          <TypographyP className="uppercase">
            <b>There will be a savior born with Donum Duellum in our time.</b>
          </TypographyP>
          <TypographyP>
            These revelations were not made known to the Kilder people as a
            whole, but it had an incredible impact on Kilder philosophy. The
            Kilder people must be prepared to follow a savior once they arise.
            Since humanity predates the <b>Talis</b>, perhaps they were men
            before they were gods. If so, it is the philosophers' sworn duty to
            raise the savior into a god.
          </TypographyP>
          <TypographyP>
            <b>Periahism</b>: with <b>Aalia</b> the savior dead, the
            philosophers can only conclude that Kilder people is the ultimate
            outlier amongst peoples. The world will ignore and neglect Kilder
            while it languishes; if Kilder is known to flourish, it must be
            crushed.{" "}
            <b>
              <i>
                If Kilder is ever to flourish, it will be only after defeating
                all others.
              </i>
            </b>
          </TypographyP>
        </div>
      </div>
      <div className="my-4">
        <Separator />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <TypographyH3>Nations</TypographyH3>
          <TypographyP>
            <b>Anidine</b>: the core of <b>Akil's</b> once great empire, not
            collapsed into a small, though mighty, territory. They claim the
            divine right of soveriens is bestowed via meritocracy, though this
            identity is at odds with their zealous reverence for their
            conqueror-gods.
          </TypographyP>
          <TypographyP>
            <b>Argos</b>: formerly the <b>Arborians</b> until the great houses
            of Helix poisoned their own water to cull foreigners from the city.
            Anyone living outside Helix's walls was forever barred. Arboria
            split into <b>Argos</b> and <b>Kipos</b>.
          </TypographyP>
          <TypographyP>
            <b>Bwarhei</b>: untamed jungle filled with what the Fenri claim to
            be demons spawned from corrupted wombs. The Kilder are not so naive;
            they feel a kinship with a fellow pariah people.
          </TypographyP>
          <TypographyP>
            <b>Cumeria</b>: decentralized tribes living amongst massive trees.
            Reverence for <b>Asherah</b>, even while harboring a hatred for{" "}
            <b>Akil</b> and <b>Anidine</b>, their former conquerors. Their
            liberation war cost them dearly - Fenrir chose that moment to attack
            and took a heavy swath of territory.
          </TypographyP>
          <TypographyP>
            <b>Fenrir</b>: a culture of dominance and subservience to
            hierarchical bloodlines. Men, wolves, and above all, Kingwulf have
            authority in the empire.
          </TypographyP>
        </div>
        <div className="col-span-1">
          <TypographyP>
            <b>Gredora</b>: nomadic mercenary-mercantile caravans lead by
            merchant-generals. A deep resentment of <b>Anidine</b> even while
            being economically shackled to it.
          </TypographyP>
          <TypographyP>
            <b>Heia</b>: Once dominated by <b>Akil</b>, now a feudal nobility
            without a monarch. Perpetual infighting and civil wars decimate its
            population. Its only saving grace is a high level of development
            left by its founder god.
          </TypographyP>
          <TypographyP>
            <b>Kipos</b>: after a few generations of fruitless attempts to
            breach Helix's walls, the Kiposi are mostly peaceful farmers. Very
            little government other than local councils and economic guilds.
          </TypographyP>
          <TypographyP>
            <b>Narscillia</b>: three distinct biomes governed by a secret
            society of seers. On the Green Path there are thriving cities; in
            the dunes live caravans; and in the interior wasteland are creatures
            fabled to be too monstrous for <b>Asherah</b> to slay.
          </TypographyP>
          <TypographyP>
            <b>Yama</b>: scattered hamlets and thorps surviving harsh
            conditions. Their governing body is a mystery, secreted away in the
            Hidden City constructed for them by their gods. The Kilder felt a
            degree of comraderie for the Yamans before the Concord.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
