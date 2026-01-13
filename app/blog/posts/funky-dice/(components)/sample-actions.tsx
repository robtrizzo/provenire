"use client";
import { ActionScore } from "@/components/action-score";
import { ActionV2 } from "@/types/game";

const leftActions: ActionV2[] = [
  {
    name: "Charge",
    description: "Rush into danger without a plan",
    type: "ego",
    score: [1, 1],
    position: "left",
  },
  {
    name: "Consort",
    description: "Meet with others to gain information or favors.",
    type: "ego",
    score: [1, 0],
    position: "left",
  },
];
const rightActions: ActionV2[] = [
  {
    name: "Flaunt",
    description: "Broadcast your skills and make a spectacle of using them.",
    type: "ego",
    score: [2, 0],
    position: "right",
  },
  {
    name: "Study",
    description:
      "Research a topic or item. Gain insight into its function or history.",
    type: "ego",
    score: [2, 1],
    position: "right",
  },
];

export default function SampleActions() {
  return (
    <div className="flex gap-4">
      <div className="flex-1 flex flex-col gap-3">
        {leftActions.map((action) => (
          <div key={action.name} className="flex gap-2">
            <SimpleHeaderContent action={action} />
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {rightActions.map((action) => (
          <div key={action.name} className="flex gap-2">
            <SimpleHeaderContent action={action} key={action.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleHeaderContent({ action }: { action: ActionV2 }) {
  return (
    <>
      <div className="flex items-center col-span-6">
        <span className="text-lg">{action.name}</span>
      </div>
      <ActionScore
        score={action.score}
        onChange={() => {}}
        className="col-span-1"
      />
    </>
  );
}
