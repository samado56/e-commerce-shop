import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { VscPackage } from "react-icons/vsc";
import { CiSaveUp2 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

export default function EditOrderModal({ closeModal, showModal }) {
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
            className="relative w-[800px] h-[80vh] overflow-auto  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-2">
                <VscPackage size={25} />
                <h1 className="text-2xl font-bold">Update Order #12345</h1>
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
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6  w-full ">
                  <div className="w-1/2">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Order Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      placeholder="e.g. Organic Cotton T-Shirt"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Payment Status
                    </label>

                    <select
                      id="category"
                      name="category"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    >
                      <option>Select Payment Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Failed">Failed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="w-full pr-6 ">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Order Status
                  </label>

                  <select
                    id="category"
                    name="category"
                    className="mt-1 w-1/2 rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  >
                    <option>Select Order Status</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Canceled">Canceled</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
              <h2 className="text-xl font-bold mb-4">Order Information</h2>
              <div className="p-4 md:p-0 w-full bg-white mt-5  overflow-x-auto  ">
                <table className="w-[1200px] md:w-full text-start table-auto  ">
                  <thead className="bg-gray-400/5 font-medium text-gray-600 ">
                    <tr>
                      <td className="py-2 px-4">Product Name </td>
                      <td className="py-2 px-4">Quntity</td>
                      <td className="py-2 px-4">Unit Price</td>
                      <td className="py-2 px-4">Subtotal</td>
                      <td className="py-2 px-4">Action</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b-2 border-gray-400/20 row-hover">
                      <td className="py-4 px-4 row-text ">Classic T-Shirt</td>
                      <td className="py-4 px-4 row-text ">
                        <span className="border-2 border-gray-400/20 py-2 px-4 rounded-md">
                          2
                        </span>
                      </td>
                      <td className="py-4 px-4 row-text ">$20.00</td>
                      <td className="py-4 px-4 row-text ">$40.00</td>
                      <td className="py-2 px-4 text-red-600 font-medium cursor-pointer">
                        Remove
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-400/20 row-hover">
                      <td className="py-4 px-4 row-text ">Slim Fit Jeans</td>
                      <td className="py-4 px-4 row-tex">
                        <span className="border-2 border-gray-400/20 py-2 px-4 rounded-md">
                          1
                        </span>
                      </td>
                      <td className="py-4 px-4 row-text">$50.00</td>
                      <td className="py-4 px-4 row-text">$50.00</td>
                      <td className="py-2 px-4 text-red-600 font-medium cursor-pointer">
                        Remove
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="flex items-center gap-2 text-sm font-semibold py-2 px-3  rounded-md  border-2 border-gray-400/20 mt-4 cursor-pointer">
                <IoMdAdd size={20} />
                Add Product
              </button>
            </div>
            <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
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
            <div className="flex items-center gap-4 justify-end border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer">
                <CiSaveUp2 size={20} />
                Update Product
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
