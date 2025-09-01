"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";

export default function Page() {
  const [message, setMessage] = useState("");

  const { mutateAsync: publishMessage, isPending } = useMutation({
    mutationFn: async () => {
      if (!message) return;
      const response = await fetch(`/api/roll/stream/publish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      return response.json();
    },
    onSuccess: () => {
      setMessage("");
    },
    onError: (error) => {
      console.error("Error publishing message", error);
    },
  });

  return (
    <div>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button disabled={isPending} onClick={() => publishMessage()}>
        {isPending ? "Publishing" : "Publish Message"}
      </Button>
      <div className="mt-8">
        <Messages />
      </div>
    </div>
  );
}

function Messages() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    let eventSource: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout | null = null;

    const connectToStream = () => {
      if (eventSource) {
        eventSource.close();
      }

      eventSource = new EventSource(`/api/roll/stream`);

      eventSource.addEventListener("message", (event) => {
        console.log("event data", event.data);
        setMessages((prev) => [...prev, event.data]);
      });

      eventSource.addEventListener("error", (error) => {
        console.log("EventSource error:", error);
        if (eventSource) {
          eventSource.close();
          eventSource = null;
        }

        reconnectTimeout = setTimeout(connectToStream, 1000);
      });

      eventSource.addEventListener("open", () => {
        console.log("EventSource connected");
      });
    };

    connectToStream();

    return () => {
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
      }
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      {messages.map((m, i) => (
        <span key={i}>{m}</span>
      ))}
    </div>
  );
}
