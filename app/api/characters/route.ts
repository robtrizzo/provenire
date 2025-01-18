import { NextResponse } from 'next/server';
import { auth } from '@/auth/index';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  // TODO authorize based on role
  try {
    /**
     * TODO
     * 1. fetch characters based on userId
     * 2. sort on -createdAt
     * 3. return sorted characters
     */
    return NextResponse.json({});
  } catch (error) {
    console.error('Error getting characters', error);
    return NextResponse.json(
      { error: 'Error getting characters' },
      { status: 500 }
    );
  }
}
