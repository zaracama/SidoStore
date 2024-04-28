import { ObjectId } from "mongodb";

export type User = {
  name?: string;
  _id: ObjectId;
  username: string;
  email: string;
  password: string;
};

export type UserInput = {
  name?: string;
  username: string;
  email: string;
  password: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type Payload = {
  id: string;
  email: string;
  username: string;
};
