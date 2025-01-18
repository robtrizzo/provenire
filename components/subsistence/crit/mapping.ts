import backgrounds from '@/public/backgrounds.json';
const allSlugs = [];
for (const background of backgrounds) {
  allSlugs.push(background.name.toLocaleLowerCase());
}
const dynamicComponents = allSlugs.reduce(
  (acc: { [key: string]: () => Promise<unknown> }, slug) => {
    acc[slug] = () => import(`@/components/subsistence/crit/${slug}`);
    return acc;
  },
  {}
);

export default dynamicComponents;