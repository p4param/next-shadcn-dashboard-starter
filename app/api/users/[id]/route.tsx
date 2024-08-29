import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/constants/data';

export function GET(req: NextRequest, { params }: { params: { id: number } }) {
  const { id } = params;
  if (id > 10) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  } else {
    return NextResponse.json(users[id - 1]);
  }
}
