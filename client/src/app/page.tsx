import HomeCarousel from "@/components/HomeCarousel";
import HomeCategories from "@/components/HomeCategories";
import HomeDetailInfo from "@/components/HomeDetailInfo";
import HomeSample from "@/components/HomeSample";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <HomeSample />
      <HomeCategories />
      <HomeDetailInfo />
    </>
  );
}
