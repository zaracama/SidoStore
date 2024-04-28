import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { InputWishList, ListWishList } from "../type/wishlist";
import ProductModel from "./product";
import UserModel from "./user";

class WishListModel {
  static getCollection() {
    return getCollection("wishlists");
  }

  static async addWishList(input: InputWishList) {
    input.createdAt = input.updatedAt = new Date();
    input.productId = new ObjectId(input.productId);
    input.userId = new ObjectId(input.userId);

    const product = await ProductModel.getById(input.productId);
    if (!product) {
      throw new Error(`Product not Found`);
    }
    const user = await UserModel.getById(input.userId);
    if (!user) {
      throw new Error(`User not Found`);
    }
    return await this.getCollection().insertOne(input);
  }

  static async listWishList(id: string) {
    return (await this.getCollection()
      .aggregate([
        {
          $match: {
            userId: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "product",
          },
        },
        {
          $unwind: {
            path: "$product",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 1,
            "product.name": 1,
            "product._id": 1,
            "product.image": 1,
            "product.price": 1,
          },
        },
      ])
      .toArray()) as ListWishList[];
  }

  static async deleteWish(id: string) {
    const _id = new ObjectId(id);
    await this.getCollection().deleteOne({ _id });
  }
}

export default WishListModel;
