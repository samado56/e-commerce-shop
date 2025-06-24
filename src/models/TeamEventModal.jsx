import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { HiArrowUturnLeft } from "react-icons/hi2";

//components
import Label from "../component/Label";

//imgs
import avt from "../assets/imgs/r-avt3.jpg";

export default function TeamEventModal({ closeModal, showModal }) {
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
            className="relative w-[700px]  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-start justify-between border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4 ">
                <div className="flex items-center gap-2">
                  <img src={avt} className="w-[50px] rounded-full" />
                  <div>
                    <h1 className="text-2xl font-bold">Team Activity</h1>
                    <span>Details for Sarah Brown</span>
                  </div>
                </div>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="px-8 py-2">
              <ul className="flex items-center  py-4  ">
                <li className="w-[300px] mb-2 text-gray-600   ">
                  <span>USER ROLE</span>
                  <span className="block text-black font-medium">Admin</span>
                </li>
                <li className=" mb-2 text-gray-600   ">
                  <span>ACTION PERFORMED</span>
                  <span className="block text-black font-medium ">
                    Updated Settings
                  </span>
                </li>
              </ul>
              <ul className="py-4 border-y-2 border-gray-400/20">
                <li className="w-[300px] mb-2 text-gray-600   ">
                  <span>DESCRIPTIONI</span>
                  <span className="block text-black font-medium">
                    Updated product pricing on SKU-122
                  </span>
                </li>
              </ul>
              <ul className="flex items-center py-4  ">
                <li className="w-[300px] mb-2 text-gray-600   ">
                  <span>TIMESTAMP</span>
                  <span className="block text-black font-medium">
                    July 26, 2023 - 02:30 PM
                  </span>
                </li>
                <li className=" mb-2 text-gray-600  ">
                  <span>DEVICE / BROWSER</span>
                  <span className="block text-black font-medium ">
                    Chrome on Windows
                  </span>
                </li>
              </ul>
              <ul className="flex items-center  py-4  ">
                <li className="w-[300px] mb-2 text-gray-600   ">
                  <span>IP ADDRESS</span>
                  <span className="block text-black font-medium text-lg ">
                    192.168.0.5
                  </span>
                </li>
                <li className=" mb-2 text-gray-600  ">
                  <span>STATUS</span>
                  <Label className="flex items-center gap-2 label-green-icons">
                    <FaRegCheckCircle />
                    <span className="block ">Completed</span>
                  </Label>
                </li>
              </ul>
            </div>

            <div className="flex items-center   justify-between border-t-2 border-gray-400/20 p-5">
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3   cursor-pointer">
                More Activities by this User
                <GoArrowRight size={20} />
              </button>
              <div className="flex item-center gap-2">
                <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20 cursor-pointer">
                  <HiArrowUturnLeft size={20} />
                  Revoke Access
                </button>

                <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-blue-500 text-white cursor-pointer">
                  <BsEye size={20} />
                  View Audit Log
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
