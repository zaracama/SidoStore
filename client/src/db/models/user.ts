import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { comparePassword, hashPassword } from "../helpers/bcryptjs";
import { signToken, verifyToken } from "../helpers/jose";
import { LoginSchema, UserInputSchema } from "../schema/user";
import { LoginInput, User, UserInput } from "../type/user";

class UserModel {
  static getColllettion() {
    return getCollection("users");
  }

  static async getByUsername(username: string) {
    return await this.getColllettion().findOne({ username });
  }

  static async getById(_id: ObjectId) {
    return await this.getColllettion().findOne({ _id });
  }

  static async getByEmail(email: string) {
    return (await this.getColllettion().findOne({ email })) as User;
  }

  static async register(input: UserInput) {
    const invalidEmail = await this.getByEmail(input.email);

    if (invalidEmail) {
      throw new Error("Email is already registered");
    }

    const invalidUsername = await this.getByUsername(input.username);

    if (invalidUsername) {
      throw new Error("Username is already been used");
    }

    const validate = UserInputSchema.safeParse(input);

    if (!validate.success) {
      throw validate.error;
    }

    input.password = hashPassword(input.password);
    return await this.getColllettion().insertOne(input);
  }

  static async login(input: LoginInput) {
    const validate = LoginSchema.safeParse(input);

    if (!validate.success) {
      throw validate.error;
    }

    const user = await this.getByEmail(input.email);
    if (!user) {
      throw new Error(`Email / Password is Invalid`);
    }

    const validPass = comparePassword(input.password, user.password);

    if (!validPass) {
      throw new Error(`Email / Password is Invalid`);
    }

    const token = await signToken(user);

    return token;
  }
}

export default UserModel;
