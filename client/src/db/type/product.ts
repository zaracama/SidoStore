import { ObjectId } from "mongodb";

export type Product = {
  _id: ObjectId;
  name: string;
  excerpt: string;
  slug: string;
  size: number;
  description: string[];
  heroIngredients: HeroIngredient[];
  fullIngredients: string;
  price: number;
  category: string;
  image: string;
};

export type HeroIngredient = {
  heroName: string;
  heroDesc: string;
};

export type ProductSample = {
  _id: ObjectId;
  name: string;
  excerpt: string;
  slug: string;
  image: string;
  price: number;
};
