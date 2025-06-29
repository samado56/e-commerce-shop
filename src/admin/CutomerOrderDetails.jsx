//hooks
import { useContext, useState } from "react";
import useResponsive from "../hooks/useResponsive";
import { useNavigate } from "react-router";

// usable style
import sectionsPadding from "../styles/sectionsPadding";

//components
import { SideBarContext } from "../context/sideBarContext";
import AdminHeader from "../component/AdminHeader";
import Label from "../component/Label";

//icons
import { MdBlockFlipped } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const sections = ["Overview", "Orders", "Returns"];

const Overview = () => {
  return (
    <>
      <div className="text-center md:text-start">
        <div className=" rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8 ">
          <h2 className="text-xl font-bold">Contact Informatiom</h2>
          <div className="grid-wrapper-3 text-center md:text-start py-4">
            <div>
              <p className="text-gray-400 font-semibold ">EMAIL</p>
              <h1 className="text-md font-semibold ">
                amelia.harper@email.com
              </h1>
            </div>
            <div>
              <p className="text-gray-400 font-semibold ">PHONE</p>
              <h1 className="text-md font-semibold ">(555) 123-4567</h1>
            </div>
            <div>
              <p className="text-gray-400 font-semibold ">ADDRESS</p>
              <h1 className="text-md font-semibold ">
                123 Elm Street, Anytown, CA 91234
              </h1>
            </div>
          </div>
        </div>
        <div className=" rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8">
          <h2 className="text-xl font-bold">Account Informatiom</h2>
          <div className="grid-wrapper-3 text-center md:text-start py-4">
            <div>
              <p className="text-gray-400 font-semibold ">REGISTRATION DATE</p>
              <h1 className="text-md font-semibold ">January 15, 2022</h1>
            </div>
            <div>
              <p className="text-gray-400 font-semibold ">LAST LOGIN</p>
              <h1 className="text-md font-semibold ">May 20, 2024</h1>
            </div>
          </div>
        </div>

        <div className=" rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8">
          <h2 className="text-xl font-bold pb-4 border-b-2 border-gray-400/20">
            Customer Statistics
          </h2>
          <div className="grid-wrapper-3 text-center md:text-start py-4">
            <div className="bg-gray-300/20 rounded-md border-1 border-gray-400/20 p-5">
              <p className="text-gray-600 font-semibold ">Total amount spent</p>
              <h1 className="text-2xl font-bold ">$1,575.00</h1>
            </div>
            <div className="bg-gray-300/20 rounded-md border-1 border-gray-400/20 p-5">
              <p className="text-gray-600 font-semibold ">
                Total Orders Placed
              </p>
              <h1 className="text-2xl font-bold ">15</h1>
            </div>
            <div className="bg-gray-300/20 rounded-md border-1 border-gray-400/20 p-5">
              <p className="text-gray-600 font-semibold ">
                Average Order Value
              </p>
              <h1 className="text-2xl font-bold ">$157.50</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const OrderHistory = ({ isSmallScreen }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);

  let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className=" rounded-md shadow-sm shadow-black/10 bg-white p-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div>
            <h2 className="text-xl font-bold">Order History</h2>
            <p className="text-gray-400 font-medium text-sm md:text-md">
              View and manage all orders placed by Amelia Harper
            </p>
          </div>
          <div className="relative w-full mt-4 md:w-[400px] ">
            <input
              type="search"
              placeholder="Search orders..."
              className=" py-1 md:py-2 px-8 border-2 border-gray-400/20 rounded-md w-full  bg-white  "
            />
            <IoIosSearch
              size={20}
              className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-600"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-4">
          <div className="flex items-center  gap-2 w-full ">
            <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit  bg-white">
              <option value="shipped">Customer Segment</option>
              <option value="shipped">Shipped</option>
              <option value="deliverd">Deliverd</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit  bg-white">
              <option value="shipped">Registration Date</option>
              <option value="shipped">Shipped</option>
              <option value="deliverd">Deliverd</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit  bg-white">
              <option value="shipped">Location</option>
              <option value="shipped">Shipped</option>
              <option value="deliverd">Deliverd</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex items-center justify-between md:justify-center gap-2 w-full md:w-fit mt-2 md:mt-0">
            <select className="py-1 md:py-2 px-2 md:px-4  border-2 border-gray-400/20 rounded-md w-1/2 md:w-fit md:ml-2 bg-white">
              <option value="shipped">Sort by: Total Spent</option>
              <option value="shipped">Shipped</option>
              <option value="deliverd">Deliverd</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button className="rounded-md bg-black text-white py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer  order-2 md:order-4">
              <span>
                <MdFileDownload size={20} />
              </span>

              {isSmallScreen ? null : "Export"}
            </button>
          </div>
        </div>
        <div className="p-4 md:p-0 w-full bg-white mt-5  overflow-x-auto  ">
          <table className="w-[1200px] md:w-full text-start table-auto  ">
            <thead className="bg-gray-400/5 font-medium text-gray-600 ">
              <tr>
                <td className="py-2 px-4">Order ID </td>
                <td className="py-2 px-4">Order Date</td>
                <td className="py-2 px-4">Total Amount</td>
                <td className="py-2 px-4">Order Status</td>
                <td className="py-2 px-4">Action</td>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-2 border-gray-400/20 row-hover">
                <td className="py-4 px-4 row-text ">ORD1001</td>
                <td className="py-4 px-4 row-text">2025-01-15</td>
                <td className="py-4 px-4 row-text ">$20.00</td>
                <td className="px-4">
                  <Label className="label-blue-icons ">
                    <CgSandClock />
                    <span>Processing</span>
                  </Label>
                </td>
                <td className="py-2 px-4  font-medium cursor-pointer">
                  <span onClick={() => navigate("/order-details")}>
                    View Details
                  </span>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-400/20 row-hover">
                <td className="py-4 px-4 row-text ">ORD1002</td>
                <td className="py-4 px-4 row-text">2025-01-15</td>
                <td className="py-4 px-4 row-text">$50.00</td>
                <td className="px-4">
                  <Label className="label-green-icons ">
                    <FaCircleCheck />
                    <span className="block">Delivered</span>
                  </Label>
                </td>
                <td className="py-2 px-4  font-medium cursor-pointer">
                  <span onClick={() => navigate("/order-details")}>
                    View Details
                  </span>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-400/20 row-hover">
                <td className="py-4 px-4 row-text ">ORD1002</td>
                <td className="py-4 px-4 row-text">2025-01-15</td>
                <td className="py-4 px-4 row-text">$50.00</td>
                <td className="px-4">
                  <Label className="label-red-icons ">
                    <MdCancel size={17} />
                    <span className="block">Canceled</span>
                  </Label>
                </td>
                <td className="py-2 px-4  font-medium cursor-pointer">
                  <span onClick={() => navigate("/order-details")}>
                    View Details
                  </span>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-400/20 row-hover">
                <td className="py-4 px-4 row-text ">ORD1002</td>
                <td className="py-4 px-4 row-text">2025-01-15</td>
                <td className="py-4 px-4 row-text">$50.00</td>
                <td className="px-4">
                  <Label className="label-orange-icons ">
                    <FaShippingFast />
                    <span className="block">Shipped</span>
                  </Label>
                </td>
                <td className="py-2 px-4  font-medium cursor-pointer">
                  <span onClick={() => navigate("/order-details")}>
                    View Details
                  </span>
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
    </>
  );
};

