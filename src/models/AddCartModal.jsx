import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { BsShieldFillCheck } from "react-icons/bs";
import Switcher from "../component/Switcher";

export default function AddCartModal({ showModal, closeModal }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);
  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 bg-black/40 w-full h-full  flex items-center justify-center">
          <div
            ref={modalRef}
            className="relative w-[500px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Payements Details</h1>
              <IoMdLock size={30} />
            </div>
            <div>
              <div className="mt-4 flex-1/2">
                <label
                  for="cardholder"
                  class="block text-sm font-medium text-gray-700"
                >
                  Card Holder Mame
                </label>
                <input
                  type="text"
                  id="cardholder"
                  name="cardholder"
                  placeholder="John Doe"
                  class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                />
              </div>
              <div className="mt-4 flex-1/2">
                <label
                  for="cardnumber"
                  class="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardnumber"
                  name="cardnumber"
                  placeholder="1245 4521 1211 1213"
                  class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                />
              </div>
              <div className="flex items-center gap-8">
                <div className="mt-4 flex-1/2">
                  <label
                    for="expiration-date"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    id="expiration-date"
                    name="expiration-date"
                    placeholder="MM/YY"
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                  />
                </div>
                <div className="mt-4 flex-1/2">
                  <label
                    for="cvv"
                    class="block text-sm font-medium text-gray-700"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center  gap-4 mt-4  text-gray-500">
              <Switcher />
              <p className="text-md font-medium ">Save card for future use</p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={closeModal}
                className="text-lg font-semibold py-2 px-3 border-2 border-gray-400/20 rounded-md cursor-pointer"
              >
                Cancel
              </button>
              <button className="text-lg font-semibold py-2 px-3 border-2 border-gray-400/20 rounded-md bg-black text-white cursor-pointer">
                Save
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4 text-md font-[500] text-gray-600">
              <BsShieldFillCheck />

              <p>Your payment information is encrypted and secure.</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
