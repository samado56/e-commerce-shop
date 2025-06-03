import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

//icons
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { LuGrid2X2 } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";

export default function Listing() {
  const { products } = useContext(GlobalContext);

  //   console.log(hey);
  return (
    <>
      <div className="pt-[80px] flex gap-2">
        <div className="fliter h-[100vh] mt-[80px] w-[300px] border-r-1 border-black/20  px-6 fixed top-0 left-0">
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
          <div className="flex justify-between ">
            <button className="text-xl font-medium py-2 px-3 bg-gray-300 rounded-md">
              Clear
            </button>
            <button className=" text-xl text-white font-medium py-2 px-3 bg-black rounded-md">
              Apply
            </button>
          </div>
        </div>
        <div className="listing w-[calc(100vw-300px)] ml-[300px] px-4">
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
          <div className="wrapper grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 mt-5">
            {products &&
              products.map(({ title, thumbnail, price, reviews, rating }) => {
                return (
                  <div className="product-card   shadow-md shadow-black/20 rounded-md whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer">
                    <img src={thumbnail} alt="" />
                    <div className="p-2">
                      <h1 className="text-lg font-medium truncate ">{title}</h1>
                      <p className="text-gray-400 font-[500]">${price}</p>
                      <span className="flex items-center gap-1">
                        <IoIosStar size={20} color="gold" />
                        <span className="text-gray-600">
                          {rating}({reviews.length})
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