const OrderSummary = () => {
  return (
    <>
      <div className=" rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8 text-center md:text-start">
        <h2 className="text-xl font-bold pb-4 border-b-2 border-gray-400/20">
          Order Summary
        </h2>
        <div className="grid-wrapper-3 text-center md:text-start py-4">
          <div>
            <p className="text-gray-600 font-semibold ">Total amount spent</p>
            <h1 className="text-2xl font-bold ">$1,575.00</h1>
          </div>
          <div>
            <p className="text-gray-600 font-semibold ">Total Orders Placed</p>
            <h1 className="text-2xl font-bold ">15</h1>
          </div>
          <div>
            <p className="text-gray-600 font-semibold ">Average Order Value</p>
            <h1 className="text-2xl font-bold ">$157.50</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Returns = () => {
  return (
    <>
      <div>Returns</div>
    </>
  );
};

export default function CutomerOrderDetails() {
  const { shrinkSideBar } = useContext(SideBarContext);
  //   const [activePage, setActivePage] = useState(1);
  const { width } = useResponsive();
  //   let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const isSmallScreen = width < 768;
  const [activeSection, setActiveSection] = useState("Overview");

  return (
    <>
      <div className="   bg-gray-400/5 min-h-[100vh] pb-10">
        <AdminHeader />
        <div
          className="pr-3 md:pr-6 "
          style={sectionsPadding({ shrinkSideBar, isSmallScreen })}
        >
          <div className="flex items-center justify-between rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Amelia Harper</h2>
              <p className="text-sm md:text-md text-gray-400 font-medium">
                Customer ID: CUST123456
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4  ">
              <button
                //   onClick={closeModal}
                className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-gray-400/20  cursor-pointer"
              >
                <MdMailOutline size={20} />
                {isSmallScreen ? null : " Send Email"}
              </button>
              <button className="flex items-center gap-2 text-md font-semibold py-2 px-3  rounded-md bg-black text-white cursor-pointer">
                <MdOutlineEdit size={20} />

                {isSmallScreen ? null : "Edit Customer"}
              </button>
            </div>
          </div>

          <ul className="flex items-center gap-6 font-medium text-lg text-gray-400 border-b-2 border-gray-400/20 my-5">
            {sections.map((section) => (
              <li
                key={section}
                className="pb-2 translate-y-0.5 cursor-pointer"
                onClick={() => setActiveSection(section)}
                style={{
                  color: activeSection === section ? "black" : null,
                  borderBottom:
                    activeSection === section ? "2px solid black " : null,
                }}
              >
                {section}{" "}
              </li>
            ))}
          </ul>

          {activeSection === "Overview" ? (
            <Overview />
          ) : activeSection === "Orders" ? (
            <>
              <OrderHistory isSmallScreen={isSmallScreen} />
              <OrderSummary />
            </>
          ) : (
            <Returns />
          )}
        </div>
      </div>
    </>
  );
}
