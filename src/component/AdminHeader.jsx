import avt from "../assets/imgs/r-avt1.jpeg";

//icons
import { FaRegBell } from "react-icons/fa";

export default function AdminHeader() {
  return (
    <>
      <div className="pl-[80px] md:pl-[316px] flex items-center justify-between bg-white p-2 shadow-sm shadow-black/10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Dashboard</h2>
          <p className="text-gray-600 font-semibold text-xs">
            Overview of your store's performance
          </p>
        </div>
        <div className="flex items-center gap-4">
          <FaRegBell size={25} />
          <img
            src={avt}
            className="w-[35px] rounded-full border-2 border-black"
          />
        </div>
      </div>
    </>
  );
}
