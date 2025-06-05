import redis, { findKeysByPattern } from "@/lib/redis";
import { Survey } from "@/types/survey";

export async function getAllSurveysForArc(arc: string) {
  if (!arc) return [];
  const pattern = `survey:${arc}:*`;
  const keys = await findKeysByPattern(pattern);
  const surveys = await Promise.all(
    keys.map(async (key) => (await redis.get(key)) as Survey)
  );
  return surveys;
}
