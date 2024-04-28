"use server";

import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addWish(input: ObjectId) {
  const cookie = cookies().get(`Authorization`);
  const auth = cookie?.value;
  const product = { productId: input };
  const res = await fetch("https://sidomuncul.vercel.app/api/wishlists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `Authorization=${auth}`,
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  redirect("/wishlist");
}

export async function listWish() {
  const cookie = cookies().get(`Authorization`);

  try {
    const auth = cookie?.value;

    const res = await fetch(
      "https://sidomuncul.vercel.app/api/wishlists",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `Authorization=${auth}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function delWish(input: string) {
  const cookie = cookies().get("Authorization");
  const auth = cookie?.value;

  const id = { id: input };
  const res = await fetch("https://sidomuncul.vercel.app/api/wishlists", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Cookie: `Authorization=${auth}`,
    },
    body: JSON.stringify(id),
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  }
  revalidatePath("/wishlist");
  redirect("/wishlist");
}
