import { ProductSample } from "@/db/type/product";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default function HomeCard({ product }: { product: ProductSample }) {
  return (
    <div className="w-80 max-w-sm rounded overflow-hidden hover:shadow-2xl transition duration-500 ease-in-out mb-5">
      <Link href={`/products/${product.slug}`}>
        <Image
          className="hover:scale-110 duration-500 ease-in-out"
          src={product.image}
          width={400}
          height={380}
          alt="items1"
        />
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2 ">{product.name}</div>
          <p className="text-gray-700 text-base line-clamp-1">
            {product.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
}
