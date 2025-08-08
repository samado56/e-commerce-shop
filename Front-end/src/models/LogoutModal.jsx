import { useRef, useEffect } from "react";

//icons
import { AiOutlineDelete } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { MdLogout } from "react-icons/md";

//component
import Label from "../component/Label";

import { UseAuth } from "../context/Auth/AuthCntext";

export default function LogoutModal({ closeModal, showModal }) {
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

  const { logout } = UseAuth();

  return (
    <>
      {showModal ? (
        <div className="fixed top-0 left-0 bg-black/40 w-full h-full flex items-center justify-center z-99">
          <div
            ref={modalRef}
            className="relative w-[500px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="relative  bg-red-400/30 rounded-full p-4 w-fit">
                <GoAlert size={25} className=" text-red-600   " />
              </div>
              <h1 className="text-2xl font-bold ">
                Are you sure you want to log out?
              </h1>
              <p className="text-gray-500 text-md">
                You will be logged out of your account and redirected to the
                login page.
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
                onClick={() => {
                  logout();
                  closeModal();
                }}
                className="flex w-1/2 items-center justify-center gap-2 text-md font-semibold py-2 px-3 rounded-md bg-red-500 text-white cursor-pointer"
              >
                <MdLogout size={20} />
                Yes, Log Me Out
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
