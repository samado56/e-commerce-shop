import { useRef, useEffect } from "react";

//icons
import { MdOutlineCancel } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

//component
import Label from "../component/Label";

export default function ResendShipmentModal({ closeModal, showModal }) {
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
              <div className="relative  bg-blue-400/30 rounded-full p-4 w-fit">
                <MdMailOutline size={25} className=" text-blue-600   " />
              </div>
              <h1 className="text-2xl font-bold ">
                Resend Shipment Confiramtion ?
              </h1>
              <p className="text-gray-500 text-md">
                Are you sure you want to resend the shipment confirmation email
                to <span className="text-black font-medium">Amelia Harper</span>
                ?
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
              <button className="flex w-1/2 items-center justify-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-black text-white cursor-pointer">
                <IoIosSend size={20} />
                Resend Email
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
