import { z } from "zod";

export const UserInputSchema = z.object({
  name: z.string().optional(),
  username: z.string({ required_error: "Username is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(5, { message: "Password must be 5 or more characters long" }),
});

export const LoginSchema = z.object({
  email: z.string({ required_error: "Email is required" }),
  password: z.string({ required_error: "Password is required" }),
});
