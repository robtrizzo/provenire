import redis, { findKeysByPattern } from "@/lib/redis";

export async function getAllUsers(): Promise<User[]> {
  const userEmailKeys = await findKeysByPattern("user:email:*");
  const userIds = await Promise.all(userEmailKeys.map((key) => redis.get(key)));
  const users: User[] = await Promise.all(
    userIds.map(async (id) => {
      const user = await redis.get(`user:${id}`);
      return user as User;
    })
  );
  return users;
}
