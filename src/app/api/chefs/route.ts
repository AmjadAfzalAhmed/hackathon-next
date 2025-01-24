import { NextResponse } from 'next/server';
import chef from '@/data/chefs.json';

export async function GET() {
  return NextResponse.json(chef);
}