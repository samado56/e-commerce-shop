import mongoose from "mongoose";

const { Schema } = mongoose;

const orderItemSchema = new Schema({
  productTitle: { type: String, required: true },
  productImage: { type: Array, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new Schema({
  orderItems: [orderItemSchema],
  total: { type: Number, required: true },
  adress: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
