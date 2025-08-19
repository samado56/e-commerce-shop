import orderModel from "../models/order.js";



export const getAllOrders = async () => {
    return await orderModel.find()
}