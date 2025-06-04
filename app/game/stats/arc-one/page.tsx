"use server";
import { getAggregatedRolls } from "@/handlers/rolls";
import Charts from "./charts";

export default async function Page() {
  const rolls = await getAggregatedRolls();

  if (!rolls) return null;
  return <Charts data={rolls} />;
}
