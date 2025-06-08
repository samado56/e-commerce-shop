import { useState } from "react";

import Footer from "../component/Footer";
import { useNavigate } from "react-router";

export default function User() {
  const [active, setActive] = useState("Order History");

  const navigate = useNavigate();

  const sections = ["Order History", " Wishlist", "Profile", "Adress "];
  return (
    <>
      <div className="py-[88px] min-h-[100vh] bg-gray-400/5">
        <div className="container">
          <h1 className="text-4xl font-bold mt-6">My Account</h1>
          <div className="pt-10">
            <ul className="flex items-center gap-4 md:gap-5 border-b-2 border-gray-400/20">
              {sections.map((section) => (
                <li
                  key={section}
                  className="py-4  md:text-lg font-medium text-gray-500 cursor-pointer"
                  onClick={() => setActive(section)}
                  style={{
                    borderBottom: active === section ? "3px solid black" : null,
                    color: active === section ? "black" : null,
                    translate: active === section ? "0 2px" : null,
                  }}
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium mt-6">Recent Orders</h2>
            <div className="w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
              <table className="w-[600px] text-start table-auto  border-1 border-gray-400/20 ">
                <thead className="bg-gray-400/10 ">
                  <tr>
                    <th className=" text-start py-2 px-4">ORDER</th>
                    <th className=" text-start py-2 px-4">DATE</th>
                    <th className=" text-start py-2 px-4">STATUS</th>
                    <th className=" text-start py-2 px-4">TOTAL</th>
                    <th className=" text-start py-2 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-1 border-gray-400/20">
                    <td className="py-4 px-4 font-medium ">#12345</td>
                    <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
                    <td className="py-4 px-4">
                      <span className="bg-cyan-500/10 py-1 px-3 text-cyan-500 font-[500] rounded-2xl">
                        Shipped
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-500 text-lg ">
                      $125.00
                    </td>
                    <td className="py-4 px-4 text-lg text-gray-600 font-medium ">
                      <span className="cursor-pointer transition duration-100 hover:border-b-2 hover:border-black hover:text-black">
                        View Details
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b-1 border-gray-400/20">
                    <td className="py-4 px-4 font-medium ">#12345</td>
                    <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
                    <td className="py-4 px-4">
                      <span className="bg-red-500/10 py-1 px-3 text-red-700 font-[500] rounded-2xl">
                        Canceled
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-500 text-lg ">
                      $125.00
                    </td>
                    <td className="py-4 px-4 text-lg text-gray-600 font-medium ">
                      <span
                        onClick={() => navigate("/order-details")}
                        className="cursor-pointer transition duration-100 hover:border-b-2 hover:border-black hover:text-black"
                      >
                        View Details
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b-1 border-gray-400/20">
                    <td className="py-4 px-4 font-medium ">#12345</td>
                    <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
                    <td className="py-4 px-4">
                      <span className="bg-green-500/10 py-1 px-3 text-green-800 font-[500] rounded-2xl">
                        Delivered
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-500 text-lg ">
                      $125.00
                    </td>
                    <td className="py-4 px-4 text-lg text-gray-600 font-medium ">
                      <span className="cursor-pointer transition duration-100 hover:border-b-2 hover:border-black hover:text-black">
                        View Details
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
