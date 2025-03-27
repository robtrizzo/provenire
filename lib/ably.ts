import * as Ably from "ably";

const ABLY_API_KEY = process.env.ABLY_API_KEY;

if (!ABLY_API_KEY) {
  throw new Error("Missing Ably API Key");
}

const ably = new Ably.Rest(ABLY_API_KEY);

export default ably;
