import { Separator } from "@/components/ui/separator";
import { TypographyH3, TypographyH4 } from "@/components/ui/typography";
import { ReactNode } from "react";

export default async function Page() {
  return (
    <div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <Theta />
          </D6>
          <D6 size={128}>
            <ThetaDouble />
          </D6>
          <D6 size={128}>
            <ThetaTriple />
          </D6>
        </div>
        {/* EXPERIMENTS */}
        {/* <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaDots />
          </D6>
          <D6 size={128}>
            <ThetaDotsDouble />
          </D6>
          <D6 size={128}>
            <ThetaDotsTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaStar />
          </D6>
          <D6 size={128}>
            <ThetaStarDouble />
          </D6>
          <D6 size={128}>
            <ThetaStarTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaRays />
          </D6>
          <D6 size={128}>
            <ThetaRaysDouble />
          </D6>
          <D6 size={128}>
            <ThetaRaysTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaArrowStack />
          </D6>
          <D6 size={128}>
            <ThetaArrowStackDouble />
          </D6>
          <D6 size={128}>
            <ThetaArrowStackTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaTriMarkers />
          </D6>
          <D6 size={128}>
            <ThetaTriMarkersDouble />
          </D6>
          <D6 size={128}>
            <ThetaTriMarkersTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaDiamonds />
          </D6>
          <D6 size={128}>
            <ThetaDiamondsDouble />
          </D6>
          <D6 size={128}>
            <ThetaDiamondsTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaTicks />
          </D6>
          <D6 size={128}>
            <ThetaTicksDouble />
          </D6>
          <D6 size={128}>
            <ThetaTicksTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaTriPoints />
          </D6>
          <D6 size={128}>
            <ThetaTriPointsDouble />
          </D6>
          <D6 size={128}>
            <ThetaTriPointsTriple />
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}></D6>
          <D6 size={128}>
            <ThetaCrescents />
          </D6>
          <D6 size={128}>
            <ThetaCrescentsDouble />
          </D6>
          <D6 size={128}>
            <ThetaCrescentsTriple />
          </D6>
        </div> */}
        <div className="flex flex-col gap-2">
          <D6 size={128}>
            <Threat />
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <Theta />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ThetaDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ThetaTriple />
            </>
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}>
            <ArrowDouble />
          </D6>
          <D6 size={128}>
            <>
              <ArrowDouble />
              <Theta />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ArrowDoubleSpread />
              <ThetaDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ArrowDoubleSpread />
              <ThetaTriple />
            </>
          </D6>
        </div>
        <div className="flex flex-col gap-2">
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ArrowDouble />
            </>
          </D6>
          <D6 size={128}>
            <>
              <ThreatSpread />
              <ArrowDouble />
              <Theta />
            </>
          </D6>
          <D6 size={128}></D6>
          <D6 size={128}></D6>
        </div>
        {/* <div className="flex flex-col gap-2">
          <D6 size={128}>
            <Sun />
          </D6>
          <D6 size={128}>
            <Flame />
          </D6>
          <D6 size={128}>
            <Fang />
          </D6>
        </div> */}
      </div>
      <TypographyH4>Level 0 Die</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
      </div>
      <TypographyH4>Red Die</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <Theta />
        </D6>
      </div>
      <TypographyH4>Blue Die</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ThetaDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ThetaDouble />
          </>
        </D6>
        <D6 size={84}>
          <ThetaDouble />
        </D6>
      </div>
      <TypographyH4>Emotion Die</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <ThetaDouble />
        </D6>
      </div>

      <Separator />

      <TypographyH3>Ability Dice</TypographyH3>
      <TypographyH4>Level 0</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
      </div>
      <TypographyH4>Level 1</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <>
            <Theta />
          </>
        </D6>
      </div>
      <TypographyH4>Level 2</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThetaDouble />
          </>
        </D6>
      </div>
      <TypographyH4>Level 3</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ThetaDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ThetaDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThetaDouble />
          </>
        </D6>
      </div>

      <Separator />

      <TypographyH3>Skill Die</TypographyH3>
      <TypographyH4>Level 1</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ArrowDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
        <D6 size={84}>
          <ThetaDouble />
        </D6>
      </div>

      <TypographyH4>Level 2</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ArrowDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ArrowDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ThetaDouble />
          </>
        </D6>
        <D6 size={84}>
          <ThetaDouble />
        </D6>
      </div>

      <TypographyH4>Level 3</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ArrowDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ArrowDouble />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ArrowDoubleSpread />
            <ThetaDouble />
          </>
        </D6>
        <D6 size={84}>
          <ThetaTriple />
        </D6>
      </div>

      <TypographyH4>Level 4</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <ArrowDouble />
          </>
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <>
            <ArrowDoubleSpread />
            <ThetaTriple />
          </>
        </D6>
        <D6 size={84}>
          <>
            <ArrowDoubleSpread />
            <ThetaTriple />
          </>
        </D6>
      </div>

      <Separator />
      <TypographyH4>Bond Die (Level 0)</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <>
            <ThreatSpread />
            <Theta />
          </>
        </D6>
      </div>
      <TypographyH4>Bond Die (Level 1)</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}></D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <Theta />
        </D6>
      </div>
      <TypographyH4>Bond Die (Level 2)</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <>
            <ArrowDoubleSpread />
            <Theta />
          </>
        </D6>
      </div>
      <TypographyH4>Bond Die (Level 3)</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}></D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <>
            <ArrowDoubleSpread />
            <ThetaDouble />
          </>
        </D6>
      </div>
      <TypographyH4>Bond Die (Level 4)</TypographyH4>
      <div className="flex gap-1">
        <D6 size={84}>
          <Threat />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <ArrowDouble />
        </D6>
        <D6 size={84}>
          <>
            <ArrowDoubleSpread />
            <ThetaTriple />
          </>
        </D6>
      </div>
    </div>
  );
}

