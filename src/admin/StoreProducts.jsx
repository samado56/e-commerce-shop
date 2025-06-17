//icons
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import AdminHeader from "../component/AdminHeader";

import { SideBarContext } from "../context/sideBarContext";
import { useContext } from "react";

import prod from "../assets/imgs/product7.jpg";
export default function StoreProducts() {
  const { shrinkSideBar } = useContext(SideBarContext);
  return (
    <>
      <div className="   bg-gray-400/5 ">
        <AdminHeader />
        <div
          className="  pr-2 md:pr-4    "
          style={{ paddingLeft: shrinkSideBar ? "220px" : " 120px" }}
        >
          <div className="my-5 md:my-10 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Products</h2>

            <button className="rounded-xl bg-black text-white py-2 px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <IoMdAdd size={20} />
              </span>
              Add Product
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 text-center md:text-start">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Revenue</p>
              <h1 className="text-4xl font-bold mb-1">$25,450</h1>
              <span className="block text-green-600 font-semibold">
                +12% from last month{" "}
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Orders</p>
              <h1 className="text-4xl font-bold mb-1">1,235</h1>
              <span className="block text-green-600 font-semibold">
                +12% from last month{" "}
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Customers</p>
              <h1 className="text-4xl font-bold mb-1">800</h1>
              <span className="block text-green-600 font-semibold">
                +12% from last month{" "}
              </span>
            </div>
          </div>
          <div className="p-4 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
            <table className="w-[1200px] md:w-[1400px] text-start table-fixed  border-1 border-gray-400/20 ">
              <thead className="bg-gray-400/10 ">
                <tr>
                  <th className=" text-start py-2 px-4">PRODUCT NAME</th>
                  <th className=" text-start py-2 px-4">IMAGE</th>
                  <th className=" text-start py-2 px-4">CATEGORY</th>
                  <th className=" text-start py-2 px-4">STOCK</th>
                  <th className=" text-start py-2 px-4">PRICE</th>
                  <th className=" text-start py-2 px-4">STATUS</th>
                  <th className=" text-start py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-1 border-gray-400/20">
                  <td className="py-4 px-4 font-medium ">
                    Eco-Friendly Bamboo
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    <img src={prod} className="w-[50px] rounded-md" />
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">
                    Personal Care
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">564</td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
                  <td className="py-4 px-4">
                    <span className="bg-cyan-500/10 py-1 px-3 text-cyan-500 font-[500] rounded-2xl">
                      Shipped
                    </span>
                  </td>
                  <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                    <MdDelete size={25} />
                    <MdModeEdit size={25} />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className="py-4 px-4 font-medium ">
                    Eco-Friendly Bamboo
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    {" "}
                    <img src={prod} className="w-[50px] rounded-md" />
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">
                    Home Goods
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">740</td>
                  <td className="py-4 px-4">$523.00</td>
                  <td className="py-4 px-4">
                    <span className="bg-red-500/10 py-1 px-3 text-red-700 font-[500] rounded-2xl">
                      Canceled
                    </span>
                  </td>
                  <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                    <MdDelete size={25} />
                    <MdModeEdit size={25} />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className="py-4 px-4 font-medium ">
                    Eco-Friendly Bamboo
                  </td>
                  <td className="py-4 px-4 text-gray-400">
                    {" "}
                    <img src={prod} className="w-[50px] rounded-md" />
                  </td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">Apparel</td>
                  <td className="py-4 px-4 text-gray-500 text-lg ">854</td>
                  <td className="py-4 px-4">$64.00</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-500/10 py-1 px-3 text-green-800 font-[500] rounded-2xl">
                      Delivered
                    </span>
                  </td>
                  <td className="py-6 px-4 text-lg text-gray-600 font-medium flex items-center gap-4 my-auto ">
                    <MdDelete size={25} />
                    <MdModeEdit size={25} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
