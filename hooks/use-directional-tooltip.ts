import { useRef, useState } from "react";

export function useDirectionalTooltip(defaultSide: "top" | "bottom" = "top") {
  const [side, setSide] = useState<"top" | "bottom">(defaultSide);
  const prevY = useRef<number | null>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (prevY.current !== null) {
      const delta = e.clientY - prevY.current;
      if (delta < 0) setSide("bottom");
      else if (delta > 0) setSide("top");
    }
    prevY.current = e.clientY;
  };

  const onMouseLeave = () => {
    prevY.current = null;
  };

  return { side, onMouseMove, onMouseLeave };
}
