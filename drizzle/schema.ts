import { relations } from 'drizzle-orm';
import {
  pgTable,
  text,
  json,
  serial,
  timestamp,
  uuid,
  pgEnum,
} from 'drizzle-orm/pg-core';

export const MessagesTable = pgTable('messages', {
  id: serial('id').primaryKey(),
  message: text('message').notNull(),
  roll: json('roll'),
  createdAt: timestamp('createdAt'),
  email: text('email').notNull(),
  room: uuid('room').notNull(),
});

export const USER_ROLE = pgEnum('user_role', [
  'user',
  'alpha-tester',
  'player',
  'admin',
]);

export const UsersTable = pgTable('users', {
  id: uuid('id').primaryKey(),
  email: text('email').unique().notNull(),
  displayName: text('displayName'),
  avatar: text('avatar'),
  role: USER_ROLE('role').notNull().default('user'),
  createdAt: timestamp('createdAt'),
});

export const messageUserRelations = relations(MessagesTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [MessagesTable.email],
    references: [UsersTable.email],
    relationName: 'user',
  }),
  room: one(RoomsTable, {
    fields: [MessagesTable.room],
    references: [RoomsTable.id],
    relationName: 'room',
  }),
}));

export const RoomsTable = pgTable('rooms', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('createdAt'),
});

export const ROOM_USER_STATUS = pgEnum('room_user_status', [
  'invited',
  'joined',
]);

export const RoomUsersTable = pgTable('room_users', {
  id: uuid('id').primaryKey(),
  userId: uuid('userId')
    .references(() => UsersTable.id)
    .notNull(),
  roomId: uuid('roomId')
    .references(() => RoomsTable.id)
    .notNull(),
  status: ROOM_USER_STATUS('status').notNull(),
});

export const roomUsersRelations = relations(RoomUsersTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [RoomUsersTable.userId],
    references: [UsersTable.id],
    relationName: 'user',
  }),
  room: one(RoomsTable, {
    fields: [RoomUsersTable.roomId],
    references: [RoomsTable.id],
    relationName: 'room',
  }),
}));

export const CharactersTable = pgTable('characters', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  path: text('path').notNull(),
  createdAt: timestamp('createdAt'),
  userId: uuid('userId').references(() => UsersTable.id),
});

export const characterUserRelations = relations(CharactersTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [CharactersTable.userId],
    references: [UsersTable.email],
    relationName: 'user',
  }),
}));
