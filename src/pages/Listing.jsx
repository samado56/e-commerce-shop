import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { LuGrid2X2 } from "react-icons/lu";

export default function Listing() {
  return (
    <>
      <div className="pt-[80px] flex gap-2">
        <div className="fliter h-[100vh] w-[350px] border-r-1 border-black/20  px-6">
          <h1 className="text-2xl font-bold">Filters</h1>
          <div className="mt-6">
            <p className="text-xl font-medium ">Price Range</p>
            <input type="range" />
          </div>
          <div className="mt-6">
            <p className="text-xl font-medium ">Color</p>
            <ul className="flex items-center gap-2 py-2 cursor-pointer">
              <li className="w-[50px] h-[50px] bg-amber-800 rounded-full border-3 border-gray-400"></li>
              <li className="w-[50px] h-[50px] bg-green-400 rounded-full"></li>
              <li className="w-[50px] h-[50px] bg-red-500 rounded-full"></li>
              <li className="w-[50px] h-[50px] bg-yellow-500 rounded-full"></li>
              <li className="w-[50px] h-[50px] bg-cyan-800 rounded-full"></li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-xl font-medium ">Rating</p>
            <ul className="flex flex-wrap items-center gap-2 py-2 cursor-pointer">
              <li className="border-1 border-black/20 p-4 w-fit rounded-lg font-[500] text-gray-600">
                1 Stars
              </li>
              <li className="border-1 border-black/20 p-4 w-fit rounded-lg font-[500] text-gray-600">
                2 Stars
              </li>{" "}
              <li className="border-1 border-black/20 p-4 w-fit rounded-lg font-[500] text-gray-600">
                3 Stars
              </li>{" "}
              <li className="border-1 border-black/20 p-4 w-fit rounded-lg font-[500] text-gray-600">
                4 Stars
              </li>
              <li className="border-1 border-black/20 p-4 w-fit rounded-lg font-[500] text-gray-600">
                5 Stars
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <button className="text-xl font-medium py-2 px-3 bg-gray-300 rounded-md">
              Clear
            </button>
            <button className=" text-xl text-white font-medium py-2 px-3 bg-black rounded-md">
              Apply
            </button>
          </div>
        </div>
        <div className="listing w-full px-4">
          <div className="text-xl text-gray-400">
            Home / Men / Footwear / <span className="text-black">Sneakers</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2  ">
              <IoMdMenu size={30} className="cursor-pointer" />
              <LuGrid2X2 size={30} className="cursor-pointer" />
            </div>

            <div className="flex items-center  bg-black text-white w-fit py-1 px-3 rounded-md cursor-pointer">
              <IoMdArrowDropdown size={30} />
              <p className="text-lg font-medium">Sort</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
