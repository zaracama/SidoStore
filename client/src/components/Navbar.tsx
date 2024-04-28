"use client";
import { logout } from "@/actions/user";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false);
  const cookie = getCookie("Authorization");

  const path = usePathname();

  function activeNav(linkPath: string) {
    let classNames = `hover:text-sky-400`;

    if (linkPath === path) {
      classNames = `text-sky-400`;
    }
    return classNames;
  }

  function handleLogout() {
    setIsLogged(false);
    logout();
  }

  useEffect(() => {
    if (cookie) {
      setIsLogged(true);
    }
  }, [path]);
  return (
    <div
      id="Navbar"
      className="z-50 flex sticky top-0  p-2 px-5 flex-row justify-between items-center bg-gray-950 text-zinc-50 font-assistant"
    >
      <div className="w-1/3 justify-start text-5xl">
        <Image
          className="w-1/2"
          src="/logo.png"
          width={250}
          height={100}
          alt="Logo"
          priority={true}
        />
      </div>
      <div className={"flex w-1/3 justify-around text-l"}>
        <div className={activeNav("/")}>
          <Link href={"/"}>Home</Link>
        </div>
        <div className={activeNav("/products")}>
          <Link href={"/products"}>Product</Link>
        </div>
      </div>
      <div className="flex gap-10 w-1/3 justify-end text-l">
        {isLogged ? (
          <>
            <Link href={"/wishlist"}>
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        ) : (
          <>
            <Link href={"/users/login"}>Login</Link>
            <Link href={"/users/register"}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
