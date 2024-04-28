import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function ProtectedComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("Authorization");
  if (!token) {
    redirect("/users/login");
  }

  return children;
}
