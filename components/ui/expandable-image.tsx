"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ExpandableImage(
  props: ImageProps & { fullWidth?: number; fullHeight?: number }
) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const width = isExpanded ? props.fullWidth || 800 : props.width;
  const height = isExpanded ? props.fullHeight || 800 : props.height;

  return (
    <div
      className={`relative cursor-pointer ${
        isExpanded
          ? "w-full h-full fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          : "w-56 h-56"
      }`}
    >
      <Image
        {...props}
        width={width}
        height={height}
        alt={props.alt || "Expandable image"}
        className={`rounded-md object-cover transition-all duration-300 ${
          isExpanded ? "max-h-[90vh] max-w-[90vw]" : "w-56 h-56"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
      />
    </div>
  );
}
