"use client";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { TypographyH1 } from "@/components/ui/typography";
import EngagementRoll from "../../(components)/engagement-roll";

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1>Configure Engagement Roll</TypographyH1>

      <EngagementRoll.Configure />
    </>
  );
}
