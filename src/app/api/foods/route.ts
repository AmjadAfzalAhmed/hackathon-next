import { NextResponse } from 'next/server';
import food from '@/data/foods.json';

export async function GET() {
  return NextResponse.json(food);
}