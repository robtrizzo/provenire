'use client';
import { BuildupCheckboxes } from './buildup-checkboxes';

export default function StressCheckboxes({
  max,
  current,
  conditions,
  onChange,
}: {
  max: number;
  current: number;
  conditions: string[];
  onChange: (n: number) => void;
}) {
  return (
    <BuildupCheckboxes
      max={max}
      current={current}
      numDisabled={conditions.length * 2}
      onChange={onChange}
    />
  );
}
