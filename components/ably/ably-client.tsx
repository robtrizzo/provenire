"use client";
import * as Ably from "ably";

const ablyClient = new Ably.Realtime({
  authUrl: process.env.NEXT_PUBLIC_ABLY_AUTH_URL,
  authMethod: "POST",
  recover: (_, cb) => {
    cb(true);
  },
});

export default ablyClient;
