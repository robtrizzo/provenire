import archetypes from '@/public/archetypes.json';

let allSlugs = [];

for (let archetype of archetypes) {
  allSlugs.push(archetype.abilities.mission.map((a) => a.slug));
  allSlugs.push(archetype.abilities.downtime.map((a) => a.slug));
}

const dynamicComponents = allSlugs
  .flat()
  .reduce((acc: { [key: string]: () => Promise<any> }, slug) => {
    acc[slug] = () => import(`@/components/ui/abilities/${slug}`);
    return acc;
  }, {});

export default dynamicComponents;
