"use client";

import ResourceSection from "./sections/resource-section";
import HeatSection from "./sections/heat-section";
import StatusIndicator from "./sections/status-indicator";
import { TypographyH1 } from "@/components/ui/typography";
import { InlineSymbol } from "@/components/dice/dice-borders";
import { ThetaTriple } from "@/components/dice/dice-symbols";
import ItemsSection from "./sections/items-section";
import CrewAdvancesSection from "./sections/crew-advances-section";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="mt-4">
          <HeatSection />
        </div>
        <div className="mt-4">
          <ResourceSection />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="col-span-1">
          <ItemsSection />
        </div>
        <CrewAdvancesSection />
      </div>
    </div>
  );
}
