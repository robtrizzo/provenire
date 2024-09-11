import skillsets from '@/public/skillsets.json';

let allSlugs = [];

for (let skillset of skillsets) {
  allSlugs.push(skillset.abilities.mission.map((a) => a.slug));
  allSlugs.push(skillset.abilities.downtime.map((a) => a.slug));
}

const dynamicComponents = allSlugs
  .flat()
  .reduce((acc: { [key: string]: () => Promise<any> }, slug) => {
    acc[slug] = () => import(`@/components/ui/skillsets/abilities/${slug}`);
    return acc;
  }, {});

export default dynamicComponents;
