import { NextResponse } from 'next/server';
import food from '@/data/food.json';

export async function GET() {
  return NextResponse.json(food);
}