// export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { createSubscriber } from "@/lib/redis-pubsub";
import Redis from "ioredis";

const setKey = "rolls";

export async function GET() {
  const encoder = new TextEncoder();
  let subscriber: Redis | null;

  const customReadable = new ReadableStream({
    start(controller) {
      let isClosed = false;
      subscriber = createSubscriber();
      if (!subscriber) {
        controller.error(new Error("Failed to create Redis subscriber"));
        return;
      }

      subscriber.subscribe(setKey);

      subscriber.on("message", (channel, message) => {
        if (channel === setKey && !isClosed) {
          try {
            controller.enqueue(encoder.encode(`data: ${message}\n\n`));
          } catch (error) {
            console.log("Controller closed:", error);
            isClosed = true;
          }
        }
      });

      subscriber.on("error", (err) => {
        console.log("Redis error:", err);
        if (!isClosed) {
          controller.error(err);
          isClosed = true;
        }
      });
    },

    cancel() {
      if (subscriber) {
        subscriber.unsubscribe(setKey);
        subscriber.disconnect();
      }
    },
  });

  return new Response(customReadable, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      Connection: "keep-alive",
      "Cache-Control": "no-cache, no-transform",
      "Content-Encoding": "none",
    },
  });
}
