import backgrounds from '@/public/backgrounds.json';
let allSlugs = [];
for (let background of backgrounds) {
  allSlugs.push(background.name.toLocaleLowerCase());
}
const dynamicComponents = allSlugs.reduce(
  (acc: { [key: string]: () => Promise<any> }, slug) => {
    acc[slug] = () =>
      import(`@/components/ui/subsistence/consequences/${slug}`);
    return acc;
  },
  {}
);

export default dynamicComponents;
