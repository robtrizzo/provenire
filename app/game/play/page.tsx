import {
  TypographyH1,
  TypographyH3,
  TypographyP,
  TypographyUnorderedList,
} from '@/components/ui/typography';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import {
  Brain,
  Handshake,
  Wheat,
  Anvil,
  Speech,
  Droplets,
  Droplet,
  Eye,
  Siren,
} from 'lucide-react';

export default function Page() {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Play', href: '#' }]} />
      <TypographyH1>The Crew</TypographyH1>
      <div className="flex items-center gap-2 border-solid border-text-secondary border-2 box-border py-2 px-4 rounded-md">
        character portraits and names go here
      </div>
      <div className="flex items-center flex-wrap gap-2">
        <ResourceBox>
          <Brain className="text-teal-500" /> <TypographyP>Intel</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Handshake className="text-fuchsia-500" />{' '}
          <TypographyP>Goodwill</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Wheat className="text-amber-500" /> <TypographyP>Food</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Anvil className="text-violet-500" />{' '}
          <TypographyP>Materials</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Speech className="text-lime-500" /> <TypographyP>Rep</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Droplets className="text-red-500" /> <TypographyP>Blood</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Droplet className="text-blue-500" /> <TypographyP>Water</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Eye className="text-orange-500" /> <TypographyP>Heat</TypographyP>
        </ResourceBox>
        <ResourceBox>
          <Siren className="text-rose-500" /> <TypographyP>Wanted</TypographyP>
        </ResourceBox>
      </div>
    </>
  );
}

function ResourceBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-solid border-text-secondary border-2 box-border py-2 px-4 rounded-md">
      {children}
    </div>
  );
}
