import archetypes from '@/public/archetypes.json';
import skillsets from '@/public/skillsets.json';

const allSlugs = [];

for (const archetype of archetypes) {
  allSlugs.push(archetype.abilities.mission.map((a) => a.slug));
  allSlugs.push(archetype.abilities.downtime.map((a) => a.slug));
}

for (const skillset of skillsets) {
  allSlugs.push(skillset.abilities.mission.map((a) => a.slug));
  allSlugs.push(skillset.abilities.downtime.map((a) => a.slug));
}

const dynamicComponents = allSlugs
  .flat()
  .reduce((acc: { [key: string]: () => Promise<unknown> }, slug) => {
    acc[slug] = () => import(`@/components/abilities/${slug}`);
    return acc;
  }, {});

export default dynamicComponents;
