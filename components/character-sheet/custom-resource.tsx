import type {
  CustomResource,
  HeatTrackConfig,
  XPClockConfig,
} from "@/types/game";
import XPClocks from "./xp-clocks";
import { TypographyH2 } from "@/components/ui/typography";
import { BuildupCheckboxes } from "../buildup-checkboxes";

interface CustomResourceProps {
  resource: CustomResource;
  value: unknown;
  onUpdate: (value: unknown) => void;
}

export default function CustomResource({
  resource,
  value,
  onUpdate,
}: CustomResourceProps) {
  switch (resource.type) {
    case "xp-clock":
      return (
        <CustomXpClock resource={resource} value={value} onUpdate={onUpdate} />
      );
    case "heat-track":
      return (
        <CustomHeatTrack
          resource={resource}
          value={value}
          onUpdate={onUpdate}
        />
      );
    default:
      return null;
  }
}

function CustomXpClock({ resource, value, onUpdate }: CustomResourceProps) {
  const config = resource.config as XPClockConfig;
  const currentValue = (value ?? config.default) as number;
  const key = `xp-clock-${currentValue}`;

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground">
        {resource.name}
      </TypographyH2>
      <XPClocks key={key}>
        <XPClocks.Clocks initial={currentValue} setVal={onUpdate} />
        <XPClocks.Controls initial={currentValue} setVal={onUpdate} />
      </XPClocks>
    </>
  );
}

function CustomHeatTrack({ resource, value, onUpdate }: CustomResourceProps) {
  const config = resource.config as HeatTrackConfig;
  const currentValue = value ?? config.default;

  return (
    <>
      <TypographyH2 className="text-md text-muted-foreground">
        {resource.name}
      </TypographyH2>
      <BuildupCheckboxes
        max={config.max}
        current={currentValue as number}
        onChange={(n) => {
          onUpdate(n);
        }}
        clearPosition="end"
        className="mt-2 ml-2"
      />
    </>
  );
}
