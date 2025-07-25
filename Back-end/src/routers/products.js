import express from "express";

import { getAllProduct, getOneProduct } from "../services/productServeice.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const findProduct = await getAllProduct();

  res.status(200).send(findProduct);
});

// ✅ Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await getOneProduct(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
});

export default router;
