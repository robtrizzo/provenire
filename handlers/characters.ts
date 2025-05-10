import redis, { findKeysByPattern } from "@/lib/redis";
import { Character } from "@/types/game";

export async function getAllCharacters() {
  const pattern = `user:*:character:*`;
  const keys = await findKeysByPattern(pattern);
  const characters = await Promise.all(
    keys.map(async (key) => {
      const character = (await redis.get(key)) as Character;
      return { ...character, key };
    })
  );
  return characters;
}
