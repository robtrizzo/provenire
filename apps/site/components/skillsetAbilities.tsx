import skillsets from '@/public/skillsets.json';
import Abilities from '@/components/abilities/abilities';
export default function SkillsetAbilities({
  skillsetName,
}: {
  skillsetName: string;
}) {
  if (!skillsetName) return null;
  const skillset = skillsets.find((s) => s.name === skillsetName);
  return (
    <Abilities
      className="px-4 box-border"
      abilities={[
        ...(skillset?.abilities?.mission || []),
        ...(skillset?.abilities?.downtime || []),
      ]}
      variant="wiki"
    />
  );
}
