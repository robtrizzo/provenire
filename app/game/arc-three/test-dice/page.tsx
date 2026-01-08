import { Separator } from "@/components/ui/separator";
import { TypographyH4 } from "@/components/ui/typography";
import { ReactNode } from "react";

export default async function Page() {
  return (
    <div>
      <div className="flex gap-1">
        <div className="flex-flex-col-gap-1">
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
        <div className="flex-flex-col-gap-1">
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
        <div className="flex-flex-col-gap-1">
          <D6 size={128}>
            <ArrowDouble />
          </D6>
          <D6 size={128}>
            <>
              <ArrowDoubleSpread />
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
    <rect x="4" y="4" width="16" height="16" />
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
        d="M 9 14 L 12 11 L 15 14 L 13.5 14 L 12 12.5 L 10.5 14 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <path
        d="M 8 12 L 12 8 L 16 12 L 14.5 12 L 12 9.5 L 9.5 12 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </>
  );
};
const ArrowDoubleSpread = () => {
  return (
    <>
      <path
        d="M 9 18 L 12 15 L 15 18 L 13.5 18 L 12 16.5 L 10.5 18 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <path
        d="M 9 8 L 12 5 L 15 8 L 13.5 8 L 12 6.5 L 10.5 8 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </>
  );
};

const Theta = () => {
  return (
    <g fill="currentColor" stroke="currentColor" strokeWidth={0.5}>
      {/* Outer circle - smaller */}
      <circle cx="12" cy="12" r="3.5" fill="none" strokeWidth={0.7} />
      {/* Horizontal line through circle */}
      <line x1="6.5" y1="12" x2="16.5" y2="12" strokeWidth={0.5} />
      {/* Speartip pointing right */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="currentColor"
        strokeWidth={0.1}
      />
    </g>
  );
};

const ThetaDouble = () => {
  return (
    <g fill="currentColor" stroke="currentColor" strokeWidth={0.5}>
      {/* Outer circle */}
      <circle cx="12" cy="12" r="3.5" fill="none" strokeWidth={0.7} />
      {/* Inner circle - second concentric ring */}
      <circle cx="12" cy="12" r="2.5" fill="none" strokeWidth={0.7} />
      {/* Horizontal line through circles */}
      <line x1="6.5" y1="12" x2="16.5" y2="12" strokeWidth={0.5} />
      {/* Speartip pointing right */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="currentColor"
        strokeWidth={0.1}
      />
    </g>
  );
};

const ThetaTriple = () => {
  return (
    <g fill="currentColor" stroke="currentColor" strokeWidth={0.5}>
      {/* Outer circle */}
      <circle cx="12" cy="12" r="3.5" fill="none" strokeWidth={0.7} />
      {/* Middle circle - second concentric ring */}
      <circle cx="12" cy="12" r="2.5" fill="none" strokeWidth={0.7} />
      {/* Inner circle - third concentric ring */}
      <circle cx="12" cy="12" r="1.5" fill="none" strokeWidth={0.7} />
      {/* Horizontal line through circles */}
      <line x1="6.5" y1="12" x2="16.5" y2="12" strokeWidth={0.5} />
      {/* Speartip pointing right */}
      <path
        d="M 18 12 L 16.5 11 L 17 12 L 16.5 13 Z"
        fill="currentColor"
        strokeWidth={0.1}
      />
    </g>
  );
};

const Threat = () => {
  return (
    <g>
      <path
        d="M 9 9.5 L 12 11.5 L 15 9.5 L 13.5 9.5 L 12 10.5 L 10.5 9.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <path
        d="M 15.5 10.5 L 12.5 12.5 L 12.5 16 L 13.4 15.5 L 13.5 13 L 15.5 11.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      <path
        d="M 11.5 16 L 11.5 12.5 L 8.5 10.5 L 8.5 11.5 L 10.5 13 L 10.75 15.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
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
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      {/* Right triangle - shifted up a tad */}
      <path
        d="M 18.5 13.5 L 15.5 15.5 L 15.5 19 L 16.4 18.5 L 16.5 16 L 18.5 14.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
      {/* Left triangle - shifted up a tad */}
      <path
        d="M 8.5 19 L 8.5 15.5 L 5.5 13.5 L 5.5 14.5 L 7.5 16 L 7.75 18.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
      />
    </g>
  );
};