const D8 = ({
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

const D6 = ({
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
    viewBox="4 4 16 16"
    width={size}
    height={size}
    fill="none"
    stroke="oklch(0.3485 0 0)"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" />
    {children}
  </svg>
);

const Arrow = () => {
  return (
    <path
      d="M 8 13 L 12 9 L 16 13 L 14.5 13 L 12 10.5 L 9.5 13 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
    />
  );
};
const ArrowDouble = () => {
  return (
    <>
      <path
        d="M 8 12.5 L 12 8.5 L 16 12.5 L 14.5 12.5 L 12 10 L 9.5 12.5 Z"
        fill="oklch(0.8064 0.1559 98.47)"
        stroke="oklch(0.6526 0.1199 94.06)"
        strokeWidth={0.2}
      />
      <path
        d="M 9 14.5 L 12 11.5 L 15 14.5 L 13.5 14.5 L 12 13 L 10.5 14.5 Z"
        fill="oklch(0.8064 0.1559 98.47)"
        stroke="oklch(0.6526 0.1199 94.06)"
        strokeWidth={0.2}
      />
    </>
  );
};
const ArrowDoubleSpread = () => {
  return (
    <>
      <path
        d="M 8 9 L 12 5 L 16 9 L 14.5 9 L 12 6.5 L 9.5 9 Z"
        fill="oklch(0.8064 0.1559 98.47)"
        stroke="oklch(0.6526 0.1199 94.06)"
        strokeWidth={0.2}
      />
      {/* <path
        d="M 9 8 L 12 5 L 15 8 L 13.5 8 L 12 6.5 L 10.5 8 Z"
        fill="oklch(0.8064 0.1559 98.47)"
        stroke="oklch(0.6526 0.1199 94.06)"
        strokeWidth={0.2}
      /> */}
      <path
        d="M 9 19 L 12 16 L 15 19 L 13.5 19 L 12 17.5 L 10.5 19 Z"
        fill="oklch(0.8064 0.1559 98.47)"
        stroke="oklch(0.6526 0.1199 94.06)"
        strokeWidth={0.2}
      />
    </>
  );
};

// const Theta = () => {
//   return (
//     <g fill="currentColor" stroke="currentColor" strokeWidth={0.5}>
//       {/* Outer circle - smaller */}
//       <circle
//         cx="12"
//         cy="12"
//         r="3.5"
//         fill="none"
//         stroke="oklch(62.3% 0.214 259.815)"
//         strokeWidth={0.7}
//       />
//       {/* Horizontal line through circle */}
//       <line x1="6.5" y1="12" x2="16.5" y2="12" strokeWidth={0.5} />
//       {/* Speartip pointing right */}
//       <path
//         d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
//         fill="currentColor"
//         strokeWidth={0.1}
//       />
//     </g>
//   );
// };
const Theta = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      {/* Outer circle with mask applied */}
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask)"
      />
      {/* Horizontal line through circle */}
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      {/* Speartip pointing right */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
    </g>
  );
};
const ThetaDouble = () => {
  return (
    <g>
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="3.5"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.7}
      />
      {/* Inner ellipse - creates the filled ring effect */}
      <ellipse
        cx="12"
        cy="12"
        rx="2.4"
        ry="3.4"
        fill="oklch(42.4% 0.199 265.638)"
        stroke="oklch(42.4% 0.199 265.638)"
      />
      <ellipse cx="12" cy="12" rx="1.9" ry="2.9" fill="#000000" stroke="none" />
      {/* Horizontal line through circle */}
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      {/* Speartip pointing right */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
    </g>
  );
};

// const ThetaDouble = () => {
//   return (
//     <g fill="currentColor" stroke="currentColor" strokeWidth={0.5}>
//       {/* Outer circle */}
//       <circle
//         cx="12"
//         cy="12"
//         r="3.5"
//         fill="none"
//         stroke="oklch(62.3% 0.214 259.815)"
//         strokeWidth={0.7}
//       />
//       {/* Inner circle - second concentric ring */}
//       <circle
//         cx="12"
//         cy="12"
//         r="2.5"
//         fill="none"
//         stroke="oklch(42.4% 0.199 265.638)"
//         strokeWidth={0.7}
//       />
//       {/* Horizontal line through circles */}
//       <line
//         x1="6.5"
//         y1="12"
//         x2="16.5"
//         y2="12"
//         strokeWidth={0.5}
//         stroke="oklch(62.3% 0.214 259.815)"
//       />
//       {/* Speartip pointing right */}
//       <path
//         d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
//         fill="oklch(62.3% 0.214 259.815)"
//         stroke="oklch(62.3% 0.214 259.815)"
//         strokeWidth={0.1}
//       />
//     </g>
//   );
// };

// const ThetaTriple = () => {
//   return (
//     <g fill="none" stroke="currentColor" strokeWidth={0.5}>
//       {/* Outer circle */}
//       <circle
//         cx="12"
//         cy="12"
//         r="3.5"
//         fill="none"
//         stroke="oklch(62.3% 0.214 259.815)"
//         strokeWidth={0.7}
//       />
//       {/* Middle circle - second concentric ring */}
//       <circle
//         cx="12"
//         cy="12"
//         r="2.5"
//         fill="none"
//         stroke="oklch(42.4% 0.199 265.638)"
//         strokeWidth={0.7}
//       />
//       {/* Inner circle - third concentric ring */}
//       <circle
//         cx="12"
//         cy="12"
//         r="1.5"
//         fill="none"
//         stroke="oklch(37.9% 0.146 265.522)"
//         strokeWidth={0.7}
//       />
//       {/* Horizontal line through circles */}
//       <line x1="6.5" y1="12" x2="16.5" y2="12" strokeWidth={0.5} />
//       {/* Speartip pointing right */}
//       <path
//         d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
//         fill="currentColor"
//         strokeWidth={0.1}
//       />
//     </g>
//   );
// };

const ThetaTriple = () => {
  return (
    <g>
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="3.5"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.7}
      />
      {/* Inner ellipse - creates the filled ring effect */}
      <ellipse
        cx="12"
        cy="12"
        rx="2.4"
        ry="3.4"
        fill="#000000"
        stroke="#000000"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="2.4"
        ry="3.4"
        fill="oklch(25.8% 0.092 26.042)"
        stroke="oklch(25.8% 0.092 26.042)"
        opacity={0.6}
      />
      <ellipse
        cx="12"
        cy="12"
        rx="1"
        ry="2.6"
        fill="oklch(42.1% 0.095 57.708)"
        stroke="oklch(42.1% 0.095 57.708)"
        strokeWidth={1.2}
      />
      <ellipse cx="12" cy="12" rx="1.1" ry="2.4" fill="#000000" stroke="none" />
      {/* Horizontal line through circle */}
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      {/* Speartip pointing right */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
    </g>
  );
};

// OPTION 1: Small dots/pips in corners
const ThetaDots = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-dots">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-dots)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single dot top-right */}
      <circle cx="16" cy="8" r="0.6" fill="oklch(62.3% 0.214 259.815)" />
    </g>
  );
};

const ThetaDotsDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-dots2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-dots2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two dots diagonal */}
      <circle cx="16" cy="8" r="0.6" fill="oklch(62.3% 0.214 259.815)" />
      <circle cx="8" cy="16" r="0.6" fill="oklch(62.3% 0.214 259.815)" />
    </g>
  );
};

const ThetaDotsTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-dots3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-dots3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three dots in corners */}
      <circle cx="16" cy="8" r="0.6" fill="oklch(62.3% 0.214 259.815)" />
      <circle cx="8" cy="16" r="0.6" fill="oklch(62.3% 0.214 259.815)" />
      <circle cx="16" cy="16" r="0.6" fill="oklch(62.3% 0.214 259.815)" />
    </g>
  );
};

// OPTION 2: Stars above the theta
const ThetaStar = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-star">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-star)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single small star */}
      <path
        d="M 12 6.5 L 12.3 7.2 L 13 7.2 L 12.4 7.6 L 12.6 8.3 L 12 7.9 L 11.4 8.3 L 11.6 7.6 L 11 7.2 L 11.7 7.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="none"
      />
    </g>
  );
};

const ThetaStarDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-star2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-star2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two stars */}
      <path
        d="M 10 6.5 L 10.3 7.2 L 11 7.2 L 10.4 7.6 L 10.6 8.3 L 10 7.9 L 9.4 8.3 L 9.6 7.6 L 9 7.2 L 9.7 7.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="none"
      />
      <path
        d="M 14 6.5 L 14.3 7.2 L 15 7.2 L 14.4 7.6 L 14.6 8.3 L 14 7.9 L 13.4 8.3 L 13.6 7.6 L 13 7.2 L 13.7 7.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="none"
      />
    </g>
  );
};

const ThetaStarTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-star3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-star3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three stars */}
      <path
        d="M 8.5 6.5 L 8.8 7.2 L 9.5 7.2 L 8.9 7.6 L 9.1 8.3 L 8.5 7.9 L 7.9 8.3 L 8.1 7.6 L 7.5 7.2 L 8.2 7.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="none"
      />
      <path
        d="M 12 6.5 L 12.3 7.2 L 13 7.2 L 12.4 7.6 L 12.6 8.3 L 12 7.9 L 11.4 8.3 L 11.6 7.6 L 11 7.2 L 11.7 7.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="none"
      />
      <path
        d="M 15.5 6.5 L 15.8 7.2 L 16.5 7.2 L 15.9 7.6 L 16.1 8.3 L 15.5 7.9 L 14.9 8.3 L 15.1 7.6 L 14.5 7.2 L 15.2 7.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="none"
      />
    </g>
  );
};

// OPTION 3: Radiating rays/glow (intensity increases)
const ThetaRays = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-rays">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      {/* Subtle glow */}
      <circle
        cx="12"
        cy="12"
        r="4.5"
        fill="oklch(62.3% 0.214 259.815)"
        opacity="0.2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-rays)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
    </g>
  );
};

const ThetaRaysDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-rays2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      {/* Stronger glow with rays */}
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="oklch(62.3% 0.214 259.815)"
        opacity="0.15"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        fill="oklch(62.3% 0.214 259.815)"
        opacity="0.25"
      />
      {/* Four short rays */}
      <line
        x1="12"
        y1="7"
        x2="12"
        y2="5.5"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <line
        x1="12"
        y1="17"
        x2="12"
        y2="18.5"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <line
        x1="7"
        y1="12"
        x2="5.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <line
        x1="17"
        y1="12"
        x2="18.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-rays2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
    </g>
  );
};

const ThetaRaysTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-rays3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      {/* Strongest glow with 8 rays */}
      <circle
        cx="12"
        cy="12"
        r="5.5"
        fill="oklch(62.3% 0.214 259.815)"
        opacity="0.1"
      />
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="oklch(62.3% 0.214 259.815)"
        opacity="0.2"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        fill="oklch(62.3% 0.214 259.815)"
        opacity="0.3"
      />
      {/* Eight rays */}
      <line
        x1="12"
        y1="7"
        x2="12"
        y2="5"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
        opacity="0.7"
      />
      <line
        x1="12"
        y1="17"
        x2="12"
        y2="19"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
        opacity="0.7"
      />
      <line
        x1="7"
        y1="12"
        x2="5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
        opacity="0.7"
      />
      <line
        x1="17"
        y1="12"
        x2="19"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
        opacity="0.7"
      />
      <line
        x1="8.5"
        y1="8.5"
        x2="6.8"
        y2="6.8"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <line
        x1="15.5"
        y1="15.5"
        x2="17.2"
        y2="17.2"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <line
        x1="8.5"
        y1="15.5"
        x2="6.8"
        y2="17.2"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <line
        x1="15.5"
        y1="8.5"
        x2="17.2"
        y2="6.8"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.4}
        opacity="0.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-rays3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
    </g>
  );
};

// OPTION 4: Multiple arrows stacked on the spear
const ThetaArrowStack = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-arrow">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-arrow)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      {/* Single arrowhead */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.1}
      />
    </g>
  );
};

const ThetaArrowStackDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-arrow2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-arrow2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      {/* Double arrowheads */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.1}
      />
      <path
        d="M 16 12 L 14.7 11.2 L 15.1 12 L 14.7 12.8 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.1}
      />
    </g>
  );
};

const ThetaArrowStackTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-arrow3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-arrow3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      {/* Triple arrowheads */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.1}
      />
      <path
        d="M 16 12 L 14.7 11.2 L 15.1 12 L 14.7 12.8 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.1}
      />
      <path
        d="M 14.2 12 L 13 11.3 L 13.3 12 L 13 12.7 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.1}
      />
    </g>
  );
};

// OPTION 1: Small triangular markers
const ThetaTriMarkers = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-trimark">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-trimark)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single marker at 60° (top-right) */}
      <circle
        cx="14.46"
        cy="8.54"
        r="0.7"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
    </g>
  );
};

const ThetaTriMarkersDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-trimark2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-trimark2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two markers at 60° and 180° */}
      <circle
        cx="14.46"
        cy="8.54"
        r="0.7"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
      <circle
        cx="12"
        cy="16.5"
        r="0.7"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
    </g>
  );
};

const ThetaTriMarkersTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-trimark3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-trimark3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three markers at 60°, 180°, 300° */}
      <circle
        cx="14.46"
        cy="8.54"
        r="0.7"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
      <circle
        cx="12"
        cy="16.5"
        r="0.7"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
      <circle
        cx="9.54"
        cy="8.54"
        r="0.7"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
    </g>
  );
};

// OPTION 2: Small diamond shapes
const ThetaDiamonds = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-diamond">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-diamond)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single diamond at 60° */}
      <path
        d="M 14.46 7.84 L 15.16 8.54 L 14.46 9.24 L 13.76 8.54 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
    </g>
  );
};

const ThetaDiamondsDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-diamond2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-diamond2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two diamonds */}
      <path
        d="M 14.46 7.84 L 15.16 8.54 L 14.46 9.24 L 13.76 8.54 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
      <path
        d="M 12 15.8 L 12.7 16.5 L 12 17.2 L 11.3 16.5 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
    </g>
  );
};

const ThetaDiamondsTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-diamond3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-diamond3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three diamonds */}
      <path
        d="M 14.46 7.84 L 15.16 8.54 L 14.46 9.24 L 13.76 8.54 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
      <path
        d="M 12 15.8 L 12.7 16.5 L 12 17.2 L 11.3 16.5 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
      <path
        d="M 9.54 7.84 L 10.24 8.54 L 9.54 9.24 L 8.84 8.54 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.2}
      />
    </g>
  );
};

// OPTION 3: Radiating tick marks
const ThetaTicks = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-tick">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-tick)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single tick at 60° */}
      <line
        x1="14.46"
        y1="8.54"
        x2="15.6"
        y2="7.4"
        stroke="oklch(80% 0.15 60)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
    </g>
  );
};

const ThetaTicksDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-tick2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-tick2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two ticks */}
      <line
        x1="14.46"
        y1="8.54"
        x2="15.6"
        y2="7.4"
        stroke="oklch(80% 0.15 60)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="16.5"
        x2="12"
        y2="18"
        stroke="oklch(80% 0.15 60)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
    </g>
  );
};

const ThetaTicksTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-tick3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-tick3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three ticks */}
      <line
        x1="14.46"
        y1="8.54"
        x2="15.6"
        y2="7.4"
        stroke="oklch(80% 0.15 60)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="16.5"
        x2="12"
        y2="18"
        stroke="oklch(80% 0.15 60)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
      <line
        x1="9.54"
        y1="8.54"
        x2="8.4"
        y2="7.4"
        stroke="oklch(80% 0.15 60)"
        strokeWidth={0.6}
        strokeLinecap="round"
      />
    </g>
  );
};

// OPTION 4: Small triangular points (like arrowheads pointing outward)
const ThetaTriPoints = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-tripoint">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-tripoint)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single triangle pointing at 60° */}
      <path
        d="M 15.5 7.5 L 14.9 8.8 L 14 8.3 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.15}
      />
    </g>
  );
};

const ThetaTriPointsDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-tripoint2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-tripoint2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two triangles */}
      <path
        d="M 15.5 7.5 L 14.9 8.8 L 14 8.3 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.15}
      />
      <path
        d="M 12 17.5 L 11.5 16.2 L 12.5 16.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.15}
      />
    </g>
  );
};

const ThetaTriPointsTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-tripoint3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-tripoint3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three triangles */}
      <path
        d="M 15.5 7.5 L 14.9 8.8 L 14 8.3 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.15}
      />
      <path
        d="M 12 17.5 L 11.5 16.2 L 12.5 16.2 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.15}
      />
      <path
        d="M 8.5 7.5 L 9.1 8.8 L 10 8.3 Z"
        fill="oklch(80% 0.15 60)"
        stroke="oklch(65% 0.12 55)"
        strokeWidth={0.15}
      />
    </g>
  );
};

// OPTION 5: Small crescents
const ThetaCrescents = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-crescent">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
        <mask id="crescent-cut-1">
          <circle cx="14.46" cy="8.54" r="0.9" fill="white" />
          <circle cx="14.8" cy="8.54" r="0.7" fill="black" />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-crescent)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Single crescent */}
      <circle
        cx="14.46"
        cy="8.54"
        r="0.9"
        fill="oklch(80% 0.15 60)"
        mask="url(#crescent-cut-1)"
      />
    </g>
  );
};

const ThetaCrescentsDouble = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-crescent2">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
        <mask id="crescent-cut-2a">
          <circle cx="14.46" cy="8.54" r="0.9" fill="white" />
          <circle cx="14.8" cy="8.54" r="0.7" fill="black" />
        </mask>
        <mask id="crescent-cut-2b">
          <circle cx="12" cy="16.5" r="0.9" fill="white" />
          <circle cx="12" cy="16.8" r="0.7" fill="black" />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-crescent2)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Two crescents */}
      <circle
        cx="14.46"
        cy="8.54"
        r="0.9"
        fill="oklch(80% 0.15 60)"
        mask="url(#crescent-cut-2a)"
      />
      <circle
        cx="12"
        cy="16.5"
        r="0.9"
        fill="oklch(80% 0.15 60)"
        mask="url(#crescent-cut-2b)"
      />
    </g>
  );
};

const ThetaCrescentsTriple = () => {
  return (
    <g>
      <defs>
        <mask id="theta-mask-crescent3">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <ellipse
            cx="12"
            cy="12"
            rx="2.3"
            ry="3.4"
            fill="black"
            stroke="black"
          />
        </mask>
        <mask id="crescent-cut-3a">
          <circle cx="14.46" cy="8.54" r="0.9" fill="white" />
          <circle cx="14.8" cy="8.54" r="0.7" fill="black" />
        </mask>
        <mask id="crescent-cut-3b">
          <circle cx="12" cy="16.5" r="0.9" fill="white" />
          <circle cx="12" cy="16.8" r="0.7" fill="black" />
        </mask>
        <mask id="crescent-cut-3c">
          <circle cx="9.54" cy="8.54" r="0.9" fill="white" />
          <circle cx="9.2" cy="8.54" r="0.7" fill="black" />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(42.4% 0.199 265.638)"
        strokeWidth={0.3}
        mask="url(#theta-mask-crescent3)"
      />
      <line
        x1="6.5"
        y1="12"
        x2="16.5"
        y2="12"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.5}
      />
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="oklch(62.3% 0.214 259.815)"
        stroke="oklch(62.3% 0.214 259.815)"
        strokeWidth={0.1}
      />
      {/* Three crescents */}
      <circle
        cx="14.46"
        cy="8.54"
        r="0.9"
        fill="oklch(80% 0.15 60)"
        mask="url(#crescent-cut-3a)"
      />
      <circle
        cx="12"
        cy="16.5"
        r="0.9"
        fill="oklch(80% 0.15 60)"
        mask="url(#crescent-cut-3b)"
      />
      <circle
        cx="9.54"
        cy="8.54"
        r="0.9"
        fill="oklch(80% 0.15 60)"
        mask="url(#crescent-cut-3c)"
      />
    </g>
  );
};

