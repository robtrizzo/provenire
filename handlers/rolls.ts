import redis from "@/lib/redis";
import { Roll } from "@/types/roll";
import { client, Bucket } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";

export async function addRoll(userId: string, roll: Roll): Promise<void> {
  const key = `user:${userId}:rolls`;
  roll.timestamp = new Date().toISOString();
  await redis.lpush(key, JSON.stringify(roll));

  const strRoll = JSON.stringify(roll);
  // also push to the global rolls list
  await redis.lpush("rolls", strRoll);
  // publish the roll to the channel
  await redis.publish("rolls", strRoll);
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

  // also remove from the global rolls list. This is done in lua so it can be passed off to redis and done all at once
  const delScript = `
    local rolls = redis.call('lrange', KEYS[1], 0, -1)
    for i, roll in ipairs(rolls) do
      local parsedRoll = cjson.decode(roll)
      if parsedRoll.userid == ARGV[1] then
        redis.call('lrem', KEYS[1], 0, roll)
      end
    end
  `;
  await redis.eval(delScript, ["rolls"], [userId]);
}

export async function getAllRolls(
  cursor: number,
  pageSize: number
): Promise<Roll[]> {
  return await redis.lrange("rolls", cursor, cursor + pageSize - 1);
}

export async function getAggregatedRolls() {
  const Key = "rolls/rolls.json";

  const command = new GetObjectCommand({ Bucket, Key });
  const response = await client.send(command);

  if (!response.Body) {
    console.error("invalid response body");
    return;
  }

  const fileContent = await response.Body.transformToString();
  return JSON.parse(fileContent);
}
