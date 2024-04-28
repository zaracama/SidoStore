import { ObjectId } from "mongodb";
import { getCollection } from "../config";
import { Product, ProductSample } from "../type/product";

class ProductModel {
  static getCollettion() {
    return getCollection("products");
  }
  static async getAll(params: { page: string | null; search: string | null }) {
    const limit = 5;
    const skip =
      Number(params.page) > 1 ? (Number(params.page) - 1) * limit : 0;

    const count = await this.getCollettion().countDocuments();
    const searchName = params.search ? params.search : "";

    const data = (await this.getCollettion()
      .aggregate([
        {
          $match: {
            name: {
              $regex: searchName,
              $options: "i",
            },
          },
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
        {
          $project: {
            _id: 1,
            name: 1,
            excerpt: 1,
            slug: 1,
            image: 1,
          },
        },
      ])
      .toArray()) as ProductSample[];

    return { data, count };
  }
  static async getSamples() {
    return (await this.getCollettion()
      .aggregate([
        {
          $sample: {
            size: 5,
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            excerpt: 1,
            slug: 1,
            image: 1,
            price: 1,
          },
        },
      ])
      .toArray()) as ProductSample[];
  }
  static async getBySlug(slug: string) {
    return (await this.getCollettion().findOne({ slug })) as Product;
  }
  static async getById(_id: ObjectId) {
    return (await this.getCollettion().findOne({ _id })) as Product;
  }
  static async getByCategory(categoryInput: string) {
    return (await this.getCollettion()
      .aggregate([
        {
          $match: {
            category: categoryInput,
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            excerpt: 1,
            slug: 1,
            image: 1,
            price: 1,
          },
        },
      ])
      .toArray()) as ProductSample[];
  }
}

export default ProductModel;
