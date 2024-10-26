import {
  RoomUsersTable,
  UsersTable,
  RoomsTable,
  MessagesTable,
  CharactersTable,
} from '@/drizzle/schema';

export type User = typeof UsersTable.$inferSelect;
export type NewUser = typeof UsersTable.$inferInsert;

export type Room = typeof RoomsTable.$inferSelect;
export type NewRoom = typeof RoomsTable.$inferInsert;

export type NewRoomUser = typeof RoomUsersTable.$inferInsert;
export type RoomUser = typeof RoomUsersTable.$inferSelect;
export type RoomUserWithPopulatedUser = RoomUser & { user: User };
export type RoomUserWithPopulatedRoom = RoomUser & { room: Room };

type Roll = {
  count: number;
  sides: number;
  modifier: number;
  rolls: number[];
  total: number;
  v: number;
};
export type Message = typeof MessagesTable.$inferSelect & { roll: Roll };
export type NewMessage = typeof MessagesTable.$inferInsert;
export type MessageWithPopulatedUser = Message & { user: User };

export type NewCharacter = typeof CharactersTable.$inferInsert;
export type Character = typeof CharactersTable.$inferSelect;
