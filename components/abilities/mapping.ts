import archetypes from "@/public/archetypes.json";
import skillsets from "@/public/skillsets.json";
import fightingStyles from "@/public/fighting_styles.json";
import aldams from "@/public/aldams.json";
import donums from "@/public/donums.json";

const allSlugs = [];

for (const archetype of archetypes) {
  allSlugs.push(archetype.abilities.mission.map((a) => a.slug));
  allSlugs.push(archetype.abilities.downtime.map((a) => a.slug));
}

for (const skillset of skillsets) {
  allSlugs.push(skillset.abilities.mission.map((a) => a.slug));
  allSlugs.push(skillset.abilities.downtime.map((a) => a.slug));
}

for (const fightingStyle of fightingStyles) {
  allSlugs.push(fightingStyle.abilities.map((a) => a.slug));
}

for (const aldam of aldams) {
  allSlugs.push(aldam.abilities.map((a) => a.slug));
}

for (const donum of donums) {
  allSlugs.push(donum.abilities.map((a) => a.slug));
}

const dynamicComponents = allSlugs
  .flat()
  .reduce((acc: { [key: string]: () => Promise<unknown> }, slug) => {
    acc[slug] = () => import(`@/components/abilities/${slug}`);
    return acc;
  }, {});

export default dynamicComponents;
