//icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { BsEye } from "react-icons/bs";

//hooks
import { useContext, useState } from "react";
import useResponsive from "../hooks/useResponsive";

// usable style
import sectionsPadding from "../styles/sectionsPadding";

//components
import { SideBarContext } from "../context/sideBarContext";
import AdminHeader from "../component/AdminHeader";
import Label from "../component/Label";

export default function Orders() {
  const { shrinkSideBar } = useContext(SideBarContext);
  const [activePage, setActivePage] = useState(1);
  const { width } = useResponsive();
  let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const isSmallScreen = width < 768;

  return (
    <>
      <div className="   bg-gray-400/5 min-h-[100vh]">
        <AdminHeader />
        <div
          className="pr-3 md:pr-6 "
          style={sectionsPadding({ shrinkSideBar, isSmallScreen })}
        >
          <div className="my-5 md:my-6">
            <h2 className="text-2xl md:text-3xl font-bold">Orders</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 text-center md:text-start mb-5">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Total Orders</p>
              <h1 className="text-4xl font-bold mb-1">1,257</h1>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Total Revenue</p>
              <h1 className="text-4xl font-bold mb-1">$85,320.50</h1>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Pending Shipments
              </p>
              <h1 className="text-4xl font-bold mb-1">42</h1>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-2  px-2 md:px-3 bg-white shadow-sm shadow-black/10 rounded-md py-4 w-full">
            <div className="relative w-[calc(100%-44px)] md:w-auto ">
              <input
                type="search"
                placeholder="Search orders..."
                className=" py-1 md:py-2 px-8 border-2 border-gray-400/20 rounded-md w-[calc(100%-10px)] md:w-[400px] bg-white  "
              />
              <IoIosSearch
                size={20}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-600"
              />
            </div>

            <div className="w-full md:flex-1 order-5 md:order-1 flex gap-2 md:block md:gap-0">
              <input
                type="date"
                className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit  bg-white"
              />

              <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit md:ml-2 bg-white">
                <option value="shipped">All Status</option>
                <option value="shipped">Shipped</option>
                <option value="deliverd">Deliverd</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <button className="rounded-md bg-black text-white py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer  order-2 md:order-4">
              <span>
                <MdFileDownload size={20} />
              </span>

              {isSmallScreen ? null : "Export"}
            </button>
          </div>

          <div className="p-4 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
            <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
              <thead className="bg-gray-400/10 font-medium text-gray-600 text-center">
                <tr>
                  <td className="text-start py-2 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="text-start py-2 px-4">ORDER ID</td>
                  <td className=" py-2 px-4">CUSTMER NAME</td>
                  <td className=" py-2 px-4">DATE</td>
                  <td className=" py-2 px-4">TOTAL</td>
                  <td className=" py-2 px-4">PAYMENT STATUS</td>
                  <td className=" py-2 px-4">ORDER STATUS</td>
                  <td className=" py-2 px-4">Actions</td>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" text-start  px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="text-start px-4 row-text ">#12345</td>
                  <td className=" px-4 row-text">Sophia Clark</td>
                  <td className=" px-4 row-text ">2024-07-26</td>
                  <td className=" px-4  row-text">$125.00</td>
                  <td className=" px-4 ">
                    <Label label="Paid" className="label-green" />
                  </td>
                  <td className=" px-4">
                    <Label label="Shipped" className="label-orange" />
                  </td>

                  <td className="py-4 px-4 text-lg text-gray-600 font-medium flex items-center justify-center gap-4 ">
                    <BsEye size={20} className="cursor-pointer" />
                    <MdOutlineEdit size={20} className="cursor-pointer" />
                    <AiOutlineDelete
                      size={20}
                      className="cursor-pointer text-red-400"
                    />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" text-start px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="text-start px-4 row-text ">#12345</td>

                  <td className="px-4 row-text ">Sophia Clark</td>
                  <td className="px-4 row-text">2024-07-26</td>
                  <td className="px-4  row-text ">$740.42</td>
                  <td className="px-4 ">
                    <Label label="Failed" className="label-red" />
                  </td>
                  <td className="px-4">
                    <Label label="Delivered" className="label-green" />
                  </td>

                  <td className="py-4 px-4 text-lg text-gray-600 font-medium flex items-center justify-center gap-4 ">
                    <BsEye size={20} className="cursor-pointer" />
                    <MdOutlineEdit size={20} className="cursor-pointer" />
                    <AiOutlineDelete
                      size={20}
                      className="cursor-pointer text-red-400"
                    />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className="text-start  px-4">
                    <input type="checkbox" />
                  </td>
                  <td className="text-start px-4 row-text">#12345</td>
                  <td className="px-4 row-text ">Sophia Clark</td>
                  <td className="px-4 row-text ">2024-07-26</td>
                  <td className="px-4  row-text">$854.00</td>
                  <td className="px-4">
                    <Label label="Pending" className="label-orange" />
                  </td>
                  <td className="px-4">
                    <Label label="Processing" className="label-blue" />
                  </td>

                  <td className="py-4 px-4 text-lg text-gray-600 font-medium flex items-center justify-center gap-4  ">
                    <BsEye size={20} className="cursor-pointer" />
                    <MdOutlineEdit size={20} className="cursor-pointer" />
                    <AiOutlineDelete
                      size={20}
                      className="cursor-pointer text-red-400"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between mt-0 md:mt-4 px-4 border-t-1 border-gray-400/20 bg-white">
            <p className="text-gray-500 font-medium text-center text-sm md:text-lg">
              showing 1 to 5 of 20 results
            </p>
            <div className="pagination ">
              <ul className="flex justify-center items-center gap-1 py-2 text-sm md:text-lg font-[500] text-gray-400">
                <IoIosArrowBack
                  size={20}
                  className="cursor-pointer rounded-full h-[40px] w-[40px]  transisition-all duration-300 hover:bg-gray-400/20"
                  style={{ padding: "10px" }}
                />
                {pagination.map((page) => (
                  <li
                    key={page}
                    className="cursor-pointer rounded-full px-[8px] md:px-[16px] py-[3px] md:py-[6px]"
                    style={{
                      backgroundColor: activePage === page ? "black" : null,
                      color: activePage === page ? " #fff" : null,
                    }}
                    onClick={() => setActivePage(page)}
                  >
                    {page}
                  </li>
                ))}
                <IoIosArrowForward
                  size={20}
                  className="cursor-pointer rounded-full h-[40px] w-[40px]  transisition-all duration-300 hover:bg-gray-400/20"
                  style={{ padding: "10px" }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
