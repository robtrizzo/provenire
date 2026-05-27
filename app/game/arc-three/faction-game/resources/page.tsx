import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import ResourceSunburstChart from "./(components)/sunburst-chart";
import SankeyChart from "./(components)/sankey-chart";
import { SankeyInput } from "@/lib/sankey";

const materialsData: SankeyInput = [
  {
    name: "Scrapyard",
    role: "Wright",
    targets: [
      { name: "Scrapping", value: 15 },
      { name: "Slag", value: 10, color: "var(--color-olive-500)" },
      { name: "Lost", value: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", value: 5, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 5, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Shanty Houses",
    role: "Scaffold",
    targets: [
      { name: "Scrapping", value: 10 },
      { name: "Slag", value: 1, color: "var(--color-olive-500)" },
      { name: "Lost", value: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", value: 6, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 3, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Scrapping",
    targets: [
      { name: "Storage", value: 5 },
      { name: "Workshops", value: 10 },
      { name: "Machines", value: 10 },
    ],
  },
  {
    name: "Workshops",
    role: "Wright",
    targets: [
      { name: "Manufacturing", value: 5 },
      { name: "Slag", value: 4, color: "var(--color-olive-500)" },
      { name: "Lost", value: 1, color: "var(--color-neutral-500)" },
      { name: "Stolen", value: 5, color: "var(--color-slate-500)" },
      { name: "Attacks", value: 5, color: "var(--color-mauve-500)" },
    ],
  },
  {
    name: "Machines",
    role: "Cipher",
    targets: [
      { name: "Manufacturing", value: 8 },
      { name: "Slag", value: 5, color: "var(--color-olive-500)" },
      { name: "Stolen", value: 1, color: "var(--color-slate-500)" },
      { name: "Attacks", value: 1, color: "var(--color-mauve-500)" },
    ],
  },
  {
    name: "Manufacturing",
    targets: [{ name: "Storage", value: 13 }],
  },
  {
    name: "Crew Theft",
    role: "Shade",
    targets: [{ name: "Lair", value: 2 }],
  },
  {
    name: "Storage",
    targets: [
      { name: "Vault", value: 6 },
      { name: "Lair", value: 2 },
      { name: "Misc Stashes", value: 12 },
    ],
  },
  {
    name: "Vault",
    role: "Vault",
    targets: [{ name: "Available", value: 6 }],
  },
  {
    name: "Misc Stashes",
    role: "Scaffold",
    targets: [
      { name: "Stolen", value: 6, color: "var(--color-slate-500)" },
      { name: "Attacks", value: 2, color: "var(--color-mauve-500)" },
      { name: "Available", value: 4 },
    ],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", value: 4 }],
  },
  {
    name: "Raiding",
    role: "Auger",
    targets: [{ name: "Storage", value: 2 }],
  },
];

const foodData: SankeyInput = [
  {
    name: "Delivered Shipment",
    targets: [
      { name: "Storage", value: 14, color: "var(--color-amber-500)" },
      { name: "Destroyed", value: 11, color: "var(--color-olive-500)" },
      { name: "Lost", value: 25, color: "var(--color-neutral-500)" },
      { name: "Attacks", value: 50, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 50, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Raiding",
    role: "Auger",
    targets: [{ name: "Murder", value: 2, color: "var(--color-amber-500)" }],
  },
  {
    name: "Slain Attackers",
    role: "Lock",
    targets: [{ name: "Murder", value: 1, color: "var(--color-amber-500)" }],
  },
  {
    name: "Murder",
    targets: [{ name: "Storage", value: 3, color: "var(--color-amber-500)" }],
  },
  {
    name: "Crew Theft",
    role: "Shade",
    targets: [{ name: "Lair", value: 3, color: "var(--color-amber-500)" }],
  },
  {
    name: "Storage",
    targets: [
      { name: "Vault", value: 6, color: "var(--color-amber-500)" },
      { name: "Lair", value: 1, color: "var(--color-amber-500)" },
      { name: "Misc Stashes", value: 13, color: "var(--color-amber-500)" },
    ],
  },
  {
    name: "Vault",
    role: "Vault",
    targets: [{ name: "Available", value: 6, color: "var(--color-amber-500)" }],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", value: 4, color: "var(--color-amber-500)" }],
  },
  {
    name: "Misc Stashes",
    role: "Scaffold",
    targets: [
      { name: "Available", value: 2, color: "var(--color-amber-500)" },
      { name: "Attacks", value: 6, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 5, color: "var(--color-slate-500)" },
    ],
  },
];

const bloodData: SankeyInput = [
  {
    name: "Volunteers",
    role: "Vault",
    targets: [
      { name: "Vault", value: 6, color: "var(--color-red-500)" },
      { name: "Storage", value: 4, color: "var(--color-red-500)" },
      { name: "Lost", value: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", value: 5, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 10, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Prisoners",
    role: "Lock",
    targets: [
      { name: "Storage", value: 3, color: "var(--color-red-500)" },
      { name: "Lost", value: 1, color: "var(--color-neutral-500)" },
      { name: "Attacks", value: 1, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 3, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Tithing",
    targets: [{ name: "Storage", value: 7, color: "var(--color-red-500)" }],
  },
  {
    name: "Raiding",
    role: "Auger",
    targets: [
      { name: "Storage", value: 5, color: "var(--color-red-500)" },
      { name: "Lost", value: 2, color: "var(--color-neutral-500)" },
    ],
  },
  {
    name: "Crew Theft",
    role: "Shade",
    targets: [{ name: "Lair", value: 2, color: "var(--color-red-500)" }],
  },
  {
    name: "Storage",
    targets: [
      { name: "Lair", value: 2, color: "var(--color-red-500)" },
      { name: "Misc Stashes", value: 17, color: "var(--color-red-500)" },
    ],
  },
  {
    name: "Vault",
    role: "Vault",
    targets: [{ name: "Available", value: 6, color: "var(--color-red-500)" }],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", value: 4, color: "var(--color-red-500)" }],
  },
  {
    name: "Misc Stashes",
    role: "Scaffold",
    targets: [
      { name: "Available", value: 3, color: "var(--color-red-500)" },
      { name: "Attacks", value: 10, color: "var(--color-mauve-500)" },
      { name: "Stolen", value: 4, color: "var(--color-slate-500)" },
    ],
  },
];

const waterData: SankeyInput = [
  {
    name: "Rain Chamber",
    role: "Cipher",
    targets: [
      { name: "Carried", value: 5, color: "var(--color-blue-500)" },
      { name: "Pipeline", value: 6, color: "var(--color-blue-500)" },
      { name: "Wasted", value: 39, color: "var(--color-olive-500)" },
    ],
  },
  {
    name: "Carried",
    role: "Seeker",
    targets: [
      { name: "Storage", value: 3, color: "var(--color-blue-500)" },
      { name: "Lost", value: 2, color: "var(--color-neutral-500)" },
    ],
  },
  {
    name: "Pipeline",
    role: "Scaffold",
    targets: [
      { name: "Storage", value: 2, color: "var(--color-blue-500)" },
      { name: "Lost", value: 2, color: "var(--color-neutral-500)" },
      { name: "Stolen", value: 2, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Storage",
    targets: [
      { name: "Lair", value: 4, color: "var(--color-blue-500)" },
      { name: "Vault", value: 1, color: "var(--color-blue-500)" },
    ],
  },
  {
    name: "Vault",
    role: "Vault",
    targets: [{ name: "Available", value: 1, color: "var(--color-blue-500)" }],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", value: 4, color: "var(--color-blue-500)" }],
  },
];

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Resources</TypographyH1>
      <div className="mt-8">
        <ResourceSunburstChart />
      </div>
      <TypographyH2>Materials</TypographyH2>
      <div className="mt-8">
        <SankeyChart data={materialsData} />
      </div>
      <TypographyH2>Food</TypographyH2>
      <div className="mt-8">
        <SankeyChart data={foodData} />
      </div>
      <TypographyH2>Blood</TypographyH2>
      <div className="mt-8">
        <SankeyChart data={bloodData} />
      </div>
      <TypographyH2>Water</TypographyH2>
      <div className="mt-8">
        <SankeyChart data={waterData} />
      </div>
    </>
  );
}
