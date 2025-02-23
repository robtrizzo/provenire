export type UserInfo = {
  username: string;
  avatar: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SocketEvent = { event: string; [key: string]: any };
