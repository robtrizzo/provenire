import ioredis from "ioredis";

export function createSubscriber() {
  const REDIS_URL = process.env.KV_URL;

  if (!REDIS_URL) {
    console.error("Missing Redis connection URL");
    return null;
  }

  try {
    const client = new ioredis(REDIS_URL, {
      enableReadyCheck: false,
      maxRetriesPerRequest: null,
    });

    client.on("connect", () => {
      console.log("Redis connected");
    });

    client.on("error", (err) => {
      console.error("Redis connection error:", err);
    });

    return client;
  } catch (error) {
    console.error("Error creating Redis client:", error);
    return null;
  }
}
