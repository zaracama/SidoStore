import * as jose from "jose";
import { Payload, User } from "../type/user";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const alg = "HS256";

export async function signToken(user: User) {
  const jwt = await new jose.SignJWT({
    id: user._id,
    email: user.email,
    username: user.username,
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .sign(secret);

  return jwt;
}

export async function verifyToken(jwt: string) {
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret);
  return payload as Payload;
}
