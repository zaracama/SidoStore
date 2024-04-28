"use client";
import { addWish } from "@/actions/wishlist";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";

export default function ButtonWishList({ props }: { props: ObjectId }) {
  async function handleAddWish() {
    addWish(props);
  }

  return (
    <div
      onClick={handleAddWish}
      className="flex flex-col justify-center items-center hover:bg-sky-500 hover:text-zinc-50 py-2"
    >
      <div>Add to WishList</div>
    </div>
  );
}
