import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import ResourceSunburstChart from "./(components)/sunburst-chart";
import { SankeyInput } from "@/lib/sankey";
import EditableSankeyChart from "./(components)/editable-sankey-chart";

const materialsData: SankeyInput = [
  {
    name: "Scrapyard",
    roles: ["Wright"],
    produces: 40,
    targets: [
      { name: "Scrapping", weight: 15 },
      { name: "Slag", weight: 10, color: "var(--color-olive-500)" },
      { name: "Lost", weight: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 5, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 5, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Shanty Houses",
    roles: ["Scaffold"],
    produces: 25,
    targets: [
      { name: "Scrapping", weight: 10 },
      { name: "Slag", weight: 1, color: "var(--color-olive-500)" },
      { name: "Lost", weight: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 6, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 3, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Scrapping",
    targets: [
      { name: "Storage", weight: 5 },
      { name: "Workshops", weight: 10 },
      { name: "Machines", weight: 10 },
    ],
  },
  {
    name: "Workshops",
    roles: ["Wright"],
    targets: [
      { name: "Manufacturing", weight: 5 },
      { name: "Slag", weight: 4, color: "var(--color-olive-500)" },
      { name: "Lost", weight: 1, color: "var(--color-neutral-500)" },
      { name: "Stolen", weight: 5, color: "var(--color-slate-500)" },
      { name: "Attacks", weight: 5, color: "var(--color-mauve-500)" },
    ],
  },
  {
    name: "Machines",
    roles: ["Cipher"],
    targets: [
      { name: "Manufacturing", weight: 8 },
      { name: "Slag", weight: 5, color: "var(--color-olive-500)" },
      { name: "Stolen", weight: 1, color: "var(--color-slate-500)" },
      { name: "Attacks", weight: 1, color: "var(--color-mauve-500)" },
    ],
  },
  {
    name: "Manufacturing",
    targets: [{ name: "Storage", weight: 13 }],
  },
  {
    name: "Crew Theft",
    roles: ["Shade"],
    produces: 2,
    targets: [{ name: "Lair", weight: 1 }],
  },
  {
    name: "Storage",
    targets: [
      { name: "Vault", weight: 6 },
      { name: "Lair", weight: 2 },
      { name: "Misc Stashes", weight: 12 },
    ],
  },
  {
    name: "Vault",
    roles: ["Vault"],
    targets: [{ name: "Available", weight: 1 }],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold"],
    targets: [
      { name: "Stolen", weight: 6, color: "var(--color-slate-500)" },
      { name: "Attacks", weight: 2, color: "var(--color-mauve-500)" },
      { name: "Available", weight: 4 },
    ],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", weight: 1 }],
  },
  {
    name: "Raiding",
    roles: ["Auger"],
    produces: 2,
    targets: [{ name: "Storage", weight: 1 }],
  },
];

const foodData: SankeyInput = [
  {
    name: "Delivered Shipment",
    roles: ["Cipher", "Wright"],
    produces: 150,
    targets: [
      { name: "Storage", weight: 14, color: "var(--color-amber-500)" },
      { name: "Destroyed", weight: 11, color: "var(--color-olive-500)" },
      { name: "Lost", weight: 25, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 50, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 50, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Raiding",
    roles: ["Auger"],
    produces: 2,
    targets: [{ name: "Murder", weight: 1, color: "var(--color-amber-500)" }],
  },
  {
    name: "Slain Attackers",
    roles: ["Lock"],
    produces: 1,
    targets: [{ name: "Murder", weight: 1, color: "var(--color-amber-500)" }],
  },
  {
    name: "Murder",
    targets: [{ name: "Storage", weight: 1, color: "var(--color-amber-500)" }],
  },
  {
    name: "Crew Theft",
    roles: ["Shade"],
    produces: 3,
    targets: [{ name: "Lair", weight: 1, color: "var(--color-amber-500)" }],
  },
  {
    name: "Storage",
    targets: [
      { name: "Vault", weight: 6, color: "var(--color-amber-500)" },
      { name: "Lair", weight: 1, color: "var(--color-amber-500)" },
      { name: "Misc Stashes", weight: 13, color: "var(--color-amber-500)" },
    ],
  },
  {
    name: "Vault",
    roles: ["Vault"],
    targets: [
      { name: "Available", weight: 1, color: "var(--color-amber-500)" },
    ],
  },
  {
    name: "Lair",
    targets: [
      { name: "Available", weight: 1, color: "var(--color-amber-500)" },
    ],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold"],
    targets: [
      { name: "Available", weight: 2, color: "var(--color-amber-500)" },
      { name: "Attacks", weight: 6, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 5, color: "var(--color-slate-500)" },
    ],
  },
];

const bloodData: SankeyInput = [
  {
    name: "Volunteers",
    roles: ["Vault"],
    produces: 30,
    targets: [
      { name: "Vault", weight: 6, color: "var(--color-red-500)" },
      { name: "Storage", weight: 4, color: "var(--color-red-500)" },
      { name: "Lost", weight: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 5, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 10, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Prisoners",
    roles: ["Lock"],
    produces: 8,
    targets: [
      { name: "Storage", weight: 3, color: "var(--color-red-500)" },
      { name: "Lost", weight: 1, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 1, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 3, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Raiding",
    roles: ["Auger"],
    produces: 7,
    targets: [
      { name: "Storage", weight: 5, color: "var(--color-red-500)" },
      { name: "Lost", weight: 2, color: "var(--color-neutral-500)" },
    ],
  },
  {
    name: "Crew Theft",
    roles: ["Shade"],
    produces: 2,
    targets: [{ name: "Lair", weight: 1, color: "var(--color-red-500)" }],
  },
  {
    name: "Storage",
    targets: [
      { name: "Lair", weight: 2, color: "var(--color-red-500)" },
      { name: "Misc Stashes", weight: 10, color: "var(--color-red-500)" },
    ],
  },
  {
    name: "Vault",
    roles: ["Vault"],
    targets: [{ name: "Available", weight: 1, color: "var(--color-red-500)" }],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", weight: 1, color: "var(--color-red-500)" }],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold"],
    targets: [
      { name: "Available", weight: 1, color: "var(--color-red-500)" },
      { name: "Attacks", weight: 7, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 2, color: "var(--color-slate-500)" },
    ],
  },
];

const waterData: SankeyInput = [
  {
    name: "Rain Chamber",
    roles: ["Cipher"],
    produces: 50,
    targets: [
      { name: "Carried", weight: 5, color: "var(--color-blue-500)" },
      { name: "Pipeline", weight: 6, color: "var(--color-blue-500)" },
      { name: "Wasted", weight: 39, color: "var(--color-olive-500)" },
    ],
  },
  {
    name: "Carried",
    roles: ["Seeker"],
    targets: [
      { name: "Storage", weight: 3, color: "var(--color-blue-500)" },
      { name: "Lost", weight: 2, color: "var(--color-neutral-500)" },
    ],
  },
  {
    name: "Pipeline",
    roles: ["Scaffold"],
    targets: [
      { name: "Storage", weight: 2, color: "var(--color-blue-500)" },
      { name: "Lost", weight: 2, color: "var(--color-neutral-500)" },
      { name: "Stolen", weight: 2, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Storage",
    targets: [
      { name: "Lair", weight: 4, color: "var(--color-blue-500)" },
      { name: "Vault", weight: 1, color: "var(--color-blue-500)" },
    ],
  },
  {
    name: "Vault",
    roles: ["Vault"],
    targets: [{ name: "Available", weight: 1, color: "var(--color-blue-500)" }],
  },
  {
    name: "Lair",
    targets: [{ name: "Available", weight: 1, color: "var(--color-blue-500)" }],
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
        <EditableSankeyChart initialData={materialsData} />
      </div>
      <TypographyH2>Food</TypographyH2>
      <div className="mt-8">
        <EditableSankeyChart initialData={foodData} />
      </div>
      <TypographyH2>Blood</TypographyH2>
      <div className="mt-8">
        <EditableSankeyChart initialData={bloodData} />
      </div>
      <TypographyH2>Water</TypographyH2>
      <div className="mt-8">
        <EditableSankeyChart initialData={waterData} />
      </div>
    </>
  );
}
