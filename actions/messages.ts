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
  let m = message;
  let r = null;
  const createdAt = new Date();
  try {
    if (m.startsWith('/roll')) {
      console.log('Rolling dice', m);
      const roll = m.split(' ')[1];
      if (!roll) {
        // do nothing, it'll be rendered as a message
      } else {
        const diceRollPattern = /(\d+)d(\d+)([+-]\d+)?/;
        const match = diceRollPattern.exec(m);

        if (match) {
          const [_, countStr, sidesStr, modifierStr] = match;
          const count = parseInt(countStr, 10);
          const sides = parseInt(sidesStr, 10);
          const modifier = modifierStr ? parseInt(modifierStr, 10) : 0;

          if (count && sides) {
            const rolls = Array.from(
              { length: count },
              () => Math.floor(Math.random() * sides) + 1
            );
            const total = rolls.reduce((a, b) => a + b, 0) + modifier;
            m = `rolled ${count}d${sides}${modifierStr || ''}`;
            r = { count, sides, modifier, rolls, total, v: 1 };
          }
        }
      }
    }
    const [message] = await insertMessage({
      email: session.user.email,
      message: m,
      roll: r,
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
