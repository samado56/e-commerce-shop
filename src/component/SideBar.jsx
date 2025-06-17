//icons
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { BsClipboard2Check } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa6";
import { PiUserBold } from "react-icons/pi";

//hooks
import { SideBarContext } from "../context/sideBarContext";
import { useContext, useState } from "react";
import useResopnsive from "../hooks/useResponsive";
import { useNavigate } from "react-router";

export default function SideBar() {
  const navs = [
    { page: "Dashboard", icon: <GoHomeFill size={25} /> },
    { page: "Products", icon: <GoPackage size={25} /> },
    { page: "Orders", icon: <BsClipboard2Check size={25} /> },
    { page: "Customers", icon: <PiUsers size={25} /> },
    { page: "Analytics", icon: <FaChartLine size={25} /> },
  ];

  const [activePage, setActivePage] = useState("Dashboard");

  const style = { backgroundColor: "lightgray", fontWeight: "bold" };

  const { width } = useResopnsive();
  const isSmallScreen = width < 767;
  const navigate = useNavigate();
  const { shrinkSideBar, setShrinkSideBar } = useContext(SideBarContext);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[100vh] w-auto  bg-white shadow-sm shadow-black/10 p-2 md:p-2"
        style={{ padding: "0 20px" }}
      >
        <IoMdArrowDropleft
          size={40}
          className="absolute top-4 right-0 cursor-pointer"
          onClick={() => setShrinkSideBar(!shrinkSideBar)}
        />
        <div className="flex items-center gap-2 mb-10 mx-auto w-fit">
          <PiUserBold size={isSmallScreen ? 30 : 25} />
          {isSmallScreen ? (
            <h1 className="text-3xl font-bold">Admin Panel</h1>
          ) : null}
        </div>
        <div className="md:pl-0">
          {navs.map(({ page, icon }) => (
            <div
              key={page}
              className="flex items-center gap-2 py-4 px-4 rounded-md w-full cursor-pointer"
              style={activePage === page ? style : null}
              onClick={() => {
                setActivePage(page);
                navigate(`/${page}`);
              }}
            >
              {icon}
              {isSmallScreen || shrinkSideBar ? (
                <h1 className="text-lg font-semibold ">{page}</h1>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
