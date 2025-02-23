import SocketServer from "./socket.ts";

const socketServer = new SocketServer();

Deno.serve((req) => socketServer.handleRequest(req));
