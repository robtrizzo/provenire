import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import ArchetypeVotePopover from "./(components)/archetype-vote-popover";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber mb-8">Archetypes</TypographyH1>
      <ArchetypeTitle name="Strategist" />
      <span className="text-muted-foreground">
        Intense, inquisitive, perceptive
      </span>
      <ArchetypeTitle name="Engineer" />
      <span className="text-muted-foreground">
        Cerebral, experimental, positive
      </span>
      <ArchetypeTitle name="Commander" />
      <span className="text-muted-foreground">
        Decisive, ruthless, disciplined
      </span>
      <ArchetypeTitle name="Visionary" />
      <span className="text-muted-foreground">
        Bold, rebellious, contrarian
      </span>
      <ArchetypeTitle name="Advocate" />
      <span className="text-muted-foreground">
        Thoughtful, principled, altruistic
      </span>
      <ArchetypeTitle name="Idealist" />
      <span className="text-muted-foreground">
        Imaginative, empathetic, compassionate
      </span>
      <ArchetypeTitle name="Leader" />
      <span className="text-muted-foreground">
        Warm, passionate, optimistic
      </span>
      <ArchetypeTitle name="Dreamer" />
      <span className="text-muted-foreground">
        Hopeful, openhearted, carefree
      </span>
      <ArchetypeTitle name="Logistician" />
      <span className="text-muted-foreground">
        Willful, rational, methodical
      </span>
      <ArchetypeTitle name="Defender" />
      <span className="text-muted-foreground">
        Steady, responsible, understanding
      </span>
      <ArchetypeTitle name="Executive" />
      <span className="text-muted-foreground">
        Resilient, diligent, stabilizing
      </span>
      <ArchetypeTitle name="Consul" />
      <span className="text-muted-foreground">
        Attentive, encouraging, generous
      </span>
      <ArchetypeTitle name="Virtuoso" />
      <span className="text-muted-foreground">
        Solitary, exploratory, direct
      </span>
      <ArchetypeTitle name="Artist" />
      <span className="text-muted-foreground">
        Centered, interested, openminded
      </span>
      <ArchetypeTitle name="Adventurer" />
      <span className="text-muted-foreground">
        Energetic, enthusiastic, impulsive
      </span>
      <ArchetypeTitle name="Entertainer" />
      <span className="text-muted-foreground">Social, witty, observant</span>
    </>
  );
}

function ArchetypeTitle({ name }: { name: string }) {
  return (
    <TypographyH2 className="font-cyber mt-8" id={name}>
      <div className="flex justify-between">
        {name}
        <ArchetypeVotePopover name={name} />
      </div>
    </TypographyH2>
  );
}
