"use client";

import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export const dynamic = "force-dynamic";

export default function ProductSideBar() {
  const [searchInput, setSearchInput] = useState("");

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchInput(value);
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault;
    redirect(`/product?search=${searchInput}`);
  }

  console.log(searchInput);

  return (
    <div className="w-1/4 flex justify-center flex-col">
      <div className="flex flex-wrap bg-black text-white justify-center text-xl font-semibold py-4">
        PRODUCT
      </div>
      <div>
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-row gap-2 p-8 py-3 items-center hover:bg-gray-50 hover:text-sky-500"
        >
          <input
            className="border border-gray-300 h-9 placeholder-opacity-50 pl-[14px] w-11/12"
            type="text"
            name="search"
            placeholder="Search our products.."
            value={searchInput}
            onChange={handleOnChange}
          />
          <div className="hover:text-rose-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </form>
        <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">
          Vitamin & Suplement
        </ul>
        <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">Herbs</ul>
        <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">
          Foods & Beverages
        </ul>
        <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">Personal Care</ul>
      </div>
    </div>
  );
}
