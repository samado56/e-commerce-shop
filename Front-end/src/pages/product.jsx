import { useState, useContext, useEffect } from "react";
import pro from "../assets/imgs/product1.jpg";
import avt from "../assets/imgs/r-avt2.jpg";

//icons
import { IoIosStar } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

//components
import Footer from "../component/Footer";

//routing
import { useNavigate } from "react-router";

//context
import { ProductContext } from "../context/productContext";
import { useCart } from "../context/Cart/CartContext";

import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  const [activeSize, setActiveSize] = useState("XS");
  const [activeColor, setActiveColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [thumbnail, setThumbnail] = useState("");

  const navigate = useNavigate();
  const { addItemToCart, updateItemInCart } = useCart();

  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = ["red", "gold", "green"];

  const { oneProduct, getSingleProduct } = useContext(ProductContext);

  const handleQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      return;
    }
    updateItemInCart(productId, quantity);
  };

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  return (
    <>
      <div className="product-page pt-[88px] md:pt-[61px] bg-gray-300/10">
        <div className="container">
          <div className="text-lg md:text-xl text-gray-400 my-5 md:px-10">
            Home / Men / Footwear / <span className="text-black">Sneakers</span>
          </div>

          <div className="details flex flex-col md:flex-row items-start gap-10 mt-4 md:mt-8 md:px-10 pb-10  ">
            <div className="imgs  w-full md:w-[400px]">
              <img
                src={`data:image/webp;base64,${
                  thumbnail === "" ? oneProduct.thumbnail : thumbnail
                }`}
                className="w-full rounded-xl shadow-md shadow-black/20"
              />
              <div className="flex items-center  gap-5 mt-4 ">
                {oneProduct?.images?.map((img, index) => (
                  <img
                    key={index}
                    src={`data:image/webp;base64,${img}`}
                    className="w-[70px] md:w-[80px]"
                    onClick={() => setThumbnail(img)}
                  />
                ))}
              </div>
            </div>
            <div className="description flex-1/2 ">
              <h1 className="text-3xl font-bold">{oneProduct.title}</h1>
              <p>Item No. 12345</p>
              <h1 className="text-2xl font-bold mt-6">${oneProduct.price}</h1>
              <p className="mt-10 text-xl">
                A charming midi dress featuring a vibrant floral print, perfect
                for any occasion. Made from lightweight, breathable fabric for
                ultimate comfort and style.A charming midi dress featuring a
                vibrant floral print, perfect for any occasion. Made from
                lightweight, breathable fabric for ultimate comfort and style.
              </p>
              <div className="mt-6">
                <p className="text-xl font-medium ">Size</p>
                <ul className="flex flex-wrap items-center gap-2 py-2 cursor-pointer text-center">
                  {sizes.map((size, index) => (
                    <li
                      onClick={() => setActiveSize(size)}
                      className="border-1 border-black/20 p-2  md:py-4 min-w-[54px] w-fit rounded-lg font-[500] text-gray-600 bg-white"
                      style={{
                        border: activeSize === size ? "2px solid black" : null,
                        fontWeight: activeSize === size ? "bold" : null,
                      }}
                      key={index}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <p className="text-xl font-medium ">Color</p>
                <ul className="flex items-center gap-2 py-2 cursor-pointer">
                  {colors.map((color, index) => (
                    <li
                      key={index}
                      style={{
                        backgroundColor: color,
                        border:
                          activeColor === color ? "2px solid black" : null,
                      }}
                      className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]  rounded-full"
                      onClick={() => setActiveColor(color)}
                    ></li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <p className="text-xl font-medium ">Quantity</p>
                <FaMinus
                  size={20}
                  className="cursor-pointer"
                  onClick={() =>
                    handleQuantity(setQuantity((Prev) => +Prev - 1))
                  }
                />
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="no-spinner border-2 border-gray-400/30 py-2 px-3  rounded-md w-[50px]  font-medium bg-white text-black focus:border-black"
                />
                <FaPlus
                  size={20}
                  className="cursor-pointer"
                  onClick={() =>
                    handleQuantity(setQuantity((Prev) => +Prev + 1))
                  }
                />
              </div>
              <div className="mt-8 flex items-center gap-5">
                <button
                  onClick={() => addItemToCart(id, quantity)}
                  className="px-6 py-2 font-medium text-white bg-black rounded-md cursor-pointer text-xl flex-1/2"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className="px-6 py-2 font-medium  bg-gray-400/10 rounded-md cursor-pointer text-xl flex-1/2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="reviews border-t-1 border-gray-600/30 py-4 md:px-10">
            <h1 className="text-3xl font-bold">Customer Reviews</h1>
            <div className="flex items-center align-center flex-col md:flex-row gap-4 md:gap-10 py-5">
              <div className="left text-center">
                <h1 className="text-6xl font-bold">4.5</h1>
                <div className="flex items-center  justify-center mt-2">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                </div>
                <p className="text-gray-600 text-lg  mt-2">
                  Based on 150 reviews
                </p>
              </div>
              <div className="right">
                <div className="flex items-center gap-4 mb-1 ">
                  5 start
                  <div className="relative w-[250px] md:w-[350px] h-[10px] bg-gray-300 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:w-[90%] before:h-full before:bg-black before:rounded-xl "></div>
                  <span className="text-gray-500">90%</span>
                </div>
                <div className="flex items-center gap-4 mb-1">
                  4 start
                  <div className="relative w-[250px] md:w-[350px] h-[10px] bg-gray-300 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:w-[80%] before:h-full before:bg-black before:rounded-xl "></div>
                  <span className="text-gray-500">80%</span>
                </div>
                <div className="flex items-center gap-4 mb-1">
                  3 start
                  <div className="relative w-[250px] md:w-[350px] h-[10px] bg-gray-300 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:w-[60%] before:h-full before:bg-black before:rounded-xl "></div>
                  <span className="text-gray-500">60%</span>
                </div>
                <div className="flex items-center gap-4 mb-1">
                  2 start
                  <div className="relative w-[250px] md:w-[350px] h-[10px] bg-gray-300 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:w-[30%] before:h-full before:bg-black before:rounded-xl "></div>
                  <span className="text-gray-500">30%</span>
                </div>
                <div className="flex items-center gap-4">
                  1 start
                  <div className="relative w-[250px] md:w-[350px] h-[10px] bg-gray-300 rounded-xl overflow-hidden before:absolute before:top-0 before:left-0 before:w-[10%] before:h-full before:bg-black before:rounded-xl "></div>
                  <span className="text-gray-500">10%</span>
                </div>
              </div>
            </div>
            <div className="reviewer py-5 border-b-2 border-gray-400/20">
              <div className="flex items-center gap-4">
                <img src={avt} className="w-[50px] rounded-full" />
                <div>
                  <h4 className="text-xl font-medium">Sophia Carter</h4>
                  <p className="text-lg text-gray-600 font-[400]">
                    2 months ago
                  </p>
                </div>
              </div>
              <div className="flex items-center  mt-4">
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
              </div>
              <p className="text-xl mt-2">
                Absolutely love this dress! The fit is perfect, and the floral
                print is even more beautiful in person. I've received so many
                compliments every time I wear it.
              </p>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-lg">
                <SlLike /> <span>25 Helpfull</span>
              </div>
            </div>
            <div className="reviewer py-5 border-b-2 border-gray-400/20">
              <div className="flex items-center gap-4">
                <img src={avt} className="w-[50px] rounded-full" />
                <div>
                  <h4 className="text-xl font-medium">Olivia Bennett</h4>
                  <p className="text-lg text-gray-600 font-[400]">
                    3 months ago
                  </p>
                </div>
              </div>
              <div className="flex items-center  mt-4">
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
              </div>
              <p className="text-xl mt-2">
                The dress is lovely and fits well. The fabric is comfortable,
                and the print is very pretty. However, the colors are slightly
                less vibrant than they appear online.
              </p>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-lg">
                <SlLike /> <span>18 Helpfull</span>
              </div>
            </div>
            <div className="reviewer py-5 border-b-2 border-gray-400/20">
              <div className="flex items-center gap-4">
                <img src={avt} className="w-[50px] rounded-full" />
                <div>
                  <h4 className="text-xl font-medium">Sophia</h4>
                  <p className="text-lg text-gray-600 font-[400]">
                    2 months ago
                  </p>
                </div>
              </div>
              <div className="flex items-center  mt-4">
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
                <IoIosStar size={25} />
              </div>
              <p className="text-xl mt-2">
                Absolutely love this dress! The fit is perfect, and the floral
                print is even more beautiful in person. I've received so many
                compliments every time I wear it.
              </p>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-lg">
                <SlLike /> <span>25 Helpfull</span>
              </div>
            </div>
            <div className="related-products py-5">
              <h1 className="text-3xl font-bold">Related Products</h1>
              <div className="wrapper grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 mt-6">
                <div className="card">
                  <img src={pro} />
                  <h2 className="text-lg font-medium mt-2">
                    Summer Breeze Dress
                  </h2>
                  <p>$69.99</p>
                </div>
                <div className="card">
                  <img src={pro} />
                  <h2 className="text-lg font-medium mt-2">
                    Summer Breeze Dress
                  </h2>
                  <p>$69.99</p>
                </div>
                <div className="card">
                  <img src={pro} />
                  <h2 className="text-lg font-medium mt-2">
                    Summer Breeze Dress
                  </h2>
                  <p>$69.99</p>
                </div>
                <div className="card">
                  <img src={pro} />
                  <h2 className="text-lg font-medium mt-2">
                    Summer Breeze Dress
                  </h2>
                  <p>$69.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />;
    </>
  );
}
