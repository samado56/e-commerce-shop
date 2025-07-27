import { useNavigate } from "react-router";
import Footer from "../component/Footer";

//icons
import { FaRegCheckCircle } from "react-icons/fa";

import { useCart } from "../context/Cart/CartContext";

export default function SuccedOrder() {
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useCart();

  return (
    <>
      <div className="pt-[88px]">
        <div className="container">
          <div className="succes w-full md:w-[70vw] md:mx-auto rounded-md shadow-md shadow-black/10 p-6 my-10">
            <FaRegCheckCircle
              size={50}
              className="text-center text-green-500 mx-auto mb-4"
            />
            <h2 className="text-3xl md:text-4xl text-center font-medium mb-2">
              Thank you for your order!
            </h2>
            <p className="text:lg md:text-xl  text-center font-[400] text-gray-500 mb-5">
              Your order has been placed successfully. You'll receive an email
              confirmation shortly.
            </p>
            <div className="border-1 border-gray-400/40 rounded-md p-6 mt-9">
              <h4 className="text-2xl font-medium mb-4 ">Order Summary</h4>
              <ul>
                <li className="border-b-1 border-gray-400/40 py-4 flex items-center justify-between">
                  <span className="text-gray-500 ">Order Number</span>
                  <span className="text-gray-600 font-medium">#123456789</span>
                </li>
                <li className="border-b-1 border-gray-400/40 py-4 flex items-center justify-between">
                  <span className="text-gray-500 ">Estimated Delivery</span>
                  <span className="text-gray-600 font-medium">
                    July 20 - July 24, 2024
                  </span>
                </li>
              </ul>
              <div className="py-4 flex items-center justify-between">
                <span className="text-xl font-medium">Total Amount</span>
                <span className="text-xl font-medium">${totalAmount}</span>
              </div>
            </div>
            <div className="items">
              <h4 className="text-2xl font-medium mt-4 mb-2  ">
                Items Ordered
              </h4>
              <ul className="py-2  border-gray-400/20">
                {cartItems.map(({ product, unitPrice }) => (
                  <li className="p-4 px-6 flex items-center gap-3 border-1 border-gray-400/40 rounded-md  mb-4 ">
                    <img
                      src={product.image}
                      alt=""
                      className="w-[80px] rounded-md"
                    />
                    <div className="flex-1 ">
                      <span className="text-lg font-medium">
                        {product.title}
                      </span>
                      <span className="block font-[500] text-gray-500">
                        Size M
                      </span>
                    </div>
                    <p className="text-xl text-gray-500 font-medium">
                      ${unitPrice}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="actions flex justify-center items-center gap-3 ">
              <button
                onClick={() => navigate("/order-details")}
                className="bg-black text-white text-md md:text-xl text-center font-medium py-3 md:px-6 px-3  rounded-lg shadow-sm shadow-black/20 cursor-pointer"
              >
                Order Details
              </button>
              <button
                onClick={() => navigate("/Shopping")}
                className="bg-gray-400/20 text-md md:text-xl text-center font-medium py-3 md:px-6 px-3  rounded-lg   shadow-sm shadow-black/20 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
