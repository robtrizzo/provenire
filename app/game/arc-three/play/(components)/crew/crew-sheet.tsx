"use client";

import ResourceSection from "./sections/resource-section";
import HeatSection from "./sections/heat-section";
import StatusIndicator from "./sections/status-indicator";
import { TypographyH1 } from "@/components/ui/typography";
import { InlineSymbol } from "@/components/dice/dice-borders";
import { ThetaTriple } from "@/components/dice/dice-symbols";

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function CrewSheet() {
  return (
    <div className="relative mx-auto py-4 space-y-6">
      <StatusIndicator />
      <TypographyH1 className="text-center">
        THETA{" "}
        <InlineSymbol size={64}>
          <ThetaTriple />
        </InlineSymbol>
      </TypographyH1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-4">
          <HeatSection />
        </div>
        <ResourceSection />
      </div>
    </div>
  );
}
