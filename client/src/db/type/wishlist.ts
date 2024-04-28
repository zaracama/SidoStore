import { ObjectId } from "mongodb";

export type WishList = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export type InputWishList = {
  userId: ObjectId;
  productId: ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ListWishList = {
  _id: string;
  product: Product;
};

export type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
};