const Threat = () => {
  return (
    <g>
      <path
        d="M 9 9.5 L 12 11.5 L 15 9.5 L 13.5 9.5 L 12 10.5 L 10.5 9.5 Z"
        fill="oklch(0.4169 0.1543 29.233880279627922)"
        stroke="oklch(0.3042 0.1114 29.233880279627922)"
        strokeWidth={0.2}
      />
      <path
        d="M 15.5 10.5 L 12.5 12.5 L 12.5 16 L 13.4 15.5 L 13.5 13 L 15.5 11.5 Z"
        fill="oklch(0.4169 0.1543 29.233880279627922)"
        stroke="oklch(0.3042 0.1114 29.233880279627922)"
        strokeWidth={0.2}
      />
      <path
        d="M 11.5 16 L 11.5 12.5 L 8.5 10.5 L 8.5 11.5 L 10.5 13 L 10.75 15.5 Z"
        fill="oklch(0.4169 0.1543 29.233880279627922)"
        stroke="oklch(0.3042 0.1114 29.233880279627922)"
        strokeWidth={0.2}
      />
    </g>
  );
};

const ThreatSpread = () => {
  return (
    <g>
      {/* Top triangle - shifted up a tad */}
      <path
        d="M 9 5.5 L 12 7.5 L 15 5.5 L 13.5 5.5 L 12 6.5 L 10.5 5.5 Z"
        fill="oklch(0.4169 0.1543 29.233880279627922)"
        stroke="oklch(0.3042 0.1114 29.233880279627922)"
        strokeWidth={0.2}
      />
      {/* Right triangle - shifted up a tad */}
      <path
        d="M 18.5 13.5 L 15.5 15.5 L 15.5 19 L 16.4 18.5 L 16.5 16 L 18.5 14.5 Z"
        fill="oklch(0.4169 0.1543 29.233880279627922)"
        stroke="oklch(0.3042 0.1114 29.233880279627922)"
        strokeWidth={0.2}
      />
      {/* Left triangle - shifted up a tad */}
      <path
        d="M 8.5 19 L 8.5 15.5 L 5.5 13.5 L 5.5 14.5 L 7.5 16 L 7.75 18.5 Z"
        fill="oklch(0.4169 0.1543 29.233880279627922)"
        stroke="oklch(0.3042 0.1114 29.233880279627922)"
        strokeWidth={0.2}
      />
    </g>
  );
};

