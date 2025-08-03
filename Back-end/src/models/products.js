import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: false },
  images: [String],
  thumbnail: [String],
  price: { type: Number, required: false },
  stock: { type: Number, required: false, default: 10 },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;
