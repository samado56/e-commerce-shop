import { useNavigate } from "react-router";
import avt from "../assets/imgs/r-avt2.jpg";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function Cart() {
  const navigate = useNavigate();
  const [cupon, setCupon] = useState(false);
  return (
    <>
      <div className="pt-[61px]">
        <div className="container">
          <h1 className="text-4xl font-bold mt-10">Shopping Bag</h1>
          <div className="mt-10 flex flex-col justify-between md:flex-row items-start gap-10">
            <div className="">
              <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px]  bg-gray-300/20 p-2 text-sm md:text-lg font-medium">
                <h4>PRODUCT</h4>
                <h4>QUANTITY</h4>
                <h4 className="mx-auto pl-2">PRICE</h4>
              </div>

              <div className="shopping-items">
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>{" "}
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>{" "}
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>{" "}
                <div className="wraperr grid grid-cols-[minmax(180px,_1fr)_minmax(60px,_1fr)_minmax(50px,_1fr)_40px] md:grid-cols-[minmax(300px,_1fr)_minmax(200px,_1fr)_minmax(100px,_1fr)_100px] py-2 md:py-4 border-b-1 border-gray-400/20 ">
                  <div className="flex items-center gap-2 md:gap-4 pl-2 ">
                    <img src={avt} className="w-[40px] md:w-[80px]" />
                    <div className="text-sm">
                      <h4>Floral Print Summer Dress</h4>
                      <p>Color. Blue, Size: M</p>
                    </div>
                  </div>
                  <div className=" mx-auto my-auto">
                    <span className="border-2 border-gray-400/40 rounded-lg py-1 md:py-3 px-3 md:px-6 text-lg font-medium">
                      1
                    </span>
                  </div>
                  <div className=" my-auto mx-auto ">
                    <span>$65.00</span>
                  </div>
                  <div className="mx-auto  my-auto cursor-pointer text-lg md:text-4xl">
                    <MdDelete />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:min-w-[350px] shadow-sm shadow-black/20 p-6 rounded-md">
              <h2 className="text-2xl font-medium mb-4">Order Summary</h2>
              <ul className="border-b-1 border-gray-600/20 py-2">
                <li className="flex items-center justify-between text-lg font-medium text-gray-400 mb-2">
                  <span>Subtotal</span>
                  <span>$125.00</span>
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
                <span>$140.00</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
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
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
              ) : (
                <div class="text-center text-sm text-gray-600">
                  Have a dicount code?{" "}
                  <span
                    onClick={() => setCupon(!cupon)}
                    class="font-medium text-black hover:underline cursor-pointer"
                  >
                    Enter it here
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
