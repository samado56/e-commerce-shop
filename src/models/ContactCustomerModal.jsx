import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { CiSaveUp2 } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

export default function ContactCustomerModal({ closeModal, showModal }) {
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
            className="relative w-[800px]   rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-center justify-between  border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4">
                <PiUserBold size={30} />
                <div>
                  <h1 className="text-2xl font-bold">
                    Contact Customer - Jhon Doe{" "}
                  </h1>
                  <p className="text-sm text0gray-500 font-medium">
                    Customer ID: 12546{" "}
                  </p>
                </div>
              </div>

              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="h-[60vh] overflow-auto">
              <div className="mx-4 my-4  p-5 rounded-xl shadow-sm shadow-black/10 border-2 border-gray-400/20">
                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="customer-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Name
                    </label>
                    <input
                      type="text"
                      id="customer-name"
                      name="customer-name"
                      placeholder="Jhon Doe"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer Email
                    </label>
                    <input
                      type="email"
                      id="date"
                      name="date"
                      placeholder="jhon.doe@mail.com"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="email"
                      id="date"
                      name="date"
                      placeholder="Enter message subject"
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="date"
                      name="date"
                      placeholder="write your message here... "
                      className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black resize-none h-[200px]"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex items-center  gap-4 justify-end border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdOutlineCancel size={20} />
                Cancel
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer">
                <IoIosSend size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
