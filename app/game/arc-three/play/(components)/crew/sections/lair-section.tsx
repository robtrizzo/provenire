"use client";

import { useCrewAdvanceSections } from "@/contexts/arc3CrewSheetContext";
import CrewAdvanceSectionView from "./crew-advance-section";

export default function LairSection() {
  const { sections } = useCrewAdvanceSections();

  const lairSection = sections.find((s) => s.name === "Lair");

  if (!lairSection) return null;

  return <CrewAdvanceSectionView section={lairSection} />;
}
