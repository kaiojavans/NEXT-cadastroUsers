import { NextRequest, NextResponse } from "next/server";

const users: { name: string; age: number }[] = [];

export async function POST(request: NextRequest) {
  const { name, age } = await request.json();

  users.push({
    name,
    age: Number(age),
  });

  return NextResponse.json(users);
}