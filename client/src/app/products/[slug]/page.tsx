import { getDetail } from "@/actions/product";
import ButtonWishList from "@/components/ButtonWishlist";
import { Metadata } from "next";
import Image from "next/image";
export const dynamic = "force-dynamic";

type Props = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Sidomuncul ${params.slug}`,
  };
};

export default async function ProductDetail({ params }: Props) {
  const data = await getDetail(params.slug);

  return (
    <div>
      <div className="flex flex-row justify-center font-assistant">
        <div className="w-2/6">
          <Image src={data.image} width={1500} height={500} alt="Slide1" />
        </div>
        <div className="w-3/6  px-20">
          <div className="text-3xl font-bold mb-6">{data.name}</div>
          <div className="font-bold mb-6 pb-6 border-b border-gray-400">
            {data.excerpt}
          </div>
          <ul className="ps-1 mt-3 space-y-1 list-disc list-inside font-semibold">
            <li>SIZE: {data.size} ml</li>
            <ButtonWishList props={data._id} />
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center my-10">
        <div className="w-5/6 ">
          <div className="border-b border-gray-300 mb-5">
            <div className="w-1/6 text-center font-medium border-b-4 border-gray-600 py-3">
              Product Detail
            </div>
          </div>
          <div className="font-bold text-sm py-0">
            What's so special about this product?
            <ul className="ps-6 list-disc font-normal list-inside">
              {data &&
                data.description.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
            </ul>
          </div>
          <div className="font-bold text-sm py-0">
            Hero Ingredients:
            <ul className="ps-6 list-disc font-normal list-inside">
              {data &&
                data.heroIngredients.map((item, i) => {
                  return (
                    <div key={i}>
                      <li>{item.heroName}</li>
                      <p>{item.heroDesc}</p>
                    </div>
                  );
                })}
            </ul>
          </div>
          <div className="font-bold text-sm py-0">
            Full Ingredients:
            <p className=" font-normal">{data.fullIngredients}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
