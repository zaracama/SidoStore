import Image from "next/image";

export const dynamic = "force-dynamic";

export default function HomeCategories() {
  return (
    <>
      <div className="flex justify-center my-10 py-10 flex-col gap-10">
        <div className="text-4xl font-semibold text-center">
          EXPLORE YOUR DISEASE NEEDS
        </div>
        <div className="flex flex-row gap-3">
          <Image
            src="/vitamin&suplemen.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/jamu.png"
            width={500}
            height={200}
            alt="categories"
          />
        </div>
        <div className="flex flex-row gap-3">
          <Image
            src="/food&beverage.png"
            width={500}
            height={200}
            alt="categories"
          />
          <Image
            src="/personalcare.png"
            width={500}
            height={200}
            alt="categories"
          />
        </div>
      </div>
    </>
  );
}
