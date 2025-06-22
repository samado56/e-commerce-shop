import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { BsShieldFillCheck } from "react-icons/bs";
import Switcher from "../component/Switcher";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

import { IoMdRefresh } from "react-icons/io";

// imgs
import avt from "../assets/imgs/r-avt3.jpg";
import masterCard from "../assets/imgs/master-card.png";

//components
import Label from "../component/Label";

export default function OrderEventModal({ closeModal, showModal }) {
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
            className="relative w-[800px]  rounded-md shadow-md shadow-black/10 bg-white p-8"
          >
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-400/20 pb-8">
              <div className="flex items-center gap-4 ">
                <MdOutlineInventory2 size={25} />
                <h1 className="text-2xl font-bold">Order #12531</h1>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-500 font-semibold">CUSTOMER INFO</p>
                <div className="flex items-center gap-4">
                  <img src={avt} className="w-[40px] rounded-full" />
                  <div className="text-gray-600 text-sm">
                    <h2 className="text-lg font-bold m-0">Jhon Doe</h2>
                    <span> john.doe@example.com</span>
                    <span className="block">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 font-semibold">ORDER STATUS</p>
                <div className="flex items-center gap-4 mt-2">
                  <Label className=" label-green-icons">
                    <FaRegCheckCircle /> <span>Successful</span>
                  </Label>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">DATE & TIME</p>
                <p className=" mt-2">July 26, 2023, 10:00 AM</p>
              </div>
            </div>
            <div className="p-4 md:p-0 w-full bg-white mt-5 rounded-md overflow-x-auto  ">
              <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
                <thead className="bg-gray-400/10 font-medium text-gray-600 ">
                  <tr>
                    <td className="py-2 px-4">Products </td>
                    <td className="py-2 px-4">Quntity</td>
                    <td className="py-2 px-4">Unit Price</td>
                    <td className="py-2 px-4">Subtotal</td>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b-1 border-gray-400/20 row-hover">
                    <td className="py-4 px-4 row-text ">Classic T-Shirt</td>
                    <td className="py-4 px-4 row-text ">2</td>
                    <td className="py-4 px-4 row-text ">$20.00</td>
                    <td className="py-4 px-4 row-text ">$40.00</td>
                  </tr>
                  <tr className="border-b-1 border-gray-400/20 row-hover">
                    <td className="py-4 px-4 row-text ">Slim Fit Jeans</td>
                    <td className="py-4 px-4 row-text ">1</td>
                    <td className="py-4 px-4 row-text">$50.00</td>
                    <td className="py-4 px-4 row-text">$50.00</td>
                  </tr>
                  <tr className="border-b-1 border-gray-400/20 row-hover">
                    <td className="py-4 px-4 row-text ">Leather Belt</td>
                    <td className="py-4 px-4 row-text ">1</td>
                    <td className="py-4 px-4 row-text ">$5.00</td>
                    <td className="py-4 px-4 row-text ">$5.00</td>
                  </tr>
                  <tr className="border-b-1 border-gray-400/20 row-hover bg-blue-300/20 text-blue-500 font-semibold">
                    <td className="py-4 px-4 row-text "></td>
                    <td className="py-4 px-4 row-text "></td>
                    <td className="py-4 px-4  ">Total</td>
                    <td className="py-4 px-4  ">$95.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-start justify-between mt-4">
              <div>
                <p className="text-gray-500 font-semibold">PAYMENT METHOD</p>
                <div className="flex items-center gap-4 mt-2">
                  <img
                    src={masterCard}
                    className="w-[50px] shadow-sm shadow-black/10"
                  />
                  <h2 className="text-md  font-[500]">
                    Credit Card <span className="text-gray-500"> ***1234</span>
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-semibold">SHIPPING ADDRESS</p>
                <div className="flex items-center gap-2">
                  <MdLocationPin size={25} />
                  <div>
                    <h2 className="text-sm font-medium">
                      123 Maple Street, Anytown, CA 91234
                    </h2>
                    <span className="text-gray-500">
                      Tracking:{" "}
                      <span className="text-blue-400">12999AA10123456784</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-end border-t-2 border-gray-400/20 pt-8">
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20 cursor-pointer">
                <MdOutlineCancel />
                Cancel Order
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-red-500 text-white cursor-pointer">
                <IoMdRefresh />
                Refund
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-green-500 text-white cursor-pointer">
                <FaRegCheckCircle />
                Mark Paid
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
