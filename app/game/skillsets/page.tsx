import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  VenetianMask,
  Flame,
  Activity,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import FactoryMap from '@/components/factory-map';
import HierarchyTree from '@/components/hierarchy-tree';
import ScornTable from '@/components/scorn-table';
import SkillsetAbilities from '@/components/skillsetAbilities.tsx';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default async function Page() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: 'Character Creation', href: '/game/character-creation' },
          { name: 'Skillsets', href: '#' },
        ]}
      />
      <TypographyH1>Skillsets</TypographyH1>
      <TypographyP>
        No one breaks the status quo in the Steel Trap. It's guaranteed failure
        and hardship for your loved ones. But the PCs are different. They're
        going to pull it off. Their particular brand of Skillset shows how they
        go about it.
      </TypographyP>
      <TypographyP>
        Your Skillset grants you unique character questions, acions, special
        abilities, and ways to advance the crew during the{' '}
        <Link href="/game/the-churn#agendas">
          <span className="text-red-500 font-bold underline">Agendas</span>
        </Link>
        phase.
      </TypographyP>
      <TypographyH2 id="Chisel">
        <span className="text-indigo-500">Chisel</span>
        <span className="text-muted-foreground text-lg ml-8">
          A crafty sabetour and wright
        </span>
      </TypographyH2>
      <TypographyP>
        The workers of the Steel Trap spend their lives surrounded by the
        roaring and churning machines of the factory. The Chisel is one of the
        few who dares to attempt understanding them.
      </TypographyP>
      <TypographyP>
        <i>
          A dangerous machine you were tampering with lashed out at you. What
          was the machine and how did it scar you?
        </i>
      </TypographyP>
      <TypographyP>
        <i>
          The factory&apos;s every creation leaves behind piles of refuse. What
          waste do you see as useful materials that others don&apos;t?
        </i>
      </TypographyP>
      <TypographyH3>Actions</TypographyH3>
      <TypographyUnorderedList>
        <li>
          <b>
            Cobble <Flame className="inline-block mb-3" />:
          </b>{' '}
          Rapidly make an improvised tool or weapon from available scrap.
        </li>
        <li>
          <b>
            Sabotage <VenetianMask className="inline-block mb-1" />:
          </b>{' '}
          Tamper with or damage a machine or device.
        </li>
      </TypographyUnorderedList>
      <TypographyH3>Special Abilities</TypographyH3>
      <SkillsetAbilities skillsetName="Chisel" />
      <TypographyH3>Agendas</TypographyH3>
      <TypographyP>
        During The Churn, Chisels are designing, forging, and building new
        equipment for the crew... if only they have the **materials**. These
        items are equipable by the crew until they become damaged or lost. If
        the Chisel has no materials, they can only research new designs.
      </TypographyP>
      <TypographyP>
        First, the Chisel picks a design to research and makes a **[project
        roll](/game/actions-and-rolls#project-rolls)** to pursue it. Once the
        clock is filled, the design is complete and the Chisel can build it by
        spending 1 **material**. Instead of researching a new design, the Chisel
        can start a new project to upgrade an existing design. When an upgrade
        project is completed, the Chisel can spend 1 **material** to remove a
        negative trait or add a positive trait to the design. A full list of
        equipment traits is **[here](/game/appendix#equipment-traits)**
      </TypographyP>
      <TypographyH4>Starting equipment</TypographyH4>
      {/* TODO use items.json for starting items, schematics, and formulae */}
      <TypographyUnorderedList>
        <li>
          <b>Hand Tool</b>{' '}
          <i className="text-muted-foreground">unwieldy, dull</i>: Hammers,
          screwdrivers, prybars, and other odds and ends.
        </li>
        <li>
          <b>Hand Tool</b>{' '}
          <i className="text-muted-foreground">unwieldy, dull</i>: Hammers,
          screwdrivers, prybars, and other odds and ends.
        </li>
      </TypographyUnorderedList>
    </>
  );
}
