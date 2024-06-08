'use server';
import { UsersTable } from '@/drizzle/schema';
import { db } from '@/drizzle/db';
import { v4 as uuidv4 } from 'uuid';
import { eq } from 'drizzle-orm';

type NewUser = typeof UsersTable.$inferInsert;

async function insertUser(user: NewUser) {
  return await db
    .insert(UsersTable)
    .values(user)
    .onConflictDoUpdate({
      target: UsersTable.email,
      set: {
        avatar: user.avatar,
        displayName: user.displayName,
      },
    })
    .returning();
}

export async function createUser(
  email: string,
  avatar?: string,
  displayName?: string
) {
  if (!email) {
    return { error: 'Email is required' };
  }

  const id = uuidv4();
  const createdAt = new Date();
  try {
    const user = await insertUser({
      id,
      email,
      displayName,
      avatar,
      createdAt,
    });
    console.log('User created or updated', user);
    return user[0];
  } catch (error) {
    console.error('Error creating user', error);
    return { error: 'Error creating user' };
  }
}

export async function getUser(email: string) {
  if (!email) {
    return { error: 'Email is required' };
  }
  try {
    const user = await db.query.UsersTable.findFirst({
      where: (user) => eq(user.email, email),
    });
    if (!user) {
      return { error: 'User not found' };
    }
    console.log('User found', user);
    return user;
  } catch (error) {
    console.error('Error finding user', error);
    return { error: 'Error finding user' };
  }
}
