import { SideBarContext } from "../context/sideBarContext";
import { useContext } from "react";
import useResponsive from "../hooks/useResponsive";

//usable styles
import sectionsPadding from "../styles/sectionsPadding";

//components
import AdminHeader from "../component/AdminHeader";
import Label from "../component/Label";

//icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { PiPackageFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { PiUserCirclePlus } from "react-icons/pi";

//chart
import TinyBarChart from "../charts/BarChart";
import SalesAreaChart from "../charts/SalesAreaChart";
import PieChartRadial from "../charts/PieChart";
import CustomerAreaChart from "../charts/CustomerAreaChart";

// import prod from "../assets/imgs/product7.jpg";

export default function Analytics() {
  const { shrinkSideBar } = useContext(SideBarContext);
  const { width } = useResponsive();

  const isSmallScreen = width < 768;

  return (
    <>
      <div className="   bg-gray-400/5 min-h-[100vh]">
        <AdminHeader />
        <div
          className="pr-3 md:pr-6 "
          style={sectionsPadding({ shrinkSideBar, isSmallScreen })}
        >
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Analytics</h2>

            <button className="rounded-md bg-black text-white  py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <IoMdAdd size={20} />
              </span>
              {!isSmallScreen ? "Export PDF" : null}
            </button>
          </div>
          <div className="grid-wrapper-3 text-center md:text-start">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white ">
              <p className="text-gray-600 font-semibold mb-2">Total Revenue</p>
              <h1 className="text-4xl font-bold mb-1">$120,000</h1>
              <span className="block text-green-600 font-semibold">
                +10% from last month
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Total Orders</p>
              <h1 className="text-4xl font-bold mb-1">5,000</h1>
              <span className="block text-green-600 font-semibold">
                +5%from last month{" "}
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Average Order Value
              </p>
              <h1 className="text-4xl font-bold mb-1">$24</h1>
              <span className="block text-green-600 font-semibold">
                +2% from last month{" "}
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Returning Customers
              </p>
              <h1 className="text-4xl font-bold mb-1">1,200</h1>
              <span className="block text-red-600 font-semibold">
                +8% from last month{" "}
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">Total Refunds</p>
              <h1 className="text-4xl font-bold mb-1">$5,000</h1>
              <span className="block text-red-600 font-semibold">
                -3% from last month{" "}
              </span>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Conversion Rate
              </p>
              <h1 className="text-4xl font-bold mb-1">4.5%</h1>
              <span className="block text-red-600 font-semibold">
                +12% from last month{" "}
              </span>
            </div>
          </div>
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Charts</h2>

            <button className="rounded-md bg-black text-white  py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <IoMdAdd size={20} />
              </span>
              {!isSmallScreen ? "Export PDF" : null}
            </button>
          </div>

          <div className="grid-wrapper-3 text-center md:text-start">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white  ">
              <p className="text-gray-600 font-semibold mb-2">
                Revenue Over Time
              </p>
              <h1 className="text-4xl font-bold mb-1">$120,000</h1>
              <span className="block text-green-600 font-semibold">
                Last 30 Days +10%
              </span>
              <SalesAreaChart />
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white ">
              <p className="text-gray-600 font-semibold mb-2">
                Sales by Product Category
              </p>
              <h1 className="text-4xl font-bold mb-1">5,000</h1>
              <span className="block text-green-600 font-semibold">
                Last 30 Days +5%
              </span>
              <TinyBarChart />
            </div>

            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white ">
              <p className="text-gray-600 font-semibold mb-2">
                Customer Growth
              </p>
              <h1 className="text-4xl font-bold mb-1">1,200</h1>
              <span className="block text-green-600 font-semibold">
                Last 30 Days +8%
              </span>
              <CustomerAreaChart />
            </div>
          </div>
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Payment Analysis</h2>

            <button className="rounded-md bg-black text-white  py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer">
              <span>
                <IoMdAdd size={20} />
              </span>
              {!isSmallScreen ? "Export PDF" : null}
            </button>
          </div>
          <div className="grid-wrapper-2 text-center md:text-start">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white  ">
              <p className="text-gray-600 font-semibold mb-2">
                Payment Method Breakdown
              </p>

              <PieChartRadial />
            </div>
            <div>
              <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white mb-4">
                <p className="text-gray-600 font-semibold mb-2">Succes Rate</p>
                <h1 className="text-4xl font-bold mb-1">95%</h1>
              </div>
              <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white mb-4">
                <p className="text-gray-600 font-semibold mb-2">Failure Rate</p>
                <h1 className="text-4xl font-bold mb-1">5%</h1>
              </div>
              <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white mb-">
                <p className="text-gray-600 font-semibold mb-2">
                  Refund Volume
                </p>
                <h1 className="text-4xl font-bold mb-1">$5,000</h1>
              </div>
            </div>
          </div>
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Stock Insights</h2>
          </div>
          <div className="p-4 md:p-0 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
            <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
              <thead className="bg-gray-400/10 font-medium text-gray-600 ">
                <tr>
                  <td className="py-2 px-4">PRODUCT NAME</td>
                  <td className="py-2 px-4">SKU</td>
                  <td className="py-2 px-4">STOCK QTY</td>
                  <td className="py-2 px-4">STATUS</td>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">Eco-Friendly Bamboo</td>
                  <td className="py-4 px-4 row-text ">skh-55-kl</td>
                  <td className="py-4 px-4 row-text ">564</td>
                  <td className="py-4 px-4">
                    <Label label="In Stock" className="label-green-start" />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">Eco-Friendly Bamboo</td>
                  <td className="py-4 px-4 row-text ">skh-55-kl</td>

                  <td className="py-4 px-4 row-text">740</td>

                  <td className="py-4 px-4">
                    <Label label="Low Stock" className="label-yellow-start" />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">Eco-Friendly Bamboo</td>
                  <td className="py-4 px-4 row-text ">skh-55-kl</td>

                  <td className="py-4 px-4 row-text ">854</td>

                  <td className="py-4 px-4">
                    <Label label="Out of Stock" className="label-red-start" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Events</h2>
          </div>
          <div className="p-4 md:p-0 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
            <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
              <thead className="bg-gray-400/10 font-medium text-gray-600 ">
                <tr>
                  <td className="py-2 px-4">TIMESTAMP</td>
                  <td className="py-2 px-4">Event</td>
                  <td className="py-2 px-4">DESCRIPTION</td>
                  <td className="py-2 px-4">STATUS</td>
                  <td className="py-2 px-4">DETAILS</td>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">2025-07-26 10:00 AM</td>
                  <td className="py-4 px-4 row-text inline-flex gap-2">
                    <MdShoppingCart size={20} color="blue" />
                    <span>Order</span>
                  </td>
                  <td className="py-4 px-4 row-text ">
                    Order #12345 placed by John Doe
                  </td>
                  <td className="py-4 px-4 ">
                    <Label label="Successfull" className="label-green-start" />
                  </td>
                  <td className="py-4 px-4 row-text-btn ">View Details</td>
                </tr>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">2025-07-26 10:00 AM</td>
                  <td className="py-4 px-4 row-text inline-flex gap-2">
                    <FaUserPlus size={20} color="green" />
                    <span>Customer</span>
                  </td>
                  <td className="py-4 px-4 row-text ">
                    New customer signup: Jane Smith
                  </td>
                  <td className="py-4 px-4 ">
                    <Label label="Successfull" className="label-green-start" />
                  </td>
                  <td className="py-4 px-4 row-text-btn ">View Details</td>
                </tr>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">2025-07-26 10:00 AM</td>

                  <td className="py-4 px-4 row-text inline-flex gap-2">
                    <PiPackageFill size={20} color="orange" />
                    <span>Inventory</span>
                  </td>
                  <td className="py-4 px-4 row-text ">
                    Product 'T-Shirt' stock updated: 50 units added
                  </td>
                  <td className="py-4 px-4">
                    <Label label="Updated" className="label-blue-start" />
                  </td>
                  <td className="py-4 px-4 row-text-btn">View Details</td>
                </tr>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">2025-07-26 10:00 AM</td>
                  <td className="py-4 px-4 row-text inline-flex gap-2">
                    <MdPayment size={20} color="red" />
                    <span>Payment</span>
                  </td>
                  <td className="py-4 px-4 row-text ">
                    Payment failed for Order #12340: Insufficient ...
                  </td>
                  <td className="py-4 px-4">
                    <Label label="Failed" className="label-red-start" />
                  </td>
                  <td className="py-4 px-4 row-text-btn ">View Details</td>
                </tr>
                <tr className="border-b-1 border-gray-400/20 row-hover">
                  <td className="py-4 px-4 row-text ">2025-07-26 10:00 AM</td>
                  <td className="py-4 px-4 row-text inline-flex gap-2">
                    <PiUserCirclePlus size={20} color="cyan" />
                    <span>User Activity</span>
                  </td>
                  <td className="py-4 px-4 row-text ">
                    User 'Sarah Brown' logged in
                  </td>
                  <td className="py-4 px-4">
                    <Label label="Completed" className="label-green-start" />
                  </td>
                  <td className="py-4 px-4 row-text-btn ">View Details</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
