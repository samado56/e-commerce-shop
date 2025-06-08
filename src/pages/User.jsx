import { useState } from "react";

import Footer from "../component/Footer";
import { useNavigate } from "react-router";

const AdressBook = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-medium my-6">Adress Book</h2>
        <div className="bg-white border-1 border-gray-400/20 p-4 flex items-center justify-between rounded-md mb-4 shadow-sm shadow-black/10">
          <div>
            <h2 className="text-xl font-medium">Home Adress</h2>
            <p className="text-gray-400 text-lg">
              123 Maple Street, Anytownm Ca 91234
            </p>
          </div>
          <button className="rounded-2xl bg-gray-400/10 py-2 px-4 font-medium">
            Edit
          </button>
        </div>
        <div className="bg-white border-1 border-gray-400/20 p-4 flex items-center justify-between rounded-md mb-4 shadow-sm shadow-black/10">
          <div>
            <h2 className="text-xl font-medium">Billing Adress</h2>
            <p className="text-gray-400 text-lg">
              123 Maple Street, Anytownm Ca 91234
            </p>
          </div>
          <button className="rounded-2xl bg-gray-400/10 py-2 px-4 font-medium">
            Edit
          </button>
        </div>
        <button
          type="submit"
          className="w-fit px-4  bg-black text-white font-semibold py-2 rounded-2xl hover:bg-gray-900 transition"
        >
          Add New Adress
        </button>
      </div>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <div className="w-full md:w-[400px] mt-6">
        <h2 className="text-2xl font-medium mt-6">Profile Settings</h2>
        <div className="mt-4">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // placeholder="you@example.com"
            class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <div className="mt-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // placeholder="you@example.com"
            class="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
          />
        </div>
        <button
          type="submit"
          class="w-fit px-4 mt-10 bg-black text-white font-semibold py-2 rounded-2xl hover:bg-gray-900 transition"
        >
          Update Profille
        </button>
      </div>
    </>
  );
};

const OrdersHistory = ({ nav }) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-medium mt-6">Recent Orders</h2>
        <div className="w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
          <table className="w-[600px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
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
                <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
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
                <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
                <td className="py-4 px-4 text-lg text-gray-600 font-medium ">
                  <span
                    onClick={nav}
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
                <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
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
    </>
  );
};

export default function User() {
  const [active, setActive] = useState("Order History");

  const navigate = useNavigate();

  const sections = ["Order History", "Profile", "Adress "];
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

          {active === "Order History" ? (
            <OrdersHistory nav={() => navigate("/order-details")} />
          ) : active === "Profile" ? (
            <Profile />
          ) : (
            <AdressBook />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
