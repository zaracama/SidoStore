"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";

export default function HomeCarousel() {
  const [slide, setSlide] = useState<number>(1);

  useEffect(() => {
    let int = setInterval(() => {
      setSlide((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
    }, 8000);

    return () => clearInterval(int);
  }, []);

  function handlePrevPage() {
    setSlide((prev) => (prev - 1 <= 0 ? 4 : prev - 1));
  }

  function handleNextPage() {
    setSlide((prev) => (prev + 1 >= 5 ? 1 : prev + 1));
  }
  return (
    <>
      <main className="flex w-screen flex-col justify-center items-center">
        <div className=" w-full h-full ">
          <Image
            className="w-full object-center"
            priority={true}
            width={1920}
            height={500}
            alt="Image"
            src={`/slide${slide}.jpg`}
          />
        </div>
        <div
          onClick={handlePrevPage}
          className="z-10 absolute bottom-1/2 left-8 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform  hover:-translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-sky-500">
            &lt;-
          </span>
        </div>
        <div
          onClick={handleNextPage}
          className="z-10 absolute bottom-1/2 right-8 text-2xl font-semibold"
        >
          <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-sky-500">
            -&gt;
          </span>
        </div>
      </main>
    </>
  );
}
