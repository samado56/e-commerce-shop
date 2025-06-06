import logo from "../assets/imgs/logo.png";

//icons
import { HiOutlineHeart } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState();

  const navigate = useNavigate();

  window.onresize = function () {
    const clientWidth = window.outerWidth;
    console.log(deviceWidth);
    setDeviceWidth(clientWidth);
  };

  const linkStyle =
    "relative  before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-[4px] before:bg-black before:transition-all before:duration-300 hover:before:w-full";

  const iconsStyle =
    "cursor-pointer transition-all duration-300 hover:text-gray-400";

  return (
    <>
      {deviceWidth < 450 ? (
        /* ****** Start Mobile ******* */
        <div className="header  border-b-1 border-gray-200 fixed w-full bg-white z-999">
          <div className="flex items-center justify-between pr-2 border-b-1 border-black/20">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="logo "
            >
              <img
                src={logo}
                alt="stylehub"
                className="w-[50px] cursor-pointer "
              />
            </div>
            <div className="flex items-center gap-2">
              <BsPerson size={25} className="cursor-pointer" />

              <RxHamburgerMenu
                size={30}
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          </div>
          {showMenu ? (
            <ul className="absolute top-25 left-0 flex flex-col items-center justify-center gap-4 text-xl font-medium cursor-pointer bg-black/50 w-full z-99 text-white py-5">
              <li>
                <a href="#men" className={linkStyle}>
                  Men
                </a>
              </li>
              <li>
                <a href="#women" className={linkStyle}>
                  Women
                </a>
              </li>
              <li>
                <a href="#kids" className={linkStyle}>
                  Kids
                </a>
              </li>
              <li>
                <a href="#sale" className={linkStyle}>
                  Sale
                </a>
              </li>
            </ul>
          ) : null}

          <div className="items flex items-center justify-between p-2">
            <div className="search flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className=" border-b-2 border-gray-400 px-4 py-1 outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              {search.length > 0 ? (
                ""
              ) : (
                <IoIosSearch className="-ml-6" size={20} />
              )}
            </div>
            <div className="icons flex items-center gap-2 px-2">
              <span
                onClick={() => {
                  navigate("/cart");
                }}
                className=" shopping-bag"
              >
                <HiOutlineShoppingBag size={20} className="cursor-pointer" />
              </span>
              <span className="favorite">
                <HiOutlineHeart
                  size={20}
                  className=" cursor-pointer hover:bg-gray-300"
                />
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ****** End Mobile ******* */

        /* ======= start Web ========= */
        <div className="header flex items-center justify-between px-5 border-b-1 border-gray-200 fixed w-full bg-white z-99">
          <div
            className="logo w-[200px]"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={logo}
              alt="stylehub"
              className="w-[60px] cursor-pointer"
            />
          </div>
          <ul className="flex items-center justify-center gap-8 text-xl font-medium cursor-pointer  flex-1">
            <li>
              <a href="#men" className={linkStyle}>
                Men
              </a>
            </li>
            <li>
              <a href="#women" className={linkStyle}>
                Women
              </a>
            </li>
            <li>
              <a href="#kids" className={linkStyle}>
                Kids
              </a>
            </li>
            <li>
              <a href="#sale" className={linkStyle}>
                Sale
              </a>
            </li>
          </ul>
          <div className="items flex items-center gap-4 px-5">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className=" border-b-2 border-gray-400 px-4 py-1 outline-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {search.length > 0 ? (
                ""
              ) : (
                <IoIosSearch className="absolute top-2 right-1" size={20} />
              )}
            </div>

            <span
              onClick={() => {
                navigate("/cart");
              }}
              className=" shopping-bag"
            >
              <HiOutlineShoppingBag size={25} className={iconsStyle} />
            </span>
            <span className="favorite">
              <HiOutlineHeart size={25} className={iconsStyle} />
            </span>
            <BsPerson size={30} className={iconsStyle} />
          </div>
        </div>

        /* ======= End Web ========= */
      )}
    </>
  );
}
