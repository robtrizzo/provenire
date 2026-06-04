import { useEffect, useRef } from "react";
import DieTopDetails from "./top-details";
import DieAccordionDetails from "./accordion-details";
import { Roll, RollArc3 } from "@/types/roll";
import Arc3DieTopDetails from "./arc3-top-details";

function isRollArc3(roll: Roll | RollArc3): roll is RollArc3 {
  return "dice" in roll && "rolledFaces" in roll;
}

export default function DiceHistory({
  rolls,
  rollsUntilNearEnd = 5,
  onNearEnd,
}: {
  rolls: (Roll | RollArc3)[];
  rollsUntilNearEnd?: number;
  onNearEnd?: () => void;
}) {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && onNearEnd) {
          onNearEnd();
        }
      },
      { threshold: 0.1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [onNearEnd]);

  const refIsObserverTarget = (index: number) => {
    if (rolls.length < rollsUntilNearEnd) return false;
    return index === rolls.length - rollsUntilNearEnd;
  };

  return (
    <div className="space-y-4 mt-4">
      {rolls.map((roll, index) => (
        <div
          key={(roll?.timestamp ?? "") + index}
          className="border rounded-lg p-2"
          ref={refIsObserverTarget(index) ? observerTarget : null}
        >
          {isRollArc3(roll) ? (
            <>
              <Arc3DieTopDetails roll={roll} />
            </>
          ) : (
            <>
              <DieTopDetails roll={roll} />
              <DieAccordionDetails roll={roll} />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
