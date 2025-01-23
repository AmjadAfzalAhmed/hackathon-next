import { NextResponse } from 'next/server';
import chef from '@/data/chef.json';

export async function GET() {
  return NextResponse.json(chef);
}