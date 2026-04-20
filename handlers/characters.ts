import redis, { findKeysByPattern } from "@/lib/redis";
import { Character, CharacterV3 } from "@/types/game";

export async function getAllCharacters() {
  const pattern = `user:*:character:*`;
  const keys = await findKeysByPattern(pattern);
  const characters = await Promise.all(
    keys.map(async (key) => {
      const character = (await redis.get(key)) as Character;
      return { ...character, key };
    }),
  );
  return characters;
}

export async function getCharacterById(
  userid: string | undefined,
  characterid: string,
) {
  if (!userid) {
    return null;
  }
  const character = await redis.get(`user:${userid}:character:${characterid}`);
  return character;
}

export async function insertCharacter({
  userID,
  characterJSON,
}: {
  userID: string;
  characterJSON: CharacterV3;
}) {
  if (!characterJSON.id) {
    throw new Error("No character ID provided. Aborting insert.");
  }

  const key = `user:${userID}:character:${characterJSON.id}`;
  await redis.set(key, characterJSON);
}

export async function getAllCharactersForUser(userId: string | undefined) {
  if (!userId) return [];
  const pattern = `user:${userId}:character:*`;
  const keys = await findKeysByPattern(pattern);
  const characters = await Promise.all(keys.map((key) => redis.get(key)));
  return characters;
}

export async function deleteCharacterByKey(
  userid: string,
  characterid: string,
) {
  if (!userid || !characterid) {
    console.error("No key provided to deleteCharacterByKey");
    return;
  }
  await redis.del(`user:${userid}:character:${characterid}`);
}
