import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { VscPackage } from "react-icons/vsc";
import { CiSaveUp2 } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

export default function AddProductModal({ closeModal, showModal }) {
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
            className="relative w-[800px]  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4 ">
                <VscPackage size={25} />
                <h1 className="text-2xl font-bold">Add New Product</h1>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="px-8 py-4">
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="product-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="product-name"
                    name="product-name"
                    placeholder="e.g. Organic Cotton T-Shirt"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="e.g. Soft, breathable, and eco-friendly."
                    className="w-full h-[140px] p-4 border-2 border-gray-400/20 rounded-md  font-semibold text-md resize-none bg-white"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>

                    <select
                      id="category"
                      name="category"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    >
                      <option>Select a Category</option>
                      <option value="men">Men</option>
                      <option value="men">women</option>
                      <option value="men">kids</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="$ 0.00"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    placeholder="e.g. 100"
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                  />
                </div>
                <div className="w-full flex-1">
                  <label
                    htmlFor="stock"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Product Image
                  </label>
                  <div className="w-full mt-2">
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center  h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 w-full ">
                        <IoMdCloudUpload size={30} className="text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold text-yellow-500">
                            Upload a file
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden w-full "
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex items-center gap-4 justify-end border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-black text-white cursor-pointer">
                <CiSaveUp2 size={20} />
                Save Product
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
