"use client";
import useWs from "@/hooks/use-ws";
import { useSession } from "next-auth/react";
export default function Page() {
  const session = useSession();
  const username = session?.data?.user.name;
  const avatar = session?.data?.user.image;
  const { isReady, connected, send } = useWs(
    `ws://localhost:8000?username=${username}&avatar=${avatar}`
  );

  return (
    <>
      <h1>websocket test</h1>
      <button
        disabled={!isReady}
        onClick={() => {
          if (send) {
            send("hey");
          }
        }}
      >
        send message
      </button>
      <p>
        Status: <code>{!!isReady ? "connected" : "disconnected"}</code>
      </p>
      <p>
        Message: <code>{JSON.stringify(connected)}</code>
      </p>
    </>
  );
}
