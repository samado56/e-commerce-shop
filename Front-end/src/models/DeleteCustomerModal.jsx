import { useRef, useEffect } from "react";

//icons
import { AiOutlineDelete } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";

//component
import Label from "../component/Label";

export default function DeleteCustomerModal({ closeModal, showModal }) {
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
            className="relative w-[500px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="relative  bg-red-400/30 rounded-full p-4 w-fit">
                <GoAlert size={25} className=" text-red-600   " />
              </div>
              <h1 className="text-2xl font-bold ">Delete Customer ?</h1>
              <p className="text-gray-500 text-md">
                Are you sure you want to delete this customer? This action
                cannot be undone.
              </p>
              <div className="p-4 mt-4 rounded-md bg-gray-400/10 border-2 border-gray-400/20  w-full text-center">
                <span className="text-xl font-medium ">Jhon Doe</span>
                <span className="block text-gray-500 font-[400]">
                  Sophia Clark
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4  pt-5">
              <button
                onClick={closeModal}
                className="flex w-1/2 items-center justify-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button className="flex w-1/2 items-center justify-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-red-500 text-white cursor-pointer">
                <AiOutlineDelete size={20} />
                Delete Order
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
