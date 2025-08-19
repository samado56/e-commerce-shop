import { useNavigate } from "react-router";
import { useState } from "react";

import Footer from "../component/Footer";

//icons
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

//modals
import EmptyCartModal from "../models/EmptyCartModal";

//context
import { useCart } from "../context/Cart/CartContext";

//vector
import emptyCart from '../assets/imgs/empty-cart.png'

export default function Cart() {
  const navigate = useNavigate();
  const [cupon, setCupon] = useState(false);
  const [emptyCartModal, setEmptyCartModal] = useState(false)
  // const [quantity, setQuantity] = useState(1);

  const {
    loader,
    cartItems,
    totalAmount,
    updateItemInCart,
    deleteItemFromCart,
    clearCart,
  } = useCart();

  const handleQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      return;
    }
    updateItemInCart(productId, quantity);
  };

  const handleDeleteItem = (productId) => {
    deleteItemFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  if (loader) {
    return <h1>Loading...</h1>;
  }

  const handleNaivgate = () => {
    !cartItems.length > 0? 
      setEmptyCartModal(true):
    navigate("/checkout");
  };

  return (
    <>
      <EmptyCartModal
        showModal={emptyCartModal}
        closeModal={() => setEmptyCartModal(false)}
      />

      <div className="py-[88px]">
        <div className="container">
          <h1 className="text-4xl font-bold mt-10">Shopping Bag</h1>
          <div className="mt-10 flex flex-col justify-between md:flex-row items-start gap-10">
            <div className="">
              <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(120px,_1fr)_60px]  bg-gray-300/20 p-2 text-sm md:text-lg font-medium">
                <h4>PRODUCT</h4>
                <h4> QUANTITY</h4>
                <h4>PRICE</h4>
                <h4
                  className="text-red-500 cursor-pointer"
                  onClick={handleClearCart}
                >
                  Clear
                </h4>
              </div>

              <div className="shopping-items">
                {cartItems && cartItems.length ? (
                  cartItems.map(({ product, quantity }, index) => (
                    <div
                      key={index}
                      className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 "
                    >
                      <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                        <img
                          src={`data:image/webp;base64,${product?.thumbnail}`}
                          className="w-[40px] md:w-[80px]"
                        />

                        <div className="text-sm">
                          <h4>{product?.title}</h4>
                          <p>Color. Blue, Size: M</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <FaMinus
                          size={20}
                          className="cursor-pointer"
                          onClick={() =>
                            handleQuantity(product._id, quantity - 1)
                          }
                        />
                        <div className=" ">
                          <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                            {quantity}
                          </span>
                        </div>
                        <FaPlus
                          size={20}
                          className="cursor-pointer"
                          onClick={() =>
                            handleQuantity(product._id, quantity + 1)
                          }
                        />
                      </div>
                      <div className=" my-auto ml-2 ">
                        <span>${product?.price}</span>
                      </div>
                      <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                        <MdDelete
                          onClick={() => handleDeleteItem(product._id)}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  // <h1>No items to show</h1>
                  <img src={emptyCart} className="opacity-40 mx-auto" />
                )}
              </div>
            </div>
            <div className="w-full md:min-w-[350px] shadow-sm shadow-black/20 p-6 rounded-md">
              <h2 className="text-2xl font-medium mb-4">Order Summary</h2>
              <ul className="border-b-1 border-gray-600/20 py-2">
                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Subtotal</span>
                  <span>${totalAmount?.toFixed(2)}</span>
                </li>
                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Tax</span>
                  <span>$9.99</span>
                </li>
                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Subtotal</span>
                  <span>$131.00</span>
                </li>
              </ul>
              <div className="py-5 text-xl font-bold flex justify-between items-center">
                <span>Total</span>
                <span>
                  $
                  {totalAmount === 0
                    ? totalAmount
                    : Number(totalAmount + 9.99).toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleNaivgate}
                className="text-white text-lg font-medium rounded-md bg-black  py-2 my-3 w-full cursor-pointer"
              >
                Proced to Checkout
              </button>

              {cupon ? (
                <div>
                  <input
                    type="text"
                    id="cupon"
                    name="cupon"
                    placeholder="cupon code"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
              ) : (
                <div className="text-center text-sm text-gray-600">
                  Have a dicount code?{" "}
                  <span
                    onClick={() => setCupon(!cupon)}
                    className="font-medium text-black hover:underline cursor-pointer"
                  >
                    Enter it here
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
