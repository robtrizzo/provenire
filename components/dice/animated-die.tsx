import { useEffect, useState } from "react";
import { Die } from "@/types/dice";
import { DieFace as DieFaceComponent } from "./dice";

export default function AnimatedDie({ die }: { die: Die }) {
  const [displayFace, setDisplayFace] = useState(die.faces[0]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    let animationTimeoutId: NodeJS.Timeout | null = null;
    let transitionTimeoutId: NodeJS.Timeout | null = null;
    let isUnmounted = false;

    function animateDie() {
      setAnimating(true);
      transitionTimeoutId = setTimeout(() => {
        if (isUnmounted) return;
        const randomIndex = Math.floor(Math.random() * die.faces.length);
        setDisplayFace(die.faces[randomIndex]);
        setAnimating(false);

        // Random delay between 2700ms and 3300ms
        const nextDelay = 4500 + Math.random() * 1000;
        animationTimeoutId = setTimeout(animateDie, nextDelay);
      }, 400); // match your transition duration
    }

    animateDie();

    return () => {
      isUnmounted = true;
      if (animationTimeoutId) clearTimeout(animationTimeoutId);
      if (transitionTimeoutId) clearTimeout(transitionTimeoutId);
    };
  }, [die.faces]);

  return (
    <span
      className={`inline-block transition-all duration-400
        ${animating ? "opacity-0" : "opacity-100"}
      `}
    >
      <DieFaceComponent variant={die.variant} face={displayFace} />
    </span>
  );
}
