import Breadcrumbs from '@/components/ui/breadcrumbs';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from '@/components/ui/typography';

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Rules', href: '/game/core-system' },
          { name: 'Appendix', href: '#' },
        ]}
      />
      <TypographyH1>Appendix</TypographyH1>
      <TypographyH2 id="alchemical-traits">Alchemical Traits</TypographyH2>
      <TypographyH3>Positive Traits</TypographyH3>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Nutritious:</b> tick <b>healing clock</b> by <b>1</b>
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Potent:</b> lasts longer than normal
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Simple:</b> create five doses per batch
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Soothing:</b> tick <b>recovery clock</b> by <b>1</b>
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Tasty:</b> can be passed off as a normal drink
      </TypographyP>
      <TypographyH3>Negative Traits</TypographyH3>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Acrid:</b> difficult to keep down on an empty stomach
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Addling:</b> slow to react or think through complex situations
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Diluted:</b> not nearly as effective as it could be
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Groggy:</b> risk missing details, or falling asleep while doing
        simple tasks
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Imprecise:</b> requires skill to use properly, even in ideal
        circumstances
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Jittery:</b> difficult to remain still or perform precise tasks
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Light-blind:</b> difficult to see in illuminated areas
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Messy:</b> leaves behind overwhelming amounts of evidence
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Stains:</b> difficult to wash off after application
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Withdrawal:</b> leaves you feeling worse for wear afterwards
      </TypographyP>
      <TypographyH2 id="equipment-traits">Equipment Traits</TypographyH2>
      <TypographyH3>Positive Traits</TypographyH3>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Advanced:</b> experts get better results in dire or pressing
        circumstances
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Concealable:</b> possible to hide on your person
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Destructive:</b> especially effective at crushing and smashing
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Emblazoned:</b> its design is an overt expression of resistance
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Fortified:</b> the first time this item would break, it doesn&apos;t
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Simple:</b> requires less effort to craft and repair
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Tailored:</b> made to suit the style of one particular person. Others
        find it difficult to use.
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Valuable:</b> easy to trade for resources
      </TypographyP>
      <TypographyH3>Negative Traits</TypographyH3>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Bulky:</b> prevents you from squeezing into any tight spaces or
        moving acrobatically
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Convoluted:</b> involves arbitrary factoids or steps to achieve the
        desired result
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Dim:</b> only illuminates immediate surroundings
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Dull:</b> can&apos;t cut through anything more protective than
        clothing
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Fragile:</b> any amount of stress or damage will ruin this item
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Heavy:</b> fatigues you faster while under stress
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Imprecise:</b> requires skill to use properly, even in ideal
        circumstances
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Memorable:</b> unique design that people will recognize
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Noisy:</b> can be clearly heard from a short distance away
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Tangled:</b> possibly snags on machinery or trips people
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Unreliable:</b> has a chance of not working, even in ideal
        circumstances
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Unwieldy:</b> using this item may give quick foes opportunities to
        react
      </TypographyP>
      <TypographyP className="[&:not(:first-child)]:mt-0">
        <b>Volatile:</b> explodes when ignited
      </TypographyP>
    </>
  );
}
