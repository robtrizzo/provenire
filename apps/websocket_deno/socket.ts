type WebSocketWithUsername = WebSocket & {
  username: string;
  avatar: string | null;
};

// deno-lint-ignore no-explicit-any
type AppEvent = { event: string; [key: string]: any };

export default class SocketServer {
  private connectedClients = new Map<string, WebSocketWithUsername>();

  public handleRequest(req: Request) {
    console.log("here");
    if (req.headers.get("upgrade") !== "websocket") {
      return new Response(null, { status: 501 });
    }
    const u = new URL(req.url);
    const username = u.searchParams.get("username");
    if (!username) {
      console.log("must provide a username. aborting connection");
      return new Response(null, { status: 400 });
    }
    const upgrade = Deno.upgradeWebSocket(req);
    const socket = upgrade.socket as WebSocketWithUsername;
    const response = upgrade.response;

    if (this.connectedClients.has(username)) {
      socket.close(400, `username ${username} is already taken`);
      return response;
    }

    const avatar = u.searchParams.get("avatar");
    if (!avatar) {
      console.warn(`no avatar for user: ${username}`);
    }

    socket.username = username;
    socket.avatar = avatar;

    socket.onopen = this.broadcastUsernames.bind(this);
    socket.onclose = () => {
      this.clientDisconnected(socket.username);
    };
    socket.onmessage = (m) => {
      this.send(socket.username, m);
    };

    this.connectedClients.set(username, socket);
    console.log(`New client connected: ${username}`);
    return response;
  }

  // deno-lint-ignore no-explicit-any
  private send(username: string, message: any) {
    const data = JSON.parse(message.data);
    if (data.event !== "send-message") {
      return;
    }

    this.broadcast({
      event: "send-message",
      username: username,
      message: data.message,
    });
  }

  private clientDisconnected(username: string) {
    this.connectedClients.delete(username);
    this.broadcastUsernames();

    console.log(`Client ${username} disconnected`);
  }

  private broadcastUsernames() {
    const userInfo = [
      ...this.connectedClients
        .values()
        .map((v) => ({ username: v.username, avatar: v.avatar })),
    ];
    this.broadcast({ event: "update-users", userInfo });

    console.log("Sent user info list:", JSON.stringify(userInfo));
  }

  private broadcast(message: AppEvent) {
    const messageString = JSON.stringify(message);
    for (const client of this.connectedClients.values()) {
      client.send(messageString);
    }
  }
}
