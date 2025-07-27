import Footer from "../component/Footer";

import { useCart } from "../context/Cart/CartContext";

export default function OrderDetails() {
  const { loader, cartItems, totalAmount } = useCart();

  if (loader) {
    <h1>Loadint...</h1>;
  }
  return (
    <>
      <div className="py-[88px] ">
        <div className="container ">
          <div className=" px-[100px]">
            <div className="text-lg font-medium text-gray-400">
              Home / Orders / <span className="text-black">Order#12345</span>
            </div>
            <div className="flex items-center justify-between mt-6 ">
              <div>
                <h1 className="text-4xl font-bold">Order #123456</h1>
                <p className="text-lg text-gray-400">Placed on July 20, 2024</p>
              </div>
              <span className="bg-green-500/10 py-1 px-3 text-green-800 font-[500] rounded-2xl">
                Delivered
              </span>
            </div>
            <div className="flex items-center gap-[300px] mt-6">
              <div>
                <h2 className="text-xl font-medium mb-4">Shipping Adress</h2>
                <ul className="text-gray-400 text-lg font-medium">
                  <li>Sophia Carter</li>
                  <li>123 Main Street</li>
                  <li>Anytown, CA 91234</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-4">Shipping Adress</h2>
                <ul className="text-gray-400 text-lg font-medium">
                  <li>Sophia Carter</li>
                  <li>123 Main Street</li>
                  <li>Anytown, CA 91234</li>
                </ul>
              </div>
            </div>
            <div className="items">
              <h4 className="text-2xl font-medium mt-4 mb-2  ">Items</h4>
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
            <div className="w-full md:min-w-[350px] shadow-sm shadow-black/20 p-6 rounded-md">
              <h2 className="text-2xl font-medium mb-4">Payment Summary</h2>
              <ul className="border-b-1 border-gray-600/20 py-2">
                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Payment Method:</span>
                  <span>Credit Card</span>
                </li>

                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Subtotal:</span>
                  <span>${totalAmount}</span>
                </li>
                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Shipping:</span>
                  <span>Free</span>
                </li>
              </ul>
              <div className="py-5 text-xl font-bold flex justify-between items-center">
                <span>Total</span>
                <span>${totalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
