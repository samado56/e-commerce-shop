import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsEye } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

// imgs
import avt from "../assets/imgs/r-avt3.jpg";

//components
import Label from "../component/Label";

export default function InventoryEventModal({ closeModal, showModal }) {
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
            className="relative w-[600px]  rounded-md shadow-md shadow-black/10 bg-white p-5"
          >
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-400/20 pb-5">
              <div className="flex items-center gap-4 ">
                <MdOutlineInventory2 size={25} />
                <h1 className="text-2xl font-bold">inventory Update</h1>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div>
              <div className="flex items-center gap-4 border-b-2 border-gray-400/20 pb-5 ">
                <img src={avt} className="w-[100px] rounded-md" />
                <div>
                  <div className="text-gray-600 text-md">
                    <h2 className="text-2xl font-bold mb-2">Premium T-Shirt</h2>
                    <span> SKU:PTS-BLK-M-001</span>
                    <div className="flex items-center gap-2 mt-2">
                      <Label label="Apparel" className="label-gray" />
                      <Label label="Branded Co" className="label-gray" />
                      <Label label="Men's" className="label-gray" />
                    </div>
                  </div>
                </div>
              </div>
              <ul className="border-b-2 border-gray-400/20 py-5">
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-medium ">
                  <span className="w-[160px]">Uppdate Type</span>
                  <Label className="label-green-icons">
                    <FaRegArrowAltCircleUp />
                    <span>Stock Addedd</span>
                  </Label>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-medium ">
                  <span className="w-[160px]">Quantity Changed</span>

                  <span className="flex items-center gap-2 text-green-500">
                    <FaArrowUp />
                    <span>+50</span>
                  </span>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-medium ">
                  <span className="w-[160px]">New Stock Level</span>
                  <span className="font-bold text-xl">120 units</span>
                </li>
              </ul>
              <ul className="py-5">
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-semibold ">
                  <span className="w-[160px]">Uppdate By</span>
                  <div className="flex items-center  gap-4">
                    <img src={avt} className="w-[30px] rounded-full" />
                    <span>Admin (Alex)</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 mb-2 text-gray-600 font-semibold ">
                  <span className="w-[160px]">Timestamp</span>
                  <span>July 26, 2023, 12:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4  justify-end border-t-2 border-gray-400/20 pt-5">
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20 cursor-pointer">
                <BsEye size={20} />
                View Product
              </button>

              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-blue-500 text-white cursor-pointer">
                <HiAdjustmentsHorizontal size={20} />
                Adjust Stock
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
