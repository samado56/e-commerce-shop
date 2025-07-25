import { useRef, useEffect } from "react";

//icons
import { IoClose } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

// imgs
import prd from "../assets/imgs/product7.jpg";

//components
import Label from "../component/Label";

export default function ViewOrderDeatilsModal({ closeModal, showModal }) {
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
            className="relative w-[800px]  rounded-md shadow-md shadow-black/10 bg-white "
          >
            <div className="flex items-start justify-between mb-8 border-b-2 border-gray-400/20 p-5">
              <div className="flex items-center gap-4 ">
                <MdOutlineInventory2 size={30} />
                <div>
                  <h1 className="text-2xl font-bold">Order #12531</h1>
                  <p className="text-sm text-gray-500 font-medium">
                    Customer: Alex Johnson • Order Date: 2024-01-15
                  </p>
                </div>
              </div>
              <IoClose
                size={25}
                className="cursor-pointer"
                onClick={closeModal}
              />
            </div>
            <div className="px-8">
              <div className="grid-wrapper-3 ">
                <div className="shadow-sm shadow-black/10 rounded-md p-4">
                  <p className="text-gray-600 font-semibold mb-2">
                    TOTAL AMOUNT
                  </p>
                  <h1 className="text-3xl font-bold mb-1">$150.00</h1>
                </div>
                <div className="shadow-sm shadow-black/10 rounded-md p-4">
                  <p className="text-gray-600 font-semibold mb-2">
                    PAYMENT STATUS
                  </p>
                  <Label label="Paid" className="label-green-start" />
                </div>
                <div className="shadow-sm shadow-black/10 rounded-md p-4">
                  <p className="text-gray-600 font-semibold mb-2">
                    ORDER STATUS
                  </p>
                  <Label label="Shipped" className="label-blue-start" />
                </div>
              </div>
              <h2 className="text-xl font-bold py-4">Customer Information</h2>
              <div className="grid-wrapper-2 ">
                <div className="shadow-sm shadow-black/10 rounded-md p-4">
                  <p className="text-gray-600 font-semibold mb-2">
                    Shipping Address
                  </p>
                  <ul className="text-gray-400 font-medium text-sm ">
                    <li>Alex Johnson</li>
                    <li>123 Main Street</li>
                    <li>Anytown, USA 12345</li>
                    <li>alex.johnson@example.com</li>
                    <li>+1(555) 123-4567</li>
                  </ul>
                </div>
                <div className="shadow-sm shadow-black/10 rounded-md p-4">
                  <p className="text-gray-600 font-semibold mb-2">
                    Billing Address
                  </p>
                  <ul className="text-gray-400 font-medium text-sm ">
                    <li>Alex Johnson</li>
                    <li>123 Main Street</li>
                    <li>Anytown, USA 12345</li>
                    <li>alex.johnson@example.com</li>
                    <li>+1(555) 123-4567</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 md:p-0 w-full bg-white mt-5 rounded-md overflow-x-auto  ">
                <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
                  <thead className="bg-gray-400/10 font-medium text-gray-600 ">
                    <tr>
                      <td className="py-2 px-4">Image </td>
                      <td className="py-2 px-4">Products </td>
                      <td className="py-2 px-4">SKU</td>
                      <td className="py-2 px-4">Quntity</td>
                      <td className="py-2 px-4">Unit Price</td>
                      <td className="py-2 px-4">Subtotal</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b-1 border-gray-400/20 row-hover">
                      <td className="py-4 px-4 row-text ">
                        <img src={prd} className="w-[30px]" />{" "}
                      </td>
                      <td className="py-4 px-4 row-text ">Classic T-Shirt</td>
                      <td className="py-4 px-4 row-text ">SKU12345</td>
                      <td className="py-4 px-4 row-text ">2</td>
                      <td className="py-4 px-4 row-text ">$20.00</td>
                      <td className="py-4 px-4 row-text ">$40.00</td>
                    </tr>
                    <tr className="border-b-1 border-gray-400/20 row-hover">
                      <td className="py-4 px-4 row-text ">
                        <img src={prd} className="w-[30px]" />
                      </td>
                      <td className="py-4 px-4 row-text ">Slim Fit Jeans</td>
                      <td className="py-4 px-4 row-text ">SKU67890</td>
                      <td className="py-4 px-4 row-text ">1</td>
                      <td className="py-4 px-4 row-text">$50.00</td>
                      <td className="py-4 px-4 row-text">$50.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-end border-t-2 border-gray-400/20 p-5">
              <button
                onClick={closeModal}
                className=" text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer"
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
