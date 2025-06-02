import logo from "../assets/imgs/logo.png";

//icons
// import { RxAvatar } from "react-icons/rx";
// import { AiFillShopping } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Header() {
  return (
    <>
      <div className="header flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="stylehub" className="w-[100px]" />
        </div>
        <ul className="flex items-center gap-2">
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
        <div className="items flex items-center gap-2">
          <input type="search" placeholder="Search..." />
          <IoPersonOutline />
          <HiOutlineShoppingBag />
          <FaRegHeart />
        </div>
      </div>
    </>
  );
}
