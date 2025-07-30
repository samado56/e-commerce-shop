import express from "express";

import {
  deleteProduct,
  getAllProduct,
  getOneProduct,
  listProduct,
} from "../services/productServeice.js";

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

//post product
router.post("/", async (req, res) => {
  const { title, price, stock, image } = req.body;

  const { statusCode, data } = await listProduct({
    title,
    price,
    stock,
    image,
  });

  res.status(statusCode).send(data);
});

//delete product

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { statusCode, data } = await deleteProduct({ id });

  res.status(statusCode).send(data);
});



export default router;
