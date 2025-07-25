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

export default function Settings() {
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
            <h2 className="text-2xl md:text-3xl font-bold">Settings</h2>

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
