import product1 from "../assets/imgs/product1.jpg";
import product2 from "../assets/imgs/product2.jpg";
import product3 from "../assets/imgs/product3.jpg";
import product4 from "../assets/imgs/product4.jpg";
import product5 from "../assets/imgs/product5.jpg";
import product6 from "../assets/imgs/product6.jpg";
import product7 from "../assets/imgs/product7.jpg";

//icons
import { IoIosStar } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className="home flex items-center justify-center bg-center h-[100vh] w-[100vw] ">
        <div className="banner w-fit text-center mt-[84px] md:mt-[61px]  ">
          <img src="b" alt="" />
          <div className="text">
            <h1 className="font-bold text-4xl md:text-7xl text-white mb-5">
              Elecate Your Style
            </h1>
            <p className=" text-lg md:text-3xl text-white font-light">
              Discover the latest trends and timeless classics in fashion and
              home decor.
            </p>
            <div className="btn mt-10">
              <button className="bg-black text-white text-lg md:text-2xl shadow-sm shadow-black font-medium px-6 py-4 rounded-lg mr-8 border-none cursor-pointer">
                Shop Now
              </button>
              <button className="bg-white text-black text-lg md:text-2xl shadow-sm shadow-black font-medium px-6 py-4 rounded-lg border-none cursor-pointer">
                New Arrivals
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-products py-[60px]">
        <h1 className="text-center text-5xl  font-bold mb-10">
          Featured Products
        </h1>
        <div className="container ">
          <div className="wrapper grid gap-5 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
            <div className="card  relative shadow-md shadow-black/20 rounded-xl overflow-hidden">
              <span className="badge absolute bg-amber-300 rounded-2xl py-1 px-3 top-2 left-2 font-medium">
                New
              </span>
              <img src={product1} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>
            <div className="card  relative shadow-md shadow-black/20 rounded-xl overflow-hidden">
              <span className="badge absolute bg-red-500 text-white rounded-2xl py-1 px-3 top-2 left-2 font-medium">
                -20%
              </span>
              <img src={product3} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>{" "}
            <div className="card  relative shadow-md shadow-black/20 rounded-xl overflow-hidden">
              <span className="badge absolute bg-green-400 text-white rounded-2xl py-1 px-3 top-2 left-2 font-medium">
                best seller
              </span>
              <img src={product4} />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>{" "}
            <div className="card  relative shadow-md shadow-black/20 rounded-xl overflow-hidden">
              <img src={product6} className="h-[400px] w-full" />
              <div className="info py-4 px-2">
                <h2 className="title font-bold text-xl mb-2">
                  Elegant Evening dress
                </h2>
                <p className="price text-lg  ">$149.99</p>
                <span className="reviews flex items-center">
                  <IoIosStar size={20} color="gold" />
                  <span className="ml-2 text-md  text-gray-500"> 4.9(120)</span>
                </span>
              </div>
            </div>{" "}
          </div>
          <div className="swap flex items-center  justify-center mt-10 gap-10 ">
            <IoIosArrowDropleft size={50} className="cursor-pointer" />
            <IoIosArrowDropright size={50} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="deal py-[60px] flex justify-center h-[100vh] ">
        <div className="container">
          <h1 className="font-bold text-5xl  text-center mb-3">
            Deal of the Day
          </h1>
          <p className="text-center text-2xl mb-10 font-light">
            Don't miss out on our exclusive deal. Limited time offer!
          </p>
          <div className="sepacial  flex flex-col md:flex-row md:justify-between items-center gap-10">
            <img src={product7} className="  md:w-[400px] rounded-xl" />
            <div className="text-center md:w-[60%]">
              <h1 className="text-4xl font-medium  mb-5">
                Premium Leather Jacket
              </h1>
              <p className="text-xl   mb-8">
                Crafted from genuine leather, this jacket is a timeless piece
                for any wardrobe. Get it now at a special price!
              </p>
              <h1 className="text-3xl font-bold">
                $199.99{" "}
                <span className="font-normal  text-gray-400 line-through">
                  $249.99
                </span>
              </h1>
              <button className="bg-black text-white text-2xl cursor-pointer font-medium py-3 px-4 rounded-lg mt-10">
                Grab the Deal
              </button>
            </div>
          </div>
          <ul className="flex gap-5 mx-auto  w-fit mt-10 py-10">
            <li className="bg-black  text-center w-fit p-3 md:p-4 rounded-md min-w-[100px] md:min-w-[121px]">
              <span className="block text-white text-3xl md:text-4xl font-bold ">
                23
              </span>
              <span className="text-gray-300 text-2xl ">Hours</span>
            </li>

            <li className="bg-black  text-center w-fit p-3 md:p-4 rounded-md min-w-[100px] md:min-w-[121px]">
              <span className="block text-white text-3xl md:text-4xl font-bold ">
                59
              </span>
              <span className="text-gray-300 text-2xl ">Minutes</span>
            </li>

            <li className="bg-black  text-center w-fit p-3 md:p-4 rounded-md min-w-[100px] md:min-w-[121px]">
              <span className="block text-white text-3xl md:text-4xl font-bold ">
                46
              </span>
              <span className="text-gray-300 text-2xl ">Seconds</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
