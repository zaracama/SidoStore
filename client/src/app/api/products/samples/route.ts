import ProductModel from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = await ProductModel.getSamples();
  return NextResponse.json(data);
}
