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
      <TypographyH2 id="alchemical-traits" className="mt-6">
        Alchemical Traits
      </TypographyH2>
      <TypographyH3>Positive Traits</TypographyH3>
      <TypographyP className="not-first:mt-0">
        <b>Nutritious:</b> tick <b>healing clock</b> by <b>1</b>
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Potent:</b> lasts longer than normal
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Simple:</b> create five doses per batch
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Soothing:</b> tick <b>recovery clock</b> by <b>1</b>
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Tasty:</b> can be passed off as a normal drink
      </TypographyP>
      <TypographyH3>Negative Traits</TypographyH3>
      <TypographyP className="not-first:mt-0">
        <b>Acrid:</b> difficult to keep down on an empty stomach
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Addling:</b> slow to react or think through complex situations
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Diluted:</b> not nearly as effective as it could be
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Groggy:</b> risk missing details, or falling asleep while doing
        simple tasks
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Imprecise:</b> requires skill to use properly, even in ideal
        circumstances
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Jittery:</b> difficult to remain still or perform precise tasks
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Light-blind:</b> difficult to see in illuminated areas
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Messy:</b> leaves behind overwhelming amounts of evidence
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Stains:</b> difficult to wash off after application
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Withdrawal:</b> leaves you feeling worse for wear afterwards
      </TypographyP>
      <TypographyH2 id="equipment-traits" className="mt-6">
        Equipment Traits
      </TypographyH2>
      <TypographyH3>Positive Traits</TypographyH3>
      <TypographyP className="not-first:mt-0">
        <b>Advanced:</b> experts get better results in dire or pressing
        circumstances
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Concealable:</b> possible to hide on your person
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Destructive:</b> especially effective at crushing and smashing
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Emblazoned:</b> its design is an overt expression of resistance
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Fortified:</b> the first time this item would break, it doesn&apos;t
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Simple:</b> requires less effort to craft and repair
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Tailored:</b> made to suit the style of one particular person. Others
        find it difficult to use.
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Valuable:</b> easy to trade for resources
      </TypographyP>
      <TypographyH3>Negative Traits</TypographyH3>
      <TypographyP className="not-first:mt-0">
        <b>Bulky:</b> prevents you from squeezing into any tight spaces or
        moving acrobatically
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Convoluted:</b> involves arbitrary factoids or steps to achieve the
        desired result
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Dim:</b> only illuminates immediate surroundings
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Dull:</b> can&apos;t cut through anything more protective than
        clothing
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Fragile:</b> any amount of stress or damage will ruin this item
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Heavy:</b> fatigues you faster while under stress
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Imprecise:</b> requires skill to use properly, even in ideal
        circumstances
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Memorable:</b> unique design that people will recognize
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Noisy:</b> can be clearly heard from a short distance away
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Tangled:</b> possibly snags on machinery or trips people
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Unreliable:</b> has a chance of not working, even in ideal
        circumstances
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Unwieldy:</b> using this item may give quick foes opportunities to
        react
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Volatile:</b> explodes when ignited
      </TypographyP>
      <TypographyH2 id="gang-traits" className="mt-6">
        Gang Traits
      </TypographyH2>
      <TypographyH3>Positive Traits</TypographyH3>
      <TypographyP className="not-first:mt-0">
        <b>Brutal:</b> won&apos;t shy away from extreme violence
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Fearsome:</b> terrifying in aspect and reputation
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Independant:</b> can be trusted to take the initiative and make good
        decisions on their own
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Loyal:</b> won&apos;t be swayed away from the crew by bribes or
        nonlethal pressure
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Tenacious:</b> won&apos;t be deterred from a task
      </TypographyP>
      <TypographyH3>Negative Traits</TypographyH3>
      <TypographyP className="not-first:mt-0">
        <b>Braggarts:</b> leak evidence and spread self aggrandizing gossip
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Disorganized:</b> ineffective at complex tasks
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Principled:</b> there are certain ethics this gang won&apos;t betray
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Skiddish:</b> won&apos;t take big risks. Easily intimidated.
      </TypographyP>
      <TypographyP className="not-first:mt-0">
        <b>Unreliable:</b> possibly busy, unwilling, or unable to help
      </TypographyP>
    </>
  );
}
