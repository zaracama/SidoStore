import { Product, ProductSample } from "@/db/type/product";

export async function getDataSample(): Promise<ProductSample[]> {
  const res = await fetch(
    "https://sidomuncul.vercel.app/api/products/samples"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getAllDataProducts(
  page: string | null,
  searchName: string | null
): Promise<{
  data: ProductSample[];
  count: number;
}> {
  const pageSearch = page ? page : 1;
  const searching = searchName ? `&search=${searchName}` : "";

  const res = await fetch(
    `https://sidomuncul.vercel.app/api/products?page=${pageSearch}${searching}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getDetail(slug: string): Promise<Product> {
  const res = await fetch(
    `https://sidomuncul.vercel.app/api/products/${slug}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
