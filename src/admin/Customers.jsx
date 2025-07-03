//icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";

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

//modal
import AddCustomerModal from "../models/AddCustomerModal";
import DeleteCustomerModal from "../models/DeleteCustomerModal";
import EditCustomerModal from "../models/EditCustomerModal";

export default function Custmores() {
  const { shrinkSideBar } = useContext(SideBarContext);
  const [activePage, setActivePage] = useState(1);
  const { width } = useResponsive();
  let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const isSmallScreen = width < 768;

  const navigate = useNavigate();

  //modals states
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [showDeleteCustomerModal, setShowDeleteCustomerModal] = useState(false);
  const [showEditCustomerModal, setShowEditCustomerModal] = useState(false);

  return (
    <>
      <div className="   bg-gray-400/5 min-h-[100vh]">
        <AdminHeader />
        <div
          className="pr-3 md:pr-6 "
          style={sectionsPadding({ shrinkSideBar, isSmallScreen })}
        >
          <div className="my-5 md:my-6 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Customers</h2>

            <button
              onClick={() => setShowAddCustomerModal(true)}
              className="rounded-md bg-black text-white  py-1 md:py-2 px-2 md:px-4 font-medium flex gap-2 items-center cursor-pointer"
            >
              <span>
                <IoMdAdd size={20} />
              </span>
              {!isSmallScreen ? "Add Customers" : null}
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 text-center md:text-start mb-5">
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Total Customers
              </p>
              <h1 className="text-4xl font-bold mb-1">1,257</h1>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                New Customers This Month
              </p>
              <h1 className="text-4xl font-bold mb-1">123</h1>
            </div>
            <div className="p-4 shadow-md shadow-black/10 rounded-md bg-white">
              <p className="text-gray-600 font-semibold mb-2">
                Average Order Value
              </p>
              <h1 className="text-4xl font-bold mb-1">$150.00</h1>
            </div>
          </div>
          <div className="gap-2  px-2 md:px-3 bg-white shadow-sm shadow-black/10 rounded-md py-4 w-full">
            <div className="relative w-full ">
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
          </div>

          <div className="p-4 md:p-0 w-full bg-white mt-5 rounded-xl overflow-x-auto shadow-sm shadow-black/10  ">
            <table className="w-[1200px] md:w-full text-start table-auto  border-1 border-gray-400/20 ">
              <thead className="bg-gray-400/10 font-medium text-gray-600 text-center text-sm">
                <tr>
                  <td className=" py-2 px-4">
                    <input type="checkbox" />
                  </td>
                  <td className=" py-2 px-4">CUSTMER NAME</td>
                  <td className="text-start py-2 px-4">EMAIL</td>
                  <td className=" py-2 px-4">PHONE NUMBER</td>
                  <td className=" py-2 px-4">LOCATION</td>
                  <td className=" py-2 px-4">TOTAL ORDERS</td>
                  <td className=" py-2 px-4">TOTAL SPENT</td>
                  <td className=" py-2 px-4">STATUS</td>
                  <td className=" py-2 px-4">Actions</td>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" text-start  px-4">
                    <input type="checkbox" />
                  </td>

                  <td className=" px-4 row-text ">Sophia Clark</td>
                  <td className=" px-4 row-text ">sophia.clark@email.com</td>
                  <td className=" px-4 row-text ">+1-555-123- 4567</td>
                  <td className=" px-4  row-text">USA</td>
                  <td className=" px-4  row-text">25</td>
                  <td className=" px-4  row-text">$2,500.00</td>
                  <td className=" px-4 ">
                    <Label label="Active" className="label-green" />
                  </td>
                  <td className="py-4 px-4 text-lg text-gray-600 font-medium flex items-center justify-center gap-4 ">
                    <BsEye size={20} className="cursor-pointer" />
                    <MdOutlineEdit size={20} className="cursor-pointer" />
                    <AiOutlineDelete
                      size={20}
                      className="cursor-pointer text-red-400"
                      onClick={() => setShowDeleteCustomerModal(true)}
                    />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" text-start  px-4">
                    <input type="checkbox" />
                  </td>

                  <td className=" px-4 row-text ">Ethan Bennett</td>
                  <td className=" px-4 row-text ">ethan.bennett@email.com</td>
                  <td className=" px-4  row-text">+1-555-987-6543</td>
                  <td className=" px-4  row-text">Canada</td>
                  <td className=" px-4  row-text">15</td>
                  <td className=" px-4  row-text">$2,500.00</td>
                  <td className=" px-4 ">
                    <Label label="Active" className="label-green" />
                  </td>
                  <td className="py-4 px-4 text-lg text-gray-600 font-medium flex items-center justify-center gap-4 ">
                    <BsEye
                      size={20}
                      className="cursor-pointer"
                      onClick={() => navigate("/customer-details")}
                    />
                    <MdOutlineEdit
                      onClick={() => setShowEditCustomerModal(true)}
                      size={20}
                      className="cursor-pointer"
                    />
                    <AiOutlineDelete
                      size={20}
                      className="cursor-pointer text-red-400"
                    />
                  </td>
                </tr>
                <tr className="border-b-1 border-gray-400/20">
                  <td className=" text-start  px-4">
                    <input type="checkbox" />
                  </td>

                  <td className=" px-4 font-medium text-gray-500 ">
                    Olivia Harper
                  </td>
                  <td className=" px-4 row-text">olivia.harper@email.com</td>
                  <td className=" px-4  row-text">+1-555-246-8013</td>
                  <td className=" px-4  row-text">UK</td>
                  <td className=" px-4  row-text">5</td>
                  <td className=" px-4  row-text">$500.00</td>
                  <td className=" px-4 ">
                    <Label label="Inactive" className="label-yellow" />
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
                  <td className=" text-start  px-4">
                    <input type="checkbox" />
                  </td>

                  <td className=" px-4 font-medium text-gray-500 ">
                    Lucas Parker
                  </td>
                  <td className=" px-4  row-text ">lucas.parker@email.com</td>
                  <td className=" px-4  row-text ">+1-555-765-4321</td>
                  <td className=" px-4  row-text ">Brazil</td>
                  <td className=" px-4  row-text ">3</td>
                  <td className=" px-4  row-text ">$300.00</td>
                  <td className=" px-4  row-text">
                    <Label label="Banned" className="label-red" />
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

      <AddCustomerModal
        showModal={showAddCustomerModal}
        closeModal={() => setShowAddCustomerModal(false)}
      />
      <DeleteCustomerModal
        showModal={showDeleteCustomerModal}
        closeModal={() => setShowDeleteCustomerModal(false)}
      />
      <EditCustomerModal
        showModal={showEditCustomerModal}
        closeModal={() => setShowEditCustomerModal(false)}
      />
    </>
  );
}
