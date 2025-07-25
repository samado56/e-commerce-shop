import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

// imgs
import avt from "../assets/imgs/r-avt3.jpg";

//components
import Label from "../component/Label";

export default function CustomerEventModal({ closeModal, showModal }) {
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
                <FaUser size={25} />
                <h1 className="text-2xl font-bold">New Customer</h1>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="px-8 py-4">
              <div className="flex items-center gap-4 bg-white border-2 border-gray-400/20 rounded-md p-4 w-full">
                <img src={avt} className="w-[60px] rounded-full" />
                <div>
                  <div className="text-gray-600 text-md">
                    <h2 className="text-xl font-bold m-0">Jhon Doe</h2>
                    <span> john.doe@example.com</span>
                    <span className="block">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold my-4">Account Details</h2>
              <div className="  bg-gray-400/10 border-2 border-gray-400/20 rounded-md p-4 w-full">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-md">
                    <span> Signup Date</span>
                    <span className="block font-bold">
                      July 26, 2023 - 11:00 AM
                    </span>
                  </div>
                  <div className="text-gray-600 text-md">
                    <span> Customer ID</span>
                    <span className="block font-bold">CUST-AUTO-12345</span>
                  </div>
                </div>
                <div className="text-gray-600 text-md mt-4">
                  <span>Account Status</span>
                  <Label label="Active" className="label-green-start" />
                </div>
              </div>
              <h2 className="text-xl font-bold my-4">Notes</h2>
              <textarea
                placeholder="Add any relevant notes about the customer..."
                className="w-full h-[140px] p-4 border-2 border-gray-400/20 rounded-md  font-semibold text-md resize-none bg-white"
              ></textarea>
            </div>

            <div className="flex items-center gap-4 justify-end border-t-2 border-gray-400/20 p-5">
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20 cursor-pointer">
                <MdOutlineEdit size={20} />
                Edit Profile
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-red-400/20 text-red-500 cursor-pointer">
                <MdBlockFlipped size={20} />
                Suspend Account
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-blue-500 text-white cursor-pointer">
                <MdMailOutline size={20} />
                Send Email
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
