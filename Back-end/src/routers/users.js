import express from "express";
import validateJWt from "../midelllwares/validateJWT.js";
import { register, login, getOrdersForUSer } from "../services/userServices.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { statusCode, data } = await register({
    firstName,
    lastName,
    email,
    password,
  });

  res.status(statusCode).json(data);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { statusCode, data } = await login({
    email,
    password,
  });

  res.status(statusCode).json(data);
});

router.get("/my-orders", validateJWt, async (req, res) => {
  try {
    const userId = req.user._id;
    //get active cart for user
    const orders = await getOrdersForUSer({ userId });
    res.status(orders.statusCode).send(orders.data);
  } catch (err) {
    res.status(500).send("somthing went wrong !");
  }
});

export default router;
