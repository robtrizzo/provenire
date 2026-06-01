import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1, TypographyH2 } from "@/components/ui/typography";
import ResourceSunburstChart from "./(components)/sunburst-chart";
import {
  applyLocationTargets,
  SankeyInput,
  SankeyLocation,
  sankeyToSunburstData,
} from "@/lib/sankey";
import ResourcesView from "./(components)/resources-view";
import LocationsDisplay from "./(components)/locations-display";

const locations: SankeyLocation[] = [
  {
    name: "Fab Floor",
    targets: [
      { name: "Lost", weight: 2, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 6, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 7, color: "var(--color-slate-500)" },
      { name: "Naysayers", weight: 7, color: "var(--color-mist-500)" },
      { name: "Fear", weight: 7, color: "var(--color-gray-500)" },
      { name: "Hunger", weight: 7, color: "var(--color-taupe-500)" },
    ],
  },
  {
    name: "Lofts",
    targets: [
      { name: "Lost", weight: 6, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 4, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 4, color: "var(--color-slate-500)" },
      { name: "Naysayers", weight: 7, color: "var(--color-mist-500)" },
      { name: "Fear", weight: 7, color: "var(--color-gray-500)" },
      { name: "Hunger", weight: 7, color: "var(--color-taupe-500)" },
    ],
  },
  {
    name: "The Bends",
    targets: [
      { name: "Lost", weight: 2, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 10, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 5, color: "var(--color-slate-500)" },
      { name: "Naysayers", weight: 7, color: "var(--color-mist-500)" },
      { name: "Fear", weight: 7, color: "var(--color-gray-500)" },
      { name: "Hunger", weight: 7, color: "var(--color-taupe-500)" },
    ],
  },
  {
    name: "Stairwell",
    targets: [
      { name: "Lost", weight: 4, color: "var(--color-neutral-500)" },
      { name: "Attacks", weight: 8, color: "var(--color-mauve-500)" },
      { name: "Stolen", weight: 8, color: "var(--color-slate-500)" },
      { name: "Naysayers", weight: 7, color: "var(--color-mist-500)" },
      { name: "Fear", weight: 7, color: "var(--color-gray-500)" },
      { name: "Hunger", weight: 7, color: "var(--color-taupe-500)" },
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
    targets: [{ name: "Available", weight: 4 }],
    modifiers: [
      { name: "Stolen", weight: -4 },
      { name: "Attacks", weight: -4 },
      { name: "Lost", weight: -100 },
    ],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold", "Seeker"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    targets: [{ name: "Available", weight: 4 }],
  },
  {
    name: "Lair",
    max: 4,
    location: ["Lofts"],
    targets: [{ name: "Available", weight: 4 }],
    modifiers: [
      { name: "Stolen", weight: -8 },
      { name: "Attacks", weight: -6 },
      { name: "Lost", weight: -100 },
    ],
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
    location: ["Delivery Vault"],
    targets: [
      { name: "Storage", weight: 17, color: "var(--color-amber-500)" },
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
      { name: "Vault", weight: 5, color: "var(--color-amber-500)" },
      { name: "Lair", weight: 5, color: "var(--color-amber-500)" },
      { name: "Misc Stashes", weight: 1, color: "var(--color-amber-500)" },
    ],
  },
  {
    name: "Vault",
    roles: ["Vault"],
    max: 6,
    location: ["The Bends"],
    targets: [
      { name: "Available", weight: 4, color: "var(--color-amber-500)" },
    ],
    modifiers: [
      { name: "Stolen", weight: -4 },
      { name: "Attacks", weight: -4 },
      { name: "Lost", weight: -100 },
    ],
  },
  {
    name: "Lair",
    max: 4,
    location: ["Lofts"],
    targets: [
      { name: "Available", weight: 4, color: "var(--color-amber-500)" },
    ],
    modifiers: [
      { name: "Stolen", weight: -8 },
      { name: "Attacks", weight: -6 },
      { name: "Lost", weight: -100 },
    ],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold", "Seeker"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    targets: [
      { name: "Available", weight: 2, color: "var(--color-amber-500)" },
    ],
  },
];