const Fang = () => {
  return (
    <g transform="scale(0.028) translate(170, 170)">
      <path
        fill="currentColor"
        d="M169.57 106.12c-1.882-14.48-28.184-30.424-41.092-30.424-2.54 0-4.56.612-5.773 1.974-21.81 24.385 14.225 81.262 14.225 81.262s35.746-28.785 32.64-52.812zm128.832 60.524s34.315-54.186 13.544-77.36c-1.155-1.292-3.083-1.88-5.496-1.88-12.308 0-37.352 15.183-39.142 28.98-2.967 22.78 31.094 50.26 31.094 50.26zm-53.724-50.352c-1.79-13.798-26.845-28.98-39.14-28.98-2.414 0-4.343.588-5.497 1.88-20.782 23.22 13.544 77.36 13.544 77.36s34.06-27.387 31.094-50.26zM58.128 58.896a16.546 16.546 0 0 0-1.664.08c-87.75 8.937 11.373 286.056 40.55 304.484 0 0-16.984-151.636 2.795-244.236 7.238-34.107-24.006-60.328-41.683-60.328zm397.394.08a16.465 16.465 0 0 0-1.663-.08c-17.678 0-48.968 26.198-41.682 60.328 19.778 92.6 2.794 244.236 2.794 244.236 29.223-18.416 128.312-295.535 40.55-304.483zm-72.013 16.72c-12.92 0-39.258 15.945-41.094 30.424-3.106 23.97 32.652 52.823 32.652 52.823s36.024-56.888 14.225-81.26c-1.224-1.375-3.244-1.987-5.784-1.987zm-148.3 348.98c-2.032-11.37-25.598-35.353-25.598-35.353s-20.54 23.97-20.32 33.727c0 2.147-1.155 23.092 2.03 26 2.876 2.645 12.84 4.043 22.62 4.043 9.468 0 18.75-1.305 21.268-4.042 2.31-2.47.335-22.733 0-24.373zm-60.04-24.35c-12.065-20.69-19.155-51.01-23.092-73.733-3.094-17.966-4.19-31.174-4.19-31.174-15.127 11.81-44.292 137.675 2.54 137.675a30.02 30.02 0 0 0 4.952-.428c4.62-.762 10.46-4.295 15.01-9.236 5.935-6.43 9.456-15.17 4.78-23.103zm188.85-104.93s-1.006 12.03-3.777 28.738c-3.81 22.965-10.98 54.74-23.485 76.204-3.764 6.466-2.136 13.417 1.744 19.236 4.618 6.86 12.308 12.135 18.035 13.082a30.124 30.124 0 0 0 4.953.427c46.912-.046 17.677-125.91 2.563-137.734zm-41.406 127.7c.22-9.757-20.32-33.726-20.32-33.726s-23.532 23.935-25.518 35.307c-.254 1.444-2.563 21.592 0 24.386 2.564 2.794 11.812 4.04 21.268 4.04 9.78 0 19.744-1.396 22.62-4.04 4.387-4.088 1.962-25.286 1.985-26.002zm-143.726 5.496l.243.115v-.44z"
      ></path>
    </g>
  );
};

const Flame = () => {
  return (
    <g transform="scale(0.028) translate(170, 170)">
      <path
        fill="currentColor"
        d="M245.05 15.514c34.29 48.815-23.535 320.54-90.302 136.72C106.796 325.11 38.956 332.518 38.876 252.55c-71.6 79.31 43.824 220.767 87.376 243.935h52.127c-45.92-40.016-76.784-78-82.176-135.968 47.312 9.423 71.855 20.96 81.263-62.048 60.736 86.59 100.944-49.376 137.184-107.12-1.647 40.32-3.343 93.456 22.848 129.888 8.736 12.143 33.232 16.11 54.736 15.807-9.92 16.08-44.848 69.376-17.008 89.2 27.84 19.824 33.072-.384 25.856 16.176-13.264 20.88-22.992 39.375-59.072 54.063h56.064c59.44-18.72 111.807-91.663 94.607-135.535-22.015 18.657-43.774 30.897-61.294 29.537 49.12-72.08 37.84-145.903 14.752-221.342-20.224 72.383-33.488 82.495-54.576 99.52 29.104-68.657-85.44-214.448-146.51-253.15z"
      ></path>
    </g>
  );
};

const Sun = () => {
  return (
    <g transform="scale(0.45) translate(10.5, 10.5)">
      <path
        fill="currentColor"
        d="M23.395 14.106c2.958-1.383 2.828-6.068 5.758-5.884-4.125-2.74-4.019 3.106-9.089 1.235 1.107-3.068-2.292-6.286-0.091-8.227-4.855 0.979-0.645 5.039-5.555 7.301-1.384-2.958-6.068-2.828-5.884-5.758-2.74 4.125 3.106 4.019 1.235 9.089-3.068-1.107-6.286 2.292-8.227 0.091 0.979 4.855 5.039 0.645 7.301 5.555-2.958 1.384-2.828 6.068-5.758 5.884 4.125 2.74 4.019-3.106 9.089-1.235-1.107 3.068 2.292 6.286 0.091 8.227 4.855-0.979 0.645-5.039 5.555-7.301 1.384 2.958 6.068 2.828 5.884 5.758 2.74-4.125-3.106-4.019-1.235-9.089 3.068 1.107 6.286-2.292 8.226-0.091-0.979-4.855-5.039-0.645-7.301-5.555z"
      ></path>{" "}
    </g>
  );
};
