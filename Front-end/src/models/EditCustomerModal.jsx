import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { CiSaveUp2 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

export default function EditCustomerModal({ closeModal, showModal }) {
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
        <div className="fixed top-0 left-0 bg-black/40 w-full h-full flex items-center justify-center">
          <div
            ref={modalRef}
            className="relative w-[800px]   rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4">
                <PiUserBold size={30} />
                <div>
                  <h1 className="text-2xl font-bold">
                    Edit Customer - Jhon Doe{" "}
                  </h1>
                  <p className="text-sm text0gray-500 font-medium">
                    Customer ID: 12546{" "}
                  </p>
                </div>
              </div>

              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="h-[60vh] overflow-auto">
              <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
                <h2 className="text-xl font-bold mb-4">Customer Information</h2>
                <form className="space-y-5">
                  <div className="flex items-center gap-6  w-full ">
                    <div className="w-1/2">
                      <label
                        htmlFor="customer-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="customer-name"
                        name="customer-name"
                        placeholder="Jhon Doe"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Customer Phone
                      </label>
                      <input
                        type="phone"
                        id="phone"
                        name="phone"
                        placeholder="+1(555)-1234-123"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Email
                    </label>
                    <input
                      type="email"
                      id="date"
                      name="date"
                      placeholder="jhon.doe@mail.com"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </form>
              </div>

              <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
                <h2 className="text-xl font-bold mb-4">BIlling Address</h2>
                <form className="space-y-5">
                  <div className="w-full">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      placeholder="Jhon Doe"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="address-1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 1
                    </label>
                    <input
                      type="address"
                      id="address-1"
                      name="address-1"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="address-1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 2{" "}
                      <span className="text-gray-400"> (optinal)</span>
                    </label>
                    <input
                      type="address"
                      id="address-1"
                      name="address-1"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="flex items-center gap-6  w-full ">
                    <div className="w-1/2">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="e.g. New york"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Zip Code
                      </label>

                      <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="154622"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>
                  <div className="w-full ">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>

                    <input
                      type="text"
                      id="date"
                      name="date"
                      placeholder="United State"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </form>
              </div>
              <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <form className="space-y-5">
                  <div className="w-full">
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      placeholder="Jhon Doe"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="address-1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 1
                    </label>
                    <input
                      type="address"
                      id="address-1"
                      name="address-1"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="address-1"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address Line 2{" "}
                      <span className="text-gray-400"> (optinal)</span>
                    </label>
                    <input
                      type="address"
                      id="address-1"
                      name="address-1"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>

                  <div className="flex items-center gap-6  w-full ">
                    <div className="w-1/2">
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="e.g. New york"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Zip Code
                      </label>

                      <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="154622"
                        className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                      />
                    </div>
                  </div>
                  <div className="w-full ">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>

                    <input
                      type="text"
                      id="date"
                      name="date"
                      placeholder="United State"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="flex items-center  gap-4 justify-between border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md text-red-600  cursor-pointer"
              >
                <AiOutlineDelete size={20} />
                Delete Customer
              </button>
              <div className="flex items-center  gap-4 ">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20  cursor-pointer"
                >
                  <MdOutlineCancel size={20} />
                  Cancel
                </button>
                <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer">
                  <CiSaveUp2 size={20} />
                  Update Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
