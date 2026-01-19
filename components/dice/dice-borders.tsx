import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const d6Variants = cva("", {
  variants: {
    variant: {
      default: "text-[oklch(0.3485_0_0)]",
      bond: "text-cyan-700/30",
      ability: "text-yellow-500/30",
      skill: "text-violet-700/30",
      emotion: "text-pink-700/30",
      push: "text-green-700/30",
    },
    crit: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    crit: false,
  },
});

const goldToCrimson = (
  <linearGradient id="crit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="oklch(0.55 0.12 85)" />
    <stop offset="100%" stopColor="oklch(0.35 0.15 25)" />
  </linearGradient>
);

export function D6({
  size = 24,
  strokeWidth = 0.8,
  className,
  variant,
  crit,
  children,
  ...props
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof d6Variants>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4 4 16 16"
      width={size}
      height={size}
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(d6Variants({ variant }), className)}
      {...props}
    >
      {crit && <defs>{goldToCrimson}</defs>}
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke={crit ? "url(#crit-gradient)" : "currentColor"}
      />
      {children}
    </svg>
  );
}

export const CritBorderGradient = () => (
  <>
    <defs>{goldToCrimson}</defs>
    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="1.5"
      fill="none"
      stroke="url(#crit-gradient)"
      strokeWidth={0.5}
    />
  </>
);

export const D8 = ({
  size = 24,
  strokeWidth = 0.8,
  className,
  children,
  ...props
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: ReactNode;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2 L21 12 L12 22 L3 12 Z" />
    {children}
  </svg>
);
