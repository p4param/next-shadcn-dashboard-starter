import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/constants/data';

export function GET(req: NextRequest) {
  return NextResponse.json(users);
}
