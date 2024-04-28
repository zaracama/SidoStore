import UserModel from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await UserModel.register(body);
    return NextResponse.json(
      { message: "Registration Success" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const err = error.issues[0].message;
      return NextResponse.json({ message: err }, { status: 400 });
    } else if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        {
          message: "Internal Server Error",
        },
        {
          status: 500,
        }
      );
    }
  }
}
