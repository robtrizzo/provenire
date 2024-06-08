import {
  RoomUsersTable,
  UsersTable,
  RoomsTable,
  MessagesTable,
} from '@/drizzle/schema';

export type User = typeof UsersTable.$inferSelect;
export type NewUser = typeof UsersTable.$inferInsert;

export type Room = typeof RoomsTable.$inferSelect;
export type NewRoom = typeof RoomsTable.$inferInsert;

export type NewRoomUser = typeof RoomUsersTable.$inferInsert;
export type RoomUser = typeof RoomUsersTable.$inferSelect;
export type RoomUserWithPopulatedUser = RoomUser & { user: User };
export type RoomUserWithPopulatedRoom = RoomUser & { room: Room };

export type Message = typeof MessagesTable.$inferSelect;
export type NewMessage = typeof MessagesTable.$inferInsert;
export type MessageWithPopulatedUser = Message & { user: User };
