import { ArrowDouble } from "@/components/dice/dice-symbols";
import { TypographyP } from "@/components/ui/typography";
export default function VillainousIntellect() {
  return (
    <div>
      <TypographyP>
        When they <b>shift the blame</b>, the Strategist may spend{" "}
        <b>1 goodwill</b> and explain their plans to the scapegoat as it&apos;s
        happening. If they do, they gain{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="6 6 12 12"
          width={30}
          height={30}
          fill="white"
          stroke="white"
          strokeWidth={0.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline align-middle"
        >
          <ArrowDouble />
        </svg>
        , <b>1 rep</b>, and <b>mark 1 xp</b>.
      </TypographyP>
    </div>
  );
}
