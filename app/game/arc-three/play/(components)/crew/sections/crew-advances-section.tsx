"use client";

import { useCrewAdvanceSections } from "@/contexts/arc3CrewSheetContext";
import AddCrewAdvanceSectionDialog from "../dialogs/add-crew-advance-section-dialog";
import CrewAdvanceSectionView from "./crew-advance-section";

export default function CrewAdvancesSection() {
  const { sections, removeSection } = useCrewAdvanceSections();

  return (
    <>
      {sections.map((section) => (
        <CrewAdvanceSectionView
          key={section.id}
          section={section}
          onRemove={() => removeSection(section.id)}
        />
      ))}
      <AddCrewAdvanceSectionDialog />
    </>
  );
}
