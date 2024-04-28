"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function addUser(formData: FormData) {
  const userInput = {
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch(
    "https://sidomuncul.vercel.app/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  await res.json();
  redirect(`/login`);
}

export async function login(formData: FormData) {
  const userInput = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const res = await fetch(
    "https://sidomuncul.vercel.app/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { access_token } = await res.json();

  cookies().set("Authorization", `Bearer ${access_token}`);

  redirect(`/`);
}

export async function logout() {
  cookies().delete("Authorization");
  redirect("/users/login");
}
