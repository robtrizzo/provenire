import redis from "@/lib/redis";

export async function getAllUsers(): Promise<User[]> {
  const userIds: string[] = await redis.smembers("users");
  const users: User[] = await Promise.all(
    userIds.map(async (id) => {
      const user = await redis.get(`user:${id}`);
      return user as User;
    })
  );
  return users;
}

export async function getUser(userid: string) {
    const user = await redis.get(`user:${userid}`);
    return user as User;
}
