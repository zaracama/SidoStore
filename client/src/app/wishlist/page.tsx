import { listWish } from "@/actions/wishlist";
import WishListTable from "@/components/WislistTable";
import { ListWishList } from "@/db/type/wishlist";

export default async function WishList() {
  const data: ListWishList[] = await listWish();

  return (
    <div className="flex flex-col justify-center items-center p-5 m-5 gap-5 font-assistant">
      <div className="text-5xl font-semibold">MY WISHLIST</div>

      <div className="w-3/4 flex justify-center">
        <table className="table-fixed w-4/5">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return <WishListTable key={item._id} props={item} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
