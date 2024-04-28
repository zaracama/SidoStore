import WishListModel from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    body.userId = request.headers.get("x-user-id");
    await WishListModel.addWishList(body);
    return NextResponse.json(
      { message: "Add to Wishlist Success" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
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

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (userId) {
      const data = await WishListModel.listWishList(userId);

      return NextResponse.json(data);
    } else {
      throw new Error(`Must Loggin First`);
    }
  } catch (error) {
    if (error instanceof Error) {
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

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  await WishListModel.deleteWish(body.id);
  return NextResponse.json(
    { message: "Success remove wishlist" },
    { status: 200 }
  );
}
