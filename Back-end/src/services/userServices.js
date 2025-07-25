import { userModel } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import orderModel from "../models/order.js";

export const register = async ({ firstName, lastName, email, password }) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "user already exists !", statusCode: 400 };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  return { data: generateJWT({ firstName, lastName, email }), statusCode: 200 };
};

export const login = async ({ email, password }) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { data: "incorect email or passwor !", statusCode: 400 };
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password);

  if (passwordMatch) {
    return {
      data: generateJWT({
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        email,
      }),
      statusCode: 201,
    };
  }

  return { data: "incorect email or passwor !", statusCode: 400 };
};

export const getOrdersForUSer = async ({ userId }) => {
  try {
    const orders = await orderModel.find({ userId });
    return { data: orders, statusCode: 200 };
  } catch {
    return { data: "somethinf went wrong!", statusCode: 500 };
  }
};

const generateJWT = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET);
};
