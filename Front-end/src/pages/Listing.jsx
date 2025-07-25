import { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import useResopnsive from "../hooks/useResponsive";

//icons
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { LuGrid2X2 } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { useNavigate } from "react-router";

export default function Listing() {
  const { products } = useContext(GlobalContext);

  const [showFilters, setShowFilters] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [activeFavorite, setActiveFavorite] = useState([]);

  const navigate = useNavigate();

  const { width } = useResopnsive();
  let pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  width < 767 ? pagination.splice(5) : null;

  return (
    <>
      <div className="pt-[80px] flex gap-2">
        {width < 767 ? (
          <>
            <div
              className="fixed top-1/2 -translate-y-1/2 left-0 shadow-md shadow-black/30 px-4 py-1 flex gap-2 rounded-tr-xl rounded-br-xl bg-black text-white "
              style={{
                textOrientation: "sideways",
                writingMode: "vertical-lr",
                marginLeft: showFilters ? "250px" : null,
              }}
              onClick={() => setShowFilters(!showFilters)}
            >
              <p className=" text-2xl font-medium"> Filters</p>
              {showFilters ? (
                <IoIosArrowBack size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </div>
            {showFilters ? (
              <div className="fliter h-[100vh]  w-[250px] border-r-1 border-black/20 px-3 md:px-6 fixed top-0 left-0 bg-white ">
                <div className="mt-[100px] py-6">
                  <h1 className="text-2xl font-bold">Filters</h1>
                  <div className="mt-6">
                    <p className="text-xl font-medium ">Price Range</p>
                    <input type="range" />
                  </div>
                  <div className="mt-6">
                    <p className="text-xl font-medium ">Color</p>
                    <ul className="flex items-center gap-2 py-2 cursor-pointer">
                      <li className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-amber-800 rounded-full border-3 border-gray-400"></li>
                      <li className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-green-400 rounded-full"></li>
                      <li className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-red-500 rounded-full"></li>
                      <li className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-yellow-500 rounded-full"></li>
                      <li className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-cyan-800 rounded-full"></li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-xl font-medium ">Rating</p>
                    <ul className="flex flex-wrap items-center gap-2 py-2 cursor-pointer">
                      <li className="border-1 border-black/20 p-2 md:p-4 w-fit rounded-lg font-[500] text-gray-600">
                        1 Stars
                      </li>
                      <li className="border-1 border-black/20 p-2 md:p-4 w-fit rounded-lg font-[500] text-gray-600">
                        2 Stars
                      </li>{" "}
                      <li className="border-1 border-black/20 p-2 md:p-4 w-fit rounded-lg font-[500] text-gray-600">
                        3 Stars
                      </li>{" "}
                      <li className="border-1 border-black/20 p-2 md:p-4 w-fit rounded-lg font-[500] text-gray-600">
                        4 Stars
                      </li>
                      <li className="border-1 border-black/20 p-2 md:p-4 w-fit rounded-lg font-[500] text-gray-600">
                        5 Stars
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-between ">
                    <button className="text-md md:text-xl font-medium py-2 px-3 bg-gray-300 rounded-md">
                      Clear
                    </button>
                    <button className="text-md md:text-xl text-white font-medium py-2 px-3 bg-black rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <div className="fliter h-[100vh] w-[300px] border-r-1 border-black/20 px-3 md:px-6 fixed top-0 left-0 bg-white ">
            <div className="mt-[88px] py-6">
              <h1 className="text-2xl font-bold">Filters</h1>
              <div className="mt-6">
                <p className="text-xl font-medium ">Price Range</p>
                <input type="range" />
              </div>
              <div className="mt-6">
                <p className="text-xl font-medium ">Color</p>
                <ul className="flex items-center gap-2 py-2 cursor-pointer">
                  <li className="w-[40px] h-[40px] bg-amber-800 rounded-full border-3 border-gray-400"></li>
                  <li className="w-[40px] h-[40px] bg-green-400 rounded-full"></li>
                  <li className="w-[40px] h-[40px] bg-red-500 rounded-full"></li>
                  <li className="w-[40px] h-[40px] bg-yellow-500 rounded-full"></li>
                  <li className="w-[40px] h-[40px] bg-cyan-800 rounded-full"></li>
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-xl font-medium ">Rating</p>
                <ul className="flex flex-wrap items-center gap-2 py-2 cursor-pointer">
                  <li className="border-1 border-black/20 p-3 w-fit rounded-lg font-[500] text-gray-600">
                    1 Stars
                  </li>
                  <li className="border-1 border-black/20 p-3 w-fit rounded-lg font-[500] text-gray-600">
                    2 Stars
                  </li>{" "}
                  <li className="border-1 border-black/20 p-3 w-fit rounded-lg font-[500] text-gray-600">
                    3 Stars
                  </li>{" "}
                  <li className="border-1 border-black/20 p-3 w-fit rounded-lg font-[500] text-gray-600">
                    4 Stars
                  </li>
                  <li className="border-1 border-black/20 p-3 w-fit rounded-lg font-[500] text-gray-600">
                    5 Stars
                  </li>
                </ul>
              </div>
              <div className="flex justify-between ">
                <button className="text-xl font-medium py-2 px-3 bg-gray-300 rounded-md">
                  Clear
                </button>
                <button className="text-xl text-white font-medium py-2 px-3 bg-black rounded-md">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="listing w-full md:w-[calc(100vw-300px)] md:ml-[300px] px-4">
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
          <div className="wrapper grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 mt-5">
            {products &&
              products.map(
                ({ title, _id, price, image}, index) => {
                  return (
                    <div
                      key={index}
                      className="product-card  relative shadow-md shadow-black/20 rounded-md whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                      onClick={() => navigate(`/product/${_id}`)}
                    >
                      <span className="absolute top-3 right-3">
                        {activeFavorite.includes(_id) ? (
                          <HiHeart
                            size={20}
                            onClick={() => {
                              const unFav = activeFavorite.filter(
                                (fav) => fav !== _id
                              );
                              setActiveFavorite(unFav);
                            }}
                          />
                        ) : (
                          <HiOutlineHeart
                            size={20}
                            onClick={() =>
                              setActiveFavorite([...activeFavorite, _id])
                            }
                          />
                        )}
                      </span>
                      <img src={image} alt="" />
                      <div className="p-2">
                        <h1 className="text-lg font-medium truncate ">
                          {title}
                        </h1>
                        <p className="text-gray-400 font-[500]">${price}</p>
                        <span className="flex items-center gap-1">
                          <IoIosStar size={20} color="gold" />
                          <span className="text-gray-600">
                            {/* {rating}({reviews.length}) */}
                          </span>
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          <div className="pagination block">
            <ul className="flex justify-center items-center gap-2 py-8 text-lg font-[500] text-gray-400">
              <IoIosArrowBack
                size={20}
                className="cursor-pointer rounded-full h-[40px] w-[40px]  transisition-all duration-300 hover:bg-gray-400/20"
                style={{ padding: "10px" }}
              />
              {pagination.map((page) => (
                <li
                  key={page}
                  className="cursor-pointer rounded-full px-[16px] py-[6px]"
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
    </>
  );
}
