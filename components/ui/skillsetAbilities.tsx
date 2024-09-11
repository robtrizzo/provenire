import skillsets from '@/public/skillsets.json';
import Abilities from '@/components/ui/abilities/abilities';
export default function SkillsetAbilities({
  skillsetName,
}: {
  skillsetName: string;
}) {
  if (!skillsetName) return null;
  const skillset = skillsets.find((s) => s.name === skillsetName);
  return (
    <Abilities
      className="ml-4"
      abilities={[
        ...(skillset?.abilities?.mission || []),
        ...(skillset?.abilities?.downtime || []),
      ]}
      variant="wiki"
    />
  );
}
