"use client";
import { SocketEvent, UserInfo } from "@/types/socket";
import { useRef, useState, useEffect } from "react";
const useWs = (url: string) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [connected, setConnected] = useState<UserInfo[]>([]);

  const ws = useRef<WebSocket>(null);

  function handleMessage({ data }: { data: SocketEvent }) {
    switch (data.event) {
      case "update-users": {
        const userInfo = data.userInfo as UserInfo[];
        if (userInfo.length === 0) {
          console.error("empty event userInfo");
        }
        setConnected(userInfo);
        break;
      }
      default: {
        console.error(`unsupported event type ${data.event}`);
        break;
      }
    }
  }

  useEffect(() => {
    ws.current = new WebSocket(url);
    ws.current.onopen = () => setIsReady(true);
    ws.current.onclose = () => setIsReady(false);
    ws.current.onmessage = ({ data }) => {
      handleMessage({ data: JSON.parse(data) });
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url]);

  return { isReady, connected, send: ws.current?.send.bind(ws.current) };
};

export default useWs;
