import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { BsShieldFillCheck } from "react-icons/bs";
import Switcher from "../component/Switcher";
import { MdLocationPin } from "react-icons/md";

export default function AddAddressModal({ closeModal, showModal }) {
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
        <div className="fixed top-0 left-0 bg-black/40 w-full h-full pt-[88px] flex items-center justify-center">
          <div
            ref={modalRef}
            className="relative w-[500px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Add New Address</h1>
              <MdLocationPin size={30} />
            </div>
            <div className="mt-4 flex-1/2">
              <label
                for="fullname"
                class="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
              />
            </div>
            <div>
              <div className="mt-4 flex-1/2">
                <label
                  for="street"
                  class="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Enter your street address"
                  class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                />
              </div>

              <div className="flex items-center gap-8">
                <div className="mt-4 flex-1/2">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                  />
                </div>
                <div className="mt-4 flex-1/2">
                  <label
                    for="state"
                    class="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Enter your state or province"
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="mt-4 flex-1/2">
                  <label
                    for="zip"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Zip / Postal Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Enter your ZIP or postal code"
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                  />
                </div>
                <div className="mt-4 flex-1/2">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="country"
                    class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center  gap-4 mt-4  text-gray-500">
              <Switcher />
              <p className="text-md font-medium ">
                Save as default shipping address
              </p>
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
          </div>
        </div>
      ) : null}
    </>
  );
}
