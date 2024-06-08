'use server';
import { auth } from '@/auth';
import { RoomsTable, RoomUsersTable, UsersTable } from '@/drizzle/schema';
import { db } from '@/drizzle/db';
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'next/navigation';
import { and, eq } from 'drizzle-orm';
import type { NewRoom, NewRoomUser } from '@/types/db';
import { z, ZodError } from 'zod';
import { pusherServer } from '@/lib/pusher';

async function insertRoom(room: NewRoom) {
  return db.insert(RoomsTable).values(room).returning();
}
async function insertRoomUser(roomUser: NewRoomUser) {
  return db.insert(RoomUsersTable).values(roomUser).returning({
    id: RoomUsersTable.id,
  });
}

const getRoomsSchema = z.object({
  roomId: z.string().min(1),
});

export async function getRoom({ roomId }: z.infer<typeof getRoomsSchema>) {
  try {
    const room = await db.query.RoomsTable.findFirst({
      where: eq(RoomsTable.id, getRoomsSchema.parse({ roomId }).roomId),
    });
    return room;
  } catch (error) {
    console.error('Error getting room', error);
    throw new Error('Error getting room');
  }
}

export async function createRoom(name: string) {
  console.log('createRoom', name);
  const session = await auth();
  if (!session) {
    return { error: 'Not authenticated' };
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return { error: 'Unauthorized' };
  }
  const email = session?.user?.email;
  if (!email) {
    return { error: 'Email is required' };
  }
  const userId = session?.user?.id;
  if (!userId) {
    return { error: 'User ID is required' };
  }
  if (!name) {
    return { error: 'Room name is required' };
  }
  const id = uuidv4();
  const createdAt = new Date();
  try {
    const [room] = await insertRoom({ id, name, createdAt }); // Access the first element of the room array
    console.debug('Room created', room);
    const [roomUser] = await insertRoomUser({
      id: uuidv4(),
      userId,
      roomId: room.id,
      status: 'joined',
    });
    console.debug('Room user created', roomUser);
  } catch (error) {
    console.error('Error creating room', error);
    return { error: 'Error creating room' };
  } finally {
    redirect(`/chat/${id}`);
  }
}

export async function getRoomMembers(roomId: string) {
  const session = await auth();
  if (!session) {
    return { error: 'Not authenticated' };
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return { error: 'Unauthorized' };
  }
  if (!roomId) {
    return { error: 'Room ID is required' };
  }
  const roomUsers = await db.query.RoomUsersTable.findMany({
    where: eq(RoomUsersTable.roomId, roomId),
    with: {
      user: true,
    },
  });
  console.debug('Room users', roomUsers);
  return roomUsers;
}

// TODO consider rewriting this in raw SQL so that we can sort by last message time
export async function getUserRooms() {
  const session = await auth();
  if (!session) {
    throw new Error('Not authenticated');
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    throw new Error('Not authenticated');
  }
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error('User ID is required');
  }
  const rooms = await db.query.RoomUsersTable.findMany({
    where: and(
      eq(RoomUsersTable.userId, userId),
      eq(RoomUsersTable.status, 'joined')
    ),
    with: {
      room: true,
    },
  });
  /**
   * TODO sort by last message time
   * this probably involves joining the messages table
   * and sorting by the message createdAt
   * for now, sort by room createdAt
   */

  rooms.sort((a, b) => {
    const aTime = new Date(a.room?.createdAt ?? 0).getTime();
    const bTime = new Date(b.room?.createdAt ?? 0).getTime();
    return bTime - aTime;
  });
  console.debug('User rooms', rooms);
  return rooms;
}

const inviteToRoomSchema = z.object({
  roomId: z.string().min(1),
  email: z.string().email(),
});

