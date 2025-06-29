//hooks
import { useContext } from "react";
import useResponsive from "../hooks/useResponsive";
// import { useNavigate } from "react-router";

// usable style
import sectionsPadding from "../styles/sectionsPadding";

//components
import { SideBarContext } from "../context/sideBarContext";
import AdminHeader from "../component/AdminHeader";
import Label from "../component/Label";

//icons
import { FaShoppingCart } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
// imgs
import prd from "../assets/imgs/product7.jpg";

const LineItems = () => {
  return (
    <>
      <div className="rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8">
        <h2 className="text-xl md:text-xl font-bold text-center md:text-start">
          Line Items
        </h2>
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
    </>
  );
};

const ShippingAndTracking = () => {
  return (
    <>
      <div className="rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8  text-center md:text-start">
        <h2 className="text-xl md:text-xl font-bold">Shipping and Tracking</h2>
        <ul className="mt-4 flex flex-col md:flex-row md:items-start ">
          <li className="py-2  md:w-[400px]">
            <span className="block text-sm text-gray-500 font-medium mb-1">
              Shipping Address
            </span>
            <span className="font-medium text-gray-700">
              123 Elm Street, Anytown, CA 91234
            </span>
          </li>
          <li className="py-2 ">
            <span className="block text-sm text-gray-500 font-medium mb-1">
              Shipping Method
            </span>
            <span className="font-medium text-gray-700">Standard Shipping</span>
          </li>
        </ul>
        <ul className="mt-4 flex flex-col md:flex-row  md:items-start ">
          <li className="py-2  md:w-[400px]">
            <span className="block text-sm text-gray-500 font-medium mb-1">
              Tracking Numb
            </span>
            <span className="font-medium text-gray-700">7999AA1012345671</span>
          </li>
          <li className="py-2 ">
            <span className="block text-sm text-gray-500 font-medium mb-1">
              Track shipment
            </span>
            <span className="font-medium text-blue-500">Standard Shipping</span>
          </li>
        </ul>
      </div>
    </>
  );
};

const StatusUpdates = () => {
  return (
    <>
      <div className="rounded-md shadow-sm shadow-black/10 bg-white py-6 px-4 mt-8 ">
        <h2 className="text-xl md:text-xl font-bold px-5 text-center md:text-start">
          Status Updates
        </h2>
        <div className="flex items-start gap-6 mt-5  md:px-5 ">
          <div className="flex flex-col gap-8">
            <Label className="label-blue-icons-rounded p-3 steper">
              <FaShoppingCart size={20} />
            </Label>
            <Label className="label-green-icons-rounded p-3 steper">
              <MdPayments size={20} />
            </Label>
            <Label className="label-yellow-icons-rounded p-3 steper">
              <FaTruck size={20} />
            </Label>
            <Label className="label-indigo-icons-rounded p-3">
              <FaBoxOpen size={20} />
            </Label>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="text-lg font-bold">Order Placed</h2>
              <p className="text-gray-500 text-sm font-medium">
                January 15, 2024, 10:00 AM
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Payment Received</h2>
              <p className="text-gray-500 text-sm font-medium">
                January 15, 2024, 10:15 AM|
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Shipped</h2>
              <p className="text-gray-500 text-sm font-medium">
                January 16, 2024, 2:00 PM
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold">Delivered</h2>
              <p className="text-gray-500 text-sm font-medium">
                January 17, 2024, 10:00 AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default function CustomerOrderDetails() {
  const { shrinkSideBar } = useContext(SideBarContext);
  const { width } = useResponsive();
  const isSmallScreen = width < 768;

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
              <h2 className="text-2xl md:text-2xl font-bold">Order #12345</h2>
              <p className="text-sm md:text-md text-gray-400 font-medium">
                Placed on january 15, 2024
              </p>
            </div>
            <Label label="Shipped" className="label-green-start" />
          </div>
          <div className=" items-center justify-between rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8">
            <div className="mb-4">
              <h2 className="text-xl md:text-xl font-bold">Order Status</h2>
              <p className="text-sm md:text-md text-gray-400 font-medium">
                Current status: Shipped
              </p>
            </div>
            <div className="relative bg-gray-400/20 rounded-2xl w-full h-[10px] overflow-hidden mb-2">
              <span className="absolute bg-blue-500 top-0 left-0 h-full w-2/3 rounded-2xl"></span>
            </div>
            <ul className="text-sm text-gray-500 flex items-center justify-between">
              <li>Processing</li>
              <li>Shipped</li>
              <li>Delivered</li>
            </ul>
          </div>

          <div className=" flex flex-col md:flex-row items-start md:gap-10 w-full">
            <div className="w-full md:flex-1/7 rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8 text-center md:text-start">
              <h2 className="text-xl md:text-xl font-bold">
                Customer Information
              </h2>
              <ul className="mt-4">
                <li className="py-2">
                  <span className="block text-sm text-gray-500 font-medium">
                    Customer Name
                  </span>
                  <span className="font-medium text-gray-700">
                    Sophia Carter
                  </span>
                </li>
                <li className="py-2">
                  <span className="block text-sm text-gray-500 font-medium">
                    Contact Information
                  </span>
                  <span className="font-medium text-gray-700">
                    sophia.carter@email.com
                  </span>
                </li>
                <li className="py-2">
                  <span className="block text-sm text-gray-500 font-medium">
                    Shipping Address
                  </span>
                  <span className="font-medium text-gray-700">
                    123 Elm Street, Anytown, CA 91234
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full md:flex-1/2  rounded-md shadow-sm shadow-black/10 bg-white p-4 mt-8 h-[256px]">
              <h2 className="text-xl md:text-xl font-bold text-center md:text-start">
                Order Summary
              </h2>
              <ul className="mt-4 flex  items-center ">
                <li className="py-2 w-1/2 md:w-[300px]">
                  <span className="block text-sm text-gray-500 font-medium  md:mb-2">
                    Order Date
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    January 15, 2024
                  </span>
                </li>
                <li className="py-2 ">
                  <span className="block text-sm text-gray-500 font-medium mb-1 md:mb-2">
                    Payment Status
                  </span>
                  <Label label="Paid" className="label-green-start" />
                </li>
              </ul>
              <ul className="mt-4 flex  items-center ">
                <li className="py-2 w-1/2 md:w-[300px]">
                  <span className="block text-sm text-gray-500 font-medium  md:mb-2">
                    Shipping Method
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    Standard Shipping
                  </span>
                </li>
                <li className="py-2">
                  <span className="block text-sm text-gray-500 font-medium  md:mb-2">
                    Total Order Amount
                  </span>
                  <span className="text-lg md:text-xl font-bold">$150.00</span>
                </li>
              </ul>
            </div>
          </div>
          <LineItems />
          <ShippingAndTracking />
          <StatusUpdates />
        </div>
      </div>
    </>
  );
}
