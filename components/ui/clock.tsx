'use client';
import { useState, useMemo } from 'react';
import { useTheme } from 'next-themes';
export default function Clock({
  width = 50,
  height = 50,
  max = 6,
  current = 0,
  setVal = () => {},
  clickable = true,
}: {
  width?: number;
  height?: number;
  max: number;
  current: number;
  setVal?: (n: number) => void;
  clickable?: boolean;
}) {
  const { theme } = useTheme();

  const [time, setTime] = useState<number>(current);

  const dark = theme === 'dark';

  const conicGradient = `conic-gradient(red ${time / max}turn, ${
    dark ? 'black' : 'white'
  } ${time / max}turn, ${dark ? 'black' : 'white'} 1turn, ${
    dark ? 'black' : 'white'
  } 1turn)`;

  const borderThickness = 2;

  const adjustedWidth = width - 2 * borderThickness;
  const adjustedHeight = height - 2 * borderThickness;

  const cx = adjustedWidth / 2;
  const cy = adjustedHeight / 2;
  const outerRadius = Math.min(adjustedWidth, adjustedHeight) / 2;

  const spokes = useMemo(() => {
    return Array.from({ length: max }, (_, i) => {
      const angle = (360 / max) * i - 90;
      const x = cx + outerRadius * Math.cos((angle * Math.PI) / 180);
      const y = cy + outerRadius * Math.sin((angle * Math.PI) / 180);
      return (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke={dark ? 'hsl(217.2 32.6% 17.5%)' : 'hsl(214.3 31.8% 91.4%)'}
          strokeWidth={1}
        />
      );
    });
  }, [max, dark]);

  return (
    theme && (
      <div
        className="border-solid border-2 relative"
        style={{
          backgroundImage: conicGradient,
          borderRadius: '50%',
          width: `${width}px`,
          height: `${height}px`,
        }}
        onClick={() => {
          if (!clickable) return;
          if (time >= max) return;
          setTime(time + 1);
          setVal(time + 1);
        }}
        onContextMenu={(e) => {
          if (!clickable) return;
          e.preventDefault();
          if (time <= 0) return;
          setTime(time - 1);
          setVal(time - 1);
        }}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="absolute"
        >
          <g>{spokes}</g>
        </svg>
      </div>
    )
  );
}
