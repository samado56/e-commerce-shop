import { useNavigate } from "react-router";
import product1 from "../assets/imgs/product1.jpg";
import product3 from "../assets/imgs/product3.jpg";
import product4 from "../assets/imgs/product4.jpg";
import product6 from "../assets/imgs/product6.jpg";
import product7 from "../assets/imgs/product7.jpg";

//review avatars
import ravt1 from "../assets/imgs/r-avt1.jpeg";
import ravt2 from "../assets/imgs/r-avt2.jpg";
import ravt3 from "../assets/imgs/r-avt3.jpg";

//icons
import { IoIosStar } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

//components
import Footer from "../component/Footer";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home flex items-center justify-center bg-center h-[100vh]  ">
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
              <button
                onClick={() => navigate("/products")}
                className="bg-black text-white text-lg md:text-2xl shadow-sm shadow-black font-medium px-6 py-4 rounded-lg mr-8 border-none cursor-pointer"
              >
                Shop Now
              </button>
              <button className="bg-white text-black text-lg md:text-2xl shadow-sm shadow-black font-medium px-6 py-4 rounded-lg border-none cursor-pointer">
                New Arrivals
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== start featured products =============== */}
      <div className="featured-products py-[60px]">
        <h1 className="text-center text-4xl md:text-5xl  font-bold mb-10">
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
      {/* ========== end featured products =============== */}
      {/* ============ start deals ============ */}
      <div className="deal py-[60px] flex justify-center  ">
        <div className="container">
          <h1 className="font-bold text-4xl md:text-5xl  text-center mb-3">
            Deal of the Day
          </h1>
          <p className="text-center text-xl md:text-2xl mb-10 font-light">
            Don't miss out on our exclusive deal. Limited time offer!
          </p>
          <div className="sepacial  flex flex-col md:flex-row md:justify-between items-center gap-10">
            <img src={product7} className="  md:w-[400px] rounded-xl" />
            <div className="text-center md:w-[60%]">
              <h1 className="text-3xl md:text-4xl font-medium  mb-5">
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
            <li className="bg-black  text-center w-fit p-3 md:p-4 rounded-md min-w-[90px] md:min-w-[121px]">
              <span className="block text-white text-3xl md:text-4xl font-bold ">
                23
              </span>
              <span className="text-gray-300 text-xl md:text-2xl ">Hours</span>
            </li>

            <li className="bg-black  text-center w-fit p-3 md:p-4 rounded-md min-w-[90px] md:min-w-[121px]">
              <span className="block text-white text-3xl md:text-4xl font-bold ">
                59
              </span>
              <span className="text-gray-300 text-xl md:text-2xl ">
                Minutes
              </span>
            </li>

            <li className="bg-black  text-center w-fit p-3 md:p-4 rounded-md min-w-[90px] md:min-w-[121px]">
              <span className="block text-white text-3xl md:text-4xl font-bold ">
                46
              </span>
              <span className="text-gray-300 text-xl md:text-2xl ">
                Seconds
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* ============ end deals ============ */}
      {/* ============= start reviews ============ */}
      <div className="reviews py-10 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-10">
          What Our Customers Say
        </h1>
        <div className="container">
          <div className="wrapeer grid gap-5 md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] py-5 ">
            <div className="rev-card p-4 shadow-md shadow-black/20 rounded-lg bg-white">
              <div className="top flex items-center gap-5 mb-5">
                <img src={ravt2} alt="" className="rounded-full w-[40px]" />
                <div>
                  <span className="font-medium text-xl">Sophia Carter</span>
                  <div className="icons flex gap-1">
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-600">
                "Abosolutely love the quality and style of the clothes! The fit
                is perfect, and i always receive comliments when i wear then. "
              </p>
            </div>
            <div className="rev-card p-4 shadow-md shadow-black/20 rounded-lg bg-white">
              <div className="top flex items-center gap-5 mb-5">
                <img src={ravt1} alt="" className="rounded-full w-[40px]" />
                <div>
                  <span className="font-medium text-xl">Ethan Bennett</span>
                  <div className="icons flex gap-1">
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gray" />
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-600">
                "Great selection of products and fast shipping. The customer
                service was also very helpful when I had a question."
              </p>
            </div>

            <div className="rev-card p-4 shadow-md shadow-black/20 rounded-lg bg-white">
              <div className="top flex items-center gap-5 mb-5">
                <img src={ravt3} alt="" className="rounded-full w-[40px]" />
                <div>
                  <span className="font-medium text-xl">Olivia Hayes</span>
                  <div className="icons flex gap-1">
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                    <IoIosStar size={20} color="gold" />
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-600">
                "The designs are so unique and trendy. I always find something
                new and exciting to add to my wardrobe. Highly recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ============= end reviews ============ */}
      {/* ============= start form=============  */}
      <div className="form py-10">
        <div className="container">
          <h1 className="text-center  text-3xl md:text-4xl font-bold mb-3">
            Stay in the Loop
          </h1>
          <p className="text-center text-lg md:text-xl ">
            Get 10% off your first order and be the first to know about new
            arrivals and exclusive offers.
          </p>
          <div className="mx-auto w-fit mt-10">
            <div className="flex">
              <input
                className="border-1 border-gray-400/60 rounded-md  py-1 md:py-2  px-4 md:px-6 w-[240px] md:w-[400px]"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="ml-4 py:1 md:py-2  px-2 md:px-3 bg-black text-white text-lg md:text-xl font-medium rounded-md cursor-pointer">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 mt-5  justify-center">
              <input type="checkbox" />
              <p className=" text-sm md:text-lg w-fit">
                I agree to receive exclusive offers and promotions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ============= end form=============  */}
      <Footer />;
    </>
  );
}
