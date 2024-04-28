import Image from "next/image";
import WishListDelete from "./WishListDelete";
import { ListWishList } from "@/db/type/wishlist";

export const dynamic = "force-dynamic";

export default function WishListTable({ props }: { props: ListWishList }) {
  return (
    <tr className="border-b-2 my-5 py-5">
      <td className="flex justify-end pe-5">
        <Image
          className="group-hover:scale-110 duration-500 ease-in-out"
          src={props.product.image}
          width={80}
          height={80}
          alt="items"
        />
      </td>
      <td className="text-start">{props.product.name}</td>
      <td className="text-center">{props.product.price}</td>
      <WishListDelete props={props._id} />
    </tr>
  );
}
