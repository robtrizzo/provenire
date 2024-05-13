import Donum from '@/components/stats/donum';
import {
  TypographyH1,
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <TypographyH1>Anidine</TypographyH1>
      <div className="flex items-center justify-center gap-4">
        <Link href="/setting/first-age/cumeria">
          <Button variant="outline">Cumeria in the First Age</Button>
        </Link>
        <Link href="/setting/first_age/gredora">
          <Button variant="outline">Gredora in the First Age</Button>
        </Link>
      </div>
      <TypographyH2>Long Live the King</TypographyH2>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            Two of the <strong>New Gods</strong> founded{' '}
            <strong>Anidine</strong>, and they decreed a King would rule with a
            divine right. Beneath the King is the{' '}
            <strong>Council of Oak Moot</strong>. The council is composed of the
            King&apos;s <strong>Wisdoms</strong> and Barons, who each rule a
            state of the <strong>Anidine</strong> empire. Beneath Barons and{' '}
            <strong>Wisdoms</strong> are their knights and hunters, each ruling
            a small region of their lord&apos;s borders. Beneath them are the
            common people. By decree of the <strong>New Gods</strong>, those who
            rule are tasked with protecting the country and its people, while
            also helping them flourish.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-rose-950 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Remnants of the Old Empire</TypographyH4>
          <TypographyP>
            Anidine was once the world&apos;s greatest empire, forged from two
            peoples who could not despise each other more. After the{' '}
            <strong>New Gods&apos;</strong> departure, these two peoples wished
            for a return to the old ways. <strong>Anidine&apos;s</strong> King
            at the time was only strong enough to hold onto a small portion of
            its previous borders.
          </TypographyP>
        </div>
      </div>
      <TypographyH2>Rising Above</TypographyH2>
      <TypographyBlockquote>
        Kings born of blood end in their kingdom&apos;s blood.
      </TypographyBlockquote>
      <TypographyP>
        In <strong>Anidine</strong>, any knight can become a Baron, and even the
        lowliest peasant can become King, if they have what it takes. In{' '}
        <strong>Anidine</strong>, Kings rule for life, but when one falls, the
        next is selected by the <strong>Ordeal of Ambriel</strong>. The
        prospective Kings walk into the <strong>Duct of Community</strong> atop{' '}
        <strong>Oaken Moot</strong>. Only one ever re-emerges, long live the new
        Monarch.
      </TypographyP>
      <div className="flex flex-row gap-2">
        <div className="w-1/2">
          <TypographyP>
            Becoming a Baron requires standing before the{' '}
            <strong>Council of Oaken Moot</strong> with at least one thousand of
            the people who wish to be in your Barony, then the council will
            judge if you are fit to lead. Once they are satisfied, the
            petitioner must slay the most dangerous predator in the region they
            wish to rule. Only then can they gain the responsibility.
          </TypographyP>
          <TypographyP>
            Becoming a <strong>Wisdom</strong> though, is far more difficult. To
            attain this high title, first, one must know every plant in{' '}
            <strong>Anidine</strong>, and how it can be used to treat the sick.
            Second, a petitioner has to attain victory leading troops into
            battle: no small task against the cunning warriors of the{' '}
            <strong>Titan Pines</strong> or <strong>Gredora&apos;s</strong>{' '}
            gleaming legions.
          </TypographyP>
        </div>
        <div className="w-1/2 h-fit p-4 bg-slate-900 div-2 box-border border-t-2 border-b-2 text-white">
          <TypographyH4>Gifts of Unity</TypographyH4>
          <TypographyP>
            The intermingling of <strong>Cumerian</strong> and{' '}
            <strong>Gredoran</strong> families allowed many of the worlds
            strongest <em>Donums</em> to intertwine in delightful and terrifying
            ways. Where it&apos;s not common, it&apos;s not unheard of for{' '}
            <strong>Anidinian</strong> children to be blessed with some of both
            culture&apos;s historic powers.
          </TypographyP>
          <ul className="list-none">
            <li>
              <Donum>Donum Denieth</Donum>: The Gift of Denial
            </li>
            <li>
              <Donum>Donum Ferro</Donum>: The Gift of Iron
            </li>
            <li>
              <Donum>Donum Ignis</Donum>: The Gift of Fire
            </li>
            <li>
              <Donum>Donum Vitae</Donum>: The Gift of Vitality
            </li>
          </ul>
        </div>
      </div>
      <TypographyP>
        To become knighted or recognized as a hunter, one must first fell one of
        the <strong>Titan Pines</strong> and build their estate of its remains,
        or they can carve their home from the northern plateaus with their bare
        hands - their choice. Knights must then traverse the{' '}
        <strong>Duct of Sacrifice</strong> in the <strong>Titan Pines</strong>,
        presenting an adequette offering. Petitioning hunters are given one week
        to hunt enough game to feed their community for a week.
      </TypographyP>
      <TypographyH2>The Divine Right</TypographyH2>
      <TypographyP>
        The people of <strong>Anidine</strong> work diligently in their lives to
        serve their lords and their neighbors. They are a people who have
        overcome the greatest hatred for one another and joined for a common
        purpose. They pray to the two <strong>New Gods</strong> who founded the
        nation - <strong>Akil the Ruler</strong> and{' '}
        <strong>Asherah the Healer</strong> for their wisdom and strength.
        Though, over time, more and more people have begun to pray to the{' '}
        <strong>Old Gods</strong> of community and sacrifice. This new religion
        believes the world is fractured by hatred, unlike{' '}
        <strong>Anidine</strong>. That the rest of the world would come together
        if only they could see the beauty in unity. That it&apos;s the solemn
        duty of <strong>Anidine</strong> to unite the world under the rule of
        the divine right of Kings.
      </TypographyP>
      <TypographyH2>Oaken Moot</TypographyH2>
      <TypographyP>
        <strong>Anidine&apos;s</strong> greatest city,{' '}
        <strong>Oaken Moot</strong> sits atop a great plateau, looking down upon
        the rest of the kingdom. Before the city though was the{' '}
        <strong>Oaken Moot</strong>, the stump of one of the largest{' '}
        <strong>Titan Pines</strong> in <strong>Cumeria</strong>. The stump
        serves as the floor of the council&apos;s congress, where all{' '}
        <strong>Ainidinian</strong> lords meet and see each other as equals.
        They are overseen by the Monarch, who sits apart from them on a grand
        throne of <em>Adamantine</em>.
      </TypographyP>
      <TypographyH3>Life in Oaken Moot</TypographyH3>
      <TypographyP>
        The common people of <strong>Oaken Moot</strong> live a peaceful day to
        day life. Days are filled with slow paced crafting, studying, and
        trading. Hunters arrive from the outlands with their bounties,
        celebrated by their countrymen for their skill. The heat of the plateaus
        is offset by a constant breeze.
      </TypographyP>
      <TypographyP>
        It is only once the sun sets that the city truly comes awake. The
        trading plazas are cleared, the streets are cleaned, and horns blare
        throughout the city to signify the beginning of the nightly rigor. Every
        able bodied <strong>Anidinian</strong> in <strong>Oaken Moot</strong>{' '}
        begins training rigorously, the event punctuated by the elderly playing
        drums.
      </TypographyP>
      <TypographyBlockquote>
        Any <strong>Anidinian</strong> can become a Knight, a Baron, a King if
        only they strive hard enough. And there is no greater test than the{' '}
        <strong>Ordeal of Ambriel</strong>, which takes place in this very city.
        The Monarch honors their countrymen by pushing harder than any other
        each night, in public view.
      </TypographyBlockquote>
      <TypographyH2>Iron Pine Fortress</TypographyH2>
      <TypographyP>
        <strong>Iron Pine Fortress</strong> is an imposing figure on the
        horizon. Sixteen <strong>Titan Pines</strong> connected by metal walls
        and the trees themselves reinforced with steel and <em>Adamantine</em>.
        Thousands of soldiers work relentlessly to upkeep the fortress against
        constant assault. The assaults don&apos;t come from{' '}
        <strong>Cumerians</strong>, but beasts from the <strong>Pines</strong>.
        Giant, ravenous creatures with the intent of making the{' '}
        <strong>Duct of Sacrifice</strong> their own territory.
      </TypographyP>
      <TypographyP>
        Around the fort, a city has developed, hundreds of{' '}
        <strong>Cumerian</strong>-style abodes carved out of the treetops. For
        the people of the treetops, life is simple. Most do their best to
        support the soldiers below, a difficult task.
      </TypographyP>
      <TypographyP>
        Those who have grown up here are familiar with conflict: hardy people
        with true grit. Formiddable warriors any should be nervous to meet on
        the battlefield.
      </TypographyP>
      <Separator />
      <div className="w-full flex justify-between">
        <Link href="/setting/second-age">
          <Button variant="outline">
            <ChevronLeft /> New Beginning
          </Button>
        </Link>
        <Link href="/setting/second-age/argos">
          <Button variant="outline">
            Argos <ChevronRight />
          </Button>
        </Link>
      </div>
    </>
  );
}
