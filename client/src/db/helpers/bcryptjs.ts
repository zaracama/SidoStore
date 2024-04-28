import bcryptjs from "bcryptjs";

export function hashPassword(password: string) {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
}

export function comparePassword(password: string, hash: string) {
  return bcryptjs.compareSync(password, hash);
}
