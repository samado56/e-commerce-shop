import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { PiUserBold } from "react-icons/pi";
import { CgTrack } from "react-icons/cg";
import { MdContentCopy } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { GoAlert } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";

//component
import Label from "../component/Label";

//imgs
import map from "../assets/imgs/map.png";

export default function TrackShipmentMModal({ closeModal, showModal }) {
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
            className="relative w-[700px] h-[80vh] overflow-auto  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-2">
                <CgTrack size={25} />
                <h1 className="text-2xl font-bold">Track Shipment</h1>
              </div>

              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="flex items-start justify-between  mx-4 my-4  p-4 rounded-md shadow-sm shadow-black/10 border-2 border-gray-400/20">
              <div>
                <p className="block text-gray-400 text-sm font-medium">
                  Current Status
                </p>
                <h4 className="font-bold">In Transit</h4>
                <span className="block text-gray-400 text-sm">
                  San Francisco, CA
                </span>
              </div>
              <div>
                <p className="block text-gray-400 text-sm font-medium">
                  Estimated Delivery
                </p>
                <h4 className="font-bold">July 20, 2024</h4>
              </div>
            </div>

            <div className=" mx-4 my-4  p-4 rounded-md shadow-sm shadow-black/10 border-2 border-gray-400/20">
              <img src={map} />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  Tracking Number:{" "}
                  <span className="text-black font-bold">
                    1Z999AA10123456784
                  </span>
                </p>
                <Label className="flex items-center gap-2 py-1 px-2 text-blue-500 border-1 border-blue-500 rounded-md cursor-pointer">
                  <MdContentCopy />
                  <span>Copy</span>
                </Label>
              </div>
            </div>

            <div className=" mx-4 my-4  p-4 rounded-md shadow-sm shadow-black/10 border-2 border-gray-400/20">
              <h4 className="font-bold">In Transit</h4>
              <div className="relative bg-gray-400/20 rounded-2xl w-full h-[10px] overflow-hidden mb-2">
                <span className="absolute bg-blue-500 top-0 left-0 h-full w-1/3 rounded-2xl"></span>
              </div>
              <div className="flex items-start gap-6 mt-5  md:px-5 ">
                <div className="flex flex-col gap-8">
                  <Label className="label-blue-icons-rounded p-3 steper">
                    <FaCircleCheck size={20} />
                  </Label>
                  <Label className="label-green-icons-rounded p-3 steper">
                    <FaTruck size={20} />
                  </Label>
                  <Label className="label-yellow-icons-rounded p-3 steper opacity-30">
                    <FaTruckFast size={20} />
                  </Label>
                  <Label className="label-indigo-icons-rounded p-3 opacity-30">
                    <FaBoxOpen size={20} />
                  </Label>
                </div>
                <div className="flex flex-col gap-7">
                  <div>
                    <h2 className="text-lg font-bold">Picked Up</h2>
                    <p className="text-gray-500 text-sm font-medium">
                      January 15, 2024, 10:00 AM
                    </p>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold">Out for delivery</h2>
                    <p className="text-gray-500 text-sm font-medium">
                      January 16, 2024, 2:00 PM
                    </p>
                  </div>
                  <div className="opacity-30">
                    <h2 className="text-lg font-bold">In Transit</h2>
                    <p className="text-gray-500 text-sm font-medium">
                      January 15, 2024, 10:15 AM|
                    </p>
                  </div>

                  <div className="opacity-30">
                    <h2 className="text-lg font-bold">Delivered</h2>
                    <p className="text-gray-500 text-sm font-medium">
                      January 17, 2024, 10:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-between border-t-2 border-gray-400/20 p-5">
              <div className="flex items-center">
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md text-blue-500 text-sm  cursor-pointer"
                >
                  <GoAlert size={20} />
                  Report Issue
                </button>
                <button
                  onClick={closeModal}
                  className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md text-blue-500 text-sm  cursor-pointer"
                >
                  <FaTruck size={20} />
                  Contact carrier
                </button>
              </div>
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
