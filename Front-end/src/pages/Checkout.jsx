import { useState } from "react";
import Footer from "../component/Footer";


import { useNavigate } from "react-router";
import { UseAuth } from "../context/Auth/AuthCntext";
import { useCart } from "../context/Cart/CartContext";

export default function Checkout() {
  const paymentMethod = ["Credit Card", "PayPal", "Apple Pay"];
  const [method, setMethod] = useState("Credit Card");
  const [sameShippingInfo, setSameShippingInfo] = useState(false);

  const navigate = useNavigate();

  const { loader, cartItems, totalAmount } = useCart();
  const [adress, setAdress] = useState();

  const { token } = UseAuth();


  const handleConfirmOrder = async () => {
    if (!adress) return;

    try {
      const url = "http://localhost:5000/cart/checkout";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          adress,
        }),
      });

      const order = await res.json();

      if (res.ok) {
        console.log("my order", order);
        // clearCart();
        navigate("/succes");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loader) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="py-[88px] md:pt-[61px]">
        <div className="container">
          <div className="bg-gray-400/10 px-4 py-2 my-6 text-xl font-medium  rounded-xl">
            Cart / checkout
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="shipping-info p-4 flex-1/2 bg-gray-300/10">
              {/* ================ shipping info =============== */}
              <h1 className="text-2xl font-medium">Shipping Information</h1>
              <div className="mt-5">
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your fullname"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="adresss"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="adress"
                  id="address"
                  name="address"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  placeholder="Enter your adress"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                />
              </div>
              <div className="flex items-center gap-5 py-8 w-full">
                <div className="flex-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter your city"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="zipcode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipcode"
                      name="zipcode"
                      placeholder="Enter your zip code"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>
                </div>

                <div className="flex-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Enter your state"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>
                </div>
              </div>
              {/* ================ billing info =============== */}
              <h1 className="text-2xl font-medium mb-4">Billing Information</h1>
              <div className="flex items-center gap-2 py-2 mb-2">
                <input
                  type="checkbox"
                  checked={sameShippingInfo}
                  onChange={(e) => setSameShippingInfo(e.target.checked)}
                />
                <span className="text-gray-700 font-[400] ">
                  Same as Shipping information
                </span>
              </div>
              {!sameShippingInfo ? (
                <>
                  <div className="mt-5">
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter your fullname"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>
                  <div className="mt-5">
                    <label
                      htmlFor="adresss"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="adress"
                      id="address"
                      name="address"
                      placeholder="Enter your adress"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>
                  <div className="flex items-start gap-5 py-8 w-full">
                    <div className="flex-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="Enter your city"
                          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                        />
                      </div>{" "}
                      <div>
                        <label
                          htmlFor="zipcode"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipcode"
                          name="zipcode"
                          placeholder="Enter your zip code"
                          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                        />
                      </div>
                    </div>

                    <div className="flex-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="Enter your state"
                          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                        />
                      </div>{" "}
                    </div>
                  </div>
                </>
              ) : null}

              {/* ================ payment methode =============== */}
              <h1 className="text-2xl font-medium mb-4">Payment Method</h1>
              <ul className="py-4 flex items-center gap-2">
                {paymentMethod.map((methods) => (
                  <li
                    key={methods}
                    className="px-3 py-2 border-1 border-gray-400/40 text-lg md:text-xl font-[400] rounded-lg w-fit cursor-pointer"
                    style={{
                      border: method === methods ? "2px solid black" : null,
                      fontWeight: method === methods ? "500" : null,
                    }}
                    onClick={() => setMethod(methods)}
                  >
                    {methods}
                  </li>
                ))}
              </ul>

              {method === "PayPal" ? (
                <div className="mt-5">
                  <label
                    htmlFor="paypal"
                    className="block text-sm font-medium text-gray-700"
                  >
                    PayPal
                  </label>
                  <input
                    type="text"
                    id="paypal"
                    name="paypal"
                    placeholder="Enter your  paypal"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                  />
                </div>
              ) : method === "Apple Pay" ? (
                <div className="mt-5">
                  <label
                    htmlFor="apple pay"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apple Pay
                  </label>
                  <input
                    type="text"
                    id="apple pay"
                    name="apple pay"
                    placeholder="Enter your apple pay"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                  />
                </div>
              ) : (
                <>
                  <div className="mt-5">
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter your  card number"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                    />
                  </div>
                  <div className="flex items-start gap-5 py-4 w-full">
                    <div className="flex-1/2">
                      <div className="mb-2">
                        <label
                          htmlFor="expiration"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          id="expiration"
                          name="expiration"
                          placeholder="MM / YY"
                          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                        />
                      </div>{" "}
                    </div>

                    <div className="flex-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-3  focus:border-black focus:ring-black bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="min-w-[300px] md:min-w-[400px]">
              <div className="order-summary  rounded-lg p-6 shadow-md shadow-black/20">
                <h1 className="text-2xl font-medium">Order Summary</h1>
                <ul className="py-4 border-b-2 border-gray-400/20">
                  {cartItems.map(({ product, unitPrice }, index) => (
                    <li key={index} className="py-2 flex items-center gap-3">
                      <img
                        src={`data:image/webp;base64,${product.thumbnail}`}
                        className="w-[60px] rounded-md"
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
                <ul className="border-b-1 border-gray-600/20 py-2">
                  <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                    <span>Subtotal</span>
                    <span>${Number(totalAmount).toFixed(2)}</span>
                  </li>
                  <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                    <span>Tax</span>
                    <span>$9.99</span>
                  </li>
                  <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                    <span>Subtotal</span>
                    <span>${Number(totalAmount).toFixed(2)}</span>
                  </li>
                </ul>
                <div className="py-2 text-xl font-bold flex justify-between items-center">
                  <span>Total</span>
                  <span>
                    <span>${Number(totalAmount).toFixed(2)}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={handleConfirmOrder}
                className="bg-black text-white text-xl text-center font-medium py-3 rounded-lg w-full mt-4 shadow-sm shadow-black/20 cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
