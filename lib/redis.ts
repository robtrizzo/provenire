import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default redis;

export async function findKeysByPattern(pattern: string): Promise<string[]> {
  let cursor = "0";
  const keys: string[] = [];

  while (true) {
    const [newCursor, foundKeys] = await redis.scan(cursor, {
      match: pattern,
      count: 100,
    });
    cursor = newCursor;
    keys.push(...foundKeys);

    if (cursor === "0") {
      break;
    }
  }

  return keys;
}