export async function inviteToRoom({
  roomId,
  email,
}: z.infer<typeof inviteToRoomSchema>) {
  const session = await auth();
  if (!session) {
    throw new Error('Not authenticated');
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return { error: 'Unauthorized' };
  }
  if (!roomId) {
    throw new Error('Room ID is required');
  }
  if (!email) {
    throw new Error('Email is required');
  }
  try {
    const validatedData = inviteToRoomSchema.parse({ roomId, email });
    email = validatedData.email;
    roomId = validatedData.roomId;
  } catch (error) {
    console.error('Invalid data', error);
    throw new Error('Invalid data');
  }
  const user = await db.query.UsersTable.findFirst({
    where: eq(UsersTable.email, email),
  });
  if (!user) {
    throw new Error('User not found');
  }
  const userId = user.id;
  try {
    const [{ id }] = await insertRoomUser({
      id: uuidv4(),
      userId,
      roomId,
      status: 'invited',
    });

    const roomUser = await db.query.RoomUsersTable.findFirst({
      where: eq(RoomUsersTable.id, id),
      with: {
        room: true,
      },
    });

    if (!roomUser) {
      throw new Error('Error creating room user');
    }

    console.debug('Room user created', id);
    await pusherServer.trigger(
      `user__${userId}__room-invites`,
      'room-invites',
      roomUser
    );
    await pusherServer.trigger(`room__${roomId}__members`, 'invited-member', {
      id: roomUser.id,
      userId: roomUser.userId,
      roomId: roomUser.roomId,
      status: roomUser.status,
      user,
    });
    console.log('Pusher event sent');
  } catch (error) {
    console.error('Error inviting user to room', error);
    throw new Error('Error inviting user to room');
  }
}

export async function getRoomsInvitedTo() {
  const session = await auth();
  if (!session) {
    return { error: 'Not authenticated' };
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return { error: 'Unauthorized' };
  }
  const userId = session?.user?.id;
  if (!userId) {
    return { error: 'User ID is required' };
  }
  try {
    const rooms = await db.query.RoomUsersTable.findMany({
      where: and(
        eq(RoomUsersTable.userId, userId),
        eq(RoomUsersTable.status, 'invited')
      ),
      with: {
        room: true,
      },
    });
    console.debug('Rooms invited to', rooms);
    return rooms;
  } catch (error) {
    console.error('Error getting rooms invited to', error);
    return { error: 'Error getting rooms invited to' };
  }
}

const acceptRoomInviteSchema = z.object({
  roomId: z.string().min(1),
});

export async function acceptRoomInvite({
  roomId,
}: z.infer<typeof acceptRoomInviteSchema>) {
  const session = await auth();
  if (!session) {
    throw new Error('Not authenticated');
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return { error: 'Unauthorized' };
  }
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error('User ID is required');
  }
  try {
    const [roomUser] = await db
      .update(RoomUsersTable)
      .set({
        status: 'joined',
      })
      .where(
        and(
          eq(RoomUsersTable.userId, userId),
          eq(
            RoomUsersTable.roomId,
            acceptRoomInviteSchema.parse({ roomId }).roomId
          )
        )
      )
      .returning();
    console.debug('Room user updated', roomUser);
    await pusherServer.trigger(`room__${roomId}__members`, 'new-member', {
      memberId: roomUser.userId,
    });
    console.log('Triggered accepted room invite event');
    return roomUser.roomId;
  } catch (error) {
    console.error('Error accepting room invite', error);
    if (error instanceof ZodError) {
      throw new Error('Room ID is required');
    } else {
      throw new Error('Error accepting room invite');
    }
  }
}

const rejectRoomInviteSchema = z.object({
  roomId: z.string().min(1),
});

export async function rejectRoomInvite({
  roomId,
}: z.infer<typeof rejectRoomInviteSchema>) {
  const session = await auth();
  if (!session) {
    throw new Error('Not authenticated');
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return { error: 'Unauthorized' };
  }
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error('User ID is required');
  }
  try {
    const [roomUser] = await db
      .delete(RoomUsersTable)
      .where(
        and(
          eq(RoomUsersTable.userId, userId),
          eq(
            RoomUsersTable.roomId,
            rejectRoomInviteSchema.parse({ roomId }).roomId
          )
        )
      )
      .returning();
    console.debug('Room user deleted', roomUser);
    await pusherServer.trigger(`room__${roomId}__members`, 'rejected-member', {
      memberId: roomUser.userId,
    });
    await pusherServer.trigger(`user__${userId}__room-invites`, 'room-reject', {
      roomId: roomUser.roomId,
    });
    console.log('Triggered rejected room invite event');
    return roomUser.roomId;
  } catch (error) {
    console.error('Error rejecting room invite', error);
    if (error instanceof ZodError) {
      throw new Error('Room ID is required');
    } else {
      throw new Error('Error rejecting room invite');
    }
  }
}
