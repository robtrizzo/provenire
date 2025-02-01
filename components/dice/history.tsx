import { useEffect, useRef } from "react";
import { DieDetails } from "./details";
import DieAccordian from "./accordian";
import { Roll } from "@/types/roll";

export default function DiceHistory({
  rolls,
  rollsUntilNearEnd = 5,
  onNearEnd,
}: {
  rolls: Roll[];
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
      { threshold: 0.1 }
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
      {rolls?.map((roll, index) => (
        <div
          key={index}
          className="border rounded-lg p-2"
          ref={refIsObserverTarget(index) ? observerTarget : null}
        >
          <DieDetails roll={roll} />
          <DieAccordian roll={roll} />
        </div>
      ))}
    </div>
  );
}
