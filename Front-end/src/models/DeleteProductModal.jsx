import { useRef, useEffect } from "react";

//icons
import { AiOutlineDelete } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";


export default function DeleteProductModal({
  closeModal,
  showModal,
  deleteProduct,
}) {
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
            className="relative w-[450px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="relative  bg-red-400/30 rounded-full p-4 w-fit">
                <GoAlert size={25} className=" text-red-600   " />
              </div>
              <h1 className="text-2xl font-bold ">Delete Product</h1>
              <p className="text-gray-500 text-md">
                Are you sure you want to delete{" "}
                <span className="text-black  font-medium">
                  "Vintage Leather Jacket - SKU: VLJ001"
                </span>
                ?
              </p>
              <p className="text-gray-500 text-md font-medium">
                This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center gap-4  pt-5">
              <button
                onClick={closeModal}
                className="flex w-1/2 items-center justify-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button
                onClick={deleteProduct}
                className="flex w-1/2 items-center justify-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-red-500 text-white cursor-pointer"
              >
                <AiOutlineDelete size={20} />
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
