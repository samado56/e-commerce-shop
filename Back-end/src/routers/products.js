import express from "express";

import {
  deleteProduct,
  getAllProduct,
  getOneProduct,
  listProduct,
} from "../services/productServeice.js";

import multer from "multer";

const router = express.Router();

// Set up destination and filename
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // folder where images are stored
//   },
//   filename: function (req, file, cb) {
//     const uniqueName = file.originalname;
//     cb(null, uniqueName);
//   },
// });

const upload = multer();

router.get("/", async (req, res) => {
  const findProduct = await getAllProduct();

  res.status(200).send(findProduct);
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await getOneProduct(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.status(200).json(product);
  } catch (err) {
    res.status(400).send("Invalid ID");
  }
});

//multer midlware
// const uploadMidlware =
//post product
router.post(
  "/",
  upload.fields([
    { name: "images", maxCount: 5 },
    { name: "thumbnail", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const images = req.files.images.map((file) =>
        file.buffer.toString("base64")
      );
      const thumbnail = req.files.thumbnail?.[0]?.buffer.toString("base64");

      if (!req.files || !req.files.images) {
        return res.status(400).json({ message: "No images uploaded" });
      }
      const { title, price, stock } = req.body;

      const { statusCode, data } = await listProduct({
        title,
        price,
        stock,
        thumbnail,
        images,
      });

      res.status(statusCode).send(data);
    } catch (err) {
      console.log("upload error", err);
      res.status(500).json({ message: "Internal server error", err });
    }
  }
);

//delete product
router.delete("/:id", async (req, res) => {

  const { id } = req.params;
  const { statusCode, data } = await deleteProduct({ id });

  res.status(statusCode).json(data);
});

export default router;
