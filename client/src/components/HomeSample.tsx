import { getDataSample } from "@/actions/product";
import HomeCard from "./HomeCard";

export const dynamic = "force-dynamic";

export default async function HomeSample() {
  const data = await getDataSample();

  return (
    <div className="flex justify-center my-12 py-12 flex-col gap-10">
      <div className="text-3xl font-bold text-center">
        Sidomuncul BEST-SELLING PRODUCTS
      </div>
      <div className="flex flex-row gap-7">
        {data &&
          data.map((item) => {
            return <HomeCard key={item.slug} product={item} />;
          })}
      </div>
    </div>
  );
}
