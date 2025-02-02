import redis from "@/lib/redis";
import { Roll } from "@/types/roll";

export async function addRoll(userId: string, roll: Roll): Promise<void> {
  const key = `user:${userId}:rolls`;
  roll.timestamp = new Date().toISOString();
  await redis.lpush(key, JSON.stringify(roll));

  // also push to the global rolls list
  await redis.lpush("rolls", JSON.stringify(roll));
}

export async function getRolls(
  userId: string,
  cursor = 0,
  pageSize = 20
): Promise<Roll[]> {
  const key = `user:${userId}:rolls`;
  return await redis.lrange(key, cursor, cursor + pageSize - 1);
}

export async function clearRolls(userId: string): Promise<void> {
  const key = `user:${userId}:rolls`;
  await redis.del(key);
}

export async function getAllRolls(cursor: number, pageSize: number): Promise<Roll[]> {
  console.log("getting all rolls");
  return await redis.lrange("rolls", cursor, cursor + pageSize - 1);
}
