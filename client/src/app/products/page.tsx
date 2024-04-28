"use client";

import { useDebounce } from "@uidotdev/usehooks";
import { getAllDataProducts } from "@/actions/product";
import ProductCard from "@/components/ProductCard";
import { ProductSample } from "@/db/type/product";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import InfiniteScroll from "react-infinite-scroller";

export const dynamic = "force-dynamic";

export default function Products() {
  const [data, setData] = useState<ProductSample[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(page + 1);
  const [fetching, setFetching] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchTerm = useDebounce(searchInput, 300);

  const fetchItems = useCallback(async () => {
    if (fetching) {
      return;
    }

    setFetching(true);

    try {
      if (!debouncedSearchTerm) {
        setPage(1);
      }
      const item = await getAllDataProducts(`${page}`, debouncedSearchTerm);
      setData([...data, ...item.data]);

      setMaxPage(Math.ceil(item.count / 5) + 1);

      if (page < maxPage) {
        setPage(page + 1);
      } else {
        setPage(1);
      }
    } finally {
      setFetching(false);
    }
  }, [data, fetching, page]);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchInput(value);
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const hasMoreItems = page === maxPage ? false : true;

  const loader = (
    <div key="loader" className="loader">
      Loading ...
    </div>
  );

  useEffect(() => {
    async function debon() {
      setData([]);
      setPage(1);
      const item = await getAllDataProducts(`${page}`, debouncedSearchTerm);
      setData(item.data);
    }
    debon();
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="flex flex-row my-6 py-6 gap-5 font-assistant items-start">
        <div className="w-1/4 flex justify-center flex-col">
          <div className="flex flex-wrap bg-black text-white justify-center text-xl font-semibold py-4">
            PRODUCT
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
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
            <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">
              Herbs
            </ul>
            <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">
              Foods & Beverages
            </ul>
            <ul className="p-8 py-3 hover:bg-gray-50 hover:text-sky-500">
              Personal Care
            </ul>
          </div>
        </div>
        <div className="w-3/4 flex flex-col justify-start ">
          <InfiniteScroll
            loadMore={fetchItems}
            hasMore={hasMoreItems}
            loader={loader}
          >
            <div className="flex flex-row flex-wrap gap-5">
              {data &&
                data.map((item) => {
                  return <ProductCard key={item.slug} product={item} />;
                })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}