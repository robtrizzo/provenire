import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import ResourceSunburstChart from "./(components)/sunburst-chart";
import {
  applyLocationTargets,
  SankeyInput,
  SankeyLocation,
} from "@/lib/sankey";
import EditableSankeyChart from "./(components)/editable-sankey-chart";
import ResourcesView from "./(components)/resources-view";

const locations: SankeyLocation[] = [
  {
    name: "Fab Floor",
    targets: [
      { name: "Lost", weight: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 5, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 5, color: "var(--color-slate-500)" },
    ],
  },
  {
    name: "Lofts",
    targets: [
      { name: "Lost", weight: 5, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 6, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 3, color: "var(--color-slate-500)" },
    ],
  },
];

const materialsData: SankeyInput = [
  {
    name: "Scrapyard",
    roles: ["Wright"],
    produces: 40,
    location: ["Fab Floor"],
    targets: [
      { name: "Scrapping", weight: 15 },
      { name: "Slag", weight: 10, color: "var(--color-olive-500)" },
    ],
  },
  {
    name: "Shanty Houses",
    roles: ["Scaffold"],
    produces: 25,
    location: ["Lofts"],
    targets: [
      { name: "Scrapping", weight: 10 },
      { name: "Slag", weight: 1, color: "var(--color-olive-500)" },
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
    produces: "4:5",
    location: ["Fab Floor"],
    targets: [
      { name: "Manufacturing", weight: 5 },
      { name: "Slag", weight: 4, color: "var(--color-olive-500)" },
    ],
  },
  {
    name: "Machines",
    roles: ["Cipher"],
    produces: "2:3",
    location: ["Fab Floor"],
    targets: [
      { name: "Manufacturing", weight: 8 },
      { name: "Slag", weight: 5, color: "var(--color-olive-500)" },
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
    max: 6,
    location: ["The Bends"],
    targets: [{ name: "Available", weight: 1 }],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    targets: [{ name: "Available", weight: 4 }],
  },
  {
    name: "Lair",
    max: 4,
    targets: [{ name: "Available", weight: 1 }],
  },
  {
    name: "Raiding",
    roles: ["Auger"],
    produces: 2,
    targets: [{ name: "Storage", weight: 1 }],
  },
];

// TODO! refactor the rest of the data to use the location defs

const foodData: SankeyInput = [
  {
    name: "Delivered Shipment",
    roles: ["Cipher", "Wright"],
    produces: 150,
    location: ["Delivery Vault"],
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
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
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
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
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
    location: ["Lofts", "The Bends"],
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
      <ResourcesView
        materialsData={materialsData}
        foodData={foodData}
        bloodData={bloodData}
        waterData={waterData}
        locationDefs={locations}
      />
    </>
  );
}
