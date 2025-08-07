import cartModel from "../models/cart.js";
import orderModel from "../models/order.js";
import productModel from "../models/products.js";

const creatCartForUSer = async ({ userId }) => {
  const cart = await cartModel.create({ userId, totalAmount: 0 });
  await cart.save();

  return cart;
};

export const getActiveCartForUser = async ({ userId, pop }) => {
  let cart;

  if (pop) {
    cart = await cartModel
      .findOne({ userId, status: "active" })
      .populate("item.product");
  } else {
    cart = await cartModel.findOne({ userId, status: "active" });
  }

  if (!cart) {
    cart = await creatCartForUSer({ userId });
  }

  return cart;
};

const calculatTotalItems = ({ cart }) => {
  let total = cart.item.reduce((sum, product) => {
    sum += product.quantity * product.unitPrice;
    return sum;
  }, 0);

  return total;
};

//clear cart

export const clearCart = async ({ userId }) => {
  const cart = await getActiveCartForUser({ userId });
  cart.item = [];
  cart.totalAmount = 0;

  const clearedCart = await cart.save();
  return { data: clearedCart, statusCode: 200 };
};

export const addItemToCart = async ({ userId, productId, quantity }) => {
  const cart = await getActiveCartForUser({ userId });

  //does the item exist in cart?
  const existsInCart = cart.item.find(
    (p) => p.product.toString() === productId
  );

  const product = await productModel.findById(productId);

  if (existsInCart) {
    return { data: "Item already exists in cart!", statusCode: 400 };
  }

  if (!product) {
    return { data: "Product not found!", statusCode: 400 };
  }

  if (product.stock < quantity) {
    return { data: "low stock for item", statusCode: 400 };
  }

  cart.item.push({ product: productId, unitPrice: product.price, quantity });

  cart.totalAmount += product.price * quantity;

  await cart.save();

  return {
    data: await getActiveCartForUser({ userId, pop: true }),
    statusCode: 201,
  };
};

export const updateItems = async ({ userId, productId, quantity }) => {
  const cart = await getActiveCartForUser({ userId });

  //does the item exist in cart?
  const existsInCart = cart.item.find(
    (p) => p.product.toString() === productId
  );

  if (!existsInCart) {
    return { data: "Item does not  exists in cart!", statusCode: 400 };
  }

  const product = await productModel.findById(productId);

  if (!product) {
    return { data: "Product not found!", statusCode: 400 };
  }

  if (product.stock < quantity) {
    return { data: "low stock for item", statusCode: 400 };
  }

  const totalitems = cart.item.filter(
    (p) => p.product.toString() !== productId
  );

  existsInCart.quantity = quantity;

  //calcult total item utility
  let total = calculatTotalItems({ cart, productId });

  // total = existsInCart.quantity * existsInCart.unitPrice;

  cart.totalAmount = total;

  await cart.save();

  return {
    data: await getActiveCartForUser({ userId, pop: true }),
    statusCode: 201,
  };
};

export const deleteItemFromCart = async ({ userId, id }) => {
  const cart = await getActiveCartForUser({ userId });

  //does the item exist in cart?
  const existsInCart = cart.item.find((p) => p.product.toString() === id);

  if (!existsInCart) {
    return { data: "Item does not  exists in cart!", statusCode: 400 };
  }

  const newCart = cart.item.filter((p) => p.product.toString() !== id);

  //calcult total item utility
  const total = calculatTotalItems({ cart, id });

  cart.totalAmount = total - existsInCart.unitPrice * existsInCart.quantity;

  cart.item = newCart;

  console.log(existsInCart);

  await cart.save();

  return {
    data: await getActiveCartForUser({ userId, pop: true }),
    statusCode: 201,
  };
};

export const checkout = async ({ userId, adress }) => {
  if (!adress) {
    return { data: "please provide the address!", statusCode: 400 };
  }

  const cart = await getActiveCartForUser({ userId });

    if (!cart || Object.keys(cart).length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const orderDetails = [];

    for (const item of cart.item) {
      const product = await productModel.findById(item.product);
      if (!product) {
        console.log("Product not found:", item.product);
        continue;
      }

      const orderItem = {
        productTitle: product.title,
        productImage: product.thumbnail,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      };

      if (!orderItem) {
        console.log("no order items!");
      }

      orderDetails.push(orderItem);
    }

    if (orderDetails.length === 0) {
      return { data: "No valid items in cart!", statusCode: 400 };
    }

    let order;
    try {
      order = await orderModel.create({
        orderItems: orderDetails,
        total: cart.totalAmount,
        adress,
        userId,
      });
    } catch (err) {
      console.error("Order creation failed:", err);
      throw new Error("Order creation failed");
    }

  cart.status = "completed";
  await cart.save();

  return { data: order, statusCode: 201 };
};
