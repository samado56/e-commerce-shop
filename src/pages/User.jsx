import { useState } from "react";

import Footer from "../component/Footer";
import { useNavigate } from "react-router";
import useResopnsive from "../hooks/useResponsive";

//icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FiTruck } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdLoyalty } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import { BsCreditCard2Back } from "react-icons/bs";

//imgs
import avt from "../assets/imgs/r-avt1.jpeg";
import Switcher from "../component/Switcher";

//payment imgs
import masterCard from "../assets/imgs/master-card.png";
import visa from "../assets/imgs/visa.png";
import gPay from "../assets/imgs/google-pay.png";
import aPay from "../assets/imgs/apple-pay.png";
import paypal from "../assets/imgs/paypal.png";
import AddCartModal from "../models/AddCartModal";

//Modals
import AddPayPalModal from "../models/AddPayPalModal";
import AddGooglePayModal from "../models/AddGooglePayModal";
import AddApplePayModal from "../models/AddApplePayModal";
import AddAddressModal from "../models/AddAddressModal";

const PaymentMethods = () => {
  const { width } = useResopnsive();

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showPayPalModal, setShowPayPalModal] = useState(false);
  const [showAppleModal, setShowAppleModal] = useState(false);
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  const otherPaymentsMethods = [
    {
      img: paypal,
      title: "PayPal",
    },
    {
      img: aPay,
      title: "Apple Pay",
    },
    {
      img: gPay,
      title: "Google Pay",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold my-5">Saved Cards</h1>
        <div className="p-4 rounded-md flex items-center gap-4 bg-white shadow-sm shadow-black/10 mb-4">
          <img
            src={visa}
            className="w-[80px] md:w-[100px] shadow-xs shadow-black/20 rounded-md"
          />
          <div className="flex-1">
            <span className=" font-semibold text-lg">Visa</span>
            {"  "}
            <span className="bg-green-400/10 text-green-600 px-2 text-sm font-medium rounded-2xl mt-2">
              Default
            </span>
            <span className="text-gray-400 font-semibold block">****4521</span>
          </div>
          <div className="flex gap-2 md:mt-4">
            <button className="rounded-xl bg-gray-400/10 py-2 px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <MdModeEdit />
              </span>
              {width > 450 ? "Edit" : null}
            </button>
            <button className="rounded-xl bg-red-500/10 py-2 px-4 font-medium text-red-600 flex gap-2 items-center cursor-pointer">
              <span>
                <MdDelete />
              </span>
              {width > 450 ? "Delete" : null}
            </button>
          </div>
        </div>
        <div className="p-4 rounded-md flex items-center gap-4 bg-white shadow-sm shadow-black/10 mb-4">
          <img
            src={masterCard}
            className="w-[80px] md:w-[100px] shadow-xs shadow-black/20 rounded-md"
          />
          <div className="flex-1">
            <span className="block font-semibold text-lg">Master Card</span>
            <span className="text-gray-400 font-semibold">****4521</span>
          </div>
          <div className="flex gap-2 md:mt-4">
            <button className="rounded-xl bg-gray-400/10 py-2 px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <MdModeEdit />
              </span>

              {width > 450 ? "Edit" : null}
            </button>
            <button className="rounded-xl bg-red-500/10 py-2 px-4 font-medium text-red-600 flex gap-2 items-center cursor-pointer">
              <span>
                <MdDelete />
              </span>
              {width > 450 ? "Delete" : null}
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowCartModal(!showCartModal)}
          className="rounded-xl bg-black text-white py-2 px-4 font-medium  flex gap-2 items-center cursor-pointer"
        >
          <span>
            <BsCreditCard2Back />
          </span>
          New Card
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-bold my-5">Other Payments Methods</h1>

        <div>
          {otherPaymentsMethods.map(({ img, title }) =>
            paymentMethods.includes(title) ? (
              <div className="p-4 rounded-md flex items-center gap-4 bg-white shadow-sm shadow-black/10 mb-4">
                <img
                  src={img}
                  className="w-[80px] md:w-[100px] shadow-xs shadow-black/20 rounded-md"
                />
                <div className="flex-1">
                  <span className=" font-semibold text-lg"> {title} </span>
                  {"  "}
                  <span className="bg-green-400/10 text-green-600 px-2 text-sm font-medium rounded-2xl mt-2">
                    Default
                  </span>
                  <span className="text-gray-400 font-semibold block">
                    S****m@***.com
                  </span>
                </div>
                <div className="flex gap-2 md:mt-4">
                  <button className="rounded-xl bg-gray-400/10 py-2 px-4 font-medium flex gap-2 items-center cursor-pointer">
                    <span>
                      <MdModeEdit />
                    </span>
                    {width > 450 ? "Edit" : null}
                  </button>
                  <button
                    onClick={() =>
                      setPaymentMethods(
                        paymentMethods.filter((elm) => elm !== title)
                      )
                    }
                    className="rounded-xl bg-red-500/10 py-2 px-4 font-medium text-red-600 flex gap-2 items-center cursor-pointer"
                  >
                    <span>
                      <MdDelete />
                    </span>
                    {width > 450 ? "Delete" : null}
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={title}
                className="p-4 rounded-md flex items-center gap-4  "
              >
                <img
                  src={img}
                  className="w-[80px] md:w-[100px] shadow-xs shadow-black/20 rounded-md"
                />
                <div className="flex-1">
                  <span className="block font-semibold text-lg">{title}</span>
                  {/* <span className="text-gray-400 font-semibold">****4521</span> */}
                </div>
                <div className="flex gap-2 md:mt-4">
                  <button
                    onClick={() =>
                      // setPaymentMethods([...paymentMethods, title])
                      title === "PayPal"
                        ? setShowPayPalModal(!showPayPalModal)
                        : title === "Apple Pay"
                        ? setShowAppleModal(true)
                        : setShowGoogleModal(true)
                    }
                    className="rounded-xl bg-black text-white py-2 px-4 font-medium flex gap-2 items-center cursor-pointer"
                  >
                    <span>
                      <IoMdAdd size={20} />
                    </span>
                    {width > 450 ? "Add" : null}
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <AddCartModal
        showModal={showCartModal}
        closeModal={() => setShowCartModal(false)}
      />
      <AddPayPalModal
        showModal={showPayPalModal}
        closeModal={() => setShowPayPalModal(false)}
        addPayment={() => {
          setPaymentMethods([...paymentMethods, "PayPal"]);
          setShowPayPalModal(false);
        }}
      />
      <AddGooglePayModal
        showModal={showGoogleModal}
        closeModal={() => setShowGoogleModal(false)}
        addPayment={() => {
          setPaymentMethods([...paymentMethods, "Google Pay"]);
          setShowGoogleModal(false);
        }}
      />
      <AddApplePayModal
        showModal={showAppleModal}
        closeModal={() => setShowAppleModal(false)}
        addPayment={() => {
          setPaymentMethods([...paymentMethods, "Apple Pay"]);
          setShowAppleModal(false);
        }}
      />
    </>
  );
};

const AdressBook = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <>
      <div>
        <div className="flex items-center justify-between ">
          <h2 className="text-3xl md:text-4xl font-bold my-6">Adress Book</h2>
          <button
            onClick={() => setShowAddressModal(true)}
            className="w-fit px-4  bg-black text-white font-semibold py-2 rounded-2xl hover:bg-gray-900 transition flex items-center gap-2 cursor-pointer"
          >
            <span className="text-white ">
              <IoMdAdd size={25} />
            </span>
            New Adress
          </button>
        </div>
        <div className="bg-white border-1 border-gray-400/20 p-4 rounded-md mb-4 shadow-sm shadow-black/10">
          <div className="flex items-center  justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span>
                  <MdLocationPin size={25} />
                </span>
                <span>Home</span>
                <span className="bg-green-400/10 text-green-600 px-2 text-sm font-medium rounded-2xl mt-2">
                  Default
                </span>
              </h2>
              <p className="text-gray-400 text-lg font-medium">
                123 Maple Street, Anytownm Ca 91234
              </p>
            </div>
            <div className="h-[100px] w-[120px] bg-gray-400/20 rounded-lg">
              sss
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="rounded-xl bg-gray-400/10 py-2 px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <MdModeEdit />
              </span>
              Edit
            </button>
            <button className="rounded-xl bg-red-500/10 py-2 px-4 font-medium text-red-600 flex gap-2 items-center cursor-pointer">
              <span>
                <MdDelete />
              </span>
              Delete
            </button>
          </div>
        </div>
        <div className="bg-white border-1 border-gray-400/20 p-4 rounded-md mb-4 shadow-sm shadow-black/10">
          <div className="flex items-center  justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span>
                  <MdLocationPin size={25} />
                </span>{" "}
                Office{" "}
              </h2>
              <p className="text-gray-400 text-lg font-medium">
                123 Maple Street, Anytownm Ca 91234
              </p>
            </div>
            <div className="h-[100px] w-[120px] bg-gray-400/20 rounded-lg">
              sss
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="rounded-xl bg-gray-400/10 py-2 px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <MdModeEdit />
              </span>
              Edit
            </button>
            <button className="rounded-xl bg-red-500/10 py-2 px-4 font-medium text-red-600 flex gap-2 items-center cursor-pointer">
              <span>
                <MdDelete />
              </span>
              Delete
            </button>
            <button className="rounded-xl bg-blue-500/10 py-2 px-4 font-medium text-blue-600 flex gap-2 items-center cursor-pointer">
              <span>
                <TiPin />
              </span>
              Set as Default
            </button>
          </div>
        </div>
      </div>
      <AddAddressModal
        showModal={showAddressModal}
        closeModal={() => setShowAddressModal(false)}
        addPayment={() => {
          // setPaymentMethods([...paymentMethods, "PayPal"]);
          setShowAddressModal(false);
        }}
      />
    </>
  );
};

