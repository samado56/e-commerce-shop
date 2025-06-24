import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { GoAlert } from "react-icons/go";
import { LiaFileInvoiceSolid } from "react-icons/lia";

//components
import Label from "../component/Label";

//imgs
import visa from "../assets/imgs/visa.png";

export default function PaymentEventModal({ closeModal, showModal }) {
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
            className="relative w-[600px]  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4 ">
                <MdOutlineInventory2 size={25} />
                <h1 className="text-2xl font-bold">
                  Payment Attempt - Order #12340
                </h1>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div>
              <div className="flex items-center gap-4 text-yellow-800 text-md font-medium bg-yellow-300/20 border-y-2 border-gray-300/20 p-4 ">
                <GoAlert size={20} />
                <p>This order has failed multiple times.</p>
              </div>
              <ul className="border-b-2 border-gray-400/20 p-8">
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-medium  py-4 border-b-2 border-gray-400/20">
                  <span className="w-[160px]">Customer</span>
                  <span>Jhon Doe</span>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-medium  py-4 border-b-2 border-gray-400/20">
                  <span className="w-[160px]">Amount Attempted</span>

                  <span>$45.00</span>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-medium py-4 border-b-2 border-gray-400/20 ">
                  <span className="w-[160px]">Status</span>
                  <Label label="Failed" className="label-red-start" />
                </li>

                <li className="flex items-center gap-4 mb-2 text-gray-600 font-semibold  py-4 border-b-2 border-gray-400/20">
                  <span className="w-[160px]">Failure Reason</span>
                  <span className="flex items-center gap-2 text-red-500">
                    <IoAlertCircleOutline size={20} />
                    <span>Insufficient Funds</span>
                  </span>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-semibold  py-4 border-b-2 border-gray-400/20">
                  <span className="w-[160px]">Payment Method</span>
                  <div className="flex items-center gap-2">
                    <img
                      src={visa}
                      className="w-[50px] shadow-sm shadow-black/10"
                    />
                    <span>Visa ending on ****1241</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-semibold py-4">
                  <span className="w-[160px]">Date & Time</span>
                  <span>July 26, 2023, 12:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4  justify-end border-t-2 border-gray-400/20 p-5">
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20 cursor-pointer">
                <MdMailOutline size={20} />
                Contact Customer
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20 cursor-pointer">
                <LiaFileInvoiceSolid size={20} />
                View Invoice
              </button>

              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-blue-500 text-white cursor-pointer">
                <IoMdRefresh size={20} />
                Retry Payment
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
