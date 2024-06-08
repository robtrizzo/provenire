'use server';
import { sql } from '@vercel/postgres';
import { auth } from '@/auth';
import { MessagesTable } from '@/drizzle/schema';
import { db } from '@/drizzle/db';
import { pusherServer } from '@/lib/pusher';

type NewMessage = typeof MessagesTable.$inferInsert;

async function insertMessage(message: NewMessage) {
  return db.insert(MessagesTable).values(message).returning();
}

export async function createMessage(message: string, roomId: string) {
  const session = await auth();
  if (!session?.user?.email) {
    return { error: 'Not authenticated' };
  }
  if (!message) {
    return { error: 'Message is required' };
  }
  if (message.length > 1000) {
    return { error: 'Message is too long' };
  }
  if (!roomId) {
    return { error: 'Room ID is required' };
  }
  const m = message;
  const createdAt = new Date();
  try {
    const [message] = await insertMessage({
      email: session.user.email,
      message: m,
      room: roomId,
      createdAt,
    });
    console.log('Message created', message);
    await pusherServer.trigger(`room__${roomId}__messages`, 'new-message', {
      ...message,
      user: {
        email: session.user?.email,
        displayName: session.user?.name,
        avatar: session.user?.image,
        id: session.user?.id,
      },
    });
  } catch (error) {
    console.error('Error creating message', error);
    return { error: 'Error creating message' };
  }
}

/**
 * This doesn't have a strong use case, this is a proof of concept
 * @returns a list of messages for the current user
 */
export async function getUserMessages() {
  const session = await auth();
  console.log('get user messages', session);
  if (!session?.user?.email) {
    return { error: 'Not authenticated' };
  }

  const messages =
    await sql`SELECT * FROM messages WHERE email = ${session.user.email}`;
  console.log('messages', messages);
  return messages;
}
