import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Gredora</TypographyH1>
      <TypographyBlockquote>
        A beautiful people - dedicated to the mastery of their bodies, metals,
        and traditions.
      </TypographyBlockquote>
      <TypographyH2>Glittering Nomads</TypographyH2>
      <TypographyP>
        Oftentimes you will see <strong>Gredorans</strong> far before you hear
        them. The six <strong>Gredoroan</strong> caravans slither through the
        sweltering steppes like silver serpents gleaming in the sun.{' '}
        <strong>Gredorans</strong> usually stand a head taller than the other
        peoples of the world, their backs straight and their heads held high.
      </TypographyP>
      <TypographyP>
        Their unique clothing is what draws the most attention to them, and
        something they take intense pride in displaying. The most significant
        article of that clothing is the scalecloak, an ultra-lightweight
        form-fitting chainmail or scale mail short sleeved shirt with a hood. No{' '}
        <strong>Gredoran</strong> would be caught dead without their scalecloak,
        as it&apos;s a symbol of family heritage. Each family has slightly
        different methods of creating them and include different designs,
        engravings, and metals.
      </TypographyP>
      <TypographyP>
        In addition to their tight clothing, <strong>Gredorans</strong> take
        considerable pride in their physical appearances. The nomads grow their
        hair long, combing and docrating it with metal chains and charms they
        find in their travels. It&apos;s also rare, if ever, to find a{' '}
        <strong>Gredoran</strong> in anything other than peak physical condition
        - including the sick and elderly.
      </TypographyP>
      <TypographyBlockquote>
        Every idle day is another day that shows through the scalecloak
      </TypographyBlockquote>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            A second piece to the <strong>Gredoran</strong> attire is what they
            call the <em>Blood Sleeve</em>. A stylized set of armor plates
            covering the right shoulder down to the elbow, connected to the
            scalecloak with a decorative chain. The <em>Blood Sleeve</em> is a
            sacred heirloom passed down from parent to child and mentor to
            apprentice. Unlike the scalecloak, the <em>Blood Sleeve</em> is not
            made by each family, but passed down from each generation to the
            next. Rarely ever are they constructed. To create one requires a{' '}
            <em>Wielder</em> of the extraordinarily rare{' '}
            <Donum>Donum Fornax</Donum> to venture into one of{' '}
            <strong>Gredora&apos;s</strong> many active volcanoes to forge the
            piece.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>Blood of the Ancestors</TypographyH4>
          <TypographyP>
            Other than a child&apos;s <em>Provenire</em>, donning a{' '}
            <em>Blood Sleeve</em> is the only way to discover if one has a{' '}
            <em>Donum</em>. If this is true, the <em>Blood Sleeve&apos;s</em>{' '}
            retracted spikes pierce the wearer&apos;s body, rooting it in place
            in a ceremonial bonding of generations. The blood of the ancestors
            now runs in their veins.
          </TypographyP>
        </div>
      </div>
      <TypographyP>
        Because of their rarity, most <strong>Gredorans</strong> don&apos;t wear
        a <em>Blood Sleeve</em>. But to be honored with one is to be laden with
        the expectations and prestige of the family or mentor who passed it
        down.
      </TypographyP>
      <TypographyH2>
        The Price of a <em>Donum</em>
      </TypographyH2>
      <TypographyP>
        All <em>Donums</em> tax their possessor in some way. Rather than intense
        study or endless repetitions, the <strong>Gredorans</strong> pay the
        price in blood. For most of the so-called <em>blood mages</em>, they pay
        this painlessly through their <em>Blood Sleeve</em>, no more than a
        trickle down their arm. For the unlucky <em>blood mage</em> who has no{' '}
        <em>Blood Sleeve</em>, they must open a wound if they wish to call upon
        their power.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            A price happily paid for the beauty and elegance of{' '}
            <strong>Gredoran</strong> <em>Donums</em>. <em>Blood mages</em> are
            honored artisans, deadly warriors, and protectors of the caravans,
            which is no easy task.
          </TypographyP>
          <TypographyP>
            The <strong>Gredoran</strong> caravans roam the plateaus, trailing
            herds of animals. Despite their quarry being abundant and less
            dangerous than some other regions, the predators that roam{' '}
            <strong>Gredora</strong> are still quite deadly.
          </TypographyP>
          <TypographyP>
            <em>Blood mages</em> are charged with shielding their people from
            the giant eagles that circle above, giant carnivorous moles that
            burrow beneath, venomous lizards that stalk the plains, and the
            frequent lava flow that pours from the volcanoes.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 text-white div-2 box-border border-t-2 border-b-2">
          <TypographyH4>Masters of Metal and Fire</TypographyH4>
          <TypographyP>
            Despite their constant struggle for survival, the{' '}
            <strong>Gredorans</strong> believe that through the diligent
            industry of their people and the power of the <em>blood mages</em>,
            they can one day build a city to rival <strong>Helix</strong>. There
            are two <em>Donums</em> common to <em>blood mages</em>:
            <ul className="list-none">
              <li>
                <Donum>Donum Ferro</Donum>: The Gift of Iron
              </li>
              <li>
                <Donum>Donum Ignis</Donum>: The Gift of Fire
              </li>
            </ul>
            <TypographyP>And perhaps once per age,</TypographyP>
            <ul className="list-none">
              <li>
                <Donum>Donum Fornax</Donum>: The Gift of the Forge
              </li>
            </ul>
          </TypographyP>
        </div>
      </div>

      <TypographyH2>Precious Metal</TypographyH2>
      <TypographyP>
        To the <strong>Gredorans</strong>, all metal holds significance, with
        each one representing a unique cornerstone of their values. There is one
        metal that is more than significant, it&apos;s holy: <em>adamantine</em>
        . The metal defies all of the science <strong>Gredorans</strong> have
        managed to discover. In the hands of a normal person, it&apos;s
        supernaturally light and durable, and it can&apos;t be manipulated by{' '}
        <Donum>Donum Ferro</Donum>. In the hands of a <em>blood mage</em>{' '}
        however, it&apos;s a legendary tool.
      </TypographyP>
      <TypographyP>
        For a <Donum>Donum Ferro</Donum>, it can shift and mold in an instant to
        form any tool, a deadly weapon, or a nigh impenetrable shield. For a{' '}
        <Donum>Donum Ignis</Donum>, it can morph into a whip of molten metal, or
        can spread across their body to form a white-hot adamantine armor.
      </TypographyP>
      <TypographyP>
        And the only place in the world this metal can be found is in the bones
        of a <strong>Naga</strong>, a creature native to the{' '}
        <strong>Titan Pines</strong> of <strong>Cumeria</strong>. For as long as
        the <strong>Gredorans</strong> have known of <em>adamantine</em>, they
        have been at war with the <strong>Cumerians</strong>. The{' '}
        <strong>Cumerians</strong> are unwilling to trade it; the{' '}
        <strong>Gredorans</strong> are unwilling to be apart from their holy
        metal.
      </TypographyP>
      <TypographyH2>Old Wanderers, New Life</TypographyH2>
      <TypographyP>
        When <strong>Anya Arbor</strong> first opened the{' '}
        <strong>Life Ducts</strong> in <strong>Gredora</strong>, she never took
        into account the possibility that only powers like hers were capable of
        opening them. The <strong>Gredorans</strong> suffered for generations to
        replicate <strong>Anya&apos;s</strong> techniques, but never managed to
        succeed.
      </TypographyP>
      <TypographyP>
        Through the <em>Provenire</em> of the <strong>Gredoran</strong>{' '}
        <em>Donums</em>, blood became an important element of society, so it did
        not take long for the desperate nomads to offer blood to the{' '}
        <strong>Life Ducts</strong>. Generations of slitting arms and trickling
        blood, endless trial and error of the manner of ritual or alchemical
        concoction, and still never any progress. Until one day, an elder took
        matters into his own hands. <strong>Iskinder Meseret</strong>, once a
        great warrior but now a cripple tended to by his family, threw himself
        into the volcano which the <strong>Life Duct</strong> stood upon.
        Moments later, water began to flow and the <strong>Gredorans</strong>{' '}
        rejoiced the noble sacrifice of a dying man.
      </TypographyP>
      <TypographyP>
        Such is now tradition in <strong>Gredoran</strong> society. Rather than
        mourn the sick, crippled, and elderly, <strong>Gredorans</strong>{' '}
        celebrate their life and rejoice as those with little time left make the
        ultimate sacrifice to give life and power to the future generations.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/first-age/cumeria">
          <Button variant="outline">
            <ChevronLeft /> Cumeria
          </Button>
        </Link>
        <Link href="/setting/first-age/kilder">
          <Button variant="outline">
            Kilder <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
