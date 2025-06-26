import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { VscPackage } from "react-icons/vsc";
import { CiSaveUp2 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { PiUserBold } from "react-icons/pi";

export default function AddCustomerModal({ closeModal, showModal }) {
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
            className="relative w-[600px] h-[80vh] overflow-auto  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-2">
                <PiUserBold size={25} />
                <h1 className="text-2xl font-bold">Add New Customer</h1>
              </div>

              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
              <h2 className="text-xl font-bold mb-4">Customer Information</h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="customer-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fullname
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    name="customer-name"
                    placeholder="Jhon Doe"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="JhonDoe@mail.com"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="+1(123)-444-555"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>

                <div className="flex items-center gap-6  w-full ">
                  <div className="w-1/2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Type
                    </label>

                    <select
                      id="category"
                      name="category"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    >
                      <option>Select type</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sign up Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Order Status
                  </label>

                  <select
                    id="category"
                    name="category"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  >
                    <option>Select Order Status</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Canceled">Canceled</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="Notes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Notes
                  </label>

                  <textarea
                    id="Notes"
                    name="Notes"
                    placeholder="Add any additional notes about the customer"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black resize-none"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="flex items-center gap-4 justify-end border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer">
                <IoMdAdd size={20} />
                Add Customer
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