const bloodData: SankeyInput = [
  {
    name: "Volunteers",
    roles: ["Vault"],
    produces: 30,
    location: ["The Bends"],
    targets: [
      { name: "Vault", weight: 6, color: "var(--color-red-500)" },
      { name: "Storage", weight: 4, color: "var(--color-red-500)" },
    ],
  },
  {
    name: "Prisoners",
    roles: ["Lock"],
    produces: 8,
    location: ["The Bends"],
    targets: [{ name: "Storage", weight: 3, color: "var(--color-red-500)" }],
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
    max: 6,
    location: ["The Bends"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-red-500)" }],
    modifiers: [
      { name: "Stolen", weight: -4 },
      { name: "Attacks", weight: -4 },
      { name: "Lost", weight: -100 },
    ],
  },
  {
    name: "Lair",
    max: 4,
    location: ["Lofts"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-red-500)" }],
    modifiers: [
      { name: "Stolen", weight: -8 },
      { name: "Attacks", weight: -6 },
      { name: "Lost", weight: -100 },
    ],
  },
  {
    name: "Misc Stashes",
    roles: ["Scaffold", "Seeker"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    targets: [{ name: "Available", weight: 1, color: "var(--color-red-500)" }],
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
    roles: ["Seeker", "Vault"],
    location: ["The Bends", "Lofts"],
    targets: [{ name: "Storage", weight: 3, color: "var(--color-blue-500)" }],
  },
  {
    name: "Pipeline",
    roles: ["Scaffold"],
    location: ["Lofts", "The Bends"],
    targets: [{ name: "Storage", weight: 2, color: "var(--color-blue-500)" }],
    modifiers: [
      { name: "Attacks", weight: -6 },
      { name: "Lost", weight: -2 },
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
    max: 6,
    location: ["The Bends"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-blue-500)" }],
    modifiers: [
      { name: "Stolen", weight: -4 },
      { name: "Attacks", weight: -4 },
      { name: "Lost", weight: -100 },
    ],
  },
  {
    name: "Lair",
    max: 4,
    location: ["Lofts"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-blue-500)" }],
    modifiers: [
      { name: "Stolen", weight: -8 },
      { name: "Attacks", weight: -6 },
      { name: "Lost", weight: -100 },
    ],
  },
];

const repData: SankeyInput = [
  {
    name: "Thwarted Attacks",
    roles: ["Lock"],
    location: ["The Bends"],
    produces: 1,
    targets: [
      {
        name: "Victorious Battles",
        weight: 4,
        color: "var(--color-lime-500)",
      },
    ],
  },
  {
    name: "Raids",
    roles: ["Auger"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 6,
    targets: [
      {
        name: "Victorious Battles",
        weight: 4,
        color: "var(--color-lime-500)",
      },
    ],
  },
  {
    name: "Victorious Battles",
    roles: ["Auger", "Lock"],
    targets: [
      {
        name: "Available",
        weight: 4,
        color: "var(--color-lime-500)",
      },
    ],
  },
  {
    name: "Popular Judgements",
    roles: ["Lock"],
    location: ["The Bends"],
    produces: 5,
    targets: [
      {
        name: "Available",
        weight: 4,
        color: "var(--color-lime-500)",
      },
    ],
  },
  {
    name: "Crew Acts",
    roles: ["Pact"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 8,
    targets: [
      {
        name: "Available",
        weight: 4,
        color: "var(--color-lime-500)",
      },
    ],
  },
];

const goodwillData: SankeyInput = [
  {
    name: "Charitable Acts",
    roles: ["Pact"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 10,
    targets: [
      {
        name: "Available",
        weight: 4,
        color: "var(--color-pink-500)",
      },
    ],
  },
  {
    name: "Housing",
    roles: ["Scaffold"],
    location: ["Lofts"],
    produces: 6,
    targets: [
      {
        name: "Available",
        weight: 4,
        color: "var(--color-pink-500)",
      },
    ],
  },
  {
    name: "Fair Judgements",
    roles: ["Lock"],
    location: ["The Bends"],
    produces: 4,
    targets: [
      {
        name: "Available",
        weight: 4,
        color: "var(--color-pink-500)",
      },
    ],
  },
];

const intelData: SankeyInput = [
  {
    name: "Spy Network",
    roles: ["Shade"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 9,
    targets: [{ name: "Spying", weight: 4, color: "var(--color-sky-500)" }],
  },
  {
    name: "Evesdropping",
    roles: ["Seeker"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 3,
    targets: [{ name: "Spying", weight: 4, color: "var(--color-sky-500)" }],
  },
  {
    name: "Spying",
    roles: ["Seeker", "Shade"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-sky-500)" }],
  },
  {
    name: "Loyal Enforcers",
    roles: ["Pact"],
    produces: 3,
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-sky-500)" }],
  },
  {
    name: "Community Spaces",
    roles: ["Scaffold"],
    produces: 5,
    location: ["Lofts"],
    targets: [{ name: "Available", weight: 4, color: "var(--color-sky-500)" }],
  },
];

const manpowerData: SankeyInput = [
  {
    name: "Thwarted Attacks",
    roles: ["Lock"],
    location: ["The Bends"],
    produces: 1,
    targets: [
      {
        name: "Victorious Battles",
        weight: 4,
        color: "var(--color-orange-500)",
      },
    ],
  },
  {
    name: "Raiding",
    roles: ["Auger"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 4,
    targets: [
      {
        name: "Victorious Battles",
        weight: 4,
        color: "var(--color-orange-500)",
      },
    ],
  },
  {
    name: "Well Fed",
    roles: ["Vault"],
    location: ["The Bends"],
    produces: 9,
    targets: [
      {
        name: "Population in Loyal Factions",
        weight: 4,
        color: "var(--color-orange-500)",
      },
    ],
  },
  {
    name: "Crew Acts",
    roles: ["Pact"],
    location: ["Stairwell", "Fab Floor", "The Bends", "Lofts"],
    produces: 6,
    targets: [
      {
        name: "Population in Loyal Factions",
        weight: 4,
        color: "var(--color-orange-500)",
      },
    ],
  },
  {
    name: "Victorious Battles",
    roles: ["Auger", "Lock"],
    targets: [
      { name: "Available", weight: 4, color: "var(--color-orange-500)" },
    ],
  },
  {
    name: "Population in Loyal Factions",
    roles: ["Auger", "Lock"],
    targets: [
      { name: "Available", weight: 4, color: "var(--color-orange-500)" },
    ],
  },
];

const sunburstChildren = [
  sankeyToSunburstData(
    applyLocationTargets(materialsData, locations, [
      "Naysayers",
      "Fear",
      "Hunger",
    ]),
    "Materials",
    "var(--color-indigo-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(foodData, locations, ["Naysayers", "Fear", "Hunger"]),
    "Food",
    "var(--color-amber-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(bloodData, locations, ["Naysayers", "Fear", "Hunger"]),
    "Blood",
    "var(--color-red-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(waterData, locations, ["Naysayers", "Fear", "Hunger"]),
    "Water",
    "var(--color-blue-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(repData, locations, ["Attacks", "Stolen", "Lost"]),
    "Rep",
    "var(--color-lime-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(goodwillData, locations, [
      "Attacks",
      "Stolen",
      "Lost",
    ]),
    "Goodwill",
    "var(--color-pink-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(intelData, locations, ["Attacks", "Stolen", "Lost"]),
    "Intel",
    "var(--color-sky-500)",
  ),
  sankeyToSunburstData(
    applyLocationTargets(manpowerData, locations, [
      "Attacks",
      "Stolen",
      "Lost",
    ]),
    "Manpower",
    "var(--color-orange-500)",
  ),
];

const sunburstData = {
  name: "Resource Production",
  value: sunburstChildren.reduce((s, c) => s + (c.value ?? 0), 0),
  children: sunburstChildren,
};

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Resources</TypographyH1>
      <div className="mt-8">
        <ResourceSunburstChart data={sunburstData} />
      </div>

      <div className="mt-8">
        <TypographyH2>Locations</TypographyH2>
        <LocationsDisplay
          locationDefs={locations}
          datasets={[
            { label: "Materials", data: materialsData },
            { label: "Food", data: foodData },
            { label: "Blood", data: bloodData },
            { label: "Water", data: waterData },
            { label: "Rep", data: repData },
            { label: "Goodwill", data: goodwillData },
            { label: "Intel", data: intelData },
            { label: "Manpower", data: manpowerData },
          ]}
        />
      </div>

      <ResourcesView
        datasets={[
          {
            label: "Materials",
            data: materialsData,
            exemptions: ["Naysayers", "Fear", "Hunger"],
          },
          {
            label: "Food",
            data: foodData,
            exemptions: ["Naysayers", "Fear", "Hunger"],
          },
          {
            label: "Blood",
            data: bloodData,
            exemptions: ["Naysayers", "Fear", "Hunger"],
          },
          {
            label: "Water",
            data: waterData,
            exemptions: ["Naysayers", "Fear", "Hunger"],
          },
          {
            label: "Rep",
            data: repData,
            exemptions: ["Attacks", "Stolen", "Lost"],
          },
          {
            label: "Goodwill",
            data: goodwillData,
            exemptions: ["Attacks", "Stolen", "Lost"],
          },
          {
            label: "Intel",
            data: intelData,
            exemptions: ["Attacks", "Stolen", "Lost"],
          },
          {
            label: "Manpower",
            data: manpowerData,
            exemptions: ["Attacks", "Stolen", "Lost"],
          },
        ]}
        locationDefs={locations}
      />
    </>
  );
}
