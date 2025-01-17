import { NextResponse } from 'next/server';
import { auth } from '@/auth/index';
import { db } from '@/drizzle/db';
import { CharactersTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  if (!['alpha-tester', 'admin'].includes(session?.user?.role as string)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  try {
    const characters = await db.query.CharactersTable.findMany({
      where: eq(CharactersTable.userId, session.user.id),
    });
    characters.sort((a, b) => {
      if (!a.createdAt || !b.createdAt) {
        return 0;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    });
    return NextResponse.json({ characters });
  } catch (error) {
    console.error('Error getting characters', error);
    return NextResponse.json(
      { error: 'Error getting characters' },
      { status: 500 }
    );
  }
}
