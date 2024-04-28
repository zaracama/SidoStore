import ProductModel from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } }
) {
  const data = await ProductModel.getByCategory(params.category);

  return NextResponse.json(data);
}
