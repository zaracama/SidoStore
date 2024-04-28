import ProductModel from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const data = await ProductModel.getBySlug(params.slug);

  return NextResponse.json(data);
}