const Profile = () => {
  const [changePassword, setChangePassword] = useState(false);
  return (
    <>
      <div className="w-full md:w-[900px] mt-6">
        {/* <h2 className="text-2xl font-medium mt-6">Profile Settings</h2> */}
        <h2 className="text-2xl font-medium mt-6">Personal informations</h2>
        <div className="flex items-center gap-8">
          <div className="mt-4 flex-1/2">
            <label
              for="firstname"
              class="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              // placeholder="you@example.com"
              class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
            />
          </div>
          <div className="mt-4 flex-1/2">
            <label
              for="lastname"
              class="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              // placeholder="you@example.com"
              class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
            />
          </div>
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
            class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
          />
        </div>
        <div className="mt-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            // placeholder="you@example.com"
            class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
          />
        </div>

        <h2 className="text-2xl font-medium my-6">Security</h2>
        <div className="flex items-center justify-between">
          <p className="text-xl font mediium text-gray-800">Change Password</p>
          <button
            onClick={() => setChangePassword(!changePassword)}
            className="w-fit px-4  bg-gray-400/20  font-semibold py-2 rounded-4xl hover:bg-gray-400/50 transition cursor-pointer"
          >
            {changePassword ? "Cancel" : "Change"}
          </button>
        </div>
        {changePassword ? (
          <div>
            <div className="mt-4">
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // placeholder="you@example.com"
                class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
              />
            </div>{" "}
            <div className="mt-4">
              <label
                for="c-password"
                class="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="c-password"
                name="c-password"
                // placeholder="you@example.com"
                class="mt-1 w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-black focus:ring-black bg-white"
              />
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font mediium text-gray-800">
            Two-Factor Authentication
          </p>
          <Switcher />
        </div>
        <h2 className="text-2xl font-medium my-6">Preferences</h2>
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl font mediium text-gray-800">
            Subscribe to Newsletter
          </p>
          <Switcher />
        </div>
        <div className="flex items-center justify-between ">
          <p className="text-xl font mediium text-gray-800">Dark Mode</p>
          <Switcher />
        </div>
        <button className="w-full mt-10 px-10  bg-black text-white  font-semibold py-2 rounded-4xl hover:bg-black/70 transition cursor-pointer">
          Save Changes
        </button>
      </div>
    </>
  );
};

const OrdersHistory = ({ nav }) => {
  const [activePage, setActivePage] = useState(1);
  const { width } = useResopnsive();
  let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  width < 767 ? pagination.splice(5) : null;
  return (
    <>
      <div>
        <h2 className="text-2xl font-medium mt-6">Recent Orders</h2>
        <div className="my-4 flex flex-wrap items-center gap-2  ">
          <input
            type="search"
            placeholder="Search order by iD"
            className="py-2 px-4 border-2 border-gray-400/20 rounded-md w-full md:flex-1 bg-white"
          />
          <>
            <select className="py-2 px-4  border-2 border-gray-400/20 rounded-md flex-1 md:flex-0 bg-white">
              <option value="shipped">All</option>
              <option value="shipped">Shipped</option>
              <option value="deliverd">Deliverd</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="py-2 px-4  border-2 border-gray-400/20 rounded-md flex-1 md:flex-0 bg-white">
              <option value="shipped">All</option>
              <option value="shipped">Shipped</option>
              <option value="deliverd">Deliverd</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </>
        </div>
        <div className="p-4 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
          <table className="w-[800px] md:w-full text-start table-fixed  border-1 border-gray-400/20 ">
            <thead className="bg-gray-400/10 ">
              <tr>
                <th className=" text-start py-2 px-4">ORDER</th>
                <th className=" text-start py-2 px-4">DATE</th>
                <th className=" text-start py-2 px-4">ITEMS</th>
                <th className=" text-start py-2 px-4">TOTAL</th>
                <th className=" text-start py-2 px-4">STATUS</th>
                <th className=" text-start py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-1 border-gray-400/20">
                <td className="py-4 px-4 font-medium ">#12345</td>
                <td className="py-4 px-4 text-gray-400">july 15, 2024</td>
                <td className="py-4 px-4 text-gray-500 text-lg ">4</td>
                <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
                <td className="py-4 px-4">
                  <span className="bg-cyan-500/10 py-1 px-3 text-cyan-500 font-[500] rounded-2xl">
                    Shipped
                  </span>
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
                <td className="py-4 px-4 text-gray-500 text-lg ">4</td>
                <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
                <td className="py-4 px-4">
                  <span className="bg-red-500/10 py-1 px-3 text-red-700 font-[500] rounded-2xl">
                    Canceled
                  </span>
                </td>
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
                <td className="py-4 px-4 text-gray-500 text-lg ">5</td>
                <td className="py-4 px-4 text-gray-500 text-lg ">$125.00</td>
                <td className="py-4 px-4">
                  <span className="bg-green-500/10 py-1 px-3 text-green-800 font-[500] rounded-2xl">
                    Delivered
                  </span>
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
        <div className="flex items-center justify-center md:justify-between mt-4  border-t-1 border-gray-400/20">
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
    </>
  );
};

const Overview = ({ editProfile }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-sm shadow-black/10 mt-10 rounded-xl text-center md:text-start">
        <img
          src={avt}
          className="w-[200px] border-4 border-white shadow-sm shadow-black/20 rounded-full"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2"> Sophia Bennett</h2>
          <span className="px-2 bg-yellow-400 font-medium mb-2 md:mb-5 block w-fit rounded-xl mx-auto md:mx-0 ">
            Gold Tier
          </span>
          <span className="text-gray-400 mb-2 font-medium block">
            Member Since 2021
          </span>
          <button
            onClick={editProfile}
            className="py-2 px-4 bg-gray-400/20  text-lg font-medium rounded-lg mr-2 cursor-pointer"
          >
            Edit Profile
          </button>
          <button className="py-2 px-4 bg-black text-white text-lg font-medium rounded-lg mr-2  cursor-pointer">
            Upgrade Tier
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold my-10">Account Overview</h1>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 text-center md:text-start">
        <div className="bg-white px-4 py-6 shadow-sm shadow-black/10 rounded-md ">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <span className="text-gray-400 font-medium mt-2 md:mt-0">
              Total Order
            </span>
            <FiShoppingCart size={20} />
          </div>
          <h2 className="text-3xl font-bold mt-2">12</h2>
        </div>
        <div className="bg-white px-4 py-6 shadow-sm shadow-black/10 rounded-md">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <span className="text-gray-400 font-medium mt-2 md:mt-0">
              Pending Deliveries
            </span>
            <FiTruck size={20} />
          </div>
          <h2 className="text-3xl font-bold mt-2">2</h2>
        </div>
        <div className="bg-white px-4 py-6 shadow-sm shadow-black/10 rounded-md">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <span className="text-gray-400 font-medium mt-2 md:mt-0">
              Rewards Points
            </span>
            <MdLoyalty size={20} />
          </div>
          <h2 className="text-3xl font-bold mt-2">13</h2>
        </div>
        <div className="bg-white px-4 py-6 shadow-sm shadow-black/10 rounded-md">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <span className="text-gray-400 font-medium mt-2 md:mt-0">
              Recently Viewed
            </span>
            <MdOutlineRemoveRedEye size={20} />
          </div>
          <h2 className="text-3xl font-bold mt-2">21</h2>
        </div>
      </div>
    </>
  );
};

export default function User() {
  const [active, setActive] = useState("Overview");

  const navigate = useNavigate();

  const sections = [
    "Overview",
    "Order History",
    "Profile",
    "Adress",
    "Payment Methods",
  ];
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
          ) : active === "Overview" ? (
            <Overview editProfile={() => setActive("Profile")} />
          ) : active === "Adress" ? (
            <AdressBook />
          ) : (
            <PaymentMethods />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
