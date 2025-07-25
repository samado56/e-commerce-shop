//icons
import { GoHomeFill } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { BsClipboard2Check } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa6";
import { PiUserBold } from "react-icons/pi";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarLeftExpand,
} from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

//hooks
import { SideBarContext } from "../context/sideBarContext";
import { useContext } from "react";
import useResopnsive from "../hooks/useResponsive";
import { useNavigate, useLocation } from "react-router";

export default function SideBar() {
  const navs = [
    { page: "Dashboard", icon: <GoHomeFill size={25} /> },
    { page: "Products", icon: <GoPackage size={25} /> },
    { page: "Orders", icon: <BsClipboard2Check size={25} /> },
    { page: "Customers", icon: <PiUsers size={25} /> },
    { page: "Analytics", icon: <FaChartLine size={25} /> },
  ];

  const style = { backgroundColor: "lightgray", fontWeight: "bold" };

  const { width } = useResopnsive();
  const isSmallScreen = width < 767 || width < 1025;
  const navigate = useNavigate();
  const { shrinkSideBar, setShrinkSideBar } = useContext(SideBarContext);
  const { pathname } = useLocation();
  const navTitle = pathname.slice(1);

  return (
    <>
      <div className="fixed top-0 left-0 min-h-[100vh]   bg-white shadow-sm shadow-black/10 p-2 md:p-2">
        <div className="flex items-center justify-betwwen mb-10 mx-auto w-fit  ">
          <div className="flex items-center gap-2   ">
            {!shrinkSideBar ? (
              <PiUserBold size={isSmallScreen ? 30 : 25} />
            ) : null}
            {isSmallScreen || shrinkSideBar ? null : (
              <h1 className="text-xl font-bold">Admin Panel</h1>
            )}
          </div>
          <div>
            {isSmallScreen ? null : shrinkSideBar ? (
              <TbLayoutSidebarLeftExpand
                size={30}
                className="cursor-pointer mx-auto "
                onClick={() => setShrinkSideBar(!shrinkSideBar)}
              />
            ) : (
              <TbLayoutSidebarLeftCollapse
                size={30}
                className="cursor-pointer"
                onClick={() => setShrinkSideBar(!shrinkSideBar)}
              />
            )}
          </div>
        </div>
        <div className="md:pl-0 flex flex-col justify-between h-[calc(100vh-100px)] ">
          <div>
            {navs.map(({ page, icon }) => (
              <div
                key={page}
                className="flex items-center gap-2 py-2 md:py-4 px-2 md:px-4 rounded-md w-full cursor-pointer"
                style={navTitle === page ? style : null}
                onClick={() => {
                  navigate(`/${page}`);
                }}
              >
                {icon}
                {isSmallScreen || shrinkSideBar ? null : (
                  <h1 className="text-lg font-medium">{page}</h1>
                )}
              </div>
            ))}
          </div>
          <div className="mx-auto w-fit ">
            <div
              className="py-2 md:py-4 px-2 md:px-4 rounded-md  cursor-pointer "
              style={navTitle === "Settings" ? style : null}
            >
              <IoSettingsOutline
                size={25}
                onClick={() => {
                  navigate(`/Settings`);
                }}
              />
            </div>

            <div
              className="py-2 md:py-4 px-2 md:px-4 rounded-md  cursor-pointer "
              style={navTitle === "Login" ? style : null}
            >
              <MdLogout
                size={25}
                className=" cursor-pointer"
                style={navTitle === "Login" ? style : null}
                onClick={() => {
                  navigate(`/Login`);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
